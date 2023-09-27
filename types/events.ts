interface IEvent {
  title: string
  desc: string
  date: string
  location: string
  type: string
  image: string
  socialUrl?: string
  url?: string
}

interface IEventResponse {
  pastEvents: IEvent[]
  upcomingEvents: IEvent[]
}
