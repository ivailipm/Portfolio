const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+';

function scramble(text, revealed, chars) {
    return text.split('').map((char, i) => {
        if (char === ' ') return ' ';
        if (revealed.has(i)) return char;
        return chars[Math.floor(Math.random() * chars.length)];
    }).join('');
}

function initDecrypt(el) {
    const original = el.textContent;
    const speed   = parseInt(el.dataset.decryptSpeed) || 40;
    const sequential = el.hasAttribute('data-decrypt-sequential');
    const chars   = el.dataset.decryptChars || CHARS;
    const maxIter = parseInt(el.dataset.decryptIterations) || 8;

    let intervalId  = null;
    let isAnimating = false;

    function play() {
        if (isAnimating) return;
        isAnimating = true;

        const revealed = new Set();
        let iter = 0;

        intervalId = setInterval(() => {
            if (sequential) {
                const next = revealed.size;
                if (next < original.length) {
                    revealed.add(next);
                    el.textContent = scramble(original, revealed, chars);
                } else {
                    clearInterval(intervalId);
                    el.textContent = original;
                    isAnimating = false;
                }
            } else {
                el.textContent = scramble(original, new Set(), chars);
                iter++;
                if (iter >= maxIter) {
                    clearInterval(intervalId);
                    el.textContent = original;
                    isAnimating = false;
                }
            }
        }, speed);
    }

    function reset() {
        clearInterval(intervalId);
        isAnimating = false;
        el.textContent = original;
    }

    el.addEventListener('mouseenter', play);
    el.addEventListener('mouseleave', reset);
}

const NAV_SELECTORS = '.ph-nav-link, .footer-nav-link, .ph-logo, .footer-logo, .btn-contact, .btn-projects, .btn-primary, .btn-secondary';

export function initDecryptedText() {
    document.querySelectorAll('[data-decrypt]').forEach(initDecrypt);
    document.querySelectorAll(NAV_SELECTORS).forEach(el => initDecrypt(el));
}
