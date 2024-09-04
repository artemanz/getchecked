import { Dispatch, ReactNode, SetStateAction } from "react"

export type CardData = {
  id: number
  title: ReactNode
  subtitle?: ReactNode
  analysis: "blood" | "salvia"
  badges: {
    blood: ReactNode
    report: ReactNode
  }
  content: ReactNode
  oldprice: ReactNode
  currentPrice: ReactNode
  actions: boolean
}

export type CardProps = {
  item: CardData
  setPopup: Dispatch<SetStateAction<number | null>>
  tag: "div" | "li"
}
