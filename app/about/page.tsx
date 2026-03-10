import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/container';
import { CTABand } from '@/components/cta-band';
import { CTAButton } from '@/components/cta-button';
import { SectionHeading } from '@/components/section-heading';
import { siteConfig } from '@/data/site-config';

const { businessProfile, pageContent } = siteConfig;
const { about: aboutPageSeo } = businessProfile.seoMetadata.pages;

export const metadata: Metadata = {
  title: aboutPageSeo.title,
  description: aboutPageSeo.description,
  alternates: {
    canonical: aboutPageSeo.canonical
  },
  openGraph: {
    title: aboutPageSeo.openGraphTitle,
    description: aboutPageSeo.openGraphDescription
  }
};

export default function AboutPage() {
  return (
    <>
      <section className="section-pad bg-brand-charcoal text-white">
        <Container className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <SectionHeading
            as="h1"
            eyebrow="About BrightSpark Electrical"
            title={pageContent.about.pageTitle}
            description={pageContent.about.pageDescription}
            invert
          />

          <aside className="panel-dark panel-grid p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-amber">Company Overview</p>
            <p className="mt-3 text-slate-200">{businessProfile.aboutCopy.overview}</p>
            <p className="mt-4 text-slate-200">{businessProfile.aboutCopy.experience}</p>
          </aside>
        </Container>
      </section>

      <section className="section-pad-tight bg-white">
        <Container>
          <SectionHeading eyebrow="Safety Approach" title={businessProfile.aboutCopy.localWhyTitle} />
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {businessProfile.aboutCopy.values.map((value) => (
              <article key={value.title} className="surface-card p-6">
                <h2 className="text-lg font-semibold text-brand-navy">{value.title}</h2>
                <p className="mt-2 text-sm text-brand-slate">{value.text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-pad-tight bg-brand-cloud">
        <Container className="grid gap-5 lg:grid-cols-2">
          <article className="surface-card p-6 sm:p-7">
            <h2 className="text-2xl font-bold text-brand-navy">{pageContent.about.standardsTitle}</h2>
            <ul className="check-list mt-4 space-y-2 text-brand-slate">
              {businessProfile.aboutCopy.standards.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="surface-card p-6 sm:p-7">
            <h2 className="text-2xl font-bold text-brand-navy">{pageContent.about.expectationsTitle}</h2>
            <ul className="check-list mt-4 space-y-2 text-brand-slate">
              {businessProfile.aboutCopy.expectations.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </Container>
      </section>

      <section className="section-pad-tight bg-white">
        <Container className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <SectionHeading eyebrow="Local Coverage" title={pageContent.about.coverageTitle} description={businessProfile.serviceArea.summary} />
            <p className="mt-4 text-brand-slate">{businessProfile.serviceArea.extended}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {businessProfile.serviceArea.areas.map((area) => (
                <span key={area} className="rounded-md border border-slate-300 bg-white px-3 py-1 text-sm text-brand-slate">
                  {area}
                </span>
              ))}
            </div>
          </div>

          <div className="surface-card p-6 sm:p-7">
            <h2 className="text-xl font-bold text-brand-navy">Need service details before booking?</h2>
            <p className="mt-3 text-brand-slate">
              Review our core electrical service categories, then request a quote with your issue and location details.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <CTAButton href="/services">{businessProfile.ctaLabels.viewAllServices}</CTAButton>
              <CTAButton href="/contact" variant="secondary">
                {businessProfile.ctaLabels.requestQuote}
              </CTAButton>
            </div>
            <p className="mt-4 text-sm text-brand-slate">
              Looking for customer examples? Visit{' '}
              <Link href="/testimonials" className="font-semibold text-brand-blue hover:underline">
                case results
              </Link>
              .
            </p>
          </div>
        </Container>
      </section>

      <CTABand title={pageContent.about.ctaBandTitle} text={pageContent.about.ctaBandText} />
    </>
  );
}
