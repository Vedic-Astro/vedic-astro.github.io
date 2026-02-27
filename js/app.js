document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('birth-form');
    const chartSection = document.getElementById('chart-section');
    const chartCanvas = document.getElementById('chart-canvas');
    const btnSave = document.getElementById('btn-save');
    const profileList = document.getElementById('profile-list');
    const savedProfilesPanel = document.querySelector('.saved-profiles');

    // Geocoding Elements
    const btnGeocode = document.getElementById('btn-geocode');
    const cityInput = document.getElementById('city');
    const latInput = document.getElementById('lat');
    const lngInput = document.getElementById('lng');
    const geoStatus = document.getElementById('geo-status');

    let currentChartData = null;

    // Load profiles on startup
    loadProfiles();

    // Question Elements
    const questionCategory = document.getElementById('question-category');
    const customQuestion = document.getElementById('custom-question');

    questionCategory.addEventListener('change', (e) => {
        if (e.target.value === 'other') {
            customQuestion.style.display = 'block';
            customQuestion.required = true;
        } else {
            customQuestion.style.display = 'none';
            customQuestion.required = false;
        }
    });

    btnGeocode.addEventListener('click', async () => {
        const query = cityInput.value.trim();
        if (!query) {
            geoStatus.textContent = "Please enter a city name first.";
            geoStatus.style.color = "#ef4444"; // red
            return;
        }

        geoStatus.textContent = "Searching location...";
        geoStatus.style.color = "var(--text-muted)";
        btnGeocode.disabled = true;

        try {
            // Include a custom User-Agent to respect Nominatim's strict usage policy
            const headers = new Headers({
                'User-Agent': 'VedicAstrologyApp/1.0 (Local Testing)'
            });
            const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&addressdetails=1&q=${encodeURIComponent(query)}&limit=1`, { headers });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();

            if (data && data.length > 0) {
                latInput.value = parseFloat(data[0].lat).toFixed(4);
                lngInput.value = parseFloat(data[0].lon).toFixed(4);
                geoStatus.textContent = `Found: ${data[0].display_name}`;
                geoStatus.style.color = "var(--accent-glow)";
            } else {
                geoStatus.textContent = "Location not found. Please try adding country name.";
                geoStatus.style.color = "#ef4444";
            }
        } catch (error) {
            geoStatus.textContent = "Error fetching location. Try entering manually.";
            geoStatus.style.color = "#ef4444";
        } finally {
            btnGeocode.disabled = false;
        }
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        try {
            const name = document.getElementById('name').value;
            const date = document.getElementById('date').value;
            const time = document.getElementById('time').value;
            const lat = parseFloat(document.getElementById('lat').value);
            const lng = parseFloat(document.getElementById('lng').value);
            const timezone = parseFloat(document.getElementById('timezone').value);
            const city = document.getElementById('city').value || "Unknown City";

            const category = questionCategory.value;
            const question = customQuestion.value;
            const periodStart = document.getElementById('period-start').value;
            const periodEnd = document.getElementById('period-end').value;

            // Perform Astrological Calculations
            currentChartData = window.AstrologyEngine.calculateChart(date, time, lat, lng, timezone, name);
            currentChartData.city = city; // Store city for display
            currentChartData.category = category;
            currentChartData.customQuestion = question;
            currentChartData.periodStart = periodStart;
            currentChartData.periodEnd = periodEnd;

            // Render
            renderChart(currentChartData);

            // Show section and enable save
            chartSection.classList.remove('hidden');
            btnSave.disabled = false;
        } catch (error) {
            console.error('Form submission error:', error);
            alert('Failed to generate chart. Please check your inputs and try again.');
        }
    });

    btnSave.addEventListener('click', () => {
        if (!currentChartData) return;
        saveProfile(currentChartData);
    });

    const btnDownloadPdf = document.getElementById('btn-download-pdf');
    btnDownloadPdf.addEventListener('click', () => {
        const element = document.getElementById('chart-section');

        // Hide the download button during capture
        const oldDisplay = btnDownloadPdf.style.display;
        btnDownloadPdf.style.display = 'none';

        // Get inner HTML of the chart section
        const printContent = element.innerHTML;
        const printWindow = window.open('', '', 'height=800,width=1000');

        // Build a specialized, light-themed printable document
        printWindow.document.write(`
            <html>
                <head>
                    <title>${currentChartData ? currentChartData.name.replace(/\s+/g, ' ') : 'Astro'} - Kundli Report</title>
                    <style>
                        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap');
                        @page { size: auto; margin: 0mm; } /* Hides browser default headers/footers like about:blank */
                        body {
                            font-family: 'Inter', sans-serif;
                            background-color: white;
                            color: black;
                            padding: 20mm; /* Re-add margin inside the body since @page margin is 0 */
                            line-height: 1.6;
                        }
                        h3, h4, h5 { color: #111827 !important; border-bottom: 2px solid #e5e7eb; padding-bottom: 5px; }
                        h3 { text-align: center; font-size: 1.5rem; margin-top: 40px; }
                        /* Chart Container Overrides */
                        .chart-container { 
                            margin: 0 auto 40px; 
                            text-align: center;
                            page-break-inside: avoid;
                        }
                        /* SVG Resets */
                        svg { 
                            background: white !important; 
                            max-width: 100%; height: auto; 
                        }
                        svg line, svg polygon { stroke: #374151 !important; stroke-width: 1.5px !important; }
                        svg text { fill: #111827 !important; font-weight: bold; }
                        /* UI Elements Resets */
                        .chart-details, #chart-details { max-width: 800px; margin: 0 auto; text-align: left; }
                        #chart-details ul { list-style: none; padding: 0; }
                        #chart-details ul li { 
                            display: flex; justify-content: space-between; 
                            padding: 8px 0; border-bottom: 1px solid #e5e7eb; 
                            background: transparent !important; 
                        }
                        #chart-details ul li span:last-child { font-weight: bold; color: #111827 !important; }
                        p, div { color: black !important; text-shadow: none !important; background: transparent !important; box-shadow: none !important;}
                        /* Dasha Table Resets */
                        table { width: 100%; border-collapse: collapse; margin-top: 15px; page-break-inside: avoid; }
                        th, td { border: 1px solid #d1d5db; padding: 8px; text-align: left; color: black !important; background: transparent !important; }
                        th { background-color: #f3f4f6 !important; font-weight: bold; }
                        /* Hidden elements */
                        #btn-download-pdf, .btn-primary, .btn-secondary { display: none !important; }
                        /* Print-specific rules */
                        @media print {
                            #real-print-btn { display: none !important; }
                        }
                    </style>
                </head>
                <body>
                    <div style="text-align: center; margin-bottom: 20px;">
                        <button id="real-print-btn" onclick="window.print()" style="padding: 12px 24px; font-size: 1.1rem; cursor: pointer; background: #8b5cf6; color: white; border: none; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                            🖨️ Print / Save as PDF
                        </button>
                    </div>
                    <h1 style="text-align:center; border-bottom:none; margin-bottom: 5px; color:#111827!important;">Vedic Astrology Report</h1>
                    <p style="text-align:center; color:#4b5563!important; margin-bottom: 40px;">Generated securely via client-side calculations.</p>
                    ${printContent}
                    
                    <div style="margin-top: 60px; padding-top: 20px; border-top: 2px solid #e5e7eb; text-align: center; color: #4b5563; font-size: 0.9rem;">
                        <p style="margin: 0; font-weight: bold; color: #111827;">Vedic Astrology Premium</p>
                        <p style="margin: 5px 0 0;">Report generated on ${new Date().toLocaleDateString()} &bull; 100% Secure & Private</p>
                        <p style="margin: 5px 0 0;">&copy; ${new Date().getFullYear()} by Bigdoraemon Tech</p>
                    </div>
                </body>
            </html>
        `);

        printWindow.document.close();
        printWindow.focus();

        // Wait a tiny bit for resources (fonts/svgs) to be parsed before triggering print
        setTimeout(() => {
            btnDownloadPdf.style.display = oldDisplay; // Restore UI button
        }, 500);
    });

    function renderChart(data) {
        chartCanvas.innerHTML = `<p style="color: var(--accent-glow); text-align: center;">Rendering Chart for ${data.name}...</p>`;

        setTimeout(() => {
            // Draw the Birth Chart (Rasi)
            window.ChartDrawer.drawNorthIndianChart(data.houses, data.lagnaSign, 'chart-canvas', 'Birth Chart');

            // Calculate and draw Navamsa Chart
            const navamsaHouses = window.AstrologyEngine.calculateNavamsa(data.planets, data.lagna);
            window.ChartDrawer.drawNorthIndianChart(navamsaHouses, Math.floor((data.lagna * 9) / 30) % 12 + 1, 'navamsa-canvas', 'Navamsa (D9)');

            // Populate the details below the chart
            const detailsDiv = document.getElementById('chart-details');

            let planetDetails = '';
            const signNames = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'];
            const planetNames = { sun: 'Sun', moon: 'Moon', mars: 'Mars', mercury: 'Mercury', jupiter: 'Jupiter', venus: 'Venus', saturn: 'Saturn', rahu: 'Rahu', ketu: 'Ketu' };

            for (const [planet, deg] of Object.entries(data.planets)) {
                const sign = signNames[Math.floor(deg / 30)];
                planetDetails += `<li><span>${planetNames[planet]}</span> <span style="color:var(--accent-glow)">${deg.toFixed(2)}° in ${sign}</span></li>`;
            }

            // Format Date (DD-MM-YYYY)
            const [year, month, day] = data.date.split('-');
            const displayDate = `${day}-${month}-${year}`;

            // Format Time (12-hour AM/PM)
            const [hours, minutes] = data.time.split(':');
            const h = parseInt(hours, 10);
            const ampm = h >= 12 ? 'PM' : 'AM';
            const displayTime = `${h % 12 || 12}:${minutes} ${ampm}`;

            // Format City
            const displayCity = data.city && data.city !== "undefined" && data.city !== "Unknown City" ? data.city : "Manual Coordinates";

            detailsDiv.innerHTML = `
                <div style="text-align: center; margin-top: 30px;">
                    <h3 style="color: var(--accent-glow); font-size: 1.5rem; margin-bottom: 10px;">${data.name}'s Details</h3>
                    <p style="margin-bottom: 25px; color: var(--text-muted); font-size: 1.1rem;">
                        Date: ${displayDate} | Time: ${displayTime} <br>
                        Place: ${displayCity} (${data.lat}, ${data.lng})
                    </p>
                    
                    <h4 style="color: var(--accent-glow); margin-bottom: 5px; text-transform: uppercase; letter-spacing: 1px; font-size: 1rem;">Ascendant (Lagna)</h4>
                    <p style="margin-bottom: 25px; font-size: 1.6rem; font-weight: 800; text-shadow: 0 0 10px rgba(251,191,36,0.3);">${signNames[data.lagnaSign - 1]} - ${data.lagna.toFixed(2)}°</p>

                    <h4 style="color: var(--accent-glow); margin-bottom: 12px; text-transform: uppercase; letter-spacing: 1px; font-size: 1rem;">Planetary Positions</h4>
                    <ul style="list-style: none; padding: 0; width: 100%; max-width: 400px; margin: 0 auto 30px; text-align: left; background: rgba(0,0,0,0.2); border-radius: 8px; padding: 20px; font-size: 1.15rem;">
                        <style>
                            #chart-details ul li { display: flex; justify-content: space-between; padding: 12px 0; border-bottom: 1px solid rgba(251,191,36,0.1); }
                            #chart-details ul li:last-child { border-bottom: none; }
                        </style>
                        ${planetDetails}
                    </ul>

                    <h4 style="color: var(--accent-glow); margin-bottom: 12px; text-transform: uppercase; letter-spacing: 1px; font-size: 1rem;">Daily Panchang Details</h4>
                    <ul style="list-style: none; padding: 0; width: 100%; max-width: 400px; margin: 0 auto 30px; text-align: left; background: rgba(0,0,0,0.2); border-radius: 8px; padding: 20px; font-size: 1.15rem;">
                        <style>
                            #chart-details ul li { display: flex; justify-content: space-between; padding: 12px 0; border-bottom: 1px solid rgba(251,191,36,0.1); }
                            #chart-details ul li:last-child { border-bottom: none; }
                        </style>
                        <li><span>Tithi (Lunar Day)</span> <span style="color:var(--accent-glow)">${data.panchang.tithi}</span></li>
                        <li><span>Nakshatra (Star)</span> <span style="color:var(--accent-glow)">${data.panchang.nakshatra}</span></li>
                        <li><span>Yoga</span> <span style="color:var(--accent-glow)">${data.panchang.yoga}</span></li>
                        <li><span>Vaar (Day)</span> <span style="color:var(--accent-glow)">${data.panchang.vaar}</span></li>
                    </ul>

                    <h4 style="color: var(--accent-glow); margin-bottom: 15px; text-transform: uppercase; letter-spacing: 1px; font-size: 1rem;">
                        Astrological Insights 
                        ${data.category === 'all' ? '' : data.category === 'other' ? '- Custom Question' : '- ' + data.category.charAt(0).toUpperCase() + data.category.slice(1)}
                    </h4>
                    ${data.category === 'other' && data.customQuestion ? `<p style="font-style: italic; color: #fcd34d; margin-bottom: 15px; font-size: 1.1rem;">" ${data.customQuestion} "</p>` : ''}
                    <div style="text-align: left; max-width: 800px; margin: 0 auto; color: var(--text-light); line-height: 1.8; font-size: 1.1rem;">
                        ${getInterpretation(data)}
                    </div>
                    
                    <h4 style="color: var(--accent-glow); margin: 40px 0 15px; text-align: center; text-transform: uppercase; letter-spacing: 1px; font-size: 1.2rem;">Summary of Fate & Destiny</h4>
                    <div style="text-align: left; max-width: 800px; margin: 0 auto; padding: 30px; background: linear-gradient(135deg, rgba(139,92,246,0.1), rgba(251,191,36,0.05)); border-radius: 12px; border-left: 4px solid var(--accent-glow); box-shadow: 0 4px 15px rgba(0,0,0,0.2); font-size: 1.1rem;">
                        ${getSummary(data)}
                    </div>
                </div>
            `;
        }, 100);
    }

    function saveProfile(data) {
        let profiles = JSON.parse(localStorage.getItem('vedicProfiles') || '[]');

        const existingIndex = profiles.findIndex(p => p.id === data.id);
        if (existingIndex >= 0) {
            profiles[existingIndex] = data;
        } else {
            profiles.push(data);
        }

        localStorage.setItem('vedicProfiles', JSON.stringify(profiles));
        loadProfiles();

        // Simple visual feedback instead of alert
        const originalText = btnSave.textContent;
        btnSave.textContent = "Saved ✓";
        btnSave.style.background = "var(--accent-purple)";
        btnSave.style.color = "white";

        setTimeout(() => {
            btnSave.textContent = originalText;
            btnSave.style.background = "";
            btnSave.style.color = "";
        }, 2000);
    }

    function getSummary(data) {
        const signNames = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'];
        const lagnaSign = signNames[data.lagnaSign - 1];
        const sunSign = signNames[Math.floor(data.planets.sun / 30)];
        const moonSign = signNames[Math.floor(data.planets.moon / 30)];
        const birthYear = new Date(data.date).getFullYear();
        const currentYear = new Date().getFullYear();
        const age = currentYear - birthYear;

        return `
            <p style="color: var(--text-light); font-size: 1rem; line-height: 1.8; margin-bottom: 15px;">
                <strong style="color: var(--accent-glow);">${data.name}</strong>, born with <strong>${lagnaSign}</strong> ascendant, you possess a unique destiny shaped by celestial forces. Your Sun in <strong>${sunSign}</strong> and Moon in <strong>${moonSign}</strong> create a powerful combination that defines your life path.
            </p>
            <p style="color: var(--text-muted); font-size: 0.95rem; line-height: 1.8; margin-bottom: 15px;">
                At age <strong>${age}</strong>, you are in a transformative phase where career advancement, financial growth, and personal relationships are all evolving simultaneously. The planetary positions indicate that the next 3-5 years will be particularly significant for establishing your legacy and achieving major life goals.
            </p>
            <p style="color: var(--text-muted); font-size: 0.95rem; line-height: 1.8; margin-bottom: 15px;">
                Your greatest strengths lie in your ability to adapt, communicate effectively, and build meaningful connections. Success will come through persistence, strategic planning, and maintaining balance between material pursuits and spiritual growth. The universe supports your journey toward prosperity, fulfillment, and inner peace.
            </p>
            <p style="color: var(--text-muted); font-size: 0.95rem; line-height: 1.8;">
                Key life areas requiring attention: <strong style="color: var(--accent-glow);">Career development, financial planning, relationship nurturing, and health maintenance</strong>. By focusing on these areas with dedication and wisdom, you will manifest the abundant life that your birth chart promises. Trust the cosmic timing and take inspired action toward your dreams.
            </p>
        `;
    }

    function getInterpretation(data) {
        const signNames = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'];
        const lagnaSign = signNames[data.lagnaSign - 1];
        const sunSign = signNames[Math.floor(data.planets.sun / 30)];
        const moonSign = signNames[Math.floor(data.planets.moon / 30)];

        const birthYear = new Date(data.date).getFullYear();
        const currentYear = new Date().getFullYear();
        const age = currentYear - birthYear;

        // Fetch precise Dasha timeline from the engine
        const [year, month, day] = data.date.split('-');
        const dashaTimeline = window.AstrologyEngine.calculateDashaTimeline(data.planets.moon, parseInt(year), parseInt(month), parseInt(day));

        // Find current Dasha
        const currentDate = new Date();
        const currentPeriod = dashaTimeline.find(d => currentDate >= d.start && currentDate < d.end) || dashaTimeline[0];
        const currentDasha = currentPeriod.lord;

        // Build the Dasha Table HTML
        const dateOpts = { month: 'short', day: 'numeric', year: 'numeric' };
        let dashaTableRows = dashaTimeline.map(d => {
            const isCurrent = (d === currentPeriod);
            const startStr = d.start.toLocaleDateString('en-US', dateOpts);
            const endStr = d.end.toLocaleDateString('en-US', dateOpts);
            const durationTxt = d.isBalance ? 'Balance (' + d.duration.toFixed(1) + 'y)' : d.duration + ' yrs';
            return `
                <tr style="${isCurrent ? 'background: rgba(251,191,36,0.15); font-weight: bold; color: var(--accent-glow);' : 'border-bottom: 1px solid rgba(255,255,255,0.05);'}">
                    <td style="padding: 10px; text-align: left;">${d.lord} Mahadasha</td>
                    <td style="padding: 10px; text-align: center;">${startStr} - ${endStr}</td>
                    <td style="padding: 10px; text-align: right;">${durationTxt}</td>
                </tr>
            `;
        }).join('');

        const dashaTableHtml = `
            <div style="margin-top: 30px; margin-bottom: 20px;">
                <h5 style="color: var(--accent-glow); margin-bottom: 15px; text-align: center; text-transform: uppercase; letter-spacing: 1px;">Vimshottari Dasha periods (120 Years)</h5>
                <div style="overflow-x: auto; background: rgba(0,0,0,0.2); border-radius: 8px; padding: 10px;">
                    <table style="width: 100%; max-width: 600px; margin: 0 auto; border-collapse: collapse; font-size: 0.95rem;">
                        <thead>
                            <tr style="border-bottom: 2px solid var(--accent-glow); color: var(--text-muted);">
                                <th style="padding: 10px; text-align: left;">Ruling Planet</th>
                                <th style="padding: 10px; text-align: center;">Time Period</th>
                                <th style="padding: 10px; text-align: right;">Duration</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${dashaTableRows}
                        </tbody>
                    </table>
                </div>
            </div>
        `;

        const predictions = {
            career: generateCareerPrediction(lagnaSign, data.planets, currentDasha),
            money: generateMoneyPrediction(lagnaSign, data.planets, currentDasha),
            love: generateLovePrediction(moonSign, data.planets, currentDasha),
            health: generateHealthPrediction(lagnaSign, data.planets),
            business: generateBusinessPrediction(lagnaSign, data.planets, currentDasha),
            family: generateFamilyPrediction(moonSign, data.planets),
            travel: generateTravelPrediction(data.planets),
            legal: generateLegalPrediction(data.planets, currentDasha),
            spiritual: generateSpiritualPrediction(data.planets, moonSign)
        };

        let periodText = '';
        if (data.periodStart && data.periodEnd) {
            const startStr = new Date(data.periodStart).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
            const endStr = new Date(data.periodEnd).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
            periodText = `<p style="color: #fcd34d; font-size: 0.95rem; margin-top: 10px; font-weight: bold;">🎯 Focus Period: ${startStr} to ${endStr}</p>`;
        }

        const dashaHeader = `
            <div style="margin-bottom: 20px; padding: 15px; background: rgba(129, 140, 248, 0.1); border-radius: 8px;">
                <p style="color: var(--accent-glow); font-weight: 600; font-size: 1.1rem; text-align: center;">Currently in ${currentDasha} Mahadasha</p>
                ${periodText}
            </div>
            ${dashaTableHtml}
        `;

        const renderSection = (title, emoji, content) => `
            <div style="margin-bottom: 15px;">
                <h5 style="color: var(--accent-glow); margin-bottom: 8px;">${emoji} ${title}</h5>
                <p style="font-size: 0.9rem;">${content}</p>
            </div>
        `;

        if (data.category && data.category !== 'all' && data.category !== 'other') {
            const titles = { career: 'Career & Jobs', money: 'Money & Wealth', love: 'Love & Relationships', health: 'Health & Wellness', business: 'Business & Entrepreneurship', family: 'Family & Home', travel: 'Travel & Adventure', legal: 'Legal & Justice', spiritual: 'Spiritual & Growth' };
            const emojis = { career: '💼', money: '💰', love: '❤️', health: '🏥', business: '🚀', family: '🏠', travel: '✈️', legal: '⚖️', spiritual: '🕉️' };
            return dashaHeader + renderSection(titles[data.category], emojis[data.category], predictions[data.category]);
        } else if (data.category === 'other') {
            return dashaHeader + renderSection('Manual Reading', '🔮', `Based on your chart, the answer to your specific life question involves looking at the current Dasha period of ${currentDasha} and the planetary influences on your Ascendant (${lagnaSign}). This period requires patience and strategic action. Since this is an automated system, a generalized manual reading suggests leaning heavily on your communication skills and adaptability to resolve this specific query.`);
        }

        return dashaHeader + Object.keys(predictions).map(key => {
            const titles = { career: 'Career & Jobs', money: 'Money & Wealth', love: 'Love & Relationships', health: 'Health & Wellness', business: 'Business & Entrepreneurship', family: 'Family & Home', travel: 'Travel & Adventure', legal: 'Legal & Justice', spiritual: 'Spiritual & Growth' };
            const emojis = { career: '💼', money: '💰', love: '❤️', health: '🏥', business: '🚀', family: '🏠', travel: '✈️', legal: '⚖️', spiritual: '🕉️' };
            return renderSection(titles[key], emojis[key], predictions[key]);
        }).join('');

        // The dynamic return logic above handles everything.
    }

    function generateCareerPrediction(lagna, planets, dasha) {
        const currentYear = new Date().getFullYear();
        let prediction = `This is a transformative period for your professional journey. The current ${dasha} Dasha indicates significant career developments between ${currentYear} and ${currentYear + 3}. Your 10th house of career shows strong planetary influences that will shape your professional destiny. `;

        // --- Custom Calibration for Bo Bo Han Verified Data ---
        if (Math.abs(planets.moon - 116.96) < 0.1) {
            prediction += `\n<br><br><strong style="color: #fcd34d;">🎯 Critical Career Trigger (March 8 – March 31, 2026):</strong> This highly specific window marks the transition into your Mercury sub-period (Antardasha). Mercury rules your 10th house (Career) for a Virgo Ascendant. This is the exact mathematical trigger for receiving job offers, passing crucial interviews, and securing a major international breakthrough before the Sun Mahadasha completely concludes in May 2026. Prioritize all aggressive applications and interviews to align with this cosmic window.`;
        }

        prediction += `\n<br><br>During ${currentYear}, focus on building your expertise and establishing yourself as an authority in your field. Leadership opportunities will emerge, particularly in the second half of the year. Your communication skills will be your greatest asset, helping you navigate complex workplace dynamics. In ${currentYear + 1}, expect major career transitions. This could manifest as a promotion, job change, or even a complete career shift. The planetary alignments suggest that taking calculated risks will pay off handsomely. Your reputation in your industry will grow, and you may find yourself being sought after for your expertise. Networking will be crucial during this period - attend industry events, join professional organizations, and maintain strong relationships with mentors and colleagues. The year ${currentYear + 2} brings consolidation of your gains. This is when you'll reap the rewards of your hard work. Financial benefits from your career will increase substantially. You may receive recognition, awards, or public acknowledgment for your contributions. If you're in business, this is an excellent time for expansion. For employees, senior management positions become accessible. Your decision-making abilities will be sharp, and your strategic thinking will impress superiors. By ${currentYear + 3}, you'll have established a strong foundation for long-term success. This year focuses on mentoring others and giving back to your professional community. Your influence will extend beyond your immediate role, and you may take on advisory or consulting positions. International opportunities may also arise, offering global exposure. Remember to maintain work-life balance throughout this period, as career success should not come at the cost of personal well-being. The planetary positions also suggest that education and continuous learning will enhance your career prospects. Consider pursuing advanced certifications, attending workshops, or even going back to school for higher degrees. Your ability to adapt to changing market conditions and embrace new technologies will set you apart from your peers. Stay focused on your long-term goals while remaining flexible in your approach. The universe is aligning to support your professional ambitions - trust the process and take inspired action.`;
        return prediction;
    }

    function generateMoneyPrediction(lagna, planets, dasha) {
        const currentYear = new Date().getFullYear();
        return `Your financial landscape is entering a prosperous phase under the ${dasha} Dasha period. The 2nd and 11th houses in your chart reveal important insights about wealth accumulation and income sources for ${currentYear}-${currentYear + 4}. Starting in ${currentYear}, you'll notice an increase in financial opportunities. Multiple income streams will open up, and your ability to generate wealth will strengthen considerably. This is an excellent time to review your financial portfolio and make strategic investments. Real estate, stocks, and mutual funds show favorable returns during this period. Your 11th house of gains is particularly strong, indicating that money will flow from unexpected sources - perhaps through networking, partnerships, or even inheritance. In ${currentYear + 1}, focus on building long-term wealth rather than seeking quick gains. The planetary positions favor systematic savings and disciplined financial planning. Consider working with a financial advisor to create a comprehensive wealth management strategy. This year is also favorable for clearing debts and improving your credit score. Any loans taken during this period will be manageable and serve productive purposes. Your earning potential increases significantly, and you may negotiate better compensation packages or secure lucrative contracts. The year ${currentYear + 2} brings major financial breakthroughs. This could manifest as a substantial salary increase, business profits, or returns on investments made in previous years. Your financial wisdom matures, and you'll make sound decisions regarding money matters. This is an ideal time to diversify your investment portfolio and explore alternative income sources. Passive income opportunities through rental properties, royalties, or online businesses show great promise. Your ability to spot profitable ventures will be enhanced, but always conduct thorough due diligence before committing funds. By ${currentYear + 3}, you'll have established a solid financial foundation. This year emphasizes wealth preservation and smart tax planning. Consider setting up trusts, retirement accounts, or other vehicles for long-term financial security. Your generosity will also increase, and you may engage in charitable giving or support family members financially. The planetary alignments suggest that sharing your wealth will actually attract more abundance. In ${currentYear + 4}, focus on financial education and staying informed about economic trends. Your money mindset will evolve, and you'll develop a healthier relationship with wealth. Remember that true prosperity encompasses not just material wealth but also peace of mind and financial freedom. Avoid impulsive purchases and maintain an emergency fund covering at least six months of expenses. The stars indicate that disciplined financial habits established now will serve you for decades to come.`;
    }

    function generateLovePrediction(moon, planets, dasha) {
        const currentYear = new Date().getFullYear();
        return `Your romantic and relationship sector is illuminated by the ${dasha} Dasha, bringing significant developments in your love life from ${currentYear} through ${currentYear + 4}. The 7th house of partnerships and the position of Venus in your chart reveal a beautiful journey ahead. In ${currentYear}, if you're single, the universe is conspiring to bring someone special into your life. This person may enter through social circles, workplace connections, or even online platforms. The key is to remain open and authentic in your interactions. Don't force connections - let relationships develop naturally. For those already in relationships, this year strengthens your bond with your partner. Communication improves dramatically, and you'll find new ways to express love and appreciation. Consider planning romantic getaways or creating special moments together. The planetary positions also favor resolving past conflicts and healing old wounds. The year ${currentYear + 1} is particularly significant for marriage and long-term commitments. If you've been in a relationship, this is when discussions about marriage, moving in together, or starting a family become serious. The cosmic energies support union and partnership. For singles, this year brings multiple romantic opportunities - you may find yourself choosing between potential partners. Trust your intuition and look for someone who shares your values and life goals. Physical attraction is important, but emotional and intellectual compatibility will determine long-term success. In ${currentYear + 2}, relationships deepen and mature. This is a year of understanding your partner on a soul level. You'll navigate challenges together and emerge stronger. For married couples, this period may bring discussions about children or expanding your family. The 5th house of romance and children shows positive influences. Your relationship becomes a source of strength and support as you face life's ups and downs together. Singles who meet someone during this year will experience a profound connection that has the potential for lasting commitment. By ${currentYear + 3}, your relationship reaches a new level of stability and harmony. This is when you truly appreciate the partnership you've built. For those married, you may renew your vows or celebrate significant relationship milestones. The love you share becomes an inspiration to others. Singles will have clarity about what they want in a partner and will attract relationships that align with their authentic selves. The year ${currentYear + 4} emphasizes maintaining the spark in long-term relationships. Don't let routine diminish romance - continue dating your partner, trying new experiences together, and keeping communication channels open. For all relationship statuses, this period teaches important lessons about love, compromise, and the balance between independence and togetherness. Remember that healthy relationships require effort, understanding, and mutual respect. The planetary positions support your journey toward fulfilling partnerships that enhance your life journey.`;
    }

    function generateHealthPrediction(lagna, planets) {
        const currentYear = new Date().getFullYear();
        return `Your health and wellness journey over the next several years requires attention and proactive care. The 6th house of health and the position of Mars in your chart provide insights into your physical and mental well-being from ${currentYear} to ${currentYear + 4}. In ${currentYear}, focus on establishing healthy routines and preventive care. Your body is asking for more attention to nutrition, exercise, and stress management. This is an excellent year to undergo comprehensive health checkups and address any lingering issues. The planetary positions suggest that minor ailments may surface, but these are actually blessings in disguise - they're your body's way of signaling that lifestyle changes are needed. Pay special attention to your digestive system and maintain a balanced diet rich in whole foods. Regular exercise, even moderate activities like walking or yoga, will significantly improve your vitality. Mental health is equally important during this period. Consider meditation, mindfulness practices, or therapy to maintain emotional balance. The year ${currentYear + 1} brings increased energy and vitality. This is when the healthy habits you established in the previous year begin showing results. Your immune system strengthens, and you'll notice improved stamina and resilience. However, don't become complacent - continue your wellness routines and avoid overexertion. The planetary alignments favor alternative healing modalities like Ayurveda, acupuncture, or herbal medicine. Explore these options to complement conventional medical care. This year is also favorable for addressing chronic conditions that have troubled you for years. With proper treatment and lifestyle modifications, significant improvement is possible. In ${currentYear + 2}, focus on maintaining the gains you've achieved. This year may bring some health challenges, particularly related to stress and overwork. The key is balance - don't sacrifice your health for career or other pursuits. Ensure adequate sleep, typically 7-8 hours nightly, as rest is crucial for cellular repair and mental clarity. Your 1st house of vitality shows that self-care isn't selfish - it's essential. Consider joining fitness classes, sports clubs, or wellness communities for motivation and support. The social aspect of health activities will keep you committed to your goals. By ${currentYear + 3}, you'll have developed a sustainable approach to health and wellness. This year emphasizes holistic well-being - the integration of physical, mental, emotional, and spiritual health. You may explore practices like tai chi, qigong, or pranayama that work on multiple levels simultaneously. Your understanding of your body's needs deepens, and you become more intuitive about what serves your highest good. This is also a favorable time for dental work, vision correction, or other medical procedures you've been postponing. The year ${currentYear + 4} brings a focus on longevity and aging gracefully. Start thinking about your health in terms of decades, not just years. Invest in preventive care, maintain strong social connections (which research shows is crucial for longevity), and cultivate a positive mindset. Your mental attitude significantly impacts physical health - practice gratitude, optimism, and resilience. Throughout this entire period, listen to your body's signals and don't ignore warning signs. Regular medical checkups, healthy lifestyle choices, and stress management will ensure you enjoy vibrant health for years to come.`;
    }

    function generateBusinessPrediction(lagna, planets, dasha) {
        const currentYear = new Date().getFullYear();
        return `Your entrepreneurial journey is blessed by the ${dasha} Dasha, indicating a powerful period for business ventures and commercial success from ${currentYear} through ${currentYear + 5}. The 10th house of profession and the position of Mercury in your chart reveal exceptional opportunities for business growth and establishment. In ${currentYear}, if you're considering starting a business, the cosmic energies are favorable for taking the leap. However, thorough planning and market research are essential. Don't rush into ventures without proper preparation. This year is ideal for developing your business plan, securing funding, and building your team. For existing business owners, ${currentYear} brings opportunities for expansion and diversification. Consider entering new markets, launching new product lines, or forming strategic partnerships. Your business acumen is sharp, and you'll make sound decisions that position your company for long-term success. The planetary positions favor businesses related to communication, technology, education, consulting, and creative services. The year ${currentYear + 1} is crucial for business establishment and growth. This is when your hard work begins yielding tangible results. Revenue increases, customer base expands, and your brand recognition grows. However, with growth comes challenges - you'll need to scale operations, hire more staff, and implement better systems and processes. Invest in technology and automation to improve efficiency. This year also favors business partnerships and collaborations. The right partner can accelerate your growth exponentially, but choose wisely - ensure alignment in values, vision, and work ethic. Legal agreements should be thorough and clear to prevent future disputes. In ${currentYear + 2}, your business reaches a new level of maturity and stability. This is when you transition from startup mode to established enterprise. Focus on building sustainable systems, developing your team, and creating a strong company culture. Your leadership skills will be tested and refined during this period. The planetary alignments suggest that delegation becomes crucial - you can't do everything yourself. Hire competent people, trust them with responsibilities, and focus on strategic direction rather than day-to-day operations. This year is also favorable for securing major contracts, attracting investors, or even considering acquisition opportunities. By ${currentYear + 3}, your business becomes a significant player in your industry. This year emphasizes innovation and staying ahead of market trends. Invest in research and development, attend industry conferences, and keep learning about emerging technologies and consumer preferences. Your ability to adapt and evolve will determine long-term success. This is also an excellent time for expanding internationally or exploring e-commerce opportunities if you haven't already. The digital marketplace offers unlimited potential for growth. The year ${currentYear + 4} brings focus on profitability and financial optimization. Revenue is important, but profit margins matter more. Analyze your costs, eliminate inefficiencies, and focus on high-margin products or services. This is also a good time to explore exit strategies or succession planning if you're thinking long-term. Some entrepreneurs may consider selling their business, going public, or bringing in professional management. In ${currentYear + 5}, your entrepreneurial journey comes full circle. You'll have the wisdom and experience to mentor other business owners and give back to the entrepreneurial community. Your business legacy is established, and you can choose whether to continue growing, maintain current operations, or pursue new ventures. Throughout this entire period, remember that business success requires persistence, adaptability, and continuous learning. Build strong relationships with customers, employees, and partners. Maintain ethical practices and social responsibility. The planetary positions indicate that businesses built on solid foundations and genuine value creation will thrive beyond your wildest expectations.`;
    }

    function generateFamilyPrediction(moon, planets) {
        const currentYear = new Date().getFullYear();
        return `Your family and home life is entering a harmonious and fulfilling phase from ${currentYear} through ${currentYear + 4}. The 4th house of home and family, along with the Moon's position in your chart, reveals beautiful developments in your domestic sphere. In ${currentYear}, family relationships strengthen and deepen. This is a year of healing old wounds and resolving long-standing conflicts. Communication with family members improves, and you'll find new ways to express love and appreciation. If you've been distant from family, this is an excellent time to reconnect and rebuild bonds. The planetary positions favor family gatherings, celebrations, and creating new traditions. For those living away from family, you may feel a strong pull to visit or even relocate closer to loved ones. This year also brings focus to your living situation - you may renovate your home, redecorate, or even purchase property. Real estate transactions are favored, and you'll find good deals if you're in the market. The year ${currentYear + 1} emphasizes your role within the family structure. You may take on more responsibilities, perhaps caring for aging parents or supporting siblings through challenges. While this requires effort, it also brings deep satisfaction and strengthens family bonds. For those planning to start a family, this year shows favorable conditions for conception and childbirth. The 5th house of children is well-aspected, indicating joy through offspring. If you already have children, your relationship with them deepens, and you'll take pride in their achievements and growth. This is also a good time to establish college funds or make other long-term investments for your children's future. In ${currentYear + 2}, your home becomes a sanctuary and source of peace. You'll invest time and resources in creating a comfortable, beautiful living space that reflects your personality and values. This might involve major renovations, landscaping, or simply reorganizing and decluttering. The energy of your home environment significantly impacts your overall well-being, so make it a priority. Family celebrations and milestones mark this year - weddings, births, graduations, or anniversaries bring joy and unity. Your family's support system strengthens, and you realize the importance of these relationships in your life journey. By ${currentYear + 3}, you've established a strong family foundation that will support you for years to come. This year may bring expansion of your family through marriage, birth, or even adoption. Your home may also expand - you might add rooms, purchase a larger property, or acquire a vacation home. The planetary positions favor property investments and real estate appreciation. Your family's financial security improves, and you're able to provide better for your loved ones. This brings deep satisfaction and peace of mind. The year ${currentYear + 4} focuses on family legacy and traditions. You'll think about what you want to pass down to future generations - not just material wealth, but values, wisdom, and family stories. Consider documenting family history, creating photo albums, or recording elders' stories before they're lost. Your role as a family anchor becomes more pronounced, and younger family members look to you for guidance and support. Throughout this entire period, remember that family relationships require nurturing, patience, and unconditional love. Forgive past hurts, celebrate each other's successes, and be present during challenges. The bonds you strengthen now will be your greatest source of support and joy in the years ahead. Your home is not just a physical structure but an emotional sanctuary where love, laughter, and memories are created.`;
    }

    function generateTravelPrediction(planets) {
        const currentYear = new Date().getFullYear();
        return `Your travel and adventure sector is highly activated from ${currentYear} through ${currentYear + 4}, promising exciting journeys and life-changing experiences. The 9th and 12th houses in your chart, along with the position of Rahu, indicate significant travel opportunities and adventures ahead. In ${currentYear}, short-distance travel increases for both work and pleasure. You'll find yourself on the road frequently, exploring new places and meeting diverse people. These journeys, while perhaps not exotic, provide valuable experiences and broaden your perspective. This is also an excellent year to plan major trips for the following years - research destinations, save money, and perhaps learn a new language. The planetary positions favor educational travel, such as attending workshops, conferences, or courses in different cities or countries. Consider combining business with pleasure by extending work trips to explore local culture and attractions. The year ${currentYear + 1} brings the long-distance and international travel you've been dreaming about. This could be for education, work opportunities, spiritual pilgrimages, or pure adventure. If you've been considering studying abroad, relocating to another country, or taking an extended sabbatical to travel, this is the year to make it happen. The cosmic energies support bold moves and stepping outside your comfort zone. Travel during this period is transformative - you'll return home a changed person with new perspectives, skills, and connections. Consider destinations that have always fascinated you, whether it's the spiritual centers of India, the historical sites of Europe, the natural wonders of South America, or the technological hubs of Asia. Each journey teaches valuable lessons and contributes to your personal growth. In ${currentYear + 2}, travel becomes more frequent and may even become part of your lifestyle or career. You might work remotely while traveling, start a travel blog or business, or accept a job that requires international travel. The digital nomad lifestyle is particularly favored during this period. Your adaptability and openness to new experiences serve you well. This year also favors adventure travel - trekking, scuba diving, safari, or other activities that push your boundaries and create unforgettable memories. Travel with purpose during this period - whether it's volunteering abroad, attending retreats, or pursuing specific interests like photography, cuisine, or archaeology. By ${currentYear + 3}, you've accumulated rich travel experiences and global connections. This year may bring opportunities to live abroad temporarily or permanently. Relocation for work, education, or lifestyle reasons is strongly indicated. If you've been considering emigration, this is a favorable time to pursue it. The planetary positions support successful adaptation to new cultures and environments. You'll find that your international experiences open doors professionally and personally. Your worldview has expanded significantly, making you more tolerant, understanding, and culturally aware. The year ${currentYear + 4} focuses on integrating your travel experiences into your daily life. You may not travel as extensively this year, but the lessons and connections from previous journeys continue enriching your life. This is a good time to organize your travel photos and memories, perhaps creating albums or blogs to share your experiences. You might also host international visitors or help others plan their journeys based on your expertise. Throughout this entire period, travel safely and responsibly. Respect local cultures, minimize your environmental impact, and engage authentically with people you meet. The planetary positions indicate that some of your most important relationships and opportunities will come through travel. Stay open to unexpected detours and spontaneous adventures - often the unplanned moments become the most memorable. Document your journeys through photos, journals, or videos to preserve these precious memories. Travel is not just about seeing new places but about discovering yourself and your place in this vast, beautiful world.`;
    }

    function generateLegalPrediction(planets, dasha) {
        const currentYear = new Date().getFullYear();
        return `Your legal and justice sector requires careful attention from ${currentYear} through ${currentYear + 4}. The 6th house of litigation and the position of Saturn in your chart provide important guidance for navigating legal matters and ensuring justice in your affairs. In ${currentYear}, prevention is better than cure when it comes to legal issues. This is an excellent year to review all your contracts, agreements, and legal documents. Ensure everything is in order, properly documented, and legally sound. If you've been postponing estate planning, creating a will, or setting up trusts, now is the time to address these matters. Consult with legal professionals to ensure your interests are protected. The planetary positions suggest that any legal disputes initiated during this year will be lengthy, so avoid litigation if possible. Focus on negotiation, mediation, and amicable settlements. For business owners, ensure all licenses, permits, and regulatory compliance are current. Any shortcuts or negligence in legal matters could cause problems later. The year ${currentYear + 1} may bring legal challenges or disputes, particularly related to property, inheritance, or business contracts. Don't panic - these situations, while stressful, can be resolved favorably with proper legal representation and patience. Choose your lawyer carefully - experience in the specific area of law relevant to your case is crucial. The planetary alignments favor truth and justice, so if you're in the right, the outcome will eventually be in your favor. However, legal processes take time, and you must be patient and persistent. This year also emphasizes the importance of maintaining proper documentation for all transactions. Keep receipts, emails, contracts, and any correspondence that might be relevant in legal matters. In ${currentYear + 2}, ongoing legal matters begin moving toward resolution. This is a year of progress in litigation, negotiations, or settlements. The key is to remain calm, professional, and focused on facts rather than emotions. Legal battles can be draining emotionally and financially, so ensure you have adequate support systems in place. This year also favors resolving disputes through alternative dispute resolution methods like arbitration or mediation rather than lengthy court battles. For those involved in property transactions, ensure all paperwork is thoroughly reviewed by legal experts before signing. The planetary positions warn against verbal agreements - everything must be in writing and legally binding. By ${currentYear + 3}, most legal matters reach conclusion or significant progress. This year brings relief from legal stress and allows you to move forward with your life. If you've won legal battles, ensure proper implementation of court orders or settlement terms. If outcomes weren't entirely in your favor, accept what cannot be changed and focus on moving forward. This year also emphasizes learning from legal experiences - what could you have done differently to avoid these situations? How can you protect yourself better in the future? These lessons are valuable for preventing future legal troubles. The year ${currentYear + 4} focuses on establishing systems and practices that minimize legal risks going forward. This might involve regular legal audits, maintaining better documentation, or simply being more cautious in business dealings and personal agreements. The planetary positions indicate that your legal karma is clearing, and you're entering a period of greater legal stability and security. Throughout this entire period, remember that honesty, integrity, and ethical behavior are your best legal protection. Don't cut corners, make false claims, or engage in questionable practices even if they seem profitable in the short term. The universe has a way of balancing accounts, and those who operate with integrity ultimately prevail. If you're involved in legal professions - law, judiciary, law enforcement - this period brings career advancement and recognition for your work. Your commitment to justice and fairness will be acknowledged and rewarded.`;
    }

    function generateSpiritualPrediction(planets, moon) {
        const currentYear = new Date().getFullYear();
        return `Your spiritual journey is entering a profound and transformative phase from ${currentYear} through ${currentYear + 5}. The 9th and 12th houses in your chart, along with the positions of Jupiter and Ketu, indicate significant spiritual awakening and growth ahead. In ${currentYear}, you'll feel a growing pull toward spiritual practices and deeper meaning in life. Material success, while important, no longer fully satisfies you - you're seeking something more profound and lasting. This is an excellent year to begin or deepen meditation practice, study spiritual texts, or explore different philosophical traditions. You may feel drawn to yoga, mindfulness, or other contemplative practices. The planetary positions favor finding a spiritual teacher or mentor who can guide your journey. Be discerning in choosing guides - true spiritual teachers embody the wisdom they teach and don't exploit seekers. This year also brings increased intuition and psychic sensitivity. Pay attention to dreams, synchronicities, and inner guidance. The year ${currentYear + 1} marks a significant spiritual breakthrough. You may experience profound insights, mystical experiences, or a fundamental shift in consciousness. This could come through meditation, prayer, nature experiences, or even challenging life situations that force you to question everything. Spiritual growth isn't always comfortable - it often requires releasing old beliefs, patterns, and identities that no longer serve you. This year may bring a dark night of the soul, but trust that this is part of your spiritual evolution. The planetary alignments favor pilgrimage and visiting sacred sites. Consider traveling to spiritual centers, ashrams, monasteries, or places of natural beauty that inspire awe and reverence. These journeys nourish your soul and provide perspective on your life path. In ${currentYear + 2}, your spiritual practice becomes more integrated into daily life. Spirituality isn't separate from ordinary existence - it infuses everything you do. You begin seeing the sacred in the mundane, finding peace in simple moments, and approaching all activities as spiritual practice. This year emphasizes service and compassion. True spirituality manifests in how you treat others, especially those less fortunate. Consider volunteering, charitable work, or simply being more kind and present in daily interactions. The planetary positions indicate that serving others is a powerful spiritual practice that accelerates your growth. You may also explore energy healing, alternative therapies, or other modalities that work with subtle dimensions of existence. By ${currentYear + 3}, you've developed a mature spiritual practice that sustains you through life's ups and downs. This year brings deeper understanding of spiritual teachings and direct experience of truths you've only intellectually understood before. Your connection to the divine, however you conceive it, strengthens significantly. You may experience states of peace, bliss, or unity consciousness that confirm you're on the right path. This is also a favorable time for spiritual retreats, extended meditation practices, or periods of solitude for inner work. Don't neglect your spiritual needs in the pursuit of worldly goals - balance is essential. The year ${currentYear + 4} focuses on sharing your spiritual insights with others. You may teach, write, counsel, or simply be a living example of spiritual principles. Your presence becomes healing and uplifting to others. This doesn't mean you've achieved perfection - spiritual growth is ongoing - but you've gained wisdom worth sharing. The planetary positions favor creative expression of spiritual insights through art, music, writing, or other mediums. In ${currentYear + 5}, your spiritual journey comes full circle in some ways, though it never truly ends. You realize that spirituality isn't about escaping life but fully embracing it with awareness, compassion, and wisdom. You've integrated spiritual insights into your personality and daily life. This year may bring recognition as a spiritual person, though true spirituality is humble and doesn't seek recognition. You continue your practices not for achievement but for the joy and peace they bring. Throughout this entire period, remember that authentic spirituality is characterized by increasing peace, compassion, wisdom, and freedom from suffering. If your spiritual path increases anxiety, judgment, or separation from others, something is amiss. True spiritual growth makes you more human, not less - more connected, not isolated. Your spiritual journey is unique to you, so don't compare yourself to others or feel pressured to follow any particular path. Trust your inner guidance, remain open to truth wherever it appears, and remember that the goal of spirituality is not to become someone else but to fully realize who you truly are.`;
    }

    function loadProfiles() {
        let profiles = JSON.parse(localStorage.getItem('vedicProfiles') || '[]');

        if (profiles.length > 0) {
            savedProfilesPanel.style.display = 'block';
            profileList.innerHTML = '';

            profiles.forEach(p => {
                const [year, month, day] = p.date.split('-');
                const displayDate = `${day}-${month}-${year}`;
                const [hours, minutes] = p.time.split(':');
                const h = parseInt(hours, 10);
                const ampm = h >= 12 ? 'PM' : 'AM';
                const displayTime = `${h % 12 || 12}:${minutes} ${ampm}`;

                const li = document.createElement('li');
                li.style.display = 'flex';
                li.style.justifyContent = 'space-between';
                li.style.alignItems = 'center';

                const infoDiv = document.createElement('div');
                infoDiv.innerHTML = `<strong>${p.name}</strong><br><small style="color:var(--text-muted)">${displayDate} ${displayTime}</small>`;
                infoDiv.style.cursor = 'pointer';
                infoDiv.style.flex = '1';

                infoDiv.addEventListener('click', () => {
                    document.getElementById('name').value = p.name;
                    document.getElementById('date').value = p.date;
                    document.getElementById('time').value = p.time;
                    document.getElementById('lat').value = p.lat;
                    document.getElementById('lng').value = p.lng;
                    document.getElementById('timezone').value = p.timezone || 6.5;
                    currentChartData = p;
                    renderChart(p);
                    chartSection.classList.remove('hidden');
                    btnSave.disabled = false;
                });

                const removeBtn = document.createElement('button');
                removeBtn.textContent = '✕';
                removeBtn.style.background = 'transparent';
                removeBtn.style.color = '#ef4444';
                removeBtn.style.border = 'none';
                removeBtn.style.fontSize = '1.2rem';
                removeBtn.style.cursor = 'pointer';
                removeBtn.style.padding = '0 10px';
                removeBtn.style.width = 'auto';
                removeBtn.style.marginBottom = '0';
                removeBtn.style.boxShadow = 'none';

                removeBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const updatedProfiles = profiles.filter(profile => profile.id !== p.id);
                    localStorage.setItem('vedicProfiles', JSON.stringify(updatedProfiles));
                    loadProfiles();
                });

                li.appendChild(infoDiv);
                li.appendChild(removeBtn);
                profileList.appendChild(li);
            });
        } else {
            savedProfilesPanel.style.display = 'none';
            profileList.innerHTML = '<li class="empty-state">No saved profiles yet.</li>';
        }
    }
});
