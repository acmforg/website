import EventsWrapper from '@/app/layoutComponents/events-wrapper'
import Events from './components/events-list-map'
import EventsContainer from './components/events-page-container'

const EventsPage = () => {
  return (
    <EventsWrapper>
      <EventsContainer />
    </EventsWrapper>
  )
}

export default EventsPage
