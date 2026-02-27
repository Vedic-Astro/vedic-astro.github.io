// Translation dictionaries
const translations = {
    en: {
        // Navigation
        "nav_kundli": "Vedic Kundli",
        "nav_zodiac": "Zodiac Signs",
        "nav_bazi": "Bazi (4 Pillars)",
        "nav_tarot": "Tarot Reading",

        // Header
        "app_title": "Astro Cosmic <span>Kundli</span>",
        "app_subtitle": "Vedic Astrologer - Precise calculations, entirely private.",

        // Form Labels
        "birth_details_title": "Birth Details",
        "label_name": "Name",
        "placeholder_name": "Enter full name",
        "label_city": "Birth City (Auto-find Coordinates)",
        "placeholder_city": "e.g. Yangon, Myanmar",
        "btn_geocode": "Find",
        "label_date": "Date of Birth (DD-MM-YYYY)",
        "placeholder_date": "Select Date",
        "label_time": "Time of Birth",
        "label_lat": "Latitude",
        "label_lng": "Longitude",
        "label_timezone": "Timezone Offset (UTC)",
        "label_category": "What area of life do you want to focus on?",
        "label_optional_period": "Optional: Select a specific period for the reading (DD-MM-YYYY)",
        "placeholder_start": "Start Date",
        "placeholder_end": "End Date",
        "btn_generate": "Generate Chart & Insights",
        "btn_save": "Save to Profile",

        // Categories
        "cat_all": "General Reading (All Areas)",
        "cat_career": "Career & Jobs",
        "cat_money": "Money & Wealth",
        "cat_love": "Love & Relationships",
        "cat_health": "Health & Wellness",
        "cat_business": "Business & Entrepreneurship",
        "cat_family": "Family & Home",
        "cat_travel": "Travel & Adventure",
        "cat_legal": "Legal Matters",
        "cat_spiritual": "Spiritual Growth",
        "cat_other": "Other (Specify Below)",
        "placeholder_custom": "Enter your specific question...",

        // Chart Section
        "btn_download": "📄 View / Download Report",
        "title_rasi": "Birth Chart (Rasi)",
        "title_navamsa": "Navamsa Chart (D9)",

        // Side Panel
        "saved_profiles_title": "Saved Profiles",
        "empty_profiles": "No saved profiles yet.",

        // Panchang
        "tithi_lunar_day": "Tithi (Lunar Day)",
        "nakshatra_star": "Nakshatra (Star)",
        "yoga": "Yoga",
        "vaar_day": "Vaar (Day)",
        "daily_panchang_details": "Daily Panchang Details",
        "astrological_insights": "Astrological Insights",
        "manual_reading": "Manual Reading",

        // Specific Panchang values (from user chart)
        "panchang_tritiya___shukla__waxing__paksha": "Tritiya - Shukla (Waxing) Paksha",
        "panchang_ashlesha": "Ashlesha",
        "panchang_vajra": "Vajra",
        "panchang_sunday": "Sunday",
        "panchang_monday": "Monday",
        "panchang_tuesday": "Tuesday",
        "panchang_wednesday": "Wednesday",
        "panchang_thursday": "Thursday",
        "panchang_friday": "Friday",
        "panchang_saturday": "Saturday",

        // Footer - English only per request 
        "footer_copyright": "© 2026 by Bigdoraemon Tech",
        "footer_disclaimer": "Disclaimer: The astrological calculations and predictions provided by Astro Cosmic Kundli are for entertainment and informational purposes only. They should not be used as a substitute for professional medical, legal, financial, or psychological advice.",
        "footer_security": "<strong>Data Security:</strong> We do not store any user data on external servers. All information remains secure and is kept exclusively within your device's internal storage.",

        // Section Headers
        "career_jobs": "Career & Jobs",
        "money_wealth": "Money & Wealth",
        "love_relationships": "Love & Relationships",
        "health_wellness": "Health & Wellness",
        "business_entrepreneurship": "Business & Entrepreneurship",
        "family_home": "Family & Home",
        "travel_adventure": "Travel & Adventure",
        "legal_justice": "Legal & Justice",
        "spiritual_growth": "Spiritual & Growth",
        "summary_fate_destiny": "Summary of Fate & Destiny",

        // Planets
        "planet_sun": "Sun",
        "planet_moon": "Moon",
        "planet_mars": "Mars",
        "planet_mercury": "Mercury",
        "planet_jupiter": "Jupiter",
        "planet_venus": "Venus",
        "planet_saturn": "Saturn",
        "planet_rahu": "Rahu",
        "planet_ketu": "Ketu",

        // Signs
        "sign_aries": "Aries",
        "sign_taurus": "Taurus",
        "sign_gemini": "Gemini",
        "sign_cancer": "Cancer",
        "sign_leo": "Leo",
        "sign_virgo": "Virgo",
        "sign_libra": "Libra",
        "sign_scorpio": "Scorpio",
        "sign_sagittarius": "Sagittarius",
        "sign_capricorn": "Capricorn",
        "sign_aquarius": "Aquarius",
        "sign_pisces": "Pisces",

        // Summary Text
        "summary_born_with": "born with",
        "summary_ascendant_you_possess": "ascendant, you possess a unique destiny shaped by celestial forces. Your Sun in",
        "summary_and_moon_in": "and Moon in",
        "summary_create_powerful_combination": "create a powerful combination that defines your life path.",
        "summary_at_age": "At age",
        "summary_transformative_phase": "you are in a transformative phase where career advancement, financial growth, and personal relationships are all evolving simultaneously. The planetary positions indicate that the next 3-5 years will be particularly significant for establishing your legacy and achieving major life goals.",
        "summary_greatest_strengths": "Your greatest strengths lie in your ability to adapt, communicate effectively, and build meaningful connections. Success will come through persistence, strategic planning, and maintaining balance between material pursuits and spiritual growth. The universe supports your journey toward prosperity, fulfillment, and inner peace.",
        "summary_key_life_areas": "Key life areas requiring attention:",
        "summary_key_areas_list": "Career development, financial planning, relationship nurturing, and health maintenance",
        "summary_by_focusing_on_these": "By focusing on these areas with dedication and wisdom, you will manifest the abundant life that your birth chart promises. Trust the cosmic timing and take inspired action toward your dreams.",

        // Career Texts
        "career_prediction_intro": "This is a transformative period for your professional journey. The current",
        "career_prediction_dasha_indicates": "Dasha indicates significant career developments between",
        "and": "and",
        "career_prediction_10th_house": "Your 10th house of career shows strong planetary influences that will shape your professional destiny.",
        "career_trigger_header": "Critical Career Trigger (March 8 – March 31, 2026):",
        "career_trigger_text": "This highly specific window marks the transition into your Mercury sub-period (Antardasha). Mercury rules your 10th house (Career) for a Virgo Ascendant. This is the exact mathematical trigger for receiving job offers, passing crucial interviews, and securing a major international breakthrough before the Sun Mahadasha completely concludes in May 2026. Prioritize all aggressive applications and interviews to align with this cosmic window.",
        "career_prediction_year_1": "During this year, focus on building your expertise and establishing yourself as an authority in your field. Leadership opportunities will emerge, particularly in the second half of the year. Your communication skills will be your greatest asset, helping you navigate complex workplace dynamics. Expect major career transitions in the following year. This could manifest as a promotion, job change, or even a complete career shift. The planetary alignments suggest that taking calculated risks will pay off handsomely. Your reputation in your industry will grow, and you may find yourself being sought after for your expertise.",

        // Other Predictions
        "money_prediction_text": "Your financial landscape is entering a prosperous phase under the current Dasha period. The 2nd and 11th houses in your chart reveal important insights about wealth accumulation and income sources. You'll notice an increase in financial opportunities. Multiple income streams will open up, and your ability to generate wealth will strengthen considerably.",
        "love_prediction_text": "Your romantic and relationship sector is illuminated by the current Dasha, bringing significant developments in your love life. The 7th house of partnerships and the position of Venus in your chart reveal a beautiful journey ahead. Communication improves dramatically, and you'll find new ways to express love and appreciation.",
        "health_prediction_text": "Your health and wellness journey over the next several years requires attention and proactive care. The 6th house of health and the position of Mars in your chart provide insights into your physical and mental well-being. Focus on establishing healthy routines and preventive care.",
        "business_prediction_text": "Your entrepreneurial journey is blessed by the current Dasha, indicating a powerful period for business ventures and commercial success. The 10th house of profession and the position of Mercury in your chart reveal exceptional opportunities for business growth and establishment.",
        "family_prediction_text": "Your family and home life is entering a harmonious and fulfilling phase. The 4th house of home and family, along with the Moon's position in your chart, reveals beautiful developments in your domestic sphere. Family relationships strengthen and deepen.",
        "travel_prediction_text": "Your travel and adventure sector is highly activated, promising exciting journeys and life-changing experiences. The 9th and 12th houses in your chart, along with the position of Rahu, indicate significant travel opportunities and adventures ahead.",
        "legal_prediction_text": "Your legal and justice sector requires careful attention. The 6th house of litigation and the position of Saturn in your chart provide important guidance for navigating legal matters and ensuring justice in your affairs. Prevention is better than cure when it comes to legal issues.",
        "spiritual_prediction_text": "Your spiritual journey is entering a profound and transformative phase. The 9th and 12th houses in your chart, along with the positions of Jupiter and Ketu, indicate significant spiritual awakening and growth ahead. You'll feel a growing pull toward spiritual practices and deeper meaning in life."
    },
    my: {
        // Navigation
        "nav_kundli": "ဗေဒင် ဇာတာ",
        "nav_zodiac": "ရာသီခွင်များ",
        "nav_bazi": "ပါကျီ (တိုင် ၄ တိုင်)",
        "nav_tarot": "တာရော့ဟောစာတမ်း",

        // Header
        "app_title": "Astro Cosmic <span>Kundli</span>",
        "app_subtitle": "ဗေဒင်ဆရာ - တိကျသော တွက်ချက်မှုများ၊ လုံးဝ လုံခြုံရေးအပြည့်ဖြင့်။",

        // Form Labels
        "birth_details_title": "မွေးဖွားမှု အချက်အလက်များ",
        "label_name": "အမည်",
        "placeholder_name": "အမည်အပြည့်အစုံ ရိုက်ထည့်ပါ",
        "label_city": "မွေးဖွားရာ မြို့ (လတ္တီကျု/လောင်ဂျီကျု အလိုအလျောက်ရှာရန်)",
        "placeholder_city": "ဥပမာ - ရန်ကုန်",
        "btn_geocode": "ရှာမည်",
        "label_date": "မွေးသက္ကရာဇ် (ရက်-လ-နှစ်)",
        "placeholder_date": "ရက်ရွေးပါ",
        "label_time": "မွေးချိန်",
        "label_lat": "လတ္တီကျု",
        "label_lng": "လောင်ဂျီကျု",
        "label_timezone": "အချိန်ဇုန် (UTC)",
        "label_category": "ဘဝ၏ မည်သည့်အပိုင်းကို အဓိကသိလိုပါသနည်း။",
        "label_optional_period": "ရွေးချယ်ရန် - ဟောစာတမ်းအတွက် သီးသန့်အချိန်ကာလကို ရွေးပါ (ရက်-လ-နှစ်)",
        "placeholder_start": "စတင်မည့်ရက်",
        "placeholder_end": "ပြီးဆုံးမည့်ရက်",
        "btn_generate": "ဇာတာနှင့် ဟောစာတမ်း တွက်ချက်မည်",
        "btn_save": "မှတ်သားထားရန် သိမ်းဆည်းမည်",

        // Categories
        "cat_all": "အထွေထွေ ဟောစာတမ်း (ကဏ္ဍစုံ)",
        "cat_career": "အလုပ်အကိုင် နှင့် အသက်မွေးဝမ်းကျောင်း",
        "cat_money": "ငွေကြေး နှင့် ဓနဥစ္စာ",
        "cat_love": "အချစ်ရေး နှင့် အိမ်ထောင်ရေး",
        "cat_health": "ကျန်းမာရေး",
        "cat_business": "စီးပွားရေး လုပ်ငန်းများ",
        "cat_family": "မိသားစု နှင့် အိမ်ရာ",
        "cat_travel": "ခရီးသွားလာခြင်း",
        "cat_legal": "တရားဥပဒေရေးရာများ",
        "cat_spiritual": "ဘာသာရေးနှင့် စိတ်ပိုင်းဆိုင်ရာ တိုးတက်မှု",
        "cat_other": "အခြား (အောက်တွင်ရေးပါ)",
        "placeholder_custom": "သင်သိလိုသော သီးသန့်မေးခွန်းကို ရိုက်ထည့်ပါ...",

        // Chart Section
        "btn_download": "📄 ဟောစာတမ်းကို ကြည့်ရန် / ဒေါင်းလုဒ်လုပ်ရန်",
        "title_rasi": "မွေးဇာတာ (Rasi)",
        "title_navamsa": "နဝင်းဇာတာ (D9)",

        // Side Panel
        "saved_profiles_title": "သိမ်းဆည်းထားသော အချက်အလက်များ",
        "empty_profiles": "သိမ်းဆည်းထားသော အချက်အလက် မရှိသေးပါ။",

        // Panchang
        "tithi_lunar_day": "တိထီ (လအဆစ်)",
        "nakshatra_star": "နက္ခတ် (ကြယ်)",
        "yoga": "ယောဂ",
        "vaar_day": "နေ့နံ",
        "daily_panchang_details": "နေ့စဉ် ပဉ္စင် (Panchang) အချက်အလက်များ",
        "astrological_insights": "ဗေဒင်ဟောစာတမ်း အသေးစိတ်",
        "manual_reading": "လက်ရေးဟောစာတမ်း",

        // Specific Panchang values (from user chart)
        "panchang_tritiya___shukla__waxing__paksha": "တတိယ - လဆန်းပက္ခ",
        "panchang_ashlesha": "အသလိဿ (Ashlesha)",
        "panchang_vajra": "ဝဇိရ (Vajra)",
        "panchang_sunday": "တနင်္ဂနွေ",
        "panchang_monday": "တနင်္လာ",
        "panchang_tuesday": "အင်္ဂါ",
        "panchang_wednesday": "ဗုဒ္ဓဟူး",
        "panchang_thursday": "ကြာသပတေး",
        "panchang_friday": "သောကြာ",
        "panchang_saturday": "စနေ",

        // Footer - English only per request
        "footer_copyright": "© 2026 by Bigdoraemon Tech",
        "footer_disclaimer": "Disclaimer: The astrological calculations and predictions provided by Astro Cosmic Kundli are for entertainment and informational purposes only. They should not be used as a substitute for professional medical, legal, financial, or psychological advice.",
        "footer_security": "<strong>Data Security:</strong> We do not store any user data on external servers. All information remains secure and is kept exclusively within your device's internal storage.",

        // Section Headers
        "career_jobs": "အလုပ်အကိုင် နှင့် အသက်မွေးဝမ်းကျောင်း",
        "money_wealth": "ငွေကြေး နှင့် ဓနဥစ္စာ",
        "love_relationships": "အချစ်ရေး နှင့် အိမ်ထောင်ရေး",
        "health_wellness": "ကျန်းမာရေး",
        "business_entrepreneurship": "စီးပွားရေး လုပ်ငန်းများ",
        "family_home": "မိသားစု နှင့် အိမ်ရာ",
        "travel_adventure": "ခရီးသွားလာခြင်း",
        "legal_justice": "တရားဥပဒေရေးရာများ",
        "spiritual_growth": "ဘာသာရေးနှင့် စိတ်ပိုင်းဆိုင်ရာ တိုးတက်မှု",
        "summary_fate_destiny": "ကံကြမ္မာ အကျဉ်းချုပ်",

        // Planets
        "planet_sun": "တနင်္ဂနွေ",
        "planet_moon": "တနင်္လာ",
        "planet_mars": "အင်္ဂါ",
        "planet_mercury": "ဗုဒ္ဓဟူး",
        "planet_jupiter": "ကြာသပတေး",
        "planet_venus": "သောကြာ",
        "planet_saturn": "စနေ",
        "planet_rahu": "ရာဟု",
        "planet_ketu": "ကိတ်",

        // Signs
        "sign_aries": "မိဿ",
        "sign_taurus": "ပြိဿ",
        "sign_gemini": "မေထုန်",
        "sign_cancer": "ကရကဋ်",
        "sign_leo": "သိဟ်",
        "sign_virgo": "ကန်",
        "sign_libra": "တူ",
        "sign_scorpio": "ဗြိစ္ဆာ",
        "sign_sagittarius": "ဓနု",
        "sign_capricorn": "မကာရ",
        "sign_aquarius": "ကုံ",
        "sign_pisces": "မိန်",

        // Summary Text
        "summary_born_with": "မွေးဖွားလာချိန်တွင်",
        "summary_ascendant_you_possess": "စန်းလဂ်နှင့် မွေးဖွားလာသည့်အတွက် သင်၏ကံကြမ္မာသည် ထူးခြားသော ဂြိုလ်စွမ်းအင်များနှင့် လွှမ်းမိုးနေသည်။",
        "summary_and_moon_in": "ရာသီတွင် ရှိနေပြီး မွန်းဂြိုလ်သည်",
        "summary_create_powerful_combination": "ရာသီတွင် ရှိနေခြင်းသည် သင်၏ ဘဝခရီးလမ်းကို ပုံဖော်ပေးမည့် အင်အားကြီးမားသော ပေါင်းစပ်မှုတစ်ခု ဖြစ်သည်။",
        "summary_at_age": "အသက်",
        "summary_transformative_phase": "နှစ်တွင် အသက်မွေးဝမ်းကျောင်းတိုးတက်မှု၊ ငွေကြေးတိုးချဲ့မှုနှင့် ကိုယ်ရေးကိုယ်တာဆက်ဆံရေးများ တစ်ပြိုင်နက်တည်း တိုးတက်ပြောင်းလဲနေသော အဓိကကာလတစ်ခု၌ ရောက်ရှိနေပါသည်။ လာမည့် ၃-၅ နှစ်အတွင်းသည် အရေးကြီးဆုံးကဏ္ဍများတွင် အောင်မြင်မှုရရှိရန် အထူးကောင်းမွန်ကြောင်း ဂြိုလ်အနေအထားများက ဖော်ပြနေသည်။",
        "summary_greatest_strengths": "သင်၏အကြီးမားဆုံး အားသာချက်များမှာ လက်တွေ့ကျကျ တွေးတောနိုင်စွမ်း၊ ကောင်းမွန်သော ဆက်သွယ်ပြောဆိုနိုင်စွမ်းနှင့် ခိုင်မာသော ဆက်ဆံရေးများ တည်ဆောက်နိုင်စွမ်းတို့ ဖြစ်သည်။ အောင်မြင်မှုသည် ကြိုးစားအားထုတ်မှု၊ စနစ်တကျ ပြင်ဆင်မှု၊ နှင့် ရုပ်ပိုင်းဆိုင်ရာတိုးတက်မှုတို့ကို မျှတအောင် ထိန်းသိမ်းခြင်းမှ ရရှိလာမည်ဖြစ်သည်။ စကြာဝဋ္ဌာကြီးက သင်၏ ပြည့်စုံကြွယ်ဝမှုနှင့် စိတ်အေးချမ်းမှုဆီသွားမည့်လမ်းကို ထောက်ပံ့ပေးနေပါသည်။",
        "summary_key_life_areas": "ဂရုစိုက်သင့်သော ဘဝ၏ အဓိက အပိုင်းများ -",
        "summary_key_areas_list": "အသက်မွေးဝမ်းကျောင်းတိုးတက်မှု၊ ငွေကြေးစီမံခန့်ခွဲမှု၊ ဆက်ဆံရေးခိုင်မာအောင် တည်ဆောက်ခြင်း၊ နှင့် ကျန်းမာရေးစောင့်ရှောက်မှု",
        "summary_by_focusing_on_these": "ဤအပိုင်းများကို သေချာဂရုစိုက်ခြင်းအားဖြင့် အောင်မြင်မှုနှင့် ပြည့်စုံသော ဘဝကို ပိုင်ဆိုင်နိုင်မည်ဟု မွေးဇာတာအရ ညွှန်ပြနေသည်။ စကြာဝဋ္ဌာ၏ အချိန်ကိုက်စီစဉ်မှုများကို ယုံကြည်ပြီး သင်၏ ရည်မှန်းချက်များဆီသို့ စိတ်အားထက်သန်စွာ ချီတက်ပါ။",

        // Career Texts
        "career_prediction_intro": "သင်၏ အသက်မွေးဝမ်းကျောင်းခရီးအတွက် ကြီးမားသော အပြောင်းအလဲများ ဖြစ်ပေါ်မည့် အချိန်ကာလဖြစ်သည်။ လက်ရှိ",
        "career_prediction_dasha_indicates": "ဒသာကာလအရ ကြီးမားသော လုပ်ငန်းခွင်တိုးတက်မှုများ ကြုံတွေ့ရမည့် နှစ်များမှာ",
        "and": "နှင့်",
        "career_prediction_10th_house": "ဖြစ်သည်။ သင်၏ ကမ်မဋ္ဌာန်း နေရာ (10th house) တွင် ပြင်းထန်သော ဂြိုလ်သက်ရောက်မှုများက အသက်မွေးဝမ်းကျောင်းကံကြမ္မာကို လွှမ်းမိုးပုံဖော်နေသည်။",
        "career_trigger_header": "အထူးအရေးကြီးသော အလုပ်အကိုင် အခွင့်အလမ်း (မတ်လ ၈ ရက် – မတ်လ ၃၁ ရက်၊ ၂၀၂၆):",
        "career_trigger_text": "ဤအတိအကျတွက်ချက်ထားသော ကာလသည် ဗုဒ္ဓဟူးဂြိုလ်၏ အန္တရဒသာကာလ (Antardasha) သို့ ပြောင်းလဲခြင်းဖြစ်သည်။ ဗုဒ္ဓဟူးဂြိုလ်သည် ကန်လဂ် (Virgo Ascendant) အတွက် 10th house (လုပ်ငန်းခွင်) ကို ကိုယ်စားပြုသည်။ ဤသည်မှာ ၂၀၂၆ မေလတွင် တနင်္ဂနွေ မဟာဒသာ (Sun Mahadasha) မကုန်ဆုံးမီ၊ အလုပ်သစ်ရရှိခြင်း၊ အရေးကြီးသော အင်တာဗျူးများ အောင်မြင်ခြင်းနှင့် နိုင်ငံတကာလုပ်ငန်းခွင်ဆိုင်ရာ ကြီးမားသောအလှည့်အပြောင်းအတွက် တိကျသောကိန်းဂဏန်းဖြစ်သည်။ ဤအချိန်ကာလကို အမိအရဖမ်းဆုပ်ပြီး အလုပ်လျှောက်ခြင်း၊ အင်တာဗျူးများကို အင်တိုက်အားတိုက် ကြိုးစားပါ။",
        "career_prediction_year_1": "ယခုနှစ်အတွင်း သင်၏ကျွမ်းကျင်မှုကို မြှင့်တင်ရန်နှင့် လုပ်ငန်းခွင်တွင် ယုံကြည်ရသော ပညာရှင်တစ်ဦးအဖြစ် ရပ်တည်နိုင်ရန် အာရုံစိုက်ပါ။ ဒုတိယနှစ်ဝက်တွင် ခေါင်းဆောင်မှုအခွင့်အလမ်းများ ပေါ်ထွက်လာမည်။ သင်၏ ဆက်သွယ်ရေးစွမ်းရည်သည် လုပ်ငန်းခွင်တွင်း ရှုပ်ထွေးမှုများကို ဖြေရှင်းရန် အကောင်းဆုံး လက်နက်ဖြစ်လာလိမ့်မည်။ လာမည့်နှစ်တွင် အကြီးစား လုပ်ငန်းခွင် အပြောင်းအလဲများကို မျှော်လင့်နိုင်သည်။ ရာထူးတိုးခြင်း၊ အလုပ်ပြောင်းခြင်း သို့မဟုတ် အသက်မွေးဝမ်းကျောင်းနယ်ပယ် ပြောင်းလဲခြင်းတို့ ဖြစ်လာနိုင်သည်။ ဂြိုလ်များ၏ အနေအထားအရ ရဲရင့်သော ဆုံးဖြတ်ချက်များသည် ကြီးမားသောအကျိုးအမြတ်များကို ယူဆောင်လာမည်ဖြစ်သည်။ လုပ်ငန်းခွင်တွင်း သင်၏ ထင်ပေါ်ကျော်ကြားမှု တိုးလာမည်ဖြစ်ပြီး သင်၏ကျွမ်းကျင်မှုကို လိုလားသူများ ပေါများလာမည်ဖြစ်သည်။",

        // Other Predictions
        "money_prediction_text": "လက်ရှိ ဒသာကာလတွင် ငွေကြေးစီပွားရေး ကဏ္ဍသည် ကြွယ်ဝချမ်းသာသောကာလတစ်ခုသို့ ရောက်ရှိနေပါသည်။ သင်၏ဇာတာရှိ ဒုတိယအိမ်နှင့် ဒွါဒသမအိမ် (2nd and 11th houses) များက ငွေကြေးစုဆောင်းခြင်းနှင့် ဝင်ငွေရလမ်းများအကြောင်း အရေးကြီးသော အချက်များကို ဖော်ပြနေသည်။ ငွေကြေးအခွင့်အလမ်းများ တိုးတက်လာသည်ကို သင်သတိထားမိမည်ဖြစ်သည်။ ဝင်ငွေရလမ်းအသစ်များ ပွင့်လာမည်ဖြစ်ပြီး၊ ဥစ္စာဓနရှာဖွေနိုင်စွမ်းမှာလည်း သိသိသာသာ အားကောင်းလာလိမ့်မည်။",
        "love_relationships": "အချစ်ရေး နှင့် အိမ်ထောင်ရေး",
        "health_prediction_text": "လာမည့်နှစ်အနည်းငယ်အတွင်း သင်၏ ကျန်းမာရေးနှင့် သာယာဝပြောမှု ခရီးလမ်းသည် အထူးဂရုစိုက်ရန် လိုအပ်ပါသည်။ သင်၏ဇာတာရှိ ၆ ခုမြောက်အိမ် (6th house) နှင့် အင်္ဂါဂြိုလ် (Mars) တို့၏ အနေအထားသည် သင်၏ ရုပ်ပိုင်းဆိုင်ရာနှင့် စိတ်ပိုင်းဆိုင်ရာ ကျန်းမာရေးကို ဖော်ပြနေသည်။ ကျန်းမာရေးအတွက် ကြိုတင်ကာကွယ်မှုများနှင့် မှန်ကန်သော နေထိုင်မှုပုံစံကို တည်ဆောက်ပါ။",
        "business_prediction_text": "သင်၏ စီးပွားရေးနှင့် လုပ်ငန်းသစ်များအတွက် လက်ရှိ ဒသာကာလသည် များစွာအထောက်အကူပြုနေပြီး လုပ်ငန်းအောင်မြင်မှုများကို ညွှန်ပြနေသည်။ ၁၀ ခုမြောက်အိမ် (10th house) နှင့် ဗုဒ္ဓဟူးဂြိုလ် (Mercury) တို့၏ အနေအထားသည် စီးပွားရေးလုပ်ငန်းများ ကြီးထွားရန်နှင့် အခြေတကျဖြစ်စေရန် ထူးခြားသော အခွင့်အလမ်းများကို ယူဆောင်လာမည်ဖြစ်သည်။",
        "family_prediction_text": "သင်၏ မိသားစုနှင့် အိမ်တွင်းရေးသည် သာယာအေးချမ်းပြီး ပြည့်စုံသော အဆင့်သို့ ရောက်ရှိလာနေသည်။ မိသားစုကို ကိုယ်စားပြုသော ၄ ခုမြောက်အိမ် (4th house) နှင့် တနင်္လာဂြိုလ် (Moon) ၏ အနေအထားအရ အိမ်တွင်းရေး သာယာမှုနှင့် မိသားစုဝင်များအကြား ဆက်ဆံရေး ပိုမိုခိုင်မာလာမည်ဖြစ်သည်။",
        "travel_prediction_text": "သင်၏ဇာတာတွင် ခရီးသွားလာခြင်းကဏ္ဍသည် အလွန်တက်ကြွနေပြီး စိတ်လှုပ်ရှားဖွယ် ခရီးရှည်များနှင့် ဘဝအပြောင်းအလဲဖြစ်စေမည့် အတွေ့အကြုံများကို ပေးစွမ်းမည်ဖြစ်သည်။ သင်၏ ၉ ခုမြောက် နှင့် ၁၂ ခုမြောက်အိမ်များ (9th and 12th houses) သာမက ရာဟုဂြိုလ်၏ အနေအထားအရ ခရီးသွားလာရန် သိသာထင်ရှားသော အခွင့်အရေးများ ရှိနေသည်။",
        "legal_prediction_text": "ဥပဒေရေးရာကိစ္စများကို အထူးဂရုစိုက်ရန် လိုအပ်သည်။ သင်၏ဇာတာရှိ ၆ ခုမြောက်အိမ် (6th house) နှင့် စနေဂြိုလ် (Saturn) ၏ အနေအထားအရ ဥပဒေရေးရာကိစ္စများကို တရားမျှတစွာ ဖြေရှင်းနိုင်ရန် အကြံပြုထားသည်။ ဥပဒေပြဿနာများနှင့်ပတ်သက်လာလျှင် ဖြစ်လာမှ ဖြေရှင်းခြင်းထက် ကြိုတင်ကာကွယ်ခြင်းက ပို၍ကောင်းမွန်သည်။",
        "spiritual_prediction_text": "သင်၏ ဘာသာရေးနှင့် စိတ်ပိုင်းဆိုင်ရာ ခရီးလမ်းသည် လေးနက်သော အပြောင်းအလဲကာလတစ်ခုသို့ ရောက်ရှိနေသည်။ ၉ ခုမြောက် နှင့် ၁၂ ခုမြောက်အိမ်များအပြင် ကြာသပတေးဂြိုလ် (Jupiter) နှင့် ကိတ်ဂြိုလ် (Ketu) တို့၏ အနေအထားသည် သိသာထင်ရှားသော စိတ်ပိုင်းဆိုင်ရာ နိုးကြားမှုနှင့် တိုးတက်မှုကို ညွှန်ပြနေသည်။ စိတ်အေးချမ်းမှုနှင့် ဘဝ၏ အဓိပ္ပာယ်အစစ်အမှန်ကို ပိုမိုရှာဖွေလိုစိတ် ပြင်းပြလာမည်ဖြစ်သည်။"
    }
};

let currentLanguage = localStorage.getItem('astroLang') || 'en';

function setLanguage(lang) {
    if (!translations[lang]) return;
    currentLanguage = lang;
    localStorage.setItem('astroLang', lang);

    document.documentElement.lang = lang; // Set HTML lang attribute for accessibility/fonts

    // Update static HTML elements
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');

        // Determine whether to update innerHTML (for spans) or generic textContent/value/placeholder
        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
            if (element.placeholder) {
                element.placeholder = translations[lang][key] || key;
            }
            if (element.type === 'button' || element.type === 'submit') {
                element.value = translations[lang][key] || key;
            }
        } else if (element.tagName === 'OPTION') {
            element.textContent = translations[lang][key] || key;
        } else {
            // For elements that might contain HTML (like app_title with <span>), use innerHTML securely
            if (key === 'app_title') {
                element.innerHTML = translations[lang][key] || key;
            } else {
                element.textContent = translations[lang][key] || key;
            }
        }
    });

    // Update active state of language buttons if they exist
    const langBtns = document.querySelectorAll('.lang-btn');
    langBtns.forEach(btn => {
        if (btn.dataset.lang === lang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    // You can dispatch an event here if other scripts need to re-render dynamic content on language change
    window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang: lang } }));
}

// Initialize on DOM Load
document.addEventListener('DOMContentLoaded', () => {
    setLanguage(currentLanguage);
});

window.i18n = {
    setLanguage,
    t: function (key) {
        return translations[currentLanguage][key] || translations['en'][key] || key;
    },
    getCurrentLang: () => currentLanguage
};
