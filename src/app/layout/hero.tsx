import { Button, Picture } from "@/components/ui"
import { popupContext } from "@/context/popup.context"
import { useContext } from "react"
import { useTranslation } from "react-i18next"

export const Hero = ( ) => {
  const { t } = useTranslation("prenatal")
  const { setPopupState } = useContext(popupContext)


  return (
    <section className="bg-[linear-gradient(180deg,#FEFCE9_0%,#FFFFFF_92.01%)] pb-10 pt-3 xl:pt-5">
      <div className="mx-auto max-w-[68.75rem] px-2">
        <div className="relative mb-4 aspect-[3/2] max-h-[25rem] w-full">
          <Picture
            className="absolute inset-0 overflow-hidden rounded-2xl"
            DEFAULT="/images/prenatal/hero.jpg"
            alt="short hair woman smiling on sunset"
          />
        </div>

        <h1
          className={
            "text-center text-xl-xl font-semibold lg:text-2xl-xl xl:mb-6 xl:text-4xl"
          }
        >
          {t(`hero.title`)}
        </h1>

        <p className="mb-4 text-balance text-center text-xl leading-tight lg:mb-6 lg:text-2xl-lg xl:mb-10 xl:text-3xl">
          {t(`hero.subtitle`)}
        </p>
        <Button
          className="mx-auto"
          as="button"
          onClick={() => {
            setPopupState(true)
          }}
        >
          {t("components:button")}
        </Button>
      </div>
    </section>
  )
}
