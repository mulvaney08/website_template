import type { Metadata } from 'next';
import Link from 'next/link';
import { CTAButton } from '@/components/cta-button';
import { ContactForm } from '@/components/contact-form';
import { Container } from '@/components/container';
import { CTABand } from '@/components/cta-band';
import { FAQSection } from '@/components/faq-section';
import { MapPlaceholder } from '@/components/map-placeholder';
import { SectionHeading } from '@/components/section-heading';
import { siteConfig } from '@/data/site-config';

const { businessProfile, contactFlowSteps, faqs, pageContent } = siteConfig;
const { contact: contactPageSeo } = businessProfile.seoMetadata.pages;

export const metadata: Metadata = {
  title: contactPageSeo.title,
  description: contactPageSeo.description,
  alternates: {
    canonical: contactPageSeo.canonical
  },
  openGraph: {
    title: contactPageSeo.openGraphTitle,
    description: contactPageSeo.openGraphDescription
  }
};

export default function ContactPage() {
  return (
    <>
      <section className="section-pad bg-brand-charcoal text-white">
        <Container className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <SectionHeading
              as="h1"
              eyebrow="Contact BrightSpark Electrical"
              title={pageContent.contact.pageTitle}
              description={pageContent.contact.pageDescription}
              invert
            />
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <CTAButton href={businessProfile.phoneHref}>{businessProfile.ctaLabels.emergencyCallNow}</CTAButton>
              <CTAButton href={`mailto:${businessProfile.email}`} variant="secondary" className="border-white/50 bg-transparent text-white hover:bg-white/10">
                {businessProfile.ctaLabels.emailUs}
              </CTAButton>
            </div>
            <p className="mt-4 text-sm text-slate-200">
              Need service details first? Review{' '}
              <Link href="/services" className="font-semibold text-brand-amber hover:underline">
                our service categories
              </Link>
              .
            </p>
          </div>

          <aside className="panel-dark panel-grid p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-amber">Emergency Response</p>
            <p className="mt-2 text-xl font-semibold">{pageContent.contact.emergencyLabel}</p>
            <p className="mt-3 text-slate-200">{pageContent.contact.emergencyDescription}</p>
            <a href={businessProfile.phoneHref} className="btn-base btn-accent mt-5 w-full">
              {businessProfile.ctaLabels.callNow}
            </a>
          </aside>
        </Container>
      </section>

      <section className="section-pad-tight bg-white">
        <Container className="grid gap-8 xl:grid-cols-[1.15fr_0.85fr]">
          <div>
            <ContactForm />
          </div>

          <aside className="space-y-4">
            <div className="surface-card p-6">
              <h2 className="text-xl font-bold text-brand-navy">Call Us</h2>
              <a href={businessProfile.phoneHref} className="mt-2 inline-block text-lg font-semibold text-brand-blue hover:underline">
                {businessProfile.phoneDisplay}
              </a>
              <p className="mt-2 text-sm text-brand-slate">{pageContent.contact.callCardDescription}</p>
            </div>

            <div className="surface-card p-6">
              <h2 className="text-xl font-bold text-brand-navy">Opening Hours</h2>
              <ul className="mt-3 space-y-1 text-brand-slate">
                {businessProfile.openingHours.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
              <p className="mt-3 text-sm font-medium text-brand-blue">{pageContent.contact.hoursNote}</p>
            </div>

            <div className="surface-card p-6">
              <h2 className="text-xl font-bold text-brand-navy">Service Area Coverage</h2>
              <p className="mt-2 text-brand-slate">{businessProfile.serviceArea.summary}</p>
              <p className="mt-2 text-sm text-brand-slate">{businessProfile.serviceArea.extended}</p>
            </div>
          </aside>
        </Container>
      </section>

      <section className="section-pad-tight bg-brand-cloud">
        <Container className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="surface-card p-6 sm:p-7">
            <h2 className="text-xl font-bold text-brand-navy">{pageContent.contact.flowTitle}</h2>
            <ol className="mt-4 space-y-2">
              {contactFlowSteps.map((step, index) => (
                <li key={step} className="flex gap-3 text-sm text-brand-slate">
                  <span className="mt-[2px] inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-sm bg-brand-navy text-xs font-semibold text-white">
                    {index + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </article>

          <article className="surface-card p-6 sm:p-7">
            <h2 className="text-xl font-bold text-brand-navy">{pageContent.contact.demoCardTitle}</h2>
            <p className="mt-3 text-sm text-brand-slate">{pageContent.contact.demoCardBody}</p>
            <p className="mt-4 text-sm text-brand-slate">
              Prefer to call?{' '}
              <a href={businessProfile.phoneHref} className="font-semibold text-brand-blue hover:underline">
                {businessProfile.phoneDisplay}
              </a>
            </p>
          </article>
        </Container>
      </section>

      <section className="pb-20 pt-8">
        <Container>
          <MapPlaceholder />
        </Container>
      </section>

      <FAQSection title={pageContent.contact.faqTitle} description={pageContent.contact.faqDescription} items={faqs.contact} />

      <CTABand title={pageContent.contact.ctaBandTitle} text={pageContent.contact.ctaBandText} />
    </>
  );
}
