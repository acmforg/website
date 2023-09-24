import { listEvents } from '@/utils/lib/google-calendar/calendar'
import { NextResponse } from 'next/server'

export const revalidate = 3600 // revalidate at most every hour

export async function GET() {
  const data = await listEvents()

  return NextResponse.json(data)
}
