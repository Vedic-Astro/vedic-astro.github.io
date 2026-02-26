const zodiacData = [
    {
        sign: "Aries", icon: "♈", dates: "Mar 21 - Apr 19", element: "Fire", ruler: "Mars", quality: "Cardinal",
        summary: "As the first sign in the zodiac, the presence of Aries always marks the beginning of something energetic and turbulent. They are continuously looking for dynamic, speed and competition.",
        strengths: "Courageous, determined, confident, enthusiastic, optimistic.",
        weaknesses: "Impatient, moody, short-tempered, impulsive, aggressive.",
        likes: "Comfortable clothes, taking on leadership roles, physical challenges, individual sports.",
        dislikes: "Inactivity, delays, work that does not use one's talents.",
        color: "Red",
        luckyDay: "Tuesday",
        spiritAnimal: "Ram / Hawk",
        behavior: "Aries acts before they think. They dive headfirst into challenges, driven by a fierce desire to be number one and an endless supply of physical energy.",
        love: "Aries is a fire sign with the need to take initiative when it comes to romance. When they fall in love, they will express their feelings to the person they are in love with, without even giving it a considerable thought.",
        career: "This is an area of life in which Aries shine the brightest. Their natural leadership skills make them prefer to give orders rather than receive them. Their speed of mind and vast energy helps them always be one step ahead.",
        health: "Ruled by the head, Aries must watch out for stress-induced headaches and migraines. Regular, intense physical exercise is mandatory to burn off their excess adrenaline.",
        wealth: "Aries can earn money as quickly as they spend it. They aren't afraid of high-risk, high-reward ventures, but need to practice budgeting for long-term security.",
        daily: "Today brings a sudden burst of energy. Tackle that project you've been putting off—your ruling planet Mars is giving you the momentum you need.",
        weekly: "This week requires patience, which is not your strong suit. Practice stepping back and letting others speak before you react to avoid unnecessary conflicts.",
        monthly: "A month of new beginnings. There will be an opportunity to take the lead in a group setting. Trust your instincts but guard your fiery temper.",
        yearly: "This year, your focus shifts from immediate gratification to long-term empire building. Pace yourself early on so you don't burn out by autumn."
    },
    {
        sign: "Taurus", icon: "♉", dates: "Apr 20 - May 20", element: "Earth", ruler: "Venus", quality: "Fixed",
        summary: "Practical and well-grounded, Taurus is the sign that harvests the fruits of labor. They feel the need to always be surrounded by love and beauty, turned to the material world, hedonism, and physical pleasures.",
        strengths: "Reliable, patient, practical, devoted, responsible, stable.",
        weaknesses: "Stubborn, possessive, uncompromising.",
        likes: "Gardening, cooking, music, romance, high quality clothes, working with hands.",
        dislikes: "Sudden changes, complications, insecurity of any kind, synthetic fabrics.",
        color: "Green, Pink",
        luckyDay: "Friday",
        spiritAnimal: "Bull / Bear",
        behavior: "Taurus is steady and deliberate. They prefer a slow, methodical approach to guarantee success and deeply resent being pushed, rushed, or forced into sudden changes.",
        love: "Taurus is extremely sensual and appreciates touch over all other senses. When they find love, they want it to last forever and are extremely devoted and loyal partners.",
        career: "Stability is the keyword for their career. They will work hard to attain the wealth that makes their life comfortable. They are excellent with finances and long-term investments.",
        health: "Ruling the throat and neck, Taurus is prone to sore throats and thyroid issues. They must balance their love of rich, decadent foods with regular, moderate exercise.",
        wealth: "Taurus is the ultimate wealth builder. They absolutely hate financial insecurity, so they meticulously build savings, invest in real estate, and acquire tangible, permanent assets.",
        daily: "A slow and steady approach is needed today. Don't let someone else's artificial urgency derail your carefully crafted and peaceful routine.",
        weekly: "Financial matters come into focus. It's a great week to review your budget, but also to indulge in a well-deserved, high-quality treat for yourself.",
        monthly: "Relationships deepen this month. Venus enhances your natural charm, making it an excellent time to reconnect with loved ones or immerse yourself in nature.",
        yearly: "A foundational year. You will lay the groundwork for a major financial or personal milestone that will pay off for the next decade. Stay the course."
    },
    {
        sign: "Gemini", icon: "♊", dates: "May 21 - Jun 20", element: "Air", ruler: "Mercury", quality: "Mutable",
        summary: "Expressive and quick-witted, Gemini represents two different personalities in one and you will never be sure which one you will face. They are sociable, communicative and ready for fun.",
        strengths: "Gentle, affectionate, curious, adaptable, ability to learn quickly.",
        weaknesses: "Nervous, inconsistent, indecisive.",
        likes: "Music, books, magazines, chats with nearly anyone, short trips around the town.",
        dislikes: "Being alone, being confined, repetition and routine.",
        color: "Light-Green, Yellow",
        luckyDay: "Wednesday",
        spiritAnimal: "Twins / Butterfly",
        behavior: "Gemini flits from idea to idea. They are highly adaptable and communicative, constantly seeking new information, intellectual stimulation, and colorful social interactions.",
        love: "Fun and always ready for an intellectual challenge, Gemini sees love first through communication and verbal contact. They need an intellect that matches theirs.",
        career: "They need a job that challenges their intellect. They are skillful, inventive and often very smart, so their work has to be dynamic and socially oriented.",
        health: "Ruling the nervous system and lungs, Gemini's mind never stops, causing chronic anxiety and insomnia. Deep breathing exercises and reducing caffeine are essential.",
        wealth: "Gemini can have multiple streams of income at once. However, they can be impulsive shoppers, buying books, gadgets, or travel tickets on a whim without checking the bank.",
        daily: "Your mind is racing with ideas. Write them down before they escape, and reach out to an old friend—they have an interesting perspective to share with you.",
        weekly: "Communication is key. You might have to clarify a misunderstanding early in the week. Use your natural charm and wit to smooth things over effortlessly.",
        monthly: "A flurry of social activity awaits. Say yes to invitations, as networking this month will open unexpected intellectual doors and potential partnerships.",
        yearly: "This year is all about focusing your scattered energies. By choosing one major passion to pursue deeply, you will achieve mastery rather than just dabbling."
    },
    {
        sign: "Cancer", icon: "♋", dates: "Jun 21 - Jul 22", element: "Water", ruler: "Moon", quality: "Cardinal",
        summary: "Deeply intuitive and sentimental, Cancer can be one of the most challenging zodiac signs to get to know. They are very emotional and sensitive, and care deeply about matters of the family and their home.",
        strengths: "Tenacious, highly imaginative, loyal, emotional, sympathetic.",
        weaknesses: "Moody, pessimistic, suspicious, manipulative, insecure.",
        likes: "Art, home-based hobbies, relaxing near or in water, helping loved ones, a good meal with friends.",
        dislikes: "Strangers, any criticism of Mom, revealing of personal life.",
        color: "White",
        luckyDay: "Monday, Thursday",
        spiritAnimal: "Crab / Wolf",
        behavior: "Cancer leads with their emotions. They meticulously build safe environments for their loved ones, operate on deep intuition, and retreat into their shell when threatened.",
        love: "Cancer is a very emotional sign, and feelings are most important in their relationships. Gentle and caring, they will show their sensibility to the world without thinking.",
        career: "When a job needs to get done, a Cancer will roll their sleeves up and finish it successfully. They perform best when left alone to work, without being micromanaged.",
        health: "Ruling the stomach and chest, Cancers often suffer from emotional eating or digestive issues when stressed. A calm, secure home environment is their best medicine.",
        wealth: "Financially conservative, Cancers hoard money for a rainy day and prioritize buying a home over luxury goods. Security for their family is their primary financial goal.",
        daily: "Emotions are running high today. Retreat to your sanctuary if you feel overwhelmed, and honor your feelings without letting them drown you.",
        weekly: "Your intuition is your best guide this week. A friend may need your nurturing energy; be there for them, but remember to set healthy boundaries for yourself.",
        monthly: "Focus on the home front. Redecorating, organizing, or hosting a family gathering will bring you immense joy and restore your inner peace.",
        yearly: "A year of profound emotional healing. You will learn to let go of a past hurt and build a new, stronger shell of self-confidence that protects your tender heart."
    },
    {
        sign: "Leo", icon: "♌", dates: "Jul 23 - Aug 22", element: "Fire", ruler: "Sun", quality: "Fixed",
        summary: "People born under the sign of Leo are natural born leaders. They are dramatic, creative, self-confident, deeply dominant and extremely difficult to resist, able to achieve anything they want to in any area of life they commit to.",
        strengths: "Creative, passionate, generous, warm-hearted, cheerful, humorous.",
        weaknesses: "Arrogant, stubborn, self-centered, lazy, inflexible.",
        likes: "Theater, taking holidays, being admired, expensive things, bright colors, fun with friends.",
        dislikes: "Being ignored, facing difficult reality, not being treated like a king or queen.",
        color: "Gold, Yellow, Orange",
        luckyDay: "Sunday",
        spiritAnimal: "Lion / Peacock",
        behavior: "Leo demands the spotlight. They act with dramatic flair, enormous generosity, and expect absolute loyalty and adoration from their inner circle in return.",
        love: "This fire sign is passionate and sincere. Their partners need to be self-conscious, reasonable and on the same intellectual level as them. They are fun, loyal and very generous.",
        career: "Leos are highly energetic and tend to always be busy, no matter what happens around them. They are ambitious, creative and highly optimistic.",
        health: "Ruling the heart and spine, Leos must watch their blood pressure and avoid overexerting themselves to maintain their regal posture. Stress management is key.",
        wealth: "Generous to a fault, Leos love to shower their loved ones with expensive gifts. They know how to attract wealth but must ensure they aren't spending it merely for status.",
        daily: "Your charisma is off the charts today. Step into the spotlight and share your creative vision; people are naturally drawn to follow your lead right now.",
        weekly: "Generosity will be the theme. Shower someone you love with affection, but ensure you aren't emptying your own energetic cup in the process of giving.",
        monthly: "A creative project reaches a climax. Don't shy away from claiming credit for your hard work—bask in the well-earned applause and recognition.",
        yearly: "Your year to shine. A major personal goal will be realized, putting you in a position of leadership, public recognition, and immense creative fulfillment."
    },
    {
        sign: "Virgo", icon: "♍", dates: "Aug 23 - Sep 22", element: "Earth", ruler: "Mercury", quality: "Mutable",
        summary: "Virgos are always paying attention to the smallest details and their deep sense of humanity makes them one of the most careful signs of the zodiac. Their methodical approach to life ensures that nothing is left to chance.",
        strengths: "Loyal, analytical, kind, hardworking, practical.",
        weaknesses: "Shyness, worry, overly critical of self and others, all work and no play.",
        likes: "Animals, healthy food, books, nature, cleanliness.",
        dislikes: "Rudeness, asking for help, taking center stage.",
        color: "Grey, Beige, Pale-Yellow",
        luckyDay: "Wednesday",
        spiritAnimal: "Maiden / Fox",
        behavior: "Virgo analyzes everything. They seek order in chaos through acts of service, careful planning, and striving for an unachievable perfection in themselves and others.",
        love: "Virgos need to feel important to their partners. They are dedicated and loyal, often showing love through acts of service rather than grand declarations.",
        career: "Virgos are excellent at tasks requiring organization and meticulous attention to detail. They make great problem solvers and excel in analytical roles.",
        health: "Ruling the digestive system, Virgos are prone to stress-induced stomach issues. A hyper-clean diet, probiotics, and learning to let go of 'perfect' are vital for their health.",
        wealth: "Highly responsible, Virgos rarely splurge. They track every penny on spreadsheets and are brilliant at eliminating waste and saving steadily over time.",
        daily: "Your analytical skills are razor sharp today. It's the perfect time to tackle a complex spreadsheet, organize your living space, or solve a tricky logistical problem.",
        weekly: "Don't let perfectionism paralyze you. Remind yourself that 'good enough' is truly good enough this week. Remember to rest your perpetually busy mind.",
        monthly: "Health and daily habits are highlighted. Implementing a new wellness routine or dietary shift now will have long-lasting, positive effects on your baseline energy.",
        yearly: "A year of mastery and refinement. Your invisible dedication to your craft will finally catch the eye of someone important, leading to a significant professional step up."
    },
    {
        sign: "Libra", icon: "♎", dates: "Sep 23 - Oct 22", element: "Air", ruler: "Venus", quality: "Cardinal",
        summary: "People born under the sign of Libra are peaceful, fair, and they hate being alone. Partnership is very important for them, as their mirror and someone giving them the ability to be the mirror themselves.",
        strengths: "Cooperative, diplomatic, gracious, fair-minded, social.",
        weaknesses: "Indecisive, avoids confrontations, will carry a grudge, self-pity.",
        likes: "Harmony, gentleness, sharing with others, the outdoors.",
        dislikes: "Violence, injustice, loudmouths, conformity.",
        color: "Pink, Green",
        luckyDay: "Friday",
        spiritAnimal: "Scales / Swan",
        behavior: "Libra constantly weighs their options. They act as the diplomat in every room, seeking flawless harmony, avoiding harsh conflict, and trying to please everyone.",
        love: "Libras are romantic and seek harmony in relationships. They are dedicated partners who strive to maintain peace and balance with their significant other.",
        career: "Maintaining balance and harmony is crucial in their professional life. They excel in careers involving diplomacy, law, or any role that requires negotiation.",
        health: "Ruling the kidneys and lower back, Libras need plenty of hydration and ergonomic support. Their biggest health risk is exhaustion from trying to keep everyone else happy.",
        wealth: "Libras love luxury, art, and beautiful aesthetics, which can drain their bank accounts. They are excellent at negotiating fair contracts but shouldn't let their partners manage all their money.",
        daily: "Balance is your focus today. If you've been working too hard, you must carve out time for beauty, art, and relaxation to restore your equilibrium.",
        weekly: "A minor conflict may arise in your circle. Use your natural diplomacy to mediate, but ensure your own voice isn't completely lost in trying to keep the peace.",
        monthly: "Partnerships are under a lucky star. Whether in business or romance, a joint collaboration formed now will bring mutual success, joy, and aesthetic pleasure.",
        yearly: "This year pushes you to make definitive choices. By stopping the endless weighing of options and trusting your gut, you will propel your life forward beautifully."
    },
    {
        sign: "Scorpio", icon: "♏", dates: "Oct 23 - Nov 21", element: "Water", ruler: "Pluto", quality: "Fixed",
        summary: "Scorpios are passionate and assertive people. They are determined and decisive, and will research until they find out the truth. Scorpio is a great leader, always aware of the situation and also features prominently in resourcefulness.",
        strengths: "Resourceful, brave, passionate, stubborn, a true friend.",
        weaknesses: "Distrusting, jealous, secretive, violent.",
        likes: "Truth, facts, being right, longtime friends, teasing, a grand passion.",
        dislikes: "Dishonesty, revealing secrets, passive people.",
        color: "Scarlet, Red, Rust",
        luckyDay: "Tuesday",
        spiritAnimal: "Scorpion / Phoenix",
        behavior: "Scorpio probes beneath the surface. They operate with intense psychological focus and passion, guarding their own secrets fiercely while uncovering everyone else's.",
        love: "Scorpios are incredibly passionate and desire deep, emotional connections. They are fiercely loyal but also demand absolute honesty and trust from their partners.",
        career: "Scorpios excel at managing, solving, or creating. When they set a goal, there is no giving up. They are fantastic at focusing on complex challenges.",
        health: "Ruling the reproductive organs, Scorpios feel everything intensely. They must find an outlet for their deep-seated resentments, as repressed anger can manifest as physical illness.",
        wealth: "Secretive about their finances, Scorpios are incredibly resourceful. They have a talent for managing other people's money, inheritances, and passive income streams.",
        daily: "Your intuition is piercingly accurate today. Trust your gut feeling about a person or situation; you are picking up on hidden undercurrents that others missed.",
        weekly: "A secret or hidden truth may be revealed. Handle the information with grace, and actively avoid falling into the trap of holding a grudge or seeking revenge.",
        monthly: "A month of intense transformation. Let go of a habit, mindset, or physical attachment that no longer serves you to make room for powerful new energy.",
        yearly: "A year of rebirth. Like the Phoenix, you will rise from the ashes of a challenging situation, emerging stronger, wiser, and more magnetic than ever before."
    },
    {
        sign: "Sagittarius", icon: "♐", dates: "Nov 22 - Dec 21", element: "Fire", ruler: "Jupiter", quality: "Mutable",
        summary: "Curious and energetic, Sagittarius is one of the biggest travelers among all zodiac signs. Their open mind and philosophical view motivates them to wander around the world in search of the meaning of life.",
        strengths: "Generous, idealistic, great sense of humor.",
        weaknesses: "Promises more than can deliver, very impatient, will say anything no matter how undiplomatic.",
        likes: "Freedom, travel, philosophy, being outdoors.",
        dislikes: "Clingy people, being constrained, off-the-wall theories, details.",
        color: "Blue",
        luckyDay: "Thursday",
        spiritAnimal: "Centaur / Owl",
        behavior: "Sagittarius aims for the far horizon. They act with boundless, careless optimism, always seeking the broader truth through travel, study, and blunt honesty.",
        love: "Sagittarius values independence and freedom even in relationships. They seek a partner who is adventurous, open-minded, and willing to explore the world with them.",
        career: "They need dynamism and change in their career. Stagnation is their worst enemy. They make great entrepreneurs, consultants, or travel guides.",
        health: "Ruling the hips and thighs, they are prone to sports injuries due to their active nature. Their notorious optimism can also lead to overindulgence in rich food and drink.",
        wealth: "Ruled by Jupiter, they naturally attract 'luck' and last-minute windfalls. However, they hate budgets and often spend money on experiences, travel, and courses rather than saving.",
        daily: "Your wanderlust is flaring up. Even if you can't book a flight, explore a new neighborhood, read a radical new book, or try a new philosophy today.",
        weekly: "Your blunt honesty might unintentionally hurt someone's feelings. Try to sugarcoat your truth just a little bit this week to maintain social harmony.",
        monthly: "An opportunity for higher learning or long-distance travel presents itself. Say yes—the expansion of your mind and worldview is guaranteed.",
        yearly: "A year of massive philosophical shifts. Your fundamental worldview will expand drastically, bringing profound meaning and exciting adventures to your doorstep."
    },
    {
        sign: "Capricorn", icon: "♑", dates: "Dec 22 - Jan 19", element: "Earth", ruler: "Saturn", quality: "Cardinal",
        summary: "Capricorn is a sign that represents time and responsibility, and its representatives are traditional and often very serious by nature. These individuals possess an inner state of independence that enables significant progress both in their personal and professional lives.",
        strengths: "Responsible, disciplined, self-control, good managers.",
        weaknesses: "Know-it-all, unforgiving, condescending, expecting the worst.",
        likes: "Family, tradition, music, understated status, quality craftsmanship.",
        dislikes: "Almost everything at some point.",
        color: "Brown, Black",
        luckyDay: "Saturday",
        spiritAnimal: "Mountain Goat",
        behavior: "Capricorn scales the mountain slowly but surely. They act with immense discipline, stoicism, and ambition, prioritizing duty, legacy, and material security.",
        love: "Capricorns are serious about relationships and seek stability. They may take time to open up, but once committed, they are incredibly reliable and devoted partners.",
        career: "They are highly ambitious and driven by success and status. Capricorns make excellent managers and leaders due to their disciplined and structured approach.",
        health: "Ruling the bones, joints, and knees, Capricorns can suffer from arthritis and bodily stiffness. They must remember to actively stretch and not work themselves to the bone.",
        wealth: "The ultimate pragmatists, Capricorns always play the long game. They accumulate wealth through calculated investments, promotions, and unyielding frugality.",
        daily: "Your legendary work ethic will carry you through a tough hurdle today. Keep your head down, do the work, and the concrete results will speak for themselves.",
        weekly: "All work and no play makes you grumpy. You must schedule time for pure, unstructured fun this weekend to recharge your formidable batteries.",
        monthly: "Your career takes a positive turn. A person in authority notices your unyielding dedication, potentially bringing a promotion or a lucrative new responsibility.",
        yearly: "A year of reaching the summit. Long-term efforts will finally crystallize into tangible success, permanently cementing your reputation and financial security."
    },
    {
        sign: "Aquarius", icon: "♒", dates: "Jan 20 - Feb 18", element: "Air", ruler: "Uranus", quality: "Fixed",
        summary: "Aquarius-born are shy and quiet , but on the other hand they can be eccentric and energetic. However, in both cases, they are deep thinkers and highly intellectual people who love helping others.",
        strengths: "Progressive, original, independent, humanitarian.",
        weaknesses: "Runs from emotional expression, temperamental, uncompromising, aloof.",
        likes: "Fun with friends, helping others, fighting for causes, intellectual conversation, a good listener.",
        dislikes: "Limitations, broken promises, being lonely, dull or boring situations, people who disagree with them.",
        color: "Light-Blue, Silver",
        luckyDay: "Saturday, Sunday",
        spiritAnimal: "Water Bearer / Dolphin",
        behavior: "Aquarius rebels against the norm. They are eccentric innovators who care deeply for humanity as a whole, but can become awkwardly detached in one-on-one emotional settings.",
        love: "Aquarians value intellectual stimulation above all else in romance. They need a partner who can keep up with their fast-paced mind and respects their need for independence.",
        career: "They thrive in environments that allow for innovation and unconventional thinking. Aquarians are visionary and often drawn to technology or humanitarian efforts.",
        health: "Ruling the ankles and the circulatory system, Aquarians need to keep moving to prevent stagnation. Their chaotic nervous system requires periods of complete technological detox.",
        wealth: "Money is just a tool to an Aquarius, usually meant to fund a vision or help a community. They might invent a brilliant app or randomly put all their money into obscure crypto.",
        daily: "A brilliant, out-of-the-box idea strikes you today. Don't dismiss it as too weird; your unique perspective is precisely what the situation needs.",
        weekly: "Community is calling. Engage with a group, network, or cause that shares your ideals. Collaborative energy will fuel your spirit and spark new friendships.",
        monthly: "You may feel a sudden urge to dramatically change your appearance or your daily routine. Embrace your individuality and let your freak flag fly.",
        yearly: "A year of massive networking and innovation. You will finally find your true 'tribe', and together, you will launch a project that breaks the mold entirely."
    },
    {
        sign: "Pisces", icon: "♓", dates: "Feb 19 - Mar 20", element: "Water", ruler: "Neptune", quality: "Mutable",
        summary: "Pisces are very friendly, so they often find themselves in a company of very different people. Pisces are selfless, they are always willing to help others, without hoping to get anything back.",
        strengths: "Compassionate, artistic, intuitive, gentle, wise, musical.",
        weaknesses: "Fearful, overly trusting, sad, desire to escape reality, can be a victim or a martyr.",
        likes: "Being alone, sleeping, music, romance, visual media, swimming, spiritual themes.",
        dislikes: "Know-it-alls, being criticized, the past coming back to haunt, cruelty of any kind.",
        color: "Mauve, Lilac, Purple, Violet, Sea-green",
        luckyDay: "Thursday",
        spiritAnimal: "Fish / Chameleon",
        behavior: "Pisces flows like water. They are deeply empathetic sponges, absorbing the emotions of their environment and escaping into vivid dream worlds when reality is too harsh.",
        love: "Pisces are the ultimate romantics. They seek a deep, spiritual, and emotional connection in love. They are incredibly empathetic and sensitive to their partner's needs.",
        career: "They excel in creative or compassionate fields. Working in a rigid, highly structured environment can be challenging for the free-flowing, intuitive Pisces.",
        health: "Ruling the feet and the lymphatic system, Pisces are highly sensitive to environmental toxins and alcohol. They absorb stress like a sponge and need regular sleep and meditation to clear it.",
        wealth: "Pisces has a fluid relationship with money. They are generous to a fault and easily scammed, but their powerful intuition can randomly guide them to unexpected artistic or spiritual windfalls.",
        daily: "Your empathy is in overdrive today. Make sure to ground yourself and put up energetic shields so you don't carry everyone else's emotional baggage.",
        weekly: "Your imagination is incredibly fertile right now. Channel this into a creative project—paint, write, compose, or daydream with dedicated purpose.",
        monthly: "A highly spiritual month. Pay close attention to your vivid dreams and daily synchronicities; the universe is sending you clear, guiding messages.",
        yearly: "A year of soulful connection. You will deepen your spiritual practice and attract relationships that truly resonate with your compassionate, artistic heart."
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('zodiac-grid');
    const display = document.getElementById('horoscope-display');
    const details = document.getElementById('zodiac-details');

    // Generate grid
    zodiacData.forEach((zodiac, index) => {
        const card = document.createElement('div');
        card.className = 'zodiac-card';
        card.innerHTML = `
            <div class="zodiac-icon">${zodiac.icon}</div>
            <div class="zodiac-name">${zodiac.sign}</div>
            <div class="zodiac-dates">${zodiac.dates}</div>
        `;

        card.addEventListener('click', () => {
            // Remove active class from all
            document.querySelectorAll('.zodiac-card').forEach(c => c.classList.remove('active'));
            card.classList.add('active');

            showHoroscope(zodiac);
        });

        grid.appendChild(card);
    });

    function showHoroscope(zodiac) {
        display.classList.remove('hidden');

        details.innerHTML = `
            <div class="horoscope-header">
                <div class="big-icon">${zodiac.icon}</div>
                <div>
                    <h2>${zodiac.sign}</h2>
                    <p>${zodiac.dates} &bull; ${zodiac.element} Element &bull; Ruled by ${zodiac.ruler}</p>
                </div>
            </div>

            <p style="font-size: 1.25rem; font-style: italic; color: var(--accent-glow); margin-bottom: 30px;">
                "${zodiac.summary}"
            </p>

            <div class="traits-grid">
                <div class="trait-box">
                    <h4>✨ Strengths (What is Good)</h4>
                    <p>${zodiac.strengths}</p>
                    <p style="margin-top: 10px;"><strong>Likes:</strong> ${zodiac.likes}</p>
                </div>
                <div class="trait-box">
                    <h4>⚠️ Challenges (What is Bad)</h4>
                    <p>${zodiac.weaknesses}</p>
                    <p style="margin-top: 10px;"><strong>Dislikes:</strong> ${zodiac.dislikes}</p>
                </div>
            </div>

            <div class="traits-grid">
                <div class="trait-box">
                    <h4>🎨 Colors & Fate Titles</h4>
                    <p><strong>Favorite Color:</strong> ${zodiac.color}</p>
                    <p><strong>Lucky Day:</strong> ${zodiac.luckyDay}</p>
                    <p><strong>Spirit Animal:</strong> ${zodiac.spiritAnimal}</p>
                </div>
                <div class="trait-box">
                    <h4>🧠 Behavior & Psyche</h4>
                    <p>${zodiac.behavior}</p>
                </div>
            </div>

            <div class="reading-section">
                <h4>❤️ Love & Relationships</h4>
                <p>${zodiac.love}</p>

                <h4>💼 Career & Ambition</h4>
                <p>${zodiac.career}</p>

                <h4>💰 Finances & Wealth</h4>
                <p>${zodiac.wealth}</p>

                <h4>🌿 Health & Wellness</h4>
                <p>${zodiac.health}</p>
            </div>
            
            <div class="reading-section" style="margin-top: 40px; background: rgba(251, 191, 36, 0.05); padding: 25px; border-radius: 12px; border: 1px solid rgba(251, 191, 36, 0.3); border-left: 4px solid var(--accent-glow);">
                <h4 style="margin-top: 0; display: flex; align-items: center; gap: 10px;">🔮 Custom Horoscope Periods</h4>
                <div style="display: flex; gap: 10px; margin-bottom: 20px; flex-wrap: wrap;">
                    <button class="btn-period active" data-period="daily">Daily</button>
                    <button class="btn-period" data-period="weekly">Weekly</button>
                    <button class="btn-period" data-period="monthly">Monthly</button>
                    <button class="btn-period" data-period="yearly">2026 Yearly</button>
                </div>
                <p id="period-reading" style="color: var(--text-light); font-size: 1.15rem; line-height: 1.6; font-style: italic;">
                    ${zodiac.daily}
                </p>
            </div>
        `;

        // Attach listeners to the dynamically created period buttons
        const periodTextMap = {
            daily: zodiac.daily,
            weekly: zodiac.weekly,
            monthly: zodiac.monthly,
            yearly: zodiac.yearly
        };

        const periodBtns = details.querySelectorAll('.btn-period');
        periodBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                // Remove active class from all buttons
                periodBtns.forEach(b => b.classList.remove('active'));
                // Add active class to clicked button
                e.target.classList.add('active');
                // Update reading text
                const period = e.target.dataset.period;
                document.getElementById('period-reading').innerText = periodTextMap[period];
            });
        });

        // Scroll into view smoothly
        display.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
});
