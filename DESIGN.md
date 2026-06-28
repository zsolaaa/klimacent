# KlímaCent Kft. – Design System

## Color Strategy
**Committed** – a sötét tengerészkék uralja a felületet, a piros szűk akcent a CTA-kra.

### Palette (OKLCH)
| Token | OKLCH | Hex approx | Szerep |
|---|---|---|---|
| `primary` | oklch(25% 0.09 260) | #00316b | Nav, fejlécek, gombok, linkek |
| `secondary` | oklch(38% 0.19 20) | #bb0027 | CTA gombok, check ikonok – max 8% felület |
| `surface` | oklch(98% 0.005 250) | #f6f9ff | Oldalháttér |
| `surface-container` | oklch(92% 0.01 240) | #e0f0ff | Kártyák, szekció háttér |
| `on-surface` | oklch(15% 0.02 250) | #0d1d29 | Elsődleges szöveg |
| `on-surface-variant` | oklch(40% 0.015 245) | #424751 | Másodlagos szöveg, metaadatok |
| `outline-variant` | oklch(80% 0.01 245) | #c3c6d3 | Keretek, elválasztók |
| `inverse-surface` | oklch(25% 0.04 235) | #22323e | Footer háttér |

### Theme decision
**Nappalos, természetes fény.** A célfelhasználó otthona nappalijából böngészik, vagy irodájából telefonál. Világos téma, fehér- és kék alapon – nincs sötét mód.

## Typography

### Fontok
- **Montserrat** – display, heading: H1–H3, nav brand neve
- **Inter** – body, label: minden egyéb szöveg

### Skála
| Szint | Méret | Súly | Sor |
|---|---|---|---|
| Headline XL | 48px | 700 | 56px |
| Headline LG | 32px | 700 | 40px |
| Headline MD | 24px | 600 | 32px |
| Body LG | 18px | 400 | 28px |
| Body MD | 16px | 400 | 24px |
| Label LG | 14px | 600 | 20px |
| Label SM | 12px | 500 | 16px |

- Max body line length: 65ch
- Mobile headline XL: 32px / 40px

## Layout

### Konténer
- Max-width: 1200px, centered
- Gutter: 24px (padding oldalanként)
- Section vertical padding: 80px (xl), 48px (lg)

### Grid
- Desktop: 12 oszlop, 24px gap
- Általánosan: 3 egyenlő kártya, vagy 1/3 + 2/3 split (pl. kapcsolat szekció)
- Hero: teljes szélesség, tartalom alulra igazítva (`items-end`)

## Elevation & Borders

- Nincs `box-shadow` spam – csak a "rólunk" képen
- Border radius: `rounded-xl` (0.5rem) kártyákhoz, `rounded-lg` (0.25rem) gombokhoz
- Keretek: `1px solid outline-variant` – kártyákon hover előtt halvány, hover után `primary`

## Components

### Nav
- Rögzített (sticky top), `backdrop-blur-md`
- Bal: brand logó (Montserrat Bold, primary)
- Közép: navigációs linkek (desktop only)
- Jobb: telefonszám + piros CTA gomb

### Hero
- Teljes szélességű háttérkép, `bg-cover`, `background-position: center top`
- Gradiens alulról felfelé: `from-black/70 ... to-transparent` – klíma látszik fent
- Tartalom: balra igazítva, alulra (`items-end`, `pb-16`)
- Max tartalom szélesség: `max-w-xl`

### Service Cards
- 3 oszlopos grid
- Ikon + cím + leírás + bullet lista + kép
- Hover: border-color `outline-variant` → `primary`, kép `scale-105`

### Contact Section
- 1/3 + 2/3 split
- Bal oldal: `bg-primary` sötétkék, elérhetőségek fehér szöveggel
- Jobb oldal: `bg-surface-container-highest`, form
- CTA gomb: piros, teljes szélesség

### Footer
- `bg-inverse-surface` (sötét)
- Brand név + copyright balra, jogi linkek jobbra

## Motion & Interactions
- Kép hover: `transition-transform duration-500` (scale)
- Gomb hover: `hover:brightness-90/110`, `active:scale-95`
- Nav: `shadow-md` megjelenik scrollnál
- Semmi bounce, semmi elastic – `ease-out` görbe mindenhol
- Nem animálunk layout propertyt (height, width, margin)

## Absolute Bans (projekt-specifikus)
- Nincs side-stripe border kártyákon
- Nincs gradient text
- Nincs glassmorphism dekoratív célból
- Nincs "big number + kis label" hero metrika kártya
- Nincs `#000` vagy `#fff` – mindig tintált semlegesek
