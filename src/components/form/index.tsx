import { cn, validatePhone } from "@/lib/helpers"
import { HTMLAttributes, useEffect, useState } from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import { useTranslation } from "react-i18next"
import { Input, Button } from "../ui"

import emailjs from "@emailjs/browser"

type FormData = {
  name: string
  email: string
  phone: string
  message: string
}

type Props = HTMLAttributes<HTMLElement>

export const Form = ({ className }: Props) => {
  const { t } = useTranslation("common", { keyPrefix: "contact.form" })
  const [buttonState, setButtonState] = useState<"loading" | "success" | null>(
    null,
  )

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>()
  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setButtonState("loading")
    try {
      await emailjs.send("service_4ttyq5a", "template_iold1ti", {
        name: data.name,
        email: data.email,
        phone: data.phone,
        message: data.message,
      })
      reset()
      setButtonState("success")
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    if (buttonState === "success")
      setTimeout(() => {
        setButtonState(null)
      }, 3000)
  }, [buttonState])

  return (
    <form className={cn("", className)} onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-8 flex flex-col gap-4">
        <label className="flex flex-col gap-1">
          <span className={cn(errors.name && "text-red-500")}>{t("name")}</span>
          <Input
            as="input"
            aria-invalid={errors.name ? true : false}
            type="text"
            {...register("name", { required: true })}
          />
        </label>
        <label className="flex flex-col gap-1">
          <span className={cn(errors.email && "text-red-500")}>
            {t("email")}
          </span>
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
          <span className={cn(errors.phone && "text-red-500")}>
            {t("phone")}
          </span>
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
          <span className={cn(errors.message && "text-red-500")}>
            {t("message")}
          </span>
          <Input
            as="textarea"
            aria-invalid={errors.message ? true : false}
            {...register("message", { required: false })}
          />
        </label>
      </div>

      <Button
        className={cn(
          "mx-auto md:w-full",
          buttonState === "success" && "!bg-[#4ADE80] !text-white",
        )}
        as="button"
        disabled={buttonState !== null}
      >
        {buttonState === "success" ? "Success" : t("button")}
      </Button>
    </form>
  )
}
