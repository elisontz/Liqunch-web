import { BuyButton } from "@/components/buy-button";
import { siteConfig } from "@/lib/site";

type Tier = {
  name: string;
  price: string;
  originalPrice: string;
  description: string;
  priceId: "single" | "double";
  features: readonly string[];
};

type PricingSectionProps = {
  heading: string;
  subtitle: string;
  tiers: ReadonlyArray<Tier>;
  ctaLabel: string;
};

const priceIdMap = {
  single: siteConfig.singlePriceId,
  double: siteConfig.doublePriceId
} as const;

export function PricingSection({ heading, subtitle, tiers, ctaLabel }: PricingSectionProps) {
  return (
    <section className="section-block" id="pricing">
      <div className="section-copy">
        <p className="section-label">Pricing</p>
        <h2>{heading}</h2>
        <p>{subtitle}</p>
      </div>
      <div className="pricing-grid">
        {tiers.map((tier) => (
          <article key={tier.name} className="pricing-card">
            <h3>{tier.name}</h3>
            <p className="pricing-description">{tier.description}</p>
            <div className="price-row">
              <span className="price">{tier.price}</span>
              <span className="original-price">{tier.originalPrice}</span>
            </div>
            <ul>
              {tier.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
            <BuyButton
              label={ctaLabel}
              priceId={priceIdMap[tier.priceId]}
              className="primary-button full-width"
            />
          </article>
        ))}
      </div>
    </section>
  );
}
