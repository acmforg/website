'use client'

import { Button, FancyHeader, Heading, Maxwidth, Paragraph } from '@/components'
import tw from 'twin.macro'
import { GreenDoor } from '@/components'
import NextImage from '@/components/next-image'

const Registerations = () => {
  return (
    <Maxwidth tw="flex flex-col items-center relative pt-6 gap-16 lg:(gap-20)">
      <GreenDoor />

      <FancyHeader ordinary="Latest" colored="Registrations" />

      <div tw="w-full grid gap-10 justify-center sm:(grid-cols-2) lg:(flex gap-[4rem])">
        {registerations.map(registeration => {
          const { bg, title, desc, ctaUrl, cta } = registeration

          return (
            <div key={title} tw="flex flex-col gap-6 lg:(w-[25rem])">
              <NextImage
                cover
                imageStyles={tw`bg-top`}
                tw="rounded-[0.5rem] h-[25rem] border sm:(h-[30rem])"
                src={bg}
                alt={title}
              />

              <div tw="flex flex-col items-center gap-2 lg:(gap-3)">
                <Heading $variant="h4" tw="lg:(pb-1 text-xl)">
                  {title}
                </Heading>
                <Paragraph tw="flex gap-2 text-center">{desc}</Paragraph>

                <Button as={'a'} href={ctaUrl} tw="mt-4">
                  {cta}
                </Button>
              </div>
            </div>
          )
        })}
      </div>
    </Maxwidth>
  )
}

const registerations = [
  {
    title: 'Annual Subsidized Medical Checkup',
    desc: 'Benefit from our effort to give back to the community through this initiative of ours today!',
    cta: 'Subsidize your Test!',
    ctaUrl: 'https://wa.me/qr/7Y24KCX5FSY2K1',
    bg: '/registerations/check-up-24.png',
  },
  {
    title: 'Essay Competition 2024',
    desc: 'Exclusive opportunity for brilliant minds from secondary schools to showcase their prowess',
    cta: 'Submit Now',
    ctaUrl: 'mailto:accuratecreativeminds@gmail.com',
    bg: '/registerations/essay-24.png',
  },
]

export default Registerations
