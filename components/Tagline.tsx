'use client'
import { useEffect, useRef } from 'react'

const TEXT = 'We design the first tap, engineer the thousandth, and stay for every update after.'

export default function Tagline() {
  const ref = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const root = ref.current
    if (!root) return
    const words = [...root.querySelectorAll<HTMLElement>('.tw')]
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      words.forEach((w) => w.classList.add('on'))
      return
    }
    // The trigger line sits 35% up from the bottom of the viewport.
    // A word activates once, in reading order, as it crosses that line.
    const order = new Map(words.map((w, i) => [w, i]))
    const io = new IntersectionObserver((entries) => {
      const hits = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => order.get(a.target as HTMLElement)! - order.get(b.target as HTMLElement)!)
      hits.forEach((e, i) => {
        const el = e.target as HTMLElement
        el.style.setProperty('--d', `${Math.min(i * 45, 400)}ms`)
        el.classList.add('on')
        io.unobserve(el)
      })
    }, { rootMargin: '0px 0px -35% 0px' })
    words.forEach((w) => io.observe(w))
    return () => io.disconnect()
  }, [])

  return (
    <section className="tagline band" aria-label="Our promise">
      <div className="container">
        <h2 className="heading-2 tagline-text" ref={ref} aria-label={TEXT}>
          {TEXT.split(' ').map((w, i) => (
            <span className="tw" aria-hidden="true" key={i}>{w}</span>
          ))}
        </h2>
      </div>
    </section>
  )
}
