# Jersova Jersey — Website Layout / Site Map

Static multi-page site (plain HTML/CSS/JS, no framework/build step). Each
page has both a root `.html` file and a matching folder with `index.html`
(clean URLs, e.g. `/jerseys/`).

## Page Tree

```
/  (index.html)                    → Home
├── /jerseys/  (jerseys.html)      → Jerseys / Full Catalog
├── /about/    (about.html)        → About Us
└── /contact/  (contact.html)      → Contact
```

## Global Structure (present on every page)

- **Header / Nav** — logo + brand, nav links (Home, Jerseys, About Us,
  Contact), "Get a Quote" CTA button, mobile burger menu
- **Footer** (`#contact`) — brand block, email/phone, social links
  (Instagram, Facebook, WhatsApp), quick links, newsletter form
- **Floating WhatsApp button** (bottom-right, links to `wa.me`)
- **Lightbox modal** — product image viewer with prev/next, used on
  Home and Jerseys pages
- **Back-to-top button**

## Page-by-Page Breakdown

### `/` — Home (`index.html`)
1. `#top` Hero — slideshow + headline, "Explore Collection" / "Design My
   Kit" CTAs
2. Section pad — intro/highlights
3. `#collection` — featured product grid
4. `#why` — "Why choose us" value props
5. `#process` — step-by-step process timeline
6. `#testimonials` — customer reviews carousel
7. Closing CTA section
8. Footer (`#contact`)

### `/jerseys/` — Catalog (`jerseys.html`)
1. Page hero — "Every Design. Every Colorway."
2. Category tabs (`#sleeveTabs`) — filters by Jerseys / Shorts / Pants
   (and sleeve type), live product count (`#catCount`)
3. `#catalogGrid` — full dense product grid (~85 items), driven by
   `js/common.js` from `images/catalog/{jerseys,shorts,pants}/`
4. "Can't decide? Let's design one together" CTA

### `/about/` — About Us (`about.html`)
1. Page hero — "Built By Players, For Players."
2. "Every Stitch Has A Reason" — brand story
3. "Our Core Values"
4. "From One Sewing Machine To 1,200+ Teams" — company history/stats
5. Additional content section
6. Closing CTA — "Want To Wear Your Identity Too?"

### `/contact/` — Contact (`contact.html`)
1. Page hero — "Get A Free Design Mockup."
2. "Talk To The Team" — `#contactForm`
3. FAQ — "Common Questions"
4. Newsletter signup form

## Assets / Data

- `images/catalog/{jerseys,shorts,pants}/*.webp` — product images powering
  the Home and Jerseys grids
- `images/*.webp` — hero and misc marketing images
- `assets/` — source design files (PNG/CDR working files, not used
  directly on the live site)
- `css/style.css` — single global stylesheet
- `js/common.js` — shared JS: nav/menu, hero slideshow, product grid
  rendering, filtering, lightbox, testimonials carousel

## Static/Config Files

- `robots.txt`, `sitemap.xml`, `CNAME` — SEO / GitHub Pages custom domain
- `README.md` — project readme
