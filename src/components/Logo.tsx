'use client'

import Image from 'next/image'
import logo from 'public/logo.png'
const Logo = () => {
  return (
    <div tw="max-w-[8rem] md:(max-w-[13rem])">
      <Image src={logo} alt="acmf-logo" />
    </div>
  )
}

export default Logo
