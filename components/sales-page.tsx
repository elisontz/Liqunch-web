import React from "react";
import Script from "next/script";

import { FaqSection } from "@/components/faq-section";
import { FeatureGrid } from "@/components/feature-grid";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { InstallSteps } from "@/components/install-steps";
import { LanguageSwitcher } from "@/components/language-switcher";
import { PricingSection } from "@/components/pricing-section";
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
          <div>
            <p className="eyebrow">oLauncher</p>
            <p className="header-copy">macOS 26 launchpad-style app launcher</p>
          </div>
          <LanguageSwitcher locale={locale} />
        </header>
        <main className="content-stack">
          <Hero
            title={content.hero.title}
            subtitle={content.hero.subtitle}
            primaryCta={content.hero.primaryCta}
            secondaryCta={content.hero.secondaryCta}
            primaryHref={siteConfig.downloadUrl}
            secondaryPriceId={siteConfig.singlePriceId}
            meta={content.hero.meta}
          />
          <FeatureGrid heading={content.featureHeading} features={content.features} />
          <PricingSection
            heading={content.pricing.heading}
            subtitle={content.pricing.subtitle}
            tiers={content.pricing.tiers}
            ctaLabel={content.hero.secondaryCta}
          />
          <FaqSection heading={content.faqHeading} faqs={content.faqs} />
          <InstallSteps heading={content.install.heading} steps={content.install.steps} />
        </main>
        <Footer
          locale={locale}
          releaseLabel={content.footer.releaseLabel}
          releaseHref={content.footer.releaseHref}
          releaseText={content.footer.releaseText}
          privacyText={content.footer.privacyText}
          termsText={content.footer.termsText}
          supportEmail={siteConfig.supportEmail}
          currentVersion={siteConfig.currentVersion}
          releaseDate={siteConfig.releaseDate}
        />
      </div>
    </>
  );
}
