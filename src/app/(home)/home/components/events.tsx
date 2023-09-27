'use client'

import {
  Button,
  FancyHeader,
  LoadingComponent,
  Maxwidth,
  YellowDoor,
} from '@/components'
import EventsListMap from '../../events/components/events-list-map'
import Link from 'next/link'
import { routePaths } from '@/utils/routepaths'
import { useEventsList } from '@/utils/events/hook'

const Events = () => {
  const { data } = useEventsList()

  const { upcomingEvents, pastEvents } = data || ({} as IEventResponse)

  const eventsToShow =
    upcomingEvents?.length! >= 2
      ? upcomingEvents?.slice(0, 2)
      : upcomingEvents?.length === 1
      ? [upcomingEvents[0], pastEvents[0]]
      : pastEvents?.slice(0, 2)

  return (
    <Maxwidth tw="flex flex-col items-center relative pt-6 gap-16 lg:(gap-20)">
      <YellowDoor />

      <FancyHeader tw="text-center" ordinary="Our" colored="Events" />

      {!data ? <LoadingComponent /> : <EventsListMap events={eventsToShow} />}

      <Button as={Link} href={routePaths.events.path}>
        See more
      </Button>
    </Maxwidth>
  )
}

export default Events
