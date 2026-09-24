import type { Metadata } from "next";

import { ArSourcingPage } from "@/components/pages/ar/sourcing";
import { EnSourcingPage } from "@/components/pages/en/sourcing";
import { isLocale, pageTitles } from "@/lib/i18n";

export async function generateMetadata({ params }: PageProps<"/[lang]/sourcing">): Promise<Metadata> {
  const { lang } = await params;
  return { title: pageTitles[isLocale(lang) ? lang : "en"].sourcing };
}

export default async function Page({ params }: PageProps<"/[lang]/sourcing">) {
  const { lang } = await params;
  return lang === "ar" ? <ArSourcingPage /> : <EnSourcingPage />;
}
