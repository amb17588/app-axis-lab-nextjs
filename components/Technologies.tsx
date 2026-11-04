const techs = ['Android', 'iOS', 'Kotlin', 'Swift', 'React Native', 'Flutter', 'Unity', 'Firebase', 'Supabase', 'Node.js', 'AWS']

function Group({ hidden }: { hidden?: boolean }) {
  return (
    <div className="marquee-group" aria-hidden={hidden}>
      {techs.map((t) => (
        <span className="chip body-5" key={t}>{t}</span>
      ))}
    </div>
  )
}

export default function Technologies() {
  return (
    <section className="tech" aria-labelledby="tech-title">
      <div className="container">
        <h2 id="tech-title" className="tech-title title-3">The tools we build with</h2>
      </div>
      <div className="marquee-wrap">
        <div className="marquee">
          {/* Six identical groups: the track shifts by exactly half, so it loops with no gap even on ultrawide screens */}
          <Group />
          {[1, 2, 3, 4, 5].map((n) => <Group key={n} hidden />)}
        </div>
      </div>
    </section>
  )
}
