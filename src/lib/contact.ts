/** Trade-desk contact details shared by the footer and the contact side panel. */
export const contact = {
  // Placeholder until launch (see README): replace with the trade desk's real number.
  phone: "+256 700 000 000",
  whatsapp: "+256 700 000 000",
  tradeEmail: "trade@comafro.com",
  logisticsEmail: "logistics@comafro.com",
};

/** Digits-only form for tel: and wa.me links. */
export const dialable = (number: string) => number.replace(/[^\d]/g, "");

/** Subsidiary site; Comafro General Trading Ltd is Lami Meat's parent company. */
export const LAMI_MEAT_URL = "https://lami-meat-one.vercel.app/en";

/**
 * Phones (portrait, and landscape up to small-tablet width) use the drop-down menu;
 * tablets and desktops get the contact side panel.
 */
export const MOBILE_MENU_QUERY =
  "((max-width: 640px) and (orientation: portrait)), ((max-width: 950px) and (max-height: 500px) and (orientation: landscape))";
