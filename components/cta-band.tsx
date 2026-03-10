import { CTAButton } from './cta-button';
import { Container } from './container';
import { company } from '@/data/site';

type CTABandProps = {
  title: string;
  text: string;
};

export function CTABand({ title, text }: CTABandProps) {
  return (
    <section className="bg-brand-navy py-16 text-white">
      <Container className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <div>
          <h2 className="text-2xl font-bold sm:text-3xl">{title}</h2>
          <p className="mt-3 max-w-2xl text-base text-slate-200">{text}</p>
        </div>
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <CTAButton href="/contact" className="w-full sm:w-auto">
            Get Fast Quote
          </CTAButton>
          <CTAButton href={company.phoneHref} variant="secondary" className="w-full sm:w-auto">
            Call a Plumber Now
          </CTAButton>
        </div>
      </Container>
    </section>
  );
}
