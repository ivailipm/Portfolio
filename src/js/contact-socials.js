// Social hover fade effect in the Contact section
const list = document.getElementById('ct-social-list')

if (list) {
    const rows = list.querySelectorAll('.ct-social-row')

    rows.forEach(row => {
        row.addEventListener('mouseenter', () => {
            rows.forEach(r => r.classList.toggle('ct-dimmed', r !== row))
        })
    })

    list.addEventListener('mouseleave', () => {
        rows.forEach(r => r.classList.remove('ct-dimmed'))
    })
}
