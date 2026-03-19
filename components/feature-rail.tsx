type FeatureItem = {
  title: string;
  description: string;
};

type FeatureRailProps = {
  heading: string;
  items: ReadonlyArray<FeatureItem>;
};

export function FeatureRail({ heading, items }: FeatureRailProps) {
  return (
    <section className="feature-rail-section">
      <div className="section-intro">
        <p className="section-kicker">Feature Rail</p>
        <h2>{heading}</h2>
      </div>
      <div className="feature-rail">
        {items.map((item) => (
          <article key={item.title} className="feature-rail-row">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
