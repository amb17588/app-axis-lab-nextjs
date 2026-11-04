'use client'
import { useRef, useState, FormEvent } from 'react'
import { ArrowRight, CheckCircle, Check, EnvelopeSimple, GooglePlayLogo } from '@phosphor-icons/react'

type Status = 'idle' | 'sending' | 'success' | 'error'
type Fields = { name: string; email: string; company: string; message: string }
type Errors = Partial<Record<keyof Fields, string>>

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validate(f: Fields): Errors {
  const e: Errors = {}
  if (!f.name.trim()) e.name = 'Enter your name so we know who to reply to.'
  if (!f.email.trim()) e.email = 'Enter your email address so we can reply.'
  else if (!EMAIL_RE.test(f.email.trim())) e.email = 'This email address looks incomplete. Use a format like name@company.com.'
  if (!f.message.trim()) e.message = 'Tell us a little about your app so we can prepare for the conversation.'
  else if (f.message.trim().length < 10) e.message = 'Add a few more details, at least 10 characters.'
  return e
}

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle')
  const [fields, setFields] = useState<Fields>({ name: '', email: '', company: '', message: '' })
  const [errors, setErrors] = useState<Errors>({})
  const [sentTo, setSentTo] = useState('')
  const formRef = useRef<HTMLFormElement>(null)

  const set = (key: keyof Fields) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFields((f) => ({ ...f, [key]: e.target.value }))
      if (errors[key]) setErrors((er) => ({ ...er, [key]: undefined }))
    }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    const found = validate(fields)
    setErrors(found)
    const firstKey = (Object.keys(found) as (keyof Fields)[])[0]
    if (firstKey) {
      formRef.current?.querySelector<HTMLElement>(`[name="${firstKey}"]`)?.focus()
      return
    }
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(fields),
      })
      if (res.ok) {
        setSentTo(fields.email.trim())
        setStatus('success')
        setFields({ name: '', email: '', company: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const err = (k: keyof Fields) => ({
    'aria-invalid': errors[k] ? (true as const) : undefined,
    'aria-describedby': errors[k] ? `${k}-error` : undefined,
  })

  return (
    <section id="contact" className="section contact" aria-labelledby="contact-title">
      <div className="container contact-grid">
        <div className="contact-copy reveal" data-reveal>
          <span className="eyebrow caption-4">Start a project</span>
          <h2 id="contact-title" className="heading-2">Tell us about the app you want to build</h2>
          <p className="body-3">
            Share the idea, the audience, and what success looks like. A real person on our team reads every message.
          </p>
          <ul className="assure body-5">
            <li><Check size={18} weight="bold" aria-hidden="true" /> We reply within 24 hours</li>
            <li><Check size={18} weight="bold" aria-hidden="true" /> No commitment to start the conversation</li>
            <li><Check size={18} weight="bold" aria-hidden="true" /> Design, build, and launch with one team</li>
          </ul>
          <div className="contact-links">
            <a href="mailto:support@appaxislab.com" className="btn btn-secondary button-sm">
              <EnvelopeSimple size={16} weight="bold" aria-hidden="true" /> support@appaxislab.com
            </a>
            <a
              href="https://play.google.com/store/apps/developer?id=App+Axis+Lab"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary button-sm"
            >
              <GooglePlayLogo size={16} weight="fill" aria-hidden="true" /> Google Play
            </a>
          </div>
        </div>

        <div className="form-card reveal" data-reveal style={{ ['--d' as string]: '100ms' }}>
          {status === 'success' ? (
            <div className="success" role="status">
              <span className="success-icon"><CheckCircle size={26} weight="fill" aria-hidden="true" /></span>
              <h3 className="heading-5">Message sent</h3>
              <p className="body-5">
                Thanks for reaching out. We will reply to {sentTo} within 24 hours.
              </p>
              <button type="button" className="btn btn-secondary button-md" onClick={() => setStatus('idle')}>
                Send another message
              </button>
            </div>
          ) : (
            <form className="form" ref={formRef} onSubmit={handleSubmit} noValidate>
              <div className="form-row">
                <div className="field">
                  <label htmlFor="name" className="title-4">Your name</label>
                  <input id="name" name="name" type="text" autoComplete="name" className="input" placeholder="Amna Siddiqui" value={fields.name} onChange={set('name')} {...err('name')} />
                  {errors.name && <p id="name-error" className="field-error caption-2">{errors.name}</p>}
                </div>
                <div className="field">
                  <label htmlFor="email" className="title-4">Email address</label>
                  <input id="email" name="email" type="email" autoComplete="email" inputMode="email" className="input" placeholder="amna@company.com" value={fields.email} onChange={set('email')} {...err('email')} />
                  {errors.email && <p id="email-error" className="field-error caption-2">{errors.email}</p>}
                </div>
              </div>
              <div className="field">
                <label htmlFor="company" className="title-4">Company <span className="opt">(optional)</span></label>
                <input id="company" name="company" type="text" autoComplete="organization" className="input" placeholder="Your company name" value={fields.company} onChange={set('company')} />
              </div>
              <div className="field">
                <label htmlFor="message" className="title-4">About your project</label>
                <textarea id="message" name="message" rows={5} className="input" placeholder="What are you building, and who is it for?" value={fields.message} onChange={set('message')} {...err('message')} />
                {errors.message && <p id="message-error" className="field-error caption-2">{errors.message}</p>}
              </div>

              {status === 'error' && (
                <p className="form-error body-5" role="alert">
                  We could not send your message. Check your connection and try again, or email support@appaxislab.com.
                </p>
              )}

              <div className="form-foot">
                <button type="submit" className="btn btn-primary button-md" disabled={status === 'sending'} aria-busy={status === 'sending'}>
                  {status === 'sending' ? 'Sending your message' : <>Start your project <ArrowRight size={18} weight="bold" className="btn-icon" /></>}
                </button>
                <p className="form-note caption-2">We only use your details to reply to this message.</p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
