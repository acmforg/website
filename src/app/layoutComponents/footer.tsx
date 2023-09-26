'use client'

import { Heading, Logo, Maxwidth, Paragraph } from '@/components'
import { headerLinks, socials } from '@/utils/routepaths'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa'
import tw from 'twin.macro'

const Footer = () => {
  const pathName = usePathname()
  return (
    <footer tw="bg-customGrey text-white border-b-2 border-b-secondary">
      <Maxwidth tw="flex flex-col gap-[3.38rem] px-6 py-20 md:(flex-row justify-between items-stretch py-[7.5rem]) xl:(px-0)">
        <div tw="md:(flex flex-col justify-between)">
          <Logo />

          <Paragraph tw="hidden md:(block)">&copy; ACMF 2023</Paragraph>
        </div>

        <div tw="flex flex-col gap-6 lg:(gap-8)">
          <Heading $variant="h4">Quick links</Heading>
          <div tw="flex flex-col gap-2 lg:(gap-4)">
            {headerLinks.map(link => {
              return (
                <Link
                  href={link.href}
                  key={link.title}
                  title={link.title}
                  css={[
                    tw`hover:(text-primary) lg:(px-2 text-lg)`,
                    link.href === pathName && tw`text-primary`,
                  ]}
                >
                  {link.title}
                </Link>
              )
            })}
          </div>
        </div>

        <div tw="flex flex-col gap-6">
          <Paragraph tw="lg:(text-2xl)">Follow us on Social Media</Paragraph>

          <div tw="flex items-center gap-8 lg:(self-end)">
            {socialLinks.map(social => {
              const Icon = social.icon
              return (
                <Link
                  href={social.link}
                  key={social.title}
                  title={social.title}
                  tw="hover:(text-primary)"
                >
                  <Icon size={30} />
                </Link>
              )
            })}
          </div>
        </div>

        <Paragraph tw="md:(hidden)">&copy; ACMF 2023</Paragraph>
      </Maxwidth>
    </footer>
  )
}

const socialLinks = [
  {
    title: 'instagram',
    icon: FaInstagram,
    link: socials.instagram.path,
  },
  {
    title: 'facebook',
    icon: FaFacebook,
    link: socials.facebook.path,
  },
  {
    title: 'tiktok',
    icon: FaTiktok,
    link: socials.tiktok.path,
  },
]

export default Footer
