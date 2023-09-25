'use client'

import EventCard from './event-card'

export const EventsListMap = ({ events }: { events: IEvent[] }) => {
  return (
    <ul tw="w-full grid gap-10 lg:(grid-cols-2)">
      {events.map((event, idx) => (
        <li key={idx}>
          <EventCard {...event} />
        </li>
      ))}
    </ul>
  )
}

export default EventsListMap
