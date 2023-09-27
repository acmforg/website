import { eventsList } from '@/utils/eventsList'
import { compareAsc, isBefore } from 'date-fns'
import { NextResponse } from 'next/server'

export const revalidate = 3600 // revalidate at most every hour

export async function GET() {
  const currentDate = new Date()

  const upcomingEvents = eventsList
    .filter(event => isBefore(currentDate, new Date(event.date)))
    .sort((a, b) => compareAsc(new Date(a.date), new Date(b.date)))

  const pastEvents = eventsList
    .filter(event => isBefore(new Date(event.date), currentDate))
    .sort((a, b) => compareAsc(new Date(b.date), new Date(a.date)))

  return NextResponse.json({ upcomingEvents, pastEvents })
}
