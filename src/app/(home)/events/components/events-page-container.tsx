'use client'

import { FancyHeader, LoadingComponent, Maxwidth } from '@/components'
import EventsListMap from './events-list-map'
import tw from 'twin.macro'
import { useEventsList } from '@/utils/events/hook'

const EventsContainer = () => {
  const { data, isLoading } = useEventsList()

  const { upcomingEvents, pastEvents } = data || ({} as IEventResponse)

  let hasPast = pastEvents?.length > 0,
    hasUpcoming = upcomingEvents?.length > 0

  return (
    <Maxwidth tw="flex flex-col gap-16 py-16 lg:(pb-[7.5rem] gap-[7.5rem])">
      {isLoading ? (
        <LoadingComponent />
      ) : data ? (
        <>
          {hasUpcoming ? (
            <EventClassWrapper>
              <FancyHeader
                tw="text-center"
                ordinary="Upcoming"
                colored="Events"
              />

              <EventsListMap events={upcomingEvents} />
            </EventClassWrapper>
          ) : null}
          {hasPast ? (
            <EventClassWrapper>
              <FancyHeader tw="text-center" ordinary="Past" colored="Events" />

              <EventsListMap events={pastEvents} />
            </EventClassWrapper>
          ) : null}
        </>
      ) : null}
    </Maxwidth>
  )
}

const EventClassWrapper = tw.div`flex flex-col gap-16 lg:(gap-20)`

export default EventsContainer
