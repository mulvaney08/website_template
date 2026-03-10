# BrightSpark Electrical (Demo)

A reusable local-service agency starter template built with Next.js, TypeScript, and Tailwind CSS.

The current demo is configured as a Dublin electrician website (`BrightSpark Electrical`), and all business content lives in one central config file so you can quickly retarget it for cleaners, roofers, landscapers, and similar trades.

## Tech Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS

## Features

- Fully responsive marketing site
- Pages: Home, Services, About, Testimonials, Contact
- Reusable component structure for local-service businesses
- Centralized business/content/SEO config (`data/site-config.ts`)
- JSON-LD schema (`Organization` + configurable local business type)
- Lead-capture focused CTA sections
- Sticky mobile call-to-action bar
- Client-side quote form with validation + mock success flow (no backend required)

## Demo Notice

This is a demo website. Contact details and testimonials are placeholder/demo content.

## Getting Started

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Scripts

```bash
npm run dev      # start development server
npm run build    # create production build
npm run start    # run production server
npm run lint     # run lint checks
```

## Project Structure

```text
app/              # App Router pages and layout
components/       # Reusable UI components
data/
  site-config.ts  # Main template config (business + content + SEO)
  site.ts         # Backward-compatible re-export
public/           # Static assets
```

## How to turn this into another local business site

1. Open `data/site-config.ts` and update `businessProfile` first.
2. Replace service and testimonial entries in `businessProfile.services` and `businessProfile.testimonials`.
3. Update `businessProfile.aboutCopy`, `businessProfile.openingHours`, and `businessProfile.serviceArea`.
4. Update labels in `businessProfile.ctaLabels`.
5. Update `businessProfile.seoMetadata` (site URL, titles, descriptions, schema type).
6. Review `pageContent` and `faqs` sections for industry-specific wording.

### Files to edit first

- `data/site-config.ts`
- `app/layout.tsx` (if you want advanced schema/layout behavior changes)
- `components/contact-form.tsx` (if your lead form fields need to change)

## Naming conventions used

- Config/data: `camelCase` keys in `siteConfig`
- React components: `PascalCase`
- File names: `kebab-case.tsx` for components, route-based folders under `app/`

## Notes

- No external paid services are required to run locally.
- Form submission is local/mock by default.
- The BrightSpark Electrical demo remains the default example profile.
