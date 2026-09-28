---
name: Corvo Web
description: Dark native-launcher site under a green lamp — one emerald accent on charcoal.
colors:
  accent: "#34d399"
  accent-ink: "#062319"
  selected: "#113c30"
  bg: "#0e0f10"
  surface: "#17181a"
  menu: "#1c1e20"
  divider: "#282a2d"
  pill: "#222426"
  keycap: "#2d3034"
  text: "#ffffff"
  text-dim: "#9a9aa5"
  text-icon: "#8e8e93"
  destructive: "#ef4444"
  violet: "#a78bfa"
typography:
  display:
    fontFamily: "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2.5rem, 4.6vw, 3.9rem)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.032em"
  headline:
    fontFamily: "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.9rem, 3.4vw, 2.7rem)"
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: "-0.03em"
  body:
    fontFamily: "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "ui-monospace, SF Mono, SFMono-Regular, Menlo, Consolas, monospace"
    fontSize: "0.78rem"
    fontWeight: 600
    letterSpacing: "0.04em"
rounded:
  sm: "6px"
  md: "10px"
  lg: "12px"
  frame: "14px"
  xl: "16px"
  window: "18px"
  bento: "20px"
  pill: "999px"
spacing:
  section: "clamp(88px, 11vw, 136px)"
  container: "1120px"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.accent-ink}"
    rounded: "{rounded.md}"
    padding: "0.85em 1.5em"
  button-primary-hover:
    backgroundColor: "#4be2ad"
    textColor: "{colors.accent-ink}"
    rounded: "{rounded.md}"
    padding: "0.85em 1.5em"
  button-ghost:
    backgroundColor: "{colors.pill}"
    textColor: "{colors.text}"
    rounded: "{rounded.md}"
    padding: "0.9em 1.6em"
  chip-query-active:
    backgroundColor: "{colors.selected}"
    textColor: "{colors.accent}"
    rounded: "{rounded.sm}"
    padding: "3px 8px"
---

# Design System: Corvo Web

## Overview

**Creative North Star: "The Green Lamp Desk"**

The site is a dark desk lit by a single green lamp. Near-black ground, charcoal surfaces, and one emerald accent that carries every signal: selection, glow, primary action, and keyboard truth. White system type speaks plainly with tight tracking. Nothing decorates; every visual is the product interface or a working replica of it.

The rhythm is product-story: promise, real proof, capability stories, platform truth, one download path. Density varies by section — airy hero, dense capability tiles, quiet closing band — inside one spacing scale. Motion is a single authored moment per surface: the workflow panel entrance and the launcher row highlight.

**Key Characteristics:**
- One emerald accent on a charcoal scale; rarity is the point.
- The launcher window is the hero object, repeated in one frame language.
- Tactile and confident controls: keycaps, pills, hairlines, instant response.

## Colors

A restrained scale: neutrals plus one emerald. Violet appears once as a clipboard dot; destructive red only for destructive rows.

### Primary
- **Launcher Emerald** (#34d399): Every signal — selected rows, glows, primary button, key hints, result values. Dark button text sits on it (#062319, ~8.5:1).

### Neutral
- **Desk Black** (#0e0f10): Page ground.
- **Charcoal Surface** (#17181a): Cards, sections, footer.
- **Raised Menu** (#1c1e20): Launcher chrome and menus.
- **Hairline Divider** (#282a2d): Borders and section rules.
- **Pill Fill** (#222426): Code blocks, chips, install pill.
- **Keycap Top** (#2d3034): Keyboard glyphs.
- **Selection Wash** (#113c30): Selected launcher rows and active chips.
- **Body Dim** (#9a9aa5): Secondary text on dark (~6.8:1).
- **Icon Gray** (#8e8e93): Tertiary text, placeholders, tags (~5.8:1).

### Named Rules
**The Single Accent Rule.** Emerald is the only saturated hue on a page. If a new color arrives, it must earn a product meaning (destructive, categorical) or leave.
**The Dark Scene Rule.** Dark is the use scene — a keyboard tool used at a desk — never a theme toggle. Light surfaces do not exist in this system.

## Typography

**Display Font:** System sans stack (-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial). Pinned by direction: the voice is the platform, not a foundry face.
**Body Font:** Same system stack.
**Label/Mono Font:** ui-monospace, SF Mono, Menlo, Consolas. Reserved for code, data, measurements, and keyboard truth: queries, install commands, tags, shortcuts, result values.

**Character:** Plain white words, tightly tracked, balanced lines. Mono appears only where the launcher itself would show it.

### Hierarchy
- **Display** (700, clamp(2.5rem, 4.6vw, 3.9rem), 1.05): Hero headline only. Tracking -0.032em.
- **Headline** (700, clamp(1.9rem, 3.4vw, 2.7rem), 1.08): Section titles. Tracking -0.03em.
- **Title** (600, 1.08–1.35rem, 1.12): Card and row titles.
- **Body** (400, 16px, 1.6): Paragraphs. Measure caps near 64ch via constrained columns.
- **Label** (600, 0.72–0.78rem mono, uppercase, +0.04–0.12em): Queries, tags, keycaps, eyebrows are banned — headings carry their own weight.

### Named Rules
**The No Gradient Text Rule.** Emphasis comes from weight or the solid accent color, never clipped gradients.
**The Mono Earns It Rule.** Mono sets code, data, and shortcuts. Prose in mono is a costume.

## Layout

Single centered container (1120px) with 24px gutters. Sections separate generously (clamp(88px, 11vw, 136px)); groups inside stay tight, with more space above a heading than below it. The hero is an asymmetric two-column grid (copy 0.92fr, capture 1.08fr) collapsing to one column under 960px. Capability tiles use a 12-column bento (7/5 splits) collapsing to one column. The workflow selector collapses from centered pills to query-only pills under 640px.

## Elevation & Depth

Depth is hybrid: hairline borders plus deep soft shadows with real offsets, never zero-offset halos. The signature is the floating app window: hairline edge, top highlight, 42px drop shadow, emerald under-glow (blurred radial, ~34px), and a faint reflection below.

### Shadow Vocabulary
- **Window float** (`0 42px 88px -22px rgba(0,0,0,0.82), 0 12px 34px -12px rgba(0,0,0,0.6)`): Launcher frames and captures.
- **Card lift** (`0 10px 30px rgba(0,0,0,0.3)`, hover `0 18px 45px rgba(0,0,0,0.45)`): Capability tiles.
- **Accent glow** (`radial-gradient emerald 0.13–0.22, blur 34–60px`): Lamp behind hero, frame under-glow, ambient behind replica.

### Named Rules
**The Border Plus Shadow Rule.** Resting windows carry both a 1px hairline and a deep shadow. One without the other is unfinished.

## Shapes

Corners step with size: small controls 6px, buttons and tiles 10–12px, cards 12–16px, bento tiles 20px, launcher windows 18px, pills fully round. Launcher captures sit inside their frame with a fixed 12px padding; frame and image share the same 14px radius so the band reads uniform. Keycaps are 5px rounded rectangles with a 2px bottom edge. Nothing is fully square except code blocks at small sizes.

## Components

### Buttons
Tactile and confident: 140ms eases, lift 1px on hover, press to 0.98 scale.
- **Shape:** Rounded rectangles (10px).
- **Primary:** Emerald fill, dark ink (#062319), inset top highlight plus emerald drop glow.
- **Hover / Focus:** Lighter emerald (#4be2ad) with a wider glow; 2px accent focus ring with offset.
- **Ghost:** Pill-fill gradient with hairline border and inset highlight.

### Chips
- **Style:** Translucent fill, hairline border, 6px radius, mono query text.
- **State:** Active chip uses the selection wash with an accent-tinted border and accent text.

### Cards / Containers
- **Corner Style:** 12–16px radius.
- **Background:** Charcoal with a faint top-light gradient.
- **Shadow Strategy:** Card lift; hover deepens shadow and lifts 2px.
- **Border:** 1px translucent white hairline, brightening on hover.
- **Internal Padding:** 24–34px fluid.

### Inputs / Fields
The launcher field is borderless large text (21px) with an emerald caret and themed selection. Placeholder sets icon gray. Focus stays inside the window; no outer ring competes with the frame glow.

### Keycaps
- **Style:** Two-stop dark gradient, 1px top-bright border, 2px bottom edge, 5px radius, mono glyphs.
- **Use:** Keyboard truth only — shortcuts, hints, action pills.

### Navigation
Sticky blurred charcoal bar (16px blur, saturate 180%) with hairline bottom border. Dim links brighten on hover; current page reads full white. Primary Download button persists. Mobile collapses to a menu button with a stacked panel.

### App Window Frame (signature)
Real captures mount in the frame: framed variant uses a 12px plate (hairline edge, black fill) with frame and image sharing a 14px radius; bare variant floats the capture with no plate — deep shadow and reflection live on the image itself, used in the hero and the workflow demos. Emerald under-glow sits behind both. All product proof on the site uses this frame and no other.

## Do's and Don'ts

### Do:
- **Do** show the real launcher for every product claim; the frame language repeats so the proof compounds.
- **Do** keep one accent; let rarity carry the signal.
- **Do** theme browser surfaces (selection, scrollbars, caret, focus) from the palette.
- **Do** collapse split layouts and selectors under 960px / 640px without losing the action.
- **Do** label the interactive replica honestly as a replica.

### Don't:
- **Don't** invent performance numbers, quotes, testimonials, pricing, or compatibility.
- **Don't** use gradient text, kickers, hero-metric cards, or section numbers.
- **Don't** set prose in mono or prose claims in accent color.
- **Don't** add a second saturated hue without a product meaning.
- **Don't** ship a raster without embedded provenance.
