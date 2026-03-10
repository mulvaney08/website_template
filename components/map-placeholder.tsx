import { siteConfig } from '@/data/site-config';

export function MapPlaceholder() {
  const { businessProfile } = siteConfig;

  return (
    <div
      className="surface-card panel-grid min-h-72 border-dashed border-slate-500/40 bg-brand-charcoal p-6 text-center text-white"
      role="img"
      aria-label={`Map placeholder for ${businessProfile.serviceArea.label}`}
    >
      <div className="mx-auto flex h-full max-w-xl flex-col items-center justify-center">
        <p className="text-lg font-semibold">Coverage Map Placeholder</p>
        <p className="mt-2 text-sm text-slate-200">
          Embed your preferred map provider here to show {businessProfile.name} coverage across {businessProfile.serviceArea.label}.
        </p>
      </div>
    </div>
  );
}
