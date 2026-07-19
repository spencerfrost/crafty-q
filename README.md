# Crafty Q Face Painting

Single-page marketing site for Crafty Q Face Painting (London, Ontario). Showcases portfolio work, outlines birthday vs. corporate service packages, builds trust via certifications, and captures booking inquiries through a contact form.

Built with [Next.js](https://nextjs.org) (App Router) and Tailwind CSS.

## Getting Started

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

Other scripts:

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # run eslint
```

## Project Structure

- `app/page.tsx` — assembles the homepage sections
- `app/actions.ts` — server action handling booking form submissions
- `components/` — page sections (`Nav`, `Hero`, `Portfolio`, `Services`, `About`, `Contact`, `Footer`)
- `components/ui/` — shared UI primitives (`Button`, `Field`)
