// Highlights the navbar link for the section currently in view
const links = [...document.querySelectorAll('.ph-nav-link[href^="#"]')]
const sections = links
    .map(link => document.querySelector(link.getAttribute('href')))
    .filter(Boolean)

function setActive(id) {
    links.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${id}`)
    })
}

if (sections.length) {
    // A section counts as "current" once it crosses the upper third of the viewport
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) setActive(entry.target.id)
        })
    }, { rootMargin: '-30% 0px -65% 0px' })

    sections.forEach(section => observer.observe(section))
}
