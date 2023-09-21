import { FancyHeader, Heading, Maxwidth, Paragraph } from '@/components'
import NextImage from '@/components/next-image'
import { involvements, testimonials } from '../config'
import { doorStyles, topRightStyles } from '@/components/icons'
import tw from 'twin.macro'

const Testimonials = () => {
  return (
    <Maxwidth tw="flex flex-col items-center relative pt-6 gap-16 lg:(gap-20)">
      <NextImage
        src={'/door-yellow.png'}
        alt={'door'}
        css={[doorStyles, topRightStyles]}
      />

      <FancyHeader
        tw="text-center"
        ordinary="Quotes from"
        colored="Beneficiaries"
      />

      <div tw="flex flex-col gap-10 lg:(flex-row gap-10)">
        {testimonials.map((testimonial, idx) => (
          <div
            key={idx}
            tw="rounded-[1rem] p-6 text-center flex flex-col items-center gap-6 border border-primary lg:(min-w-[28.625rem])"
          >
            <NextImage
              src={'/icons/quote.png'}
              tw="w-20 h-20"
              alt={'comment'}
            />

            <Paragraph>{testimonial.comment}</Paragraph>

            <Heading $variant="h4" as="p">
              {testimonial.name}
            </Heading>
          </div>
        ))}
      </div>
    </Maxwidth>
  )
}

export default Testimonials
