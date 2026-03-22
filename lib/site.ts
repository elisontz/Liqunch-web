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
  productName: "Liqunch",
  currentVersion: requiredEnv("NEXT_PUBLIC_CURRENT_VERSION", "1.0.2"),
  supportEmail: requiredEnv("NEXT_PUBLIC_SUPPORT_EMAIL", "elisonyung@gmail.com"),
  downloadUrl: requiredEnv(
    "NEXT_PUBLIC_DOWNLOAD_URL",
    "https://github.com/elisontz/Liqunch-Lite/releases/download/v1.0.0/Liqunch-v1.0.0.dmg"
  ),
  paddleEnv: requiredEnv("NEXT_PUBLIC_PADDLE_ENV", "sandbox"),
  paddleClientToken: process.env.NEXT_PUBLIC_PADDLE_CLIENT_TOKEN || "",
  singlePriceId: requiredEnv("NEXT_PUBLIC_PADDLE_SINGLE_PRICE_ID", "pri_single_device"),
  doublePriceId: requiredEnv("NEXT_PUBLIC_PADDLE_DOUBLE_PRICE_ID", "pri_two_devices"),
  releaseDate: "2026-03-19",
  alternativeDownloadUrl: "https://pan.baidu.com/s/12wA2Trbwoz9j71kN4lghTg?pwd=kgve",
  copyright: "© 2026 Tayueke. All rights reserved."
} as const;

export type ReleaseInfo = {
  downloadUrl: string;
  version: string;
  date: string;
  notes: string[];
};

export function parseReleaseBody(body: string | null, locale: string): string[] {
  if (!body) return [];

  const zhMatch = body.match(/\[zh\]([\s\S]*?)(?=\[en\]|$)/i);
  const enMatch = body.match(/\[en\]([\s\S]*?)(?=\[zh\]|$)/i);

  let content = body;
  if (locale === "zh" && zhMatch) {
    content = zhMatch[1];
  } else if (locale === "en" && enMatch) {
    content = enMatch[1];
  } else if (zhMatch || enMatch) {
    // If tags exist but no match for current locale, try to find the other one or default to whole
    content = (zhMatch ? zhMatch[1] : enMatch?.[1]) || body;
  }

  return content
    .split("\n")
    .map((line) => line.replace(/^-\s*/, "").trim())
    .filter((line) => line.length > 0);
}

function getGitHubHeaders() {
  const headers: Record<string, string> = {
    "User-Agent": "Liqunch-Site",
    Accept: "application/vnd.github.v3+json"
  };
  const token = process.env.GITHUB_TOKEN;
  if (token) {
    headers["Authorization"] = `token ${token}`;
  }
  return headers;
}

export async function getLatestReleaseInfo(locale: string = "zh"): Promise<ReleaseInfo> {
  const fallback: ReleaseInfo = {
    downloadUrl: siteConfig.downloadUrl,
    version: siteConfig.currentVersion,
    date: siteConfig.releaseDate,
    notes: []
  };

  try {
    const res = await fetch("https://api.github.com/repos/elisontz/Liqunch-Lite/releases/latest", {
      headers: getGitHubHeaders(),
      next: { revalidate: 3600 }
    });
    
    if (!res.ok) {
      console.warn(`GitHub API returned ${res.status} for latest release`);
      return fallback;
    }

    const data = await res.json();
    const asset = data.assets?.find((a: any) => a.name.endsWith(".dmg"));
    
    return {
      downloadUrl: asset?.browser_download_url || fallback.downloadUrl,
      version: data.tag_name?.replace(/^v/, "") || fallback.version,
      date: data.published_at ? new Date(data.published_at).toISOString().split("T")[0] : fallback.date,
      notes: parseReleaseBody(data.body, locale)
    };
  } catch (error) {
    console.error("Failed to fetch latest release:", error);
    return fallback;
  }
}

export async function getAllReleases(locale: string = "zh"): Promise<ReleaseInfo[]> {
  try {
    const res = await fetch("https://api.github.com/repos/elisontz/Liqunch-Lite/releases", {
      headers: getGitHubHeaders(),
      next: { revalidate: 3600 }
    });
    
    if (!res.ok) {
      console.warn(`GitHub API returned ${res.status} for all releases`);
      return [];
    }

    const data = await res.json();
    return data.map((release: any) => {
      const asset = release.assets?.find((a: any) => a.name.endsWith(".dmg"));
      return {
        downloadUrl: asset?.browser_download_url || "",
        version: release.tag_name?.replace(/^v/, "") || "",
        date: release.published_at ? new Date(release.published_at).toISOString().split("T")[0] : "",
        notes: parseReleaseBody(release.body, locale)
      };
    });
  } catch (error) {
    console.error("Failed to fetch all releases:", error);
    return [];
  }
}
