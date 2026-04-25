const SELECTORS = [
    '.ph-nav-wrap',
    '.ph-headline',
    '.ph-cv-row',
    '.ph-float-card',
    '.ticker-wrap',
    '.about-section > .about-left',
    '.about-section > .about-right',
    '.tagline-section > .tagline-left',
    '.tagline-section > .tagline-right',
    '.ms-section',
    '.tools-section > .tools-tag',
    '.tools-section > .tools-headline',
    '.tools-section > .tools-desc',
    '.tools-section > .tools-grid',
    '.tool-card',
    '.proj-hero-inner',
    '.proj-card',
    '.about-page-layout > .profile-card',
    '.about-page-layout > .about-main',
    '.ct-form-left',
    '.ct-form-right',
].join(',')

function initReveal() {
    const els = [...document.querySelectorAll(SELECTORS)]
    if (!els.length) return

    // Add the transition class — inline style already set opacity:0/translateY
    els.forEach(el => el.classList.add('reveal-el'))

    const aboveFold = []
    const belowFold = []

    els.forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight + 60) {
            aboveFold.push(el)
        } else {
            belowFold.push(el)
        }
    })

    aboveFold.forEach((el, i) => {
        setTimeout(() => el.classList.add('reveal-visible'), 100 + i * 160)
    })

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-visible')
                observer.unobserve(entry.target)
            }
        })
    }, { threshold: 0.08, rootMargin: '0px 0px -50px 0px' })

    belowFold.forEach(el => observer.observe(el))
}

const preloader = document.getElementById('preloader')

if (!preloader || preloader.style.display === 'none') {
    document.addEventListener('DOMContentLoaded', () => setTimeout(initReveal, 80))
} else {
    const mo = new MutationObserver(() => {
        if (preloader.classList.contains('preloader--done')) {
            mo.disconnect()
            setTimeout(initReveal, 100)
        }
    })
    mo.observe(preloader, { attributes: true, attributeFilter: ['class'] })
}
