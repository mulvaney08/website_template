# BluePipe Plumbing (Demo)

A production-style demo website for a Dublin-focused plumbing business, built with Next.js, TypeScript, and Tailwind CSS.

## Tech Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS

## Features

- Fully responsive marketing site
- Pages: Home, Services, About, Testimonials, Contact
- Local SEO-focused metadata and structured content
- JSON-LD schema (`Organization` + `PlumbingBusiness`)
- Lead-capture focused CTA sections
- Sticky mobile call-to-action bar
- Client-side quote form with:
  - name
  - phone
  - email
  - postcode/area
  - service needed
  - urgency
  - message
- Friendly validation states + mock success flow (no backend required)

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
app/           # App Router pages and layout
components/    # Reusable UI components
data/          # Static content and configuration
public/        # Static assets
```

## Notes

- No external paid services are required to run locally.
- Form submission is local/mock for demo purposes.
