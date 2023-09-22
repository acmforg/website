'use client'

import { Heading, Maxwidth } from '@/components'
import Button from '@/components/Button'
import { SubmitHandler, useForm } from 'react-hook-form'
import Input from './input'
import NextImage from '@/components/next-image'

interface ContactForm {
  name: string
  email: string
  reason: string
}

const Contact = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ContactForm>()

  const onSubmit: SubmitHandler<ContactForm> = data => console.log(data)

  return (
    <div tw="pt-20 pb-[7.5rem] bg-lightGrey">
      <Maxwidth>
        <div tw="flex flex-col gap-[3.5rem]">
          <Heading $variant="h2">
            We’d love to hear <br tw="hidden md:(block)" /> from you
          </Heading>

          <div tw="flex flex-col items-center gap-7 lg:(flex-row justify-between gap-8) xl:(gap-[10.69rem])">
            <NextImage
              cover
              src={'/contact.png'}
              alt="Contact us"
              tw="min-h-[15.75rem] w-full max-w-[34.375rem] sm:(h-[25rem]) lg:(min-w-[34.375rem] h-[32.56rem])"
            />

            <form onSubmit={handleSubmit(onSubmit)} tw="w-full">
              <Input
                register={register}
                validation={{ required: true }}
                label="What's your full name?"
                type="input"
                name="name"
              />
              <Input
                register={register}
                validation={{ required: true }}
                label="Give us your email"
                type="input"
                name="email"
              />
              <Input
                register={register}
                validation={{ required: true }}
                label="What do you want to tell us?"
                type="textarea"
                name="reason"
              />
              <Button
                tw="mt-5 bg-primary rounded-xl w-full mb-3"
                $variant="primary"
                type="submit"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </Maxwidth>
    </div>
  )
}

export default Contact
