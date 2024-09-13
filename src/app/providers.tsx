import { PopupProvider } from "@/context/popup.provider"
import { Router } from "./router"

export const Providers = () => {
  return (
    <>
      <PopupProvider>
        <Router />
      </PopupProvider>
    </>
  )
}
