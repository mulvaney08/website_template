import { Container } from './container';
import { SectionHeading } from './section-heading';

type FAQItem = {
  question: string;
  answer: string;
};

type FAQSectionProps = {
  title: string;
  description?: string;
  items: FAQItem[];
  eyebrow?: string;
  className?: string;
};

export function FAQSection({ title, description, items, eyebrow = 'FAQs', className = '' }: FAQSectionProps) {
  return (
    <section className={`section-pad bg-white ${className}`.trim()}>
      <Container>
        <SectionHeading eyebrow={eyebrow} title={title} description={description} />
        <div className="mt-8 space-y-3">
          {items.map((item) => (
            <details key={item.question} className="surface-card p-5">
              <summary className="cursor-pointer text-base font-semibold text-brand-navy">{item.question}</summary>
              <p className="mt-3 text-brand-slate">{item.answer}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
