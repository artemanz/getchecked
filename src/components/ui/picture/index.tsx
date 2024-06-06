import { HTMLAttributes } from "react"

type Props = {
  DEFAULT?: string
  tablet?: string
  desktop?: string
  webp?: boolean
  alt: string
} & HTMLAttributes<HTMLElement>

const withoutExtension = (src: string) => {
  return src.slice(0, src.lastIndexOf("."))
}

export const Picture = ({
  DEFAULT,
  tablet,
  desktop,
  webp,
  alt,
  className,
}: Props) => {
  return (
    <picture className={className}>
      {desktop && webp && (
        <source
          srcSet={withoutExtension(desktop) + ".webp"}
          media="(min-width: 1024px)"
        />
      )}
      {desktop && <source srcSet={desktop} media="(min-width: 1024px)" />}

      {tablet && webp && (
        <source
          srcSet={withoutExtension(tablet) + ".webp"}
          media="(min-width: 768px)"
        />
      )}
      {tablet && <source srcSet={tablet} media="(min-width: 768px)" />}

      {DEFAULT && webp && (
        <source srcSet={withoutExtension(DEFAULT) + ".webp"} />
      )}
      {DEFAULT && <source srcSet={DEFAULT} />}

      <img src={DEFAULT} alt={alt} />
    </picture>
  )
}
