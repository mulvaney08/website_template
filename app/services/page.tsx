import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/container';
import { CTABand } from '@/components/cta-band';
import { CTAButton } from '@/components/cta-button';
import { FAQSection } from '@/components/faq-section';
import { SectionHeading } from '@/components/section-heading';
import { siteConfig } from '@/data/site-config';

const { businessProfile, faqs, pageContent } = siteConfig;
const { services: servicesPageSeo } = businessProfile.seoMetadata.pages;

export const metadata: Metadata = {
  title: servicesPageSeo.title,
  description: servicesPageSeo.description,
  alternates: {
    canonical: servicesPageSeo.canonical
  },
  openGraph: {
    title: servicesPageSeo.openGraphTitle,
    description: servicesPageSeo.openGraphDescription
  }
};

const serviceBySlug = new Map(businessProfile.services.map((service) => [service.slug, service]));

export default function ServicesPage() {
  return (
    <>
      <section className="section-pad bg-brand-charcoal text-white">
        <Container className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <SectionHeading
            as="h1"
            eyebrow="Electrical Services Dublin"
            title={pageContent.services.pageTitle}
            description={pageContent.services.pageDescription}
            invert
          />

          <aside className="panel-dark panel-grid p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-amber">Emergency Route</p>
            <h2 className="mt-2 text-2xl font-bold">{pageContent.services.emergencyTitle}</h2>
            <p className="mt-3 text-slate-200">{pageContent.services.emergencyDescription}</p>
            <a href={businessProfile.phoneHref} className="btn-base btn-accent mt-5 w-full">
              {businessProfile.ctaLabels.emergencyCallNow}
            </a>
          </aside>
        </Container>
      </section>

      <section className="section-pad-tight bg-white">
        <Container>
          <SectionHeading eyebrow="Category Index" title={pageContent.services.categoriesTitle} description={pageContent.services.categoriesDescription} />
          <div className="mt-6 flex flex-wrap gap-2">
            {businessProfile.serviceCategories.map((category) => (
              <a key={category.id} href={`#${category.id}`} className="rounded-md border border-slate-300 px-4 py-2 text-sm font-semibold text-brand-navy hover:bg-brand-light">
                {category.title}
              </a>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-pad-tight bg-brand-cloud">
        <Container className="space-y-8">
          {businessProfile.serviceCategories.map((category) => (
            <section id={category.id} key={category.id} className="surface-card p-6 sm:p-8">
              <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-blue">Category</p>
                  <h2 className="mt-2 text-2xl font-bold text-brand-navy">{category.title}</h2>
                  <p className="mt-3 text-brand-slate">{category.intro}</p>
                </div>
                <div className="rounded-md border border-slate-200 bg-white p-4">
                  <p className="text-sm font-semibold text-brand-navy">Category FAQs</p>
                  <div className="mt-3 space-y-2">
                    {category.faqs.map((item) => (
                      <details key={item.question} className="rounded-md border border-slate-200 px-3 py-2">
                        <summary className="cursor-pointer text-sm font-semibold text-brand-navy">{item.question}</summary>
                        <p className="mt-2 text-sm text-brand-slate">{item.answer}</p>
                      </details>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {category.serviceSlugs.map((slug) => {
                  const service = serviceBySlug.get(slug);
                  if (!service) return null;

                  return (
                    <article id={service.slug} key={service.slug} className="rounded-md border border-slate-300 bg-white p-5">
                      <h3 className="text-xl font-semibold text-brand-navy">{service.title}</h3>
                      <p className="mt-2 text-sm text-brand-slate">{service.summary}</p>

                      <div className="mt-4 rounded-md bg-brand-light p-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-brand-blue">Problem / Solution</p>
                        <p className="mt-2 text-sm text-brand-slate">{service.detail}</p>
                      </div>

                      <div className="mt-4">
                        <p className="text-sm font-semibold text-brand-navy">Typical problems solved</p>
                        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-brand-slate">
                          {service.typicalProblems.map((problem) => (
                            <li key={problem}>{problem}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-5 flex flex-wrap gap-2">
                        <CTAButton href="/contact">{service.quoteCtaLabel}</CTAButton>
                        <CTAButton href={businessProfile.phoneHref} variant="secondary">
                          {businessProfile.ctaLabels.callForAdvice}
                        </CTAButton>
                      </div>
                    </article>
                  );
                })}
              </div>
            </section>
          ))}
        </Container>
      </section>

      <section className="section-pad-tight bg-white">
        <Container>
          <p className="text-sm text-brand-slate">
            Need quick guidance before choosing? Use our{' '}
            <Link href="/contact" className="font-semibold text-brand-blue hover:underline">
              contact page
            </Link>{' '}
            and we will match your issue to the correct service.
          </p>
        </Container>
      </section>

      <FAQSection
        title={pageContent.services.faqTitle}
        description={pageContent.services.faqDescription}
        items={faqs.services}
      />

      <CTABand title={pageContent.services.ctaBandTitle} text={pageContent.services.ctaBandText} />
    </>
  );
}
