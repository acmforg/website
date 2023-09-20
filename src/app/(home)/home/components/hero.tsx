import { Maxwidth } from '@/components'
import { heroConfig } from '../config'
import Image from 'next/image'

const Hero = () => {
  const { heading, sub, cta, ctaUrl, img } = heroConfig

  return (
    <section id="hero">
      <Maxwidth tw="flex flex-col lg:(flex-row items-center gap-[4rem])">
        <div>{heading}</div>

        <div tw="relative">
          <Image src={img} alt="acmf-home" fill />
        </div>
      </Maxwidth>
    </section>
  )
}

export default Hero
