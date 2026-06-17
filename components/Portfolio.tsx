'use client'
import { useState, useCallback } from 'react'
import { products, type Product } from '@/lib/products'
import ProductModal from '@/components/ProductModal'

const filters = [
  { label: 'All',      value: 'all' },
  { label: 'Apps',     value: 'apps' },
  { label: 'Creative', value: 'creative' },
  { label: 'Utilities',value: 'utilities' },
]

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  const filtered = activeFilter === 'all'
    ? products
    : products.filter((p) => p.filterCategory.includes(activeFilter))

  const handleClose = useCallback(() => setSelectedProduct(null), [])

  return (
    <section id="portfolio" className="portfolio section-padding">
      <div className="container">
        <div className="section-header">
          <h2>Our Portfolio</h2>
          <p>A selection of apps we&apos;ve built that are defining their categories.</p>
        </div>

        {/* <div className="portfolio-filters">
          {filters.map((f) => (
            <button
              key={f.value}
              className={`filter-btn${activeFilter === f.value ? ' active' : ''}`}
              onClick={() => setActiveFilter(f.value)}
            >
              {f.label}
            </button>
          ))}
        </div> */}

        <div className="portfolio-grid">
          {filtered.map((product) => (
            <div
              key={product.id}
              className="portfolio-card glass-card"
              onClick={() => setSelectedProduct(product)}
              tabIndex={0}
              role="button"
              onKeyDown={(e) => e.key === 'Enter' && setSelectedProduct(product)}
            >
              <div className="card-image-wrapper">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={product.img} alt={product.title} />
                <div className="card-overlay">
                  <span style={{ color: '#fff', fontWeight: 600, fontSize: '0.9rem', letterSpacing: '0.05em' }}>
                    View Details
                  </span>
                </div>
              </div>
              <div className="card-content">
                <span className="category-tag">{product.category}</span>
                <h3>{product.title}</h3>
                <p>{product.desc}</p>
                <div className="tech-stack">
                  {product.tech.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ProductModal product={selectedProduct} onClose={handleClose} />
    </section>
  )
}
