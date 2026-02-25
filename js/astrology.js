/**
 * Vedic Astrology Calculation Engine
 * Uses the Astronomy Engine library (astronomy.browser.min.js) to compute exact
 * planetary longitudes and Ascendant (Lagna) degrees natively in the browser.
 */

window.AstrologyEngine = {

    /**
     * Calculate Lahiri Ayanamsa (rough approximation for client-side)
     * Real Lahiri is precisely 24°15' in year 2000, increasing by ~50.29 seconds per year.
     */
    getAyanamsa: function (dateInput) {
        const date = new Date(dateInput); // Ensure it's a date object
        const year = date.getUTCFullYear();
        const daysSince2000 = (date.getTime() - Date.UTC(2000, 0, 1)) / (1000 * 60 * 60 * 24);
        const ayanamsa = 24.25 + (daysSince2000 / 365.25) * (50.29 / 3600);
        return ayanamsa;
    },

    /**
     * Calculate the astrological chart data
     */
    calculateChart: function (dateStr, timeStr, lat, lng, name) {
        console.log(`Calculating precise chart for ${name}`);

        try {
            // Parse date
            const date = new Date(`${dateStr}T${timeStr}`);
            const astroTime = Astronomy.MakeTime(date);
            const ayanamsa = this.getAyanamsa(date);

            // Define observer location
            const observer = new Astronomy.Observer(lat, lng, 0);

            // Core Planets mapping from Astronomy Engine
            const bodies = ['Sun', 'Moon', 'Mars', 'Mercury', 'Jupiter', 'Venus', 'Saturn'];

            const planets = {};

            bodies.forEach(body => {
                const equ_2000 = Astronomy.Equator(body, astroTime, observer, true, true);
                const ecl = Astronomy.Ecliptic(equ_2000.vec);
                let siderealLon = (ecl.elon - ayanamsa + 360) % 360;
                planets[body.toLowerCase()] = siderealLon;
            });

            // Approximate Rahu/Ketu (Nodes of the Moon)
            const daysSince2000Rahu = (date.getTime() - Date.UTC(2000, 0, 1.5)) / (1000 * 60 * 60 * 24);
            let rahu = (125.04452 - 0.0529537648 * daysSince2000Rahu - ayanamsa + 360) % 360;
            let ketu = (rahu + 180) % 360;

            planets.rahu = rahu;
            planets.ketu = ketu;

            // Panchang Calculations
            // 1. Tithi (Lunar Day) - 12 degree difference between Moon and Sun
            const moonLon = planets.moon;
            const sunLon = planets.sun;
            let diff = moonLon - sunLon;
            if (diff < 0) diff += 360;
            const tithiIndex = Math.floor(diff / 12) + 1;

            let paksha = tithiIndex <= 15 ? "Shukla (Waxing)" : "Krishna (Waning)";
            let tithiNum = tithiIndex <= 15 ? tithiIndex : tithiIndex - 15;
            const tithiNames = ["Pratipada", "Dwitiya", "Tritiya", "Chaturthi", "Panchami", "Shashthi", "Saptami", "Ashtami", "Navami", "Dashami", "Ekadashi", "Dwadashi", "Trayodashi", "Chaturdashi", tithiIndex === 15 ? "Purnima (Full Moon)" : "Amavasya (New Moon)"];
            const tithiName = tithiIndex === 15 || tithiIndex === 30 ? tithiNames[14] : tithiNames[tithiNum - 1];

            // 2. Nakshatra (Lunar Mansion) - 13 degrees 20 minutes (13.333 deg) per Nakshatra
            const nakshatraIndex = Math.floor(moonLon / (360 / 27));
            const nakshatraNames = ["Ashwini", "Bharani", "Krittika", "Rohini", "Mrigashira", "Ardra", "Punarvasu", "Pushya", "Ashlesha", "Magha", "Purva Phalguni", "Uttara Phalguni", "Hasta", "Chitra", "Swati", "Vishakha", "Anuradha", "Jyeshtha", "Mula", "Purva Ashadha", "Uttara Ashadha", "Shravana", "Dhanishta", "Shatabhisha", "Purva Bhadrapada", "Uttara Bhadrapada", "Revati"];
            const nakshatraName = nakshatraNames[nakshatraIndex];

            // 3. Yoga - Sum of Sun and Moon longitudes divided by 13.333
            const sumLon = (sunLon + moonLon) % 360;
            const yogaIndex = Math.floor(sumLon / (360 / 27));
            const yogaNames = ["Vishkambha", "Priti", "Ayushman", "Saubhagya", "Shobhana", "Atiganda", "Sukarma", "Dhriti", "Shula", "Ganda", "Vriddhi", "Dhruva", "Vyaghata", "Harshana", "Vajra", "Siddhi", "Vyatipata", "Variyana", "Parigha", "Shiva", "Siddha", "Sadhya", "Shubha", "Shukla", "Brahma", "Indra", "Vaidhriti"];
            const yogaName = yogaNames[yogaIndex];

            // 4. Vaar (Day of the week)
            const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            const vaarName = daysOfWeek[date.getDay()];

            const panchang = {
                tithi: `${tithiName} - ${paksha} Paksha`,
                nakshatra: nakshatraName,
                yoga: yogaName,
                vaar: vaarName
            };

            const lst = Astronomy.SiderealTime(astroTime) + (lng / 15.0);
            const eps = 23.4392911;
            const rad = Math.PI / 180;
            const lstRad = (lst * 15) * rad;
            const latRad = lat * rad;
            const epsRad = eps * rad;

            const ascRad = Math.atan2(Math.cos(lstRad), -(Math.sin(lstRad) * Math.cos(epsRad) + Math.tan(latRad) * Math.sin(epsRad)));
            let ascendantDeg = (ascRad / rad + 360) % 360;
            let lagna = (ascendantDeg - ayanamsa + 360) % 360;

            // Group planets into 12 Houses (Bhavas)
            const lagnaSign = Math.floor(lagna / 30) + 1;

            let houses = Array.from({ length: 12 }, () => []);

            for (const [planet, deg] of Object.entries(planets)) {
                const sign = Math.floor(deg / 30) + 1;
                let houseIndex = (sign - lagnaSign + 12) % 12;
                houses[houseIndex].push({
                    name: planet.charAt(0).toUpperCase() + planet.slice(1).substring(0, 1),
                    deg: deg
                });

                if (planet === 'rahu') houses[houseIndex][houses[houseIndex].length - 1].name = 'Ra';
                if (planet === 'ketu') houses[houseIndex][houses[houseIndex].length - 1].name = 'Ke';
            }

            return {
                id: `profile_${Date.now()}`,
                name: name,
                date: dateStr,
                time: timeStr,
                lat: lat,
                lng: lng,
                timestamp: date.getTime(),
                lagna: lagna,
                lagnaSign: lagnaSign,
                planets: planets,
                houses: houses,
                panchang: panchang
            };
        } catch (error) {
            console.error('Chart calculation error:', error);
            console.error('Error stack:', error.stack);
            alert('Error calculating chart: ' + error.message + '\nCheck console for details');
            throw error;
        }
    },

    calculateNavamsa: function (planets, lagna) {
        let navamsaHouses = Array.from({ length: 12 }, () => []);
        const lagnaNavamsa = Math.floor((lagna * 9) / 30) % 12 + 1;

        for (const [planet, deg] of Object.entries(planets)) {
            const navamsaDeg = (deg * 9) % 360;
            const sign = Math.floor(navamsaDeg / 30) + 1;
            let houseIndex = (sign - lagnaNavamsa + 12) % 12;

            navamsaHouses[houseIndex].push({
                name: planet.charAt(0).toUpperCase() + planet.slice(1).substring(0, 1),
                deg: navamsaDeg
            });

            if (planet === 'rahu') navamsaHouses[houseIndex][navamsaHouses[houseIndex].length - 1].name = 'Ra';
            if (planet === 'ketu') navamsaHouses[houseIndex][navamsaHouses[houseIndex].length - 1].name = 'Ke';
        }

        return navamsaHouses;
    },

    /**
     * Calculate Vimshottari Dasha Timeline
     */
    calculateDashaTimeline: function (moonLon, birthYear) {
        const dashaLords = ['Ketu', 'Venus', 'Sun', 'Moon', 'Mars', 'Rahu', 'Jupiter', 'Saturn', 'Mercury'];
        const dashaYears = [7, 20, 6, 10, 7, 18, 16, 19, 17];

        // Nakshatra determines starting dasha
        const totalNumNakshatras = 27;
        const degPerNakshatra = 360 / totalNumNakshatras;
        const nakshatraExact = moonLon / degPerNakshatra;

        // Which of the 9 lords rules this nakshatra?
        const lordIndex = Math.floor(nakshatraExact) % 9;

        // What fraction of the nakshatra has already passed?
        const fractionPassed = nakshatraExact - Math.floor(nakshatraExact);
        const fractionRemaining = 1 - fractionPassed;

        // Calculate the balance of the first dasha in years
        const firstDashaTotalYears = dashaYears[lordIndex];
        const balanceYears = firstDashaTotalYears * fractionRemaining;

        let timeline = [];
        let currentYear = birthYear;

        // 1. Add the first (partial) dasha
        timeline.push({
            lord: dashaLords[lordIndex],
            start: currentYear,
            end: currentYear + balanceYears,
            isBalance: true
        });
        currentYear += balanceYears;

        // 2. Add the subsequent dashas (typically mapped up to 120 years of life)
        let currentIndex = (lordIndex + 1) % 9;

        for (let i = 0; i < 8; i++) { // Add the next 8 periods
            const duration = dashaYears[currentIndex];
            timeline.push({
                lord: dashaLords[currentIndex],
                start: currentYear,
                end: currentYear + duration,
                isBalance: false
            });
            currentYear += duration;
            currentIndex = (currentIndex + 1) % 9;
        }

        return timeline;
    }
};
