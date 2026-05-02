```markdown
# Design System Specification: The Guardian’s Pulse
 
## 1. Overview & Creative North Star
This design system is built upon the Creative North Star of **"Tactical Softness."** In an industry often defined by cold, utilitarian grids, this system seeks to establish high-trust through editorial grace and fluid reliability. We move beyond the "app template" look by utilizing intentional asymmetry, breathing room (whitespace as a functional element), and a sophisticated layering of surfaces.
 
The goal is to make the user feel curated for, not just managed. We achieve this by treating the mobile screen as a canvas of stacked, semi-transparent materials rather than a flat list of rows.
 
---
 
## 2. Colors & Surface Philosophy
The palette balances the authoritative weight of Teal with a warm, paper-like neutral base.
 
### Brand Palette (Functional Tokens)
- **Primary (Brand Teal):** `#1D9E75` (The core of our identity; used for primary actions and brand presence).
- **Primary Container:** `#008560` (Used for depth and tonal shifts in buttons).
- **Surface:** `#FCF9F5` (A warm, off-white base that feels more premium and less sterile than pure #FFFFFF).
- **Surface Container (Low to Highest):** `#F6F3EF` to `#E5E2DE` (Our primary tool for creating hierarchy).
 
### The "No-Line" Rule
To maintain a high-end editorial feel, **1px solid borders are strictly prohibited** for sectioning content. Boundaries must be defined through:
1.  **Background Color Shifts:** Placing a `surface-container-lowest` card on a `surface-container-low` background.
2.  **Tonal Transitions:** Using subtle shifts in hue to indicate where one functional area ends and another begins.
 
### Signature Textures & Glass
- **The Gradient Rule:** Primary CTAs should not be flat. Use a subtle linear gradient from `primary` (#1D9E75) to `primary_container` (#008560) at a 145-degree angle. This adds a "jewel-like" physical quality.
- **Glassmorphism:** For floating elements (Connectivity Badges, SOS overlays), use a background blur (20px–32px) combined with a semi-transparent `surface` color at 70% opacity.
 
---
 
## 3. Typography: Editorial Authority
We utilize **Inter** (or **SF Pro Display** on iOS) to bridge the gap between technical precision and readability.
 
| Role | Scale | Weight | Letter Spacing | Intent |
| :--- | :--- | :--- | :--- | :--- |
| **Display-LG** | 3.5rem | Bold | -0.02em | Hero editorial moments |
| **Headline-SM** | 1.5rem | SemiBold | -0.01em | Standard section headers |
| **Title-MD** | 1.125rem | SemiBold | 0 | Sub-headers and card titles |
| **Body-LG** | 1rem | Regular | 0 | Primary reading weight |
| **Label-MD** | 0.75rem | Medium | +0.02em | Functional metadata |
 
**Typography Note:** Use `title-md` for high-contrast headers against `body-lg` to create a clear, authoritative hierarchy. Large headers should often be left-aligned with generous top-padding to create an asymmetrical, "magazine" feel.
 
---
 
## 4. Elevation & Depth
Depth in this system is achieved through **Tonal Layering** rather than traditional drop shadows.
 
*   **The Layering Principle:** Stack `surface-container` tokens to create "natural lift." An inner card should be `surface_container_lowest` (#FFFFFF) sitting on a `surface_container_low` (#F6F3EF) page section.
*   **Ambient Shadows:** For floating elements (like the Bottom Nav), use an extra-diffused shadow: `Y: 8px, Blur: 24px, Color: On-Surface (8% Opacity)`. The shadow should feel like a soft glow of light, not a dark smudge.
*   **The Ghost Border Fallback:** If a border is required for accessibility, use the `outline_variant` token at **15% opacity**. Never use 100% opaque lines.
 
---
 
## 5. Components
 
### Buttons & Interaction
*   **Primary Button:** Pill-shaped (`rounding-full`). Uses the signature Teal gradient. High-contrast white text.
*   **Secondary Button:** Transparent background with a `ghost-border` (outline-variant at 20%).
*   **SOS Button:** Danger Red (`#E24B4A`). Instead of a static border, use a dual-ring pulsing animation. The outer ring should be a 10% opacity version of the red, expanding and fading to mimic a heartbeat.
 
### Cards & Surfaces
*   **Primary Cards:** 16px radius (`rounding-DEFAULT`). No borders. Use `surface_container_lowest` against a `surface_dim` background to define the edge.
*   **Spacing Rule:** Forbid divider lines within cards. Use 24px of vertical white space to separate content chunks.
 
### Connectivity Badge
*   **Structure:** A glass-morphic pill with a 4px "Live" dot.
*   **Online:** `Teal Light` background with 60% opacity blur.
*   **Offline:** `Amber/Warning` background with 60% opacity blur.
 
### Navigation & Inputs
*   **Bottom Navigation Bar:** 72px height. Designed as a floating island rather than a docked block. Use a `surface` background with 85% opacity and a `backdrop-blur` of 20px. 
*   **Input Fields:** 12px radius (`rounding-sm`). Use `surface_container` as the fill color. On focus, transition the background to `surface_container_lowest` and add a subtle `primary` ghost-border (20% opacity).
 
---
 
## 6. Do’s and Don’ts
 
### Do:
*   **Embrace Asymmetry:** Align headers to the left while allowing imagery or badges to float toward the right margin to create visual rhythm.
*   **Prioritize Tonal Depth:** Always ask if a section can be defined by a background color shift before reaching for a line or a shadow.
*   **Use Generous Padding:** High-end design requires "room to breathe." Ensure a minimum of 24px side-padding on all mobile screens.
 
### Don’t:
*   **Don't Use Pure Black:** Use `Text Primary` (#1A1A18) for all high-contrast text to keep the interface feeling soft and premium.
*   **Don't Use Standard Grids:** Avoid perfectly centered, boxy layouts. Break the grid occasionally with overlapping elements (e.g., a Connectivity Badge overlapping the edge of a header).
*   **Don't Use Heavy Borders:** If you see a solid 1px line, remove it. Use whitespace or color instead.
 
---
 
## 7. Dark Mode Strategy
In Dark Mode, the philosophy shifts from "Paper Layers" to "Luminous Obsidian."
*   **Background:** `#141412`
*   **Surface:** `#1E1E1C` (Higher elevation surfaces become progressively lighter, e.g., `#2A2A28`).
*   **Brand Teal:** Shifts to `#5DCAA5` to ensure AAA accessibility and a "neon" glow effect against dark surfaces.
*   **Glassmorphism:** Increase the backdrop-blur to 40px to compensate for the lower contrast of dark materials.```