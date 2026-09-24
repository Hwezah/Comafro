import type { Metadata } from "next";

import { ArResourcesPage } from "@/components/pages/ar/resources";
import { EnResourcesPage } from "@/components/pages/en/resources";
import { isLocale, pageTitles } from "@/lib/i18n";

export async function generateMetadata({ params }: PageProps<"/[lang]/resources">): Promise<Metadata> {
  const { lang } = await params;
  return { title: pageTitles[isLocale(lang) ? lang : "en"].resources };
}

export default async function Page({ params }: PageProps<"/[lang]/resources">) {
  const { lang } = await params;
  return lang === "ar" ? <ArResourcesPage /> : <EnResourcesPage />;
}
