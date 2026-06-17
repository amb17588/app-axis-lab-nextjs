'use client'
import { useEffect, useRef } from 'react'

const stats = [
  { target: 500, suffix: '+',  label: 'Products Delivered' },
  { target: 10,  suffix: 'M+', label: 'Downloads Generated' },
  { target: 100, suffix: '+',  label: 'Clients Served' },
  { target: 10,  suffix: '+',  label: 'Years Experience' },
]

export default function Stats() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    let cleanup: (() => void) | undefined
    ;(async () => {
      const gsap = (await import('gsap')).default
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)

      const els = ref.current?.querySelectorAll<HTMLHeadingElement>('.stat-number')
      els?.forEach((el) => {
        const target = Number(el.dataset.target)
        const obj = { val: 0 }
        ScrollTrigger.create({
          trigger: el,
          start: 'top 85%',
          once: true,
          onEnter: () => {
            gsap.to(obj, {
              val: target,
              duration: 2,
              ease: 'power2.out',
              onUpdate() { el.textContent = String(Math.ceil(obj.val)) },
            })
          },
        })
      })

      cleanup = () => ScrollTrigger.getAll().forEach((t) => t.kill())
    })()
    return () => cleanup?.()
  }, [])

  return (
    <section className="stats section-padding" ref={ref}>
      <div className="container stats-grid">
        {stats.map((s) => (
          <div className="stat-item" key={s.label}>
            <h2 className="stat-number" data-target={s.target}>0</h2>
            <span>{s.suffix}</span>
            <p className="stat-label">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
