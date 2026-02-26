// Bazi Logic - Heavenly Stems and Earthly Branches Calculations

const stems = [
    { pinyin: "Jia", element: "Wood", polarity: "+", char: "甲", colorClass: "wood" },
    { pinyin: "Yi", element: "Wood", polarity: "-", char: "乙", colorClass: "wood" },
    { pinyin: "Bing", element: "Fire", polarity: "+", char: "丙", colorClass: "fire" },
    { pinyin: "Ding", element: "Fire", polarity: "-", char: "丁", colorClass: "fire" },
    { pinyin: "Wu", element: "Earth", polarity: "+", char: "戊", colorClass: "earth" },
    { pinyin: "Ji", element: "Earth", polarity: "-", char: "己", colorClass: "earth" },
    { pinyin: "Geng", element: "Metal", polarity: "+", char: "庚", colorClass: "metal" },
    { pinyin: "Xin", element: "Metal", polarity: "-", char: "辛", colorClass: "metal" },
    { pinyin: "Ren", element: "Water", polarity: "+", char: "壬", colorClass: "water" },
    { pinyin: "Gui", element: "Water", polarity: "-", char: "癸", colorClass: "water" }
];

const branches = [
    { pinyin: "Zi", animal: "Rat", element: "Water", char: "子", colorClass: "water" },
    { pinyin: "Chou", animal: "Ox", element: "Earth", char: "丑", colorClass: "earth" },
    { pinyin: "Yin", animal: "Tiger", element: "Wood", char: "寅", colorClass: "wood" },
    { pinyin: "Mao", animal: "Rabbit", element: "Wood", char: "卯", colorClass: "wood" },
    { pinyin: "Chen", animal: "Dragon", element: "Earth", char: "辰", colorClass: "earth" },
    { pinyin: "Si", animal: "Snake", element: "Fire", char: "巳", colorClass: "fire" },
    { pinyin: "Wu", animal: "Horse", element: "Fire", char: "午", colorClass: "fire" },
    { pinyin: "Wei", animal: "Goat", element: "Earth", char: "未", colorClass: "earth" },
    { pinyin: "Shen", animal: "Monkey", element: "Metal", char: "申", colorClass: "metal" },
    { pinyin: "You", animal: "Rooster", element: "Metal", char: "酉", colorClass: "metal" },
    { pinyin: "Xu", animal: "Dog", element: "Earth", char: "戌", colorClass: "earth" },
    { pinyin: "Hai", animal: "Pig", element: "Water", char: "亥", colorClass: "water" }
];

// Simplified Solar Term rules (Gregorian Month approximations for Bazi)
const monthBranches = [
    { month: 1, branchIdx: 1 },  // Jan -> Chou
    { month: 2, branchIdx: 2 },  // Feb -> Yin
    { month: 3, branchIdx: 3 },  // Mar -> Mao
    { month: 4, branchIdx: 4 },  // Apr -> Chen
    { month: 5, branchIdx: 5 },  // May -> Si
    { month: 6, branchIdx: 6 },  // Jun -> Wu
    { month: 7, branchIdx: 7 },  // Jul -> Wei
    { month: 8, branchIdx: 8 },  // Aug -> Shen
    { month: 9, branchIdx: 9 },  // Sep -> You
    { month: 10, branchIdx: 10 },// Oct -> Xu
    { month: 11, branchIdx: 11 },// Nov -> Hai
    { month: 12, branchIdx: 0 }  // Dec -> Zi
];

function calculateBazi(dateObj) {
    let year = dateObj.getFullYear();
    let month = dateObj.getMonth() + 1; // 1-12
    let day = dateObj.getDate();
    let hour = dateObj.getHours();

    // Approximate Li Chun (Start of Solar Year) - usually Feb 4th
    let isPreviousYear = month === 1 || (month === 2 && day < 4);
    let baziYear = isPreviousYear ? year - 1 : year;

    // --- 1. YEAR PILLAR ---
    let yearStemIdx = (baziYear - 3 + 10) % 10;
    if (yearStemIdx === 0) yearStemIdx = 10;
    yearStemIdx -= 1;

    let yearBranchIdx = (baziYear - 3 + 12) % 12;
    if (yearBranchIdx === 0) yearBranchIdx = 12;
    yearBranchIdx -= 1;

    // --- 2. MONTH PILLAR ---
    let baziMonth = day < 5 ? (month === 1 ? 12 : month - 1) : month;
    let monthBranchRule = monthBranches.find(m => m.month === baziMonth);
    let monthBranchIdx = monthBranchRule.branchIdx;

    let monthStemStartIdx = 0;
    let ys = yearStemIdx;
    if (ys === 0 || ys === 5) monthStemStartIdx = 2; // Bing
    else if (ys === 1 || ys === 6) monthStemStartIdx = 4; // Wu
    else if (ys === 2 || ys === 7) monthStemStartIdx = 6; // Geng
    else if (ys === 3 || ys === 8) monthStemStartIdx = 8; // Ren
    else monthStemStartIdx = 0; // Jia

    let offset = (monthBranchIdx - 2 + 12) % 12;
    let monthStemIdx = (monthStemStartIdx + offset) % 10;

    // --- 3. DAY PILLAR ---
    let d1 = new Date(1900, 0, 1);
    let d2 = new Date(year, month - 1, day);
    let timeDiff = d2.getTime() - d1.getTime();
    let daysDiff = Math.floor(timeDiff / (1000 * 3600 * 24));

    let dayStemIdx = (0 + daysDiff) % 10;
    let dayBranchIdx = (10 + daysDiff) % 12;
    if (dayStemIdx < 0) dayStemIdx += 10;
    if (dayBranchIdx < 0) dayBranchIdx += 12;

    // --- 4. HOUR PILLAR ---
    let hourBranchIdx = Math.floor(((hour + 1) % 24) / 2);

    let hourStemStartIdx = 0;
    let ds = dayStemIdx;
    if (ds === 0 || ds === 5) hourStemStartIdx = 0; // Jia
    else if (ds === 1 || ds === 6) hourStemStartIdx = 2; // Bing
    else if (ds === 2 || ds === 7) hourStemStartIdx = 4; // Wu
    else if (ds === 3 || ds === 8) hourStemStartIdx = 6; // Geng
    else hourStemStartIdx = 8; // Ren

    let hourStemIdx = (hourStemStartIdx + hourBranchIdx) % 10;

    return {
        year: { stem: stems[yearStemIdx], branch: branches[yearBranchIdx] },
        month: { stem: stems[monthStemIdx], branch: branches[monthBranchIdx] },
        day: { stem: stems[dayStemIdx], branch: branches[dayBranchIdx] },
        hour: { stem: stems[hourStemIdx], branch: branches[hourBranchIdx] }
    };
}

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('bazi-form');
    const resultSection = document.getElementById('bazi-result');
    const container = document.getElementById('pillars-container');
    const readingDiv = document.getElementById('bazi-reading');
    const saveBtn = document.getElementById('btn-save-bazi');
    const baziNameInput = document.getElementById('bazi-name');
    const categorySelect = document.getElementById('bazi-question-category');
    const customQuestionInput = document.getElementById('bazi-custom-question');

    // Toggle custom question input
    categorySelect.addEventListener('change', (e) => {
        if (e.target.value === 'other') {
            customQuestionInput.style.display = 'block';
            customQuestionInput.required = true;
        } else {
            customQuestionInput.style.display = 'none';
            customQuestionInput.required = false;
        }
    });

    // Saved Profiles Element
    const sidebar = document.getElementById('sidebar');
    const profileList = document.getElementById('profile-list');

    let currentBaziData = null;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const dateInput = document.getElementById('bazi-date').value;
        const timeInput = document.getElementById('bazi-time').value;
        const locationInput = document.getElementById('bazi-location').value;
        const genderInput = document.getElementById('bazi-gender').value;
        const nameInput = baziNameInput.value;
        const category = categorySelect.value;
        const question = customQuestionInput.value;
        const periodStart = document.getElementById('bazi-period-start').value;
        const periodEnd = document.getElementById('bazi-period-end').value;

        if (!dateInput || !timeInput || !locationInput || !genderInput || !nameInput) return;

        const [y, m, d] = dateInput.split('-');
        const [h, min] = timeInput.split(':');
        const birthDate = new Date(y, m - 1, d, h, min);

        const bazi = calculateBazi(birthDate);

        currentBaziData = {
            id: Date.now().toString(),
            name: nameInput,
            date: dateInput,
            time: timeInput,
            location: locationInput,
            gender: genderInput,
            category: category,
            question: question,
            periodStart: periodStart,
            periodEnd: periodEnd,
            timestamp: new Date().toLocaleString()
        };

        renderBazi(bazi, locationInput, genderInput, birthDate, category, question, periodStart, periodEnd);
        saveBtn.disabled = false;
    });

    function renderBazi(bazi, location, gender, birthDate, category, question, periodStart, periodEnd) {
        resultSection.classList.remove('hidden');
        container.innerHTML = '';

        const renderPillar = (title, data, isDayMaster) => {
            return `
                <div class="pillar-card">
                    ${isDayMaster ? '<div class="day-master-badge">Day Master</div>' : ''}
                    <div class="pillar-title">${title}</div>
                    
                    <div class="stem ${data.stem.colorClass}">
                        <div class="element-symbol">${data.stem.char}</div>
                        <div class="element-name">${data.stem.element} ${data.stem.polarity}</div>
                        <div class="pinyin">${data.stem.pinyin}</div>
                    </div>

                    <div class="branch ${data.branch.colorClass}">
                        <div class="element-symbol">${data.branch.char}</div>
                        <div class="element-name">${data.branch.animal}</div>
                        <div class="pinyin">${data.branch.pinyin}</div>
                    </div>
                </div>
            `;
        };

        // Render standard order: Year, Month, Day, Hour
        container.innerHTML += renderPillar('Year Pillar (Ancestors/Early Life)', bazi.year, false);
        container.innerHTML += renderPillar('Month Pillar (Parents/Career)', bazi.month, false);
        container.innerHTML += renderPillar('Day Pillar (Self/Spouse)', bazi.day, true);
        container.innerHTML += renderPillar('Hour Pillar (Children/Late Life)', bazi.hour, false);

        const dm = bazi.day.stem;
        let reading = `
            <div style="border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 20px; margin-bottom: 20px;">
                <h3 style="margin-top: 0;">User Authentic BaZi Chart Generated</h3>
                <p style="margin-bottom: 5px;"><strong>Date:</strong> ${birthDate.toDateString()} at ${birthDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
                <p style="margin-bottom: 5px;"><strong>Location:</strong> ${location}</p>
                <p style="margin-bottom: 5px;"><strong>Gender:</strong> ${gender.charAt(0).toUpperCase() + gender.slice(1)}</p>
                <p style="color: var(--accent-glow); margin-top: 15px;">Your Day Master (Core Self): <strong>${dm.element} ${dm.polarity} (${dm.pinyin})</strong></p>
            </div>
        `;

        if (!category || category === 'all') {
            // 1. Personality
            reading += `<h4>🎭 Personality Assessment</h4>`;
            if (dm.element === 'Wood' && dm.polarity === '+') {
                reading += `<p>Like a strong, sturdy tree (Jia Wood), you are resilient, determined, and protective. You grow steadily upwards and provide shelter, but can be inflexible if pushed too hard. You are reliable and deeply rooted in your convictions.</p>`;
            } else if (dm.element === 'Wood' && dm.polarity === '-') {
                reading += `<p>Like flexible ivy (Yi Wood), you are highly adaptable, gentle, and brilliant at networking. You know how to maneuver around obstacles and thrive in complex environments by bending rather than breaking.</p>`;
            } else if (dm.element === 'Fire' && dm.polarity === '+') {
                reading += `<p>Like the radiant Sun (Bing Fire), you are exceptionally warm, generous, and highly visible. You naturally bring light and inspiration to others, living life with an infectious, grand passion.</p>`;
            } else if (dm.element === 'Fire' && dm.polarity === '-') {
                reading += `<p>Like a flickering candle (Ding Fire), you are inspiring, illuminating, and intensely focused. You possess profound inner passion, acting as a sensitive, intuitive guide in dark places.</p>`;
            } else if (dm.element === 'Earth' && dm.polarity === '+') {
                reading += `<p>Like a massive mountain (Wu Earth), you are solid, reliable, and deeply grounded. People trust your immense stability. You represent an immovable foundation, though you resist sudden change.</p>`;
            } else if (dm.element === 'Earth' && dm.polarity === '-') {
                reading += `<p>Like rich, fertile soil (Ji Earth), you are highly nurturing, resourceful, and productive. You possess a unique ability to cultivate ideas and care for others, easily adapting to support collective growth.</p>`;
            } else if (dm.element === 'Metal' && dm.polarity === '+') {
                reading += `<p>Like unrefined ore or a heavy axe (Geng Metal), you are tough, enduring, and brutally straightforward. You value justice, loyalty, and efficiency, executing tasks directly with uncompromising willpower.</p>`;
            } else if (dm.element === 'Metal' && dm.polarity === '-') {
                reading += `<p>Like fine jewelry (Xin Metal), you are refined, glamorous, and value aesthetics profoundly. You seek perfection and command attention through your unique shine, utilizing sharp intellect over brute force.</p>`;
            } else if (dm.element === 'Water' && dm.polarity === '+') {
                reading += `<p>Like a powerful ocean (Ren Water), you are intensely dynamic, unstoppable, and highly intelligent. Your mind is always in motion, capable of vast depths, navigating easily through any circumstance.</p>`;
            } else if (dm.element === 'Water' && dm.polarity === '-') {
                reading += `<p>Like morning dew or mist (Gui Water), you are incredibly intuitive, gentle, and imaginative. You penetrate barriers through persistent, quiet action and possess profound emotional sensitivity.</p>`;
            }

            // Generate synthetic holistic readings based on element matching (simplified structural algorithm)
            const isFavorableWealth = (dm.element === "Wood" && bazi.month.stem.element === "Earth") || (dm.element === "Fire" && bazi.year.stem.element === "Metal") || (bazi.hour.stem.element === "Water");

            // 2. Wealth Level
            reading += `<h4>💰 Wealth Level & Financial Destiny</h4>`;
            if (isFavorableWealth) {
                reading += `<p>Your chart indicates a <strong>strong affinity for wealth accumulation</strong>. Income flows naturally through business ventures, leadership roles, or real estate (represented by your strong Earth/Metal combinations). You possess entrepreneurial instincts; learning to leverage other people's resources will unlock your highest financial tier.</p>`;
            } else {
                reading += `<p>Your chart indicates a <strong>steady, secure wealth profile</strong>. Rather than sudden windfalls, your financial growth relies on professional expertise, direct salary, and disciplined saving. Cultivating a specialized skill or acquiring professional licenses is your truest path to long-term financial freedom.</p>`;
            }

            // 3. Career Peak
            reading += `<h4>📈 Career Peak Analysis</h4>`;
            reading += `<p>Your career sector (located in your Month Pillar: ${bazi.month.stem.element} ${bazi.month.branch.animal}) suggests your primary professional drive peaks in your <strong>mid-30s to late 40s</strong>. The presence of the ${bazi.month.branch.animal} indicates you will excel in highly analytical, communicative, or leadership-driven environments. Do not rush to the top; your foundation built before age 30 will entirely support your massive elevation later.</p>`;

            // 4. Marriage Destiny
            reading += `<h4>💍 Marriage Destiny & Relationships</h4>`;
            reading += `<p>The Spouse Palace (located in your Day Branch: ${bazi.day.branch.animal}) dictates your marriage destiny. Because your Day Branch is a <strong>${bazi.day.branch.animal}</strong>, you require a partner who is intellectually stimulating, loyal, and capable of giving you independent space. The chart favors waiting until after your first Saturn return (age 28-30) for a highly successful, lifelong marriage commitment.</p>`;

            // 5. Major Life Cycles (The 4 Pillars Breakdown)
            reading += `<h4>⏳ Major Life Cycles (Pillar Analysis)</h4>`;
            reading += `<ul style="color: var(--text-light); line-height: 1.6; margin-bottom: 20px;">`;
            reading += `<li><strong>Ages 0-20 (Year Pillar - Ancestors):</strong> Governed by ${bazi.year.stem.element} ${bazi.year.branch.animal}. This signifies a foundational era influenced heavily by family karma, early education, and your ancestral roots.</li>`;
            reading += `<li><strong>Ages 21-40 (Month Pillar - Career):</strong> Governed by ${bazi.month.stem.element} ${bazi.month.branch.animal}. This is your prime building phase, where your societal role, primary career path, and interactions with superiors shape your life.</li>`;
            reading += `<li><strong>Ages 41-60 (Day Pillar - Self/Spouse):</strong> Governed by ${bazi.day.stem.element} ${bazi.day.branch.animal}. Your era of self-actualization. This period focuses intensely on your core identity, marriage, and realizing your personal potential.</li>`;
            reading += `<li><strong>Ages 61+ (Hour Pillar - Legacy):</strong> Governed by ${bazi.hour.stem.element} ${bazi.hour.branch.animal}. Represents your later years, relationship with children/subordinates, and the ultimate legacy, wealth, or wisdom you leave behind.</li>`;
            reading += `</ul>`;

            // 6. Upcoming Luck Trends
            reading += `<h4>✨ Upcoming Luck Trends (Direct Prediction)</h4>`;
            const derivedYear = birthDate.getFullYear();
            const nextYearElement = (derivedYear % 2 === 0) ? "Wood" : "Water"; // Fake deterministic logic for app feel
            reading += `<p>In the immediate upcoming 12-24 months, the dominant cosmic energy shifting into your chart is heavily influenced by <strong>${nextYearElement}</strong>. Because of this, you will experience a dramatic increase in your social networking and educational opportunities. <strong>Direct Prediction:</strong> Prepare for a significant shift in your physical location or a major pivot in your career duties within the next 18 months. Save cash liquidly and embrace the change—it represents a massive upward leap in your life cycle.</p>`;
        } else {
            // 7. Specific Focus Area / Question
            reading += `<h4>🎯 Specific Focus Insight</h4>`;

            let timeframeText = '';
            if (periodStart && periodEnd) {
                const startStr = new Date(periodStart).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
                const endStr = new Date(periodEnd).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
                timeframeText = ` during the specified period of <strong>${startStr} to ${endStr}</strong>`;
            }

            if (category === 'other' && question) {
                reading += `<p style="color: var(--accent-glow); margin-bottom: 10px;"><em>Your Question: "${question}"</em></p>`;
                reading += `<p>Based on the elemental balance of your BaZi chart, addressing this specific inquiry requires leveraging your strong ${dm.element} nature${timeframeText}. Since this is a highly specific query, the chart suggests patience and strategic alignment. The outcome heavily depends on taking calculated, decisive action without acting purely on emotion.</p>`;
            } else {
                const catLabels = { career: 'Career', money: 'Wealth', love: 'Relationships', health: 'Health', business: 'Business', family: 'Family', travel: 'Travel', legal: 'Legal Matters', spiritual: 'Spiritual Growth' };
                reading += `<p>Focusing purely on <strong>${catLabels[category]}</strong>${timeframeText}, the BaZi energy indicates a significant turning point. You must utilize the hidden strengths of your ${dm.polarity === '+' ? 'Yang' : 'Yin'} ${dm.element} profile. If you feel stagnated, it is because your current environment is not feeding your core element. Realigning your daily habits and environment to match your Day Master will unlock the exact breakthrough you seek in this area.</p>`;
            }
        }

        readingDiv.innerHTML = reading;

        // Scroll into view smoothly
        readingDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    // --- Saved Profiles Logic ---

    function getSavedProfiles() {
        return JSON.parse(localStorage.getItem('savedBaziProfiles')) || [];
    }

    function saveProfile(profile) {
        const profiles = getSavedProfiles();
        profiles.push(profile);
        localStorage.setItem('savedBaziProfiles', JSON.stringify(profiles));
        renderProfileList();
    }

    function deleteProfile(id) {
        let profiles = getSavedProfiles();
        profiles = profiles.filter(p => p.id !== id);
        localStorage.setItem('savedBaziProfiles', JSON.stringify(profiles));
        renderProfileList();
    }

    saveBtn.addEventListener('click', () => {
        if (currentBaziData) {
            saveProfile(currentBaziData);
            saveBtn.innerText = "Saved!";
            saveBtn.disabled = true;
            sidebar.style.display = 'block'; // Ensure panel is visible when saved

            setTimeout(() => {
                saveBtn.innerText = "Save Profile";
                // Don't re-enable unless a new chart is run
            }, 2000);
        }
    });

    function renderProfileList() {
        const profiles = getSavedProfiles();
        profileList.innerHTML = '';

        if (profiles.length === 0) {
            sidebar.style.display = 'none'; // Hide if empty just like main app
            profileList.innerHTML = `<li class="empty-state">No saved profiles yet.</li>`;
            return;
        }

        sidebar.style.display = 'block';

        profiles.forEach(p => {
            const li = document.createElement('li');
            li.style.display = 'flex';
            li.style.justifyContent = 'space-between';
            li.style.alignItems = 'center';

            const [year, month, day] = p.date.split('-');
            const displayDate = `${day}-${month}-${year}`;
            const [hours, minutes] = p.time.split(':');
            const h = parseInt(hours, 10);
            const ampm = h >= 12 ? 'PM' : 'AM';
            const displayTime = `${h % 12 || 12}:${minutes} ${ampm}`;

            const infoDiv = document.createElement('div');
            infoDiv.innerHTML = `<strong>${p.name}</strong><br><small style="color:var(--text-muted)">${displayDate} ${displayTime} • ${p.location}</small>`;
            infoDiv.style.cursor = 'pointer';
            infoDiv.style.flex = '1';

            infoDiv.addEventListener('click', () => {
                // Populate form and automatically trigger calculation
                document.getElementById('bazi-name').value = p.name;
                document.getElementById('bazi-date').value = p.date;
                document.getElementById('bazi-time').value = p.time;
                document.getElementById('bazi-location').value = p.location;
                document.getElementById('bazi-gender').value = p.gender;

                if (p.category) document.getElementById('bazi-question-category').value = p.category;
                if (p.question) {
                    document.getElementById('bazi-custom-question').value = p.question;
                    document.getElementById('bazi-custom-question').style.display = p.category === 'other' ? 'block' : 'none';
                }
                if (p.periodStart) document.getElementById('bazi-period-start').value = p.periodStart;
                if (p.periodEnd) document.getElementById('bazi-period-end').value = p.periodEnd;

                // Programmatically submit
                form.dispatchEvent(new Event('submit'));
            });

            const deleteBtn = document.createElement('button');
            deleteBtn.innerHTML = '✕';
            deleteBtn.style.background = 'transparent';
            deleteBtn.style.color = '#ef4444';
            deleteBtn.style.border = 'none';
            deleteBtn.style.fontSize = '1.2rem';
            deleteBtn.style.cursor = 'pointer';
            deleteBtn.style.padding = '0 10px';
            deleteBtn.style.width = 'auto';
            deleteBtn.style.marginBottom = '0';
            deleteBtn.style.boxShadow = 'none';

            deleteBtn.addEventListener('click', (e) => {
                e.stopPropagation(); // prevent triggering the load click
                if (confirm(`Are you sure you want to delete ${p.name}'s Bazi profile?`)) {
                    deleteProfile(p.id);
                }
            });

            li.appendChild(infoDiv);
            li.appendChild(deleteBtn);
            profileList.appendChild(li);
        });
    }

    // Initial render of list in background
    renderProfileList();
});
