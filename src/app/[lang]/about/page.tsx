import type { Metadata } from "next";

import { ArAboutPage } from "@/components/pages/ar/about";
import { EnAboutPage } from "@/components/pages/en/about";
import { isLocale, pageTitles } from "@/lib/i18n";

export async function generateMetadata({ params }: PageProps<"/[lang]/about">): Promise<Metadata> {
  const { lang } = await params;
  return { title: pageTitles[isLocale(lang) ? lang : "en"].about };
}

export default async function Page({ params }: PageProps<"/[lang]/about">) {
  const { lang } = await params;
  return lang === "ar" ? <ArAboutPage /> : <EnAboutPage />;
}
