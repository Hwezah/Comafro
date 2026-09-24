import type { Metadata } from "next";

import { ArQualityPage } from "@/components/pages/ar/quality";
import { EnQualityPage } from "@/components/pages/en/quality";
import { isLocale, pageTitles } from "@/lib/i18n";

export async function generateMetadata({ params }: PageProps<"/[lang]/quality">): Promise<Metadata> {
  const { lang } = await params;
  return { title: pageTitles[isLocale(lang) ? lang : "en"].quality };
}

export default async function Page({ params }: PageProps<"/[lang]/quality">) {
  const { lang } = await params;
  return lang === "ar" ? <ArQualityPage /> : <EnQualityPage />;
}
