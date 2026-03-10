import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/container';
import { CTABand } from '@/components/cta-band';
import { CTAButton } from '@/components/cta-button';
import { SectionHeading } from '@/components/section-heading';
import { TestimonialCard } from '@/components/testimonial-card';
import { testimonialOutcomes, testimonials } from '@/data/site';

export const metadata: Metadata = {
  title: 'Plumber Reviews Dublin (Sample Testimonials) | BluePipe Plumbing',
  description:
    'Browse sample testimonials for this Dublin plumbing demo site and see common customer outcomes like faster response and clear communication.',
  alternates: {
    canonical: '/testimonials'
  },
  openGraph: {
    title: 'BluePipe Plumbing Testimonials (Demo)',
    description:
      'Sample testimonial content showing the type of customer outcomes expected from a Dublin plumbing service.'
  }
};

export default function TestimonialsPage() {
  return (
    <>
      <section className="section-pad bg-white">
        <Container>
          <SectionHeading
            as="h1"
            eyebrow="Testimonials"
            title="What customers value most from a Dublin plumber"
            description="The testimonials below are clearly marked sample/demo content for this website build."
          />
          <p className="mt-4 rounded-xl bg-brand-light p-4 text-sm text-brand-navy">
            Demo note: all testimonials on this page are sample content and not real customer submissions.
          </p>
          <p className="mt-4 text-sm text-brand-slate">
            Need service details first? See our <Link href="/services" className="font-semibold text-brand-blue hover:underline">plumbing services</Link> or go straight to <Link href="/contact" className="font-semibold text-brand-blue hover:underline">contact</Link>.
          </p>
        </Container>
      </section>

      <section className="section-pad-tight">
        <Container className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item) => (
            <TestimonialCard key={item.name} quote={item.text} name={item.name} area={item.area} />
          ))}
        </Container>
      </section>

      <section className="section-pad bg-white">
        <Container className="grid gap-6 md:grid-cols-2">
          <article className="surface-card p-6">
            <h2 className="text-xl font-bold text-brand-navy">Common outcomes mentioned</h2>
            <ul className="mt-3 space-y-2 text-brand-slate">
              {testimonialOutcomes.map((outcome) => (
                <li key={outcome}>{outcome}</li>
              ))}
            </ul>
          </article>
          <article className="surface-card p-6">
            <h2 className="text-xl font-bold text-brand-navy">Need help now?</h2>
            <p className="mt-3 text-brand-slate">
              If you need a dependable plumber in Dublin, contact BluePipe Plumbing for emergency response or quote requests.
            </p>
            <div className="mt-5">
              <CTAButton href="/contact">Get in Touch</CTAButton>
            </div>
          </article>
        </Container>
      </section>

      <CTABand
        title="Need the same dependable result for your property?"
        text="Send your plumbing request now and our team will follow up with practical next steps."
      />
    </>
  );
}
