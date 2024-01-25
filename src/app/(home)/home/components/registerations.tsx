'use client'

import { Button, FancyHeader, Heading, Maxwidth, Paragraph } from '@/components'
import tw from 'twin.macro'
import { GreenDoor } from '@/components'
import NextImage from '@/components/next-image'

const Registerations = () => {
  return (
    <Maxwidth tw="flex flex-col items-center relative pt-6 gap-16 lg:(gap-20)">
      <GreenDoor />

      <FancyHeader ordinary="Latest" colored="Registerations" />

      <div tw="w-full grid gap-10 justify-center sm:(grid-cols-2) lg:(flex gap-[4rem])">
        {registerations.map(registeration => {
          const { bg, title, desc, ctaUrl } = registeration

          return (
            <div tw="flex flex-col gap-6 lg:(w-[25rem])">
              <NextImage
                cover
                imageStyles={tw`bg-top`}
                tw="rounded-[0.5rem] h-[20rem] border sm:(h-[25rem])"
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
    title: '2 weeks Vocational Training',
    desc: 'Acquire a vocational skill to enhance self-sustainablity',
    cta: 'Register now',
    ctaUrl: 'https://forms.gle/JR6bEs46eZ2Nasdn6',
    bg: '/registerations/1.jpg',
  },
  {
    title: 'Free 2 days Writing Seminar',
    desc: 'Seminar and Project Report writing and presentation skills  for students in tertiary institutions',
    cta: 'Register now',
    ctaUrl: 'https://forms.gle/Au96aXb9wsMoGaGN8',
    bg: '/registerations/2.jpg',
  },
]

export default Registerations
