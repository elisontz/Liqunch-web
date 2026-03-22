import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { SalesPage } from "@/components/sales-page";
import { getContent } from "@/content";
import { locales, normalizeLocale, getLatestReleaseInfo } from "@/lib/site";

export const runtime = "edge";

type Params = { locale: string };

export async function generateMetadata({
  params
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { locale } = await params;
  const normalized = normalizeLocale(locale);
  const content = getContent(normalized);

  return {
    title: content.seo.title,
    description: content.seo.description
  };
}

export default async function LocaleHomePage({ params }: { params: Promise<Params> }) {
  const { locale } = await params;
  if (!locales.includes(locale as (typeof locales)[number])) {
    notFound();
  }
  const normalized = normalizeLocale(locale);
  const releaseInfo = await getLatestReleaseInfo(normalized);

  return <SalesPage locale={normalized} releaseInfo={releaseInfo} />;
}
