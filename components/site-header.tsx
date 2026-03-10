'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { company } from '@/data/site';
import { Container } from './container';

const links = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/testimonials', label: 'Testimonials' },
  { href: '/contact', label: 'Contact' }
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur">
      <Container className="flex h-20 items-center justify-between">
        <Link href="/" className="text-xl font-bold text-brand-navy" aria-label="BluePipe Plumbing Home">
          BluePipe Plumbing
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-6 md:flex">
          {links.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-brand-blue ${
                pathname === item.href ? 'text-brand-blue' : 'text-brand-slate'
              }`}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={company.phoneHref}
            className="btn-base btn-primary px-4 py-2"
          >
            Call {company.phoneDisplay}
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          className="rounded-lg border border-slate-300 px-3 py-2 text-sm font-semibold text-brand-navy md:hidden"
        >
          Menu
        </button>
      </Container>

      {open ? (
        <div id="mobile-nav" className="border-t border-slate-200 bg-white md:hidden">
          <Container className="flex flex-col gap-2 py-4">
            {links.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`rounded-lg px-3 py-2 text-sm font-medium ${
                  pathname === item.href ? 'bg-brand-light text-brand-blue' : 'text-brand-slate'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={company.phoneHref}
              className="btn-base btn-primary mt-2 text-center"
            >
              Call {company.phoneDisplay}
            </a>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
