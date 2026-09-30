// Plays the section divider animation (see _section-divider.scss) when it scrolls into view
const dividers = document.querySelectorAll('.section-divider')

if (dividers.length) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible')
                observer.unobserve(entry.target)
            }
        })
    }, { threshold: 0.6, rootMargin: '0px 0px -10% 0px' })

    dividers.forEach(divider => observer.observe(divider))
}
