'use client'
import { useEffect } from 'react'

export default function ScrollToTop() {
  useEffect(() => {
    // Prevent the browser from restoring the previous scroll position on reload
    if (typeof window !== 'undefined' && 'scrollRestoration' in history) {
      history.scrollRestoration = 'manual'
    }

    // Respect deep links to an in-page anchor (e.g. #eula, #privacy) instead
    // of forcing the page back to the top.
    if (window.location.hash) {
      const target = document.getElementById(window.location.hash.slice(1))
      if (target) {
        target.scrollIntoView()
        return
      }
    }

    window.scrollTo(0, 0)
  }, [])

  return null
}
