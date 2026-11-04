'use client'
import { useId, useState } from 'react'
import { Plus } from '@phosphor-icons/react'
import { faqs } from '@/lib/faqs'

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0)
  const uid = useId()

  return (
    <section id="faq" className="section" aria-labelledby="faq-title">
      <div className="container faq-layout">
        <div className="section-header reveal" data-reveal>
          <span className="eyebrow caption-4">Questions</span>
          <h2 id="faq-title" className="heading-2">Answers before you ask</h2>
          <p className="body-3">
            Can&apos;t find what you need? Write to us at{' '}
            <a href="mailto:support@appaxislab.com" style={{ color: 'var(--text)', textDecoration: 'underline', textUnderlineOffset: 4 }}>
              support@appaxislab.com
            </a>
            .
          </p>
        </div>

        <div className="faq-list">
          {faqs.map((f, i) => {
            const isOpen = open === i
            return (
              <div className="faq-item reveal" data-reveal data-open={isOpen} style={{ ['--d' as string]: `${i * 40}ms` }} key={f.q}>
                <h3>
                  <button
                    type="button"
                    className="faq-q title-2"
                    aria-expanded={isOpen}
                    aria-controls={`${uid}-p${i}`}
                    id={`${uid}-b${i}`}
                    onClick={() => setOpen(isOpen ? null : i)}
                  >
                    <span>{f.q}</span>
                    <Plus size={20} weight="bold" aria-hidden="true" />
                  </button>
                </h3>
                <div className="faq-panel" id={`${uid}-p${i}`} role="region" aria-labelledby={`${uid}-b${i}`}>
                  <div>
                    <p className="body-5">{f.a}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
