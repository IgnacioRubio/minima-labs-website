---
name: web-design
description: Use when designing or reviewing any visual aspect of the Minima Labs website — layout, SCSS, components, typography, color, spacing, or responsive behavior. Apply the minimal interface philosophy: simple apps, minimal interfaces, user-first.
---

# Web Design — Minima Labs

## Philosophy

Minima Labs builds simple apps with minimal interfaces that do exactly what
users expect. Every design decision must serve this principle:

1. **Do exactly what's expected** — no surprises, no hidden gestures.
2. **User-first** — legibility and usability beat decoration.
3. **Less is more** — remove anything that does not earn its place.

## Design decisions checklist

Before writing/exiting a component or style, answer NO to every question:

- Does this element do its job without explanation?
- Is the visual weight of decoration (shadows, gradients, borders, animation)
  higher than the content it surrounds?
- Are there more than 2 accent colors, more than 3 font sizes, or spacing
  values taken from 4px numbers like 13px, 17px, 22px?
- Would a first-time user need a tooltip to understand it?

Any "yes" is a flag to simplify.

## Design tokens

Define tokens once as SCSS variables / CSS custom properties. Do NOT hardcode
raw values inside components.

- **Spacing scale** (multiples of 4): `4, 8, 12, 16, 24, 32, 48, 64`
- **Type scale**: small body, body, body-large banner titles. Cap at 3 sizes
  plus the brand heading.
- **Radii**: `0` (sharp by default, minimal), one soft radius for inputs/cards.
- **Colors**: 1 primary accent, neutral grays (they already carry most of the
  design), black/white for text on light/dark. No gradients unless a component
  specifically needs them.

## SCSS conventions

- Every component owns its styles: co-located partial (e.g.
  `SiteHeader.scss`) imported with `@use './SiteHeader.scss';` inside a
  `scoped` `<style lang="scss">` block.
- BEM-ish naming: block `site-header`, element `site-header__nav`,
  modifier `site-header--sticky`.
- `@use` (not `@import`) for shared tokens/partials.
- Mobile-first: base styles unconstrained, `min-width` breakpoints layered on.

## Layout

- One centered content container (content wrapper) used by every section so
  edges align.
- Vertical rhythm via the spacing scale, not margin hacks.
- Keep the header sticky behavior opt-in, height consistent, and content
  above the fold uncluttered.

## Components

- `SiteHeader`: brand link home-first, then a `<nav>` with the primary page
  links. Follow the semantic hierarchy: `<header>` → `<a>` (brand) + `<nav>` →
  `<ul>` → `<li>` → `<a>`. Never a nested `<header>` inside it.
- Buttons/links: one primary action per view. Secondary actions visually
  quieter than primary.
- Icons: stroke style, consistent weight, `currentColor` only.

## Accessibility & responsiveness

- `lang` attribute set on `<html>` at runtime (i18n), title and meta managed
  via head plugin per page.
- Target contrast ≥ 4.5:1 for body text.
- Focus states always visible (not `outline: none`).
- Test breakpoints: mobile < 480, tablet ~768, desktop ~1024+.

## Reviewing existing code

When reviewing: point at the specific `file:line`, name why it violates the
philosophy or a token/scale rule, and propose the smallest fix that keeps the
design minimal.