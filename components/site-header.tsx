'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { siteConfig } from '@/data/site-config';
import { Container } from './container';

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { businessProfile, navigationLinks } = siteConfig;

  return (
    <header className="sticky top-0 z-30 border-b border-slate-800 bg-brand-charcoal text-white">
      <div className="border-b border-slate-800 bg-slate-950/60">
        <Container className="flex items-center justify-between py-2 text-xs sm:text-sm">
          <p className="font-medium text-slate-200">Emergency electrician support across Dublin</p>
          <a href={businessProfile.phoneHref} className="font-semibold text-brand-amber hover:text-amber-300">
            {businessProfile.ctaLabels.emergencyCallNow}
          </a>
        </Container>
      </div>

      <Container className="flex h-20 items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tight text-white" aria-label={`${businessProfile.name} Home`}>
          {businessProfile.name}
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-7 md:flex">
          {navigationLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-brand-amber ${
                pathname === item.href ? 'text-brand-amber' : 'text-slate-200'
              }`}
            >
              {item.label}
            </Link>
          ))}
          <a href={businessProfile.phoneHref} className="btn-base btn-accent">
            {businessProfile.ctaLabels.callNow}
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          className="rounded-md border border-slate-600 px-3 py-2 text-sm font-semibold text-white md:hidden"
        >
          Menu
        </button>
      </Container>

      {open ? (
        <div id="mobile-nav" className="border-t border-slate-800 bg-brand-charcoal md:hidden">
          <Container className="flex flex-col gap-2 py-4">
            {navigationLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`rounded-md px-3 py-2 text-sm font-medium ${
                  pathname === item.href ? 'bg-slate-800 text-brand-amber' : 'text-slate-200'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <a href={businessProfile.phoneHref} className="btn-base btn-accent mt-2 text-center">
              {businessProfile.ctaLabels.callNow}
            </a>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
