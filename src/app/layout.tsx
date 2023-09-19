import type { Metadata } from 'next'
import GlobalStyles from '@/utils/styles/GlobalStyles'
import StyledComponentsRegistry from '@/utils/lib/registry'
import LayoutWrapper from './layoutComponents/layoutWrapper'

export const metadata: Metadata = {
  title: 'Twin example',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <GlobalStyles />
          <LayoutWrapper>{children}</LayoutWrapper>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
