import { HTMLAttributes, useState } from "react"
import { popupContext } from "./popup.context"

type Props = HTMLAttributes<HTMLElement>

export const PopupProvider = ({ children }: Props) => {
  const [popupState, setPopupState] = useState(false)

  return (
    <popupContext.Provider value={{ popupState, setPopupState }}>
      {children}
    </popupContext.Provider>
  )
}
