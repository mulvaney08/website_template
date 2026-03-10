import type { Metadata } from 'next';
import Link from 'next/link';
import { CTAButton } from '@/components/cta-button';
import { ContactForm } from '@/components/contact-form';
import { Container } from '@/components/container';
import { CTABand } from '@/components/cta-band';
import { FAQSection } from '@/components/faq-section';
import { MapPlaceholder } from '@/components/map-placeholder';
import { SectionHeading } from '@/components/section-heading';
import { company, contactFaqs, serviceAreaCopy } from '@/data/site';

export const metadata: Metadata = {
  title: 'Contact a Plumber in Dublin | BluePipe Plumbing',
  description:
    'Contact BluePipe Plumbing for Dublin quote requests, emergency plumbing support, and general service enquiries. Demo-safe placeholder contact details are shown on this site.',
  alternates: {
    canonical: '/contact'
  },
  openGraph: {
    title: 'Contact BluePipe Plumbing Dublin',
    description:
      'Request a plumbing quote in Dublin or call the emergency line for urgent plumbing issues.'
  }
};

export default function ContactPage() {
  return (
    <>
      <section className="section-pad bg-white">
        <Container>
          <div className="surface-card grid gap-6 p-6 sm:p-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <SectionHeading
                as="h1"
                eyebrow="Contact"
                title="Request a quote or speak with our team"
                description="For urgent issues, call us directly. For planned work, use the quote form and we will follow up quickly."
              />
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <CTAButton href={company.phoneHref} className="w-full sm:w-auto">
                  Call {company.phoneDisplay}
                </CTAButton>
                <CTAButton href={`mailto:${company.email}`} variant="secondary" className="w-full sm:w-auto">
                  Email Us
                </CTAButton>
              </div>
              <p className="mt-4 text-sm text-brand-slate">
                Looking for service details first? Visit <Link href="/services" className="font-semibold text-brand-blue hover:underline">our services page</Link> before submitting your request.
              </p>
            </div>

            <aside className="rounded-xl bg-brand-navy p-5 text-white">
              <p className="text-xs font-semibold uppercase tracking-wide text-sky-300">Emergency availability</p>
              <p className="mt-2 text-lg font-semibold">{company.emergencyLabel}</p>
              <p className="mt-2 text-sm text-slate-200">If there is active leaking, overflow, or loss of hot water, call now for priority triage.</p>
              <a href={company.phoneHref} className="btn-base btn-primary mt-4 w-full">
                Emergency Call Now
              </a>
            </aside>
          </div>
        </Container>
      </section>

      <section className="section-pad-tight">
        <Container className="grid gap-8 lg:grid-cols-[1.25fr_0.75fr]">
          <div className="order-2 lg:order-1">
            <ContactForm />
          </div>

          <aside className="order-1 space-y-4 lg:order-2">
            <div className="surface-card p-6">
              <h2 className="text-xl font-bold text-brand-navy">Call Us</h2>
              <a href={company.phoneHref} className="mt-2 inline-block text-lg font-semibold text-brand-blue hover:underline">
                {company.phoneDisplay}
              </a>
              <p className="mt-2 text-sm text-brand-slate">Fastest route for urgent plumbing issues in Dublin.</p>
            </div>

            <div className="surface-card p-6">
              <h2 className="text-xl font-bold text-brand-navy">Opening Hours</h2>
              <ul className="mt-3 space-y-1 text-brand-slate">
                {company.hours.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
              <p className="mt-3 text-sm font-medium text-brand-blue">Emergency callouts are available outside standard hours.</p>
            </div>

            <div className="surface-card p-6">
              <h2 className="text-xl font-bold text-brand-navy">Service Area</h2>
              <p className="mt-2 text-brand-slate">{serviceAreaCopy.summary}</p>
              <p className="mt-2 text-sm text-brand-slate">{serviceAreaCopy.extended}</p>
            </div>

            <div className="surface-card p-6">
              <h2 className="text-xl font-bold text-brand-navy">Demo Contact Note</h2>
              <p className="mt-2 text-sm text-brand-slate">
                This is a demo website. Phone number and email shown here are placeholder contact details for development use.
              </p>
            </div>
          </aside>
        </Container>
      </section>

      <section className="pb-20">
        <Container>
          <MapPlaceholder />
        </Container>
      </section>

      <FAQSection
        title="Contacting a Dublin Plumber: FAQ"
        description="Quick answers about emergency calls, quote requests, and demo contact details on this website."
        items={contactFaqs}
      />

      <CTABand
        title="Need urgent help right now?"
        text="Call our emergency line immediately, or submit the quote form and we will respond as quickly as possible."
      />
    </>
  );
}
