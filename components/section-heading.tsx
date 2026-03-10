type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
  as?: 'h1' | 'h2';
  invert?: boolean;
};

export function SectionHeading({ eyebrow, title, description, centered = false, as = 'h2', invert = false }: SectionHeadingProps) {
  const HeadingTag = as;
  const eyebrowClass = invert ? 'text-brand-amber' : 'text-brand-blue';
  const titleClass = invert ? 'text-white' : 'text-brand-navy';
  const descriptionClass = invert ? 'text-slate-200' : 'text-brand-slate';

  return (
    <header className={centered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      {eyebrow ? <p className={`inline-flex border-l-4 border-brand-amber pl-3 text-sm font-semibold uppercase tracking-widest ${eyebrowClass}`}>{eyebrow}</p> : null}
      <HeadingTag className={`mt-4 text-3xl font-bold leading-tight sm:text-4xl lg:text-[2.6rem] ${titleClass}`}>{title}</HeadingTag>
      {description ? <p className={`mt-4 text-lg leading-relaxed ${descriptionClass}`}>{description}</p> : null}
    </header>
  );
}
