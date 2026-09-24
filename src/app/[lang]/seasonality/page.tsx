import type { Metadata } from "next";

import { ArCalendarPage } from "@/components/pages/ar/calendar";
import { EnCalendarPage } from "@/components/pages/en/calendar";
import { isLocale, pageTitles } from "@/lib/i18n";

export async function generateMetadata({ params }: PageProps<"/[lang]/seasonality">): Promise<Metadata> {
  const { lang } = await params;
  return { title: pageTitles[isLocale(lang) ? lang : "en"].calendar };
}

export default async function Page({ params }: PageProps<"/[lang]/seasonality">) {
  const { lang } = await params;
  return lang === "ar" ? <ArCalendarPage /> : <EnCalendarPage />;
}
