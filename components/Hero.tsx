import { ArrowRight, DownloadSimple, GooglePlayLogo } from '@phosphor-icons/react/dist/ssr'

export default function Hero() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="eyebrow caption-4 rise" style={{ ['--i' as string]: 0 }}>
            Product studio for Android and iOS
          </span>
          <h1 id="hero-title" className="heading-1 hero-title gradient-text rise" style={{ ['--i' as string]: 1 }}>
            We make apps<br />
            <span className="scribble">that people truly love.</span>
          </h1>
          <p className="hero-sub body-3 rise" style={{ ['--i' as string]: 2 }}>
            AppAxisLab designs, builds, and launches mobile apps for founders and brands, from the first sketch to the store listing and every update after.
          </p>
          <div className="hero-actions rise" style={{ ['--i' as string]: 3 }}>
            <a href="#contact" className="btn btn-primary button-md">
              Start your project
              <ArrowRight size={18} weight="bold" className="btn-icon" />
            </a>
            <a href="#portfolio" className="btn btn-ghost button-md">
              See our apps
            </a>
          </div>
          <p className="hero-proof body-5 rise" style={{ ['--i' as string]: 4 }}>
            <span className="proof-icon"><DownloadSimple size={18} weight="bold" /></span>
            <span><strong>10M+ downloads</strong> across 500+ delivered products</span>
          </p>
        </div>

        <div className="hero-visual">
          <span className="deco deco-sun" aria-hidden="true" />
          <span className="deco deco-square" aria-hidden="true" />
          <span className="deco deco-pill" aria-hidden="true" />
          <div className="hero-frame rise" style={{ ['--i' as string]: 3 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/hero_app_mockup_1781618273028.png"
              alt="A finance app dashboard on a phone, showing portfolio value, a growth chart, and recent transactions"
              width={1024}
              height={1024}
              fetchPriority="high"
            />
            <span className="hero-chip caption-3">
              <GooglePlayLogo size={16} weight="fill" />
              Live on Google Play
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
