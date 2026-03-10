import type { Metadata } from 'next';
import Link from 'next/link';
import { CTAButton } from '@/components/cta-button';
import { Container } from '@/components/container';
import { CTABand } from '@/components/cta-band';
import { FAQSection } from '@/components/faq-section';
import { SectionHeading } from '@/components/section-heading';
import { TestimonialCard } from '@/components/testimonial-card';
import {
  company,
  homeFaqs,
  processSteps,
  serviceAreaCopy,
  serviceAreas,
  services,
  testimonialOutcomes,
  testimonials,
  trustSignals,
  whyChooseUs
} from '@/data/site';

export const metadata: Metadata = {
  title: 'Plumber in Dublin for Emergency and Planned Plumbing Work',
  description:
    'Looking for a plumber in Dublin? BluePipe Plumbing offers emergency plumbing, leak repairs, drain unblocking, and ongoing maintenance for homes and businesses.',
  alternates: {
    canonical: '/'
  },
  openGraph: {
    title: 'Plumber in Dublin | BluePipe Plumbing',
    description:
      'Dublin plumbing support for urgent callouts and planned repairs. Residential and commercial plumbing services with clear communication.'
  }
};

const serviceHighlights: Record<string, string> = {
  'Emergency Plumbing': 'Rapid stabilisation for leaks, bursts, and overflow risk.',
  'Leak Detection and Repair': 'Source-first diagnostics to avoid repeat water damage.',
  'Drain Unblocking': 'Clear blockages safely and restore normal flow quickly.',
  'Boiler and Water Heater Services': 'Reliable hot water repairs and performance checks.',
  'Bathroom and Kitchen Plumbing': 'Installations and fixes for high-use daily spaces.',
  'General Maintenance': 'Planned upkeep that reduces costly surprise failures.'
};

export default function Home() {
  return (
    <>
      <section className="section-pad bg-gradient-to-b from-white via-brand-light/30 to-brand-light">
        <Container className="grid items-center gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-blue">Trusted local plumbers in Dublin</p>
            <h1 className="mt-4 text-4xl font-bold leading-tight text-brand-navy sm:text-5xl lg:text-6xl">
              Plumbing support that responds fast and fixes problems properly.
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-brand-slate sm:text-xl">
              BluePipe Plumbing helps homeowners and businesses across Dublin with emergency callouts, leak repairs, drainage issues, hot water services, and ongoing maintenance.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <CTAButton href={company.phoneHref} className="w-full sm:w-auto">
                Call {company.phoneDisplay}
              </CTAButton>
              <CTAButton href="/contact" variant="secondary" className="w-full sm:w-auto">
                Request a Quote
              </CTAButton>
            </div>

            <p className="mt-5 text-sm text-brand-slate">
              Need details first? Explore our <Link href="/services" className="font-semibold text-brand-blue hover:underline">plumbing services</Link> or learn more <Link href="/about" className="font-semibold text-brand-blue hover:underline">about our local approach</Link>.
            </p>
          </div>

          <aside className="surface-card p-6 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-blue">Need urgent help now?</p>
            <h2 className="mt-2 text-2xl font-bold text-brand-navy">Speak directly with an emergency plumber.</h2>
            <p className="mt-3 text-brand-slate">
              For active leaks, overflow risk, or no hot water, call immediately and our Dublin team will prioritise your job.
            </p>

            <a href={company.phoneHref} className="btn-base btn-primary mt-6 w-full">
              Emergency call line
            </a>

            <dl className="mt-6 grid grid-cols-2 gap-4 border-t border-slate-100 pt-5 text-sm">
              <div>
                <dt className="font-semibold text-brand-navy">Coverage</dt>
                <dd className="text-brand-slate">Dublin + nearby areas</dd>
              </div>
              <div>
                <dt className="font-semibold text-brand-navy">Service</dt>
                <dd className="text-brand-slate">Homes and businesses</dd>
              </div>
            </dl>
          </aside>
        </Container>
      </section>

      <section className="-mt-6 pb-6 sm:-mt-8 sm:pb-8">
        <Container>
          <div className="grid gap-4 md:grid-cols-3">
            {trustSignals.map((signal) => (
              <article key={signal.title} className="surface-card p-5">
                <h2 className="text-base font-semibold text-brand-navy">{signal.title}</h2>
                <p className="mt-2 text-sm text-brand-slate">{signal.text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-pad">
        <Container>
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Core Services"
              title="Plumbing services designed for quick decisions"
              description="Scan by service type, then contact us for tailored advice and quote options in Dublin."
            />
            <CTAButton href="/services" variant="secondary">
              View All Services
            </CTAButton>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <article key={service.title} className="surface-card p-6 sm:p-7">
                <p className="text-xs font-semibold uppercase tracking-wide text-brand-blue">Service {index + 1}</p>
                <h3 className="mt-2 text-xl font-semibold text-brand-navy">{service.title}</h3>
                <p className="mt-3 text-brand-slate">{service.summary}</p>
                <p className="mt-4 text-sm text-brand-slate">
                  <span className="font-semibold text-brand-navy">Best for:</span> {serviceHighlights[service.title]}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-pad bg-white">
        <Container>
          <SectionHeading
            eyebrow="Why Choose Us"
            title="Dependable local service with clear communication"
            description="Our approach focuses on practical outcomes, long-term reliability, and a smooth customer experience from first call to completion."
          />
          <ul className="mt-8 grid gap-4 md:grid-cols-2">
            {whyChooseUs.map((item) => (
              <li key={item} className="surface-card p-5 text-brand-slate">
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="section-pad">
        <Container>
          <SectionHeading
            eyebrow="How We Work"
            title="A straightforward process that keeps you informed"
            description="You get clear updates and dependable work at each step."
          />
          <ol className="mt-8 grid gap-5 md:grid-cols-2">
            {processSteps.map((step, index) => (
              <li key={step.title} className="surface-card p-6">
                <p className="text-sm font-semibold text-brand-blue">Step {index + 1}</p>
                <h3 className="mt-2 text-xl font-semibold text-brand-navy">{step.title}</h3>
                <p className="mt-2 text-brand-slate">{step.text}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="section-pad bg-white">
        <Container>
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <SectionHeading
              eyebrow="Customer Feedback"
              title="What Dublin customers say"
              description="A preview of sample testimonials for this demo website."
            />
            <Link href="/testimonials" className="text-sm font-semibold text-brand-blue hover:underline">
              View all testimonials
            </Link>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-[1.25fr_1fr]">
            <div className="grid gap-5 md:grid-cols-2">
              {testimonials.slice(0, 4).map((item) => (
                <TestimonialCard key={item.name} quote={item.text} name={item.name} area={item.area} />
              ))}
            </div>
            <aside className="surface-card p-6 sm:p-7">
              <h3 className="text-xl font-bold text-brand-navy">Common outcomes we hear</h3>
              <ul className="mt-4 space-y-3 text-brand-slate">
                {testimonialOutcomes.map((outcome) => (
                  <li key={outcome}>{outcome}</li>
                ))}
              </ul>
              <CTAButton href="/contact" className="mt-6 w-full">
                Start Your Quote Request
              </CTAButton>
            </aside>
          </div>
        </Container>
      </section>

      <section className="section-pad">
        <Container>
          <SectionHeading
            eyebrow="Service Area"
            title="Serving Dublin and surrounding areas"
            description={serviceAreaCopy.summary}
          />
          <p className="mt-5 max-w-4xl text-brand-slate">{serviceAreaCopy.extended}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            {serviceAreas.map((area) => (
              <span key={area} className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-brand-slate">
                {area}
              </span>
            ))}
          </div>
          <p className="mt-6 text-sm text-brand-slate">
            Looking for a plumber near Dublin? <Link href="/contact" className="font-semibold text-brand-blue hover:underline">Contact us</Link> to confirm coverage.
          </p>
        </Container>
      </section>

      <FAQSection
        title="Plumber Dublin FAQs"
        description="Common questions people ask before booking plumbing services in Dublin."
        items={homeFaqs}
      />

      <CTABand
        title="Ready to book a dependable Dublin plumber?"
        text="Tell us the job details in under two minutes, or call now if you need same-day plumbing support."
      />
    </>
  );
}
