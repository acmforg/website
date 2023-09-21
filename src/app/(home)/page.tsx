'use client'

import Hero from './home/components/hero'
import Involvement from './home/components/involvement'
import Programs from './home/components/programs'
import SubHero from './home/components/sub-hero'
import Testimonials from './home/components/testimonials'

const Home = () => {
  return (
    <main tw="flex flex-col gap-[5rem] lg:(gap-[7.5rem])">
      <Hero />
      <SubHero />
      <Programs />
      <Involvement />
      <Testimonials />
    </main>
  )
}

export default Home
