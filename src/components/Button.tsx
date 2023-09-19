'use client'

import React, { ComponentPropsWithoutRef, ElementType } from 'react'
import tw, { styled, css } from 'twin.macro'
import { LoadingSvg } from './loading'

type ButtonMod<T extends ElementType> = {
  as?: keyof React.JSX.IntrinsicElements
} & ComponentPropsWithoutRef<T>

export const ButtonBase = styled.button<ButtonProps>(
  ({ $variant, $isSmall, $shadow, $disabled }) => [
    // The common button styles added with the tw import
    tw`px-7 text-center w-full py-4 rounded-[0.75rem] font-bold transform duration-75 bg-primary text-white hocus:(scale-105) lg:(px-8 text-lg)`,

    $variant === 'secondary' && tw`bg-secondary`,
    $variant === 'danger' && tw`bg-customRed`,

    $disabled && tw`bg-[#E9EAEC] text-[#909296] pointer-events-none`,

    $shadow &&
      css`
        box-shadow: 3px 5px 19px 0px rgba(255, 207, 63, 0.3);
      `,

    $isSmall && tw`text-sm`,
  ],
)

export const Button = <T extends ElementType = 'button'>({
  as,
  $isLoading,
  children,
  ...props
}: ButtonProps & ButtonMod<T>) => {
  return (
    <ButtonBase as={as} disabled={$isLoading} {...props}>
      {$isLoading ? <LoadingSvg tw="mx-auto w-5 h-5" /> : <>{children}</>}
    </ButtonBase>
  )
}
export default Button
