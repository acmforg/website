import {
  Button,
  GreenDoor,
  Heading,
  LinkButton,
  Maxwidth,
  Paragraph,
} from '@/components'
import { doorStyles, topLeftStyles } from '@/components/icons'
import NextImage from '@/components/next-image'
import tw from 'twin.macro'
import { useToggle } from 'usehooks-ts'

interface SupportProps {
  showDetailsByDefault?: boolean
}

export const Support = ({ showDetailsByDefault = false }: SupportProps) => {
  const [showDonationDetails, toggleDonationDetails] =
    useToggle(showDetailsByDefault)
  return (
    <Maxwidth tw="relative flex flex-col py-12 gap-10 lg:(gap-[6rem] py-[3rem] flex-row items-center)">
      <NextImage
        src={'/door-green.png'}
        alt={'door'}
        css={[doorStyles, topLeftStyles, tw`-top-[5rem] lg:(-top-[9rem])`]}
      />

      <NextImage
        cover
        src="/donate.png"
        alt="support-acmf"
        tw="h-[17rem] rounded-[0.75rem] lg:(h-[25.3125rem] min-w-[29.375rem])"
      />

      <div tw="flex flex-col gap-4">
        <Heading $variant="h4" as="h4" tw="lg:(text-[2rem] leading-[2.625rem])">
          Your support fuels our mission.
          <br tw="hidden lg:(block)" />{' '}
          <span tw="text-primary">Help us empower the next generation.</span>
        </Heading>

        <Paragraph>
          Your donations directly fund our programs, workshops, and services,
          enabling us to reach more youth and create lasting change.
        </Paragraph>

        {!showDetailsByDefault ? (
          <Button onClick={toggleDonationDetails}>Donate Now</Button>
        ) : null}
        {showDonationDetails ? (
          <Paragraph>
            <Colored>Account name:</Colored> Accurate-Creative Minds Foundation{' '}
            <br />
            <Colored>Account no.:</Colored> 1013066409 <br />
            <Colored>Bank Name:</Colored> Keystone
          </Paragraph>
        ) : null}
      </div>
    </Maxwidth>
  )
}

const Colored = tw.span`text-primary font-semibold`

export default Support
