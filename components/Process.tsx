'use client'
import { useEffect, useRef } from 'react'

const steps = [
  {
    number: '01',
    title: 'Discover',
    description: 'We analyze your market, users, and competition to identify winning opportunities.',
  },
  {
    number: '02',
    title: 'Design',
    description: 'Pixel-perfect UI/UX design that delights users and drives engagement.',
  },
  {
    number: '03',
    title: 'Develop',
    description: 'Clean, maintainable code built with the latest technologies and best practices.',
  },
  {
    number: '04',
    title: 'Test',
    description: 'Comprehensive QA across devices and platforms to ensure flawless performance.',
  },
  {
    number: '05',
    title: 'Launch',
    description: 'Smooth deployment to app stores with ASO optimization and launch strategy.',
  },
  {
    number: '06',
    title: 'Scale',
    description: 'Continuous improvements, analytics-driven updates, and growth optimization.',
  },
]

export default function Process() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    let cleanup: (() => void) | undefined
    ;(async () => {
      const gsap = (await import('gsap')).default
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)

      gsap.from(ref.current?.querySelectorAll('.timeline-item') ?? [], {
        opacity: 0,
        x: -40,
        duration: 0.6,
        stagger: 0.2,
        ease: 'power2.out',
        scrollTrigger: { trigger: ref.current, start: 'top 75%', once: true },
      })

      cleanup = () => ScrollTrigger.getAll().forEach((t) => t.kill())
    })()
    return () => cleanup?.()
  }, [])

  return (
    <section id="process" className="process section-padding" ref={ref}>
      <div className="container">
        <div className="section-header">
          <h2>Our Process</h2>
          <p>A proven methodology that takes your idea from concept to a market-leading product.</p>
        </div>
        <div className="timeline">
          <div className="timeline-line" />
          {steps.map((s) => (
            <div key={s.number} className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-content glass-card">
                <h3>{s.number}. {s.title}</h3>
                <p>{s.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
