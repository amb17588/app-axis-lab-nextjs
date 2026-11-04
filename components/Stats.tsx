'use client'
import { useEffect, useRef } from 'react'

const stats = [
  { target: 500, suffix: '+', label: 'Products delivered' },
  { target: 10, suffix: 'M+', label: 'Downloads generated' },
  { target: 100, suffix: '+', label: 'Clients served' },
  { target: 10, suffix: '+', label: 'Years of experience' },
]

const easeOut = (t: number) => 1 - Math.pow(1 - t, 4)

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const root = ref.current
    if (!root) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const els = [...root.querySelectorAll<HTMLElement>('[data-target]')]
    els.forEach((el) => { el.textContent = '0' })

    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        const el = entry.target as HTMLElement
        io.unobserve(el)
        const target = Number(el.dataset.target)
        const start = performance.now()
        const duration = 1600
        const tick = (now: number) => {
          const p = Math.min((now - start) / duration, 1)
          el.textContent = String(Math.round(target * easeOut(p)))
          if (p < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      })
    }, { threshold: 0.6 })
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <section className="section" aria-label="Studio numbers" style={{ paddingBottom: "var(--s-700)" }}>
      <div className="container">
        <div className="stats-grid" ref={ref}>
          {stats.map((s, i) => (
            <div className="stat" data-tone={i} data-reveal style={{ ['--d' as string]: `${i * 60}ms` }} key={s.label}>
              <p className="stat-value num" style={{ color: 'var(--text)' }}>
                <span data-target={s.target}>{s.target}</span>{s.suffix}
              </p>
              <p className="stat-label body-5">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
