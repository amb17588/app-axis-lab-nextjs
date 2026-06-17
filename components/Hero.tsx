'use client'
import { useEffect, useRef } from 'react'
import { Rocket, Star } from 'lucide-react'

export default function Hero() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    let ctx: { revert: () => void } | undefined
    ;(async () => {
      const gsap = (await import('gsap')).default
      ctx = gsap.context(() => {
        const tl = gsap.timeline()
        tl.from('.hero-title',    { y: 50, opacity: 0, duration: 1,   ease: 'power3.out' })
          .from('.hero-subtitle', { y: 30, opacity: 0, duration: 0.8, ease: 'power3.out' }, '-=0.6')
          .from('.hero-cta',      { y: 20, opacity: 0, duration: 0.6, ease: 'power3.out' }, '-=0.4')
          .from('.mockup-wrapper',{ scale: 0.9, opacity: 0, duration: 1, ease: 'power3.out' }, '-=0.8')
          .from('.floating-card', { x: 30, opacity: 0, duration: 0.8, stagger: 0.2, ease: 'back.out(1.7)' }, '-=0.5')
      }, ref)
    })()
    return () => ctx?.revert()
  }, [])

  const scrollTo = (id: string) => {
    const el = document.querySelector(id)
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 80, behavior: 'smooth' })
  }

  return (
    <section className="hero" id="home" ref={ref}>
      <div className="hero-bg-glow" />
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Building Apps That <br />
            <span>Millions Love</span>
          </h1>
          <p className="hero-subtitle">
            We design, develop, and scale mobile applications that combine exceptional user experience with business growth.
          </p>
          <div className="hero-cta">
            <a
              href="#portfolio"
              className="btn btn-primary"
              onClick={(e) => { e.preventDefault(); scrollTo('#portfolio') }}
            >
              View Portfolio
            </a>
            <a
              href="#contact"
              className="btn btn-secondary btn-outline"
              onClick={(e) => { e.preventDefault(); scrollTo('#contact') }}
            >
              Contact Us
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="mockup-wrapper">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/hero_app_mockup_1781618273028.png"
              alt="Premium App Mockup"
              className="hero-mockup"
            />
            <div className="floating-card card-1">
              <span className="icon"><Rocket size={22} /></span>
              <div>
                <p className="card-title">Performance</p>
                <p className="card-value">99.9% Uptime</p>
              </div>
            </div>
            <div className="floating-card card-2">
              <span className="icon"><Star size={22} /></span>
              <div>
                <p className="card-title">User Rating</p>
                <p className="card-value">4.9 / 5.0</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
