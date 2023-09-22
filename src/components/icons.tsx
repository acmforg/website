'use client'
import tw from 'twin.macro'
import NextImage from './next-image'

export const doorStyles = tw`absolute h-[6.25rem] w-[2.1rem] lg:(w-[3.75rem] h-[10rem])`
export const topLeftStyles = tw`left-0 -top-[2rem] lg:(-top-[4rem])`
export const topRightStyles = tw`right-0 -top-[2rem] lg:(-top-[4rem])`

export const GreenDoor = () => {
  return (
    <NextImage
      src={'/door-green.png'}
      alt={'door'}
      css={[doorStyles, topLeftStyles]}
    />
  )
}
export const YellowDoor = () => {
  return (
    <NextImage
      src={'/door-yellow.png'}
      alt={'door'}
      css={[doorStyles, topRightStyles]}
    />
  )
}
