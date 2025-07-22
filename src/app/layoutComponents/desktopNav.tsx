'use client'

import Button, { LinkButton } from '@/components/Button'
import Logo from '@/components/Logo'
import { headerLinks, routePaths } from '@/utils/routepaths'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import tw from 'twin.macro'

const DesktopNav = () => {
  const path = usePathname()

  return (
    <nav tw="hidden lg:flex relative items-center flex-1 justify-between text-[#454545]">
      <Link href={'/'}>
        <Logo />
      </Link>

      <ul tw="flex flex-row gap-[2rem] xl:gap-[3rem]">
        {headerLinks
          .filter(link => link.title !== 'Donate')
          .map(link => {
            let href = link.href
            return (
              <li
                key={link.title}
                css={[
                  tw`hocus:(text-primary) font-normal`,
                  path === link.href &&
                    tw`text-primary font-semibold underline decoration-2 underline-offset-[1.5rem]`,
                ]}
              >
                <a href={href}>{link.title}</a>
              </li>
            )
          })}
      </ul>
      
      <LinkButton 
        href={routePaths.donate.path} 
        $isSmall 
        tw="px-6 py-2 lg:(px-8 py-3)"
      >
        Donate
      </LinkButton>
    </nav>
  )
}

export default DesktopNav
