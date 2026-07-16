/**
 * Dr Sungkyung Kim - Personal academic website
 */

document.addEventListener('DOMContentLoaded', function () {
    // Mobile menu toggle
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (navToggle && navMenu) {
        const closeMenu = () => {
            navMenu.classList.remove('active');
            navToggle.setAttribute('aria-expanded', 'false');
        };

        navToggle.addEventListener('click', function (e) {
            e.stopPropagation();
            const isOpen = navMenu.classList.toggle('active');
            navToggle.setAttribute('aria-expanded', String(isOpen));
        });

        navMenu.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', closeMenu);
        });

        document.addEventListener('click', function (e) {
            if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
                closeMenu();
            }
        });

        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') closeMenu();
        });
    }

    // Publications filter
    const filterButtons = document.querySelectorAll('.filter-btn');
    const publicationItems = document.querySelectorAll('.publication-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            const filter = this.getAttribute('data-filter');
            publicationItems.forEach(item => {
                const show = filter === 'all' || item.getAttribute('data-type') === filter;
                item.classList.toggle('hidden', !show);
            });
        });
    });

    // Footer year
    const yearEl = document.querySelector('.footer-content p');
    if (yearEl) {
        yearEl.innerHTML = yearEl.innerHTML.replace(/\d{4}/, new Date().getFullYear());
    }

    // External links: open in new tab with safe rel
    document.querySelectorAll('a[href^="http"]').forEach(link => {
        if (!link.hostname.includes(window.location.hostname)) {
            link.setAttribute('rel', 'noopener noreferrer');
            link.setAttribute('target', '_blank');
        }
    });

    // Profile photo fallback (CSP-safe replacement for the old inline onerror)
    const profilePhoto = document.querySelector('.profile-photo');
    if (profilePhoto) {
        const fallbackSrc = 'https://www.stir.ac.uk/research/hub/image/1835665';
        const useFallback = () => {
            if (profilePhoto.src !== fallbackSrc) profilePhoto.src = fallbackSrc;
        };
        profilePhoto.addEventListener('error', useFallback);
        if (profilePhoto.complete && profilePhoto.naturalWidth === 0) useFallback();
    }
});
