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

        // Footer
        "footer_copyright": "© 2026 by Bigdoraemon Tech",
        "footer_disclaimer": "Disclaimer: The astrological calculations and predictions provided by Astro Cosmic Kundli are for entertainment and informational purposes only. They should not be used as a substitute for professional medical, legal, financial, or psychological advice.",
        "footer_security": "<strong>Data Security:</strong> We do not store any user data on external servers. All information remains secure and is kept exclusively within your device's internal storage."
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

        // Footer
        "footer_copyright": "© 2026 Bigdoraemon Tech မှ မူပိုင်ခွင့်ရှိသည်။",
        "footer_disclaimer": "သတိပြုရန် - Astro Cosmic Kundli မှ တွက်ချက်ပေးသော ဗေဒင်ဟောစာတမ်းများသည် ဗဟုသုတနှင့် ဖျော်ဖြေရေးသက်သက်အတွက်သာ ဖြစ်သည်။ ဆေးဘက်ဆိုင်ရာ၊ ဥပဒေပိုင်းဆိုင်ရာ၊ သို့မဟုတ် စိတ်ကျန်းမာရေးဆိုင်ရာ ကျွမ်းကျင်သူများ၏ အကြံပေးချက်များအစား အစားထိုး အသုံးပြုရန် မဟုတ်ပါ။",
        "footer_security": "<strong>အချက်အလက် လုံခြုံရေး -</strong> ကျွန်ုပ်တို့သည် မည်သည့် အသုံးပြုသူအချက်အလက်ကိုမျှ ပြင်ပဆာဗာများတွင် သိမ်းဆည်းထားခြင်းမရှိပါ။ သင့်အချက်အလက်များအားလုံးသည် သင့်စက်၏ internal storage တွင်သာ လုံခြုံစွာ ရှိနေမည်ဖြစ်သည်။"
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
