'use client'

import { ReactNode, useState } from 'react'
import Header from './header'
import Footer from './footer'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { MinHeight } from '@/components/maxwidth'

const LayoutWrapper = ({ children }: { children: ReactNode }) => {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Header />
        <MinHeight>{children}</MinHeight>
        <Footer />
      </QueryClientProvider>
    </>
  )
}

export default LayoutWrapper
