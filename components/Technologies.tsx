const techs = ['Android', 'iOS', 'Flutter', 'Unity', 'Firebase', 'Node.js', 'Supabase', 'AWS']

function TechGroup({ hidden }: { hidden?: boolean }) {
  return (
    <div className="tech-group" aria-hidden={hidden}>
      {techs.map((t) => (
        <span key={t + (hidden ? '-2' : '')}>
          {t}<span className="dot"> •</span>
        </span>
      ))}
    </div>
  )
}

export default function Technologies() {
  return (
    <section className="technologies section-padding">
      <div className="container">
        <h3 className="tech-title">Powered by Modern Technologies</h3>
      </div>
      <div className="tech-marquee-wrapper">
        <div className="tech-marquee">
          <TechGroup />
          <TechGroup hidden />
        </div>
      </div>
    </section>
  )
}
