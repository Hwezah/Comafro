import type { Metadata } from "next";

import { ArHomePage } from "@/components/pages/ar/home";
import { EnHomePage } from "@/components/pages/en/home";
import { isLocale, pageTitles } from "@/lib/i18n";

export async function generateMetadata({ params }: PageProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  return { title: pageTitles[isLocale(lang) ? lang : "en"].home };
}

export default async function Page({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  return lang === "ar" ? <ArHomePage /> : <EnHomePage />;
}
