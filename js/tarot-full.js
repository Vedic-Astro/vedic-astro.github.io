// Full 78-card Tarot Deck - Major + Minor Arcana
// This file will be loaded to extend the tarot deck

const minorArcana = [
    // WANDS - Fire element, action, passion, creativity
    { suit: 'wands', number: 1, name: 'Ace of Wands', icon: '🔥', image: 'asset/tarot/wands/ace-of-wands.jpg', meaning: 'New creative beginnings, inspiration, potential, growth opportunities.', reverse: 'Delays in projects, lack of direction, creative blocks.' },
    { suit: 'wands', number: 2, name: 'Two of Wands', icon: '🌍', image: 'asset/tarot/wands/two-of-wands.jpg', meaning: 'Planning, decisions, future vision, personal power.', reverse: 'Fear of unknown, lack of planning, bad decisions.' },
    { suit: 'wands', number: 3, name: 'Three of Wands', icon: '⛵', image: 'asset/tarot/wands/three-of-wands.jpg', meaning: 'Expansion, foresight, overseas opportunities, progress.', reverse: 'Obstacles, delays, lack of foresight.' },
    { suit: 'wands', number: 4, name: 'Four of Wands', icon: '🎉', image: 'asset/tarot/wands/four-of-wands.jpg', meaning: 'Celebration, harmony, homecoming, community.', reverse: 'Lack of support, instability, cancelled celebrations.' },
    { suit: 'wands', number: 5, name: 'Five of Wands', icon: '⚔️', image: 'asset/tarot/wands/five-of-wands.jpg', meaning: 'Competition, conflict, tension, diversity of opinion.', reverse: 'Avoiding conflict, inner conflict resolved.' },
    { suit: 'wands', number: 6, name: 'Six of Wands', icon: '🏆', image: 'asset/tarot/wands/six-of-wands.jpg', meaning: 'Victory, success, public recognition, progress.', reverse: 'Ego, lack of recognition, fall from grace.' },
    { suit: 'wands', number: 7, name: 'Seven of Wands', icon: '🛡️', image: 'asset/tarot/wands/seven-of-wands.jpg', meaning: 'Challenge, perseverance, defending position.', reverse: 'Giving up, overwhelmed, exhaustion.' },
    { suit: 'wands', number: 8, name: 'Eight of Wands', icon: '💨', image: 'asset/tarot/wands/eight-of-wands.jpg', meaning: 'Speed, action, movement, quick decisions.', reverse: 'Delays, frustration, resisting change.' },
    { suit: 'wands', number: 9, name: 'Nine of Wands', icon: '🏔️', image: 'asset/tarot/wands/nine-of-wands.jpg', meaning: 'Resilience, persistence, last stand, boundaries.', reverse: 'Paranoia, stubbornness, refusing help.' },
    { suit: 'wands', number: 10, name: 'Ten of Wands', icon: '📦', image: 'asset/tarot/wands/ten-of-wands.jpg', meaning: 'Burden, responsibility, hard work, stress.', reverse: 'Releasing burdens, delegation, breakdown.' },
    { suit: 'wands', rank: 'page', name: 'Page of Wands', icon: '👦', image: 'asset/tarot/wands/page-of-wands.jpg', meaning: 'Enthusiasm, exploration, discovery, free spirit.', reverse: 'Lack of direction, procrastination, bad news.' },
    { suit: 'wands', rank: 'knight', name: 'Knight of Wands', icon: '🐎', image: 'asset/tarot/wands/knight-of-wands.jpg', meaning: 'Energy, passion, adventure, impulsiveness.', reverse: 'Recklessness, haste, frustration.' },
    { suit: 'wands', rank: 'queen', name: 'Queen of Wands', icon: '👸', image: 'asset/tarot/wands/queen-of-wands.jpg', meaning: 'Confidence, independence, determination, vibrancy.', reverse: 'Selfishness, jealousy, insecurity.' },
    { suit: 'wands', rank: 'king', name: 'King of Wands', icon: '🤴', image: 'asset/tarot/wands/king-of-wands.jpg', meaning: 'Leadership, vision, entrepreneur, honor.', reverse: 'Impulsiveness, overbearing, unachievable expectations.' },
    
    // CUPS - Water element, emotions, relationships, intuition
    { suit: 'cups', number: 1, name: 'Ace of Cups', icon: '💧', image: 'asset/tarot/cups/ace-of-cups.jpg', meaning: 'New love, emotional awakening, creativity, spirituality.', reverse: 'Emotional loss, blocked creativity, emptiness.' },
    { suit: 'cups', number: 2, name: 'Two of Cups', icon: '💑', image: 'asset/tarot/cups/two-of-cups.jpg', meaning: 'Partnership, unity, connection, attraction.', reverse: 'Imbalance, broken communication, tension.' },
    { suit: 'cups', number: 3, name: 'Three of Cups', icon: '🥂', image: 'asset/tarot/cups/three-of-cups.jpg', meaning: 'Celebration, friendship, community, gatherings.', reverse: 'Overindulgence, gossip, isolation.' },
    { suit: 'cups', number: 4, name: 'Four of Cups', icon: '🧘', image: 'asset/tarot/cups/four-of-cups.jpg', meaning: 'Meditation, contemplation, apathy, reevaluation.', reverse: 'Awareness, acceptance, moving forward.' },
    { suit: 'cups', number: 5, name: 'Five of Cups', icon: '😢', image: 'asset/tarot/cups/five-of-cups.jpg', meaning: 'Loss, grief, disappointment, regret.', reverse: 'Acceptance, moving on, finding peace.' },
    { suit: 'cups', number: 6, name: 'Six of Cups', icon: '🎁', image: 'asset/tarot/cups/six-of-cups.jpg', meaning: 'Nostalgia, memories, childhood, innocence.', reverse: 'Living in past, unrealistic expectations.' },
    { suit: 'cups', number: 7, name: 'Seven of Cups', icon: '☁️', image: 'asset/tarot/cups/seven-of-cups.jpg', meaning: 'Choices, illusion, fantasy, wishful thinking.', reverse: 'Clarity, determination, making decisions.' },
    { suit: 'cups', number: 8, name: 'Eight of Cups', icon: '🚶', image: 'asset/tarot/cups/eight-of-cups.jpg', meaning: 'Walking away, disillusionment, leaving behind.', reverse: 'Fear of change, stagnation, aimless drifting.' },
    { suit: 'cups', number: 9, name: 'Nine of Cups', icon: '😊', image: 'asset/tarot/cups/nine-of-cups.jpg', meaning: 'Contentment, satisfaction, wishes fulfilled.', reverse: 'Greed, dissatisfaction, materialism.' },
    { suit: 'cups', number: 10, name: 'Ten of Cups', icon: '🏡', image: 'asset/tarot/cups/ten-of-cups.jpg', meaning: 'Harmony, happiness, alignment, family bliss.', reverse: 'Disconnection, misalignment, broken family.' },
    { suit: 'cups', rank: 'page', name: 'Page of Cups', icon: '🧒', image: 'asset/tarot/cups/page-of-cups.jpg', meaning: 'Creative opportunities, curiosity, intuitive messages.', reverse: 'Emotional immaturity, creative blocks.' },
    { suit: 'cups', rank: 'knight', name: 'Knight of Cups', icon: '🦄', image: 'asset/tarot/cups/knight-of-cups.jpg', meaning: 'Romance, charm, imagination, beauty.', reverse: 'Moodiness, disappointment, unrealistic.' },
    { suit: 'cups', rank: 'queen', name: 'Queen of Cups', icon: '👑', image: 'asset/tarot/cups/queen-of-cups.jpg', meaning: 'Compassion, calm, comfort, intuition.', reverse: 'Insecurity, giving too much, martyrdom.' },
    { suit: 'cups', rank: 'king', name: 'King of Cups', icon: '🔱', image: 'asset/tarot/cups/king-of-cups.jpg', meaning: 'Emotional balance, control, generosity, diplomacy.', reverse: 'Coldness, moodiness, manipulation.' },
    
    // SWORDS - Air element, intellect, conflict, truth
    { suit: 'swords', number: 1, name: 'Ace of Swords', icon: '⚔️', image: 'asset/tarot/swords/ace-of-swords.jpg', meaning: 'Breakthrough, clarity, sharp mind, new ideas.', reverse: 'Confusion, chaos, lack of clarity.' },
    { suit: 'swords', number: 2, name: 'Two of Swords', icon: '🙈', image: 'asset/tarot/swords/two-of-swords.jpg', meaning: 'Difficult decisions, stalemate, avoidance.', reverse: 'Indecision, confusion, information overload.' },
    { suit: 'swords', number: 3, name: 'Three of Swords', icon: '💔', image: 'asset/tarot/swords/three-of-swords.jpg', meaning: 'Heartbreak, sorrow, grief, painful truth.', reverse: 'Recovery, forgiveness, moving on.' },
    { suit: 'swords', number: 4, name: 'Four of Swords', icon: '🛌', image: 'asset/tarot/swords/four-of-swords.jpg', meaning: 'Rest, recovery, contemplation, recuperation.', reverse: 'Restlessness, burnout, lack of progress.' },
    { suit: 'swords', number: 5, name: 'Five of Swords', icon: '🗡️', image: 'asset/tarot/swords/five-of-swords.jpg', meaning: 'Conflict, defeat, winning at all costs.', reverse: 'Reconciliation, making amends, past resentment.' },
    { suit: 'swords', number: 6, name: 'Six of Swords', icon: '⛵', image: 'asset/tarot/swords/six-of-swords.jpg', meaning: 'Transition, change, moving on, travel.', reverse: 'Resistance to change, unfinished business.' },
    { suit: 'swords', number: 7, name: 'Seven of Swords', icon: '🥷', image: 'asset/tarot/swords/seven-of-swords.jpg', meaning: 'Deception, strategy, getting away with something.', reverse: 'Coming clean, rethinking approach.' },
    { suit: 'swords', number: 8, name: 'Eight of Swords', icon: '🪢', image: 'asset/tarot/swords/eight-of-swords.jpg', meaning: 'Restriction, imprisonment, victim mentality.', reverse: 'Freedom, release, new perspective.' },
    { suit: 'swords', number: 9, name: 'Nine of Swords', icon: '😰', image: 'asset/tarot/swords/nine-of-swords.jpg', meaning: 'Anxiety, worry, fear, nightmares.', reverse: 'Hope, reaching out, recovery.' },
    { suit: 'swords', number: 10, name: 'Ten of Swords', icon: '🗡️', image: 'asset/tarot/swords/ten-of-swords.jpg', meaning: 'Painful ending, betrayal, rock bottom.', reverse: 'Recovery, regeneration, resisting end.' },
    { suit: 'swords', rank: 'page', name: 'Page of Swords', icon: '🧑', image: 'asset/tarot/swords/page-of-swords.jpg', meaning: 'Curiosity, restlessness, mental energy.', reverse: 'Gossip, deception, lack of planning.' },
    { suit: 'swords', rank: 'knight', name: 'Knight of Swords', icon: '🏇', image: 'asset/tarot/swords/knight-of-swords.jpg', meaning: 'Action, impulsiveness, defending beliefs.', reverse: 'Recklessness, unfocused energy.' },
    { suit: 'swords', rank: 'queen', name: 'Queen of Swords', icon: '👩', image: 'asset/tarot/swords/queen-of-swords.jpg', meaning: 'Independent, clear thinking, direct communication.', reverse: 'Coldness, bitterness, cruelty.' },
    { suit: 'swords', rank: 'king', name: 'King of Swords', icon: '👨', image: 'asset/tarot/swords/king-of-swords.jpg', meaning: 'Mental clarity, intellectual power, authority, truth.', reverse: 'Manipulative, cruel, weakness.' },
    
    // PENTACLES - Earth element, material world, finances, career
    { suit: 'pentacles', number: 1, name: 'Ace of Pentacles', icon: '💰', image: 'asset/tarot/pentacles/ace-of-pentacles.jpg', meaning: 'New financial opportunity, prosperity, manifestation.', reverse: 'Lost opportunity, lack of planning.' },
    { suit: 'pentacles', number: 2, name: 'Two of Pentacles', icon: '⚖️', image: 'asset/tarot/pentacles/two-of-pentacles.jpg', meaning: 'Balance, adaptability, time management.', reverse: 'Imbalance, disorganization, overwhelmed.' },
    { suit: 'pentacles', number: 3, name: 'Three of Pentacles', icon: '🏗️', image: 'asset/tarot/pentacles/three-of-pentacles.jpg', meaning: 'Teamwork, collaboration, learning, implementation.', reverse: 'Lack of teamwork, disharmony, poor quality.' },
    { suit: 'pentacles', number: 4, name: 'Four of Pentacles', icon: '🔒', image: 'asset/tarot/pentacles/four-of-pentacles.jpg', meaning: 'Control, stability, security, conservation.', reverse: 'Greed, materialism, self-protection.' },
    { suit: 'pentacles', number: 5, name: 'Five of Pentacles', icon: '❄️', image: 'asset/tarot/pentacles/five-of-pentacles.jpg', meaning: 'Financial loss, poverty, insecurity, isolation.', reverse: 'Recovery, charity, improvement.' },
    { suit: 'pentacles', number: 6, name: 'Six of Pentacles', icon: '🤝', image: 'asset/tarot/pentacles/six-of-pentacles.jpg', meaning: 'Generosity, charity, sharing, fairness.', reverse: 'Debt, strings attached, inequality.' },
    { suit: 'pentacles', number: 7, name: 'Seven of Pentacles', icon: '🌱', image: 'asset/tarot/pentacles/seven-of-pentacles.jpg', meaning: 'Long-term view, perseverance, investment.', reverse: 'Lack of rewards, impatience.' },
    { suit: 'pentacles', number: 8, name: 'Eight of Pentacles', icon: '🔨', image: 'asset/tarot/pentacles/eight-of-pentacles.jpg', meaning: 'Apprenticeship, skill development, quality work.', reverse: 'Lack of focus, perfectionism, misdirected effort.' },
    { suit: 'pentacles', number: 9, name: 'Nine of Pentacles', icon: '🦚', image: 'asset/tarot/pentacles/nine-of-pentacles.jpg', meaning: 'Abundance, luxury, self-sufficiency, financial independence.', reverse: 'Overworking, hustling, self-worth.' },
    { suit: 'pentacles', number: 10, name: 'Ten of Pentacles', icon: '🏰', image: 'asset/tarot/pentacles/ten-of-pentacles.jpg', meaning: 'Wealth, inheritance, family, establishment.', reverse: 'Financial failure, loneliness, loss.' },
    { suit: 'pentacles', rank: 'page', name: 'Page of Pentacles', icon: '📚', image: 'asset/tarot/pentacles/page-of-pentacles.jpg', meaning: 'Manifestation, financial opportunity, new job.', reverse: 'Lack of progress, procrastination.' },
    { suit: 'pentacles', rank: 'knight', name: 'Knight of Pentacles', icon: '🐂', image: 'asset/tarot/pentacles/knight-of-pentacles.jpg', meaning: 'Hard work, productivity, routine, conservatism.', reverse: 'Laziness, obsessiveness, work without reward.' },
    { suit: 'pentacles', rank: 'queen', name: 'Queen of Pentacles', icon: '🌺', image: 'asset/tarot/pentacles/queen-of-pentacles.jpg', meaning: 'Practical, homely, motherly, down-to-earth.', reverse: 'Self-care neglect, work-home imbalance.' },
    { suit: 'pentacles', rank: 'king', name: 'King of Pentacles', icon: '💼', image: 'asset/tarot/pentacles/king-of-pentacles.jpg', meaning: 'Wealth, business, leadership, security, discipline.', reverse: 'Greed, indulgence, sensuality.' }
];
