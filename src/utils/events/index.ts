import axios from 'axios'

export const fetchEvents = async () => {
  const resp = await axios.get('/events/api')
  return resp.data as IEventResponse
}
