import getQueryClient from '@/utils/lib/react-query/queryClient'
import { ReactNode } from 'react'
import { dehydrate, Hydrate } from '@tanstack/react-query'
import { EVENTS_KEY, fetchEvents } from '@/utils/lib/react-query/useEventsHook'

export default async function EventsWrapper({
  children,
}: {
  children: ReactNode
}) {
  const queryClient = getQueryClient()
  // await queryClient.prefetchQuery([EVENTS_KEY], fetchEvents)
  const dehydratedState = dehydrate(queryClient)

  return <Hydrate state={dehydratedState}>{children}</Hydrate>
}
