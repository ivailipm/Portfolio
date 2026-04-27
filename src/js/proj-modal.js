// ── Project data ────────────────────────────────────────────
// Add your projects here. The order matches the card order in projects.html.
const PROJECTS = [
    {
        id: 'TravelApp',
        title: 'WanderBuddy',
        category: 'React Native',
        client: 'Personal',
        date: 'December 2025',
        stack: 'React Native · TypeScript · Tailwind CSS · TanStack Router · Mapbox · Firebase · dnd-kit',
        shortDesc: 'A custom-built travel app',
        fullDesc: 'A mobile-first travel planning web app that lets users build day-by-day itineraries, organize trips into themed folders, and visualize their global footprint through an interactive world map. Built as a single-page experience with a custom design system, persistent local storage, and a polished, app-like feel that runs entirely in the browser.',
        story: "Most travel apps treat planning as a checklist — flights, hotels, dates. The goal here was to flip that and make travel feel like a story being written. Trips aren't just rows in a database; they're chapters in a personal archive. The world map isn't a decoration; it's the centerpiece — a living record of where someone has been and a quiet invitation to keep exploring. Every interaction was designed to feel less like data entry and more like flipping through a passport.",
        approach: 'The app was built mobile-first with a custom design system tuned for a warm, travel-themed aesthetic — deep navy paired with coral accents, semantic color tokens, and smooth spring animations throughout. Routing is handled by TanStack Router with a bottom navigation bar that uses an animated active indicator, giving the web app the feel of a native mobile experience. Trips are structured as collections of days, each holding activities, bookings, notes, and reminders.A drag- and - drop system powered by dnd - kit lets users reorder activities within a day with natural gestures.Folders group trips by theme or region, turning the app into a long - term travel archive rather than a one - off planner. The interactive world map, built with react - simple - maps, sits at the heart of the experience.Tapping a country marks it as visited and fills it with full color, while unvisited countries remain muted — making progress instantly visible.A circular progress ring tracks the count against all 195 countries, and all data persists locally via a custom useSyncExternalStore - based store, so trips and visited countries survive page reloads.',
        liveUrl: '#',
        image: '/src/images/wanderbuddy-login-16x9.png',
        images: [
            '/src/images/TravelApp1.png',
            '/src/images/TravelApp2.png',
            '/src/images/TravelApp3.png',
            '/src/images/TravelApp4.png',
        ],
        features: [
            { title: 'Itinerary Builder', desc: 'Day-by-day trip planner with drag-and-drop activity reordering powered by dnd-kit.' },
            { title: 'Trip Folders', desc: 'Organize trips into folders grouped by theme, region, or year for long-term archiving.' },
            { title: 'Interactive World Map', desc: 'Tap any country to mark it as visited — filled with color, unvisited countries stay muted for instant visual contrast.' },
            { title: 'Countries Progress Ring', desc: 'Circular progress ring tracking visited countries against all 195 total at a glance.' },
            { title: 'Saved Places Library', desc: 'Bookmark and categorize restaurants, attractions, and hotels for quick access while planning.' },
            { title: 'Mobile-First Navigation', desc: 'Custom bottom navigation bar with an animated active indicator that gives the web app a native mobile feel.' },
            { title: 'Persistent Local Storage', desc: 'All trips and map data survive page reloads via a custom useSyncExternalStore + localStorage store — no backend required.' },
            { title: 'Design System & Animations', desc: 'Cohesive visual language built with semantic color tokens, a warm travel-themed palette, and Framer Motion spring animations throughout.' },
        ],
    },
    {
        id: 'gym-junkies',
        title: 'Gym Junkies',
        category: 'TALL Stack',
        client: 'Personal Project',
        date: 'October 2025',
        stack: 'Laravel · Alpine.js · Livewire ·  TailwindCSS · SQLite · Node.js',
        shortDesc: 'A full-stack fitness tracker for workouts, nutrition, and progress.',
        fullDesc: 'A full-stack fitness and nutrition management platform built on the TALL stack, designed to unify workout planning, meal tracking, and health monitoring into a single cohesive experience. The application supports both regular users and administrators, with role-based access, a full exercise library, and an achievement system to keep users engaged.',
        story: "The goal was to move beyond fragmented health apps — one for food, one for workouts, one for sleep — and build something that treats fitness as a whole. The platform centers around visibility: users don't just log data, they see their habits, trends, and progress laid out clearly.Every feature was designed to reduce friction, so logging a meal or starting a workout takes seconds, not minutes.",
        approach: 'Built component by component using Livewire for reactive, server-driven interactivity without writing a single line of custom JavaScript for state. SQLite keeps the stack lightweight and portable. TailwindCSS was used utility-first throughout, and Alpine.js handles lightweight UI toggling where needed. The result is a fast, maintainable application with a clean separation between user-facing features and administrator controls.',
        liveUrl: '#',
        image: '/src/images/main-dashboard.png',
        images: [
            '/src/images/recipes-page.png',
            '/src/images/Exercise-Library.png',
            '/src/images/Exercise-description.png',
            '/src/images/start-workout.png',
            '/src/images/workout.png',
            '/src/images/achievements.png',
            '/src/images/user-panel.png',
            '/src/images/change-goals.png',
            '/src/images/system-colors.png',
        ],
        features: [
            { title: 'Dashboard Overview', desc: 'Tabbed dashboard covering nutrition, hydration, sleep, and workout frequency at a glance.' },
            { title: 'Meal & Macro Logging', desc: 'Daily meal logging with automatic calorie and macro (protein, carbs, fats) calculation.' },
            { title: 'Recipe Management', desc: 'Create, edit, and favorite recipes — log meals directly from saved recipes in one tap.' },
            { title: 'Workout Builder', desc: 'Start blank workouts or use templates; track sets, reps, and weight with automatic duration logging.' },
            { title: 'Exercise Library', desc: 'Browse exercises filtered by muscle group and equipment, with visual targeting and step-by-step instructions.' },
            { title: 'Workout History', desc: 'Full log of past sessions with date, duration, and per-exercise breakdown of sets, reps, and weights.' },
            { title: 'Achievements', desc: 'Category-grouped milestones that unlock automatically when specific fitness conditions are met.' },
            { title: 'Admin Panel', desc: 'Manage exercises, create default templates, and control user accounts — all behind a role-based access layer.' },
            { title: '7-Day Trend View', desc: 'Visual seven-day history for nutrition and hydration to surface consistency patterns at a glance.' },
        ],
    },
    {
        id: 'aravica',
        title: 'Aravica',
        category: 'UI/UX · E-Commerce Design',
        client: 'Concept Project',
        date: '2025',
        stack: 'Figma',
        shortDesc: 'A premium e-commerce concept for a fictional specialty coffee brand.',
        fullDesc: 'Aravica is a fictional specialty coffee brand built from the ground up — brand identity, product design, and a full e-commerce UI all conceived and crafted independently. The product visuals were AI-generated and then composed into a cohesive, editorial shopping experience that balances warmth and minimalism. Every touchpoint, from the hero layout to the product detail cards, was designed to feel premium without losing approachability.',
        story: 'The starting point was a simple question: what would a boutique coffee brand look like if it took design as seriously as its beans? From there, the brand named itself around the arabica variety — refined slightly into Aravica — and everything followed from that single idea. Products were generated, packaging was conceived, and the UI grew around them rather than the other way around.',
        approach: 'The design uses a warm cream base paired with deep espresso tones, letting the product imagery do the heavy lifting. Typography is kept editorial — oversized display type contrasted with tight, precise body copy. The layout prioritises scannability: hero, product grid, featured section, and a product detail view that keeps pricing and actions prominent. The result is a store that feels curated rather than catalogued.',
        liveUrl: '#',
        image: '/src/images/Aravica_header.png',
        images: [
            '/src/images/Aravica2.png',
            '/src/images/Aravica3.png',
            '/src/images/Aravica4.png',
        ],
        features: [
            { title: 'Brand Identity', desc: 'Name, colour palette, and typographic language developed from scratch to reflect a premium specialty coffee positioning.' },
            { title: 'AI-Generated Products', desc: 'All product visuals — packaging, cans, and bags — were generated and composited to create a believable product range.' },
            { title: 'Editorial Hero', desc: 'Full-bleed hero section with oversized logotype and a centred product shot designed for immediate brand impact.' },
            { title: 'Product Grid', desc: 'Clean, scannable product cards with pricing, volume, and add-to-cart actions — optimised for quick purchase decisions.' },
            { title: 'Featured Section', desc: 'Mid-page editorial break highlighting the product range with a mood-driven headline and supporting copy.' },
        ],
    },
    {
        id: 'nordik-form',
        title: 'Nordik Form',
        category: 'UI/UX · E-Commerce Design',
        client: 'Concept Project',
        date: '2025',
        stack: 'Figma',
        shortDesc: 'A minimal, editorial e-commerce experience for a fictional Scandinavian furniture brand.',
        fullDesc: 'Nordik Form is a premium digital experience designed for a fictional Scandinavian furniture brand. The project spans a full design system — colour palette, typography scale, and spacing tokens — alongside a complete desktop and mobile e-commerce experience. Every layout decision reflects the brand\'s core values: simplicity, materiality, and editorial restraint. The result is a cohesive visual identity that feels both aspirational and functional.',
        story: 'The brief was self-imposed: design a luxury furniture brand\'s digital presence from scratch, with no client constraints and full creative freedom. The challenge was to make "minimal" feel rich rather than empty — to use whitespace, scale, and typography as the primary design tools rather than decoration. The project became an exercise in restraint: how much can you strip away before something stops feeling premium?',
        approach: 'The design started with the system, not the screens. A warm neutral colour palette — Ivory White, Pure White, Warm Beige, and Slate Brown — was anchored by a near-black primary and a Dark Brown accent. The typographic pairing uses a bold geometric sans-serif for display headings and a refined serif for body copy, creating editorial tension that reinforces the brand\'s premium positioning. Desktop layouts lean on asymmetric grids and full-bleed imagery to create a sense of physical scale. The mobile experience adapts the same hierarchy into a single-column layout with simplified navigation and larger touch targets. Key screens cover the full purchase journey: editorial hero, featured products grid, category browse, promotional CTA banner, and a structured multi-column footer.',
        liveUrl: 'https://dribbble.com/shots/27318720-Nordik-Form-Furniture-E-commerce-UI-UX',
        image: '/src/images/NordikForm_mobile.png',
        images: [
            '/src/images/NordikForm1.png',
            '/src/images/NordikForm2.png',
            '/src/images/NordikForm3.png',
            '/src/images/NordikForm4.png',
        ],
        features: [
            { title: 'Design System', desc: 'Complete colour palette, typography scale, and spacing tokens built in Figma — ensuring consistency across every screen and breakpoint.' },
            { title: 'Editorial Hero', desc: 'Bold, asymmetric hero with large display typography and a high-contrast product image, designed to make an immediate brand statement.' },
            { title: 'Featured Products Grid', desc: 'Responsive product grid with hover states, pricing, and category labels — optimised for quick visual scanning.' },
            { title: 'Category Browse', desc: 'Full-bleed category tiles with overlaid labels for intuitive navigation across product families.' },
            { title: 'Promotional CTA Banner', desc: 'Mid-page editorial banner pairing a headline with a hero product shot, balancing brand storytelling and conversion intent.' },
            { title: 'Mobile Experience', desc: 'All screens designed at desktop and mobile breakpoints — simplified navigation, touch-optimised layouts, and consistent brand voice at every size.' },
        ],
    },
];

// ── Modal logic ─────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    const overlay = document.getElementById('proj-modal-overlay');
    const modal = document.getElementById('proj-modal');
    const closeBtn = document.getElementById('proj-modal-close');
    const body = document.getElementById('proj-modal-body');
    const prevBtn = document.getElementById('proj-modal-prev');
    const nextBtn = document.getElementById('proj-modal-next');

    let currentIndex = 0;

    // Attach click handlers to cards based on order
    const cards = document.querySelectorAll('.proj-card');
    cards.forEach((card, i) => {
        if (PROJECTS[i]) {
            card.dataset.projectId = PROJECTS[i].id;
            card.style.cursor = 'pointer';
            card.addEventListener('click', (e) => {
                if (e.target.closest('.proj-card-cta')) return;
                openModal(i);
            });
        }
    });

    // ── Open / Close ──────────────────────────────────────────
    function openModal(index) {
        currentIndex = index;
        populateModal(PROJECTS[index]);
        overlay.classList.add('active');
        modal.classList.add('active');
        modal.setAttribute('aria-hidden', 'false');
        body.scrollTop = 0;
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        overlay.classList.remove('active');
        modal.classList.remove('active');
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }

    // ── Populate ──────────────────────────────────────────────
    function populateModal(proj) {
        document.getElementById('proj-modal-title').textContent = proj.title;
        document.getElementById('proj-modal-desc').textContent = proj.shortDesc;
        document.getElementById('proj-modal-cat').textContent = proj.category;
        document.getElementById('proj-modal-client').textContent = proj.client;
        document.getElementById('proj-modal-date').textContent = proj.date;
        document.getElementById('proj-modal-stack').textContent = proj.stack;
        document.getElementById('proj-modal-full-desc').textContent = proj.fullDesc;
        document.getElementById('proj-modal-story').textContent = proj.story;
        document.getElementById('proj-modal-approach').textContent = proj.approach || '';

        // Features
        const featuresSection = document.getElementById('proj-modal-features-section');
        const featuresContainer = document.getElementById('proj-modal-features');
        featuresContainer.innerHTML = '';

        if (proj.features && proj.features.length) {
            featuresSection.style.display = 'block';
            proj.features.forEach(f => {
                const row = document.createElement('div');
                row.className = 'proj-modal-feature-row';
                row.innerHTML = `<strong class="proj-modal-feature-title">${f.title}</strong><p class="proj-modal-feature-desc">${f.desc}</p>`;
                featuresContainer.appendChild(row);
            });
        } else {
            featuresSection.style.display = 'none';
        }
        document.getElementById('proj-modal-live').href = proj.liveUrl;

        // Main screenshot
        const img = document.getElementById('proj-modal-img');
        const placeholder = document.getElementById('proj-modal-placeholder');
        if (proj.image) {
            img.src = proj.image;
            img.alt = proj.title;
            img.classList.add('loaded');
            placeholder.style.display = 'none';
        } else {
            img.classList.remove('loaded');
            placeholder.style.display = 'flex';
        }

        // Carousel
        buildCarousel(proj.images);

        // Prev / Next
        const prevProj = PROJECTS[currentIndex - 1];
        const nextProj = PROJECTS[currentIndex + 1];
        document.getElementById('proj-modal-prev-name').textContent = prevProj ? prevProj.title : '—';
        document.getElementById('proj-modal-next-name').textContent = nextProj ? nextProj.title : '—';
        prevBtn.disabled = !prevProj;
        nextBtn.disabled = !nextProj;
        prevBtn.style.opacity = prevProj ? '1' : '0.3';
        nextBtn.style.opacity = nextProj ? '1' : '0.3';
    }

    // ── Carousel ──────────────────────────────────────────────
    function buildCarousel(images) {
        const carousel = document.getElementById('proj-modal-carousel');
        const track = document.getElementById('proj-modal-carousel-track');
        const dots = document.getElementById('proj-modal-carousel-dots');

        track.innerHTML = '';
        dots.innerHTML = '';

        if (!images || images.length === 0) {
            carousel.style.display = 'none';
            return;
        }

        carousel.style.display = 'block';

        images.forEach((src, i) => {
            const img = document.createElement('img');
            img.src = src;
            img.alt = `Project image ${i + 1}`;
            img.className = 'proj-carousel-img';
            track.appendChild(img);

            const dot = document.createElement('div');
            dot.className = 'proj-carousel-dot' + (i === 0 ? ' active' : '');
            dot.addEventListener('click', () => {
                track.children[i].scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'start',
                });
            });
            dots.appendChild(dot);
        });

        // Update active dot on scroll
        track.addEventListener('scroll', () => {
            const itemWidth = 356; // img width + gap
            const index = Math.round(track.scrollLeft / itemWidth);
            document.querySelectorAll('.proj-carousel-dot').forEach((d, i) => {
                d.classList.toggle('active', i === index);
            });
        });
    }

    // ── Events ────────────────────────────────────────────────
    closeBtn.addEventListener('click', closeModal);
    overlay.addEventListener('click', closeModal);

    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) openModal(currentIndex - 1);
    });
    nextBtn.addEventListener('click', () => {
        if (currentIndex < PROJECTS.length - 1) openModal(currentIndex + 1);
    });

    document.addEventListener('keydown', (e) => {
        if (lightboxOverlay.classList.contains('active')) {
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowLeft') shiftLightbox(-1);
            if (e.key === 'ArrowRight') shiftLightbox(1);
            return;
        }
        if (!modal.classList.contains('active')) return;
        if (e.key === 'Escape') closeModal();
        if (e.key === 'ArrowLeft' && currentIndex > 0) openModal(currentIndex - 1);
        if (e.key === 'ArrowRight' && currentIndex < PROJECTS.length - 1) openModal(currentIndex + 1);
    });

    // ── Lightbox ──────────────────────────────────────────────
    const lightboxOverlay = document.getElementById('img-lightbox-overlay');
    const lightbox = document.getElementById('img-lightbox');
    const lightboxImg = document.getElementById('img-lightbox-img');
    const lightboxClose = document.getElementById('img-lightbox-close');
    const lightboxPrev = document.getElementById('img-lightbox-prev');
    const lightboxNext = document.getElementById('img-lightbox-next');
    const lightboxCounter = document.getElementById('img-lightbox-counter');

    let lightboxImages = [];
    let lightboxCurrent = 0;

    function openLightbox(images, startIndex) {
        lightboxImages = images;
        lightboxCurrent = startIndex;
        showLightboxImage(lightboxCurrent);
        lightboxOverlay.classList.add('active');
        lightbox.classList.add('active');
    }

    function closeLightbox() {
        lightboxImg.classList.remove('visible');
        lightboxOverlay.classList.remove('active');
        lightbox.classList.remove('active');
    }

    function showLightboxImage(index) {
        lightboxImg.classList.remove('visible');
        setTimeout(() => {
            lightboxImg.src = lightboxImages[index];
            lightboxImg.alt = `Image ${index + 1}`;
            lightboxImg.classList.add('visible');
        }, 80);
        lightboxCounter.textContent = `${index + 1} / ${lightboxImages.length}`;
        lightboxPrev.disabled = index === 0;
        lightboxNext.disabled = index === lightboxImages.length - 1;
    }

    function shiftLightbox(dir) {
        const next = lightboxCurrent + dir;
        if (next < 0 || next >= lightboxImages.length) return;
        lightboxCurrent = next;
        showLightboxImage(lightboxCurrent);
    }

    lightboxClose.addEventListener('click', closeLightbox);
    lightboxOverlay.addEventListener('click', closeLightbox);
    lightboxPrev.addEventListener('click', () => shiftLightbox(-1));
    lightboxNext.addEventListener('click', () => shiftLightbox(1));

    function getProjectImages(proj) {
        return [proj.image, ...(proj.images || [])].filter(Boolean);
    }

    // Wire up main screenshot click
    document.getElementById('proj-modal-screenshot').addEventListener('click', () => {
        const proj = PROJECTS[currentIndex];
        const imgs = getProjectImages(proj);
        if (imgs.length === 0) return;
        openLightbox(imgs, 0);
    });

    // Wire up carousel image clicks (delegated)
    document.getElementById('proj-modal-carousel-track').addEventListener('click', (e) => {
        const img = e.target.closest('.proj-carousel-img');
        if (!img) return;
        const proj = PROJECTS[currentIndex];
        const imgs = getProjectImages(proj);
        const trackImgs = [...document.querySelectorAll('.proj-carousel-img')];
        const clickedIdx = trackImgs.indexOf(img);
        // carousel images start after the main image in our array
        const offset = proj.image ? 1 : 0;
        openLightbox(imgs, offset + clickedIdx);
    });
});