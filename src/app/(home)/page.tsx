'use client'

import Events from './home/components/events'
import Hero from './home/components/hero'
import Involvement from './home/components/involvement'
import Programs from './home/components/programs'
import SubHero from './home/components/sub-hero'
import Support from './home/components/support'
import Testimonials from './home/components/testimonials'

const Home = () => {
  return (
    <main tw="flex flex-col gap-[5rem] lg:(gap-[7.5rem])">
      <Hero />
      <SubHero />
      <Programs />
      <Involvement />
      <Testimonials />
      <Support />
      <Events />
      <div>dd</div>
    </main>
  )
}

export default Home
