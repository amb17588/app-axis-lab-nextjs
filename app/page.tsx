import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import Portfolio from '@/components/Portfolio'
import Process from '@/components/Process'
import WhyUs from '@/components/WhyUs'
import Testimonials from '@/components/Testimonials'
import Technologies from '@/components/Technologies'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import ScrollProgress from '@/components/ScrollProgress'
import BackToTop from '@/components/BackToTop'

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <Stats />
        <Portfolio />
        <Process />
        <WhyUs />
        <Testimonials />
        <Technologies />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
