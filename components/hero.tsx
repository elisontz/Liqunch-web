import Link from "next/link";

import { BuyButton } from "@/components/buy-button";

type HeroProps = {
  title: string;
  subtitle: string;
  primaryCta: string;
  secondaryCta: string;
  primaryHref: string;
  secondaryPriceId: string;
  meta: string;
};

export function Hero({
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  primaryHref,
  secondaryPriceId,
  meta
}: HeroProps) {
  return (
    <section className="hero">
      <p className="eyebrow">oLauncher for Mac</p>
      <h1>{title}</h1>
      <p className="lead">{subtitle}</p>
      <div className="hero-actions">
        <Link href={primaryHref} className="primary-button">
          {primaryCta}
        </Link>
        <BuyButton label={secondaryCta} priceId={secondaryPriceId} className="secondary-button" />
      </div>
      <p className="meta">{meta}</p>
    </section>
  );
}
