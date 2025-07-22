'use client'

// import { DynamicPageViewTracker } from '@/components/analytics/page-view-tracker'
import Contact from './contact/page'
import Events from './home/components/events'
import Hero from './home/components/hero'
import Involvement from './home/components/involvement'
import Programs from './home/components/programs'
import Registerations from './home/components/registerations'
import SubHero from './home/components/sub-hero'
import Support from './home/components/support'
import Testimonials from './home/components/testimonials'

const Home = () => {
  // const params = useSearchParams()
  // const referrer = params.get('referrer')
  // const isBannerCode = referrer === 'banner-qr-code-may-25'

  return (
    <main tw="flex flex-col gap-[5rem] lg:(gap-[7.5rem])">
      <Hero />
      <Registerations />
      <Events />
      <SubHero />
      <Programs />
      <Involvement />
      <Testimonials />
      <Support />
      <Events />
      <Contact />
    </main>
  )
}

export default Home
