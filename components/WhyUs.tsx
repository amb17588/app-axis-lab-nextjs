'use client'
import { useEffect, useRef } from 'react'
import { Smartphone, Zap, Palette, Gauge, ShieldCheck, Users } from 'lucide-react'

const features = [
  {
    icon: Smartphone,
    title: 'Mobile First',
    description: 'We prioritize mobile experiences, ensuring your app performs flawlessly across all devices and platforms.',
  },
  {
    icon: Zap,
    title: 'Scalable Architecture',
    description: 'Our robust technical foundation scales seamlessly as your user base grows from hundreds to millions.',
  },
  {
    icon: Palette,
    title: 'Beautiful UX',
    description: 'Stunning interfaces that delight users and keep them coming back, with pixel-perfect attention to detail.',
  },
  {
    icon: Gauge,
    title: 'Performance Optimized',
    description: 'Lightning-fast load times and smooth 60fps animations that set your app apart from the competition.',
  },
  {
    icon: ShieldCheck,
    title: 'Enterprise Quality',
    description: 'Rigorous testing, security best practices, and code quality standards that enterprises trust.',
  },
  {
    icon: Users,
    title: 'Long Term Support',
    description: "We're your long-term technology partner, providing ongoing support, updates, and growth strategies.",
  },
]

export default function WhyUs() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    let cleanup: (() => void) | undefined
    ;(async () => {
      const gsap = (await import('gsap')).default
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)

      const cards = ref.current?.querySelectorAll('.feature-card') ?? []
      const triggerConfig = { trigger: ref.current, start: 'top 75%', once: true }

      // All cards slide up in sync so rows stay horizontally aligned
      gsap.from(cards, {
        y: 40,
        duration: 0.7,
        ease: 'power2.out',
        scrollTrigger: triggerConfig,
      })
      // Opacity staggers independently — gives the cascade feel without shifting rows
      gsap.from(cards, {
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: triggerConfig,
      })

      cleanup = () => ScrollTrigger.getAll().forEach((t) => t.kill())
    })()
    return () => cleanup?.()
  }, [])

  return (
    <section id="why-us" className="why-us section-padding" ref={ref}>
      <div className="container">
        <div className="section-header">
          <h2>Why AppAxisLab?</h2>
          <p>We don&apos;t just build apps. We engineer digital experiences that define markets.</p>
        </div>
        <div className="features-grid">
          {features.map((f) => {
            const Icon = f.icon
            return (
              <div key={f.title} className="feature-card glass-card">
                <div className="feature-icon">
                  <Icon size={26} strokeWidth={1.75} />
                </div>
                <h3>{f.title}</h3>
                <p>{f.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
