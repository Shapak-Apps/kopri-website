/* ================= Köpri promo — script.js ================= */

/* ---------- i18n ---------- */
const I18N = {
    en: {
        page_title: "Köpri — offline translator",
        nav_features: "Features", nav_interface: "Interface", nav_themes: "Themes", nav_shots: "Screenshots", nav_oss: "Open Source",
        badge_small: "Get it on", gh_btn: "Source code",
        hero_chip: "Version 1.0.2 • Free & Open Source",
        hero_title: "Köpri — the bridge between languages",
        hero_sub: "An offline-first translator for Android: 50+ languages, a huge phrasebook, XP, streaks and a clean interface with three themes.",
        stat1_l: "phrases & words", stat2_l: "translation languages", stat3_l: "XP levels", stat4_l: "faster with C++ FFI",
        feat_eyebrow: "FEATURES", feat_title: "Everything you need in one app",
        feat_sub: "Translation, phrasebook, learning and motivation — built offline-first with native performance.",
        f1t: "Text-to-text translation", f1d: "Instant translation between 50+ languages online, and Russian / English → Turkmen fully offline.",
        f2t: "Offline-first", f2d: "Phrasebook, history, favourites, XP and statistics work without internet. Your data stays on your device.",
        f3t: "Camera translation (soon)", f3d: "Hybrid OCR in v2.0.0: ML Kit for Latin (~0.3s) + Tesseract for Cyrillic, Arabic, CJK and Devanagari.",
        f4t: "Huge phrasebook", f4d: "4731 phrases in dozens of categories and subcategories — from greetings to restaurant and allergies.",
        f5t: "Flashcards", f5d: "Learn words with cards: quick review anywhere, even with no network around.",
        f6t: "History & favourites", f6d: "Every translation is saved locally. Pin the phrases you use often — they are always one tap away.",
        f7t: "Profile & progress", f7d: "XP levels 1–100, daily streaks, badges and the title “Translation Legend” for the most dedicated.",
        f8t: "Native speed", f8d: "Heavy calculations (XP, streaks, stats, JSON) run in C++17 via FFI — 10–60× faster than pure Dart.",
        ui_eyebrow: "INTERFACE", ui_title: "Interface identical to the app",
        ui_sub: "Same cards, same toggles, same glow. This website speaks the exact same design language as Köpri.",
        demo_group: "TRANSLATION", demo_src: "Default source", demo_src_v: "Auto", demo_tgt: "Default translation", demo_tgt_v: "Russian",
        demo_auto: "Auto-translate", demo_auto_d: "Translate as you type", demo_delay: "Delay",
        demo_buf: "Translate from buffer", demo_buf_d: "Overlay translation on top of any app",
        th_eyebrow: "THEMES", th_title: "Three themes — light, dark and system",
        th_sub: "Try them right here: the whole website switches exactly like the app does.",
        mode_light: "Light", mode_dark: "Dark", mode_system: "System", mode_system_d: "Follows your OS preference",
        pair_title: "Light or dark — always perfect",
        pair_sub: "The preview follows your theme: light screenshot on light theme, dark on dark — full size, nothing cropped.",
        pair_light: "Light theme", pair_dark: "Dark theme",
        sh_eyebrow: "GALLERY", sh_title: "Screenshots", sh_sub: "Swipe through the real screens of Köpri.",
        pr_eyebrow: "PROGRESS", pr_title: "Progress that motivates",
        pr_sub: "Every legend starts at zero. XP, streaks and daily goals — right on your profile screen.",
        lvl_title: "Level", lvl_name: "Novice", lvl_hint: "0 / 200 XP to level 2",
        streak_title: "0 days", streak_sub: "Start your streak today!", record: "Record: 0 days",
        goal_title: "Daily goal", goal_hint: "translate 10 more times",
        lg_eyebrow: "LANGUAGES", lg_title: "One app — three languages",
        lg_sub: "This website too. Pick a language and everything switches instantly.",
        lg_card_d: "Interface language", lg_choose: "Select",
        os_eyebrow: "OPEN SOURCE", os_title: "Open source, built with Flutter and Dart",
        os_sub: "Köpri is free and open source. Read the code, report issues, contribute — the bridge is built together.",
        os_repo_l: "Repository", os_author_l: "Author", os_btn: "Open on GitHub",
        cta_title: "Ready to build your bridge?", cta_sub: "Download Köpri from RuStore or explore the source code on GitHub.",
        cta_note: "Free & open source • v1.0.2 • Android",
        ft_desc: "Offline-first translator with a huge phrasebook and a clean UI.",
        ft_product: "Product", ft_source: "Source code", ft_author: "Author", ft_download: "Download on RuStore",
        ft_note: "© 2026 Köpri • Şapak App Series. All trademarks belong to their owners.",
        tab1: "Settings", tab2: "About", tab3: "Profile", tab4: "Cards", tab5: "Camera", tab6: "Translate",
        org_eyebrow: "ORGANIZATION", org_title: "Köpri is a Şapak Apps project",
        org_text: "With gratitude to the open community Şapak Apps — for the trust, the joint code review and the chance to build free apps in Turkmen.",
        org_btn: "About the organization",
    },
    ru: {
        page_title: "Köpri — офлайн-переводчик",
        nav_features: "Возможности", nav_interface: "Интерфейс", nav_themes: "Темы", nav_shots: "Скриншоты", nav_oss: "Открытый код",
        badge_small: "Скачать в", gh_btn: "Исходный код",
        hero_chip: "Версия 1.0.2 • Бесплатно и открыто",
        hero_title: "Köpri — мост между языками",
        hero_sub: "Офлайн-ориентированный переводчик для Android: 50+ языков, огромный разговорник, XP, серии стриков и чистый интерфейс с тремя темами.",
        stat1_l: "фраз и слов", stat2_l: "языков перевода", stat3_l: "уровней XP", stat4_l: "быстрее с C++ FFI",
        feat_eyebrow: "ВОЗМОЖНОСТИ", feat_title: "Всё нужное — в одном приложении",
        feat_sub: "Перевод, разговорник, обучение и мотивация — офлайн-ориентированно и с нативной производительностью.",
        f1t: "Перевод текста", f1d: "Мгновенный перевод между 50+ языками онлайн, а русский / английский → туркменский полностью офлайн.",
        f2t: "Офлайн прежде всего", f2d: "Разговорник, история, избранное, XP и статистика работают без интернета. Данные остаются на устройстве.",
        f3t: "Перевод камерой (скоро)", f3d: "Гибридный OCR в v2.0.0: ML Kit для латиницы (~0.3с) + Tesseract для кириллицы, арабского, CJK и деванагари.",
        f4t: "Огромный разговорник", f4d: "4731 фраза в десятках категорий и подкатегорий — от приветствий до ресторана и аллергий.",
        f5t: "Карточки", f5d: "Учите слова с карточками: быстрое повторение где угодно, даже без сети.",
        f6t: "История и избранное", f6d: "Каждый перевод сохраняется локально. Закрепляйте частые фразы — они всегда в один тап.",
        f7t: "Профиль и прогресс", f7d: "Уровни XP 1–100, ежедневные серии, значки и звание «Легенда перевода» для самых преданных.",
        f8t: "Нативная скорость", f8d: "Тяжёлые вычисления (XP, стрики, статистика, JSON) в C++17 через FFI — в 10–60× быстрее чистого Dart.",
        ui_eyebrow: "ИНТЕРФЕЙС", ui_title: "Интерфейс один в один с приложением",
        ui_sub: "Те же карточки, те же тумблеры, то же свечение. Сайт говорит на том же языке дизайна, что и Köpri.",
        demo_group: "ТЕРДЖИМЕ", demo_src: "Исходный язык", demo_src_v: "Авто", demo_tgt: "Язык перевода", demo_tgt_v: "Русский",
        demo_auto: "Автоперевод", demo_auto_d: "Переводить по мере ввода", demo_delay: "Задержка",
        demo_buf: "Перевод из буфера", demo_buf_d: "Оверлей-перевод поверх любого приложения",
        th_eyebrow: "ТЕМЫ", th_title: "Три темы — светлая, тёмная и системная",
        th_sub: "Попробуйте прямо здесь: весь сайт переключается точно так же, как приложение.",
        mode_light: "Светлая", mode_dark: "Тёмная", mode_system: "Системная", mode_system_d: "Следует настройке системы",
        pair_title: "Светлая или тёмная — всегда идеально",
        pair_sub: "Превью следует за вашей темой: светлый скриншот на светлой, тёмный на тёмной — полностью, без обрезки.",
        pair_light: "Светлая тема", pair_dark: "Тёмная тема",
        sh_eyebrow: "ГАЛЕРЕЯ", sh_title: "Скриншоты", sh_sub: "Листайте настоящие экраны Köpri.",
        pr_eyebrow: "ПРОГРЕСС", pr_title: "Прогресс, который мотивирует",
        pr_sub: "Каждая легенда начинается с нуля. XP, стрики и цели дня — на одном экране профиля.",
        lvl_title: "Уровень", lvl_name: "Новичок", lvl_hint: "0 / 200 XP до уровня 2",
        streak_title: "0 дней", streak_sub: "Начни свою серию сегодня!", record: "Рекорд: 0 дней",
        goal_title: "Ежедневная цель", goal_hint: "переведите ещё 10 раз",
        lg_eyebrow: "ЯЗЫКИ", lg_title: "Одно приложение — три языка",
        lg_sub: "И этот сайт тоже. Выберите язык — всё переключится мгновенно.",
        lg_card_d: "Язык интерфейса", lg_choose: "Выбрать",
        os_eyebrow: "ОТКРЫТЫЙ КОД", os_title: "Открытый исходный код, создано с Flutter и Dart",
        os_sub: "Köpri бесплатен и открыт. Читайте код, сообщайте о проблемах, вносите вклад — мост строим вместе.",
        os_repo_l: "Репозиторий", os_author_l: "Автор", os_btn: "Открыть на GitHub",
        cta_title: "Готовы построить свой мост?", cta_sub: "Скачайте Köpri в RuStore или изучите исходный код на GitHub.",
        cta_note: "Бесплатно и открыто • v1.0.2 • Android",
        ft_desc: "Офлайн-ориентированный переводчик с огромным разговорником и чистым интерфейсом.",
        ft_product: "Продукт", ft_source: "Исходный код", ft_author: "Автор", ft_download: "Скачать в RuStore",
        ft_note: "© 2026 Köpri • Şapak App Series. Все товарные знаки принадлежат их владельцам.",
        tab1: "Настройки", tab2: "О приложении", tab3: "Профиль", tab4: "Карточки", tab5: "Камера", tab6: "Перевод",
        org_eyebrow: "ОРГАНИЗАЦИЯ", org_title: "Köpri — проект сообщества Şapak Apps",
        org_text: "С благодарностью открытому сообществу Şapak Apps — за доверие, совместные код‑ревью и возможность создавать бесплатные приложения на туркменском.",
        org_btn: "Об организации",
    },
    tk: {
        page_title: "Köpri — oflaýn terjimeçi",
        nav_features: "Ukyplar", nav_interface: "Interfeýs", nav_themes: "Temalar", nav_shots: "Skrinşotlar", nav_oss: "Açyk kod",
        badge_small: "Ýükle", gh_btn: "Açyk çeşme kody",
        hero_chip: "Wersiýa 1.0.2 • Mugt we açyk",
        hero_title: "Köpri — dilleriň arasyndaky köpri",
        hero_sub: "Android üçin oflaýn-ilkinji terjimeçi: 50+ dil, ägirt uly sözleşme kitaby, XP, seriýalar we üç temaly arassa interfeýs.",
        stat1_l: "sözlem we söz", stat2_l: "terjime dili", stat3_l: "XP derejesi", stat4_l: "çalt C++ FFI bilen",
        feat_eyebrow: "UKYPLAR", feat_title: "Hemme zerur zat — bir programmada",
        feat_sub: "Terjime, sözleşme kitaby, öwrenmek we höwes — oflaýn-ilkinji we native tizlikde.",
        f1t: "Tekstden tekste terjime", f1d: "50+ diliň arasynda onlaýn terjime, rus / iňlis → türkmen doly oflaýn.",
        f2t: "Oflaýn ilkinji", f2d: "Sözleşme kitaby, taryh, halananlar, XP we statistika internetsiz işleýär. Maglumatlaryňyz enjamda galýar.",
        f3t: "Kamera terjimesi (tiz wagtda)", f3d: "v2.0.0-da gibrid OCR: latyn üçin ML Kit (~0.3s) + kiril, arap, CJK we dewanagari üçin Tesseract.",
        f4t: "Ägirt uly sözleşme kitaby", f4d: "Onlarça kategoriýada 4731 sözlem — salamlaşmadan restorana we allergiýa çenli.",
        f5t: "Kartlar", f5d: "Sözleri kartlar bilen öwreniň: islendik ýerde, torsuz hem gaýtalaň.",
        f6t: "Taryh we halananlar", f6d: "Her terjime ýerlikde ýazylýar. Ýygy ulanýan sözlemleriňizi belläň — bir basyşda.",
        f7t: "Profil we ösüş", f7d: "1–100 XP derejeleri, gündelik seriýalar, nyşanlar we iň wepalyular üçin «Terjime rowaýaty» ady.",
        f8t: "Native tizlik", f8d: "Agir hasaplamalar (XP, seriýalar, statistika, JSON) C++17 FFI arkaly — arassa Dart-dan 10–60× çalt.",
        ui_eyebrow: "INTERFEÝS", ui_title: "Programma bilen birmeňzeş interfeýs",
        ui_sub: "Şol bir kartlar, şol bir düwmeler, şol bir şöhle. Bu saýt Köpri bilen bir dizaýn dilinde gürleýär.",
        demo_group: "TERJIME", demo_src: "Deslapky gözbaşy", demo_src_v: "Awtomat", demo_tgt: "Deslapky terjime", demo_tgt_v: "Rusça",
        demo_auto: "Awtoterjime", demo_auto_d: "Ýazylan badyna terjime et", demo_delay: "Gijikdirme",
        demo_buf: "Buferden terjime", demo_buf_d: "Islendik programmada ekranyň üstünde terjime",
        th_eyebrow: "TEMALAR", th_title: "Üç tema — ýagty, garaňky we ulgam",
        th_sub: "Şu ýerde synap görüň: bütin saýt edil programma ýaly üýtgeýär.",
        mode_light: "Ýagty", mode_dark: "Garaňky", mode_system: "Ulgam", mode_system_d: "Ulgamyňyza eýerýär",
        pair_title: "Ýagty ýa-da garaňky — elmydama ajaýyp",
        pair_sub: "Prevýu temaňyza eýerýär: ýagty temada ýagty skrinşot, garaňkyda garaňky — doly ölçegde, kesilmezden.",
        pair_light: "Ýagty tema", pair_dark: "Garaňky tema",
        sh_eyebrow: "GALEREÝA", sh_title: "Skrinşotlar", sh_sub: "Köpriň hakyky ekranlaryny süýşürip görüň.",
        pr_eyebrow: "ÖSÜŞ", pr_title: "Höweslendirýän ösüş",
        pr_sub: "Her rowaýat noldan başlaýar. XP, seriýalar we gündelik maksatlar — profil ekranynynda.",
        lvl_title: "Dereje", lvl_name: "Täze başlan", lvl_hint: "2-nji derejä çenli 0 / 200 XP",
        streak_title: "0 gün", streak_sub: "Seriýaňy şu gün başla!", record: "Rekord: 0 gün",
        goal_title: "Gündelik maksat", goal_hint: "ýene 10 gezek terjime ediň",
        lg_eyebrow: "DILLER", lg_title: "Bir programma — üç dil",
        lg_sub: "Bu saýt hem. Dil saýlaň — hemmesi dessine üýtger.",
        lg_card_d: "Interfeýs dili", lg_choose: "Saýla",
        os_eyebrow: "AÇYK KOD", os_title: "Açyk çeşme, Flutter we Dart bilen ýasaldy",
        os_sub: "Köpri mugt we açyk. Kody okaň, meseleleri habar beriň, goşant goşuň — köpri bile gurulýar.",
        os_repo_l: "Repozitoriý", os_author_l: "Awtor", os_btn: "GitHub-da aç",
        cta_title: "Köprüňizi gurmaga taýýarmy?", cta_sub: "Köpri-ni RuStore-dan ýükläň ýa-da GitHub-da desler kodyny öwreniň.",
        cta_note: "Mugt we açyk • v1.0.2 • Android",
        ft_desc: "Ägirt uly sözleşme kitaby we arassa interfeýs bilen oflaýn-ilkinji terjimeçi.",
        ft_product: "Önüm", ft_source: "Açyk çeşme kody", ft_author: "Awtor", ft_download: "RuStore-da ýükle",
        ft_note: "© 2026 Köpri • Şapak App Series. Ähli söwda bellikleri eýelerine degişli.",
        tab1: "Sazlamalar", tab2: "Programma barada", tab3: "Profil", tab4: "Kartlar", tab5: "Kamera", tab6: "Terjime",
        org_eyebrow: "GURAMA", org_title: "Köpri — Şapak Apps taslamasy",
        org_text: "Açyk Şapak Apps jemgyýetine sagbolsun aýdýarys — ynanyş, bilelikdäki kod barlagy we türkmen dilinde mugt programmalar döretmek mümkinçiligi üçin.",
        org_btn: "Gurama barada",
    }
};

let lang = localStorage.getItem('kopri-lang') ||
    (navigator.language.startsWith('ru') ? 'ru' : navigator.language.startsWith('tk') ? 'tk' : 'en');

function applyLang(l) {
    lang = l; localStorage.setItem('kopri-lang', l);
    const dict = I18N[l] || I18N.en;
    document.documentElement.lang = l;
    document.title = dict.page_title;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const k = el.getAttribute('data-i18n');
        if (dict[k] !== undefined) el.textContent = dict[k];
    });
    document.querySelectorAll('#langSeg button, #langCards button').forEach(b =>
        b.classList.toggle('on', b.dataset.lang === l));
    document.querySelectorAll('#langCards .lang').forEach(c =>
        c.classList.toggle('on', c.querySelector('button').dataset.lang === l));
    if (window.__kopriDark !== undefined) {
        const lb = document.getElementById('themeShotLabel');
        if (lb) lb.textContent = dict[window.__kopriDark ? 'pair_dark' : 'pair_light'];
    }
}

/* ---------- theme: light / dark / system ---------- */
const mq = window.matchMedia('(prefers-color-scheme: dark)');
let themePref = localStorage.getItem('kopri-theme') || 'system';

function applyTheme(pref) {
    themePref = pref; localStorage.setItem('kopri-theme', pref);
    const dark = pref === 'dark' || (pref === 'system' && mq.matches);
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
    window.__kopriDark = dark;
    updateThemeShot(dark);
    document.querySelectorAll('#themeSeg button').forEach(b =>
        b.classList.toggle('on', b.dataset.themeSet === pref));
    document.querySelectorAll('#modeCards .mode').forEach(b =>
        b.classList.toggle('on', b.dataset.mode === pref));
}
mq.addEventListener('change', () => { if (themePref === 'system') applyTheme('system'); });

/* ---------- phone tabs (like app bottom nav) ---------- */
const phoneScreen = document.getElementById('phoneScreen');
document.getElementById('phoneNav').addEventListener('click', e => {
    const btn = e.target.closest('button[data-shot]'); if (!btn) return;
    document.querySelectorAll('#phoneNav button').forEach(b => b.classList.toggle('active', b === btn));
    phoneScreen.classList.add('fade');
    setTimeout(() => {
        phoneScreen.src = `assets/screenshots/${btn.dataset.shot}.jpg`;
        phoneScreen.onload = () => phoneScreen.classList.remove('fade');
    }, 180);
});

/* ---------- settings demo slider ---------- */
const range = document.getElementById('delayRange'), delayVal = document.getElementById('delayVal');
function syncRange() {
    const p = (range.value - range.min) / (range.max - range.min) * 100;
    range.style.setProperty('--fill', p + '%');
    delayVal.textContent = range.value + ' ms';
}
range.addEventListener('input', syncRange); syncRange();

/* ---------- gallery arrows ---------- */
const row = document.getElementById('shotRow');
document.getElementById('shotPrev').onclick = () => row.scrollBy({ left: -row.clientWidth * .7, behavior: 'smooth' });
document.getElementById('shotNext').onclick = () => row.scrollBy({ left: row.clientWidth * .7, behavior: 'smooth' });

/* reveal with aggressive threshold — never leave cards invisible on mobile */
const io = new IntersectionObserver(es => es.forEach(en => {
    if (en.isIntersecting || en.boundingClientRect.top < window.innerHeight * 1.2) {
        en.target.classList.add('in'); io.unobserve(en.target);
    }
}), { threshold: 0, rootMargin: '0px 0px -5% 0px' });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

/* safety: if a .reveal is still hidden after 1.2s, force-show it */
setTimeout(() => {
    document.querySelectorAll('.reveal:not(.in)').forEach(el => el.classList.add('in'));
}, 1200);

const cio = new IntersectionObserver(es => es.forEach(en => {
    if (!en.isIntersecting) return;
    const el = en.target, target = +el.dataset.count, t0 = performance.now();
    (function tick(t) {
        const p = Math.min((t - t0) / 1400, 1);
        el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3))).toLocaleString('ru-RU').replace(',', ' ');
        if (p < 1) requestAnimationFrame(tick);
    })(t0);
    cio.unobserve(el);
}), { threshold: .6 });
document.querySelectorAll('[data-count]').forEach(el => cio.observe(el));

/* ---------- theme preview: full shot, matches current theme ---------- */
function updateThemeShot(dark) {
    const img = document.getElementById('themeShotImg');
    const label = document.getElementById('themeShotLabel');
    if (!img) return;
    img.classList.add('fade');
    setTimeout(() => {
        img.src = dark ? 'assets/about_dark.png' : 'assets/about_light.png';
        img.onload = () => img.classList.remove('fade');
    }, 180);
    if (label) label.textContent = (I18N[lang] || I18N.en)[dark ? 'pair_dark' : 'pair_light'];
}

/* ---------- wire up controls ---------- */
document.querySelectorAll('#langSeg button, #langCards button').forEach(b =>
    b.addEventListener('click', () => applyLang(b.dataset.lang)));
document.querySelectorAll('#themeSeg button').forEach(b =>
    b.addEventListener('click', () => applyTheme(b.dataset.themeSet)));
document.querySelectorAll('#modeCards .mode').forEach(b =>
    b.addEventListener('click', () => applyTheme(b.dataset.mode)));

/* ---------- init ---------- */
applyTheme(themePref);
applyLang(lang);