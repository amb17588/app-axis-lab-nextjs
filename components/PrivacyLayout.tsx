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
      <div className={s.hero}>
        <div className={s.heroGlow} />
        <div className={s.container}>
          <div className={s.brand}>
            <span className={s.brandName}>App<span>Axis</span>Lab</span>
          </div>
          <div className={s.badge}>Legal</div>
          <h1 className={s.heroTitle}>{appName}</h1>
          {subtitle && <p className={s.heroAppName}>{subtitle}</p>}
          <p className={s.lastUpdated}>{lastUpdated}</p>
        </div>
      </div>
      <div className={s.content}>
        <div className={s.container}>
          {children}
        </div>
      </div>
      <footer className={s.footer}>
        <div className={s.container}>
          <p className={s.footerText}>© 2026 App Axis Lab — All Rights Reserved</p>
        </div>
      </footer>
    </div>
  )
}
