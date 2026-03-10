export function MapPlaceholder() {
  return (
    <div
      className="surface-card flex min-h-72 items-center justify-center border-dashed border-slate-300 p-6 text-center"
      role="img"
      aria-label="Map placeholder for Dublin service area"
    >
      <div>
        <p className="text-lg font-semibold text-brand-navy">Map Placeholder</p>
        <p className="mt-2 text-sm text-brand-slate">
          Embed your preferred map provider here to show BluePipe Plumbing service coverage across Dublin.
        </p>
      </div>
    </div>
  );
}
