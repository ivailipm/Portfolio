// Apply saved theme immediately to avoid flash
const saved = localStorage.getItem('theme')
if (saved === 'light') document.documentElement.setAttribute('data-theme', 'light')

document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.querySelector('.ph-navbar')
    if (!toggle) return

    toggle.addEventListener('click', (e) => {
        if (e.target.closest('a')) return
        const isLight = document.documentElement.getAttribute('data-theme') === 'light'
        if (isLight) {
            document.documentElement.removeAttribute('data-theme')
            localStorage.setItem('theme', 'dark')
        } else {
            document.documentElement.setAttribute('data-theme', 'light')
            localStorage.setItem('theme', 'light')
        }
    })
})