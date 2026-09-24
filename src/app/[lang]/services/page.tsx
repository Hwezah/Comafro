import type { Metadata } from "next";

import { ArServicesPage } from "@/components/pages/ar/services";
import { EnServicesPage } from "@/components/pages/en/services";
import { isLocale, pageTitles } from "@/lib/i18n";

export async function generateMetadata({ params }: PageProps<"/[lang]/services">): Promise<Metadata> {
  const { lang } = await params;
  return { title: pageTitles[isLocale(lang) ? lang : "en"].services };
}

export default async function Page({ params }: PageProps<"/[lang]/services">) {
  const { lang } = await params;
  return lang === "ar" ? <ArServicesPage /> : <EnServicesPage />;
}
