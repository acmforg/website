import { Heading, Maxwidth, Paragraph } from '@/components'
import { subHero } from '../config'
import Image from 'next/image'
import NextImage from '@/components/next-image'
import Link from 'next/link'

const SubHero = () => {
  const { ctaUrl, cta, heading, sub, img } = subHero
  return (
    <Maxwidth
      id="journey"
      tw="flex flex-col gap-12 lg:(gap-[6rem] flex-row items-center justify-between)"
    >
      <NextImage
        src={img}
        cover={false}
        alt="acmf-journey"
        tw="rounded-[0.75rem] w-full  h-[18.125rem] lg:(min-w-[29.375rem] h-[29.375rem])"
      />

      <div tw="flex flex-col gap-4">
        <Heading $variant="h3" as={'h2'} tw="pb-4">
          {heading}
        </Heading>

        <Paragraph>{sub}</Paragraph>

        <Link href={ctaUrl} tw="font-semibold underline">
          <Paragraph>{cta}</Paragraph>
        </Link>
      </div>
    </Maxwidth>
  )
}

export default SubHero
