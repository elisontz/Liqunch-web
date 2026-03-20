import Link from "next/link";

type HeroProps = {
  title: string;
  subtitle: string;
  description: string;
  primaryCta: string;
  secondaryCta: string;
  primaryHref: string;
  secondaryHref: string;
  meta: string;
  releaseLabel: string;
  releaseDate: string;
  currentVersion: string;
  versionLabel: string;
  releaseHref: string;
};

export function Hero({
  title,
  subtitle,
  description,
  primaryCta,
  secondaryCta,
  primaryHref,
  secondaryHref,
  meta,
  releaseLabel,
  releaseDate,
  currentVersion,
  versionLabel,
  releaseHref
}: HeroProps) {
  return (
    <section className="hero">
      <div className="hero-copy">
        <h1>
          <span className="hero-title-main">{title}</span>
          <span className="hero-title-support">{subtitle}</span>
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
        <div className="meta">
          <span>{meta}</span>
          <span className="meta-separator">·</span>
          <Link href={releaseHref} className="meta-link">
            <span>{releaseLabel}: {releaseDate}</span>
            <span className="meta-separator">·</span>
            <span>{versionLabel} {currentVersion}</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
