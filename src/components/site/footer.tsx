"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { pageHref, type Locale, type PageKey } from "@/lib/i18n";

const COPY = {
  en: {
    blurb: "Agricultural export, feedlot management, halal processing and freight. Kireka, Wakiso District, Uganda.",
    pages: "Pages",
    buyers: "For buyers",
    contact: "Contact",
    markets: "Markets",
    pageLinks: [
      ["home", "Home"],
      ["about", "About"],
      ["services", "What we do"],
      ["products", "Products"],
      ["contact", "Contact"],
    ],
    buyerLinks: [
      ["quality", "Quality & compliance"],
      ["calendar", "Seasonality calendar"],
      ["sourcing", "Sourcing network"],
      ["resources", "Buyer resources"],
    ],
    hours: "Mon–Sat, 08:00–18:00 EAT",
    marketList: ["Gulf states & wider Middle East", "European Union", "East African region"],
    switchLabel: "التبديل إلى العربية",
    legal: "© 2026 Comafro Limited · Registered in Uganda",
    note: "Prices, seasons and transit times indicative",
  },
  ar: {
    blurb: "تصدير المنتجات الزراعية وإدارة التسمين والتصنيع الحلال والشحن. كيريكا، مقاطعة واكيسو، أوغندا.",
    pages: "الصفحات",
    buyers: "للمشترين",
    contact: "للتواصل",
    markets: "الأسواق",
    pageLinks: [
      ["home", "الرئيسية"],
      ["about", "عن الشركة"],
      ["services", "خدماتنا"],
      ["products", "المنتجات"],
      ["contact", "اتصل بنا"],
    ],
    buyerLinks: [
      ["quality", "الجودة والمطابقة"],
      ["calendar", "مواسم التوريد"],
      ["sourcing", "شبكة المزارعين"],
      ["resources", "موارد المشترين"],
    ],
    hours: "الإثنين – السبت، ٠٨:٠٠ – ١٨:٠٠",
    marketList: ["دول الخليج والشرق الأوسط", "الاتحاد الأوروبي", "منطقة شرق أفريقيا"],
    switchLabel: "Switch to English",
    legal: "© ٢٠٢٦ شركة كومافرو المحدودة · مسجلة في أوغندا",
    note: "الأسعار والمواسم ومدد العبور تقديرية",
  },
} satisfies Record<Locale, unknown>;

const MONO = "var(--font-jetbrains),monospace";
const KUFI = "var(--font-kufi),sans-serif";

export function Footer({ lang }: { lang: Locale }) {
  const pathname = usePathname();
  const ar = lang === "ar";
  const c = COPY[lang];
  const other: Locale = ar ? "en" : "ar";
  const linkSize = ar ? "14.5px" : "15px";
  const label = { fontSize: "11.5px", color: "var(--sage)", ...(ar ? {} : { fontFamily: MONO }) };
  const item = { fontSize: linkSize, color: "var(--sage-pale)" };
  const col = { display: "flex", flexDirection: "column", gap: "9px", marginTop: "12px" } as const;

  const lockup = (
    <div
      data-footlockup=""
      style={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
        ...(ar ? { direction: "ltr", justifyContent: "flex-end" } : {}),
      }}
    >
      {!ar && <Mark />}
      <span
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          ...(ar ? { alignItems: "flex-end" } : {}),
        }}
      >
        <span style={{ fontSize: "20px", fontWeight: 700, letterSpacing: "0.02em", lineHeight: 1 }}>COMAFRO</span>
        <span
          style={{
            fontSize: "9.5px",
            fontWeight: 300,
            letterSpacing: "0.19em",
            lineHeight: 1,
            color: "var(--sage)",
            marginTop: "5px",
          }}
        >
          GENERAL TRADING LTD
        </span>
      </span>
      {ar && <Mark />}
    </div>
  );

  return (
    <footer
      data-footer=""
      dir={ar ? "rtl" : undefined}
      style={{
        background: "var(--ink)",
        color: "var(--bg)",
        borderTop: "1px solid rgba(var(--ink-rgb),0.16)",
        ...(ar ? { fontFamily: KUFI } : {}),
      }}
    >
      <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "clamp(32px,4vw,52px) clamp(22px,5vw,80px)" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(min(220px,100%),1fr))",
            gap: "clamp(22px,3vw,44px)",
          }}
        >
          <div>
            {lockup}
            <p
              style={{
                fontSize: ar ? "14.5px" : "15px",
                lineHeight: ar ? 1.85 : 1.6,
                color: "var(--sage-light)",
                marginTop: "14px",
              }}
            >
              {c.blurb}
            </p>
          </div>
          <div data-footpair="">
            <p style={label}>{c.pages}</p>
            <div data-footcol="" style={col}>
              {c.pageLinks.map(([key, text]) => (
                <Link key={key} href={pageHref(lang, key as PageKey)} className="hover-white" style={item}>
                  {text}
                </Link>
              ))}
            </div>
            <p style={{ ...label, marginTop: "18px" }}>{c.buyers}</p>
            <div data-footcol="" style={col}>
              {c.buyerLinks.map(([key, text]) => (
                <Link key={key} href={pageHref(lang, key as PageKey)} className="hover-white" style={item}>
                  {text}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p style={label}>{c.contact}</p>
            <div data-footcol="" style={col}>
              <span style={{ ...item, direction: "ltr" }}>trade@comafro.com</span>
              <span style={{ ...item, direction: "ltr" }}>+256 700 000 000</span>
              <span style={item}>{c.hours}</span>
            </div>
          </div>
          <div>
            <p style={label}>{c.markets}</p>
            <div data-footcol="" style={col}>
              {c.marketList.map((m) => (
                <span key={m} style={item}>
                  {m}
                </span>
              ))}
            </div>
            <Link
              href={pathname.replace(/^\/(en|ar)(?=\/|$)/, `/${other}`)}
              hrefLang={other}
              className="hover-white"
              style={
                ar
                  ? {
                      fontFamily: MONO,
                      fontSize: "14px",
                      color: "var(--sage-pale)",
                      marginTop: "16px",
                      display: "block",
                      direction: "ltr",
                      textAlign: "right",
                    }
                  : {
                      fontFamily: KUFI,
                      fontSize: "15px",
                      color: "var(--sage-pale)",
                      marginTop: "16px",
                      direction: "rtl",
                      display: "block",
                    }
              }
            >
              {c.switchLabel}
            </Link>
          </div>
        </div>
        <div
          data-footbar=""
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "18px",
            flexWrap: "wrap",
            marginTop: "clamp(26px,3vw,40px)",
            paddingTop: "18px",
            borderTop: "1px solid rgba(var(--bg-rgb),0.18)",
          }}
        >
          <p style={label}>{c.legal}</p>
          <p style={label}>{c.note}</p>
        </div>
      </div>
    </footer>
  );
}

function Mark() {
  return (
    <Image
      src="/assets/comafro-mark.png"
      alt="Comafro mark"
      width={179}
      height={184}
      style={{ display: "block", height: "46px", width: "auto", flex: "0 0 auto" }}
    />
  );
}
