'use client'

import { ReactNode } from 'react'
import Header from './header'
import Footer from './footer'
import { Maxwidth } from '@/components'

const LayoutWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <Maxwidth tw="min-h-[calc(100vh_-_5rem)]">{children}</Maxwidth>
      <Footer />
    </>
  )
}

export default LayoutWrapper
