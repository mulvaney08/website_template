import { siteConfig } from '@/data/site-config';
import { CTAButton } from './cta-button';
import { Container } from './container';

type CTABandProps = {
  title: string;
  text: string;
};

export function CTABand({ title, text }: CTABandProps) {
  const { businessProfile } = siteConfig;

  return (
    <section className="section-pad-tight bg-brand-charcoal text-white">
      <Container>
        <div className="panel-dark panel-grid cut-corner p-7 sm:p-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-amber">Quick Response</p>
              <h2 className="mt-3 text-2xl font-bold sm:text-3xl">{title}</h2>
              <p className="mt-3 max-w-2xl text-slate-200">{text}</p>
            </div>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <CTAButton href="/contact" className="w-full sm:w-auto">
                {businessProfile.ctaLabels.getFastQuote}
              </CTAButton>
              <CTAButton href={businessProfile.phoneHref} variant="secondary" className="w-full border-white/50 bg-transparent text-white hover:bg-white/10 sm:w-auto">
                {businessProfile.ctaLabels.callNow}
              </CTAButton>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
