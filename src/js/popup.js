document.addEventListener('DOMContentLoaded', () => {

    // ── PROJECTS POPUP ──────────────────────────────────────
    const projectsLink = document.getElementById('projects-link');
    const popup = document.getElementById('popup');
    const overlay = document.getElementById('popup-overlay');
    const closeBtn = document.getElementById('popup-close');
    const closeBtnBottom = document.getElementById('popup-close-bottom');

    if (projectsLink && popup && overlay) {
        function openPopup(e) {
            e.preventDefault();
            overlay.classList.add('active');
            popup.classList.add('active');
        }

        function closePopup() {
            overlay.classList.remove('active');
            popup.classList.remove('active');
        }

        projectsLink.addEventListener('click', openPopup);
        closeBtn.addEventListener('click', closePopup);
        closeBtnBottom.addEventListener('click', closePopup);
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) closePopup();
        });
    }

    // ── CONTACT POPUP ───────────────────────────────────────
    const contactLink = document.getElementById('contact-link');
    const contactPopup = document.getElementById('contact-popup');
    const contactOverlay = document.getElementById('contact-popup-overlay');
    const contactCloseBtn = document.getElementById('contact-popup-close');
    const contactCloseBtnBottom = document.getElementById('contact-popup-close-bottom');

    if (contactLink && contactPopup && contactOverlay) {
        function openContactPopup(e) {
            e.preventDefault();
            contactOverlay.classList.add('active');
            contactPopup.classList.add('active');
        }

        function closeContactPopup() {
            contactOverlay.classList.remove('active');
            contactPopup.classList.remove('active');
        }

        contactLink.addEventListener('click', openContactPopup);
        contactCloseBtn.addEventListener('click', closeContactPopup);
        contactCloseBtnBottom.addEventListener('click', closeContactPopup);
        contactOverlay.addEventListener('click', (e) => {
            if (e.target === contactOverlay) closeContactPopup();
        });
    }
    // Extra triggers for about section buttons
    document.querySelectorAll('.open-projects-popup').forEach(el => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            popup.classList.add('active');
            overlay.classList.add('active');
        });
    });

    document.querySelectorAll('.open-contact-popup').forEach(el => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            contactPopup.classList.add('active');
            contactOverlay.classList.add('active');
        });
    });

    // ── CLOSE BOTH ON ESCAPE ────────────────────────────────
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            overlay?.classList.remove('active');
            popup?.classList.remove('active');
            contactOverlay?.classList.remove('active');
            contactPopup?.classList.remove('active');
        }
    });

});