import { Compass, Hammer, RocketLaunch } from '@phosphor-icons/react/dist/ssr'

const phases = [
  {
    number: '01',
    icon: Compass,
    title: 'Discover and design',
    items: [
      { name: 'Discover', text: 'We study your market, users, and competitors to find the opening worth building for.' },
      { name: 'Design', text: 'Flows and interfaces are mapped and refined before a single line of code ships.' },
    ],
  },
  {
    number: '02',
    icon: Hammer,
    title: 'Build and test',
    items: [
      { name: 'Develop', text: 'Clean, maintainable code in Kotlin, Swift, React Native, or Flutter, matched to your product.' },
      { name: 'Test', text: 'QA across devices and OS versions so the build is solid before it reaches the store.' },
    ],
  },
  {
    number: '03',
    icon: RocketLaunch,
    title: 'Launch and scale',
    items: [
      { name: 'Launch', text: 'Store submission, listing copy, and app store optimization, planned with you.' },
      { name: 'Scale', text: 'Analytics driven updates and steady improvements as your audience grows.' },
    ],
  },
]

export default function Process() {
  return (
    <section id="process" className="section" aria-labelledby="process-title">
      <div className="container">
        <div className="section-header reveal" data-reveal>
          <span className="eyebrow caption-4">How it works</span>
          <h2 id="process-title" className="heading-2">From idea to live app in three phases</h2>
          <p className="body-3">
            A clear process, so you always know what is happening and what comes next.
          </p>
        </div>
        <div className="steps-grid">
          {phases.map((p, i) => {
            const Icon = p.icon
            return (
              <article className="step reveal" data-reveal style={{ ['--d' as string]: `${i * 100}ms` }} key={p.number}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span className="step-num title-4">Phase {p.number}</span>
                  <span className="benefit-icon" style={{ marginBottom: 0 }}><Icon size={22} weight="duotone" aria-hidden="true" /></span>
                </div>
                <h3 className="heading-5">{p.title}</h3>
                <ul className="step-list">
                  {p.items.map((it) => (
                    <li key={it.name}>
                      <strong className="title-3">{it.name}</strong>
                      <span className="body-6" style={{ color: 'var(--text-muted)' }}>{it.text}</span>
                    </li>
                  ))}
                </ul>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
