import { Button, Input } from "@/components/ui"
import { cn, validatePhone } from "@/lib/helpers"
import { SubmitHandler, useForm } from "react-hook-form"

type FormData = {
  name: string
  email: string
  phone: string
  message: string
}

export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()
  const onSubmit: SubmitHandler<FormData> = (data) => console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-4 mb-8">
        <label className="flex flex-col gap-1">
          <span className={cn(errors.name && "text-red-500")}>Name</span>
          <Input
            as="input"
            aria-invalid={errors.name ? true : false}
            type="text"
            {...register("name", { required: true })}
          />
        </label>
        <label className="flex flex-col gap-1">
          <span className={cn(errors.email && "text-red-500")}>Email</span>
          <Input
            as="input"
            aria-invalid={errors.email ? true : false}
            type="text"
            {...register("email", {
              required: true,
              pattern: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/,
            })}
          />
        </label>
        <label className="flex flex-col gap-1">
          <span className={cn(errors.phone && "text-red-500")}>Phone</span>
          <Input
            as="input"
            aria-invalid={errors.phone ? true : false}
            type="text"
            {...register("phone", {
              required: true,
              pattern: /\+\d{4,15}/,
              onChange: (e) => {
                e.target.value = validatePhone(e.target.value)
              },
            })}
            onPaste={(e) => {
              e.preventDefault()
              const clipboard = e.clipboardData.getData("Text")
              if (clipboard) {
                e.currentTarget.value = validatePhone(clipboard)
              }
            }}
          />
        </label>
        <label className="flex flex-col gap-1">
          <span className={cn(errors.message && "text-red-500")}>Message</span>
          <Input
            as="textarea"
            aria-invalid={errors.message ? true : false}
            {...register("message", { required: false })}
          />
        </label>
      </div>

      <Button className="mx-auto md:w-full" as="button">
        Send
      </Button>
    </form>
  )
}
