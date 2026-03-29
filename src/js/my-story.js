const tabs = document.querySelectorAll('.ms-tab')

if (tabs.length) {
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const key = tab.dataset.tab

            tabs.forEach(t => t.classList.remove('active'))
            tab.classList.add('active')

            document.querySelectorAll('.ms-inst-item').forEach(el => {
                el.style.display = el.dataset.tab === key ? 'flex' : 'none'
            })

            document.querySelectorAll('.ms-item').forEach(el => {
                el.style.display = el.dataset.tab === key ? 'flex' : 'none'
            })
        })
    })

    // Init — show education by default
    document.querySelectorAll('.ms-inst-item').forEach(el => {
        el.style.display = el.dataset.tab === 'education' ? 'flex' : 'none'
    })
    document.querySelectorAll('.ms-item').forEach(el => {
        el.style.display = el.dataset.tab === 'education' ? 'flex' : 'none'
    })
}