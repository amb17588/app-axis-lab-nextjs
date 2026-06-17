'use client'
import { useEffect } from 'react'

export default function ScrollToTop() {
  useEffect(() => {
    // Prevent the browser from restoring the previous scroll position on reload
    if (typeof window !== 'undefined' && 'scrollRestoration' in history) {
      history.scrollRestoration = 'manual'
    }
    window.scrollTo(0, 0)
  }, [])

  return null
}
