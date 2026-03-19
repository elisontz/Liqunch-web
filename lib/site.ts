export const locales = ["zh", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "zh";

export const localeLabels: Record<Locale, string> = {
  zh: "中文",
  en: "English"
};

export function normalizeLocale(locale: string): Locale {
  return locales.includes(locale as Locale) ? (locale as Locale) : defaultLocale;
}

export function getLocalizedPath(locale: Locale, slug = ""): string {
  const cleanSlug = slug.replace(/^\/+|\/+$/g, "");
  return cleanSlug.length === 0 ? `/${locale}` : `/${locale}/${cleanSlug}`;
}

function requiredEnv(name: string, fallback: string): string {
  return process.env[name] || fallback;
}

export const siteConfig = {
  productName: "oLauncher",
  currentVersion: requiredEnv("NEXT_PUBLIC_CURRENT_VERSION", "1.0.2"),
  supportEmail: requiredEnv("NEXT_PUBLIC_SUPPORT_EMAIL", "support@olauncher.app"),
  downloadUrl: requiredEnv(
    "NEXT_PUBLIC_DOWNLOAD_URL",
    "https://downloads.olauncher.app/stable/oLauncher-20260319.dmg"
  ),
  paddleEnv: requiredEnv("NEXT_PUBLIC_PADDLE_ENV", "sandbox"),
  paddleClientToken: process.env.NEXT_PUBLIC_PADDLE_CLIENT_TOKEN || "",
  singlePriceId: requiredEnv("NEXT_PUBLIC_PADDLE_SINGLE_PRICE_ID", "pri_single_device"),
  doublePriceId: requiredEnv("NEXT_PUBLIC_PADDLE_DOUBLE_PRICE_ID", "pri_two_devices"),
  releaseDate: "2026-03-19"
} as const;
