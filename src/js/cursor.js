const dot    = document.createElement('div');
const ring   = document.createElement('div');
dot.className  = 'cursor-dot';
ring.className = 'cursor-ring';
document.body.appendChild(dot);
document.body.appendChild(ring);

let mouseX = 0, mouseY = 0;
let ringX  = 0, ringY  = 0;
const LERP = 0.12;

document.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
});

(function loop() {
    ringX += (mouseX - ringX) * LERP;
    ringY += (mouseY - ringY) * LERP;
    ring.style.transform = `translate(${ringX}px, ${ringY}px)`;
    requestAnimationFrame(loop);
})();

// Grow ring on hoverable elements
const HOVER_SEL = 'a, button, [data-decrypt], .proj-card, .tool-card, .ct-social-row, .ph-toggle';

document.addEventListener('mouseover', e => {
    if (e.target.closest(HOVER_SEL)) {
        ring.classList.add('cursor-ring--hover');
        dot.classList.add('cursor-dot--hover');
    }
});

document.addEventListener('mouseout', e => {
    if (e.target.closest(HOVER_SEL)) {
        ring.classList.remove('cursor-ring--hover');
        dot.classList.remove('cursor-dot--hover');
    }
});
