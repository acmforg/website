import { Heading, Paragraph } from '@/components'
import NextImage from '@/components/next-image'
import { CiLocationOn } from 'react-icons/ci'

const EventCard = ({ title, desc, date, location, type, image }: IEvent) => {
  return (
    <div tw="flex flex-col gap-6">
      <NextImage
        cover
        tw="rounded-[0.5rem] h-[16rem]"
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
      </div>
    </div>
  )
}

export default EventCard
