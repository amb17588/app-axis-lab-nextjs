import { DeviceMobile, TreeStructure, PaintBrush, Gauge, LockKey, ArrowsClockwise } from '@phosphor-icons/react/dist/ssr'

const benefits = [
  {
    icon: DeviceMobile,
    title: 'Designed for thumbs first',
    description: 'Every screen starts on a small display and is then adapted for tablets, so the main action is always within reach.',
  },
  {
    icon: TreeStructure,
    title: 'Backends that keep up',
    description: 'We build on Firebase, Supabase, and AWS so your app can grow from its first users to a large audience without a rewrite.',
  },
  {
    icon: PaintBrush,
    title: 'Interfaces that feel native',
    description: 'Careful type, spacing, and motion make the app feel at home on Android and iOS, not like a port.',
  },
  {
    icon: Gauge,
    title: 'Smooth on everyday phones',
    description: 'Screens and animations are tuned to stay responsive on the devices most people actually carry.',
  },
  {
    icon: LockKey,
    title: 'Private by default',
    description: 'Many of our apps keep data on the device with no account required, and every published app has its own privacy policy.',
  },
  {
    icon: ArrowsClockwise,
    title: 'Support after launch',
    description: 'We keep shipping fixes, updates, and store listing improvements once real users arrive.',
  },
]

export default function WhyUs() {
  return (
    <section id="why-us" className="section" aria-labelledby="why-title">
      <div className="container">
        <div className="section-header reveal" data-reveal>
          <span className="eyebrow caption-4">Why AppAxisLab</span>
          <h2 id="why-title" className="heading-2">One team from first sketch to the store</h2>
          <p className="body-3">
            Design, engineering, and launch live under one roof, so nothing gets lost in a handoff and your app reaches users faster.
          </p>
        </div>
        <div className="benefits-grid">
          {benefits.map((b, i) => {
            const Icon = b.icon
            return (
              <article className="benefit reveal" data-reveal style={{ ['--d' as string]: `${(i % 3) * 80}ms` }} key={b.title}>
                <div className="benefit-icon"><Icon size={22} weight="duotone" aria-hidden="true" /></div>
                <h3 className="title-1">{b.title}</h3>
                <p className="body-5">{b.description}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
