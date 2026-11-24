# nuskha — Brand Identity & Design System (`DESIGN.md`)

**Version:** 1.0.0  
**Scope:** Production Logo System, Color Architecture, Typography, UI Foundations & Web Assets

---

## 1. Brand Overview & Visual Principles

**nuskha** (*formulation, remedy, or treasured recipe*) pairs heritage botanical craft with modern structural clarity. The visual identity is anchored by an interlocking over-under ribbon logomark—weaving Forest Green botanical arches and an internal leaf sprout with a warm Burnt Saffron ribbon—paired with a bespoke high-contrast calligraphic serif wordmark.

### Brand Personality
- **Grounded & Artisanal:** Warm parchment canvases and tactile ink tones rather than stark `#FFFFFF`/`#000000` extremes.
- **Warmly Authoritative:** Deep Botanical Forest anchors trust and editorial poise.
- **Disciplined & Accessible:** Strict 4px/8px grid geometry, WCAG AA/AAA contrast pairings, and responsive vector scalability.

---

## 2. Logo System & Usage Rules

### Lockup Variants
| Variant | Canonical `viewBox` | Export Dimensions (`@1x` / `@2x` / `@3x` / Master) | Recommended Use Cases |
| :--- | :--- | :--- | :--- |
| **Primary (Horizontal)** | `0 0 1200 320` | `450×120` / `900×240` / `1350×360` / `2048×546` | Desktop navbars, web headers, email signatures, wide banners |
| **Secondary (Stacked)** | `0 0 1000 760` | `300×228` / `600×456` / `900×684` / `2048×1556` | Hero modules, packaging fronts, square cards, vertical signage (preserves exact original lockup proportions) |
| **Logomark (Icon Only)** | `0 0 512 512` | `128×128` / `256×256` / `384×384` / `2048×2048` | Favicons, app icons, social avatars, embossed seals, stamps |
| **Wordmark Only** | `0 0 960 280` | `336×98` / `672×196` / `1008×294` / `2048×597` | Compact horizontal bars, textile tags, co-branded footers |

### Color Treatments
1. **`full-color`:** Forest Green (`#1A4D3C`) + Burnt Saffron (`#D86F2B`) with inner-fold depth (`#CF6928`). Use on `#FCF8ED`, `#FFFFFF`, or light neutral grounds (`L >= 88%`).
2. **`inverted`:** Warm Parchment (`#F5EFE0`) + Luminous Saffron (`#E8823E`) with fold tone (`#D67332`). Use on `#0E1A15`, `#14241D`, or dark photography (`L <= 20%`).
3. **`mono-black` (`#000000`):** Single-ink black with precision over-under weave knockout gaps carved into the underneath ribbons at all four crossings. Use for letterpress, black foil, receipts, and fax/1-color print.
4. **`mono-white` (`#FFFFFF`):** Single-ink white with identical weave knockout separation for dark photography overlays and white foil stamping.

### Clear Space & Minimum Sizes
- **Clear Space (`1x`):** Define **`x`** as the x-height of the lowercase `n` in the wordmark (or `25%` of logomark height when used standalone). Maintain at least **`1x`** unobstructed breathing room on all four sides (`1.5x` recommended on hero packaging).
- **Minimum Display Widths:**
  - Primary Horizontal: `120 px` digital / `32 mm` print
  - Secondary Stacked: `88 px` digital / `24 mm` print
  - Logomark Only: `24 px` digital (`16 px` favicon only) / `10 mm` print
  - Wordmark Only: `72 px` digital / `20 mm` print

### Logo Do's & Don'ts
- **DO** preserve the exact vector proportions from `/logos/svg` and `/logos/pdf`.
- **DO** switch to `inverted` or `mono-white` whenever background luminance drops below `25%`.
- **DO** use the `mono-*` weave-knockout files (never simply recolor `full-color` to black) for single-ink print so the over-under interlacing remains legible.
- **DON'T** stretch, rotate, skew, outline, or apply drop shadows/gradients to any mark.
- **DON'T** alter the spacing or scale ratio between the emblem and wordmark.
- **DON'T** recreate the `nuskha` wordmark with a standard serif font.

---

## 3. Color Palette & Accessibility

### Core Brand & Surface Specifications
| Role | Token | HEX | RGB | HSL | CMYK |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Primary (Logo Green) | `forest-700` | `#1A4D3C` | `26, 77, 60` | `160°, 50%, 20%` | `66, 0, 22, 70` |
| Secondary (Logo Saffron) | `saffron-500` | `#D86F2B` | `216, 111, 43` | `24°, 69%, 51%` | `0, 49, 80, 15` |
| Secondary Fold Shade | `saffron-600` | `#CF6928` | `207, 105, 40` | `23°, 68%, 48%` | `0, 49, 81, 19` |
| Accent (Turmeric Brass) | `brass-500` | `#C69738` | `198, 151, 56` | `40°, 56%, 50%` | `0, 24, 72, 22` |
| Light Canvas | `neutral-50` | `#FCF8ED` | `252, 248, 237` | `44°, 71%, 96%` | `0, 2, 6, 1` |
| Dark Canvas | `night-950` | `#0E1A15` | `14, 26, 21` | `155°, 30%, 8%` | `46, 0, 19, 90` |
| Primary Light Ink | `neutral-900` | `#14261F` | `20, 38, 31` | `157°, 31%, 11%` | `47, 0, 18, 85` |
| Primary Dark Ink | `neutral-100` | `#F5EFE0` | `245, 239, 224` | `43°, 51%, 92%` | `0, 2, 9, 4` |

### Verified WCAG 2.1 Contrast Pairings
| Foreground | Background | Ratio | Compliance | Usage |
| :--- | :--- | :--- | :--- | :--- |
| `#1A4D3C` (Forest 700) | `#FCF8ED` (Parchment) | `9.12:1` | AAA | Primary headings, buttons, full-color logo |
| `#1A4D3C` (Forest 700) | `#FFFFFF` (White) | `9.67:1` | AAA | Cards, modals, forms |
| `#14261F` (Deep Ink) | `#FCF8ED` (Parchment) | `14.92:1` | AAA | Body copy, long-form reading |
| `#445850` (Secondary Ink) | `#FCF8ED` (Parchment) | `7.18:1` | AAA | Metadata, captions, secondary UI text |
| `#D86F2B` (Saffron 500) | `#FCF8ED` (Parchment) | `3.18:1` | AA Large / UI | Icons, dividers, graphic accents (`>= 18pt` bold only) |
| `#B55418` (Saffron 600) | `#FCF8ED` (Parchment) | `4.66:1` | AA | Light-mode inline links and text labels |
| `#14261F` (Deep Ink) | `#D86F2B` (Saffron 500) | `4.69:1` | AA | Text rendered inside Saffron buttons/badges |
| `#F5EFE0` (Parchment 100) | `#0E1A15` (Night 950) | `15.55:1` | AAA | Dark mode body text & inverted logo arches |
| `#E8823E` (Saffron 400) | `#0E1A15` (Night 950) | `6.54:1` | AA | Dark mode links, highlights & inverted logo ribbon |
| `#3B8C6E` (Dark Action) | `#0E1A15` (Night 950) | `4.39:1` | AA | Dark mode primary action fill / graphic accents |

### Usage Hierarchy (65 / 25 / 10 Rule)
- **65% Canvas & Surfaces:** `#FCF8ED` / `#FFFFFF` (Dark: `#0E1A15` / `#14241D`).
- **25% Primary Anchors & Ink:** `#14261F` text and `#1A4D3C` structural headers/buttons.
- **10% Focal Highlights:** `#D86F2B` Saffron and `#C69738` Turmeric Brass for key CTAs, active tabs, and focus rings.

---

## 4. Typography & UI Conventions

### Google Fonts Pairing
- **Display & Headings (`H1`–`H3`):** `Fraunces` (Weights 500, 600, 700; `"SOFT" 50, "opsz" 72` for hero display).
- **Body & UI (`H4`–`H6`, body, controls):** `Plus Jakarta Sans` (Weights 400, 500, 600, 700).
- **Monospace:** `JetBrains Mono` (Weights 400, 500) for SKUs, batch codes, measurements, and code.

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,SOFT,wght@9..144,50,500..700&family=JetBrains+Mono:wght@400;500&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
```

### UI Component Specs
- **Spatial Grid:** `4px` micro / `8px` macro scale (`--space-1` through `--space-24`).
- **Buttons:** Height `44px`, radius `--radius-md` (`10px`), padding `12px 20px`, font-weight `600`.
- **Cards:** `--color-bg-surface`, `1px solid var(--color-border-subtle)`, radius `--radius-lg` (`16px`), `--shadow-sm`.
- **Inputs:** Height `44px`, radius `--radius-sm` (`6px`), border `1px solid var(--color-border-strong)`, focus ring `0 0 0 3px var(--color-focus-ring)`.

---

## 5. Complete Asset Directory & Usage Index

Total packaged files: **104** (including this `DESIGN.md`).

```text
nuskha-brand-kit/
├── DESIGN.md
├── logos/
│   ├── svg/         (16 scalable vector files — web, UI, Figma, dev master)
│   ├── pdf/         (16 print-ready 100% vector PDFs — packaging, print, signage)
│   └── png/         (64 transparent RGBA PNGs — @1x, @2x, @3x, and 2048px master)
├── web/
│   ├── favicon.ico           (Multi-size 16×16, 32×32, 48×48 browser tab icon)
│   ├── favicon.svg           (Adaptive light/dark vector favicon)
│   ├── apple-touch-icon.png  (180×180 iOS home screen icon on #FCF8ED)
│   └── og-image.png          (1200×630 Open Graph social share banner)
└── tokens/
    ├── tokens.css            (CSS custom properties with Light & Dark themes)
    ├── tokens.json           (W3C design token JSON for Style Dictionary / Figma)
    └── tailwind.config.js    (Drop-in Tailwind CSS theme extension)
```

### Complete File Manifest
- `logos/pdf/nuskha-logomark-full-color.pdf`
- `logos/pdf/nuskha-logomark-inverted.pdf`
- `logos/pdf/nuskha-logomark-mono-black.pdf`
- `logos/pdf/nuskha-logomark-mono-white.pdf`
- `logos/pdf/nuskha-primary-full-color.pdf`
- `logos/pdf/nuskha-primary-inverted.pdf`
- `logos/pdf/nuskha-primary-mono-black.pdf`
- `logos/pdf/nuskha-primary-mono-white.pdf`
- `logos/pdf/nuskha-stacked-full-color.pdf`
- `logos/pdf/nuskha-stacked-inverted.pdf`
- `logos/pdf/nuskha-stacked-mono-black.pdf`
- `logos/pdf/nuskha-stacked-mono-white.pdf`
- `logos/pdf/nuskha-wordmark-full-color.pdf`
- `logos/pdf/nuskha-wordmark-inverted.pdf`
- `logos/pdf/nuskha-wordmark-mono-black.pdf`
- `logos/pdf/nuskha-wordmark-mono-white.pdf`
- `logos/png/nuskha-logomark-full-color-2048px.png`
- `logos/png/nuskha-logomark-full-color@1x.png`
- `logos/png/nuskha-logomark-full-color@2x.png`
- `logos/png/nuskha-logomark-full-color@3x.png`
- `logos/png/nuskha-logomark-inverted-2048px.png`
- `logos/png/nuskha-logomark-inverted@1x.png`
- `logos/png/nuskha-logomark-inverted@2x.png`
- `logos/png/nuskha-logomark-inverted@3x.png`
- `logos/png/nuskha-logomark-mono-black-2048px.png`
- `logos/png/nuskha-logomark-mono-black@1x.png`
- `logos/png/nuskha-logomark-mono-black@2x.png`
- `logos/png/nuskha-logomark-mono-black@3x.png`
- `logos/png/nuskha-logomark-mono-white-2048px.png`
- `logos/png/nuskha-logomark-mono-white@1x.png`
- `logos/png/nuskha-logomark-mono-white@2x.png`
- `logos/png/nuskha-logomark-mono-white@3x.png`
- `logos/png/nuskha-primary-full-color-2048px.png`
- `logos/png/nuskha-primary-full-color@1x.png`
- `logos/png/nuskha-primary-full-color@2x.png`
- `logos/png/nuskha-primary-full-color@3x.png`
- `logos/png/nuskha-primary-inverted-2048px.png`
- `logos/png/nuskha-primary-inverted@1x.png`
- `logos/png/nuskha-primary-inverted@2x.png`
- `logos/png/nuskha-primary-inverted@3x.png`
- `logos/png/nuskha-primary-mono-black-2048px.png`
- `logos/png/nuskha-primary-mono-black@1x.png`
- `logos/png/nuskha-primary-mono-black@2x.png`
- `logos/png/nuskha-primary-mono-black@3x.png`
- `logos/png/nuskha-primary-mono-white-2048px.png`
- `logos/png/nuskha-primary-mono-white@1x.png`
- `logos/png/nuskha-primary-mono-white@2x.png`
- `logos/png/nuskha-primary-mono-white@3x.png`
- `logos/png/nuskha-stacked-full-color-2048px.png`
- `logos/png/nuskha-stacked-full-color@1x.png`
- `logos/png/nuskha-stacked-full-color@2x.png`
- `logos/png/nuskha-stacked-full-color@3x.png`
- `logos/png/nuskha-stacked-inverted-2048px.png`
- `logos/png/nuskha-stacked-inverted@1x.png`
- `logos/png/nuskha-stacked-inverted@2x.png`
- `logos/png/nuskha-stacked-inverted@3x.png`
- `logos/png/nuskha-stacked-mono-black-2048px.png`
- `logos/png/nuskha-stacked-mono-black@1x.png`
- `logos/png/nuskha-stacked-mono-black@2x.png`
- `logos/png/nuskha-stacked-mono-black@3x.png`
- `logos/png/nuskha-stacked-mono-white-2048px.png`
- `logos/png/nuskha-stacked-mono-white@1x.png`
- `logos/png/nuskha-stacked-mono-white@2x.png`
- `logos/png/nuskha-stacked-mono-white@3x.png`
- `logos/png/nuskha-wordmark-full-color-2048px.png`
- `logos/png/nuskha-wordmark-full-color@1x.png`
- `logos/png/nuskha-wordmark-full-color@2x.png`
- `logos/png/nuskha-wordmark-full-color@3x.png`
- `logos/png/nuskha-wordmark-inverted-2048px.png`
- `logos/png/nuskha-wordmark-inverted@1x.png`
- `logos/png/nuskha-wordmark-inverted@2x.png`
- `logos/png/nuskha-wordmark-inverted@3x.png`
- `logos/png/nuskha-wordmark-mono-black-2048px.png`
- `logos/png/nuskha-wordmark-mono-black@1x.png`
- `logos/png/nuskha-wordmark-mono-black@2x.png`
- `logos/png/nuskha-wordmark-mono-black@3x.png`
- `logos/png/nuskha-wordmark-mono-white-2048px.png`
- `logos/png/nuskha-wordmark-mono-white@1x.png`
- `logos/png/nuskha-wordmark-mono-white@2x.png`
- `logos/png/nuskha-wordmark-mono-white@3x.png`
- `logos/svg/nuskha-logomark-full-color.svg`
- `logos/svg/nuskha-logomark-inverted.svg`
- `logos/svg/nuskha-logomark-mono-black.svg`
- `logos/svg/nuskha-logomark-mono-white.svg`
- `logos/svg/nuskha-primary-full-color.svg`
- `logos/svg/nuskha-primary-inverted.svg`
- `logos/svg/nuskha-primary-mono-black.svg`
- `logos/svg/nuskha-primary-mono-white.svg`
- `logos/svg/nuskha-stacked-full-color.svg`
- `logos/svg/nuskha-stacked-inverted.svg`
- `logos/svg/nuskha-stacked-mono-black.svg`
- `logos/svg/nuskha-stacked-mono-white.svg`
- `logos/svg/nuskha-wordmark-full-color.svg`
- `logos/svg/nuskha-wordmark-inverted.svg`
- `logos/svg/nuskha-wordmark-mono-black.svg`
- `logos/svg/nuskha-wordmark-mono-white.svg`
- `tokens/tailwind.config.js`
- `tokens/tokens.css`
- `tokens/tokens.json`
- `web/apple-touch-icon.png`
- `web/favicon.ico`
- `web/favicon.svg`
- `web/og-image.png`
