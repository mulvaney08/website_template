import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/container';
import { CTABand } from '@/components/cta-band';
import { CTAButton } from '@/components/cta-button';
import { FAQSection } from '@/components/faq-section';
import { SectionHeading } from '@/components/section-heading';
import { company, serviceAreaCopy, services, servicesFaqs } from '@/data/site';

export const metadata: Metadata = {
  title: 'Plumbing Services Dublin | Emergency, Leak Repair, Drains, Boilers',
  description:
    'Explore BluePipe Plumbing services in Dublin: emergency plumbing, leak detection, drain unblocking, boiler support, kitchen and bathroom plumbing, and routine maintenance.',
  alternates: {
    canonical: '/services'
  },
  openGraph: {
    title: 'Plumbing Services in Dublin | BluePipe Plumbing',
    description:
      'Detailed plumbing services for Dublin homes and businesses, with clear next steps for emergency and planned work.'
  }
};

export default function ServicesPage() {
  return (
    <>
      <section className="section-pad bg-white">
        <Container>
          <SectionHeading
            as="h1"
            eyebrow="Services"
            title="Complete plumbing support for homes and businesses in Dublin"
            description="Compare our core plumbing services and request the right support for urgent issues or planned work."
          />
          <p className="mt-5 text-sm text-brand-slate">
            Not sure what you need? Visit our <Link href="/contact" className="font-semibold text-brand-blue hover:underline">contact page</Link> and describe the issue. We will recommend the best service.
          </p>
        </Container>
      </section>

      <section className="section-pad-tight">
        <Container>
          <div className="surface-card bg-brand-navy p-6 text-white sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-wide text-sky-300">Emergency plumbing</p>
            <h2 className="mt-2 text-2xl font-bold">Urgent issue? Call our team 24/7.</h2>
            <p className="mt-2 max-w-2xl text-slate-100">
              For burst pipes, major leaks, or blocked drains causing overflow, contact us immediately for priority response in Dublin.
            </p>
            <a href={company.phoneHref} className="mt-5 inline-flex rounded-xl bg-white px-5 py-3 text-sm font-semibold text-brand-navy">
              Call {company.phoneDisplay}
            </a>
          </div>
        </Container>
      </section>

      <section className="section-pad-tight">
        <Container className="space-y-6">
          {services.map((service, index) => (
            <div key={service.title}>
              <article className="surface-card p-6 sm:p-8">
                <h2 className="text-2xl font-bold text-brand-navy">{service.title}</h2>
                <p className="mt-3 text-lg text-brand-slate">{service.summary}</p>
                <p className="mt-3 text-brand-slate">{service.detail}</p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <CTAButton href="/contact">Request a Quote</CTAButton>
                  <CTAButton href={company.phoneHref} variant="secondary">
                    Call for Advice
                  </CTAButton>
                </div>
              </article>

              {(index === 1 || index === 3) && (
                <aside className="mt-6 rounded-2xl bg-brand-light p-6 sm:flex sm:items-center sm:justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-brand-navy">Plan your next plumbing job with confidence</h3>
                    <p className="mt-2 max-w-2xl text-brand-slate">
                      Tell us what you need and we will provide a practical recommendation and quote for your Dublin property.
                    </p>
                  </div>
                  <CTAButton href="/contact">Get a Quote</CTAButton>
                </aside>
              )}
            </div>
          ))}
        </Container>
      </section>

      <section className="section-pad bg-white">
        <Container>
          <SectionHeading
            eyebrow="Dublin Coverage"
            title="Service area for plumbing work in and around Dublin"
            description={serviceAreaCopy.summary}
          />
          <p className="mt-5 text-brand-slate">{serviceAreaCopy.extended}</p>
        </Container>
      </section>

      <FAQSection
        title="Dublin Plumbing Services FAQ"
        description="Answers to common service questions before requesting a plumbing quote."
        items={servicesFaqs}
      />

      <CTABand
        title="Need a quote for plumbing work in Dublin?"
        text="Share your issue and area, and we will help you choose the right service and next available slot."
      />
    </>
  );
}
