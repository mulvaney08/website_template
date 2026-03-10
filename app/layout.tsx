import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { MobileStickyCall } from '@/components/mobile-sticky-call';
import { company, serviceAreas, services } from '@/data/site';

const siteUrl = 'https://bluepipe-demo.example';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'BluePipe Plumbing Dublin | Emergency & Local Plumbing Services',
    template: '%s | BluePipe Plumbing Dublin'
  },
  description:
    'BluePipe Plumbing is a demo plumbing website for Dublin, covering emergency plumbing, leak repair, drain unblocking, and residential and commercial plumbing support.',
  alternates: {
    canonical: '/'
  },
  openGraph: {
    type: 'website',
    url: siteUrl,
    siteName: 'BluePipe Plumbing',
    title: 'BluePipe Plumbing Dublin | Emergency & Local Plumbing Services',
    description:
      'Plumbing support for Dublin homes and businesses. Emergency callouts, planned repairs, maintenance, and installation services.',
    locale: 'en_IE'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BluePipe Plumbing Dublin | Emergency & Local Plumbing Services',
    description:
      'Demo plumbing website targeting Dublin search intent with emergency and planned plumbing services.'
  },
  icons: {
    icon: '/favicon.svg'
  }
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: company.name,
  url: siteUrl,
  email: company.email,
  telephone: company.phoneDisplay,
  areaServed: 'Dublin and surrounding areas',
  description: 'Demo organization profile for a Dublin-focused plumbing website.'
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'PlumbingBusiness',
  name: company.name,
  url: siteUrl,
  email: company.email,
  telephone: company.phoneDisplay,
  areaServed: serviceAreas,
  openingHours: ['Mo-Fr 07:00-19:00', 'Sa 08:00-17:00'],
  serviceType: services.map((service) => service.title),
  contactPoint: [
    {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      telephone: company.phoneDisplay,
      email: company.email,
      areaServed: 'Dublin'
    }
  ],
  description:
    'Demo local business schema for a plumbing company serving Dublin and nearby areas. Contact details are placeholders.'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className="pb-24 md:pb-0">
        <Script id="organization-schema" type="application/ld+json" strategy="beforeInteractive">
          {JSON.stringify(organizationSchema)}
        </Script>
        <Script id="plumbingbusiness-schema" type="application/ld+json" strategy="beforeInteractive">
          {JSON.stringify(localBusinessSchema)}
        </Script>
        <a href="#content" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-white focus:px-3 focus:py-2">
          Skip to main content
        </a>
        <SiteHeader />
        <main id="content">{children}</main>
        <MobileStickyCall />
        <SiteFooter />
      </body>
    </html>
  );
}
