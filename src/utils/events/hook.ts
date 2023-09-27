// after event is held, remove the 'url' and put 'socialUrl', which is to be the link to the video or post

'use client'

import { useQuery } from '@tanstack/react-query'
import { fetchEvents } from '.'

export const useEventsList = () => {
  return useQuery({
    queryKey: ['events'],
    queryFn: fetchEvents,
  })
}
