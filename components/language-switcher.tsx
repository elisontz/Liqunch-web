import Link from "next/link";

import { localeLabels, type Locale } from "@/lib/site";

type LanguageSwitcherProps = {
  locale: Locale;
};

export function LanguageSwitcher({ locale }: LanguageSwitcherProps) {
  return (
    <nav aria-label="Language switcher" className="flex gap-2 text-sm">
      {(["zh", "en"] as const).map((item) => (
        <Link
          key={item}
          href={item === "zh" ? "/zh" : `/${item}`}
          className={item === locale ? "font-semibold text-slate-950" : "text-slate-500"}
        >
          {localeLabels[item]}
        </Link>
      ))}
    </nav>
  );
}
