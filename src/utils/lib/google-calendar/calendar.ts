import { calendar } from '@googleapis/calendar'
import auth from './auth'

const myCalendar = calendar({ version: 'v3', auth: auth })

export const listEvents = async () => {
  const files = await myCalendar.events.list({
    calendarId: process.env.GOOGLE_CALENDAR_ID,
  })

  return files.data.items
}
