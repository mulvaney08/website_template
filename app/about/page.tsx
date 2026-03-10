import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/container';
import { CTABand } from '@/components/cta-band';
import { CTAButton } from '@/components/cta-button';
import { SectionHeading } from '@/components/section-heading';
import { serviceAreaCopy } from '@/data/site';

export const metadata: Metadata = {
  title: 'About Our Dublin Plumbing Team | BluePipe Plumbing',
  description:
    'Learn about BluePipe Plumbing, a demo Dublin plumbing company focused on responsive service, clear communication, and reliable residential and commercial plumbing outcomes.',
  alternates: {
    canonical: '/about'
  },
  openGraph: {
    title: 'About BluePipe Plumbing Dublin',
    description:
      'Meet the values and local service approach behind this Dublin-focused plumbing demo website.'
  }
};

export default function AboutPage() {
  return (
    <>
      <section className="section-pad bg-white">
        <Container>
          <SectionHeading
            as="h1"
            eyebrow="About Us"
            title="A local Dublin plumbing team focused on dependable outcomes"
            description="BluePipe Plumbing supports homeowners, landlords, and businesses with practical plumbing solutions and responsive service."
          />
          <p className="mt-5 text-sm text-brand-slate">
            Looking for service details? Visit our <Link href="/services" className="font-semibold text-brand-blue hover:underline">services page</Link> or request help through <Link href="/contact" className="font-semibold text-brand-blue hover:underline">contact</Link>.
          </p>
        </Container>
      </section>

      <section className="section-pad-tight">
        <Container className="grid gap-6 md:grid-cols-2">
          <article className="surface-card p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-brand-navy">Company overview</h2>
            <p className="mt-3 text-brand-slate">
              BluePipe Plumbing handles day-to-day repairs, planned installations, and emergency callouts across Dublin and surrounding areas. Our goal is simple: fix the issue properly and make the process easy for customers.
            </p>
          </article>

          <article className="surface-card p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-brand-navy">Experience and trust</h2>
            <p className="mt-3 text-brand-slate">
              We work on both residential and commercial systems, adapting to older Dublin properties and newer builds alike. Customers choose us for clear communication, punctual visits, and consistent workmanship.
            </p>
          </article>
        </Container>
      </section>

      <section className="section-pad bg-white">
        <Container>
          <SectionHeading eyebrow="Our Values" title="How we approach every plumbing job" />
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <article className="rounded-2xl border border-slate-200 bg-brand-cloud p-6">
              <h3 className="text-lg font-semibold text-brand-navy">Reliability</h3>
              <p className="mt-2 text-brand-slate">Show up on time, solve the problem thoroughly, and stand behind the work.</p>
            </article>
            <article className="rounded-2xl border border-slate-200 bg-brand-cloud p-6">
              <h3 className="text-lg font-semibold text-brand-navy">Transparency</h3>
              <p className="mt-2 text-brand-slate">Explain options clearly so customers can make informed decisions without pressure.</p>
            </article>
            <article className="rounded-2xl border border-slate-200 bg-brand-cloud p-6">
              <h3 className="text-lg font-semibold text-brand-navy">Respect</h3>
              <p className="mt-2 text-brand-slate">Keep work areas tidy and treat every property like our own.</p>
            </article>
          </div>
        </Container>
      </section>

      <section className="section-pad">
        <Container className="rounded-2xl bg-brand-navy p-8 text-white shadow-soft">
          <h2 className="text-2xl font-bold">Why local matters in Dublin plumbing</h2>
          <p className="mt-3 max-w-3xl text-slate-200">{serviceAreaCopy.summary}</p>
          <p className="mt-3 max-w-3xl text-slate-200">{serviceAreaCopy.extended}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <CTAButton href="/contact">Request a Quote</CTAButton>
            <CTAButton href="/testimonials" variant="secondary">
              Read Testimonials
            </CTAButton>
          </div>
        </Container>
      </section>

      <CTABand
        title="Want local plumbing support you can rely on?"
        text="Book a quote for planned work or call now for urgent plumbing issues in Dublin."
      />
    </>
  );
}
