import { cn } from "@/lib/helpers"
import { LegacyRef, forwardRef } from "react"

type TInputProps = React.InputHTMLAttributes<HTMLInputElement>
type TTextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>

type Props =
  | ({ as: "input" } & TInputProps)
  | ({ as: "textarea" } & TTextareaProps)

export const Input = forwardRef((props: Props, ref) => {
  const { as, ...rest } = props
  if (as === "input") {
    const inputProps = rest as TInputProps
    return (
      <input
        ref={ref as LegacyRef<HTMLInputElement>}
        {...inputProps}
        className={cn(
          "bg-neutral-200 focus:outline-none block w-full rounded-xl py-2 px-4",
          rest.className
        )}
      />
    )
  } else {
    const textareaProps = rest as TTextareaProps
    return (
      <div
        className={cn(
          "bg-neutral-200 w-full rounded-xl overflow-hidden h-24",
          rest.className
        )}
      >
        <textarea
          className="block w-full h-full px-4 py-2 bg-transparent resize-none custom-scrollbar focus:outline-none"
          ref={ref as LegacyRef<HTMLTextAreaElement>}
          {...textareaProps}
        />
      </div>
    )
  }
})
