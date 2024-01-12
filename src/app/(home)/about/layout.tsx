import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ACMF - About',
  description: 'About Acmf',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <main>{children}</main>
}
