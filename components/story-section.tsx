type ContrastLine = {
  label: string;
  detail: string;
};

type StorySectionProps = {
  heading: string;
  paragraphs: ReadonlyArray<string>;
  contrastLines: ReadonlyArray<ContrastLine>;
};

export function StorySection({ heading, paragraphs, contrastLines }: StorySectionProps) {
  return (
    <section className="story-stage">
      <div className="section-intro">
        <p className="section-kicker">Why It Exists</p>
        <h2>{heading}</h2>
      </div>
      <div className="story-layout">
        <div className="story-copy">
          {paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div className="story-contrast">
          {contrastLines.map((item) => (
            <article key={item.label} className="contrast-line">
              <p className="contrast-label">{item.label}</p>
              <p className="contrast-detail">{item.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
