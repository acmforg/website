import {
  Button,
  FancyHeader,
  Heading,
  Maxwidth,
  Paragraph,
  YellowDoor,
} from '@/components'
import NextImage from '@/components/next-image'
import tw from 'twin.macro'
import { involvements } from '../config'
import EventsListMap from '../../events/components/events-list-map'
import { eventsList } from '@/utils/events'
import Link from 'next/link'
import { routePaths } from '@/utils/routepaths'

const Events = () => {
  const upcomingEvents = eventsList
    .filter(event => new Date(event.date) > new Date())
    .sort((a, b) => {
      const dateA = new Date(a.date)
      const dateB = new Date(b.date)
      return dateA.getTime() - dateB.getTime()
    })
  const pastEvents = eventsList
    .filter(event => new Date(event.date) < new Date())
    .sort((a, b) => {
      const dateA = new Date(a.date)
      const dateB = new Date(b.date)
      return dateB.getTime() - dateA.getTime()
    })

  const eventsToShow =
    upcomingEvents.length > 2
      ? upcomingEvents.slice(0, 2)
      : [upcomingEvents[0], pastEvents[0]]
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
