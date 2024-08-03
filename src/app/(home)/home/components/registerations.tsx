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
          const { bg, title, desc, ctaUrl } = registeration

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
                  Register Now
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
    title: 'Exclusive Computer Training Program',
    desc: 'Unlock your future with essential computer skills',
    cta: 'Register now',
    ctaUrl: 'https://forms.gle/SCcH9uUxuoh5M8gr6',
    bg: '/registerations/1.jpg',
  },
  {
    title: 'AI Content Creation Training',
    desc: 'Join our AI content creation masterclass and transform your contents to compelling ones.',
    cta: 'Register now',
    ctaUrl: 'https://forms.gle/q98zN9YZdr59gkHy9',
    bg: '/registerations/2.jpg',
  },
]

export default Registerations
