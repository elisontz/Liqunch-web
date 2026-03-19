type InstallStepsProps = {
  heading: string;
  steps: readonly string[];
};

export function InstallSteps({ heading, steps }: InstallStepsProps) {
  return (
    <section className="section-block">
      <div className="section-copy">
        <p className="section-label">Install</p>
        <h2>{heading}</h2>
      </div>
      <ol className="install-list">
        {steps.map((step) => (
          <li key={step}>{step}</li>
        ))}
      </ol>
    </section>
  );
}
