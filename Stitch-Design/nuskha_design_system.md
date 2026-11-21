---
name: "Nuskha Clinical"
description: "High-contrast, zero-latency clinical design system for high-throughput homoeopathic practice, pairing botanical apothecary jade with calm alabaster surfaces and crisp grotesque-humanist typography."
---

## Overview

Nuskha Clinical is built for senior physicians and clinic assistants working at high speed—100+ consultations per day in bright, busy community clinics. Every surface, type scale, and interaction is calibrated for instant visual scanning, keyboard-first navigation, and zero cognitive fatigue over 8-hour outpatient shifts.

The visual language combines **Corporate / Modern** precision with **Minimalism**: calm, glare-free alabaster surfaces (`#F7FAF8`) prevent eye strain, crisp white elevated work panes (`#FFFFFF`) separate active consultation entry from historical patient records, and deep botanical apothecary jade (`#004941`) anchors primary actions and active clinical states.

## Colors

The palette derives from an apothecary jade seed (`#0F6258`), pairing deep botanical greens with neutral mineral slates and warm terracotta accents for clinical alerts and remedy reactions.

- **Primary (`#004941`):** Anchors primary clinical actions ("Complete & Next Patient", active patient selection, and primary navigation).
- **Secondary (`#49635E`):** Supports secondary clinical controls ("Repeat Last Prescription", filter chips, and metadata badges).
- **Tertiary (`#67311F`):** Highlights homoeopathic aggravation warnings or urgent clinical flags without competing with error states.
- **Status Tokens:** Dedicated semantic tokens (`success`, `warning`, `info`) communicate homoeopathic reaction evaluations (*Improved*, *No Change*, *Aggravated*, *New Symptoms*) at a single glance, always paired with a text label or icon.

```yaml
colors:
  success: "#146C43"
  on-success: "#FFFFFF"
  success-container: "#D1F2E1"
  on-success-container: "#0A3622"
  warning: "#8F4F00"
  on-warning: "#FFFFFF"
  warning-container: "#FFE5C2"
  on-warning-container: "#4A2700"
  info: "#0C5A7A"
  on-info: "#FFFFFF"
  info-container: "#D2EEFA"
  on-info-container: "#063245"
  light:
    primary: "#085E52"
    on-primary: "#FFFFFF"
    primary-container: "#0E7668"
    on-primary-container: "#FFFFFF"
    secondary: "#3D665E"
    on-secondary: "#FFFFFF"
    secondary-container: "#D8F0E9"
    on-secondary-container: "#0E3B33"
    tertiary: "#7A402A"
    on-tertiary: "#FFFFFF"
    tertiary-container: "#FFE8DF"
    on-tertiary-container: "#4D2010"
    error: "#BA1A1A"
    on-error: "#FFFFFF"
    error-container: "#FFDAD6"
    on-error-container: "#93000A"
    background: "#F1F5F4"
    on-background: "#131C1A"
    surface: "#F1F5F4"
    surface-dim: "#DCE5E2"
    surface-bright: "#FFFFFF"
    surface-container-lowest: "#FFFFFF"
    surface-container-low: "#E9F0EE"
    surface-container: "#E1EBE8"
    surface-container-high: "#D7E4E0"
    surface-container-highest: "#CDDDD8"
    on-surface: "#131C1A"
    surface-variant: "#D5E6E1"
    on-surface-variant: "#3A4B47"
    outline: "#5E706B"
    outline-variant: "#C9D8D3"
    inverse-surface: "#122B27"
    inverse-on-surface: "#F4FAF8"
    inverse-primary: "#8FE0D1"
  dark:
    primary: "#8CD4C7"
    on-primary: "#003731"
    primary-container: "#0F6258"
    on-primary-container: "#FFFFFF"
    secondary: "#B0CCC6"
    on-secondary: "#1B3531"
    secondary-container: "#324C47"
    on-secondary-container: "#CCE9E2"
    tertiary: "#FFB59E"
    on-tertiary: "#532111"
    tertiary-container: "#834734"
    on-tertiary-container: "#FFFFFF"
    error: "#FFB4AB"
    on-error: "#690005"
    error-container: "#93000A"
    on-error-container: "#FFDAD6"
    background: "#101413"
    on-background: "#E0E3E1"
    surface: "#101413"
    surface-dim: "#101413"
    surface-bright: "#363A39"
    surface-container-lowest: "#0B0F0E"
    surface-container-low: "#191C1B"
    surface-container: "#1D201F"
    surface-container-high: "#272B2A"
    surface-container-highest: "#323634"
    on-surface: "#E0E3E1"
    surface-variant: "#3F4946"
    on-surface-variant: "#BEC9C5"
    outline: "#899390"
    outline-variant: "#3F4946"
    inverse-surface: "#E0E3E1"
    inverse-on-surface: "#2D3130"
    inverse-primary: "#1B695F"
```

## Typography

A three-role typographic hierarchy maximizes clinical scan speed:
- **Headline (`Schibsted Grotesk`):** Crisp grotesque headings for patient names, section headers, and daily KPI figures.
- **Body (`Commissioner`):** High-legibility humanist sans-serif with open counters for chief complaints, remedy instructions, and disambiguation subtext.
- **Mono (`Spline Sans Mono`):** Fixed-width numerals and codes for Token IDs, potencies (`200C`, `1M`, `Q`), timestamps, and fee totals.

```yaml
typography:
  display-lg:
    fontFamily: "Schibsted Grotesk"
    fontSize: 36px
    fontWeight: 700
    lineHeight: 42px
    letterSpacing: -0.5px
  display-lg-mobile:
    fontFamily: "Schibsted Grotesk"
    fontSize: 28px
    fontWeight: 700
    lineHeight: 34px
    letterSpacing: -0.25px
  headline-lg:
    fontFamily: "Schibsted Grotesk"
    fontSize: 24px
    fontWeight: 700
    lineHeight: 30px
    letterSpacing: -0.25px
  headline-md:
    fontFamily: "Schibsted Grotesk"
    fontSize: 18px
    fontWeight: 600
    lineHeight: 24px
    letterSpacing: -0.15px
  headline-sm:
    fontFamily: "Schibsted Grotesk"
    fontSize: 15px
    fontWeight: 600
    lineHeight: 20px
    letterSpacing: 0px
  body-lg:
    fontFamily: "Commissioner"
    fontSize: 15px
    fontWeight: 400
    lineHeight: 22px
    letterSpacing: 0px
  body-md:
    fontFamily: "Commissioner"
    fontSize: 13px
    fontWeight: 400
    lineHeight: 19px
    letterSpacing: 0px
  body-sm:
    fontFamily: "Commissioner"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 16px
    letterSpacing: 0.1px
  label-lg:
    fontFamily: "Commissioner"
    fontSize: 13px
    fontWeight: 600
    lineHeight: 18px
    letterSpacing: 0.1px
  label-md:
    fontFamily: "Commissioner"
    fontSize: 12px
    fontWeight: 600
    lineHeight: 16px
    letterSpacing: 0.2px
  label-sm:
    fontFamily: "Commissioner"
    fontSize: 11px
    fontWeight: 600
    lineHeight: 14px
    letterSpacing: 0.3px
  mono-md:
    fontFamily: "Spline Sans Mono"
    fontSize: 13px
    fontWeight: 500
    lineHeight: 18px
    letterSpacing: 0px
  mono-sm:
    fontFamily: "Spline Sans Mono"
    fontSize: 11px
    fontWeight: 500
    lineHeight: 15px
    letterSpacing: 0.2px
```

## Layout & Spacing

Nuskha uses a **Fluid Full-Bleed Desktop Grid** (`1280px+`) designed for zero horizontal scrolling and maximum above-the-fold clinical density.
- **OPD Consultation Workspace:** A 3-pane split layout: compact left queue/search rail (`300px`), center historical visit timeline (`minmax(360px, 1fr)`), and right active consultation & prescription composer (`minmax(440px, 1.15fr)`).
- **Daily Register & Analytics:** A 12-column fluid grid inside the shared app shell, with 4-column KPI summary strip, 8-column chronological register table, and 4-column clinical remedy & complaint insights.
- **Spacing Scale:** Built on a strict `4px` base step so dense clinical rows (`8px`–`12px` internal padding) stay visually aligned with `16px`–`24px` pane gutters.

```yaml
spacing:
  gutter-xs: 4px
  gutter-sm: 8px
  gutter-md: 12px
  gutter-lg: 16px
  gutter-xl: 24px
  section: 32px
  page-margin: 20px
```

## Elevation & Depth

Hierarchy relies on **soft spatial separation**, **generous rounded surfaces**, and **luminous tonal contrast**:
- The base canvas (`surface`: `#F1F5F4`) acts as an airy spatial backdrop where floating `rounded-xl` (`16px`) panes sit with `16px`–`20px` breathing room between them.
- Primary work panes elevate to `surface-container-lowest` (`#FFFFFF`) with soft ambient shadows (`shadow-sm`), while secondary rails sit on soft `surface-container-low` (`#E9F0EE`).
- Active patient anchors and primary actions use vibrant deep emerald (`primary`: `#085E52`) and deep botanical teal (`inverse-surface`: `#122B27`) for effortless contrast without harshness.

## Shapes

Generous, modern corner radii (`12px`–`20px`) soften every container, card, and input so the workspace feels calm, fluid, and approachable.

```yaml
rounded:
  sm: 6px
  DEFAULT: 10px
  md: 12px
  lg: 16px
  xl: 20px
  full: 9999px
```

## Motion & Micro-interaction

Motion is near-instantaneous so the interface never slows down a 15-second consultation loop. Focus rings, keyboard selection highlights, and reaction pill toggles snap in `80ms`; overlays and patient drawer transitions decelerate cleanly in `180ms`. Nothing loops or bounces.

```yaml
motion:
  state-change:
    duration: 80ms
    delay: 0ms
    timingFunction: ease-out
  surface-enter:
    duration: 180ms
    delay: 0ms
    timingFunction: cubic-bezier(0.2, 0, 0, 1)
  surface-exit:
    duration: 120ms
    delay: 0ms
    timingFunction: cubic-bezier(0.3, 0, 1, 1)
```

## Voice & Content Strategy

- **Tone of voice:** Clinical, direct, and unhurried—written for a senior physician mid-consultation. No marketing fluff, no playful exclamation marks.
- **Capitalisation:** Sentence case for clinical labels, notes, and prompts; Title Case for homoeopathic Latin remedy names (*Arnica Montana*, *Nux Vomica*, *Bryonia Alba*, *Pulsatilla Nigricans*).
- **Terminology:** Always use *Consultation* (not "appointment"), *Remedy* (not "drug" or "medication"), *Potency* (not "strength"), and *Reaction* (for response to prior remedy). Guardian prefixes follow local clinical convention (`s/o`, `w/o`, `d/o`).
- **Button and action labels:** Verb-first, outcome-specific (`Save & Next Patient`, `Repeat Last Prescription`, `Register Walk-in Patient`). Keyboard shortcut hints (`F2`, `⌘K`, `Ctrl+Enter`) appear beside primary actions in muted monospace badges.
- **Numbers, dates, and units:** Tabular numerals everywhere. Currency in `PKR` / `Rs. 500`, dates in `21 Nov 2026`, times in `10:42 AM`.

## Components

Component implementations live as individual HTML sticker sheet files in
`components/`. Each file contains the canonical, styled HTML components with
`<!-- COMPONENT: name -->` comment markers. Read each file before use.

- **Button** → `@components/button.html`: `button-primary`, `button-icon`, `button-with-icon`
- **Card** → `@components/card.html`: `card-elevated`, `card-action`, `card-interactive`, `card-interactive-2`
- **Chip** → `@components/chip.html`: `chip-action`, `chip-input`, `chip-with-icon`
- **Input Field** → `@components/input-field.html`: `input-field-text`, `input-field-icon`
- **Table** → `@components/table.html`: `table-standard`, `table-interactive`, `table-selectable`
