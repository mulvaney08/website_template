import Link from 'next/link';
import { siteConfig } from '@/data/site-config';
import { Container } from './container';

export function SiteFooter() {
  const { businessProfile, navigationLinks, pageContent } = siteConfig;

  return (
    <footer className="border-t border-slate-800 bg-brand-charcoal py-12 text-slate-200">
      <Container className="grid gap-8 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <p className="text-2xl font-bold text-white">{businessProfile.name}</p>
          <p className="mt-3 max-w-sm text-sm text-slate-300">{pageContent.footerBlurb}</p>
        </div>

        <nav aria-label="Footer" className="grid gap-2 text-sm">
          {navigationLinks.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-brand-amber">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="text-sm md:text-right">
          <p className="font-semibold text-white">{businessProfile.phoneDisplay}</p>
          <p>{businessProfile.email}</p>
          <p className="mt-4 text-xs text-slate-400">{pageContent.demoNote}</p>
        </div>
      </Container>
    </footer>
  );
}
