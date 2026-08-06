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
- Age: 21
- Certifications: Part 107 certified (licensed to fly commercially) and fully insured; certificates available on request before shoot day
- Service area: Southeast Iowa, western Illinois, north Missouri — no travel fee within 30 miles of Burlington, mileage at cost beyond that
- Gear: full-frame mirrorless bodies (x2), fast primes + a workhorse zoom, licensed 4K/60 drone, lav + shotgun audio, lights when needed
- Footage/photo ownership: client owns the final deliverables; every video package includes a full commercial license; raw footage retained for 12 months

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
   - Three albums, static grid (not lightbox):
     - Portraits — 5 photos
     - Sports — 5 photos
     - More Work — remaining 14 photos (7 portraits + 7 sports not featured above) — *assumption: one combined album; tell me if you wanted portraits/sports kept separate within it*
   - Which 5 go in each of Portraits/Sports is not yet chosen — Claude will make an initial pick from the 12 staged in `assets/portfolio/`, swappable anytime
   - Plus a video section:
     - 3 video examples (YouTube):
       - https://youtu.be/XGcTLxPtHUs
       - https://youtu.be/06cEg1J4TNo
       - https://youtu.be/ejIs2mUXO4M
     - 2 looping aerial shots (drone footage, silent/muted autoplay loop) — Joey will upload the video files
   - Below the static image grid: embedded Playbook portfolio (https://www.playbook.com/s/jolinmedia/portfolio/)

4. **About Me**
   - Name
   - Photo
   - About-me copy (from earlier draft, carried over — adjust tone/length as needed):
     > I run Jolin Media. It's a camera, a drone, an edit bay and me. I'm 21 and I've been shooting since I was old enough to save for a lens. Working solo means you talk to the person holding the camera, the price doesn't cover an office, and nothing gets lost between a producer and an editor. Most of my work happens within an hour of Burlington — food producers, hotels, property, ball games, festivals. If it looks good in the last hour of light, I want to shoot it.
   - "How it goes" 4-step process:
     1. You send the brief — what, where, when
     2. I send a plan — shot list, price, and a date, usually same day
     3. Shoot day — I show up early, work around your crew, stay out of the way
     4. You get the files — edits come back quickly, revisions included
   - Certification/gear callouts (Part 107 certified, fully insured, Burlington/SE Iowa service area, gear list — see Business section above)

5. **Booking section**
   - Embedded **Cal.com** scheduler (real-time availability), not a plain form
   - Photography bookings (portrait & sports sessions): collect **50% deposit upfront** via Stripe at time of booking
   - Video bookings: **no payment collected at booking** — priced per finished minute, billed separately after the work is scoped/delivered
   - Payment processor: **Stripe** — Joey still needs to create the account (not blocking site build, but needed before booking goes live)

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
- **Social Bundle** — $1,200
  - Six vertical edits from one shoot day
  - One month of posting material
  - Priority turnaround

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

### Carried over from earlier draft — content only, doesn't contradict anything confirmed
- **Deliverables** (what's included, could be its own tab/section on Services):
  - Film & stills: master film (16:9, graded/mixed), vertical cutdowns for Reels/TikTok, retouched stills (print + web sizes), raw footage kept 12 months
  - Events & web: same-week recap film for events, sponsor cutdowns/social sets, websites built around the footage, one training call to update it yourself
- **FAQ** (candidate content for Services page):
  - What's a finished minute? — the length of the film you actually get (e.g. a 90-second brand film = 1.5 finished minutes = $900 at the commercial rate, regardless of shoot days)
  - Why is short form cheaper per minute? — less scripting, fewer setups, no long-form edit
  - Are you licensed to fly? — yes, Part 107 certified and insured, airspace authorizations filed when needed
  - How fast do I see something? — realistic timeline given with the plan; stills usually land before the film
  - Who owns the footage? — client does; full commercial license included; raws kept 12 months
  - Do you travel? — no fee within 30 miles of Burlington, mileage at cost beyond that
  - It's really just you? — yes, same person on camera/drone/edit/email; brings a second shooter on bigger jobs

### Candidate addition — NOT yet confirmed, need a yes/no
- **Portrait add-ons**: 5 additional photos $60, additional location $50, full gallery upgrade $150, rush delivery (24–36 hrs) $75

## Contact page
- Same embedded booking/scheduler as Home
- Email: joey@jolinmedia.com
- Phone: (319) 750-3747
- Instagram: @jolin_media
- Location: Burlington, Iowa

## Design & content — DECIDED
- No reference sites — Claude has creative freedom on visual design
- Build process: use the `frontend-design` skill (distinctive, subject-specific visual identity — not a generic AI-design template) and the `ui-ux-pro-max` checklist (accessibility, touch targets, responsive breakpoints, motion, polish) when implementing the actual site
- Logo: **final** — `assets/logo/jolin-media-logo-mark.png` (crisp wordmark). `jolin-media-logo.png` (blank) and `jolin.media.logo.png` (blurred variant) are disregarded — not used.
- Hero photo: **received** — `assets/hero shot/0F3C6767-4813-430F-AC80-AD58703CB388.JPG` (Joey courtside at a championship event, camera visible, thumbs up)
- About-me photo: **received** — `assets/about me/JOE03278 2.JPG` (outdoor portrait near a barn)
- Aerial loop videos: **received**, kept locally only (gitignored, too large for the repo — `assets/drone aerial shots/DJI_0137.mp4` and `DJI_0160.mp4`, 126MB and 80MB). Will need web-optimized/compressed versions made before use in the actual site build.
- Portfolio photos: **received and staged** in `assets/portfolio/portraits/` (12 files) and `assets/portfolio/sports/` (12 files) — copied from the Sandisk drive (`Jolin Media claude website/Photos/`). Split decided: 5 portraits + 5 sports featured, remaining 14 go in a "More Work" album (see Home page section above).

## Technical — DECIDED
- Domain already owned: jolinmedia.com
- Hosting: **Vercel**
- Implied stack: a framework Vercel deploys natively (Next.js is the natural default) — to be confirmed when we scope the build

## Open questions (remaining)

**Portfolio**
1. "More Work" album — confirm it should be one combined album of all 14 leftover photos, not split by category.

**Booking / payments**
2. Stripe account still needs to be created by Joey before booking payments can go live — not a blocker for building the site, just needs to happen before launch.

**Candidate additions (see Services page)**
3. Add portrait session add-ons (extra photos $60, extra location $50, gallery upgrade $150, rush delivery $75)?
4. Add the Deliverables and FAQ content to the Services page?

**Housekeeping**
5. A `drone/` folder with Adobe Premiere project files (`.prproj`, auto-saves) appeared at the top level of the project folder — doesn't belong in a website repo, already excluded from git via `.gitignore`. Delete it from the project folder entirely, or leave it alone?

## Decisions (confirmed)
- Business name: Jolin Media
- Contact info: email, phone, Instagram as listed above
- Site structure: Home (single page with sections) + Services + Contact
- Portfolio layout: static grid, not lightbox, with embedded Playbook portfolio link below it
- Video examples: 3 YouTube links (confirmed above) + 2 silent/muted aerial loop clips (files to be uploaded)
- Portfolio split: 5 portraits + 5 sports featured, remaining 14 in a "More Work" album
- Social Bundle ($1,200) added to videography pricing
- Contact form: Cal.com only — the Jotform found in the earlier draft is disregarded
- Logo: `jolin-media-logo-mark.png` only — other two logo files removed from the project
- Event Coverage & Web Design: quote-on-request, no listed pricing
- Booking: embedded Cal.com scheduler; 50% Stripe deposit upfront for photography, no payment at booking for video
- Design: no reference site, Claude has creative freedom
- Domain: owned (jolinmedia.com)
- Hosting: Vercel
- About Me copy, 4-step process, certifications/gear, and FAQ/Deliverables content: carried over from an earlier draft build found on the Sandisk drive (`Claude code websites/jolin media/`) — kept because it didn't contradict anything confirmed this session
