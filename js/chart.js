/**
 * Draws a North Indian style Vedic Astrology Chart (SVG)
 * using the calculated houses data.
 */

window.ChartDrawer = {
    drawNorthIndianChart: function (houses, lagnaSign, elementId, chartTitle) {
        const container = document.getElementById(elementId);
        container.innerHTML = ''; // clear

        // ViewBox 400x400
        const svgStart = `<svg viewBox="0 0 400 400" width="100%" height="100%" style="background: rgba(15,23,42,0.6); border-radius: 8px;">`;
        const svgEnd = `</svg>`;

        // Draw the main grid for North Indian Chart
        // Outer square
        const lines = `
            <rect x="10" y="10" width="380" height="380" fill="none" stroke="var(--accent-glow)" stroke-width="2"/>
            <line x1="10" y1="10" x2="390" y2="390" stroke="var(--accent-glow)" stroke-width="1"/>
            <line x1="10" y1="390" x2="390" y2="10" stroke="var(--accent-glow)" stroke-width="1"/>
            <polygon points="200,10 390,200 200,390 10,200" fill="rgba(251, 191, 36, 0.05)" stroke="var(--accent-glow)" stroke-width="2"/>
        `;

        // Positions for the 12 Houses (approximate center of each diamond/triangle part)
        // Array of {x, y} corresponding to House 1 to House 12
        const hPos = [
            { x: 200, y: 100 }, // H1 (Top Diamond)
            { x: 100, y: 50 },  // H2 (Top Left Triangle)
            { x: 50, y: 100 }, // H3 (Left Top Triangle)
            { x: 100, y: 200 }, // H4 (Left Diamond)
            { x: 50, y: 300 }, // H5 (Left Bottom Triangle)
            { x: 100, y: 350 }, // H6 (Bottom Left Triangle)
            { x: 200, y: 300 }, // H7 (Bottom Diamond)
            { x: 300, y: 350 }, // H8 (Bottom Right Triangle)
            { x: 350, y: 300 }, // H9 (Right Bottom Triangle)
            { x: 300, y: 200 }, // H10(Right Diamond)
            { x: 350, y: 100 }, // H11(Right Top Triangle)
            { x: 300, y: 50 }   // H12(Top Right Triangle)
        ];

        let textElements = '';

        // Loop through 12 houses to draw the Zodiac Sign numbers and Planets
        for (let i = 0; i < 12; i++) {
            const currentSign = ((lagnaSign + i - 1) % 12) + 1;
            const x = hPos[i].x;
            const y = hPos[i].y;

            // Draw Zodiac Sign Number (small text)
            textElements += `<text x="${x}" y="${y - 18}" fill="rgba(251, 191, 36, 0.6)" font-size="12" font-family="Outfit" text-anchor="middle" font-weight="bold">${currentSign}</text>`;

            // Draw Planets in this house
            let planetsHtml = houses[i].map(p => p.name).join(' ');
            if (planetsHtml) {
                textElements += `<text x="${x}" y="${y + 5}" fill="var(--text-light)" font-size="15" font-family="Outfit" text-anchor="middle" font-weight="600" filter="drop-shadow(0px 2px 4px rgba(0,0,0,0.8))">${planetsHtml}</text>`;
            }
        }

        container.innerHTML = svgStart + lines + textElements + svgEnd + `<p style="text-align: center; margin-top: 10px; color: var(--accent-purple); font-weight: 600;">${chartTitle || 'Birth Chart'}</p><p style="text-align: center; color: var(--text-muted); font-size: 0.9rem;">Lagna: Sign ${lagnaSign}</p>`;
    }
};
