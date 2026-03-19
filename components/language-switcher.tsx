"use client";

import { useTransition } from "react";
import { usePathname, useRouter } from "next/navigation";

import { locales, localeLabels, type Locale } from "@/lib/site";

type LanguageSwitcherProps = {
  locale: Locale;
};

export function LanguageSwitcher({ locale }: LanguageSwitcherProps) {
  const router = useRouter();
  const pathname = usePathname() || `/${locale}`;
  const [isPending, startTransition] = useTransition();

  function buildLocalizedPath(nextLocale: Locale) {
    const segments = pathname.split("/").filter(Boolean);

    if (segments.length === 0) {
      return `/${nextLocale}`;
    }

    if (locales.includes(segments[0] as Locale)) {
      segments[0] = nextLocale;
      return `/${segments.join("/")}`;
    }

    return `/${nextLocale}/${segments.join("/")}`;
  }

  return (
    <label className="locale-select-shell">
      <span className="sr-only">Language</span>
      <select
        aria-label="Language"
        className="locale-select"
        value={locale}
        disabled={isPending}
        onChange={(event) => {
          const nextLocale = event.target.value as Locale;

          startTransition(() => {
            router.push(buildLocalizedPath(nextLocale));
          });
        }}
      >
        {locales.map((item) => (
          <option key={item} value={item}>
            {localeLabels[item]}
          </option>
        ))}
      </select>
    </label>
  );
}
