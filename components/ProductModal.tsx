'use client'
import { useEffect, useRef } from 'react'
import type { Product } from '@/lib/products'

interface Props {
  product: Product | null
  onClose: () => void
}

export default function ProductModal({ product, onClose }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (product) {
      dialog.showModal()
      document.body.style.overflow = 'hidden'
    } else {
      dialog.close()
      document.body.style.overflow = ''
    }
  }, [product])

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    const handleClose = () => onClose()
    dialog.addEventListener('close', handleClose)
    return () => dialog.removeEventListener('close', handleClose)
  }, [onClose])

  const handleBackdrop = (e: React.MouseEvent<HTMLDialogElement>) => {
    if (e.target === dialogRef.current) onClose()
  }

  return (
    <dialog ref={dialogRef} className="glass-modal product-modal" onClick={handleBackdrop}>
      {product && (
        <div className="modal-content">
          <button className="close-modal" aria-label="Close" onClick={onClose}>
            &times;
          </button>
          <div className="modal-grid">
            <div className="modal-image">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={product.img} alt={product.title} />
            </div>
            <div className="modal-details">
              <span className="category-tag">{product.category}</span>
              <h2>{product.title}</h2>
              <p>{product.desc}</p>

              <div className="modal-features">
                <h3>Key Features</h3>
                <ul>
                  {product.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </div>

              <div className="modal-tech">
                <h3>Technologies</h3>
                <div className="tech-stack">
                  {product.tech.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </div>

              {product.playstore && (
                <div className="modal-actions">
                  <a
                    href={product.playstore}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    Get it on Google Play
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </dialog>
  )
}
