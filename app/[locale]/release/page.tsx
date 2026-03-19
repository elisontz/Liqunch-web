import { notFound } from "next/navigation";

import { getContent } from "@/content";
import { locales, normalizeLocale } from "@/lib/site";

type Params = { locale: string };

export default async function ReleasePage({ params }: { params: Promise<Params> }) {
  const { locale } = await params;
  if (!locales.includes(locale as (typeof locales)[number])) {
    notFound();
  }
  const content = getContent(normalizeLocale(locale));

  return (
    <main className="legal-page">
      <h1>{content.release.title}</h1>
      {content.release.entries.map((entry) => (
        <section key={entry.version} className="legal-block">
          <h2>
            {entry.version} <span>{entry.date}</span>
          </h2>
          <ul>
            {entry.notes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
        </section>
      ))}
    </main>
  );
}
