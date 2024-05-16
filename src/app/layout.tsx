import type { Metadata } from 'next'
import GlobalStyles from '@/utils/styles/GlobalStyles'
import StyledComponentsRegistry from '@/utils/lib/styled-comp-registry'
import LayoutWrapper from './layoutComponents/layoutWrapper'
import '@/utils/styles/index.css'

import { Plus_Jakarta_Sans } from 'next/font/google'

const ACMF_DESC =
  "We believe in the boundless potential of young minds. We're on a mission to provide them with the tools, mentorship, and opportunities they need to turn their dreams into reality."

export const metadata: Metadata = {
  title: 'ACMF - Home',
  description: ACMF_DESC,
  metadataBase: new URL('https://acmfng.org'),
  keywords: [
    'youth',
    'foundation',
    'growth',
    'ngo',
    'nigeria',
    'personal development',
    'community',
  ],
  category: 'personal development',
  openGraph: {
    title: 'ACMF',
    description: ACMF_DESC,
    url: 'https://acmfng.org',
    siteName: 'ACMF',
    type: 'website',
    images: [
      {
        url: '/icon.png',
        width: 768,
        height: 768,
        alt: 'acmf-icon',
      },
    ],
  },
}

const sans = Plus_Jakarta_Sans({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${sans.variable}`}>
      <body>
        <StyledComponentsRegistry>
          <GlobalStyles />
          <LayoutWrapper>{children}</LayoutWrapper>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
