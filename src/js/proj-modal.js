// ── Project data ────────────────────────────────────────────
// Add your projects here. The order matches the card order in index.html.
const PROJECTS = [
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
        liveUrl: 'https://gymjunkies.be',
        githubUrl: 'https://github.com/ivailipm/GymJunkies',
        caseStudyUrl: '',
        image: '/images/main-dashboard.png',
        images: [
            '/images/recipes-page.png',
            '/images/Exercise-Library.png',
            '/images/Exercise-description.png',
            '/images/start-workout.png',
            '/images/workout.png',
            '/images/achievements.png',
            '/images/user-panel.png',
            '/images/change-goals.png',
            '/images/system-colors.png',
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
        id: 'epocha',
        title: 'Epocha',
        category: 'Full-Stack Web Application',
        client: 'Personal Project',
        date: 'September 2026',
        stack: 'ASP.NET Core (C#) · Entity Framework Core · PostgreSQL · Elasticsearch · React · TypeScript · Vite · Docker Compose',
        shortDesc: 'An art history timeline explorer for browsing museum artworks by era, movement, and artist.',
        fullDesc: 'A full-stack art history timeline explorer built to make museum collections searchable and browsable by period, movement, and artist. The application combines a relational database for structured artwork records with a dedicated search index for fast, faceted discovery, and supports user accounts with personal, named collections.',
        story: "Museum catalog data is rich but rarely easy to explore — most public APIs return raw records with no way to browse by era or movement, and no way to save what you find. Epocha was built to turn one such catalog (the Art Institute of Chicago's public collection) into an explorable timeline: search by keyword, filter by medium or movement, and save discoveries into your own collections.",
        approach: 'The backend follows Clean Architecture, separating domain entities, application logic, and infrastructure concerns (Postgres via EF Core, Elasticsearch, JWT auth) so the core business logic has no framework dependencies. A background ingestion worker syncs artwork data into both Postgres and Elasticsearch, keeping search results current without coupling the read path to an external API. The frontend is a React + TypeScript SPA with an editorial, newspaper-style redesign. The whole stack — API, frontend, database, and search — runs in Docker Compose, self-hosted on a Hetzner VPS via Coolify.',
        liveUrl: 'https://epocha.ivaylapernikova.com',
        githubUrl: 'https://github.com/ivailipm/Epocha',
        caseStudyUrl: '',
        image: '/images/Epocha_header.png',
        images: [
            '/images/Epocha (1).png',
            '/images/Epocha (2).png',
            '/images/Epocha (3).png',
            '/images/Epocha (5).png',
            '/images/Epocha (6).png',
        ],
        features: [
            { title: 'Gallery & Search', desc: 'Full-text, faceted search across the full artwork catalog, filterable by era, medium, movement, and artist.' },
            { title: 'Artwork Detail Pages', desc: 'Full record view per artwork: artist, medium, dimensions, credit line, date range, associated movements, and source attribution.' },
            { title: 'User Accounts', desc: 'JWT-based registration and login for a personalized experience.' },
            { title: 'Named Collections', desc: 'Users can save artworks into their own custom-named collections, and rename or delete them.' },
            { title: 'Editorial UI Design', desc: "A newspaper-inspired serif design (in the style of The New Yorker/Noema), with a light/dark mode toggle built on CSS's native light-dark() function." },
            { title: 'Search-backed by Elasticsearch', desc: 'A dedicated search index synced from Postgres, powering fast full-text queries and facet counts.' },
            { title: 'Ingestion Pipeline', desc: "An idempotent background worker that syncs artwork records from the Art Institute of Chicago's public API into the database and search index." },
            { title: 'Clean Architecture Backend', desc: 'ASP.NET Core solution split into Domain, Application, Infrastructure, and API layers, fully containerized with Docker Compose.' },
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
        githubUrl: '',
        caseStudyUrl: 'https://dribbble.com/shots/27320012-Aravica-Coffee-brand-website-case-study',
        image: '/images/Aravica_header.png',
        images: [
            '/images/Aravica2.png',
            '/images/Aravica3.png',
            '/images/Aravica4.png',
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
        contribution: "Collaborated equally across all project deliverables as part of a 6-person team. Contributed to the full design process — from mapping out the use case diagram and building the ERD, to crafting the Figma prototype — with every decision made and reviewed collectively as a group.",
        liveUrl: 'https://dribbble.com/shots/27318720-Nordik-Form-Furniture-E-commerce-UI-UX',
        githubUrl: '',
        caseStudyUrl: 'https://dribbble.com/shots/27318720-Nordik-Form-Furniture-E-commerce-UI-UX',
        image: '/images/NordikForm_mobile.png',
        images: [
            '/images/NordikForm1.png',
            '/images/NordikForm2.png',
            '/images/NordikForm3.png',
            '/images/NordikForm4.png',
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
    {
        id: 'tall-stack-project',
        title: 'The Andersons',
        category: 'TALL Stack',
        client: 'Academical Project',
        date: 'February 2026',
        stack: 'Laravel · Alpine.js · Livewire · TailwindCSS',
        shortDesc: 'A family household management app built with the TALL stack to coordinate trips, tasks, meals, and finances.',
        fullDesc: 'The Andersons is a household management web application designed to help families organise their daily lives. It brings together trip planning, task tracking, smart dinner planning with allergy awareness, and invoice management — all under one roof. ',
        contribution: 'Trips Management developer in a 6-person team. Responsible for the full implementation of trip planning — including destinations, dates, and member participation — while collaborating closely with teammates on shared data models and the overall application architecture.',
        story: 'Inspired by the everyday chaos of managing a busy household, the project aimed to create a single platform where a family could coordinate schedules, plan meals safely around dietary restrictions, delegate tasks, and keep track of shared expenses — without juggling multiple tools.',
        approach: 'Built using the TALL stack (Tailwind CSS, Alpine.js, Laravel Livewire, and Laravel), the app leverages reactive UI components for a smooth, real-time experience. Each module was designed as a self-contained feature with shared member context, so availability, allergies, and assignments stay consistent across the whole application.',
        liveUrl: 'https://theandersons-lsta.lexrenders.be/login',
        githubUrl: '',
        caseStudyUrl: '',
        image: '/images/Andersons_header.png',
        images: [
            '/images/Andersons1.png',
            '/images/Andersons2.png',
            '/images/Andersons3.png',
            '/images/Andersons4.png',
            '/images/Andersons5.png',
            '/images/Andersons6.png',
        ],
        features: [
            { title: 'Trips Management', desc: 'Plan and track family trips with destinations, dates, and member participation. Ability to add and check Checkpoints and upload and download trip documents.' },
            { title: 'Task Management', desc: 'Assign and monitor household tasks across family members with status tracking.' },
            {
                title: 'Dinner Planning', desc: "Schedule meals that automatically factor in each member's allergies and dietary needs."
            },
            {
                title: ' Availability', desc: "Members can set availability and unavailability so planning always reflects who's home or currently has another task."
            },
            { title: 'Invoices', desc: ' Generate and manage household invoices to keep shared expenses clear and organized.' },
            { title: 'Allergy Awareness', desc: 'Allergy profiles per member are respected across all dinner suggestions and meal plans.' },
        ],
    },
    {
        id: 'system-design-project',
        title: 'Grow Gym',
        category: 'System Design',
        client: 'Academic Project',
        date: 'September 2025',
        stack: 'StarUML · Figma',
        shortDesc: 'Software modelling & design project for a full gym management system, covering use cases, data modelling, and UI prototyping.',
        fullDesc: 'A comprehensive software modelling project for a gym management system, built as part of the Software Modelling & Design course. The system covers member management, class scheduling, trainer assignment, and subscription tracking',
        story: 'The goal was to model a real-world gym scenario from requirements to prototype. We started by identifying all actors and use cases, then structured the data layer through an ERD, and finally translated it into a clickable Figma prototype.',
        approach: 'We followed a top-down design process — use case analysis to capture system behaviour, entity-relationship modelling to design the database schema, and Figma to wireframe the member-facing interface, ensuring every design decision traced back to a functional requirement.',
        liveUrl: '#',
        githubUrl: '',
        caseStudyUrl: '',
        image: '/images/GrowGym_header.png',
        images: [
            '/images/GrowGym1.png',
            '/images/GrowGym2.png',
            '/images/GrowGym3.png',
            '/images/GrowGym4.png',
            '/images/GrowGym5.png',
            '/images/ERD-growGym.png',
        ],
        features: [
            { title: 'Use Case Diagram', desc: 'Mapped all actors (member, trainer, admin) and their interactions with the system.' },
            { title: 'ERD Design', desc: 'Designed a normalised entity-relationship diagram covering members, subscriptions, classes, and trainers.' },
            { title: 'Figma Prototype', desc: 'Created an interactive UI prototype for member registration, class booking, and dashboard views.' },
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

            const proj = PROJECTS[i];
            const cta = card.querySelector('.proj-card-cta');
            const hasCaseStudy = proj.caseStudyUrl && proj.caseStudyUrl !== '#';

            if (cta) {
                if (hasCaseStudy) {
                    cta.href = proj.caseStudyUrl;
                    cta.textContent = 'View Case Study →';
                    cta.target = '_blank';
                    cta.rel = 'noopener noreferrer';
                } else {
                    cta.removeAttribute('href');
                    cta.textContent = 'View Project →';
                }
            }

            card.addEventListener('click', (e) => {
                if (hasCaseStudy && e.target.closest('.proj-card-cta')) return;
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
        const contributionSection = document.getElementById('proj-modal-contribution-section');
        document.getElementById('proj-modal-contribution').textContent = proj.contribution || '';
        contributionSection.style.display = proj.contribution ? 'grid' : 'none';
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
        const liveBtn = document.getElementById('proj-modal-live');
        const githubBtn = document.getElementById('proj-modal-github');
        const hasLive = proj.liveUrl && proj.liveUrl !== '#';
        const hasGithub = proj.githubUrl && proj.githubUrl !== '#';
        liveBtn.href = hasLive ? proj.liveUrl : '#';
        liveBtn.style.display = hasLive ? 'inline-flex' : 'none';
        githubBtn.href = hasGithub ? proj.githubUrl : '#';
        githubBtn.style.display = hasGithub ? 'inline-flex' : 'none';

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