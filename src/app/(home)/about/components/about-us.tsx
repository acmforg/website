import { FancyHeader, Heading, Maxwidth, Paragraph } from '@/components'
import NextImage from '@/components/next-image'
import { aboutConfig } from '../config'

const AboutUs = () => {
  const { speech, about, trustees } = aboutConfig
  return (
    <Maxwidth tw="flex flex-col gap-16 lg:(gap-[6.25rem])">
      <FancyHeader ordinary="About" colored="Us" tw="text-center" />

      <div tw="flex flex-col gap-12 lg:(flex-row gap-24)">
        <NextImage
          tw="h-[16.375rem] rounded-[0.75rem] lg:(h-[20.25rem] min-w-[29.375rem])"
          src="/speech.png"
          alt="founder-speech"
        />

        <div>
          <Heading $variant="h3" as="h2" tw="pb-6 lg:(pb-8)">
            Founder&apos;s Speech
          </Heading>

          {speech.map((paragraph, idx) => (
            <Paragraph tw="mb-6" key={idx}>
              {paragraph}
            </Paragraph>
          ))}
        </div>
      </div>

      <div tw="flex flex-col gap-12 lg:(flex-row gap-14)">
        {about.map(topic => (
          <div key={topic.title} tw="flex flex-col gap-6">
            <div tw="w-[6rem] h-[5.25rem] px-6 py-[1.12rem] rounded-[0.75rem] bg-primary">
              <NextImage src={topic.icon} alt={topic.title} tw="w-12 h-12" />
            </div>

            <Heading $variant="h2" as="h3" tw="lg:(text-[2.25rem])">
              {topic.title}
            </Heading>
            <Paragraph>{topic.details}</Paragraph>
          </div>
        ))}
      </div>

      <div>
        <FancyHeader
          ordinary="Board of"
          colored="Trustees"
          tw="pb-16 text-center lg:(pb-20 pt-5)"
        />

        <div tw="flex flex-wrap gap-8 justify-center lg:(gap-y-[5rem]) xl:(justify-start)">
          {trustees.map(trustee => (
            <div key={trustee.name} tw="max-w-fit text-center w-[22.4rem]">
              <div tw="relative overflow-hidden rounded-[0.75rem]">
                <NextImage
                  src={trustee.image}
                  alt={trustee.name}
                  tw="h-[16.75rem]"
                />
                <div tw="absolute top-0 w-full h-full bg-[linear-gradient(180deg,_rgba(26,_92,_171,_0.00) 0%,_rgba(13,_48,_90,_0.70)_100%)] z-[1] transition-all delay-150 ease-in-out hocus:(bg-none)" />
              </div>

              <div tw="p-4 pt-6 flex flex-col gap-2">
                <Paragraph tw="font-medium">{trustee.name}</Paragraph>
                {trustee.title ? (
                  <Paragraph tw="pb-2 text-base">{trustee.title}</Paragraph>
                ) : null}
                <Paragraph tw="text-sm">{trustee.desc}</Paragraph>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Maxwidth>
  )
}

export default AboutUs
