# Vedic Astrology Premium

A beautiful, fully client-side Vedic Astrology web application that generates precise astrological birth charts (Kundli) and insights directly in your browser. 

Designed with a modern "glassmorphism" aesthetic, this application ensures 100% data privacy because **no user data is ever sent to a server**. All complex astronomical calculations are performed locally on your device.

## Features

- **Precise Planetary Calculations**: Uses the open-source Astronomy Engine to accurately calculate planetary positions and the Ascendant (Lagna) degree natively in the browser.
- **Visual Birth Charts**: Generates traditional North Indian style SVG birth charts (Rasi / D1) and Navamsa (D9) charts.
- **Detailed Panchang**: Calculates precise daily astrological elements including Tithi (Lunar Phase), Nakshatra (Birth Star), Yoga, and Vaar (Day).
- **Vimshottari Dasha Timeline**: Generates a complete 120-year timeline calculating your life periods based on planetary rulership.
- **Intelligent Insights**: Dynamic algorithm providing readings on career, relationships, health, and personalized custom questions based on planetary placements and the current Dasha period.
- **Privacy First**: All calculations are done locally. Saved profiles are stored entirely offline in your browser's local storage.
- **Export to PDF**: Generate clean, professional, and printable PDF reports of your astrological profile.
- **No Hosting Required**: Being 100% vanilla HTML, CSS, and JS, this app can be hosted for free on GitHub Pages without any backend infrastructure.

## Tech Stack

This project is built using pure, vanilla web technologies to ensure lightweight performance and zero backend dependencies:

- **HTML5**: Semantic structure.
- **CSS3**: Modern layouts using Flexbox/Grid and CSS variables. Features a custom dark-mode glassmorphism design system.
- **Vanilla JavaScript (ES6)**: Handles all DOM manipulation, LocalStorage management, and application logic (`app.js`).
- **Client-Side Math (`astrology.js`)**: A custom-built logical engine that translates astronomical coordinates into Vedic astrological concepts (Bhavas, Dashas, Panchang).
- **Astronomy Engine**: An open-source JavaScript library (`astronomy.browser.min.js`) used for highly accurate ephemeris calculations (planetary longitudes).

## How to Run

1. Clone or download this repository to your local machine:
   ```bash
   git clone https://github.com/yourusername/vedic-astrology.git
   ```
2. Open the folder and double-click the `index.html` file to launch the application directly in your web browser.
3. No build steps, `npm install`, or server setup is required.

## Usage Guide

1. **Enter Details**: Type in a name, date of birth, precise time of birth, and birth city.
2. **Auto-Geocoding**: Click the "Find" button next to the city input. The application will use a free API to instantly discover the precise latitude and longitude of the city.
3. **Select Focus**: Choose an area of life you want insights into (Career, Love, Wealth, etc.) and optionally specify a timeline (Start Date / End Date).
4. **Generate**: Click "Generate Chart".
5. **Save**: Click "Save to Profile" to keep this chart in your browser memory for future quick access from the sidebar.
6. **Download**: Click "View / Print Report" to export a clean, white-background version of your reading as a PDF.

## License

This project is open-source and available under the MIT License. See the [LICENSE](LICENSE) file for more information.
