import { HTMLAttributes } from "react"

type Props = {
  DEFAULT?: string
  tablet?: string
  desktop?: string
  alt: string
} & HTMLAttributes<HTMLElement>

export const Picture = ({
  DEFAULT,
  tablet,
  desktop,
  alt,
  className,
}: Props) => {
  return (
    <picture className={className}>
      {desktop && <source srcSet={desktop} media="(min-width: 1024px)" />}
      {tablet && <source srcSet={tablet} media="(min-width: 768px)" />}
      {DEFAULT && <source srcSet={DEFAULT} />}

      <img src={DEFAULT} alt={alt} />
    </picture>
  )
}
