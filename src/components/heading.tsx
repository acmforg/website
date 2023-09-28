'use client'

import { HTMLAttributes, HTMLProps } from 'react'
import tw, { TwStyle, styled } from 'twin.macro'

type HeadingVariant = 'h1' | 'h2' | 'h3' | 'h4'

interface HeadingProps {
  $variant?: HeadingVariant
}

const headingVariants: Record<HeadingVariant, TwStyle> = {
  h1: tw`text-[2rem] font-semibold leading-[2.6rem] md:(text-[1.75rem] leading-[3rem]) lg:(text-[3rem] leading-[3.9rem])`,
  h2: tw`text-[2rem] font-semibold leading-[2.4rem] md:(text-[2.4rem] leading-[2.75rem]) lg:(text-[2.8125rem] leading-[3.25rem])`,
  h3: tw`text-[1.5rem] font-medium leading-[2.1rem] md:(text-[1.85rem] leading-[2.3rem]) lg:(text-[2rem] leading-[2.6rem])`,
  h4: tw`text-2xl font-semibold lg:(text-[1.75rem] leading-[2.25rem])`,
}

export const Heading = styled.h1<HeadingProps>(({ $variant = 'h1' }) => [
  headingVariants[$variant],
])

interface IFancyHeader extends HTMLProps<HTMLHeadingElement> {
  ordinary: string
  colored: string
}

export const FancyHeader = ({ ordinary, colored, ...rest }: IFancyHeader) => {
  return (
    <Heading $variant="h2" as="h2" {...rest}>
      {ordinary} <span tw="text-primary">{colored}</span>
    </Heading>
  )
}
