import getQueryClient from '@/utils/lib/react-query/queryClient'
import { ReactNode } from 'react'
import { dehydrate, Hydrate } from '@tanstack/react-query'
import { fetchEvents } from '@/utils/events'

export default async function EventsWrapper({
  children,
}: {
  children: ReactNode
}) {
  const queryClient = getQueryClient()
  await queryClient.prefetchQuery(['events'], fetchEvents)
  const dehydratedState = dehydrate(queryClient)

  return <Hydrate state={dehydratedState}>{children}</Hydrate>
}
