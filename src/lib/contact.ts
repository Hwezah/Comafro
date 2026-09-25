/** Trade-desk contact details shared by the footer and the contact side panel. */
export const contact = {
  phone: "+256 773 828 552",
  whatsapp: "+256 773 828 552",
  tradeEmail: "trade@comafro.com",
  logisticsEmail: "logistics@comafro.com",
};

/** Digits-only form for tel: and wa.me links. */
export const dialable = (number: string) => number.replace(/[^\d]/g, "");

/** Subsidiary site; Comafro General Trading Ltd is Lami Meat's parent company. */
export const LAMI_MEAT_URL = "https://lami-meat-one.vercel.app/en";

/**
 * Phones and portrait tablets (≤ 900px, or phones in landscape) use the full-screen menu;
 * wider screens get the contact side panel. Keep in sync with the header rules in site.css.
 */
export const MOBILE_MENU_QUERY =
  "(max-width: 900px), ((max-width: 950px) and (max-height: 500px) and (orientation: landscape))";
