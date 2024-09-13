import { popupContext } from "@/context/popup.context"
import {
  About,
  Hero,
  Needs,
  Video,
  Works,
  Discover,
  Packages,
  Cta,
  Documents,
  Faq,
  Contact,
} from "./layout"
import { useContext } from "react"
import { Popup } from "@/components/ui"
import { Form } from "@/components"
import { Close } from "@/components/svg"

export const Prenatal = () => {
  const { popupState, setPopupState } = useContext(popupContext)

  return (
    <main>
      <Hero />
      <About />
      <Needs />
      <Video />
      <Works />
      <Discover />
      <Packages />
      <Cta />
      <Documents />
      <Faq />
      <Contact />

      {popupState && (
        <Popup hide={() => setPopupState(false)}>
          <div className="animate-fade-in relative flex flex-col justify-center rounded-2xl border border-accent bg-white p-4 md:px-20 md:py-10">
            <p className="text-center text-2xl font-bold">Contact</p>
            <p className="mt-4 text-center md:text-lg">
              If you have a query - we'll do our best to assist you.
            </p>
            <Form className="mt-4" />
            <button
              onClick={() => setPopupState(false)}
              className="absolute right-4 top-4"
            >
              <Close />
            </button>
          </div>
        </Popup>
      )}
    </main>
  )
}
