import {
  FancyHeader,
  Heading,
  Maxwidth,
  Paragraph,
  YellowDoor,
} from '@/components'
import NextImage from '@/components/next-image'
import tw from 'twin.macro'
import { involvements } from '../config'

const Events = () => {
  return (
    <Maxwidth tw="flex flex-col items-center relative pt-6 gap-16 lg:(gap-20)">
      <YellowDoor />

      <FancyHeader tw="text-center" ordinary="Our" colored="Events" />

      <div tw="flex flex-col gap-10 lg:(flex-row gap-10)">
        {involvements.map(involvement => (
          <div key={involvement.title}>
            <Heading $variant="h4" as={'h4'}>
              {involvement.title}
            </Heading>
          </div>
        ))}
      </div>
    </Maxwidth>
  )
}

export default Events
