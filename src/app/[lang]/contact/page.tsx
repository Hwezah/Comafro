import type { Metadata } from "next";

import { ArContactPage } from "@/components/pages/ar/contact";
import { EnContactPage } from "@/components/pages/en/contact";
import { isLocale, pageTitles } from "@/lib/i18n";

export async function generateMetadata({ params }: PageProps<"/[lang]/contact">): Promise<Metadata> {
  const { lang } = await params;
  return { title: pageTitles[isLocale(lang) ? lang : "en"].contact };
}

export default async function Page({ params }: PageProps<"/[lang]/contact">) {
  const { lang } = await params;
  return lang === "ar" ? <ArContactPage /> : <EnContactPage />;
}
