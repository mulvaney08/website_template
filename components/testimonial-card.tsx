type TestimonialCardProps = {
  quote: string;
  name: string;
  area: string;
};

export function TestimonialCard({ quote, name, area }: TestimonialCardProps) {
  return (
    <figure className="surface-card p-6 sm:p-7">
      <p className="text-xs font-semibold uppercase tracking-wide text-brand-blue">Sample feedback</p>
      <blockquote className="mt-3 text-brand-slate">“{quote}”</blockquote>
      <figcaption className="mt-5 border-t border-slate-100 pt-4 text-sm font-semibold text-brand-navy">
        {name} <span className="font-normal text-brand-slate">• {area}</span>
      </figcaption>
    </figure>
  );
}
