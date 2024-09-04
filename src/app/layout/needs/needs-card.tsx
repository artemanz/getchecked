import { Picture } from "@/components/ui"
import { HTMLAttributes } from "react"

type Props = HTMLAttributes<HTMLElement> & {
  card: {
    id: string | number
    title: React.ReactNode
    icon: string
  }
}

export const NeedsCard = ({ card }: Props) => {
  return (
    <li
      className="relative flex flex-col items-center justify-center gap-3 overflow-hidden rounded-2xl bg-grey-light px-2 py-3 md:px-8 md:py-6 lg:flex-row lg:justify-start lg:gap-4 lg:text-lg"
      key={card.id}
    >
      <div className="grid place-content-center rounded-full bg-accent p-2">
        <Picture DEFAULT={card.icon} className="w-6 md:w-12" alt="icon" />
      </div>

      <div className="text-center lg:text-left">{card.title}</div>
    </li>
  )
}

type NeedsCardSpecialProps = {
  children: React.ReactNode
}

export const NeedsCardSpecial = ({ children }: NeedsCardSpecialProps) => {
  return (
    <li className="relative flex items-center overflow-hidden rounded-2xl px-1 py-1 md:px-8 md:py-1 lg:aspect-[3.5]">
      <Picture
        className="absolute inset-0"
        DEFAULT={"/images/common/dna.jpg"}
        alt="Dna"
      />

      <div className="relative inline-block font-medium leading-[1.2] lg:text-lg">
        {children}
      </div>
    </li>
  )
}
