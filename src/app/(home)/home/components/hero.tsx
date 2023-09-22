'use client'
import { Button, Heading, Maxwidth, Paragraph } from '@/components'
import { heroConfig } from '../config'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  const { heading, sub, cta, ctaUrl, img } = heroConfig

  return (
    <section id="hero" tw="bg-primaryLight">
      <Maxwidth tw="flex flex-col py-16 gap-16 lg:(py-[6.25rem] flex-row items-center gap-[4rem])">
        <div tw="flex flex-col gap-4 lg:(gap-6)">
          <Heading>{heading}</Heading>
          <Paragraph>{sub}</Paragraph>
          <Button tw="mt-4 lg:(mt-8)" as={Link} href={ctaUrl}>
            {cta}
          </Button>
        </div>

        <div tw="relative h-[23.6rem] w-full lg:(h-[29.4rem])">
          <Image src={img} alt="acmf-home" fill tw="object-contain" />
        </div>
      </Maxwidth>
    </section>
  )
}

export default Hero
