import {
  FancyHeader,
  Heading,
  Maxwidth,
  Paragraph,
  YellowDoor,
} from '@/components'
import NextImage from '@/components/next-image'
import { testimonials } from '../config'
import { useIsClient } from 'usehooks-ts'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { css } from 'twin.macro'

const Testimonials = () => {
  const isClient = useIsClient()
  // const NextArrow = props => {
  //   const { className, style, onClick } = props
  //   return (
  //     <div
  //       className={className}
  //       css={[style, nextButton]}
  //       onClick={onClick}
  //     />
  //   )
  // }

  // const PrevArrow = props => {
  //   const { className, style, onClick } = props
  //   return (
  //     <div
  //       className={className}
  //       css={[style, prevButton]}
  //       onClick={onClick}
  //     />
  //   )
  // }
  return (
    <Maxwidth tw="flex flex-col items-center relative pt-6 gap-16 lg:(gap-20)">
      <YellowDoor />

      <FancyHeader
        tw="text-center"
        ordinary="Quotes from"
        colored="Beneficiaries"
      />

      <div
        tw="w-full block [.slick-slider]:(pb-[2.5rem])  [.dots button::before]:(content-[' '] bg-primary w-4 h-4 rounded-full)"
        css={[
          css`
            @media screen and (min-width: 1000px) {
              .slick-slider {
                padding-bottom: 4rem;
              }
            }
          `,
        ]}
      >
        {isClient ? (
          <Slider
            arrows={false}
            infinite
            slidesToScroll={1}
            slidesToShow={1}
            variableWidth
            adaptiveHeight
            centerMode
            dots
            autoplay
            dotsClass="slick-dots dots"
            pauseOnHover
            // prevArrow={<PrevArrow />}
            // nextArrow={<NextArrow />}
            // beforeChange={(current, nexSlide) => setActiveSlide(nexSlide)}
          >
            {testimonials.map((testimonial, idx) => (
              <div key={idx} tw="mr-6">
                <div tw="rounded-[1rem] p-6 text-center flex flex-col items-center gap-6 border border-primary w-full max-w-[300px] lg:(max-w-[28.625rem])">
                  <NextImage
                    src={'/icons/quote.png'}
                    tw="w-20 h-20 mx-auto"
                    alt={'comment'}
                  />

                  <Paragraph>{testimonial.comment}</Paragraph>

                  <Heading $variant="h4" as="p" tw="text-lg">
                    {testimonial.name}
                  </Heading>
                </div>
              </div>
            ))}
          </Slider>
        ) : null}
      </div>
    </Maxwidth>
  )
}

export default Testimonials
