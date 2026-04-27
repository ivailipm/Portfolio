// Apply saved theme immediately to avoid flash
const saved = localStorage.getItem('theme')
if (saved === 'dark') document.documentElement.setAttribute('data-theme', 'dark')

document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.querySelector('.ph-theme-icon')
    if (!toggle) return

    toggle.style.pointerEvents = 'auto'
    toggle.style.cursor = 'pointer'

    toggle.addEventListener('click', () => {
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark'
        if (isDark) {
            document.documentElement.removeAttribute('data-theme')
            localStorage.setItem('theme', 'light')
        } else {
            document.documentElement.setAttribute('data-theme', 'dark')
            localStorage.setItem('theme', 'dark')
        }
    })
})
