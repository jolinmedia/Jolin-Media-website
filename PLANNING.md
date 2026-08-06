# Jolin Media — Website Planning

## Status
Planning phase. No code has been written yet — this doc is the single source of truth for decisions until we start building.

## Business
- Name: **Jolin Media** (confirmed)
- Owner: Joey Jolin, based in Burlington, Iowa
- Services: Videography, Photography, Drone, Event Coverage, Web Design
- Email: joey@jolinmedia.com
- Phone: (319) 750-3747
- Instagram: @jolin_media
- Domain: jolinmedia.com (already owned)

## Site structure — DECIDED
Single main page: **Home**, plus **Services** (pricing) and **Contact**. No standalone Portfolio/About pages — those live as sections on Home.

## Home page — section by section

1. **Hero**
   - Photo of Joey on the right
   - Quick description
   - Location: Burlington, Iowa
   - Brief statement of what he does

2. **What I Do** (services overview strip)
   - Videography
   - Photography
   - Drone
   - Event Coverage
   - Websites
   - One tile/tab for **Bookings** with a "Check Dates" button

3. **Portfolio preview**
   - Two albums, static grid (not lightbox):
     - Portraits — 6 photos
     - Sports — 6 photos
   - Plus a video section:
     - 3 video examples (YouTube):
       - https://youtu.be/XGcTLxPtHUs
       - https://youtu.be/06cEg1J4TNo
       - https://youtu.be/ejIs2mUXO4M
     - 2 looping aerial shots (drone footage, autoplay/loop) — Joey will upload the video files
   - Below the static image grid: embedded Playbook portfolio (https://www.playbook.com/s/jolinmedia/portfolio/)

4. **About Me**
   - Name
   - Photo
   - Brief about-me paragraph

5. **Booking section**
   - Embedded scheduler (real-time availability), not a plain form
   - Collects payment/deposit online
   - Provider TBD (Calendly vs Cal.com — see open questions)

## Services page — pricing

### Videography
- **Short Form Content** — $200–250 per finished minute
  - Usually 15–60 seconds
  - 3 verticals per visit
  - Captions and sound design
  - Quick turnaround
- **Commercial** — $600 per finished minute
  - Brand films, ads, explainers
  - Gear and edit included
  - Full production start to delivery
  - Two rounds of revisions
  - Retouched stills from the shoot
  - Full commercial license
- **Drone Add-On** — $300
  - Licensed aerial pass on any project
  - 4K60 aerial footage
  - 10 aerial stills

### Portrait Photography
- **Premium** — $500
  - 90-minute session
  - Unlimited outfits
  - Unlimited locations
  - 30 edited photos
- **Standard** — $300
  - 45-minute session
  - 1 location, 1 outfit
  - 20 edited photos
- **Basic** — $175
  - 30-minute session
  - 10 edited photos

### Sports Photography
- **Basic** — $75
  - 10 edited images, watermarked
- **Standard** — $125
  - 15 edited images, no watermark
- **Premium** — $200
  - Full gallery, 30–60 edited images, no watermark

Each pricing tier has a button linking to the Contact page.

**Not priced yet (quote-on-request for now):** Event Coverage, Web Design. Contact-only, no listed pricing tiers.

## Contact page
- Same embedded booking/scheduler as Home
- Email: joey@jolinmedia.com
- Phone: (319) 750-3747
- Instagram: @jolin_media
- Location: Burlington, Iowa

## Design & content — DECIDED
- No reference sites — Claude has creative freedom on visual design
- Logo: exists, will be uploaded before build
- Hero photo + about-me photo: ready, will be uploaded before build
- 12 portfolio photos (6 portraits + 6 sports): Joey has them, needs to send

## Technical — DECIDED
- Domain already owned: jolinmedia.com
- Hosting: **Vercel**
- Implied stack: a framework Vercel deploys natively (Next.js is the natural default) — to be confirmed when we scope the build

## Open questions (remaining)

**Portfolio / video**
1. Should the 2 looping aerial clips be silent/muted autoplay loops (typical for that style), or do they need sound?

**Booking system**
2. Scheduler provider — Calendly or Cal.com (or another)? Do you already have an account with either?
3. Payment collection needs a processor — Stripe is the standard pairing with both Calendly and Cal.com. Do you have a Stripe account, or need to set one up?
4. What should a booking actually charge — a flat deposit, the full session price, or does it vary by service (since pricing varies from $75 to $600/min)?

**Assets**
5. Ready to receive when you are: logo file, hero photo, about-me photo, 12 portfolio photos, and the 2 aerial video files. What's the easiest way to get these to me — are they already on this Mac (which folder), on the external Sandisk drive, on your phone, or somewhere else? Once I know where they are I can bring them into the project folder.

## Decisions (confirmed)
- Business name: Jolin Media
- Contact info: email, phone, Instagram as listed above
- Site structure: Home (single page with sections) + Services + Contact
- Portfolio layout: static grid, not lightbox, with embedded Playbook portfolio link below it
- Video examples: 3 YouTube links (confirmed above) + 2 aerial loop clips (files to be uploaded)
- Event Coverage & Web Design: quote-on-request, no listed pricing
- Booking: embedded real-time scheduler with online payment collection
- Design: no reference site, Claude has creative freedom
- Domain: owned (jolinmedia.com)
- Hosting: Vercel
