import { useEffect, useRef } from 'react'
import { createRoot } from 'react-dom/client'

function SphereCanvas() {
    const canvasRef = useRef(null)
    const rafRef = useRef(null)
    const angleRef = useRef(0)

    useEffect(() => {
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')
        const LAT = 18, LON = 18, SEG = 60
        let W, H, cx, cy, R

        const resize = () => {
            const rect = canvas.parentElement.getBoundingClientRect()
            W = canvas.width = rect.width
            H = canvas.height = rect.height
            cx = W * 0.48
            cy = H * 0.5
            R = Math.min(W, H) * 0.36
        }

        const project = (lat, lon, ax) => {
            let x = Math.cos(lat) * Math.sin(lon)
            let y = Math.sin(lat)
            let z = Math.cos(lat) * Math.cos(lon)
            const x2 = x * Math.cos(ax) + z * Math.sin(ax)
            const z2 = -x * Math.sin(ax) + z * Math.cos(ax)
            const tilt = 0.25
            const y2 = y * Math.cos(tilt) - z2 * Math.sin(tilt)
            const z3 = y * Math.sin(tilt) + z2 * Math.cos(tilt)
            return { sx: cx + x2 * R, sy: cy + y2 * R, depth: (z3 + 1.5) / 2.5 }
        }

        const draw = (ax) => {
            ctx.clearRect(0, 0, W, H)

            for (let i = 0; i <= LAT; i++) {
                const lat = -Math.PI / 2 + (Math.PI * i) / LAT
                ctx.beginPath()
                let first = true
                for (let j = 0; j <= SEG; j++) {
                    const p = project(lat, (Math.PI * 2 * j) / SEG, ax)
                    first ? (ctx.moveTo(p.sx, p.sy), first = false) : ctx.lineTo(p.sx, p.sy)
                }
                ctx.strokeStyle = `rgba(0,255,136,${(0.12 + project(lat, 0, ax).depth * 0.55) * 0.65})`
                ctx.lineWidth = 0.5
                ctx.stroke()
            }

            for (let j = 0; j <= LON; j++) {
                const lon = (Math.PI * 2 * j) / LON
                ctx.beginPath()
                let first = true
                for (let i = 0; i <= SEG; i++) {
                    const p = project(-Math.PI / 2 + (Math.PI * i) / SEG, lon, ax)
                    first ? (ctx.moveTo(p.sx, p.sy), first = false) : ctx.lineTo(p.sx, p.sy)
                }
                ctx.strokeStyle = `rgba(0,255,136,${(0.12 + project(0, lon, ax).depth * 0.55) * 0.65})`
                ctx.lineWidth = 0.5
                ctx.stroke()
            }

            for (let i = 0; i <= LAT; i += 3) {
                for (let j = 0; j <= LON; j += 3) {
                    const p = project(-Math.PI / 2 + (Math.PI * i) / LAT, (Math.PI * 2 * j) / LON, ax)
                    if (p.depth > 0.55) {
                        ctx.beginPath()
                        ctx.arc(p.sx, p.sy, 1.2, 0, Math.PI * 2)
                        ctx.fillStyle = `rgba(0,255,136,${p.depth * 0.7})`
                        ctx.fill()
                    }
                }
            }

            const grd = ctx.createRadialGradient(cx, cy, R * 0.5, cx, cy, R * 1.15)
            grd.addColorStop(0, 'rgba(0,255,136,0)')
            grd.addColorStop(0.75, 'rgba(0,255,136,0.025)')
            grd.addColorStop(1, 'rgba(0,255,136,0)')
            ctx.beginPath()
            ctx.arc(cx, cy, R * 1.15, 0, Math.PI * 2)
            ctx.fillStyle = grd
            ctx.fill()
        }

        const loop = () => {
            angleRef.current += 0.003
            draw(angleRef.current)
            rafRef.current = requestAnimationFrame(loop)
        }

        resize()
        window.addEventListener('resize', resize)
        loop()

        return () => {
            cancelAnimationFrame(rafRef.current)
            window.removeEventListener('resize', resize)
        }
    }, [])

    return <canvas ref={canvasRef} className="ph-sphere-canvas" />
}

// Mount only if element exists on this page
const sphereEl = document.getElementById('sphere-root')
if (sphereEl) {
    createRoot(sphereEl).render(<SphereCanvas />)
}