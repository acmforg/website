'use client'

import React, { ComponentPropsWithoutRef, ElementType } from 'react'
import tw, { styled, css } from 'twin.macro'
import { LoadingSvg } from './loading'
import Link from 'next/link'

type ButtonMod<T extends ElementType> = {
  as?: keyof React.JSX.IntrinsicElements
  href?: string
} & ComponentPropsWithoutRef<T>

export const Button = styled.button<ButtonProps>(
  ({ $variant, $isSmall, $shadow, $disabled }) => [
    // The common button styles added with the tw import
    tw`px-[4rem] text-center py-4 w-fit rounded-[0.75rem] font-semibold transform duration-75 bg-primary text-white hover:(bg-[#1A5CAB]) active:(bg-[#14437B]) lg:(px-[4.5rem] py-5 text-lg)`,

    $variant === 'secondary' && tw`bg-secondary`,
    $variant === 'danger' && tw`bg-customRed`,

    $disabled && tw`bg-[#14437B] pointer-events-none`,

    $shadow &&
      css`
        box-shadow: 3px 5px 19px 0px rgba(255, 207, 63, 0.3);
      `,

    $isSmall && tw`text-sm`,
  ],
)

export const FormButton = <T extends ElementType = 'button'>({
  as,
  $isLoading,
  children,
  ...props
}: ButtonProps & ButtonMod<T>) => {
  return (
    <Button as={as} disabled={$isLoading} {...props}>
      {$isLoading ? <LoadingSvg tw="mx-auto w-5 h-5" /> : <>{children}</>}
    </Button>
  )
}

export const LinkButton = <T extends ElementType = 'button'>({
  as,
  $isLoading,
  href,
  children,
  ...props
}: ButtonProps & ButtonMod<T>) => {
  return (
    <Button as={Link} href={href!} disabled={$isLoading} {...props}>
      {$isLoading ? <LoadingSvg tw="mx-auto w-5 h-5" /> : <>{children}</>}
    </Button>
  )
}
export default Button
