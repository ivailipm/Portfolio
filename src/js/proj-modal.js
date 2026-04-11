// ── Project data ────────────────────────────────────────────
// Add your projects here. The order matches the card order in projects.html.
const PROJECTS = [
    {
        id: 'portfolio',
        title: 'Portfolio Platform',
        category: 'Full Stack',
        client: 'Personal',
        date: 'January 2026',
        stack: 'Node.js · SCSS · Vite',
        shortDesc: 'A custom-built portfolio with dithered canvas backgrounds, dark/light theming, and smooth animations.',
        fullDesc: 'A fully custom portfolio site built from scratch with Vite and vanilla JS. Features a real-time dithered canvas animation in the hero, a dark/light theme toggle, popup system, responsive layout, and SCSS design system.',
        story: 'I wanted a portfolio that felt like mine — not a template. I started with the dither canvas effect and built outward from there, designing each section as its own micro-project.',
        approach: 'Built component by component with a strict SCSS variable system. Every animation is CSS-first. The result is a site that loads fast, looks sharp, and works in both dark and light mode.',
        liveUrl: '#',
        image: '',   // main screenshot e.g. '/src/images/proj-portfolio.jpg'
        images: [],  // carousel images e.g. ['/src/images/p1.jpg', '/src/images/p2.jpg']
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
        id: 'task-manager',
        title: 'Mobile Task Manager',
        category: 'Apps',
        client: 'Personal Project',
        date: 'October 2024',
        stack: 'React Native · Node.js · MongoDB',
        shortDesc: 'A productivity app with gesture-based interactions and offline-first architecture.',
        fullDesc: 'A cross-platform mobile app for task management with swipe gestures, push notifications, offline sync, and a clean minimal UI. Built with React Native and a Node.js/MongoDB backend.',
        story: 'Started as a personal tool to replace my notes app. After sharing it with friends, the feature requests kept coming — so I built it properly.',
        approach: 'Offline-first using local storage with sync on reconnect. Gesture handling via React Native Reanimated. Backend deployed on Railway.',
        liveUrl: '#',
        image: '',
        images: [],
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
        document.getElementById('proj-modal-approach').textContent = proj.approach;
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