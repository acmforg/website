'use client'

import tw, { TwStyle, styled } from 'twin.macro'

type HeadingVariant = 'h1' | 'h2' | 'h3'

interface HeadingProps {
  $variant?: HeadingVariant
}

const headingVariants: Record<HeadingVariant, TwStyle> = {
  h1: tw`text-[2.5rem] leading-[3.25rem] md:(text-[3.4rem] leading-[4rem]) lg:(text-[4.5rem] leading-[5rem]) xl:(text-[5.5rem] leading-[6.6rem])`,
  h2: tw`text-[2.5rem] leading-[3.25rem] md:(text-[3rem] leading-[3.5rem]) lg:(text-[3.5rem] leading-[4rem]) xl:(text-[4rem] leading-[5rem])`,
  h3: tw`text-[1.75rem] leading-[2.275rem] md:(text-[1.85rem] leading-[2.4rem]) lg:(text-[2rem] leading-[2.75rem]) xl:(text-[2.25rem] leading-[2.925rem])`,
}

export const Heading = styled.h1<HeadingProps>(({ $variant = 'h1' }) => [
  headingVariants[$variant],
  tw`font-medium`,
])
