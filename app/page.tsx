import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import Tagline from '@/components/Tagline'
import Portfolio from '@/components/Portfolio'
import Process from '@/components/Process'
import WhyUs from '@/components/WhyUs'
import Technologies from '@/components/Technologies'
import Faq from '@/components/Faq'
import { faqs } from '@/lib/faqs'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import BackToTop from '@/components/BackToTop'
import ScrollReveal from '@/components/ScrollReveal'

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      name: 'AppAxisLab',
      url: 'https://appaxislab.com',
      logo: 'https://appaxislab.com/image/logo.png',
      email: 'support@appaxislab.com',
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
  ],
}

export default function Home() {
  return (
    <>
      <div id="top-sentinel" aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, width: 1, height: 48, pointerEvents: 'none' }} />
      <Header />
      <main id="main">
        <Hero />
        <Stats />
        <Tagline />
        <Portfolio />
        <Process />
        <WhyUs />
        <Technologies />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
      <ScrollReveal />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  )
}
