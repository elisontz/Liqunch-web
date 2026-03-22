import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { SalesPage } from "@/components/sales-page";
import { getContent } from "@/content";
import { locales, normalizeLocale, getLatestReleaseInfo, siteConfig } from "@/lib/site";

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
  try {
    const { locale } = await params;
    if (!locales.includes(locale as (typeof locales)[number])) {
      notFound();
    }
    const normalized = normalizeLocale(locale);
    
    // DEBUG: Disable API call for now to test rendering
    // const releaseInfo = await getLatestReleaseInfo(normalized);
    const releaseInfo = {
      downloadUrl: siteConfig.downloadUrl,
      version: siteConfig.currentVersion,
      date: siteConfig.releaseDate,
      notes: []
    };

    return <SalesPage locale={normalized} releaseInfo={releaseInfo} />;
  } catch (err: any) {
    return (
      <div style={{ padding: '2rem', color: 'red', background: 'white' }}>
        <h1>Debug Error</h1>
        <p>{err?.message || 'Unknown error'}</p>
        <pre>{err?.stack}</pre>
      </div>
    );
  }
}
