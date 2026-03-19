type FeatureGridProps = {
  heading: string;
  features: ReadonlyArray<{ title: string; description: string }>;
};

export function FeatureGrid({ heading, features }: FeatureGridProps) {
  return (
    <section className="section-block">
      <div className="section-copy">
        <p className="section-label">Why it matters</p>
        <h2>{heading}</h2>
      </div>
      <div className="feature-grid">
        {features.map((feature) => (
          <article key={feature.title} className="card">
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
