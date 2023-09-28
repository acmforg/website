import { FancyHeader, Heading, Maxwidth, Paragraph } from '@/components'
import { routePaths } from '@/utils/routepaths'
import { programs } from '../config'
import NextImage from '@/components/next-image'

const Programs = () => {
  return (
    <Maxwidth
      tw="flex flex-col gap-[4rem] relative pt-6 lg:(pt-0)"
      id={routePaths.programs.path}
    >
      <NextImage
        src={'/hope.png'}
        alt={'hope'}
        tw="absolute right-0 h-[7rem] w-[3.5rem] -top-[5rem] lg:(w-[6.5rem] h-[13rem] -top-[9rem])"
      />

      <FancyHeader tw="text-center" ordinary="Our" colored="Programs" />

      <div tw="flex flex-wrap gap-[3.5rem] items-center justify-center xl:(justify-between)">
        {programs.map(program => (
          <div
            tw="flex flex-col gap-4  max-w-[20rem] lg:(max-w-[20.75rem])"
            key={program.label}
          >
            <div
              tw="w-[5.33rem] h-[4.25rem] rounded-[0.75rem] px-6 py-[1.12rem] mb-3 lg:(mb-6)"
              css={{ backgroundColor: `${program.color}` }}
            >
              <NextImage src={program.icon} alt={program.label} tw="w-8 h-8" />
            </div>

            <Heading $variant="h4" as="h4">
              {program.title}
            </Heading>

            <Paragraph>{program.desc}</Paragraph>
          </div>
        ))}
      </div>
    </Maxwidth>
  )
}

export default Programs
