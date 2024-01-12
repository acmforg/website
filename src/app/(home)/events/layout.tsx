import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ACMF - Events',
  description: 'ACMF Events',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <main>{children}</main>
}
