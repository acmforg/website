export interface InputProps {
  type?: 'input' | 'textarea'
  register: any
  validation: any
  name: string
  label?: string
}

const Input = (props: InputProps) => {
  const { type = 'input', register, validation, name, label } = props

  if (type === 'textarea') {
    return (
      <div tw="flex flex-col">
        {label && (
          <label tw="text-lg mb-3 w-max" htmlFor={name}>
            {label}
          </label>
        )}
        <textarea
          {...register(name, validation)}
          tw="rounded-md border-solid p-3 h-40 border border-dark"
        />
      </div>
    )
  }

  if (type === 'input') {
    return (
      <div tw="flex flex-col mb-5">
        {label && (
          <label tw="text-lg mb-3 w-max" htmlFor={name}>
            {label}
          </label>
        )}
        <input
          {...register(name, validation)}
          tw="rounded-md border-solid p-3 h-11 border border-dark"
        />
      </div>
    )
  }
}

export default Input
