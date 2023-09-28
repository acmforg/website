'use client'

import { FancyHeader, Maxwidth } from '@/components'
import { useEvents } from '@/utils/events'
import EventsListMap from './events-list-map'
import tw from 'twin.macro'

const EventsContainer = () => {
  const { pastEvents, upcomingEvents } = useEvents()

  let hasPast = pastEvents.length > 0,
    hasUpcoming = upcomingEvents.length > 0

  return (
    <Maxwidth tw="flex flex-col gap-16 py-16 lg:(pb-[7.5rem] gap-[7.5rem])">
      {hasUpcoming ? (
        <EventClassWrapper>
          <FancyHeader tw="text-center" ordinary="Upcoming" colored="Events" />

          <EventsListMap events={upcomingEvents} />
        </EventClassWrapper>
      ) : null}

      {hasPast ? (
        <EventClassWrapper>
          <FancyHeader tw="text-center" ordinary="Past" colored="Events" />

          <EventsListMap events={pastEvents} />
        </EventClassWrapper>
      ) : null}
    </Maxwidth>
  )
}

const EventClassWrapper = tw.div`flex flex-col gap-16 lg:(gap-20)`

export default EventsContainer
