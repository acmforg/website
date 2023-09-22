'use client'

import { ReactNode } from 'react'
import Header from './header'
import Footer from './footer'

const LayoutWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <div tw="h-full min-h-[50vh]">{children}</div>
      <Footer />
    </>
  )
}

export default LayoutWrapper
