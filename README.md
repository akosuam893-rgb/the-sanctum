# The Sanctum

> A members club for a life well lived.

A polished mobile-app concept for **The Sanctum**, a private members club —
built as a React single-page app with a phone-framed, "quiet luxury" interface.
Warm neutrals, serif display type, and self-contained inline-SVG artwork (no
external image requests).

## Screens

| Screen | Route | Highlights |
| --- | --- | --- |
| **Welcome** | `/` | Arch monogram splash, *Join the Sanctum* / *I am a member* |
| **Home** | `/home` | Morning greeting, hero card, quick actions, upcoming & featured |
| **Experiences** | `/experiences` | Curated events (private dinner, spa ritual, tasting) |
| **Concierge** | `/concierge` | Service menu + *Request Assistance* |
| **Sanctuary** | `/sanctuary` | The Sanctum Journal product detail + *Add to Bag* |
| **Profile** | `/profile` | Membership overview and settings |

Navigate with the bottom tab bar. All interactions (save, add to bag, request
assistance) are live in-app.

## Tech

- **React 18** + **TypeScript**
- **Vite** for dev/build
- **React Router** (hash routing) for the five tabs
- Hand-built CSS design system (`src/index.css`) — no UI framework
- Inline SVG icons and still-life illustrations — fully self-contained

## Getting started

```bash
npm install
npm run dev      # start the dev server
npm run build    # type-check + production build
npm run preview  # preview the production build
```

Then open the printed local URL. The app is framed as a phone; on wider screens
an intro panel appears alongside it.

## Design language

- **Palette** — warm cream, sand, blush/dusty-rose, soft gold, deep taupe ink
- **Type** — *Cormorant Garamond* for display, *Jost* for UI and small caps
- **Feel** — considered, calm, tactile: rounded surfaces, soft shadows, generous space
