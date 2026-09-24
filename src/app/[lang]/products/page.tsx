import type { Metadata } from "next";

import { ArProductsPage } from "@/components/pages/ar/products";
import { EnProductsPage } from "@/components/pages/en/products";
import { isLocale, pageTitles } from "@/lib/i18n";

export async function generateMetadata({ params }: PageProps<"/[lang]/products">): Promise<Metadata> {
  const { lang } = await params;
  return { title: pageTitles[isLocale(lang) ? lang : "en"].products };
}

export default async function Page({ params }: PageProps<"/[lang]/products">) {
  const { lang } = await params;
  return lang === "ar" ? <ArProductsPage /> : <EnProductsPage />;
}
