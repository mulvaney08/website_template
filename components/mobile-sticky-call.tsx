import { siteConfig } from '@/data/site-config';

export function MobileStickyCall() {
  const { businessProfile } = siteConfig;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-700 bg-brand-charcoal p-3 backdrop-blur md:hidden" aria-label="Quick contact actions">
      <div className="mx-auto flex w-full max-w-6xl gap-2">
        <a href={businessProfile.phoneHref} className="btn-base btn-accent flex-1 text-center">
          {businessProfile.ctaLabels.callNow}
        </a>
        <a href="/contact" className="btn-base btn-primary flex-1 text-center">
          {businessProfile.ctaLabels.getFastQuote}
        </a>
      </div>
    </div>
  );
}
