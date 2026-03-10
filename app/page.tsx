import type { Metadata } from 'next';
import Link from 'next/link';
import { CTAButton } from '@/components/cta-button';
import { Container } from '@/components/container';
import { CTABand } from '@/components/cta-band';
import { FAQSection } from '@/components/faq-section';
import { SectionHeading } from '@/components/section-heading';
import { siteConfig } from '@/data/site-config';

const { businessProfile, faqs, pageContent, processSteps, whyChooseUs } = siteConfig;
const { home: homePageSeo } = businessProfile.seoMetadata.pages;

export const metadata: Metadata = {
  title: homePageSeo.title,
  description: homePageSeo.description,
  alternates: {
    canonical: homePageSeo.canonical
  },
  openGraph: {
    title: homePageSeo.openGraphTitle,
    description: homePageSeo.openGraphDescription
  }
};

const serviceIconPath: Record<string, string> = {
  'emergency-repairs': 'M12 2l7 12h-4l1 8-8-10h4l-1-10z',
  diagnostics: 'M10 2a8 8 0 105.3 14l4.6 4.6 1.4-1.4-4.6-4.6A8 8 0 0010 2z',
  'consumer-unit-upgrades': 'M4 4h16v16H4z M8 8h8v2H8z M8 12h8v2H8z',
  'lighting-installation': 'M12 2a6 6 0 00-3 11v3h6v-3A6 6 0 0012 2z M9 19h6',
  'ev-charger-installation': 'M8 3h8v8h-2v4l-4-4H8z M6 16h12v4H6z',
  rewiring: 'M3 12h6l2-3 4 6 2-3h4',
  'inspections-safety': 'M12 2l8 3v6c0 5-3.5 9-8 11-4.5-2-8-6-8-11V5z'
};

export default function Home() {
  return (
    <>
      <section className="section-pad bg-brand-charcoal text-white">
        <Container className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="inline-flex border-l-4 border-brand-amber pl-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand-amber">
              Electrician Dublin
            </p>
            <h1 className="mt-5 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">{pageContent.home.heroTitle}</h1>
            <p className="mt-5 max-w-2xl text-lg text-slate-200 sm:text-xl">{pageContent.home.heroDescription}</p>

            <ul className="check-list mt-6 space-y-2 text-sm text-slate-200 sm:text-base">
              {pageContent.home.heroChecklist.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CTAButton href="/contact">{businessProfile.ctaLabels.requestQuote}</CTAButton>
              <CTAButton href={businessProfile.phoneHref} variant="secondary" className="border-white/50 bg-transparent text-white hover:bg-white/10">
                {businessProfile.ctaLabels.callNow}
              </CTAButton>
            </div>
          </div>

          <aside className="panel-dark panel-grid cut-corner p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-amber">Live Priority Lane</p>
            <h2 className="mt-3 text-2xl font-bold">Emergency Electrical Repairs</h2>
            <p className="mt-3 text-slate-200">
              Power loss, burning smells, sparking sockets, or repeated tripping? Call now for immediate triage and next-step guidance.
            </p>

            <a href={businessProfile.phoneHref} className="btn-base btn-accent mt-6 w-full">
              {businessProfile.ctaLabels.emergencyCallNow}
            </a>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {businessProfile.trustMetrics.slice(0, 2).map((metric) => (
                <article key={metric.label} className="kpi-tile">
                  <p className="text-xs uppercase tracking-wide text-slate-300">{metric.label}</p>
                  <p className="mt-1 text-lg font-semibold text-white">{metric.value}</p>
                </article>
              ))}
            </div>
          </aside>
        </Container>
      </section>

      <section className="bg-brand-amber py-4">
        <Container>
          <p className="text-center text-sm font-semibold text-brand-navy sm:text-base">{pageContent.home.emergencyBanner}</p>
        </Container>
      </section>

      <section className="bg-slate-950 py-6 text-white">
        <Container className="grid gap-4 md:grid-cols-4">
          {businessProfile.trustMetrics.map((metric) => (
            <article key={metric.label} className="rounded-md border border-slate-700 bg-slate-900/70 p-4">
              <p className="text-xs uppercase tracking-wider text-brand-amber">{metric.label}</p>
              <p className="mt-2 text-xl font-bold">{metric.value}</p>
              <p className="mt-2 text-sm text-slate-300">{metric.note}</p>
            </article>
          ))}
        </Container>
      </section>

      <section className="section-pad bg-white">
        <Container>
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <SectionHeading eyebrow="Service Matrix" title={pageContent.home.servicesTitle} description={pageContent.home.servicesDescription} />
            <CTAButton href="/services" variant="secondary">
              {businessProfile.ctaLabels.viewAllServices}
            </CTAButton>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {businessProfile.services.map((service) => (
              <article key={service.slug} className="surface-card cut-corner p-6">
                <div className="inline-flex rounded-md bg-brand-light p-2">
                  <svg viewBox="0 0 24 24" className="h-6 w-6 fill-brand-blue" aria-hidden="true">
                    <path d={serviceIconPath[service.slug]} />
                  </svg>
                </div>
                <h2 className="mt-4 text-xl font-semibold text-brand-navy">{service.title}</h2>
                <p className="mt-3 text-sm text-brand-slate">{service.summary}</p>
                <p className="mt-3 text-sm text-brand-slate">
                  <span className="font-semibold text-brand-navy">Best for:</span> {service.bestFor}
                </p>
                <Link href={`/services#${service.slug}`} className="mt-5 inline-flex text-sm font-semibold text-brand-blue hover:underline">
                  View service details
                </Link>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-pad bg-brand-charcoal text-white">
        <Container className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <SectionHeading
            eyebrow="Safety and Compliance"
            title={pageContent.home.safetyTitle}
            description={pageContent.home.safetyDescription}
            invert
          />
          <ul className="check-list space-y-3 text-slate-200">
            {whyChooseUs.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="section-pad bg-white">
        <Container>
          <SectionHeading eyebrow="Coverage Model" title={pageContent.home.comparisonTitle} />
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {businessProfile.audienceSegments.map((segment) => (
              <article key={segment.title} className="surface-card p-6 sm:p-7">
                <h3 className="text-xl font-semibold text-brand-navy">{segment.title}</h3>
                <p className="mt-3 text-brand-slate">{segment.text}</p>
                <ul className="check-list mt-4 space-y-2 text-sm text-brand-slate">
                  {segment.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-pad-tight bg-brand-light">
        <Container className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-blue">EV Spotlight</p>
            <h2 className="mt-3 text-3xl font-bold text-brand-navy">{businessProfile.evSpotlight.title}</h2>
            <p className="mt-4 text-brand-slate">{businessProfile.evSpotlight.text}</p>
            <ul className="check-list mt-5 space-y-2 text-sm text-brand-slate">
              {businessProfile.evSpotlight.bullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="mt-6">
              <CTAButton href="/services#ev-charger-installation">{businessProfile.ctaLabels.getQuote}</CTAButton>
            </div>
          </div>
          <div className="panel-dark panel-grid p-6 sm:p-8">
            <p className="text-sm text-slate-300">Search intent target</p>
            <p className="mt-2 text-2xl font-bold">EV Charger Installation Dublin</p>
            <p className="mt-3 text-slate-200">
              This section is intentionally optimized for EV charger installation Dublin search relevance while staying conversion-focused.
            </p>
          </div>
        </Container>
      </section>

      <section className="section-pad bg-white">
        <Container>
          <SectionHeading eyebrow="Process Timeline" title={pageContent.home.processTitle} description={pageContent.home.processDescription} />
          <ol className="mt-8 grid gap-4 md:grid-cols-4">
            {processSteps.map((step, index) => (
              <li key={step.title} className="surface-card p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-blue">Step {index + 1}</p>
                <h3 className="mt-2 text-lg font-semibold text-brand-navy">{step.title}</h3>
                <p className="mt-2 text-sm text-brand-slate">{step.text}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="section-pad-tight bg-brand-charcoal text-white">
        <Container>
          <SectionHeading
            eyebrow="Case Snapshots"
            title={pageContent.home.testimonialsTitle}
            description={pageContent.home.testimonialsDescription}
            invert
          />
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {businessProfile.testimonials.slice(0, 3).map((item) => (
              <article key={item.name} className="rounded-lg border border-slate-700 bg-slate-900/60 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-amber">{item.tag}</p>
                <p className="mt-3 text-sm text-slate-200">{item.problem}</p>
                <p className="mt-2 text-sm font-semibold text-white">Outcome: {item.outcome}</p>
                <p className="mt-4 text-sm text-slate-200">“{item.quote}”</p>
                <p className="mt-4 text-xs text-slate-400">
                  {item.name} · {item.area}
                </p>
              </article>
            ))}
          </div>
          <Link href="/testimonials" className="mt-6 inline-flex text-sm font-semibold text-brand-amber hover:underline">
            {businessProfile.ctaLabels.viewAllTestimonials}
          </Link>
        </Container>
      </section>

      <FAQSection title={pageContent.home.faqTitle} description={pageContent.home.faqDescription} items={faqs.home} className="bg-white" />

      <CTABand title={pageContent.home.ctaBandTitle} text={pageContent.home.ctaBandText} />
    </>
  );
}
