import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from '@phosphor-icons/react/dist/ssr'

export const metadata: Metadata = { title: 'Page not found | AppAxisLab' }

export default function NotFound() {
  return (
    <main id="main" className="nf">
      <div className="nf-inner">
        <p className="nf-code title-3">Error 404</p>
        <h1 className="heading-2 gradient-text">This page does not exist</h1>
        <p className="body-3">
          The link may be broken or the page may have moved. Head back to the homepage to see our apps and start a project.
        </p>
        <Link href="/" className="btn btn-primary button-md">
          <ArrowLeft size={18} weight="bold" /> Back to homepage
        </Link>
      </div>
    </main>
  )
}
