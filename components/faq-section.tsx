type FaqSectionProps = {
  heading: string;
  faqs: ReadonlyArray<{ question: string; answer: string }>;
};

export function FaqSection({ heading, faqs }: FaqSectionProps) {
  return (
    <section className="section-block">
      <div className="section-copy">
        <p className="section-label">FAQ</p>
        <h2>{heading}</h2>
      </div>
      <div className="faq-list">
        {faqs.map((faq) => (
          <article key={faq.question} className="faq-item">
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
