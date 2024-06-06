import { handlePageScroll } from "@/lib/helpers"
import { useEffect } from "react"

type Props = {
  hide(): void
  children: React.ReactNode
}

export const Popup = ({ hide, children }: Props) => {
  useEffect(() => {
    handlePageScroll(false)

    return () => handlePageScroll(true)
  }, [])

  return (
    <div className="fixed inset-0 z-10 grid auto-rows-fr py-10 md:py-20">
      <div onClick={hide} className="absolute inset-0 bg-black/75" />

      <div className="relative container grid auto-rows-fr">{children}</div>
    </div>
  )
}
