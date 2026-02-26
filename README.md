# Astro Cosmic Suite

A beautiful, fully client-side esoteric web application that provides precise astrological calculations, traditional Bazi (Four Pillars), personalized Tarot readings, and Western Zodiac insights directly in your browser.

Designed with a modern aesthetic, this application ensures 100% data privacy because **no user data is ever sent to a server**. All complex astronomical and esoteric calculations are performed locally on your device.

## Core Features

### 1. Vedic Astrology (Kundli)
- **Precise Planetary Calculations**: Uses the open-source Astronomy Engine to accurately calculate planetary positions and the Ascendant (Lagna) degree natively in the browser.
- **Visual Birth Charts**: Generates traditional North Indian style SVG birth charts (Rasi / D1) and Navamsa (D9) charts.
- **Detailed Panchang**: Calculates precise daily astrological elements including Tithi (Lunar Phase), Nakshatra (Birth Star), Yoga, and Vaar (Day).
- **Vimshottari Dasha Timeline**: Generates a complete 120-year timeline calculating your life periods based on planetary rulership.

### 2. Bazi (Four Pillars of Destiny)
- **Accurate Solar Calendar**: Calculates the exact Year, Month, Day, and Hour heavenly stems and earthly branches based on precise astronomical solar terms.
- **Dynamic Bazi Chart**: Visualizes the Four Pillars with their elemental attributes and core characteristics.

### 3. Tarot Readings
- **Diverse Spreads**: Perform 1-Card (Yes/No), 3-Card (Past, Present, Future), and 6-Card (Cross) readings.
- **Major Arcana Interpretations**: Detailed upright and reversed meanings of the 22 Major Arcana archetypes.
- **Interactive Deck**: Beautiful glassmorphism 3D flip card animations using CSS transforms.

### 4. Zodiac Insights
- **Western Astrology**: Provides detailed overviews of the 12 Western Zodiac sun signs.
- **Elements & Modalities**: Breaks down Fire, Earth, Air, and Water elements, and Cardinal, Fixed, and Mutable modalities.

## Tech Stack

This project is built using pure, vanilla web technologies to ensure lightweight performance and zero backend dependencies:

- **HTML5**: Semantic structure across multiple specialized pages (`index.html`, `bazi.html`, `tarot.html`, `zodiac.html`).
- **CSS3**: Modern layouts using Flexbox/Grid and CSS variables. Features a custom dark-mode glassmorphism design system (`style.css`).
- **Vanilla JavaScript (ES6)**: Handles all DOM manipulation, LocalStorage management, animations, and application logic.
- **Client-Side Math**: Custom-built logical engines that translate astronomical coordinates into Vedic (`astrology.js`) and Bazi (`bazi.js`) concepts.
- **Astronomy Engine**: An open-source JavaScript library (`astronomy.browser.min.js`) used for highly accurate ephemeris calculations.

## How to Run

1. Clone or download this repository to your local machine:
   ```bash
   git clone https://github.com/yourusername/astro-cosmic-suite.git
   ```
2. Open the folder and double-click `index.html` to launch the Vedic Astrology dashboard, or navigate to the other `.html` files for their respective tools.
3. No build steps, `npm install`, or server setup is required.

## Privacy & Security

- **Privacy First**: All calculations are done locally. Saved profiles are stored entirely offline in your browser's local storage.
- **No Hosting Required**: Being 100% vanilla HTML, CSS, and JS, this app can be hosted for free on GitHub Pages without any backend infrastructure.

## License

This project is open-source and available under the MIT License. See the [LICENSE](LICENSE) file for more information.
