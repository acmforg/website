import { routePaths } from '@/utils/routepaths'

export const heroConfig = {
  heading: 'Empowering the Next Generation to Realize Their Full Potential',
  sub: "We believe in the boundless potential of young minds. We're on a mission to provide them with the tools, mentorship, and opportunities they need to turn their dreams into reality.",
  img: '/hero.png',
  cta: 'Explore Our Programs',
  ctaUrl: '#' + routePaths.programs.path,
}

export const subHero = {
  heading:
    "Our journey began with a vision of harnessing the untapped potential of today's youth.",
  sub: 'The ACCURATE-CREATIVE MINDS FOUNDATION was established to provide a platform where young talents can flourish, dreams can be realized, and communities can thrive.',
  cta: 'Learn More',
  ctaUrl: routePaths.about.path,
  img: '/sub-hero.png',
}

export const programs = [
  {
    title: 'Mentorship Programs',
    desc: 'Our mentorship programs are designed to provide one-on-one guidance and support to young individuals. We match talented and passionate mentors with aspiring youth, creating a dynamic learning environment where knowledge and experience are shared.',
    icon: '/icons/mentorship.png',
    label: 'mentorship',
    color: '#3571B8',
  },
  {
    title: 'Training Workshops',
    desc: 'Our training workshops cover a wide range of fields, from arts and technology to entrepreneurship and leadership. These hands-on workshops are facilitated by experts in their respective domains and are tailored to equip participants with practical skills and knowledge.',
    icon: '/icons/training.png',
    label: 'training',
    color: '#408F46',
  },
  {
    title: 'Support Services',
    desc: 'Our comprehensive support services encompass a variety of resources aimed at holistic youth development. We provide counseling, career guidance, and access to educational resources to help young individuals overcome obstacles and reach their full potential.',
    icon: '/icons/support.png',
    label: 'support',
    color: '#D79151',
  },
]

export const involvements = [
  {
    title: 'Volunteer Opportunities',
    desc: 'Join our team of dedicated volunteers and make a difference in the lives of young people. Your time and expertise can shape the future.',
    cta: 'Become a Volunteer',
    ctaUrl: '#contact',
    bg: '/volunteer.png',
  },
  {
    title: 'Partnerships',
    desc: "Collaborate with us to amplify our impact. Together, we can create a brighter future for today's youth.",
    cta: 'Partner with Us',
    ctaUrl: '#contact',
    bg: '/partnership.png',
  },
]

export const testimonials = [
  {
    comment: `The Accurate creative minds really help me as a final year student while I was writing my project. The knowledge gained from the Accurate creative minds was of great help as I knew what exactlyand while learning, I also got to win a grant of #20,000 for being an active participant
Thanks a lot Accurate creative minds.`,
    name: 'Damilola Oluwayomi',
  },
  {
    comment:
      'I would like to extend my heartfelt gratitude to ACMF, for the invaluable guidance and knowledge they have imparted to me in the realm of project and seminar report writing. The skills and expertise I have gained through their training are immeasurable, and I feel equipped with the tools necessary to excel in my academic and professional pursuits.',
    name: 'Benedicta O. Aluko',
  },
  {
    comment: `I'm sincerely grateful for the generous 20,000 Naira research grant. Your support is invaluable, and it'll greatly impact my research. I'm honored to receive your foundation's generosity and will use this grant to advance our shared goals. Thank you for believing in my work.`,
    name: 'Awe Blessing',
  },
]

export default {
  heroConfig,
  subHero,
  programs,
  involvements,
  testimonials,
}
