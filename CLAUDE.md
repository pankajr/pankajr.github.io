# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

A single-page static "links/recommendations" site (curated product and referral links), served at https://pankajr.net/links via Cloudflare Pages (despite the `pankajr.github.io` repo name). No build step, no package manager, no tests, no framework — plain HTML/CSS/vanilla JS. Deployment happens by pushing to `main`.

To preview locally: `python3 -m http.server` and open http://localhost:8000.

## Structure

- `index.html` — all content lives here. Recommendations are numbered `<section class="category">` blocks (01 Coffee … 09 Retired), each with a `.category-head` (index number, `h2`, `.blurb`) and a `.links` list of ledger rows: a leading `.year` column, then `.row-main` (`.row-title` + `.row-desc`), then `.arrow`. Active entries are `<a>` rows; the Retired section (09) uses non-link `<div class="dead">` rows with a year *range* (e.g. `2021&ndash;26`) and no arrow. When a recommendation is replaced, move it to Retired with a one-line epitaph rather than deleting it. When adding/removing/reordering sections, keep three things in sync: the hero `.toc` nav, the `.index-no` spans, and the JSON-LD `ItemList` in `<head>`.
- `og-template.html` — standalone 1200×630 source for the social-preview card. Regenerate after design changes: serve the repo, screenshot it headless at exactly 1200×630, save as `img/og.png`.
- `styles.css` — design system: warm paper-and-ink palette via CSS variables, Fraunces (display) + Hanken Grotesk (body) + Spline Sans Mono (labels/tags) from Google Fonts. Theming via classes on `<html>`: no class = light, `dark-theme` = dark, `auto-theme` = follow system preference (an inline `<head>` script applies the saved theme before first paint).
- `theme.js` — light/auto/dark toggle (`#lightBtn`/`#autoBtn`/`#darkBtn`), persisted in `localStorage`.
- `easter.js` — Konami-code / hidden-sparkle easter egg (confetti + sound).
- `back-to-top.js` — scroll-to-top button (`#back-to-top`).

## Conventions

- Referral/affiliate links get a `<span class="tag">referral</span>` or `<span class="tag">affiliate</span>` inside `.row-title`; the footer discloses the arrangement. Tag any new link that pays a kickback.
- Many referral links route through vanity redirects like `https://www.pankajr.net/tesla`; Amazon affiliate links use `amzn.to` short links.
- All recommendation links open with `target="_blank" rel="noopener"`. Do not add `noreferrer` — referral programs may need the referrer.
- The "Last updated" date and © year in `.footer-meta` are hardcoded — bump them when changing content.
- Every link row carries a `<span class="since">YYYY</span>` noting when the item entered daily use (explained in the footer note). Ask the user for the year when adding an item.
- Page-load reveal animations use `.reveal` with `.d1`–`.d4` delay classes; `prefers-reduced-motion` disables all motion.
- Commit messages loosely follow conventional-commit style, e.g. `feat(coffee): add ...`.
