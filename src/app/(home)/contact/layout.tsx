import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ACMF - Contact Us',
  description: 'Reach out to us at ACMF',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <main>{children}</main>
}
