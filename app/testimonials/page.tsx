import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/container';
import { CTABand } from '@/components/cta-band';
import { CTAButton } from '@/components/cta-button';
import { SectionHeading } from '@/components/section-heading';
import { siteConfig } from '@/data/site-config';

const { businessProfile, pageContent, testimonialOutcomes } = siteConfig;
const { testimonials: testimonialsPageSeo } = businessProfile.seoMetadata.pages;

export const metadata: Metadata = {
  title: testimonialsPageSeo.title,
  description: testimonialsPageSeo.description,
  alternates: {
    canonical: testimonialsPageSeo.canonical
  },
  openGraph: {
    title: testimonialsPageSeo.openGraphTitle,
    description: testimonialsPageSeo.openGraphDescription
  }
};

export default function TestimonialsPage() {
  return (
    <>
      <section className="section-pad bg-brand-charcoal text-white">
        <Container>
          <SectionHeading
            as="h1"
            eyebrow="Sample / Demo Case Results"
            title={pageContent.testimonials.pageTitle}
            description={pageContent.testimonials.pageDescription}
            invert
          />
          <p className="mt-5 rounded-md border border-slate-700 bg-slate-900/60 p-4 text-sm text-slate-200">
            {pageContent.testimonials.demoBanner}
          </p>
        </Container>
      </section>

      <section className="section-pad-tight bg-white">
        <Container className="grid gap-4 lg:grid-cols-2">
          {businessProfile.testimonials.map((item) => (
            <article key={`${item.name}-${item.tag}`} className="surface-card p-6">
              <div className="flex items-center justify-between gap-4">
                <p className="rounded-md bg-brand-light px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-brand-blue">{item.tag}</p>
                <p className="text-xs text-brand-slate">
                  {item.name} · {item.area}
                </p>
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">Problem</p>
                  <p className="mt-1 text-sm text-brand-slate">{item.problem}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">Solution</p>
                  <p className="mt-1 text-sm text-brand-slate">{item.solution}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">Outcome</p>
                  <p className="mt-1 text-sm font-semibold text-brand-navy">{item.outcome}</p>
                </div>
              </div>

              <blockquote className="mt-4 border-l-4 border-brand-amber pl-4 text-brand-slate">“{item.quote}”</blockquote>
            </article>
          ))}
        </Container>
      </section>

      <section className="section-pad-tight bg-brand-cloud">
        <Container className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="surface-card p-6 sm:p-7">
            <h2 className="text-xl font-bold text-brand-navy">{pageContent.testimonials.outcomesTitle}</h2>
            <ul className="check-list mt-4 space-y-2 text-brand-slate">
              {testimonialOutcomes.map((outcome) => (
                <li key={outcome}>{outcome}</li>
              ))}
            </ul>
          </article>

          <article className="surface-card p-6 sm:p-7">
            <h2 className="text-xl font-bold text-brand-navy">{pageContent.testimonials.urgentHelpTitle}</h2>
            <p className="mt-3 text-brand-slate">{pageContent.testimonials.urgentHelpDescription}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              <CTAButton href="/contact">{businessProfile.ctaLabels.getInTouch}</CTAButton>
              <CTAButton href={businessProfile.phoneHref} variant="secondary">
                {businessProfile.ctaLabels.callNow}
              </CTAButton>
            </div>
            <p className="mt-4 text-sm text-brand-slate">
              Need service details first? Visit{' '}
              <Link href="/services" className="font-semibold text-brand-blue hover:underline">
                services
              </Link>
              .
            </p>
          </article>
        </Container>
      </section>

      <CTABand title={pageContent.testimonials.ctaBandTitle} text={pageContent.testimonials.ctaBandText} />
    </>
  );
}
