document.addEventListener('DOMContentLoaded', () => {
    const mobileBreakpoint = 768; // Matches CSS media query
    // --- Theme Toggle Functionality ---
    const themeSelector = document.getElementById('theme-selector');
    const body = document.body; // Already defined
    const navbar = document.querySelector('.navbar'); // Get navbar for hide on scroll

    function applyTheme(theme) {
        // Mettre à jour l'attribut data-theme sur le body
        body.setAttribute('data-theme', theme);
        // Sauvegarder le thème dans le localStorage
        localStorage.setItem('theme', theme);
        // Mettre à jour la valeur du select si l'élément existe
        if (themeSelector) {
            themeSelector.value = theme;
        }
    }

    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme') || 'rouge-noir'; // Thème par défaut: Rouge Noir
    applyTheme(savedTheme);

    if (themeSelector) {
        themeSelector.addEventListener('change', (e) => {
            applyTheme(e.target.value);
        });
    }

    // --- Hamburger Menu Toggle (Mobile Only) ---
    const hamburgerToggle = document.getElementById('hamburger-toggle');
    if (hamburgerToggle) {
        hamburgerToggle.addEventListener('click', () => {
            navbar.classList.toggle('menu-open');
            // Prevent background scrolling when menu is open
            body.classList.toggle('no-scroll', navbar.classList.contains('menu-open'));
        });
    }

    // --- Language Switcher Functionality ---
    const langEnBtn = document.getElementById('lang-en');
    const langArBtn = document.getElementById('lang-ar');
    const htmlTag = document.getElementById('html-tag'); // Get the html tag

    const translations = {
        en: {
            'page.title': 'Anime Prestige',
            'navbar.logo': 'AnimE PrestigE',
            'navbar.contact': 'Contact',
            'theme.rose-noir': 'Pink Black',
            'theme.bleu-blanc': 'Blue White',
            'theme.bleu-noir': 'Blue Black',
            'theme.rouge-blanc': 'Red White',
            'theme.rouge-noir': 'Red Black',
            'theme.vert-blanc': 'Green White',
            'theme.vert-noir': 'Green Black',
            'theme.violet-blanc': 'Purple White',
            'theme.violet-noir': 'Purple Black',
            'theme.orange-blanc': 'Orange White',
            'theme.orange-noir': 'Orange Black',
            'theme.cyan-noir': 'Cyan Black',
            'theme.or-noir': 'Gold Black',
            'theme.magenta-noir': 'Magenta Black',
            'theme.gris-noir': 'Gray Black',
            'home.welcome': 'Welcome to Anime Prestige',
            'home.description': 'the channel is for watching Anime with Arabic language',
            'home.goToChannel': 'Go To My Channel',
            'videos.title': 'In My Videos the sound is made with Ai',
            'videos.lastVideoDescription': 'The last video I have made it for this web site',
            'contact.title': 'Contact Me',
            'contact.messagePrompt': 'click here to send me a message',
            'contact.sendEmail': 'Send Email',
            'contact.orEnterServer': 'or enter My server',
            'contact.discord': 'Discord',
            'footer.copyright': '&copy; 2025 Anime Prestige. All rights reserved.'
        },
        ar: {
            'page.title': 'أنمي برستيج',
            'navbar.logo': 'أنمي برستيج', // Correction du doublon
            'navbar.contact': 'اتصل بنا',
            'theme.rose-noir': 'وردي أسود',
            'theme.bleu-blanc': 'أزرق أبيض',
            'theme.bleu-noir': 'أزرق أسود',
            'theme.rouge-blanc': 'أحمر أبيض',
            'theme.rouge-noir': 'أحمر أسود',
            'theme.vert-blanc': 'أخضر أبيض',
            'theme.vert-noir': 'أخضر أسود',
            'theme.violet-blanc': 'بنفسجي أبيض',
            'theme.violet-noir': 'بنفسجي أسود',
            'theme.orange-blanc': 'برتقالي أبيض',
            'theme.orange-noir': 'برتقالي أسود',
            'theme.cyan-noir': 'سماوي أسود',
            'theme.or-noir': 'ذهبي أسود',
            'theme.magenta-noir': 'أرجواني أسود',
            'theme.gris-noir': 'رمادي أسود',
            'home.welcome': 'مرحبًا بك في أنمي برستيج', // Correction du doublon
            'home.description': 'القناة مخصصة لمشاهدة الأنمي باللغة العربية',
            'home.goToChannel': 'اذهب إلى قناتي',
            'videos.title': 'في فيديوهاتي، الصوت مصنوع بالذكاء الاصطناعي',
            'videos.lastVideoDescription': 'آخر فيديو قمت بإنشائه لهذا الموقع',
            'contact.title': 'اتصل بي',
            'contact.messagePrompt': 'انقر هنا لإرسال رسالة لي',
            'contact.sendEmail': 'إرسال بريد إلكتروني',
            'contact.orEnterServer': 'أو ادخل إلى سيرفري',
            'contact.discord': 'ديسكورد',
            'footer.copyright': '© 2025 AnimE PrestigE. جميع الحقوق محفوظة.'
        }
    };

    function setLanguage(lang) {
        // Set the lang attribute on the html tag for better accessibility and styling
        htmlTag.setAttribute('lang', lang);

        // Update the document title
        document.title = translations[lang]['page.title'] || 'anime prestige';

        // Update active class on buttons
        langEnBtn.classList.remove('active');
        langArBtn.classList.remove('active');

        // Set text direction for Arabic
        if (lang === 'ar') {
            langArBtn.classList.add('active');
            body.style.direction = 'rtl';
        } else {
            langEnBtn.classList.add('active');
            body.style.direction = 'ltr';
            // On desktop, ensure menu is closed if language is changed
            if (window.innerWidth > mobileBreakpoint && navbar.classList.contains('menu-open')) {
                navbar.classList.remove('menu-open');
            }

        }

        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });
        localStorage.setItem('language', lang);
    }

    // Load saved language or default to English
    const savedLanguage = localStorage.getItem('language') || 'en';
    setLanguage(savedLanguage);

    langEnBtn.addEventListener('click', () => setLanguage('en'));
    langArBtn.addEventListener('click', () => setLanguage('ar'));

    // --- Close mobile menu when a link is clicked ---
    document.querySelectorAll('.mobile-menu-content a, .mobile-menu-content button').forEach(item => {
        item.addEventListener('click', () => {
            if (navbar.classList.contains('menu-open')) {
                navbar.classList.remove('menu-open');
                body.classList.remove('no-scroll');
            }
        });
    });

    // --- Combined Scroll Logic (Navbar Hide & Reveal Animations) ---
    let lastScrollY = window.scrollY;
    const animatedElements = document.querySelectorAll(".sawit, .container2, .container3, footer");

    function handleScrollAndReveal() {
        // Part 1: Navbar hide/show logic (mobile only)
        if (window.innerWidth <= mobileBreakpoint) {
            if (window.scrollY > lastScrollY && window.scrollY > navbar.offsetHeight) {
                // Scrolling down
                navbar.classList.add('navbar-hidden');
                if (navbar.classList.contains('menu-open')) {
                    navbar.classList.remove('menu-open');
                    body.classList.remove('no-scroll');
                }
            } else if (window.scrollY < lastScrollY) {
                // Scrolling up
                navbar.classList.remove('navbar-hidden');
            }
        } else {
            // On desktop, ensure navbar is always visible
            navbar.classList.remove('navbar-hidden');
        }
        lastScrollY = window.scrollY;

        // Part 2: Reveal on scroll animation logic
        const windowHeight = window.innerHeight;
        const elementVisibleThreshold = 100; // How much of the element should be visible to trigger

        animatedElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisibleThreshold) {
                element.classList.add("visible");
            }
            // Optional: remove the 'else' if you want the animation to only happen once
            // else {
            //   element.classList.remove("visible");
            // }
        });
    }

    // Initial check on page load
    handleScrollAndReveal();

    // Add a single event listener for scroll
    window.addEventListener("scroll", handleScrollAndReveal);
    window.addEventListener("resize", handleScrollAndReveal); // Re-evaluate on resize
});