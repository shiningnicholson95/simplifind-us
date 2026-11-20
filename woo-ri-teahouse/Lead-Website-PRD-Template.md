# Lead Website Generator — Claude Design Command (Template)

> **How to use:** Copy this whole file into a new Claude Design project. Fill in the
> `INPUTS` block at the top with whatever you gathered for the lead (Google Maps
> listing, photos, reviews, phone, email, etc.). Leave anything you don't have blank —
> Claude will use a clearly-labeled placeholder so you can swap it later. Then send.

---

## 1. INPUTS  (fill this in per lead — everything below is an example)

```
BUSINESS NAME:        e.g. Woo Ri Teahouse
CATEGORY / TAGLINE:   e.g. Boba & Korean Food
GOOGLE MAPS LINK:     e.g. https://maps.app.goo.gl/....
ADDRESS:              e.g. 4009 Broadway, San Antonio, TX 78209
PHONE:                e.g. (210) 265-3412
EMAIL:                e.g. hello@business.com   (leave blank -> placeholder)
HOURS:                e.g. Mon closed / Tue–Thu 11–8 / Fri–Sat 11–9 / Sun 11–3
GOOGLE RATING:        e.g. 4.9★ from 240+ reviews
ORDER ONLINE LINK:    e.g. DoorDash/UberEats/Toast URL (leave blank -> placeholder)
SOCIAL LINKS:         Instagram / Facebook / TikTok (leave blank -> platform home)
OWNER / STORY:        e.g. Owner Vivian; family kimbap recipes  (or "make up warm sample, flag it")
MENU / PRICE LIST:    paste text OR attach photos of the menu board
PHOTOS PROVIDED:      attach — label which are food/drink, interior, exterior, review screenshots
BRAND COLORS/FONTS:   optional — else Claude picks a fitting palette
```

---

## 2. GOAL

Build a fast, mobile-first **lead-generation website** for the business above, good
enough to demo to the owner and convert them onto a monthly retainer. Real content
only — no filler, no fake stats. Use only the photos I provided (or clearly-marked
placeholders). Work token-efficiently; this is a sample, not a full build yet.

## 3. DELIVERABLES  (plain, interlinked `.html` files)

1. **Home** — hero (best drink/product photo + rating badge), quick facts, owner/story
   blurb, "what we serve" preview, a real-review pull-quote, visit/location block, footer.
2. **Menu** — every item and price from the provided menu, grouped by category with
   descriptions. If no prices given, list items and note "prices in-store."
3. **Gallery** — shop/food/interior photos only. **No review screenshots here.**
4. **Reviews** — 4–6 real Google reviews transcribed, rating badge, "leave a review" CTA.
   (Review screenshots, if any, belong ONLY on this page.)
5. **Contact** — address, click-to-call phone, email, day-by-day hours, embedded Google
   Map, social icons, and a simple contact form (mailto).

## 4. GLOBAL REQUIREMENTS (apply to EVERY page)

- **Nav + footer identical on all pages**, linking all five pages with correct `.html` paths.
- **Conversion basics on every page:** "Order Online" button in the nav, click-to-call
  phone, full address (NAP consistent everywhere), Google-rating trust badge near the top
  of Home.
- **Social icons** (Instagram, Facebook, TikTok, Google Maps) in every footer — keep them
  even if links are placeholders.
- **Embedded Google Map** on Contact (use `https://maps.google.com/maps?q=<BUSINESS>+<CITY>&output=embed`).
- **SEO:** unique `<title>` + meta description per page, with business name + city +
  category. Add a favicon if easy.
- **Mobile responsive** — flex/grid with `gap`, `clamp()` type, wrapping nav.
- **No placeholder/dummy content or images.** Any unknown field → an obvious labeled
  placeholder (e.g. `ORDER_LINK_HERE`, `(000) 000-0000`) so I can find & swap it.
- Any invented copy (e.g. an owner story when none was given) must be **flagged in your
  summary** as sample text to confirm.

## 5. DESIGN SYSTEM

- Pick **one** cohesive palette + **one** font pairing that fits the business's vibe
  (from brand colors if given, else infer from the photos). Reuse it across all pages.
- Warm, human, local-small-business tone in the copy — not corporate.
- Avoid AI-slop tropes: no gradient-heavy hero, no random stat blocks, no emoji spam
  unless the brand is playful. Real photos over illustrations.

## 6. OUTPUT & HANDOFF

- Deliver plain standalone `.html` files (portable, easy to hand to the client/host).
- Copy the images I attached into an `assets/` folder; reference them locally.
- End with a short summary listing **exactly which placeholders I still need to fill**
  (email, socials, order link, anything unconfirmed) so I can finish before the pitch.

---

## 7. OPTIONAL ADD-ONS (ask me before building)

- One-page **pricing/proposal sheet** ($50 & $100 tiers) styled to match the site.
- "Join the club" **loyalty** section, **catering** callout, or an **order-ahead** CTA
  block if the business supports it.
