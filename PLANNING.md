# Jolin Media — Website Planning

## Status
Planning essentially complete. All content, pricing, assets, and tech stack decisions are made — only outstanding item is Joey creating a Stripe account before booking payments can go live (not a build blocker). No code has been written yet.

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
   - Two albums, static grid (not lightbox), 6 photos each — back to the original plan:
     - **Portraits** (`assets/portfolio/portraits/`): JOE03635 (path, overalls), JOE04209 (creek, fall foliage), JOE07612 (flower field, dress), JOE07642 (flower field, male), JOE04956 (locker room w/ basketball), JOE03265 (gym w/ trophy) — picked for a mix of outdoor/indoor settings and subjects
     - **Sports** (`assets/portfolio/sports/`): JOE01763 (explosive dunk), DSC03306 (finger-roll layup, warm light), DSC03011 (stylized dribble shot), JOE04201 (B&W floor moment), JOE09920 2 (artistic shoe/reflection detail), JOE02500 (jump shot w/ referee) — picked for variety across action, mood, and editing style
   - The other 12 candidate photos (6 portraits + 6 sports) were removed from the project — not used
   - Plus a video section:
     - 3 video examples (YouTube):
       - https://youtu.be/XGcTLxPtHUs
       - https://youtu.be/06cEg1J4TNo
       - https://youtu.be/ejIs2mUXO4M
     - 2 looping aerial shots (drone footage, silent/muted autoplay loop) — **live in ImageKit** at `/site/drone/DJI_0137.mp4` and `/site/drone/DJI_0160.mp4`
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

**Add-ons:**
- 5 additional photos — $60
- Additional location — $50
- Full gallery upgrade — $150
- Rush delivery (24–36 hrs) — $75

### Sports Photography
- **Basic** — $75
  - 10 edited images, watermarked
- **Standard** — $125
  - 15 edited images, no watermark
- **Premium** — $200
  - Full gallery, 30–60 edited images, no watermark

Each pricing tier has a button linking to the Contact page.

**Not priced yet (quote-on-request for now):** Event Coverage, Web Design. Contact-only, no listed pricing tiers.

### Added to Services page — DECIDED (Deliverables + FAQ, carried over from earlier draft)
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
- Aerial loop videos: **received and live in ImageKit** at `/site/drone/DJI_0137.mp4` (~77MB) and `/site/drone/DJI_0160.mp4` (~80MB). Still need web-optimized/compressed versions made before use as autoplay loops — these are raw originals.
- Portfolio photos: **final selections made** — 6 portraits + 6 sports staged in `assets/portfolio/` (see Home page section above for which files and why). The other 12 candidates were removed from the project.

## Technical — DECIDED
- Domain already owned: jolinmedia.com
- Frontend framework: **Next.js**
- Hosting: **Vercel**
- Media hosting/CDN: **ImageKit** — chosen for fast image/video loading. All site photos and video (portfolio, hero, about-me, aerial loops) served from ImageKit rather than committed as raw files in git or bundled into the Vercel deploy. Also solves the large-video-file problem (raw drone footage is 80–126MB, too big for git/GitHub).
  - Constraint: ImageKit uploads via Claude's tooling only accept a public URL, not local files. Portfolio/hero/about-me photos are already on the public GitHub repo, so those can be imported via their raw GitHub URLs. The 2 aerial videos aren't in git (too large) — Joey uploaded those directly via the ImageKit dashboard instead.
  - Existing ImageKit folder structure found: `/portfolio/portrait`, `/portfolio/sports`, `/portfolio/video`, `/portfolio/drone` (all empty so far), `/site/drone` (has the 2 aerial videos), `/site` (otherwise empty).
- Backend: **Supabase** — for backend features generally (database, likely auth/storage as needed). Specific tables/schema (contact/booking inquiries, etc.) to be defined once we scope the actual build.

**Confirmed stack: Next.js (frontend) + Vercel (hosting) + Supabase (backend) + ImageKit (media) + Cal.com (booking) + Stripe (payments).**

## Open questions (remaining)

**Booking / payments**
1. Stripe account still needs to be created by Joey before booking payments can go live — not a blocker for building the site, just needs to happen before launch.

## Decisions (confirmed)
- Business name: Jolin Media
- Contact info: email, phone, Instagram as listed above
- Site structure: Home (single page with sections) + Services + Contact
- Portfolio layout: static grid, not lightbox, with embedded Playbook portfolio link below it
- Video examples: 3 YouTube links (confirmed above) + 2 silent/muted aerial loop clips (files to be uploaded)
- Portfolio: 6 portraits + 6 sports, specific photos chosen (see Home page section)
- Social Bundle ($1,200) added to videography pricing
- Portrait add-ons added: extra photos $60, extra location $50, gallery upgrade $150, rush delivery $75
- Deliverables and FAQ content added to Services page
- Contact form: Cal.com only — the Jotform found in the earlier draft is disregarded
- Logo: `jolin-media-logo-mark.png` only — other two logo files removed from the project
- Media hosting: ImageKit — aerial videos already live there; portfolio/hero/about-me photos to be imported from GitHub
- Stray `drone/` Premiere project folder deleted from the project (Joey is uploading originals to ImageKit himself)
- Stack confirmed: Next.js + Vercel + Supabase (backend) + ImageKit (media) + Cal.com + Stripe
- Event Coverage & Web Design: quote-on-request, no listed pricing
- Booking: embedded Cal.com scheduler; 50% Stripe deposit upfront for photography, no payment at booking for video
- Design: no reference site, Claude has creative freedom
- Domain: owned (jolinmedia.com)
- Hosting: Vercel
- About Me copy, 4-step process, certifications/gear, and FAQ/Deliverables content: carried over from an earlier draft build found on the Sandisk drive (`Claude code websites/jolin media/`) — kept because it didn't contradict anything confirmed this session
