import { describe, expect, it } from "vitest";

import {
  defaultLocale,
  getLocalizedPath,
  localeLabels,
  normalizeLocale,
  siteConfig
} from "@/lib/site";

describe("site locale helpers", () => {
  it("normalizes unknown locales back to Chinese", () => {
    expect(normalizeLocale("zh")).toBe("zh");
    expect(normalizeLocale("en")).toBe("en");
    expect(normalizeLocale("fr")).toBe(defaultLocale);
  });

  it("builds localized routes with Chinese as the default root", () => {
    expect(getLocalizedPath("zh", "")).toBe("/zh");
    expect(getLocalizedPath("zh", "release")).toBe("/zh/release");
    expect(getLocalizedPath("en", "")).toBe("/en");
    expect(getLocalizedPath("en", "terms")).toBe("/en/terms");
  });

  it("exposes the configured labels and public environment defaults", () => {
    expect(localeLabels.zh).toBeTruthy();
    expect(localeLabels.en).toBeTruthy();
    expect(siteConfig.currentVersion).toBeTruthy();
    expect(siteConfig.supportEmail).toContain("@");
  });
});
