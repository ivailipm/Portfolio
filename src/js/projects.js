document.addEventListener('DOMContentLoaded', () => {
    const filterBtns = document.querySelectorAll('.proj-filter-btn');
    const cards = document.querySelectorAll('.proj-card');
    const grid = document.querySelector('.proj-grid');

    // Add empty state element
    const empty = document.createElement('p');
    empty.className = 'proj-empty';
    empty.textContent = 'No projects in this category yet.';
    grid.appendChild(empty);

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.dataset.filter;
            let visibleCount = 0;

            cards.forEach(card => {
                const categories = card.dataset.category || '';
                const matches = filter === 'all' || categories.includes(filter);

                if (matches) {
                    card.classList.remove('hidden');
                    // Re-trigger animation
                    card.style.animation = 'none';
                    card.offsetHeight; // reflow
                    card.style.animation = '';
                    visibleCount++;
                } else {
                    card.classList.add('hidden');
                }
            });

            // Show empty state if no results
            empty.classList.toggle('visible', visibleCount === 0);
        });
    });

    // ── Contact popup ──────────────────────────────────────────
    const contactLink = document.getElementById('contact-link');
    const contactPopup = document.getElementById('contact-popup');
    const contactOverlay = document.getElementById('contact-popup-overlay');
    const contactCloseBtn = document.getElementById('contact-popup-close');
    const contactCloseBtnBottom = document.getElementById('contact-popup-close-bottom');

    const openContactPopup = (e) => {
        e.preventDefault();
        contactOverlay.classList.add('active');
        contactPopup.classList.add('active');
    };

    const closeContactPopup = () => {
        contactOverlay.classList.remove('active');
        contactPopup.classList.remove('active');
    };

    if (contactLink) contactLink.addEventListener('click', openContactPopup);
    document.querySelectorAll('.open-contact-popup').forEach(el => {
        el.addEventListener('click', openContactPopup);
    });
    if (contactCloseBtn) contactCloseBtn.addEventListener('click', closeContactPopup);
    if (contactCloseBtnBottom) contactCloseBtnBottom.addEventListener('click', closeContactPopup);
    if (contactOverlay) contactOverlay.addEventListener('click', (e) => {
        if (e.target === contactOverlay) closeContactPopup();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeContactPopup();
    });
});