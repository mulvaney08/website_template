import Link from 'next/link';
import { company } from '@/data/site';
import { Container } from './container';

const links = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/testimonials', label: 'Testimonials' },
  { href: '/contact', label: 'Contact' }
];

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white py-10">
      <Container className="grid gap-8 md:grid-cols-3">
        <div>
          <p className="text-xl font-bold text-brand-navy">{company.name}</p>
          <p className="mt-2 text-sm text-brand-slate">Residential and commercial plumbing in Dublin and surrounding areas.</p>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap gap-4 text-sm text-brand-slate">
          {links.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-brand-blue">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="text-sm text-brand-slate md:text-right">
          <p>{company.phoneDisplay}</p>
          <p>{company.email}</p>
          <p className="mt-3 text-xs text-slate-500">Demo website for portfolio and development purposes.</p>
        </div>
      </Container>
    </footer>
  );
}
