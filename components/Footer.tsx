import { GooglePlayLogo } from '@phosphor-icons/react/dist/ssr'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#home" className="logo button-md" aria-label="AppAxisLab, back to top">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/image/logo.png" alt="" width={24} height={24} />
              <span className="wordmark">AppAxis<span>Lab</span></span>
            </a>
            <p className="body-5">
              A product studio that designs, builds, and launches mobile apps for founders and brands.
            </p>
          </div>
          <nav className="footer-col" aria-label="Explore">
            <h3 className="title-4">Explore</h3>
            <a className="body-5" href="#portfolio">Apps</a>
            <a className="body-5" href="#process">Process</a>
            <a className="body-5" href="#why-us">Why us</a>
            <a className="body-5" href="#faq">FAQ</a>
          </nav>
          <nav className="footer-col" aria-label="Legal">
            <h3 className="title-4">Legal</h3>
            <a className="body-5" href="/privacy">Privacy policy</a>
          </nav>
          <div className="footer-col">
            <h3 className="title-4">Get in touch</h3>
            <a className="body-5" href="mailto:support@appaxislab.com">support@appaxislab.com</a>
            <a className="body-5" href="https://play.google.com/store/apps/developer?id=App+Axis+Lab" target="_blank" rel="noopener noreferrer">
              <GooglePlayLogo size={14} weight="fill" style={{ display: 'inline', marginRight: 8, verticalAlign: '-2px' }} aria-hidden="true" />
              Google Play
            </a>
          </div>
        </div>
        <div className="footer-bottom caption-2">
          <span>&copy; 2026 AppAxisLab. All rights reserved.</span>
          <a href="#home" style={{ color: 'inherit' }}>Back to top</a>
        </div>
      </div>
    </footer>
  )
}
