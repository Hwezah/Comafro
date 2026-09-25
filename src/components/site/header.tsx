"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { useApp } from "@/context/app-context";
import { MOBILE_MENU_QUERY } from "@/lib/contact";
import { pageHref, parsePath, type Locale, type PageKey } from "@/lib/i18n";

const MAIN_NAV: Record<Locale, [PageKey, string][]> = {
  en: [
    ["home", "Home"],
    ["about", "About"],
    ["services", "What we do"],
    ["products", "Products"],
    ["contact", "Contact"],
  ],
  ar: [
    ["home", "الرئيسية"],
    ["about", "عن الشركة"],
    ["services", "خدماتنا"],
    ["products", "المنتجات"],
    ["contact", "اتصل بنا"],
  ],
};

const BUYER_NAV: Record<Locale, [PageKey, string][]> = {
  en: [
    ["quality", "Quality & compliance"],
    ["calendar", "Seasonality"],
    ["sourcing", "Sourcing network"],
    ["resources", "Buyer resources"],
  ],
  ar: [
    ["quality", "الجودة والمطابقة"],
    ["calendar", "مواسم التوريد"],
    ["sourcing", "شبكة المزارعين"],
    ["resources", "موارد المشترين"],
  ],
};

const T = {
  en: { buyers: "FOR BUYERS", quote: "Request a quote", other: "العربية" },
  ar: { buyers: "للمشترين", quote: "طلب عرض سعر", other: "EN" },
};

const KUFI = "var(--font-kufi),sans-serif";
const MONO = "var(--font-jetbrains),monospace";
const PAD_X = "clamp(22px,5vw,80px)";

export function Header() {
  const { lang, menuOpen, toggleMenu, closeMenu, panelOpen, openPanel } = useApp();
  const pathname = usePathname();
  const { page } = parsePath(pathname);
  const ar = lang === "ar";
  const other: Locale = ar ? "en" : "ar";
  const t = T[lang];
  // Phones get the drop-down menu; tablets and desktops the contact side panel.
  const onBurger = () => (window.matchMedia(MOBILE_MENU_QUERY).matches ? toggleMenu() : openPanel());
  const underline = (key: PageKey) => `2px solid ${key === page ? "var(--accent)" : "transparent"}`;

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "var(--bg)",
        borderBottom: "1px solid rgba(var(--ink-rgb),0.16)",
      }}
    >
      <div
        data-hdrrow=""
        style={{
          maxWidth: "1440px",
          margin: "0 auto",
          padding: `10px ${PAD_X}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "clamp(14px,2.5vw,36px)",
          flexWrap: "wrap",
        }}
      >
        <div data-logorow="" style={{ display: "flex", alignItems: "center", gap: "14px", flex: "0 0 auto" }}>
          <Link
            href={pageHref(lang, "home")}
            data-logo=""
            style={{ display: "flex", alignItems: "center", gap: "11px" }}
          >
            <Image
              src="/assets/comafro-mark.png"
              alt="Comafro mark"
              width={179}
              height={184}
              priority
              style={{ display: "block", height: "44px", width: "auto", flex: "0 0 auto" }}
            />
            <span style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <span
                data-wordmark=""
                style={{ fontSize: "21px", fontWeight: 700, letterSpacing: "0.02em", lineHeight: 1 }}
              >
                COMAFRO
              </span>
              <span
                data-wordsub=""
                style={{
                  fontSize: "9.5px",
                  fontWeight: 300,
                  letterSpacing: "0.19em",
                  lineHeight: 1,
                  color: "var(--muted)",
                  marginTop: "5px",
                }}
              >
                GENERAL TRADING LTD
              </span>
            </span>
          </Link>
        </div>

        <div
          data-navctl=""
          style={{ display: "flex", alignItems: "center", gap: "14px", flex: "0 0 auto", order: 3, marginLeft: "auto" }}
        >
          {/* Equal-width columns keep the language switcher exactly the size of "Request a quote". */}
          <div
            style={{
              display: "grid",
              gridAutoFlow: "column",
              gridAutoColumns: "1fr",
              gap: "10px",
              alignSelf: "stretch",
            }}
          >
            <Link
              href={pathname.replace(/^\/(en|ar)(?=\/|$)/, `/${other}`)}
              onClick={closeMenu}
              data-langrow=""
              hrefLang={other}
              className="hover-accent-border"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minWidth: "64px",
                fontSize: ar ? "13px" : "13.5px",
                fontWeight: 500,
                lineHeight: 1.2,
                padding: "0 16px",
                border: "1px solid rgba(var(--ink-rgb),0.35)",
                color: "var(--ink)",
                letterSpacing: ar ? "0.08em" : undefined,
                fontFamily: ar ? MONO : KUFI,
              }}
            >
              {t.other}
            </Link>
            <Link
              href={pageHref(lang, "contact")}
              data-hdr-cta=""
              dir={ar ? "rtl" : undefined}
              className="hover-btn"
              style={{
                fontSize: ar ? "13.5px" : "14px",
                fontWeight: 500,
                background: "var(--ink)",
                color: "var(--bg)",
                padding: "9px 16px",
                whiteSpace: "nowrap",
                textAlign: "center",
                ...(ar ? { lineHeight: 1.6, fontFamily: KUFI } : {}),
              }}
            >
              {t.quote}
            </Link>
          </div>
          <button
            type="button"
            onClick={onBurger}
            data-burger=""
            className="hover-stripes"
            aria-label={ar ? "القائمة" : "Menu"}
            aria-haspopup="dialog"
            aria-expanded={menuOpen || panelOpen}
            style={{
              // Two long thin stripes; stretches to the height of the buttons beside it.
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "8px",
              width: "44px",
              minHeight: "32px",
              alignSelf: "stretch",
              flex: "0 0 auto",
              padding: 0,
              border: 0,
              background: "transparent",
              color: "var(--ink)",
              cursor: "pointer",
            }}
          >
            {menuOpen ? (
              <svg
                viewBox="0 0 36 36"
                style={{ width: "36px", height: "36px", display: "block", margin: "0 auto" }}
                aria-hidden="true"
              >
                <path d="M6 6 L30 30 M30 6 L6 30" strokeWidth="1.25" fill="none" style={{ stroke: "currentColor" }} />
              </svg>
            ) : (
              <>
                <span style={{ display: "block", height: "1.5px", background: "currentColor" }} />
                <span style={{ display: "block", height: "1.5px", background: "currentColor" }} />
              </>
            )}
          </button>
        </div>

        <nav
          data-desknav=""
          dir={ar ? "rtl" : undefined}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            gap: ar ? "clamp(10px,1.6vw,20px)" : "clamp(12px,1.8vw,26px)",
            flexWrap: "wrap",
            flex: "1 1 auto",
            whiteSpace: "nowrap",
            ...(ar ? { fontFamily: KUFI } : {}),
          }}
        >
          {MAIN_NAV[lang].map(([key, label]) => (
            <Link
              key={key}
              href={pageHref(lang, key)}
              className="hover-accent"
              style={{ fontSize: ar ? "14px" : "14.5px", padding: "4px 0", borderBottom: underline(key) }}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>

      {!menuOpen && (
        <div data-buyerbar="" style={{ borderTop: "1px solid rgba(var(--ink-rgb),0.12)", background: "var(--bg2)" }}>
          <div
            data-buyernav=""
            dir={ar ? "rtl" : undefined}
            style={{
              maxWidth: "1440px",
              margin: "0 auto",
              padding: `0 ${PAD_X}`,
              display: "flex",
              gap: 0,
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              ...(ar ? { fontFamily: KUFI } : {}),
            }}
          >
            <span
              data-buyerlabel=""
              style={
                ar
                  ? { fontSize: "11px", color: "var(--muted)", padding: "9px 0 9px 18px", whiteSpace: "nowrap" }
                  : {
                      fontFamily: MONO,
                      fontSize: "10.5px",
                      letterSpacing: "0.12em",
                      color: "var(--muted)",
                      padding: "9px 18px 9px 0",
                      whiteSpace: "nowrap",
                    }
              }
            >
              {t.buyers}
            </span>
            {BUYER_NAV[lang].map(([key, label]) => (
              <Link
                key={key}
                href={pageHref(lang, key)}
                className="hover-accent"
                style={{ fontSize: ar ? "12.5px" : "13px", padding: "9px 16px", borderBottom: underline(key) }}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      )}

      {menuOpen && (
        <div
          data-drawer=""
          style={{
            display: "none",
            flexDirection: "column",
            borderTop: "1px solid rgba(var(--ink-rgb),0.16)",
            background: "var(--bg2)",
            padding: `6px ${PAD_X} 18px`,
            // The header is sticky, so a long menu scrolls inside the screen (phones in landscape).
            maxHeight: "calc(100dvh - 64px)",
            overflowY: "auto",
            overscrollBehavior: "contain",
          }}
        >
          <div
            dir={ar ? "rtl" : undefined}
            style={{ display: "flex", flexDirection: "column", ...(ar ? { fontFamily: KUFI } : {}) }}
          >
            {MAIN_NAV[lang].map(([key, label]) => (
              <Link
                key={key}
                href={pageHref(lang, key)}
                style={{
                  display: "block",
                  width: "max-content",
                  fontSize: ar ? "15.5px" : "16px",
                  padding: "13px 0 5px",
                  borderBottom: underline(key),
                }}
              >
                {label}
              </Link>
            ))}
            <p
              style={
                ar
                  ? { fontSize: "11px", color: "var(--muted)", padding: "16px 0 6px" }
                  : {
                      fontFamily: MONO,
                      fontSize: "10.5px",
                      letterSpacing: "0.12em",
                      color: "var(--muted)",
                      padding: "16px 0 6px",
                    }
              }
            >
              {t.buyers}
            </p>
            {BUYER_NAV[lang].map(([key, label]) => (
              <Link
                key={key}
                href={pageHref(lang, key)}
                style={{
                  display: "block",
                  width: "max-content",
                  fontSize: ar ? "14.5px" : "15px",
                  padding: "11px 0 5px",
                  borderBottom: underline(key),
                }}
              >
                {label}
              </Link>
            ))}
            <Link
              href={pageHref(lang, "contact")}
              className="hover-btn"
              style={{
                fontSize: ar ? "14.5px" : "15px",
                fontWeight: 500,
                background: "var(--ink)",
                color: "var(--bg)",
                padding: "14px 20px",
                textAlign: "center",
                marginTop: "16px",
              }}
            >
              {t.quote}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
