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
        image: '',   // main screenshot e.g. '/src/images/proj-portfolio.jpg'
        images: [],  // carousel images e.g. ['/src/images/p1.jpg', '/src/images/p2.jpg']
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
        id: 'brand-identity',
        title: 'Brand Identity System',
        category: 'UX/UI',
        client: 'Client Project',
        date: 'March 2025',
        stack: 'Figma · Illustrator',
        shortDesc: 'End-to-end brand design including logo, type system, and digital guidelines.',
        fullDesc: 'A complete brand identity created for a startup, covering logo design, colour palette, typography system, iconography, and a full digital style guide.',
        story: 'The brief was clear: modern, trustworthy, and distinct. We explored over 30 logo directions before landing on a mark that balanced both personality and professionalism.',
        approach: 'Designed in Figma with a component-first approach. All brand assets were delivered in a shared Figma library so the client team could use them independently.',
        liveUrl: '#',
        image: '',
        images: [],
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
        id: 'ecommerce',
        title: 'E-Commerce Redesign',
        category: 'Branding',
        client: 'Retail Client',
        date: 'August 2024',
        stack: 'Figma · UX Research',
        shortDesc: 'Full UX audit and redesign of an e-commerce platform, improving conversion by 40%.',
        fullDesc: 'A complete UX overhaul of an existing e-commerce platform. Started with a full audit of user flows, identified friction points, and redesigned the checkout and product discovery experience.',
        story: 'The original site had a high bounce rate and low conversion. After user interviews and heatmap analysis, the problems were clear — and fixable.',
        approach: 'Research-led design. Ran usability tests at each stage. Final designs handed off in Figma with annotated specs and a component library.',
        liveUrl: '#',
        image: '',
        images: [],
    },
    {
        id: 'dashboard',
        title: 'Dashboard Analytics',
        category: 'Full Stack',
        client: 'SaaS Client',
        date: 'June 2024',
        stack: 'React · Express · PostgreSQL',
        shortDesc: 'Real-time data dashboard with customisable widgets and role-based access control.',
        fullDesc: 'A full-stack analytics dashboard with live data updates via WebSockets, drag-and-drop widget customisation, CSV export, and admin/user role separation.',
        story: 'The client needed to replace a clunky legacy tool. We rebuilt it from scratch with a focus on speed, clarity, and flexibility.',
        approach: 'React frontend with a modular widget system. Express API with PostgreSQL. WebSocket server for real-time updates. Deployed on AWS.',
        liveUrl: '#',
        image: '',
        images: [],
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
        if (!modal.classList.contains('active')) return;
        if (e.key === 'Escape') closeModal();
        if (e.key === 'ArrowLeft' && currentIndex > 0) openModal(currentIndex - 1);
        if (e.key === 'ArrowRight' && currentIndex < PROJECTS.length - 1) openModal(currentIndex + 1);
    });
});