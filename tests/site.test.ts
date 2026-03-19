import { describe, expect, it } from "vitest";

import {
  defaultLocale,
  getLocalizedPath,
  localeLabels,
  normalizeLocale,
  siteConfig
} from "@/lib/site";
import { getContent } from "@/content";

describe("site locale helpers", () => {
  it("normalizes unknown locales back to Chinese", () => {
    expect(normalizeLocale("zh")).toBe("zh");
    expect(normalizeLocale("en")).toBe("en");
    expect(normalizeLocale("fr")).toBe(defaultLocale);
  });

  it("builds localized routes with Chinese as the default root", () => {
    expect(getLocalizedPath("zh", "")).toBe("/zh");
    expect(getLocalizedPath("zh", "release")).toBe("/zh/release");
    expect(getLocalizedPath("zh", "refund")).toBe("/zh/refund");
    expect(getLocalizedPath("en", "")).toBe("/en");
    expect(getLocalizedPath("en", "terms")).toBe("/en/terms");
  });

  it("exposes the configured labels and public environment defaults", () => {
    expect(localeLabels.zh).toBeTruthy();
    expect(localeLabels.en).toBeTruthy();
    expect(siteConfig.currentVersion).toBeTruthy();
    expect(siteConfig.supportEmail).toBe("elisonyung@gmail.com");
  });

  it("exposes redesigned homepage content blocks in both locales", () => {
    const zh = getContent("zh");
    const en = getContent("en");

    expect(zh.hero.scene.tiles.length).toBeGreaterThanOrEqual(8);
    expect(en.hero.scene.tiles.length).toBeGreaterThanOrEqual(8);
    expect(zh.story.paragraphs).toHaveLength(3);
    expect(en.story.paragraphs).toHaveLength(3);
    expect(zh.story.contrastLines).toHaveLength(3);
    expect(en.story.contrastLines).toHaveLength(3);
    expect(zh.featureRail.items.length).toBeGreaterThanOrEqual(5);
    expect(en.featureRail.items.length).toBeGreaterThanOrEqual(5);
    expect(zh.pricing.recommendedTier).toBeDefined();
    expect(en.pricing.recommendedTier).toBeDefined();
    expect(zh.faqs.length).toBeGreaterThan(0);
    expect(en.faqs.length).toBeGreaterThan(0);
  });
});
