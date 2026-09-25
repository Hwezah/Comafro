import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ContactPanel } from "@/components/site/contact-panel";
import { Enhancer } from "@/components/site/enhancer";
import { AuthDialog } from "@/components/site/mock-auth";
import { SearchDialog } from "@/components/site/search-dialog";
import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";
import { ThemeToggle } from "@/components/site/theme-toggle";
import { AppProvider, THEME_KEY } from "@/context/app-context";
import { isLocale, locales, siteDescription } from "@/lib/i18n";
import { fontVariables } from "../fonts";
import "../globals.css";

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  return {
    description: siteDescription[lang],
    alternates: { languages: { en: "/en", ar: "/ar" } },
  };
}

// Applies the saved theme and enables scroll reveal before first paint.
const bootScript = `(function(){try{var t=localStorage.getItem(${JSON.stringify(THEME_KEY)});if(t==="dark")document.documentElement.setAttribute("data-theme","dark")}catch(e){}if("IntersectionObserver"in window&&!matchMedia("(prefers-reduced-motion: reduce)").matches)document.documentElement.classList.add("rv")})()`;

export default async function SiteLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  return (
    <html lang={lang} data-theme="light" className={fontVariables} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: bootScript }} />
      </head>
      <body>
        <AppProvider lang={lang}>
          <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
            <Header />
            <main style={{ flex: 1 }}>{children}</main>
            <Footer lang={lang} />
          </div>
          <ContactPanel />
          <SearchDialog />
          <AuthDialog />
          <ThemeToggle />
          <Enhancer />
        </AppProvider>
      </body>
    </html>
  );
}
