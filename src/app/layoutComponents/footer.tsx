'use client'

import { Logo, Maxwidth, Paragraph } from '@/components'
import { socials } from '@/utils/routepaths'
import Link from 'next/link'
import { FaFacebook, FaLinkedinIn, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer tw="bg-customGrey text-white border-b-2 border-b-secondary">
      <Maxwidth tw="flex flex-col gap-[3.38rem] px-6 py-16 items-center lg:(flex-row justify-between items-center) xl:(px-0)">
        <Logo />

        <div tw="p-4 flex flex-row gap-8">
          {socialLinks.map(social => {
            const Icon = social.icon
            return (
              <Link href={social.link} key={social.title} title={social.title}>
                <Icon size={35} />
              </Link>
            )
          })}
        </div>

        <Paragraph>&copy; Copyright 2023</Paragraph>
      </Maxwidth>
    </footer>
  )
}

const socialLinks = [
  {
    title: 'twitter',
    icon: FaTwitter,
    link: socials.twitter.path,
  },
  {
    title: 'facebook',
    icon: FaFacebook,
    link: socials.facebook.path,
  },
  {
    title: 'linkedin',
    icon: FaLinkedinIn,
    link: socials.linkedIn.path,
  },
]

export default Footer
