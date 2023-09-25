import { Button, FancyHeader, Heading, Maxwidth, Paragraph } from '@/components'
import { involvements } from '../config'
import tw from 'twin.macro'
import { GreenDoor } from '@/components'

const Involvement = () => {
  return (
    <Maxwidth tw="flex flex-col items-center relative pt-6 gap-16 lg:(gap-20)">
      <GreenDoor />

      <FancyHeader ordinary="Get" colored="Involved" />

      <div tw="flex flex-col gap-10 lg:(flex-row gap-10)">
        {involvements.map(involvement => (
          <div
            key={involvement.title}
            css={[
              { background: `url(${involvement.bg})` },
              tw`bg-primary rounded-[1rem] px-6 py-[4rem] text-white text-center bg-center bg-cover flex flex-col items-center gap-6 flex-1`,
            ]}
          >
            <Heading $variant="h4" as={'h4'}>
              {involvement.title}
            </Heading>

            <Paragraph>{involvement.desc}</Paragraph>

            <Button as={'a'} href={involvement.ctaUrl} tw="mt-4">
              {involvement.cta}
            </Button>
          </div>
        ))}
      </div>
    </Maxwidth>
  )
}

export default Involvement
