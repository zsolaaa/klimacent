# KlímaCent Kft. – Projekt útmutató

## Összefoglalás

Statikus landing oldal egy bajai klímaszerelő és hűtéstechnikai vállalkozásnak. Cél: bizalomépítés + közvetlen kapcsolatfelvétel (telefonhívás, ajánlatkérő űrlap). Egyetlen `index.html` fájl; a Tailwind CSS-t egy egyszeri paranccsal (`npm run build:css`) legyártott statikus `styles.css` szolgálja ki – nincs futásidejű build/dev szerver.

## Fájlstruktúra

```
index.html          ← egyetlen forrás, minden szekció ebben van
styles.css           ← legenerált statikus Tailwind CSS (ne szerkeszd kézzel!)
tailwind-input.css   ← @tailwind direktívák, a styles.css forrása
tailwind.config.js   ← Tailwind téma (színek, spacing, fontok) – tükrözi a DESIGN.md-t
package.json         ← csak a `build:css` scripthez és a Tailwind CLI-hez
_headers            ← Netlify security headerök (CSP, X-Frame-Options, stb.)
PRODUCT.md          ← brand kontextus az /impeccable skillhez
DESIGN.md           ← design system az /impeccable skillhez
logo/
  logo.webp         ← KlímaCent navbar logó (mix-blend-mode: multiply)
  auto.webp         ← szervizautó fotó (Rólunk szekció)
  Daikin-Logo.png
  Mitsubishi_Electric-Logo.wine.png
  LG_logo_(2014).svg.png
  cascade-logo.png
  avd8lnbif.webp    ← Gree logó
  tcl-vector-logo-11574259917avkticmgei.png
klima.webp          ← hero háttérkép (AC egység), preload-olva fetchpriority="high"-jal
.claude/
  launch.json       ← preview szerver (npx serve -p 3456 .)
```

## Tech stack

- **Tailwind CSS**, egyszer legenerált statikus `styles.css` (nem CDN, nem futásidejű JIT – ez volt a fő oka egy korábbi kritikus LCP problémának)
- **Google Fonts**: Montserrat (headlines) + Inter (body) + Material Symbols Outlined (ikonok)
- Nincs JS framework, nincs dev szerver / hot-reload – csak a CSS-generáláshoz kell egyszer Node/npm

### CSS újragenerálása

Ha új Tailwind osztályt adsz az `index.html`-hez (vagy módosítod a `tailwind.config.js`-t), a `styles.css`-t újra kell generálni, különben a build hiányzó lesz belőle:

```bash
npm install   # csak első alkalommal
npm run build:css
```

A `node_modules/` és `package-lock.json` nincs commitolva (`.gitignore`), mindenki lokálisan generálja újra.

**FONTOS:** `npm install`-t mindig ebből a mappából (`kílmacent/claude`) futtasd, soha a szülőmappából (`kílmacent/`) – ott egy teljesen másik, független React-projekt van a saját `package.json`-jával, amit véletlenül felül lehet írni, ha az npm felfelé sétál a könyvtárfában.

## Elérhetőségek (valós adatok)

- Telefon: `(30) 362 5633` — `tel:` href: `+36303625633`
- Email: `klimacentplusskft@gmail.com`
- Helyszín: Baja és 30 km-es körzete (nem Budapest!)

## Design rendszer (összefoglaló)

Részletek: `DESIGN.md`

- **Primary**: `#00316b` (sötét tengerészkék)
- **Secondary**: `#bb0027` (piros) – max 8% felület, csak CTA
- **Surface**: `#f6f9ff` (kékesfehér háttér, sosem tiszta `#fff`)
- Fontok: Montserrat (fejlécek), Inter (szövegtörzs)
- Breakpointok: `md:` = 768px, `lg:` = 1024px

### Tiltott elemek (design bans)

- Nincs `#000` vagy `#fff` – mindig tintált semlegesek
- Nincs side-stripe border kártyákon
- Nincs gradient text
- Nincs glassmorphism
- Nincs „big number + kis label" hero metrika kártya
- Nincs egyforma kártya-grid (3 kártya mindig strukturálisan különböző)

## Oldal szekciói (sorrendben)

1. **Nav** – sticky, logo (60px, mix-blend-mode: multiply), desktop linkek, mobil hamburger
2. **Hero** – `klima.webp` háttér, `center top`, bottom-up gradiens; mobilon `-35px` offset; a fájl `<link rel="preload">`-olva van fetchpriority="high"-jal az LCP javítása miatt
3. **Márkaszervíz sáv** – 6 logó (h-8, Cascade: max-w-[88px] object-contain)
4. **Szolgáltatások** – 3 strukturálisan eltérő kártya (featured navy + image-top + content-rich)
5. **Rólunk** – `logo/auto.webp` bal oldalt, bullet lista jobb oldalt
6. **Kapcsolat** – 1/3 navy panel + 2/3 form (service pill-ek JS-sel)
7. **Footer** – sötét háttér, dinamikus copyright év

## Mobil-specifikus CSS (`<style>` blokk)

```css
@media (max-width: 767px) {
  .hero-bg   { background-position: center -35px !important; }
  .hero-overlay { /* erősebb gradiens */ }
}
.service-radio-label.active { border-color: #00316b; background-color: rgba(0,49,107,0.07); }
```

## Preview szerver indítása

```
.claude/launch.json konfiguráció alapján:
npx serve -p 3456 .
```

Server ID a `preview_list` tool-lal kérhető le, majd `preview_screenshot`-tal ellenőrizhető.

## Munkastílus-megjegyzések

- Az `/impeccable` skill ismeri a `PRODUCT.md` és `DESIGN.md` fájlokat – critique/polish előtt ezeket kell betölteni
- Képcserénél mindig ellenőrizd a fájl elérési útját (`logo/` almappa vs gyökér)
- Egyedi Tailwind-értékek (`h-[60px]`, `max-w-[88px]`) működnek, mert a `tailwind.config.js` `content` mezője az `index.html`-t szkenneli – de **CSS-módosítás után mindig futtasd az `npm run build:css`-t**, különben a változás nem jelenik meg
- Deploy előtt (Netlify auto-publish a `main`-ről) győződj meg róla, hogy a `styles.css` friss és commitolva van – ez NEM generálódik build-time a Netlify-on
