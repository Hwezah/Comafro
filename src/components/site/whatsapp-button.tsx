import { contact, dialable } from "@/lib/contact";
import type { Locale } from "@/lib/i18n";

const LABEL: Record<Locale, string> = { en: "WHATSAPP", ar: "واتساب" };

/** Green "WhatsApp +256 …" button used in the contact side panel and the mobile menu. */
export function WhatsAppButton({ lang, style }: { lang: Locale; style?: React.CSSProperties }) {
  return (
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
        letterSpacing: lang === "ar" ? 0 : "0.12em",
        ...style,
      }}
    >
      <WhatsAppIcon />
      <span>{LABEL[lang]}</span>
      <span dir="ltr" style={{ letterSpacing: "0.06em" }}>
        {contact.whatsapp}
      </span>
    </a>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" fill="currentColor" style={{ flex: "0 0 auto" }}>
      <path d="M12 2a10 10 0 0 0-8.66 15l-1.3 4.76 4.88-1.28A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-2.9.76.78-2.83-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.14c-.25-.12-1.46-.72-1.69-.8-.23-.08-.39-.12-.55.12-.16.25-.63.8-.78.97-.14.16-.29.18-.53.06a6.7 6.7 0 0 1-3.34-2.92c-.25-.43.25-.4.72-1.34.08-.16.04-.3-.02-.42-.06-.12-.55-1.33-.76-1.82-.2-.48-.4-.41-.55-.42h-.47a.9.9 0 0 0-.65.3 2.74 2.74 0 0 0-.85 2.03 4.75 4.75 0 0 0 1 2.52 10.86 10.86 0 0 0 4.17 3.68c1.55.67 2.16.73 2.94.61.47-.07 1.46-.6 1.66-1.18.2-.58.2-1.07.14-1.18-.06-.1-.22-.16-.46-.28Z" />
    </svg>
  );
}
