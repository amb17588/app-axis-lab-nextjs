'use client'
import { useEffect, useState } from 'react'

const navLinks = [
  { href: '#portfolio',    label: 'Portfolio' },
  { href: '#process',      label: 'Process' },
  { href: '#why-us',       label: 'Why Us' },
  // { href: '#testimonials', label: 'Testimonials' },
  { href: '#contact',      label: 'Contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
  }, [menuOpen])

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setMenuOpen(false) }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [])

  const close = () => setMenuOpen(false)

  return (
    <>
      <header className={`header${scrolled ? ' scrolled' : ''}`}>
        <div className="container">
          <div className="header-inner">
            <a href="#" className="logo">AppAxis<span>Lab</span></a>
            <nav className="nav">
              {navLinks.map((l) => (
                <a key={l.href} href={l.href}>{l.label}</a>
              ))}
              <a href="#contact" className="btn btn-primary">Start a Project</a>
            </nav>
            <button
              className={`hamburger${menuOpen ? ' open' : ''}`}
              aria-label="Toggle navigation"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((o) => !o)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <div className={`mobile-nav${menuOpen ? ' open' : ''}`} aria-hidden={!menuOpen}>
        {navLinks.map((l) => (
          <a key={l.href} href={l.href} onClick={close}>{l.label}</a>
        ))}
        <a href="#contact" className="btn btn-primary" onClick={close}>Start a Project</a>
      </div>
    </>
  )
}
