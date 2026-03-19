import React from "react";
import Script from "next/script";

import { FeatureRail } from "@/components/feature-rail";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { LanguageSwitcher } from "@/components/language-switcher";
import { PricingSection } from "@/components/pricing-section";
import { StorySection } from "@/components/story-section";
import { getContent } from "@/content";
import { siteConfig, type Locale } from "@/lib/site";

type SalesPageProps = {
  locale: Locale;
};

export function SalesPage({ locale }: SalesPageProps) {
  const content = getContent(locale);

  return (
    <>
      <Script src="https://cdn.paddle.com/paddle/v2/paddle.js" strategy="afterInteractive" />
      <div className="page-shell">
        <header className="site-header">
          <div className="site-header-copy">
            <p className="site-title">oLauncher</p>
          </div>
          <LanguageSwitcher locale={locale} />
        </header>
        <main className="content-stack">
          <Hero
            title={content.hero.title}
            description={content.hero.description}
            primaryCta={content.hero.primaryCta}
            secondaryCta={content.hero.secondaryCta}
            primaryHref={siteConfig.downloadUrl}
            secondaryHref="#pricing"
            meta={content.hero.meta}
          />
          <StorySection
            heading={content.story.heading}
            paragraphs={content.story.paragraphs}
            contrastLines={content.story.contrastLines}
          />
          <FeatureRail heading={content.featureRail.heading} items={content.featureRail.items} />
          <PricingSection
            heading={content.pricing.heading}
            subtitle={content.pricing.subtitle}
            tiers={content.pricing.tiers}
            ctaLabel={content.pricing.ctaLabel}
            recommendedTier={content.pricing.recommendedTier}
          />
        </main>
        <Footer
          locale={locale}
          releaseLabel={content.footer.releaseLabel}
          releaseHref={content.footer.releaseHref}
          releaseText={content.footer.releaseText}
          privacyText={content.footer.privacyText}
          termsText={content.footer.termsText}
          refundText={content.footer.refundText}
          supportEmail={siteConfig.supportEmail}
          currentVersion={siteConfig.currentVersion}
          releaseDate={siteConfig.releaseDate}
        />
      </div>
    </>
  );
}
