'use client'

import { Maxwidth } from '@/components'
import { useState, useEffect } from 'react'
import tw from 'twin.macro'
import MobileNav from './mobileNav'
import DesktopNav from './desktopNav'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header
      css={[
        isScrolled &&
          tw`sticky top-0 z-[100] bg-white border-b-2 border-b-primary`,
      ]}
    >
      <Maxwidth
        css={[
          tw`flex items-center py-2 px-6 justify-start md:(justify-between) lg:(py-8) xl:(px-0) z-[10] transition-all relative`,
          isScrolled && tw`sticky top-0`,
        ]}
      >
        <MobileNav />

        <DesktopNav />
      </Maxwidth>
    </header>
  )
}

export default Header
