"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useDeferredValue, useEffect, useMemo, useRef, useState } from "react";

import { WhatsAppButton } from "@/components/site/whatsapp-button";
import { useApp } from "@/context/app-context";
import { pageHref, pageKeys, pageNames, type Locale } from "@/lib/i18n";
import { entriesFromDocument, search, type SearchEntry } from "@/lib/search";

const COPY: Record<
  Locale,
  {
    label: string;
    placeholder: string;
    close: string;
    loading: string;
    failed: string;
    tryLabel: string;
    suggestions: string[];
    none: (q: string) => string;
    noneHint: string;
    contact: string;
    corrected: string;
    count: (n: number) => string;
    keys: string;
  }
> = {
  en: {
    label: "Search the site",
    placeholder: "Search products, seasons, halal, shipping…",
    close: "Close search",
    loading: "Loading pages…",
    failed: "Search could not load the pages. Check your connection and try again.",
    tryLabel: "Try",
    suggestions: ["Avocado", "Halal beef", "Reefer", "Seasonality", "FOB", "Certificates", "Pineapple"],
    none: (q) => `No matches for “${q}”.`,
    noneHint: "Ask the trade desk instead. We reply within one working day.",
    contact: "Contact the trade desk",
    corrected: "Showing results for",
    count: (n) => `${n} result${n === 1 ? "" : "s"}`,
    keys: "↑ ↓ to move · Enter to open · Esc to close",
  },
  ar: {
    label: "البحث في الموقع",
    placeholder: "ابحثوا عن المنتجات والمواسم والحلال والشحن…",
    close: "إغلاق البحث",
    loading: "جارٍ تحميل الصفحات…",
    failed: "تعذّر تحميل الصفحات للبحث. تحققوا من الاتصال وحاولوا مرة أخرى.",
    tryLabel: "جرّبوا",
    suggestions: ["أفوكادو", "لحم حلال", "حاوية مبردة", "مواسم التوريد", "فوب", "الشهادات", "أناناس"],
    none: (q) => `لا توجد نتائج لـ «${q}».`,
    noneHint: "اسألوا مكتب التجارة، نرد خلال يوم عمل واحد.",
    contact: "التواصل مع مكتب التجارة",
    corrected: "عرض النتائج لـ",
    count: (n) => `${n} نتيجة`,
    keys: "↑ ↓ للتنقل · Enter للفتح · Esc للإغلاق",
  },
};

const MONO = "var(--font-jetbrains),monospace";
const KUFI = "var(--font-kufi),sans-serif";

// One index per language, built once per visit from the rendered pages.
const indexes = new Map<Locale, Promise<SearchEntry[]>>();
function loadIndex(lang: Locale) {
  let p = indexes.get(lang);
  if (!p) {
    p = Promise.all(
      pageKeys.map(async (key) => {
        const href = pageHref(lang, key);
        const res = await fetch(href, { headers: { Accept: "text/html" } });
        if (!res.ok) throw new Error(`${href}: ${res.status}`);
        const doc = new DOMParser().parseFromString(await res.text(), "text/html");
        return entriesFromDocument(doc, href, pageNames[lang][key]);
      }),
    ).then((pages) => pages.flat());
    p.catch(() => indexes.delete(lang));
    indexes.set(lang, p);
  }
  return p;
}

/** Warms the index (e.g. when the pointer reaches the search button). */
export function prefetchSearch(lang: Locale) {
  void loadIndex(lang).catch(() => {});
}

export function SearchDialog() {
  const { lang, searchOpen, openSearch, closeSearch } = useApp();
  const router = useRouter();
  const ar = lang === "ar";
  const c = COPY[lang];
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const [query, setQuery] = useState("");
  const [loaded, setLoaded] = useState<{ lang: Locale; entries: SearchEntry[] } | null>(null);
  const [failed, setFailed] = useState(false);
  const [active, setActive] = useState(0);
  const deferred = useDeferredValue(query);
  const entries = loaded?.lang === lang ? loaded.entries : null;

  // "/" or Ctrl/Cmd+K opens search from anywhere.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const typing = e.target instanceof HTMLElement && e.target.closest("input, textarea, select, [contenteditable]");
      if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || (e.key === "/" && !typing)) {
        e.preventDefault();
        openSearch();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [openSearch]);

  useEffect(() => {
    if (!searchOpen) return;
    let cancelled = false;
    loadIndex(lang)
      .then((list) => !cancelled && (setLoaded({ lang, entries: list }), setFailed(false)))
      .catch(() => !cancelled && setFailed(true));
    const root = document.documentElement;
    const previous = root.style.overflow;
    root.style.overflow = "hidden";
    requestAnimationFrame(() => inputRef.current?.select());
    return () => {
      cancelled = true;
      root.style.overflow = previous;
    };
  }, [searchOpen, lang]);

  const result = useMemo(() => (entries && deferred.trim() ? search(entries, deferred) : null), [entries, deferred]);
  const hits = result?.hits ?? [];

  useEffect(() => {
    listRef.current?.querySelector<HTMLElement>(`[data-hit="${active}"]`)?.scrollIntoView({ block: "nearest" });
  }, [active]);

  const go = (href: string) => {
    closeSearch();
    router.push(href);
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      e.preventDefault();
      closeSearch();
    } else if (e.key === "ArrowDown" && hits.length) {
      e.preventDefault();
      setActive((i) => (i + 1) % hits.length);
    } else if (e.key === "ArrowUp" && hits.length) {
      e.preventDefault();
      setActive((i) => (i - 1 + hits.length) % hits.length);
    } else if (e.key === "Enter" && hits[active]) {
      e.preventDefault();
      go(hits[active].entry.href);
    }
  };

  if (!searchOpen) return null;

  return (
    <div
      data-search=""
      role="dialog"
      aria-modal="true"
      aria-label={c.label}
      onKeyDown={onKeyDown}
      style={{ position: "fixed", inset: 0, zIndex: 100, ...(ar ? { fontFamily: KUFI } : {}) }}
    >
      <div
        onClick={closeSearch}
        aria-hidden="true"
        style={{ position: "absolute", inset: 0, background: "rgba(8,10,9,0.55)" }}
      />
      <div
        data-search-box=""
        dir={ar ? "rtl" : undefined}
        style={{
          position: "relative",
          margin: "min(9vh, 90px) auto 0",
          width: "min(860px, calc(100vw - 32px))",
          maxHeight: "min(78vh, 760px)",
          display: "flex",
          flexDirection: "column",
          background: "var(--paper)",
          color: "var(--ink)",
          border: "1px solid rgba(var(--ink-rgb),0.2)",
          boxShadow: "0 24px 60px rgba(0,0,0,0.25)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
            padding: "8px 10px 8px 20px",
            borderBottom: "1px solid rgba(var(--ink-rgb),0.16)",
            ...(ar ? { padding: "8px 20px 8px 10px" } : {}),
          }}
        >
          <SearchIcon size={22} />
          <input
            ref={inputRef}
            type="search"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setActive(0);
            }}
            placeholder={c.placeholder}
            aria-label={c.label}
            aria-controls="search-results"
            aria-activedescendant={hits[active] ? `hit-${active}` : undefined}
            autoComplete="off"
            spellCheck={false}
            enterKeyHint="search"
            style={{
              flex: 1,
              minWidth: 0,
              border: 0,
              outline: "none",
              background: "transparent",
              fontSize: "20px",
              padding: "14px 0",
              color: "var(--ink)",
            }}
          />
          <button
            type="button"
            onClick={closeSearch}
            aria-label={c.close}
            className="hover-accent"
            style={{
              width: "48px",
              height: "48px",
              display: "grid",
              placeItems: "center",
              border: 0,
              background: "transparent",
              color: "var(--ink)",
              cursor: "pointer",
              flex: "0 0 auto",
            }}
          >
            <svg viewBox="0 0 40 40" width="32" height="32" aria-hidden="true">
              <path d="M8 8 L32 32 M32 8 L8 32" stroke="currentColor" strokeWidth="1.1" fill="none" />
            </svg>
          </button>
        </div>

        <div style={{ overflowY: "auto", overscrollBehavior: "contain", padding: "6px 0 10px" }}>
          {failed ? (
            <p style={{ padding: "22px 20px", color: "var(--muted)" }}>{c.failed}</p>
          ) : !entries ? (
            <p
              style={{
                padding: "22px 20px",
                color: "var(--muted)",
                fontFamily: ar ? undefined : MONO,
                fontSize: "13px",
              }}
            >
              {c.loading}
            </p>
          ) : !query.trim() ? (
            <div style={{ padding: "18px 20px 14px" }}>
              <p
                style={{
                  fontSize: "11.5px",
                  letterSpacing: ar ? 0 : "0.12em",
                  color: "var(--muted)",
                  ...(ar ? {} : { fontFamily: MONO }),
                }}
              >
                {c.tryLabel}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "12px" }}>
                {c.suggestions.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => {
                      setQuery(s);
                      setActive(0);
                      inputRef.current?.focus();
                    }}
                    className="hover-accent-border"
                    style={{
                      border: "1px solid rgba(var(--ink-rgb),0.3)",
                      background: "transparent",
                      color: "var(--ink)",
                      padding: "8px 14px",
                      fontSize: "14px",
                      cursor: "pointer",
                    }}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          ) : !hits.length ? (
            <div style={{ padding: "22px 20px", display: "grid", gap: "12px" }}>
              <p style={{ fontSize: "16px", fontWeight: 600 }}>{c.none(query.trim())}</p>
              <p style={{ fontSize: "14.5px", color: "var(--muted)" }}>{c.noneHint}</p>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit,minmax(min(240px,100%),1fr))",
                  gap: "10px",
                  marginTop: "6px",
                }}
              >
                <Link
                  href={pageHref(lang, "contact")}
                  onClick={closeSearch}
                  className="hover-btn"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "15px 20px",
                    background: "var(--ink)",
                    color: "var(--bg)",
                    fontSize: "15px",
                    fontWeight: 500,
                  }}
                >
                  {c.contact}
                </Link>
                <WhatsAppButton lang={lang} style={{ padding: "15px 20px" }} />
              </div>
            </div>
          ) : (
            <>
              <p
                style={{
                  padding: "10px 20px 6px",
                  fontSize: "11.5px",
                  color: "var(--muted)",
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "12px",
                  flexWrap: "wrap",
                  ...(ar ? {} : { fontFamily: MONO }),
                }}
              >
                <span>
                  {c.count(hits.length)}
                  {result?.correctedTo && (
                    <>
                      {" · "}
                      {c.corrected} <strong style={{ color: "var(--ink)" }}>{result.correctedTo}</strong>
                    </>
                  )}
                </span>
                <span data-search-keys="">{c.keys}</span>
              </p>
              <ul id="search-results" ref={listRef} role="listbox" style={{ listStyle: "none", margin: 0, padding: 0 }}>
                {hits.map((hit, i) => (
                  <li key={hit.entry.href + i} id={`hit-${i}`} role="option" aria-selected={i === active} data-hit={i}>
                    <Link
                      href={hit.entry.href}
                      onClick={closeSearch}
                      onMouseMove={() => setActive(i)}
                      style={{
                        display: "block",
                        padding: "14px 20px",
                        borderTop: "1px solid rgba(var(--ink-rgb),0.1)",
                        background: i === active ? "var(--bg2)" : "transparent",
                        color: "var(--ink)",
                        borderInlineStart: `3px solid ${i === active ? "var(--accent)" : "transparent"}`,
                      }}
                    >
                      <span
                        style={{
                          display: "block",
                          fontSize: "11px",
                          letterSpacing: ar ? 0 : "0.1em",
                          color: "var(--ochre-deep)",
                          ...(ar ? {} : { fontFamily: MONO }),
                        }}
                      >
                        {hit.entry.page}
                      </span>
                      <span
                        style={{
                          display: "block",
                          fontSize: "16.5px",
                          fontWeight: 600,
                          marginTop: "4px",
                          lineHeight: 1.3,
                        }}
                      >
                        {hit.entry.title}
                      </span>
                      <span
                        style={{
                          display: "block",
                          fontSize: "14px",
                          lineHeight: ar ? 1.8 : 1.55,
                          color: "var(--muted)",
                          marginTop: "5px",
                        }}
                      >
                        {hit.snippet.map((part, k) =>
                          part.mark ? (
                            <mark
                              key={k}
                              style={{ background: "rgba(217,164,65,0.32)", color: "var(--ink)", padding: "0 1px" }}
                            >
                              {part.text}
                            </mark>
                          ) : (
                            <span key={k}>{part.text}</span>
                          ),
                        )}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export function SearchIcon({ size = 24 }: { size?: number }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.1"
      strokeLinecap="round"
      style={{ flex: "0 0 auto" }}
    >
      <circle cx="10.75" cy="10.75" r="7" />
      <path d="M16 16 L21.25 21.25" />
    </svg>
  );
}
