import { cn } from "@/lib/helpers/cn"
import { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react"

type Props = (
  | ({ as: "link" } & AnchorHTMLAttributes<HTMLAnchorElement>)
  | ({ as: "button" } & ButtonHTMLAttributes<HTMLButtonElement>)
) & {
  children: React.ReactNode
}

export const Button = (props: Props) => {
  const styles =
    "font-medium block bg-accent px-5 py-3 rounded-full w-[10rem] text-center transition-colors [&:not(:disabled)]:bg-accent/75 [&:not(:disabled)]:hover:text-accent-dark"

  if (props.as === "link") {
    const { as, className, ...rest } = props

    return (
      <a className={cn(styles, className)} {...rest}>
        {props.children}
      </a>
    )
  } else {
    const { as, className, ...rest } = props

    return (
      <button className={cn(styles, className)} {...rest}>
        {props.children}
      </button>
    )
  }
}
