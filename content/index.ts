import en from "@/content/en";
import zh from "@/content/zh";
import type { Locale } from "@/lib/site";

export const marketingContent = {
  zh,
  en
} as const;

export function getContent(locale: Locale) {
  return marketingContent[locale];
}
