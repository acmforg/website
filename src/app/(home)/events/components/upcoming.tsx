'use client'

import { FancyHeader, Heading, Maxwidth } from '@/components'
import NextImage from '@/components/next-image'
import {
  EVENTS_KEY,
  IEventData,
  fetchEvents,
} from '@/utils/lib/react-query/useEventsHook'
import { useQuery } from '@tanstack/react-query'

const Upcoming = () => {
  const { data } = useQuery({ queryKey: [EVENTS_KEY], queryFn: fetchEvents })
  const event = data?.[0]
  console.log(event)

  if (!event) return <></>

  const {
    // start: { dateTime: startTime },
    // end: { dateTime: endTime },
    attachments: [{ iconLink: imageUrl }],
    summary: title,
  } = event || ({} as IEventData)

  return (
    <Maxwidth>
      <FancyHeader ordinary="Upcoming" colored="Events" />

      {data
        ? [...Array(2)].map((event, idx) => (
            <div key={idx} tw="flex flex-col gap-6">
              {/* <NextImage
                cover
                tw="rounded-[0.5rem] h-[16rem]"
                src={imageUrl}
                alt={title}
              /> */}

              <div>
                <Heading>{title}</Heading>
              </div>
            </div>
          ))
        : null}
    </Maxwidth>
  )
}

export default Upcoming
