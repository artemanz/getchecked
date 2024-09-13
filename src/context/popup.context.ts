import { createContext, Dispatch, SetStateAction } from "react"

export const popupContext = createContext<{
  popupState: boolean
  setPopupState: Dispatch<SetStateAction<boolean>>
}>({
  popupState: false,
  setPopupState() {},
})
