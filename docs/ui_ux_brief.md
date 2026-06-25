# UI/UX Design Brief: EduGuide.ai

## 1. Design Principles & Aesthetics
* **Theme:** Glassmorphism-inspired, clean, and highly modern. The interface should feel like a premium, state-of-the-art AI tool.
* **Vibe:** Academic yet futuristic. It should inspire trust, clarity, and ambition.
* **Modes:** Must seamlessly support both Light Mode (clean whites and soft grays) and Dark Mode (deep navy/blacks with glowing accents).

## 2. Color Palette
* **Primary Accents:** Vibrant Indigo/Purple gradients (`#4F46E5`, `#7C3AED`) fading into soft Blues (`#0EA5E9`). Used for primary buttons, active sidebar states, and key data points.
* **Backgrounds (Light):** Crisp white (`#FFFFFF`) to very light cool gray (`#F8FAFC`).
* **Backgrounds (Dark):** Deep blue-gray (`#0F172A`) with slightly lighter panels (`#1E293B`) to establish hierarchy.
* **Text Colors:** 
  - Headings: Dark Slate (`#0F172A`) or White (`#F8FAFC`) for Dark mode.
  - Body: Cool Gray (`#475569` or `#94A3B8`).
* **Status Colors:** Success/High Probability (Emerald Green), Warning/Medium (Amber), Danger/Low (Rose Red).

## 3. Typography
* **Primary Font:** `Inter` or `Outfit`. These fonts provide a highly legible, modern geometric look.
* **Hierarchy:**
  - `<h1>` (Page Titles): Bold, large, sometimes using gradient text clips.
  - `<h2>`, `<h3>` (Card Titles, Widget Headers): Semi-bold.
  - `<p>` (Body): Regular weight, generous line height for readability.

## 4. Component Guidelines
* **Cards & Panels:** Soft rounded corners (e.g., `rounded-2xl` in Tailwind). Use subtle drop shadows in light mode and faint borders (`border-white/10`) in dark mode.
* **Buttons:** 
  - Primary: Solid background with gradient or vibrant color, soft shadow, scale-up on hover.
  - Secondary/Tags: Pale background with colored text, distinct border on hover.
* **Sidebar:** Fixed left sidebar. Active states should have a soft gradient background with a glowing indicator.
* **Data Visualizations:** 
  - Charts should not just be functional; they should be beautiful. Use smooth curves for line charts, vibrant strokes for radar charts, and glowing tooltips on hover.

## 5. Micro-Animations (Framer Motion)
* **Page Transitions:** Soft fade and slide-up when navigating between dashboard tabs.
* **Hover States:** Slight upward translation (`-translate-y-1`) on cards, glowing drop shadows on interactive elements.
* **Loading States:** Skeleton loaders matching the final component shapes, or a smooth pulsing logo animation.
* **Progress Bars:** Smooth width transitions when answering quiz questions or filling up the probability gauge.

## 6. Layout Structure
* **App Shell:** 250px fixed sidebar on the left. The remaining width is the main content area with a max-width container to prevent excessive stretching on ultrawide monitors.
* **Grids:** Heavy use of CSS Grids (e.g., `grid-cols-12` or `grid-cols-3`) to create complex, masonry-like dashboard layouts with spanning columns.
