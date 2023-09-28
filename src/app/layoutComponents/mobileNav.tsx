'use client'

import { useState, useEffect } from 'react'
import Logo from '@/components/Logo'
import { IoMdCloseCircle } from 'react-icons/io'
import { FiMenu } from 'react-icons/fi'
import tw from 'twin.macro'
import { headerLinks } from '@/utils/routepaths'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const MobileNav = () => {
  const [menuOpen, setMenu] = useState(false)
  const pathName = usePathname()

  useEffect(() => {
    const body = document.querySelector('body')
    if (body) {
      if (menuOpen) {
        body.style.overflow = 'hidden'
      } else {
        body.style.overflow = ''
      }
    }

    return () => {
      if (body) body.style.overflow = ''
    }
  }, [menuOpen])

  const toggleMenu = () => setMenu(prev => !prev)

  return (
    <div
      css={[
        tw`pt-6 pb-4 w-full lg:hidden`,
        menuOpen && tw`fixed top-0 left-0 bg-[white] pt-8 h-screen`,
      ]}
    >
      <div
        css={[
          tw`flex justify-between text-primary`,
          menuOpen && tw`border-b-[1px] px-8 py-4`,
        ]}
      >
        <Logo />

        <button title="mobile-menu-button" onClick={toggleMenu}>
          {menuOpen ? <IoMdCloseCircle size={30} /> : <FiMenu size={30} />}
        </button>
      </div>

      <nav
        css={[
          tw`flex-col font-normal transition lg:hidden`,
          menuOpen &&
            tw`flex bg-primaryLight w-full h-full text-[#454545] gap-8 p-10`,
          !menuOpen && tw`text-[white] gap-0 h-0 p-0 overflow-hidden`,
        ]}
      >
        <ul
          css={[
            tw`transition`,

            menuOpen &&
              tw`flex flex-col flex-1 gap-6 text-[1.25rem] py-8 overflow-y-auto`,
          ]}
        >
          {headerLinks.map(link => (
            <Link
              href={link.href}
              key={link.title}
              onClick={toggleMenu}
              css={[
                tw`hover:(text-primary)`,
                menuOpen && tw`py-2 px-4`,
                link.href === pathName &&
                  tw`text-primary underline underline-offset-[1rem]`,
              ]}
            >
              {link.title}
            </Link>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default MobileNav
