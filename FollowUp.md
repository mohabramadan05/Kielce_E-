# Kielce_E — Progress Tracker

The current state of the KUT Erasmus+ website. **Update your section whenever you finish or start something**, and tick items in the tables when they're done.

> How the project is structured: see `PROJECT_GUIDE.md`.

_Last updated: 2026-11-08_

---

## ✅ Finished

### Project setup
- [x] Next.js 16.4 (App Router, Turbopack), React 19, TypeScript (strict)
- [x] Tailwind CSS v4 with design tokens in `app/[locale]/globals.css`
- [x] ESLint (Next core-web-vitals + TypeScript)
- [x] `@/` import alias
- [x] Developer guide (`PROJECT_GUIDE.md`)

### Internationalisation (EN / PL)
- [x] next-intl routing with `/en` and `/pl` prefixes (`i18n/routing.ts`)
- [x] Locale middleware (`proxy.ts`)
- [x] Translation files `messages/en.json` and `messages/pl.json`
- [x] Language switcher in the header (stays on the same page)
- [x] Translated page title and meta description

### Theming
- [x] Light / dark / system theme (next-themes, `data-theme`)
- [x] Colour tokens for both themes (`bg`, `surface`, `fg`, `line`, `brand`…)
- [x] Floating theme switcher (bottom-right)

### Layout (shared on every page)
- [x] Header: logo, site name, "Apply Now" button
- [x] Navigation set up in `config/site.ts` (plain links + dropdowns)
- [x] Dropdown menus (close on outside click / Esc, active-route highlight)
- [x] Mobile hamburger menu
- [x] Footer: address, contact, explore links, social links

### Pages
- [x] **Home** (`/`): Hero, Why Erasmus+, Testimonials banner, Get started cards, Contact call to action
- [x] **Coordinators** (`/students/coordinators`): university coordinator, 5 faculty coordinator cards, administrative staff, department contact
- [x] Fixed the "Blocking Route" prerender error on Coordinators (`setRequestLocale`)

---

## 📄 Pages status

| Page | Route | Status | Owner |
|---|---|---|---|
| Home | `/` | ✅ Done | |
| Coordinators | `/students/coordinators` | ✅ Done | |
| Incoming students | `/students/incoming` | ⬜ Not started | |
| Outgoing students | `/students/outgoing` | ⬜ Not started | |
| Partner universities | `/students/partner-universities` | ⬜ Not started | |
| Policy statement | `/about/policy` | ⬜ Not started | |
| News | `/news` | ⬜ Not started | |
| Photo gallery | `/gallery` | ⬜ Not started | |
| KA220 | `/ka220` | ⬜ Not started | |
| KA-171 countries | `/ka171` | ⬜ Not started | |
| Testimonials | `/testimonials` | ⬜ Not started | |
| Contact | `/contact` | ⬜ Not started | |

Status legend: ⬜ Not started · 🟨 In progress · ✅ Done · 🟥 Blocked

---

## 🐞 Open issues

| Issue | Status | Owner |
|---|---|---|
| PL translation keys don't match EN in `Coordinators` (`outcomings`) | ⬜ | |
| Hero "Outgoing" button links to `/students/outcoming` (typo) | ⬜ | |
| All 4 "Get started" cards link to `/students/incoming` | ⬜ | |
| Coordinator email typo `erasmus@tu.kiele.pl` | ⬜ | |
| Swap `next/link` for `Link` from `@/i18n/navigation` | ⬜ | |
| Undefined `text-text` / `text-text-2` classes → `text-fg` / `text-fg-2` | ⬜ | |
| Hard-coded colours in `get.tsx` (broken in dark mode) | ⬜ | |
| Pull repeated cards out into a reusable component + data file | ⬜ | |
| Responsive layout for mobile (fixed widths, 4-card row) | ⬜ | |
| Image alt texts (faculty logos, header logo) | ⬜ | |
| Replace the default create-next-app `README.md` | ⬜ | |

---

## 👥 Developer progress


---

### Mohab
**Working on:** —

#### 2026-11-08
- ✅ Done: Home page, Coordinators page, layout, i18n, theming
- 🟨 In progress: —
- 🟥 Blocked by: —
- 📝 Notes: —

---

### Youssef
**Working on:** —

---

### Ammar
**Working on:** 

---

### Mohamed
**Working on:** —