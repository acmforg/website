'use client'

import { ReactNode } from 'react'
import Header from './header'
import Footer from './footer'

const LayoutWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <div tw="min-h-[calc(100vh_-_5rem)]">{children}</div>
      <Footer />
    </>
  )
}

export default LayoutWrapper
