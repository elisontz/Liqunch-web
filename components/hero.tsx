import Link from "next/link";

import { BuyButton } from "@/components/buy-button";

type SceneTile = {
  label: string;
  tone: "blue" | "silver" | "amber";
  size: "wide" | "square";
};

type HeroProps = {
  title: string;
  subtitle: string;
  description: string;
  primaryCta: string;
  secondaryCta: string;
  primaryHref: string;
  secondaryPriceId: string;
  meta: string;
  scene: {
    eyebrow: string;
    title: string;
    status: string;
    focusLabel: string;
    focusText: string;
    tiles: ReadonlyArray<SceneTile>;
  };
};

export function Hero({
  title,
  subtitle,
  description,
  primaryCta,
  secondaryCta,
  primaryHref,
  secondaryPriceId,
  meta,
  scene
}: HeroProps) {
  return (
    <section className="hero">
      <div className="hero-copy">
        <p className="eyebrow">oLauncher</p>
        <h1>
          <span>{title}</span>
          <span className="hero-subtitle-line">{subtitle}</span>
        </h1>
        <p className="lead">{description}</p>
        <div className="hero-actions">
          <Link href={primaryHref} className="primary-button">
            {primaryCta}
          </Link>
          <BuyButton label={secondaryCta} priceId={secondaryPriceId} className="secondary-button" />
        </div>
        <p className="meta">{meta}</p>
      </div>
      <div className="hero-visual-shell" data-testid="hero-visual">
        <div className="hero-glow hero-glow-left" />
        <div className="hero-glow hero-glow-right" />
        <div className="scene-stage">
          <div className="scene-header">
            <div>
              <p className="scene-eyebrow">{scene.eyebrow}</p>
              <p className="scene-title">{scene.title}</p>
            </div>
            <span className="scene-status">{scene.status}</span>
          </div>
          <div className="scene-grid">
            {scene.tiles.map((tile) => (
              <div key={tile.label} className="scene-tile" data-tone={tile.tone} data-size={tile.size}>
                <span className="scene-tile-dot" />
                <span className="scene-tile-label">{tile.label}</span>
              </div>
            ))}
          </div>
          <div className="scene-footer">
            <p className="scene-focus-label">{scene.focusLabel}</p>
            <p className="scene-focus-text">{scene.focusText}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
