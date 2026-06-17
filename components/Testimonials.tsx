const testimonials = [
  {
    quote: '"AppAxisLab didn\'t just build an app; they transformed our business. Their attention to detail and premium design sensibility is unmatched."',
    name: 'Sarah Jenkins',
    role: 'CEO, Nexus Financial',
    initial: 'S',
  },
  {
    quote: '"The performance of the app is incredible. Our user retention skyrocketed by 40% after launching the new version built by the team."',
    name: 'Marcus Chen',
    role: 'Product Lead, Sync Master',
    initial: 'M',
  },
  {
    quote: '"Finding a studio that understands both deep technical architecture and high-end design is rare. AppAxisLab delivers on both fronts."',
    name: 'Elena Rodriguez',
    role: 'Founder, FitPro',
    initial: 'E',
  },
]

function TestimonialCard({ t }: { t: typeof testimonials[0] }) {
  return (
    <div className="testimonial-card glass-card">
      <p className="quote">{t.quote}</p>
      <div className="client-info">
        <div className="client-avatar">{t.initial}</div>
        <div>
          <h4>{t.name}</h4>
          <span>{t.role}</span>
        </div>
      </div>
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="testimonials section-padding">
      {/* <div className="container">
        <div className="section-header">
          <h2>Client Success</h2>
          <p>Don&apos;t just take our word for it.</p>
        </div>
      </div>
      <div className="testimonial-slider-wrapper">
        <div className="testimonial-track">
          <div className="testimonial-group">
            {testimonials.map((t) => (
              <TestimonialCard key={t.name} t={t} />
            ))}
          </div>
          <div className="testimonial-group" aria-hidden="true">
            {testimonials.map((t) => (
              <TestimonialCard key={t.name + '-dup'} t={t} />
            ))}
          </div>
        </div>
      </div> */}
    </section>
  )
}
