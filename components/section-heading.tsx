type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
  as?: 'h1' | 'h2';
};

export function SectionHeading({ eyebrow, title, description, centered = false, as = 'h2' }: SectionHeadingProps) {
  const HeadingTag = as;

  return (
    <header className={centered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      {eyebrow ? <p className="text-sm font-semibold uppercase tracking-wide text-brand-blue">{eyebrow}</p> : null}
      <HeadingTag className="mt-3 text-3xl font-bold leading-tight text-brand-navy sm:text-4xl lg:text-[2.6rem]">{title}</HeadingTag>
      {description ? <p className="mt-4 text-lg leading-relaxed text-brand-slate">{description}</p> : null}
    </header>
  );
}
