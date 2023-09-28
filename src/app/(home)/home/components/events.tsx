import { Button, FancyHeader, Maxwidth, YellowDoor } from '@/components'
import EventsListMap from '../../events/components/events-list-map'
import { useEvents } from '@/utils/events'
import Link from 'next/link'
import { routePaths } from '@/utils/routepaths'

const Events = () => {
  const { upcomingEvents, pastEvents } = useEvents()

  const eventsToShow =
    upcomingEvents.length >= 2
      ? upcomingEvents.slice(0, 2)
      : upcomingEvents.length === 1
      ? [upcomingEvents[0], pastEvents[0]]
      : pastEvents.slice(0, 2)

  return (
    <Maxwidth tw="flex flex-col items-center relative pt-6 gap-16 lg:(gap-20)">
      <YellowDoor />

      <FancyHeader tw="text-center" ordinary="Our" colored="Events" />

      <EventsListMap events={eventsToShow} />

      <Button as={Link} href={routePaths.events.path}>
        See more
      </Button>
    </Maxwidth>
  )
}

export default Events
