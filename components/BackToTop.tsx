'use client'
import { useEffect, useState } from 'react'
import { ArrowUp } from '@phosphor-icons/react'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const hero = document.getElementById('home')
    if (!hero) return
    const io = new IntersectionObserver(([e]) => setVisible(!e.isIntersecting))
    io.observe(hero)
    return () => io.disconnect()
  }, [])

  return (
    <button
      type="button"
      className={`back-to-top${visible ? ' visible' : ''}`}
      aria-label="Back to top"
      tabIndex={visible ? 0 : -1}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <ArrowUp size={20} weight="bold" />
    </button>
  )
}
