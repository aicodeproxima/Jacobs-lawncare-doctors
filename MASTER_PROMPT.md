# 🌿 MASTER PROMPT: Premium Landscaping Website

## Project Overview
Build a modern, sleek, premium residential landscaping website for **Jacob's Lawn Care Doctors** in Newport News, Virginia. The site must feel polished, high-converting, local, trustworthy, and visually impressive.

---

## 🎨 Design System

### Color Palette
| Name | Hex | Usage |
|------|-----|-------|
| **Forest Green** | `#0B3A2E` | Primary background, overlays |
| **Sage White** | `#F4F7F5` | Light sections, cards |
| **Antique Gold** | `#D9A84A` | CTAs, accents, highlights |
| **Cream** | `#F6F7F5` | Text on dark backgrounds |

### Typography
- **Headings:** Cormorant Garamond (serif) - 400, 600 weights
- **Body:** Inter (sans-serif) - 400, 500 weights
- **Scale:** 4xl-8xl for headlines, base-lg for body

### Visual Elements
- Border radius: 0px (sharp editorial)
- Shadows: Minimal, static only
- Texture: Subtle grain overlay (opacity 0.04)
- Icons: Lucide React (1.5px stroke)

---

## 📱 Page Structure (9 Sections)

### 1. Hero Section
**Layout:** Two-column (text left, form right)
- Full-width background image with green gradient overlay
- Logo mark (gold circle with "J")
- 3-line headline: "Residential / Landscaping / Done Right"
- Subheadline with location (Newport News, VA)
- **Single prominent CTA:** "See Our Services" (gold, large, with arrow)
- Contact info: phone, hours
- Trust badges: "Locally owned • Fully insured • Satisfaction guaranteed"
- **Quote Form Card:** Name, Phone, Email, Service dropdown, Message

### 2. Curb Appeal Statement
- Full-bleed garden image with dark overlay
- Centered headline: "Beautiful yards, / zero hassle."
- Body text + link to services
- Parallax background effect

### 3. We're Local
- Full-bleed lawn image
- Floating card (right side) with green background
- Headline: "We're local."
- 3 bullet points with icons (MapPin, Calendar, DollarSign)
- CTA button

### 4. Residential Specialists
- Background image with text overlay
- Headline: "Built for / homeowners."
- Overlapping image card (desktop only)
- Body text + CTA

### 5. Easy Booking
- Background image
- Headline: "Schedule in / minutes."
- Right-aligned image block
- Body text + CTA

### 6. Dependable Service
- Background image
- Headline: "On time. / Every time."
- Left-aligned image block (mirrored layout)
- Body text + CTA

### 7. Satisfaction Guaranteed
- Background image
- Headline: "Love your yard / or we'll make it right."
- Right-aligned image block
- Body text + CTA

### 8. Services Section
- Sage white background
- Header: "Services built around your home."
- **Accordion categories** (5 total):
  1. Landscape Installation (6 services)
  2. Lawn Care & Maintenance (6 services)
  3. Outdoor Enhancements (6 services)
  4. Cleanup & Seasonal Services (6 services)
  5. Property Upkeep (3 services)
- Each service card: icon, title, description, 3 features
- CTA button linking to hero form

### 9. Footer
- 4-column layout:
  - Brand + social icons
  - Services links
  - Company links
  - Contact info (phone, email, hours, location)
- Bottom bar: copyright, legal links, back-to-top button

---

## 🛠️ Tech Stack

### Core
- **Framework:** React 19 + TypeScript
- **Build Tool:** Vite 7
- **Styling:** Tailwind CSS 3.4
- **UI Components:** shadcn/ui (40+ components)

### Animation
- **GSAP 3** with ScrollTrigger plugin
- Scroll-triggered fade/slide animations
- Parallax background effects
- **No snap behavior** - free scroll
- **Once: true** - animations don't reverse

### Icons
- **Lucide React** (all icons)

### Fonts
- Google Fonts: Cormorant Garamond + Inter

---

## 📁 File Structure

```
app/
├── public/                    # Static images (12 total)
│   ├── hero_lawn_house.jpg
│   ├── garden_flowers_wide.jpg
│   ├── lawn_trees_wide.jpg
│   ├── garden_path_detail.jpg
│   ├── garden_flowers_close.jpg
│   ├── lawn_wide_clean.jpg
│   ├── garden_hostas_wide.jpg
│   ├── contact_yard_bg.jpg
│   ├── service_maintenance.jpg
│   ├── service_cleanup.jpg
│   ├── service_install.jpg
│   └── service_hardscape.jpg
├── src/
│   ├── components/
│   │   ├── Navigation.tsx     # Header nav (Gallery, Contact buttons)
│   │   └── Footer.tsx         # Footer with contact info
│   ├── sections/
│   │   ├── HeroSection.tsx    # Hero + quote form
│   │   ├── CurbAppealSection.tsx
│   │   ├── LocalSection.tsx
│   │   ├── ResidentialSection.tsx
│   │   ├── BookingSection.tsx
│   │   ├── DependableSection.tsx
│   │   ├── SatisfactionSection.tsx
│   │   └── ServicesSection.tsx # Accordion services
│   ├── App.tsx                # Main app with all sections
│   ├── index.css              # Global styles + Tailwind
│   └── main.tsx               # Entry point
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.ts
├── vercel.json                # Vercel deployment config
└── README.md
```

---

## 🚀 Deployment

### Platform: Vercel (Recommended)
- Free tier: 200 projects
- Auto-detects Vite + React
- Global CDN
- Free SSL

### Steps:
1. Push code to GitHub repo
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import GitHub repository
4. Vercel auto-detects settings
5. Click Deploy

### Alternative: Netlify
- Drag & drop `dist` folder
- Unlimited free sites

---

## ✨ Key Features

### Animations
- [x] GSAP ScrollTrigger for all sections
- [x] Fade-in + slide animations
- [x] Parallax background effects
- [x] Staggered content reveals
- [x] **No snap** - smooth free scroll
- [x] **Once: true** - content stays visible

### Mobile Optimization
- [x] Responsive breakpoints (sm, md, lg, xl)
- [x] Hamburger menu
- [x] Sticky call button (mobile only)
- [x] Touch-friendly accordions
- [x] Stacked layouts on mobile

### Forms
- [x] Quote form in hero section
- [x] Name, phone, email, service, message fields
- [x] Success state with checkmark
- [x] Form validation

### SEO
- [x] Semantic HTML
- [x] Alt text on images
- [x] Newport News location keywords
- [x] Neighborhood mentions (Denbigh-Warwick, Deep Creek, etc.)

---

## 📝 Navigation Mapping

| Button | Action |
|--------|--------|
| Header "Gallery" | Scroll to #services |
| Header "Contact" | Scroll to top (hero form) |
| Hero "See Our Services" | Scroll to #services |
| Services CTA | Scroll to top (hero form) |
| Footer links | Map to respective sections |

---

## 🎨 CSS Classes Reference

### Buttons
```css
/* Primary CTA */
.btn-primary: bg-gold text-forest px-8 py-4 font-medium text-lg
hover: bg-cream shadow-xl -translate-y-1

/* Secondary */
.btn-secondary: border border-cream/40 text-cream
hover: bg-cream/10 -translate-y-0.5
```

### Sections
```css
/* Pinned sections (if used) */
.section-pinned: w-screen h-screen overflow-hidden relative

/* Flowing sections */
min-h-[80vh] lg:min-h-screen overflow-hidden relative
```

### Cards
```css
/* Quote form card */
bg-forest/80 backdrop-blur-sm border border-cream/10 p-6 lg:p-8

/* Service cards */
bg-white border border-forest/10 hover:border-gold/50
```

---

## 🖼️ Images Required (12 Total)

| Filename | Purpose | Ratio |
|----------|---------|-------|
| hero_lawn_house.jpg | Hero background | 16:9 |
| garden_flowers_wide.jpg | Curb Appeal bg | 16:9 |
| lawn_trees_wide.jpg | Local section bg | 16:9 |
| garden_path_detail.jpg | Residential bg | 4:3 |
| garden_flowers_close.jpg | Residential card | 4:3 |
| lawn_wide_clean.jpg | Dependable bg | 4:3 |
| garden_hostas_wide.jpg | Satisfaction bg | 4:3 |
| contact_yard_bg.jpg | Footer bg | 16:9 |
| service_maintenance.jpg | Booking image | 4:3 |
| service_cleanup.jpg | Booking bg | 4:3 |
| service_install.jpg | Dependable image | 4:3 |
| service_hardscape.jpg | Satisfaction image | 4:3 |

---

## ⚠️ Common Issues & Fixes

### Issue: Service cards disappear when scrolling back up
**Fix:** Use `once: true` in ScrollTrigger - animations don't reverse

### Issue: Accordion scrolls to bottom on expand
**Fix:** Remove scroll snap, use flowing sections

### Issue: Mobile menu not working
**Fix:** Check z-index on mobile menu (z-[99])

### Issue: Images not loading
**Fix:** Ensure images are in `public/` folder, reference with `/filename.jpg`

---

## 🔐 Security Checklist

- [ ] Delete GitHub token after use
- [ ] Use environment variables for secrets
- [ ] No hardcoded API keys
- [ ] HTTPS only (Vercel/Netlify provide SSL)

---

## 📊 Performance Targets

- Lighthouse Score: 90+
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3s
- Image optimization: WebP format, lazy loading

---

## 🎯 Conversion Goals

- Quote form submissions
- Phone calls (click-to-call)
- Service page views
- Time on site > 2 minutes

---

## 📞 Contact Info (Sample)

- **Phone:** (757) 555-0132
- **Email:** hello@jacobslawndoctors.com
- **Hours:** Mon–Fri 7am–6pm, Sat 8am–2pm
- **Location:** Newport News, VA
- **Neighborhoods:** Denbigh-Warwick, Deep Creek/Menchville, Greater Hilton, Lee Hall, Southeast Community

---

## ✅ Final Checklist

- [ ] All 12 images generated/optimized
- [ ] All 9 sections implemented
- [ ] Quote form functional
- [ ] Mobile responsive
- [ ] Animations smooth (no snap)
- [ ] Navigation links work
- [ ] Footer complete
- [ ] Deployed to Vercel/Netlify
- [ ] Custom domain connected (optional)
- [ ] SSL certificate active

---

**Built for:** Jacob's Lawn Care Doctors  
**Location:** Newport News, VA  
**Stack:** React + Vite + Tailwind + GSAP  
**Deploy:** Vercel (recommended) or Netlify

---

*End of Master Prompt*