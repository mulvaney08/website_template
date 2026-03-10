import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { MobileStickyCall } from '@/components/mobile-sticky-call';
import { siteConfig } from '@/data/site-config';

const { businessProfile } = siteConfig;
const { seoMetadata } = businessProfile;

export const metadata: Metadata = {
  metadataBase: new URL(seoMetadata.siteUrl),
  title: {
    default: seoMetadata.defaultTitle,
    template: seoMetadata.titleTemplate
  },
  description: seoMetadata.defaultDescription,
  alternates: {
    canonical: '/'
  },
  openGraph: {
    type: 'website',
    url: seoMetadata.siteUrl,
    siteName: businessProfile.name,
    title: seoMetadata.defaultTitle,
    description: seoMetadata.openGraphDescription,
    locale: seoMetadata.locale
  },
  twitter: {
    card: 'summary_large_image',
    title: seoMetadata.defaultTitle,
    description: seoMetadata.twitterDescription
  },
  icons: {
    icon: '/favicon.svg'
  }
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: businessProfile.name,
  url: seoMetadata.siteUrl,
  email: businessProfile.email,
  telephone: businessProfile.phoneDisplay,
  areaServed: businessProfile.serviceArea.label,
  description: `${businessProfile.name} serves ${businessProfile.serviceArea.label}.`
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': seoMetadata.schemaBusinessType,
  name: businessProfile.name,
  url: seoMetadata.siteUrl,
  email: businessProfile.email,
  telephone: businessProfile.phoneDisplay,
  areaServed: businessProfile.serviceArea.areas,
  openingHours: businessProfile.openingHours,
  serviceType: businessProfile.services.map((service) => service.title),
  contactPoint: [
    {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      telephone: businessProfile.phoneDisplay,
      email: businessProfile.email,
      areaServed: businessProfile.serviceArea.label
    }
  ],
  description: `${businessProfile.name} provides local services in ${businessProfile.serviceArea.label}.`
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
        <Script id="local-business-schema" type="application/ld+json" strategy="beforeInteractive">
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
