'use client'

import { Heading, Maxwidth } from "@/components"
import Button from "@/components/Button"
import Image from "next/image"
import contact from "public/contact.png"
import { SubmitHandler, useForm } from "react-hook-form";
import Input from "./input";

interface ContactForm {
  name: string;
  email: string;
  reason: string;
}

const Contact = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ContactForm>()

  const onSubmit: SubmitHandler<ContactForm> = (data) => console.log(data)

  return <div tw="min-h-screen px-5 md:px-0 py-20 bg-lightGrey">
    <Maxwidth>
      <div tw="grid md:grid-cols-2 gap-7">
        <div>
          <Heading $variant="h2">We’d love to hear from you</Heading>
          <div tw="my-10">
            <Image src={contact} alt="Contact us" />
          </div>
        </div>
        <div tw="flex items-end mb-10 text-right justify-end">
          <form onSubmit={handleSubmit(onSubmit)} tw="grid min-w-[60%]">
            <Input register={register} validation={{ required: true }} label="What's your full name?" type="input" name="name" />
            <Input register={register} validation={{ required: true }} label="Give us your email" type="input" name="email" />
            <Input register={register} validation={{ required: true }} label="What do you want to tell us?" type="textarea" name="reason" />
            <Button tw="mt-5 bg-primary rounded-xl mb-3" $variant="primary" type="submit">Send Message</Button>
          </form>
        </div>
      </div>
    </Maxwidth>
  </div>
}

export default Contact
