import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export interface IEventData {
  kind: string
  etag: string
  id: string
  status: string
  htmlLink: string
  created: string
  updated: string
  summary: string
  description: string
  location: string
  creator: {
    email: string
  }
  organizer: {
    email: string
    displayName: string
    self: boolean
  }
  start: {
    dateTime: Date
    timeZone: string
  }
  end: {
    dateTime: Date
    timeZone: string
  }
  iCalUID: string
  sequence: number
  reminders: {
    useDefault: boolean
  }
  attachments: {
    fileUrl: string
    title: string
    mimeType: string
    iconLink: string
    fileId: string
  }[]
  eventType: string
}

export const EVENTS_KEY = 'LIST_OF_EVENTS'

export const fetchEvents = async () => {
  const resp = await axios.get('/events/api')
  return resp.data as IEventData[]
}

export const useEvents = () => {
  return useQuery({
    queryKey: [EVENTS_KEY],
    queryFn: fetchEvents,
  })
}
