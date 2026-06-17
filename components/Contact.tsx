'use client'
import { useState, FormEvent } from 'react'
import { Mail, MapPin } from 'lucide-react'

type Status = 'idle' | 'sending' | 'success' | 'error'

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle')
  const [fields, setFields] = useState({ name: '', email: '', company: '', message: '' })

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(fields),
      })
      if (res.ok) {
        setStatus('success')
        setFields({ name: '', email: '', company: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const set = (key: keyof typeof fields) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setFields((f) => ({ ...f, [key]: e.target.value }))

  return (
    <section id="contact" className="contact section-padding">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-info">
            <h2>Let&apos;s Build Something Amazing</h2>
            <p>
              Have an idea for an app? We&apos;d love to hear about it. Fill out the form and our team
              will get back to you within 24 hours.
            </p>
            <div className="contact-details">
              <p>
                <Mail size={17} strokeWidth={2} />
                support@appaxislab.com
              </p>
              <p>
                {/* <MapPin size={17} strokeWidth={2} />
                Available Worldwide — Remote &amp; On-site */}
              </p>
            </div>
            <div className="social-links">
              <a
                href="https://play.google.com/store/apps/developer?id=App+Axis+Lab"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Play
              </a>
            </div>
          </div>

          <div className="contact-form-wrapper glass-card">
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="John Smith"
                  required
                  value={fields.name}
                  onChange={set('name')}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  required
                  value={fields.email}
                  onChange={set('email')}
                />
              </div>
              <div className="form-group">
                <label htmlFor="company">Company (Optional)</label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  placeholder="Your company name"
                  value={fields.company}
                  onChange={set('company')}
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell us about your project..."
                  required
                  value={fields.message}
                  onChange={set('message')}
                />
              </div>

              {status === 'success' && (
                <p style={{ color: '#4ade80', marginBottom: '1rem' }}>
                  Message sent! We&apos;ll be in touch shortly.
                </p>
              )}
              {status === 'error' && (
                <p style={{ color: '#f87171', marginBottom: '1rem' }}>
                  Something went wrong. Please try again.
                </p>
              )}

              <button
                type="submit"
                className="btn btn-primary full-width"
                disabled={status === 'sending'}
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
