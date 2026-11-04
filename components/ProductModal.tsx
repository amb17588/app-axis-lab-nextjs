'use client'
import { useEffect, useRef, useState } from 'react'
import { X, CheckCircle, GooglePlayLogo, ShieldCheck } from '@phosphor-icons/react'
import type { Product } from '@/lib/products'
import { clean } from '@/lib/text'

interface Props {
  product: Product | null
  onClose: () => void
}

export default function ProductModal({ product, onClose }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  // Keep the last product mounted so the exit transition has content to fade out.
  const [shown, setShown] = useState<Product | null>(null)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (product) {
      setShown(product)
      if (!dialog.open) dialog.showModal()
      document.body.style.overflow = 'hidden'
    } else {
      if (dialog.open) dialog.close()
      document.body.style.overflow = ''
    }
  }, [product])

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    const handleClose = () => { document.body.style.overflow = ''; onClose() }
    dialog.addEventListener('close', handleClose)
    return () => dialog.removeEventListener('close', handleClose)
  }, [onClose])

  const handleBackdrop = (e: React.MouseEvent<HTMLDialogElement>) => {
    if (e.target === dialogRef.current) onClose()
  }

  const p = shown

  return (
    <dialog
      ref={dialogRef}
      className="product-modal"
      onClick={handleBackdrop}
      aria-labelledby="modal-title"
    >
      {p && (
        <>
          <button className="modal-close" aria-label="Close details" onClick={onClose} type="button">
            <X size={18} weight="bold" />
          </button>
          <div className="modal-grid">
            <div className="modal-media" data-tone={Number(p.id) % 5}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={p.img}
                alt={p.img.endsWith('logo.png') ? `${p.title} by AppAxisLab` : `${p.title} app screens`}
                style={p.img.endsWith('logo.png') ? { objectFit: 'contain', padding: 'var(--s-600)' } : undefined}
              />
            </div>
            <div className="modal-body">
              <span className="cat caption-4">{clean(p.category)}</span>
              <h3 id="modal-title" className="heading-4">{clean(p.title)}</h3>
              <p className="body-3">{clean(p.desc)}</p>

              <div>
                <h4 className="label title-4">Key features</h4>
                <ul className="check-list">
                  {p.features.map((f) => (
                    <li className="body-5" key={f}>
                      <CheckCircle size={18} weight="fill" aria-hidden="true" />
                      <span>{clean(f)}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="label title-4">Built with</h4>
                <div className="tag-row" style={{ marginTop: 0 }}>
                  {p.tech.map((t) => (
                    <span className="tag caption-4" key={t}>{t}</span>
                  ))}
                </div>
              </div>

              {(p.playstore || p.privacyPolicy) && (
                <div className="modal-actions">
                  {p.playstore && (
                    <a href={p.playstore} target="_blank" rel="noopener noreferrer" className="btn btn-primary button-md">
                      <GooglePlayLogo size={18} weight="fill" /> Get it on Google Play
                    </a>
                  )}
                  {p.privacyPolicy && (
                    <a href={p.privacyPolicy} target="_blank" rel="noopener noreferrer" className="btn btn-secondary button-md">
                      <ShieldCheck size={18} weight="bold" /> Privacy policy
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </dialog>
  )
}
