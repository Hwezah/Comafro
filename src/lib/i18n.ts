export const locales = ["en", "ar"] as const;
export type Locale = (typeof locales)[number];

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export const pageKeys = [
  "home",
  "about",
  "services",
  "products",
  "contact",
  "quality",
  "calendar",
  "sourcing",
  "resources",
] as const;
export type PageKey = (typeof pageKeys)[number];

export const pageSlugs: Record<PageKey, string> = {
  home: "",
  about: "about",
  services: "services",
  products: "products",
  contact: "contact",
  quality: "quality",
  calendar: "seasonality",
  sourcing: "sourcing",
  resources: "resources",
};

export function pageHref(lang: Locale, page: PageKey) {
  const slug = pageSlugs[page];
  return slug ? `/${lang}/${slug}` : `/${lang}`;
}

/** Reads the locale and page from a pathname such as `/ar/seasonality`. */
export function parsePath(pathname: string): { lang: Locale; page: PageKey } {
  const [, first = "", second = ""] = pathname.split("/");
  const lang = isLocale(first) ? first : "en";
  const page = pageKeys.find((key) => pageSlugs[key] === second) ?? "home";
  return { lang, page };
}

export const pageTitles: Record<Locale, Record<PageKey, string>> = {
  en: {
    home: "Comafro Limited — Ugandan produce & halal protein for export",
    about: "About — Comafro Limited",
    services: "What we do — Comafro Limited",
    products: "Products — Comafro Limited",
    contact: "Contact the trade desk — Comafro Limited",
    quality: "Quality & compliance — Comafro Limited",
    calendar: "Seasonality calendar — Comafro Limited",
    sourcing: "Sourcing network — Comafro Limited",
    resources: "Buyer resources — Comafro Limited",
  },
  ar: {
    home: "كومافرو المحدودة — منتجات أوغندية طازجة ولحوم حلال للتصدير",
    about: "عن الشركة — كومافرو المحدودة",
    services: "خدماتنا — كومافرو المحدودة",
    products: "المنتجات — كومافرو المحدودة",
    contact: "اتصل بنا — كومافرو المحدودة",
    quality: "الجودة والمطابقة — كومافرو المحدودة",
    calendar: "مواسم التوريد — كومافرو المحدودة",
    sourcing: "شبكة المزارعين — كومافرو المحدودة",
    resources: "موارد المشترين — كومافرو المحدودة",
  },
};

export const siteDescription: Record<Locale, string> = {
  en: "Comafro Limited owns the whole chain: contracted growers and cattle supply in central Uganda, feedlot management, halal-standard processing, and export documentation and freight.",
  ar: "شركة كومافرو المحدودة تدير سلسلة التوريد كاملة: مزارعون متعاقدون وتوريد الأبقار في وسط أوغندا، وإدارة التسمين، والتصنيع الحلال، ومستندات التصدير والشحن.",
};
