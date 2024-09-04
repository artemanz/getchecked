import { useState } from "react"
import { Popup } from "@/components/ui"
import { useOncologyData, usePrenatalData } from "./use-data"
import { CardsGroup, PopupContent } from "./components"

type Props = {
  page: "oncology" | "prenatal"
}

export const Packages = ({ page }: Props) => {
  const [popup, setPopup] = useState<number | null>(null)
  const {
    northstarData,
    hereditaryCancerData,
    bloodCancerData,
    geneticTestPackages,
  } = useOncologyData()

  const { unityScreen, genderDetection } = usePrenatalData()

  const Content = () => {
    if (page === "oncology")
      return (
        <div className="container md:px-[4.5rem] lg:px-[2rem]">
          <CardsGroup
            columns={2}
            page="oncology"
            context="northstar"
            data={northstarData}
            setPopup={setPopup}
          />

          <CardsGroup
            columns={3}
            page="oncology"
            className="mt-20"
            context="hereditary"
            data={hereditaryCancerData}
            setPopup={setPopup}
          />

          <CardsGroup
            columns={2}
            page="oncology"
            className="mt-20"
            context="blood-cancer"
            data={bloodCancerData}
            setPopup={setPopup}
          />

          <CardsGroup
            columns={2}
            page="oncology"
            className="mt-20"
            context="genetic-test"
            data={geneticTestPackages}
            setPopup={setPopup}
          />
        </div>
      )
    else
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
          <PopupContent page={page} id={popup} hide={() => setPopup(null)} />
        </Popup>
      )}
    </section>
  )
}
