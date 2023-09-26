import { Heading, Paragraph } from '@/components'
import NextImage from '@/components/next-image'
import Link from 'next/link'
import { CiLocationOn } from 'react-icons/ci'
import { AiOutlineLink } from 'react-icons/ai'

const EventCard = ({
  title,
  desc,
  date,
  location,
  type,
  image,
  socialUrl,
}: IEvent) => {
  return (
    <div tw="flex flex-col gap-6">
      <NextImage
        cover
        tw="rounded-[0.5rem] h-[16rem] border"
        src={image}
        alt={title}
      />

      <div tw="flex flex-col gap-2 lg:(gap-3)">
        <Paragraph>{date}</Paragraph>
        <Heading $variant="h4" tw="lg:(pb-1 text-xl)">
          {title}
        </Heading>

        <Paragraph tw="flex gap-2 items-center">
          <CiLocationOn size={20} />
          {location}
        </Paragraph>

        {socialUrl ? (
          <Link
            tw="flex items-center gap-4 hocus:(text-primary)"
            href={socialUrl}
            target="_blank"
          >
            <AiOutlineLink size={20} /> View more
          </Link>
        ) : null}
      </div>
    </div>
  )
}

export default EventCard
