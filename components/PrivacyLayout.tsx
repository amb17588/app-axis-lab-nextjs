import Link from 'next/link'
import { ArrowLeft, ShieldCheck } from '@phosphor-icons/react/dist/ssr'
import s from '@/styles/privacy.module.css'

interface Props {
  appName: string
  subtitle?: string
  lastUpdated: string
  children: React.ReactNode
}

export default function PrivacyLayout({ appName, subtitle, lastUpdated, children }: Props) {
  return (
    <div className={s.page}>
      <header className={s.topbar}>
        <div className={s.container}>
          <div className={s.topbarInner}>
            <Link href="/" className={s.brand} aria-label="AppAxisLab home">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/image/logo.png" alt="" width={28} height={28} className={s.brandLogo} />
              <span className={s.brandName}>AppAxis<span>Lab</span></span>
            </Link>
            <Link href="/" className={s.backLink}>
              <ArrowLeft size={16} weight="bold" aria-hidden="true" /> Back to site
            </Link>
          </div>
        </div>
      </header>

      <div className={s.hero}>
        <span className={`${s.shape} ${s.shapeSun}`} aria-hidden="true" />
        <span className={`${s.shape} ${s.shapeSquare}`} aria-hidden="true" />
        <div className={s.container}>
          <div className={s.badge}><ShieldCheck size={16} weight="bold" aria-hidden="true" /> Legal</div>
          <h1 className={s.heroTitle}>{appName}</h1>
          {subtitle && <p className={s.heroAppName}>{subtitle}</p>}
          <p className={s.lastUpdated}>{lastUpdated}</p>
        </div>
      </div>

      <main id="main" className={s.content}>
        <div className={s.container}>{children}</div>
      </main>

      <footer className={s.footer}>
        <div className={s.container}>
          <p className={s.footerText}>© 2026 AppAxisLab. All rights reserved.</p>
          <Link href="/" className={s.footerLink}>Back to AppAxisLab</Link>
        </div>
      </footer>
    </div>
  )
}
