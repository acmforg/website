import { Heading, Paragraph } from '@/components'
import NextImage from '@/components/next-image'
import Link from 'next/link'
import { CiLocationOn } from 'react-icons/ci'
import { AiOutlineLink } from 'react-icons/ai'
import { format } from 'date-fns'
import tw from 'twin.macro'

const EventCard = ({
  title,
  desc,
  date,
  location,
  type,
  image,
  url,
  socialUrl,
  endDate,
  withTime = true,
}: IEvent) => {
  return (
    <div tw="flex flex-col gap-6">
      <NextImage
        cover
        imageStyles={tw`bg-top`}
        tw="rounded-[0.5rem] h-[20rem] border sm:(h-[25rem]) lg:(h-[20rem])"
        src={image}
        alt={title}
      />

      <div tw="flex flex-col gap-2 lg:(gap-3)">
        <Paragraph>
          {format(new Date(date), 'do LLLL, yyyy')}
          {endDate
            ? ` to ${format(new Date(endDate), ' do LLLL,yyyy')}`
            : withTime
            ? format(new Date(date), '. hh:mmaaa')
            : '.'}
        </Paragraph>
        <Heading $variant="h4" tw="lg:(pb-1 text-xl)">
          {title}
        </Heading>

        {type === 'virtual' && url ? (
          <Link
            href={url}
            tw="hocus:(text-primary) font-medium flex gap-2 items-center"
          >
            <AiOutlineLink size={20} tw="min-w-[20px]" />
            {location} link
          </Link>
        ) : (
          <Paragraph tw="flex gap-2 items-center">
            <CiLocationOn size={20} tw="min-w-[20px]" />
            {location}
          </Paragraph>
        )}

        {socialUrl ? (
          <Link
            tw="flex items-center w-fit gap-4 hocus:(text-primary)"
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
