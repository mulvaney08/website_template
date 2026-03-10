import { company } from '@/data/site';

export function MobileStickyCall() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white/95 p-3 backdrop-blur md:hidden" aria-label="Quick contact actions">
      <div className="mx-auto flex w-full max-w-6xl gap-2">
        <a href={company.phoneHref} className="btn-base btn-primary flex-1 text-center">
          Call Now
        </a>
        <a href="/contact" className="btn-base btn-secondary flex-1 text-center">
          Get Fast Quote
        </a>
      </div>
    </div>
  );
}
