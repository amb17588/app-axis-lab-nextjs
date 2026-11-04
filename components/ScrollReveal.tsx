'use client'
import { useEffect } from 'react'

/**
 * Reveals every [data-reveal] element once as it enters the viewport.
 * Elements already on screen at load stay visible, so nothing flashes,
 * and the hidden state is only applied by JS so the page works without it.
 */
export default function ScrollReveal() {
  useEffect(() => {
    const els = [...document.querySelectorAll<HTMLElement>('[data-reveal]')]
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (!e.isIntersecting) return
        const el = e.target as HTMLElement
        el.classList.add('in')
        el.addEventListener('animationend', () => el.classList.remove('hide-init', 'in'), { once: true })
        io.unobserve(el)
      }),
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    )
    els.forEach((el) => {
      const r = el.getBoundingClientRect()
      if (r.top < window.innerHeight * 0.92 && r.bottom > 0) return
      el.classList.add('hide-init')
      io.observe(el)
    })
    return () => io.disconnect()
  }, [])
  return null
}
