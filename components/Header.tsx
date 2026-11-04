'use client'
import { useEffect, useState } from 'react'
import { ArrowRight } from '@phosphor-icons/react'

const navLinks = [
  { id: 'portfolio', label: 'Apps' },
  { id: 'process', label: 'Process' },
  { id: 'why-us', label: 'Why us' },
  { id: 'faq', label: 'FAQ' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState<string>('')

  // Elevate the bar once the page leaves the top. Observer, not a scroll listener.
  useEffect(() => {
    const sentinel = document.getElementById('top-sentinel')
    if (!sentinel) return
    const io = new IntersectionObserver(([e]) => setScrolled(!e.isIntersecting))
    io.observe(sentinel)
    return () => io.disconnect()
  }, [])

  // Current section indicator
  useEffect(() => {
    const targets = [...navLinks.map((l) => l.id), 'contact']
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el)
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id) }),
      { rootMargin: '-45% 0px -50% 0px' },
    )
    targets.forEach((t) => io.observe(t))
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setMenuOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const close = () => setMenuOpen(false)

  return (
    <>
      <header className={`header${scrolled ? ' scrolled' : ''}`}>
        <div className="header-bar">
          <a href="#home" className="logo button-sm" aria-label="AppAxisLab home" onClick={close}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/image/logo.png" alt="" width={24} height={24} />
            <span className="wordmark">AppAxis<span>Lab</span></span>
          </a>

          <nav className="nav button-sm" aria-label="Primary">
            {navLinks.map((l) => (
              <a key={l.id} href={`#${l.id}`} aria-current={active === l.id ? 'true' : undefined}>
                {l.label}
              </a>
            ))}
            <a href="#contact" className="btn btn-primary btn-pill button-sm">
              Start your project
            </a>
          </nav>

          <button
            className={`hamburger${menuOpen ? ' open' : ''}`}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span />
            <span />
          </button>
        </div>
      </header>

      <div id="mobile-menu" className={`mobile-nav${menuOpen ? ' open' : ''}`} aria-hidden={!menuOpen} inert={!menuOpen}>
        {navLinks.map((l, i) => (
          <a
            key={l.id}
            href={`#${l.id}`}
            style={{ ['--i' as string]: i }}
            aria-current={active === l.id ? 'true' : undefined}
            onClick={close}
          >
            {l.label}
          </a>
        ))}
        <a
          href="#contact"
          className="btn btn-primary button-md"
          style={{ ['--i' as string]: navLinks.length }}
          onClick={close}
        >
          Start your project <ArrowRight size={18} weight="bold" className="btn-icon" />
        </a>
      </div>
    </>
  )
}
