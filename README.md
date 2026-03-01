# Business Website

This repository contains a Next.js 13 application built with TypeScript, Tailwind CSS, and ShadCN UI. It serves as a starting point for a modern, responsive, SEO-friendly business website optimized for performance and accessibility.

## Features

- Next.js App Router (\`app\` directory)
- TypeScript
- Tailwind CSS with 8px spacing system and CSS variables color palette
- ShadCN UI component library
- Framer Motion animations
- Lucide icons
- Google Fonts (Inter)
- Responsive design
- SEO-ready components and metadata
- Component-based architecture for scalability

## Folder Structure

```
/app
  layout.tsx
  page.tsx
  about/page.tsx
  services/page.tsx
  projects/page.tsx
  blog/page.tsx
  careers/page.tsx
  contact/page.tsx
/components
  Navbar.tsx
  HeroSection.tsx
  TrustLogos.tsx
  ServiceCard.tsx
  ServicesOverview.tsx
  AboutPreview.tsx
  ProjectCard.tsx
  FeaturedProjects.tsx
  WhyChooseUs.tsx
  TestimonialCard.tsx
  Testimonials.tsx
  CTASection.tsx
  Footer.tsx
  SectionWrapper.tsx
/public
  /images
    about-placeholder.jpg
    project1.jpg
    project2.jpg
    project3.jpg
    logo1.png
    ...
/styles
  globals.css
package.json
next.config.js
tailwind.config.js
postcss.config.js
tsconfig.json
```

## Getting Started

1. **Install Node.js** (v18+ recommended) and npm or Yarn.
2. Run `npm install` or `yarn` to install dependencies.
3. Start development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```
4. Open http://localhost:3000 in your browser.

## Scripts

- `dev` - starts development server
- `build` - builds production artifacts
- `start` - runs production build
- `lint` - runs Next.js ESLint configuration

## Deployment

This app is ready for deployment on [Vercel](https://vercel.com).
Just import the repository and it will automatically configure. Environment variables can be added via the Vercel dashboard.

## Content Strategy

Replace placeholder text with industry-specific, SEO-optimized copy. Update images in `public/images` with real assets.

## Customization

- Colors: Modify CSS variables in `styles/globals.css` or extend `tailwind.config.js`.
- Fonts: Change Google Font import in `app/layout.tsx`.
- Add new components or pages under `/components` and `/app` respectively.

## Future Scalability

- CMS integration (e.g., Sanity, Contentful) by fetching data in `page.tsx` files.
- Expand blog system with dynamic routes and markdown or headless CMS content.
- Implement APIs in `pages/api` or `app/api`.

## Notes

The code is intended as a scaffold; please verify imports and dependencies after running `npm install`. Additional packages may be required for features like sliders (`react-slick`) or icons.

---

Replace **Business Name** and other placeholder values with your actual information.
