import { useState } from "react"
import { Popup } from "@/components/ui"
import { usePrenatalData } from "./use-data"
import { CardsGroup, PopupContent } from "./components"

export const Packages = () => {
  const [popup, setPopup] = useState<number | null>(null)

  const { unityScreen, genderDetection } = usePrenatalData()

  const Content = () => {
    return (
      <div className="container md:px-[4.5rem] lg:px-[2rem]">
        <CardsGroup
          columns={3}
          page="prenatal"
          context="unity-screen"
          data={unityScreen}
          setPopup={setPopup}
        />
        <CardsGroup
          columns={1}
          className="mt-20"
          page="prenatal"
          context="gender-detection"
          data={genderDetection}
          setPopup={setPopup}
        />
      </div>
    )
  }

  return (
    <section className="section bg-grey-light">
      <Content />

      {popup && (
        <Popup hide={() => setPopup(null)}>
          <PopupContent id={popup} hide={() => setPopup(null)} />
        </Popup>
      )}
    </section>
  )
}
