# Northern Clean Energy - Marketing Website

A modern, high-converting, mobile-first marketing website for Northern Clean Energy (Hamilton, Ontario).

## Tech Stack

- **Framework:** Next.js 16 (App Router) + TypeScript
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Components:** Custom UI (Button, Card, Accordion)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
├── app/              # App Router pages
├── components/       # Reusable components
│   ├── layout/       # Header, MobileFooter
│   ├── sections/     # Hero, ServiceGrid, CTASection, etc.
│   ├── pages/        # Page-specific client components
│   └── ui/           # Button, Card, Accordion
├── constants/        # Verified company data from ncenergy.ca
└── lib/              # Utilities
```

## Content Sources

All factual content is pulled from [ncenergy.ca](https://ncenergy.ca/). See SOURCE MAP comments in `src/constants/` for exact URLs.

## Images

- **Hero:** A generated clean-energy/HVAC hero image is in `public/hero-clean-energy.jpg`. To use images from ncenergy.ca instead, replace this file or update the Hero component to reference their image URLs (e.g. from their WordPress media library).

## TODO (Verify on ncenergy.ca)

- [ ] Exact brand green hex color
- [ ] Full street address (contact shows "Ancaster, ON" only)
- [ ] Business hours
- [ ] Add map embed when address is available

## Build

```bash
npm run build
npm start
```
