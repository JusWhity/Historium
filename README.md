# Historium

An interactive bilingual historical encyclopedia cataloging the world's 195 sovereign nations, their founding eras, and 150 influential figures throughout human history.

Designed with an old-world parchment and ink aesthetic, Historium features full bidirectional support (Persian RTL and English LTR), historical timelines, vector flags, and real-time calendar calculations.

---

## Features

- **All 195 Sovereign Nations**: Detailed multi-paragraph overviews, modular historical sections (Origins, Golden Ages, Modern Identity), interactive chronologies, and verified founding notes.
- **Accurate Vector Flags**: High-fidelity vector SVGs with authentic emblems, crosses, stars, cantons, and national palettes rendered crisply on all screen densities.
- **Dynamic Age Calculations**: Country ages are computed in real time based on calendar year (`currentYear - foundedYear`, accounting for BCE/CE transitions). Ages advance automatically every new year without static data edits.
- **150 Important Historical Figures**: In-depth biographies, documented quotes, and milestone achievements spanning antiquity, the middle ages, the renaissance, the enlightenment, the modern era, and the 20th century.
- **This Day in History**: Calendar-aware historical event lookup for any day of the year.
- **Bilingual & Bidirectional (RTL / LTR)**: Built from the ground up to render seamlessly in Persian (Farsi) with Noto Naskh / Amiri typography and English with EB Garamond / IM Fell English.
- **Client-Side Routing & SEO**: Schema.org JSON-LD structured data, dynamic OpenGraph / Twitter meta tags, browser tab favicons, and hash-based routing with fallback redirection for static hosts.

---

## Tech Stack

- **Runtime / Framework**: React 19, TypeScript
- **Bundler & Tooling**: Vite 8
- **Styling**: Tailwind CSS with custom CSS parchment textures, logical properties, and vintage styling
- **Hosting**: GitHub Pages via automated GitHub Actions workflow

---

## Getting Started

### Prerequisites

- Node.js 20 or higher
- npm

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/JusWhity/Historium.git
cd Historium
npm install --legacy-peer-deps
```

### Development

Start the local development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

Compile TypeScript and build the static assets into the `dist/` folder:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

---

## Deployment to GitHub Pages

The repository includes a ready-to-use GitHub Actions workflow in `.github/workflows/deploy.yml`.

1. Go to your repository settings on GitHub (**Settings > Pages**).
2. Under **Build and deployment > Source**, select **GitHub Actions**.
3. Pushes to `main` (or manual triggers from the **Actions** tab) automatically build and publish the site.

---

## Project Structure

```text
├── index.html                 # Entry HTML with typography & SEO meta
├── public/
│   └── 404.html               # SPA redirection script for static hosting
├── src/
│   ├── app.ts                 # Application router, views, and chronological engine
│   ├── seo.ts                 # Dynamic SEO & Schema.org JSON-LD manager
│   ├── types.ts               # Core TypeScript data contracts
│   ├── data/
│   │   ├── countries/         # 195 nations grouped by geographic region
│   │   ├── figures/           # Historical figures catalog
│   │   ├── erasAndFields.ts   # Historical eras and domain classifications
│   │   ├── onThisDay.ts       # Daily historical event records
│   │   └── strings.ts         # Persian and English interface dictionaries
│   ├── index.css              # Parchment theme, seal badges, logical properties
│   └── main.tsx               # Application mounting point
└── vite.config.ts             # Vite build configuration with relative asset paths
```

---

## Author

Created by **Mobin Gholipour** ([@JusWhity](https://github.com/JusWhity))
