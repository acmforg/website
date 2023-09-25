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
import tw, { css } from 'twin.macro'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'

const ArrowCircle = tw.div``
const arrowStyle = tw`hidden text-[#858585] border border-solid lg:(flex!) w-12 h-12 rounded-full flex items-center justify-center p-4 hocus:(flex! text-[black] border border-black) before:(content-[''])`

const Testimonials = () => {
  const isClient = useIsClient()
  const NextArrow = (props: any) => {
    const { className, onClick, style } = props
    return (
      <ArrowCircle
        className={className}
        css={[style, arrowStyle, tw`right-4`]}
        onClick={onClick}
      >
        <BsArrowRight size={25} tw="min-w-[2.5rem]" />
      </ArrowCircle>
    )
  }

  const PrevArrow = (props: any) => {
    const { className, onClick, style } = props
    return (
      <ArrowCircle
        className={className}
        css={[style, arrowStyle, tw`left-4`]}
        onClick={onClick}
      >
        <BsArrowLeft tw="min-w-[2.5rem]" size={25} />
      </ArrowCircle>
    )
  }
  return (
    <Maxwidth tw="flex flex-col items-center relative pt-6 gap-16 px-0 lg:(gap-20)">
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
                padding: 0 5rem 4rem;
              }
            }
          `,
        ]}
      >
        {isClient ? (
          <Slider
            arrows
            infinite
            slidesToScroll={1}
            slidesToShow={1}
            // centerPadding="100px"
            // responsive={[
            //   {
            //     breakpoint: 1024,
            //     settings: {
            //       slidesToShow: 2,
            //       slidesToScroll: 2,
            //     },
            //   },
            // ]}
            variableWidth
            adaptiveHeight
            // centerMode
            dots
            autoplay
            dotsClass="slick-dots dots"
            pauseOnHover
            prevArrow={<PrevArrow />}
            nextArrow={<NextArrow />}
            // beforeChange={(current, nexSlide) => setActiveSlide(nexSlide)}
          >
            {testimonials.map((testimonial, idx) => (
              <div key={idx} tw="mx-3 lg:(mx-5)">
                <div tw="rounded-[1rem] p-6 text-center flex flex-col items-center gap-6 border border-primary w-full max-w-[300px] md:(max-w-[28.625rem])">
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
