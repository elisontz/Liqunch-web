import Link from "next/link";

type HeroProps = {
  title: string;
  description: string;
  primaryCta: string;
  secondaryCta: string;
  primaryHref: string;
  secondaryHref: string;
  meta: string;
};

export function Hero({
  title,
  description,
  primaryCta,
  secondaryCta,
  primaryHref,
  secondaryHref,
  meta
}: HeroProps) {
  return (
    <section className="hero">
      <div className="hero-copy">
        <h1>
          <span>{title}</span>
        </h1>
        <p className="lead">{description}</p>
        <div className="hero-actions">
          <Link href={primaryHref} className="primary-button">
            {primaryCta}
          </Link>
          <Link href={secondaryHref} className="secondary-button">
            {secondaryCta}
          </Link>
        </div>
        <p className="meta">{meta}</p>
      </div>
    </section>
  );
}
