// after event is held, remove the 'url' and put 'socialUrl', which is to be the link to the video or post
// universal time format - YYYY-MM-DDTHH:mm:ss.sssZ

import { compareAsc, isBefore } from 'date-fns'
import { useState, useEffect } from 'react'

export const eventsList = [
  {
    title: 'Essay Competition',
    desc: 'Nigeria @ 62, The good, the bad, and the way forward',
    date: '2022-10-22T10:00:00.000+01:00',
    location: 'Havarde College, Abeokuta',
    type: 'physical',
    image: '/events/1.jpg',
    socialUrl: '',
  },
  {
    title: 'Report Writing Workshop',
    desc: 'Workshop on seminar and project report writing for final year students of tertiary institutions. Graced by Lecturers and undergraduates from multiple institutions and marked by research grant awards.',
    date: '2023-01-14T10:00:00.000+01:00',
    location: 'Havarde College, Abeokuta',
    type: 'physical',
    image: '/events/2.jpg',
    socialUrl: '',
  },
  {
    title:
      'A discussion around the deficiencies in the Nigerian educational system',
    desc: 'A dive into the role of parents, the government, school authorities and the students in reaching a lasting solution.',
    date: '2023-08-16T16:30:00.000+01:00',
    location: 'Zoom',
    type: 'virtual',
    image: '/events/3.jpg',
    socialUrl: 'https://youtube.com/live/vF0nfQEy6kM?feature=share',
  },
  {
    title: 'Legal Awareness Campaign - Student Rights',
    desc: 'Enlightenment on Students Rights.',
    date: '2023-09-20T16:30:00.000+01:00',
    location: 'Zoom',
    type: 'virtual',
    image: '/events/4.jpg',
    socialUrl: 'https://www.youtube.com/live/BdiwT6EUlxM?si=vcaAp_A4KOa9ONGc',
  },
  {
    title: 'Legal Awareness Campaign - Employer-Employee Rights',
    desc: 'Employer-Employee Rights.',
    date: '2023-10-11T16:30:00.000+01:00',
    location: 'Zoom',
    url: 'https://us06web.zoom.us/j/89673425868?pwd=Q1FuSjJqaWhaRTJucEF4c0Q1OGxBUT09',
    type: 'virtual',
    image: '/events/5.jpg',
    socialUrl: '',
  },
  {
    title: 'Legal Awareness Campaign - Landlord-Tenant Rights',
    desc: 'Landlord-Tenants Rights.',
    date: '2023-11-18T16:30:00.000+01:00',
    location: 'Zoom',
    url: 'https://us06web.zoom.us/j/89673425868?pwd=Q1FuSjJqaWhaRTJucEF4c0Q1OGxBUT09',
    type: 'virtual',
    image: '/events/6.jpg',
    socialUrl: '',
  },
  // {
  //   title: 'Talent Hunt',
  //   desc: '',
  //   date: '2024-02-01T10:00:00.000+01:00',
  //   location: '',
  //   type: '',
  //   image: '/events/7.jpg',
  //   socialUrl: '',
  // },
  {
    title: 'Launching and Formal opening of ACMF Development Center',
    desc: '',
    date: '2024-01-20T10:00:00.000+01:00',
    location:
      'Central suite, 3rd floor, Imran Taiwo Rockview Complex, Opposite Polaris Bank, Kuto, Abeokuta',
    type: 'physical',
    image: '/events/8.jpg',
    socialUrl: '',
  },
  {
    title:
      'Health Workshop: Holistic health for health care provider in private sector.',
    desc: '',
    date: '2024-02-14T10:00:00.000+01:00',
    location:
      'ACMF youth development centre, Imran Taiwo plaza, Opp Polaris Bank, Kuto, Abeokuta.',
    type: 'physical',
    image: '/events/9.jpg',
    socialUrl:
      'https://platformtimes.com.ng/experts-worry-over-health-conditions-of-traditional-birth-attendant/',
  },
  {
    title: 'School Tour',
    desc: '',
    date: '2024-02-21T10:00:00.000+01:00',
    location: 'Selected secondary schools in Abeokuta',
    type: 'physical',
    image: '/events/10.jpg',
    socialUrl: 'https://www.instagram.com/p/C3pjmeONM1S/?igsh=NTc4MTIwNjQ2YQ==',
  },
  {
    title: 'ACMF inaugurated Book Club in secondary schools in Ogun State.',
    desc: '',
    date: '2024-03-12T10:00:00.000+01:00',
    endDate: '2024-03-28T10:00:00.000+01:00',
    location: 'Selected secondary schools in Ogun state, Nigeria',
    type: 'physical',
    image: '/events/11.jpg',
    socialUrl: 'https://www.instagram.com/p/C4geqC1rmcT/?igsh=NTc4MTIwNjQ2YQ==',
  },
  {
    title: 'Inter House sports competition appearance',
    desc: '',
    date: '2024-03-28T10:00:00.000+01:00',
    withTime: false,
    location:
      'With Top Tees schools, opako, Abeokuta. Held at MKO Abiola Stadium',
    type: 'physical',
    image: '/events/12.jpg',
    socialUrl: 'https://www.instagram.com/p/C5EMIu8rCV8/?igsh=NTc4MTIwNjQ2YQ==',
  },
  {
    title:
      'Seminar and Project Reports writing and presentation skills workshop',
    desc: '',
    date: '2024-02-17T10:00:00.000+01:00',
    endDate: '2024-02-24T10:00:00.000+01:00',
    location: 'ACMF Development Centre, Kuto Abeokuta Ogun State.',
    type: 'physical',
    image: '/events/13.jpg',
    socialUrl: 'https://www.instagram.com/p/C3xj1ZPtGKw/?igsh=NTc4MTIwNjQ2YQ==',
  },
  {
    title: 'Two Weeks Vocational Training',
    desc: '',
    date: '2024-02-19T10:00:00.000+01:00',
    endDate: '2024-03-01T10:00:00.000+01:00',
    location: 'ACMF Development Centre, Kuto Abeokuta Ogun State.',
    type: 'physical',
    image: '/events/14.jpg',
    socialUrl: 'https://www.instagram.com/p/C4TezbZrfqq/?igsh=NTc4MTIwNjQ2YQ==',
  },
  {
    title: 'Courtesy visit to NDLEA, Ogun State Command',
    desc: '',
    date: '2024-01-11T10:00:00.000+01:00',
    location: 'Ogun State Command, Ibara GRA, Abeokuta.',
    type: 'physical',
    image: '/events/15.jpg',
    socialUrl: 'https://www.instagram.com/p/C2FWUVINXv3/?igsh=NTc4MTIwNjQ2YQ==',
  },
  {
    title:
      'Courtesy visit to Hon. Commissioner for Education, Science and Technology, Ogun State.',
    desc: '',
    date: '2024-01-24T10:00:00.000+01:00',
    location:
      'Office of the Hon. Commissioner for Education Science and Technology, Ogun State, Oke-mosan, Abeokuta.',
    type: 'physical',
    image: '/events/16.jpg',
    socialUrl:
      'https://www.instagram.com/reel/C2wbhK1CFEL/?igsh=NTc4MTIwNjQ2YQ==',
  },
  {
    title: 'Tuberculosis Awareness Rally',
    desc: '',
    date: '2024-03-23T10:00:00.000+01:00',
    endDate: '2024-03-26T10:00:00.000+01:00',
    location: 'Abeokuta City, DS Adegbenro ICT Polytechnic and Mapoly.',
    type: 'physical',
    image: '/events/17.jpg',
    socialUrl: 'https://www.instagram.com/p/C45cctbtLWj/?igsh=NTc4MTIwNjQ2YQ==',
  },
  {
    title: 'Free tutorial for senior secondary schools in Abeokuta Ogun State',
    desc: '',
    date: '2024-04-01T10:00:00.000+01:00',
    withTime: false,
    location: 'ACMF Development Centre, Kuto Abeokuta Ogun State.',
    type: 'physical',
    image: '/events/18.jpg',
    socialUrl: 'https://www.instagram.com/p/C55lJlorrlx/?igsh=NTc4MTIwNjQ2YQ==',
  },
  {
    title:
      'AMCF in collaboration with OGIC and NDLEA Awareness campaign against Substance Abuse in Ogun State secondary schools.',
    desc: '',
    date: '2024-04-30T10:00:00.000+01:00',
    location: 'secondary schools in Ogun State',
    type: 'physical',
    image: '/events/19.jpg',
    socialUrl: '',
    withTime: false,
  },
  {
    title: 'Essay Competition And Awards Ceremony',
    desc: '',
    date: '2024-11-14T11:00:00.000+01:00',
    location: 'ACMF Development Centre, Kuto Abeokuta Ogun State.',
    type: 'physical',
    image: '/events/20.jpg',
    socialUrl: '',
    withTime: true,
  },
]

export const useEvents = () => {
  const process = () => {
    const currentDate = new Date()
    const upcomingEvents = eventsList
      .filter(event => isBefore(currentDate, new Date(event.date)))
      .sort((a, b) => compareAsc(new Date(a.date), new Date(b.date)))

    const pastEvents = eventsList
      .filter(event => isBefore(new Date(event.date), currentDate))
      .sort((a, b) => compareAsc(new Date(b.date), new Date(a.date)))

    return { upcomingEvents, pastEvents }
  }

  const [events, setEvents] = useState({
    upcomingEvents: process().upcomingEvents,
    pastEvents: process().pastEvents,
  })

  useEffect(() => {
    // Function to fetch and update events data
    const fetchAndUpdateEvents = () => {
      const { upcomingEvents, pastEvents } = process()

      setEvents({ upcomingEvents, pastEvents })
    }

    // Fetch and update events immediately
    fetchAndUpdateEvents()

    // Refresh events every hour (3600000 milliseconds)
    const intervalId = setInterval(fetchAndUpdateEvents, 3600000)

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId)
  }, []) // Empty dependency array ensures this effect runs only once

  return events
}
