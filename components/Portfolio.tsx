'use client'
import { useState, useCallback, useEffect, useRef } from 'react'
import { ArrowUpRight } from '@phosphor-icons/react'
import { products, type Product } from '@/lib/products'
import { clean } from '@/lib/text'
import ProductModal from '@/components/ProductModal'

const isScreenshot = (p: Product) => !p.img.endsWith('logo.png')

export default function Portfolio() {
  const [selected, setSelected] = useState<Product | null>(null)
  const handleClose = useCallback(() => setSelected(null), [])

  const gridRef = useRef<HTMLDivElement>(null)

  // Pointer tilt for the featured cards: fine pointers only, rAF throttled
  useEffect(() => {
    const grid = gridRef.current
    if (!grid) return
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    const still = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!fine || still) return
    let raf = 0
    const reset = (card: HTMLElement) => { card.style.setProperty('--rx', '0deg'); card.style.setProperty('--ry', '0deg') }
    const onMove = (e: PointerEvent) => {
      const card = (e.target as HTMLElement).closest<HTMLElement>('.app-card')
      if (!card) return
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const r = card.getBoundingClientRect()
        const px = (e.clientX - r.left) / r.width - 0.5
        const py = (e.clientY - r.top) / r.height - 0.5
        card.style.setProperty('--ry', `${(px * 6).toFixed(2)}deg`)
        card.style.setProperty('--rx', `${(-py * 6).toFixed(2)}deg`)
      })
    }
    const onLeave = (e: PointerEvent) => {
      const card = (e.target as HTMLElement).closest<HTMLElement>('.app-card')
      if (card) reset(card)
    }
    grid.addEventListener('pointermove', onMove)
    grid.addEventListener('pointerout', onLeave)
    return () => { cancelAnimationFrame(raf); grid.removeEventListener('pointermove', onMove); grid.removeEventListener('pointerout', onLeave) }
  }, [])

  const featured = products.filter(isScreenshot)
  const more = products.filter((p) => !isScreenshot(p))

  return (
    <section id="portfolio" className="section" aria-labelledby="portfolio-title">
      <div className="container">
        <div className="section-header reveal" data-reveal>
          <span className="eyebrow caption-4">Selected work</span>
          <h2 id="portfolio-title" className="heading-2">Apps we have built and shipped</h2>
          <p className="body-3">
            From utilities used every day to AI tools and health trackers, each product started as one clear idea and was taken all the way to the store.
          </p>
        </div>

        <div className="featured-grid" ref={gridRef}>
          {featured.map((p, i) => (
            <div className="lift" data-reveal="pop" style={{ ['--d' as string]: `${(i % 2) * 100}ms` }} key={p.id}>
              <button
                type="button"
                className="app-card"
                data-tone={i % 5}
                onClick={() => setSelected(p)}
                aria-haspopup="dialog"
                aria-label={`${p.title}, view details`}
              >
                <div className="app-card-media">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.img} alt={`${p.title} app screens`} loading="lazy" width={912} height={1159} />
                  <span className="cat-sticker caption-3">{clean(p.category)}</span>
                  <span className="app-card-arrow" aria-hidden="true"><ArrowUpRight size={18} weight="bold" /></span>
                </div>
                <div className="app-card-body">
                  <h3 className="title-1">{clean(p.title)}</h3>
                  <p className="body-6">{clean(p.desc)}</p>
                  <div className="tag-row">
                    {p.tech.slice(0, 4).map((t) => (
                      <span className="tag caption-4" key={t}>{t}</span>
                    ))}
                  </div>
                </div>
              </button>
            </div>
          ))}
        </div>

        <div className="more-title reveal" data-reveal>
          <h3 className="heading-5">More from the studio</h3>
          <span className="caption-2 count">{more.length} more apps</span>
        </div>
        <div className="more-grid">
          {more.map((p, i) => (
            <div className="lift lift-sm" data-reveal="pop" style={{ ['--d' as string]: `${(i % 3) * 60}ms` }} key={p.id}>
              <button
                type="button"
                className="mini-card"
                data-tone={(i + 2) % 5}
                onClick={() => setSelected(p)}
                aria-haspopup="dialog"
                aria-label={`${p.title}, view details`}
              >
                <span className="dot" aria-hidden="true" />
                <span className="info">
                  <span className="title-3">{clean(p.title)}</span>
                  <span className="cat caption-4">{clean(p.category)}</span>
                </span>
                <ArrowUpRight size={18} weight="bold" aria-hidden="true" />
              </button>
            </div>
          ))}
        </div>
      </div>

      <ProductModal product={selected} onClose={handleClose} />
    </section>
  )
}
