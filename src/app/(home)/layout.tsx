'use client'

import getQueryClient from '@/utils/lib/react-query/queryClient'
import { ReactNode } from 'react'
import { dehydrate, Hydrate } from '@tanstack/react-query'
import { fetchEvents } from '@/utils/events'

export default function EventsWrapper({ children }: { children: ReactNode }) {
  const queryClient = getQueryClient()
  queryClient.prefetchQuery(['events'], fetchEvents)
  const dehydratedState = dehydrate(queryClient)

  return <Hydrate state={dehydratedState}>{children}</Hydrate>
}
