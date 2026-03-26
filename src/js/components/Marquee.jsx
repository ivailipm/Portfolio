import { createRoot } from 'react-dom/client'

const items = ["MOTION", "TYPOGRAPHY", "SYSTEMS", "IDENTITY", "BRANDING", "INTERACTION"]
const repeated = [...items, ...items, ...items, ...items]

function MarqueeTicker() {
    return (
        <div className="ticker-wrap">
            <div className="ticker-track">
                {repeated.map((text, i) => (
                    <div key={i} className="ticker-item">
                        <span className="ticker-star">✳</span>
                        {text}
                    </div>
                ))}
            </div>
        </div>
    )
}

// Mount only if element exists on this page
const marqueeEl = document.getElementById('marquee-root')
if (marqueeEl) {
    createRoot(marqueeEl).render(<MarqueeTicker />)
}