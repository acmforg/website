'use client'
import Image from 'next/image'
import { HTMLProps, CSSProperties } from 'react'
import { CSSProp } from 'styled-components'
import tw from 'twin.macro'

interface INextImageProps extends HTMLProps<HTMLDivElement> {
  src: string
  alt: string
  cover?: boolean
  imageStyles?: CSSProp
}

const NextImage = ({
  src,
  alt,
  imageStyles,
  cover: objectCover = false,
  ...rest
}: INextImageProps) => {
  const cover = tw`object-cover`
  const contain = tw`object-contain`
  return (
    <Cover {...rest}>
      <Image
        src={src}
        alt={alt ?? ''}
        css={[objectCover ? cover : contain, imageStyles]}
        fill
        style={{
          width: '100%',
        }}
      />
    </Cover>
  )
}

const Cover = tw.div`relative overflow-hidden h-10`

export default NextImage
