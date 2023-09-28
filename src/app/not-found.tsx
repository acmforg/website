'use client'
import { Button, Heading } from '@/components'
import LayoutWrapper from './layoutComponents/layoutWrapper'
import GlobalStyles from '@/utils/styles/GlobalStyles'
import StyledComponentsRegistry from '@/utils/lib/styled-comp-registry'

const NotFound = () => {
  return (
    <StyledComponentsRegistry>
      <GlobalStyles />
      <LayoutWrapper>
        <div tw="flex flex-col gap-6 text-center px-8 py-16 items-center md:(max-w-[70%] mx-auto) lg:(py-[9rem] max-w-[50%] gap-8)">
          <Heading>404</Heading>
          <Heading $variant="h3" as="p">
            The page you're looking for is not available, or probably under
            construction
          </Heading>

          <Button as={'a'} href="/">
            Go Back Home
          </Button>
        </div>
      </LayoutWrapper>
    </StyledComponentsRegistry>
  )
}

export default NotFound
