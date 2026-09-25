"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

import { useApp } from "@/context/app-context";
import { contact, dialable, LAMI_MEAT_URL, MOBILE_MENU_QUERY } from "@/lib/contact";
import { pageHref, type Locale } from "@/lib/i18n";

const COPY: Record<
  Locale,
  {
    eyebrow: string;
    title: [string, string];
    lead: string;
    rows: {
      call: string;
      whatsapp: string;
      trade: string;
      logistics: string;
      hours: string;
      office: string;
      markets: string;
      group: string;
    };
    hours: string;
    office: string;
    markets: string;
    whatsappCta: string;
    enquiry: string;
    close: string;
    dialog: string;
  }
> = {
  en: {
    eyebrow: "GET IN TOUCH",
    title: ["Talk to the", "trade desk."],
    lead: "Tell us the product, the volume and the port. We reply from Kampala within one working day with a specification sheet and an indicative price.",
    rows: {
      call: "CALL",
      whatsapp: "WHATSAPP",
      trade: "TRADE",
      logistics: "LOGISTICS",
      hours: "HOURS",
      office: "OFFICE",
      markets: "MARKETS",
      group: "GROUP CO.",
    },
    hours: "Mon–Sat · 08:00–18:00 EAT",
    office: "Kireka, Wakiso District, Uganda",
    markets: "Gulf · European Union · East Africa",
    whatsappCta: "WHATSAPP",
    enquiry: "Send an enquiry",
    close: "Close",
    dialog: "Contact the trade desk",
  },
  ar: {
    eyebrow: "تواصلوا معنا",
    title: ["تحدثوا إلى", "مكتب التجارة."],
    lead: "أخبرونا بالمنتج والكمية والميناء. نرد من كمبالا خلال يوم عمل واحد بورقة مواصفات وسعر تقديري.",
    rows: {
      call: "الهاتف",
      whatsapp: "واتساب",
      trade: "الاستفسارات التجارية",
      logistics: "الشحن",
      hours: "ساعات العمل",
      office: "المكتب",
      markets: "الأسواق",
      group: "شركة تابعة",
    },
    hours: "الإثنين – السبت، ٠٨:٠٠ – ١٨:٠٠ بتوقيت شرق أفريقيا",
    office: "كيريكا، مقاطعة واكيسو، أوغندا",
    markets: "الخليج · الاتحاد الأوروبي · شرق أفريقيا",
    whatsappCta: "واتساب",
    enquiry: "إرسال استفسار",
    close: "إغلاق",
    dialog: "التواصل مع مكتب التجارة",
  },
};

const MONO = "var(--font-jetbrains),monospace";
const KUFI = "var(--font-kufi),sans-serif";
const EASE = "cubic-bezier(.22,.7,.2,1)";

/** Slide-in "get in touch" panel opened from the header stripes on tablet and desktop. */
export function ContactPanel() {
  const { lang, panelOpen, closePanel } = useApp();
  const closeRef = useRef<HTMLButtonElement>(null);
  const ar = lang === "ar";
  const c = COPY[lang];

  useEffect(() => {
    if (!panelOpen) return;
    const root = document.documentElement;
    const previous = root.style.overflow;
    root.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closePanel();
    };
    // Rotating a tablet into phone range swaps the panel for the drop-down menu.
    const mq = window.matchMedia(MOBILE_MENU_QUERY);
    const onMedia = () => mq.matches && closePanel();
    document.addEventListener("keydown", onKey);
    mq.addEventListener("change", onMedia);
    return () => {
      root.style.overflow = previous;
      document.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onMedia);
      document.querySelector<HTMLElement>("[data-burger]")?.focus();
    };
  }, [panelOpen, closePanel]);

  const rows: [string, React.ReactNode][] = [
    [
      c.rows.call,
      <a key="call" href={`tel:+${dialable(contact.phone)}`} dir="ltr" className="hover-white">
        {contact.phone}
      </a>,
    ],
    [
      c.rows.whatsapp,
      <a
        key="wa"
        href={`https://wa.me/${dialable(contact.whatsapp)}`}
        target="_blank"
        rel="noopener noreferrer"
        dir="ltr"
        className="hover-white"
      >
        {contact.whatsapp}
      </a>,
    ],
    [
      c.rows.trade,
      <a key="trade" href={`mailto:${contact.tradeEmail}`} dir="ltr" className="hover-white">
        {contact.tradeEmail}
      </a>,
    ],
    [
      c.rows.logistics,
      <a key="log" href={`mailto:${contact.logisticsEmail}`} dir="ltr" className="hover-white">
        {contact.logisticsEmail}
      </a>,
    ],
    [c.rows.hours, c.hours],
    [c.rows.office, c.office],
    [c.rows.markets, c.markets],
    [
      c.rows.group,
      <a key="lami" href={LAMI_MEAT_URL} target="_blank" rel="noopener noreferrer" className="hover-white">
        <span dir="ltr">Lami Meat</span> <span aria-hidden="true">↗</span>
      </a>,
    ],
  ];

  return (
    <>
      <div
        data-panel-backdrop=""
        onClick={closePanel}
        aria-hidden="true"
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 90,
          background: "rgba(8,10,9,0.55)",
          opacity: panelOpen ? 1 : 0,
          pointerEvents: panelOpen ? "auto" : "none",
          transition: `opacity 360ms ${EASE}`,
        }}
      />
      <aside
        data-panel=""
        data-band=""
        role="dialog"
        aria-modal="true"
        aria-label={c.dialog}
        aria-hidden={!panelOpen}
        inert={!panelOpen}
        dir={ar ? "rtl" : undefined}
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          bottom: 0,
          zIndex: 95,
          width: "min(600px, 100vw)",
          overflowY: "auto",
          background: "var(--ink)",
          color: "var(--bg)",
          boxShadow: panelOpen ? "-24px 0 60px rgba(0,0,0,0.28)" : "none",
          transform: panelOpen ? "translateX(0)" : "translateX(100%)",
          visibility: panelOpen ? "visible" : "hidden",
          transition: panelOpen
            ? `transform 480ms ${EASE}, visibility 0s`
            : `transform 420ms ${EASE}, visibility 0s 420ms`,
          ...(ar ? { fontFamily: KUFI } : {}),
        }}
      >
        <button
          ref={closeRef}
          type="button"
          onClick={closePanel}
          aria-label={c.close}
          className="hover-white"
          style={{
            position: "absolute",
            top: "clamp(16px,2.4vw,28px)",
            [ar ? "left" : "right"]: "clamp(16px,2.4vw,28px)",
            width: "56px",
            height: "56px",
            display: "grid",
            placeItems: "center",
            padding: 0,
            border: 0,
            background: "transparent",
            color: "var(--sage-pale)",
            cursor: "pointer",
          }}
        >
          <svg viewBox="0 0 48 48" width="48" height="48" aria-hidden="true">
            <path d="M8 8 L40 40 M40 8 L8 40" stroke="currentColor" strokeWidth="1.1" fill="none" />
          </svg>
        </button>

        <div style={{ padding: "clamp(64px,8vh,96px) clamp(26px,4vw,60px) clamp(32px,5vh,56px)" }}>
          <p
            style={{
              fontSize: "12px",
              letterSpacing: ar ? 0 : "0.24em",
              color: "var(--ochre-light)",
              ...(ar ? {} : { fontFamily: MONO }),
            }}
          >
            {c.eyebrow}
          </p>
          <p
            role="heading"
            aria-level={2}
            style={{
              fontSize: ar ? "clamp(36px,3.6vw,48px)" : "clamp(40px,4.2vw,60px)",
              fontWeight: 700,
              letterSpacing: ar ? 0 : "-0.03em",
              lineHeight: ar ? 1.35 : 0.98,
              marginTop: "clamp(28px,5vh,56px)",
            }}
          >
            <span style={{ display: "block" }}>{c.title[0]}</span>
            <span style={{ display: "block", color: "var(--ochre-light)" }}>{c.title[1]}</span>
          </p>
          <p
            style={{
              fontSize: ar ? "15.5px" : "16.5px",
              lineHeight: ar ? 1.9 : 1.65,
              color: "var(--sage-light)",
              marginTop: "22px",
              maxWidth: "46ch",
            }}
          >
            {c.lead}
          </p>

          <dl style={{ margin: "30px 0 0", borderTop: "1px solid rgba(var(--bg-rgb),0.14)" }}>
            {rows.map(([label, value]) => (
              <div
                key={label}
                style={{
                  display: "grid",
                  gridTemplateColumns: "minmax(110px,32%) 1fr",
                  gap: "16px",
                  alignItems: "baseline",
                  padding: "15px 0",
                  borderBottom: "1px solid rgba(var(--bg-rgb),0.14)",
                }}
              >
                <dt
                  style={{
                    fontSize: ar ? "12.5px" : "11px",
                    letterSpacing: ar ? 0 : "0.16em",
                    color: "var(--sage)",
                    ...(ar ? {} : { fontFamily: MONO }),
                  }}
                >
                  {label}
                </dt>
                <dd style={{ margin: 0, fontSize: ar ? "15.5px" : "16px", fontWeight: 500, color: "var(--bg)" }}>
                  {value}
                </dd>
              </div>
            ))}
          </dl>

          <div style={{ display: "grid", gap: "12px", marginTop: "32px" }}>
            <a
              href={`https://wa.me/${dialable(contact.whatsapp)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover-whatsapp"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "12px",
                padding: "18px 22px",
                background: "#1FA855",
                color: "#FFFFFF",
                fontSize: "14px",
                fontWeight: 600,
                letterSpacing: ar ? 0 : "0.12em",
              }}
            >
              <WhatsAppIcon />
              <span>{c.whatsappCta}</span>
              <span dir="ltr" style={{ letterSpacing: "0.06em" }}>
                {contact.whatsapp}
              </span>
            </a>
            <Link
              href={pageHref(lang, "contact")}
              onClick={closePanel}
              className="hover-panel-outline"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "17px 22px",
                border: "1px solid rgba(var(--bg-rgb),0.35)",
                color: "var(--bg)",
                fontSize: "15px",
                fontWeight: 500,
              }}
            >
              {c.enquiry}
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" fill="currentColor">
      <path d="M12 2a10 10 0 0 0-8.66 15l-1.3 4.76 4.88-1.28A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-2.9.76.78-2.83-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.14c-.25-.12-1.46-.72-1.69-.8-.23-.08-.39-.12-.55.12-.16.25-.63.8-.78.97-.14.16-.29.18-.53.06a6.7 6.7 0 0 1-3.34-2.92c-.25-.43.25-.4.72-1.34.08-.16.04-.3-.02-.42-.06-.12-.55-1.33-.76-1.82-.2-.48-.4-.41-.55-.42h-.47a.9.9 0 0 0-.65.3 2.74 2.74 0 0 0-.85 2.03 4.75 4.75 0 0 0 1 2.52 10.86 10.86 0 0 0 4.17 3.68c1.55.67 2.16.73 2.94.61.47-.07 1.46-.6 1.66-1.18.2-.58.2-1.07.14-1.18-.06-.1-.22-.16-.46-.28Z" />
    </svg>
  );
}
