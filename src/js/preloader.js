const preloader = document.getElementById('preloader');
const seen = sessionStorage.getItem('preloader-seen');

if (preloader && seen) {
    preloader.style.display = 'none';
}

if (preloader && !seen) {
    sessionStorage.setItem('preloader-seen', '1');
    const hLine = document.getElementById('preloader-h');
    const vLine = document.getElementById('preloader-v');
    const count = document.getElementById('preloader-count');
    const label = document.getElementById('preloader-label');

    document.body.style.overflow = 'hidden';

    let progress = 0;

    // Phase 1 (0–50%): move right along the bottom
    // Phase 2 (50–100%): move up to the top
    const X_START = 12, X_END = 76;   // vw — stop before edge so text isn't clipped
    const Y_START = 88, Y_END = 12;   // vh

    function setPos(x, y) {
        hLine.style.top  = y + 'vh';
        vLine.style.left = x + 'vw';
        count.style.top  = y + 'vh';
        count.style.left = x + 'vw';
        label.style.top  = y + 'vh';
        label.style.left = x + 'vw';
    }

    function tick() {
        const step = (100 - progress) * 0.035 + 0.4;
        progress = Math.min(progress + step, 100);

        let x, y;
        if (progress <= 50) {
            // Phase 1: slide right, stay at bottom
            const t = progress / 50;
            x = X_START + t * (X_END - X_START);
            y = Y_START;
        } else {
            // Phase 2: stay at right, move up
            const t = (progress - 50) / 50;
            x = X_END;
            y = Y_START - t * (Y_START - Y_END);
        }

        setPos(x, y);
        count.textContent = Math.floor(progress) + '%';

        if (progress < 100) {
            requestAnimationFrame(tick);
        } else {
            count.textContent = '100%';
            setTimeout(exit, 180);
        }
    }

    function exit() {
        count.classList.add('preloader--exit');
        label.classList.add('preloader--exit');

        // h-line shoots up, v-line shoots right
        hLine.style.transition = 'top 0.7s cubic-bezier(0.16, 1, 0.3, 1)';
        hLine.style.top = '-2px';
        vLine.style.transition = 'left 0.7s cubic-bezier(0.16, 1, 0.3, 1)';
        vLine.style.left = '110vw';

        setTimeout(() => {
            preloader.classList.add('preloader--done');
            document.body.style.overflow = '';
        }, 750);
    }

    requestAnimationFrame(tick);
}
