import { Button, Picture } from "@/components/ui"
import { popupContext } from "@/context/popup.context"
import { useContext } from "react"
import { useTranslation } from "react-i18next"

export const About = () => {
  const { t } = useTranslation()
  const { setPopupState } = useContext(popupContext)

  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">{t("common:about.title")}</h2>

        <div className="rounded-[2.5rem] bg-grey-light px-2 pb-8 pt-3 md:px-6 lg:px-8 lg:pt-8">
          <div className="relative mb-5">
            <Picture
              className="h-[12rem] overflow-hidden rounded-3xl lg:h-[15.625rem]"
              DEFAULT="/images/prenatal/about.jpg"
              alt="newborn holding mothers hand"
            />
            <a
              href="#documents"
              className="absolute bottom-2 right-2 grid aspect-square w-12 place-content-center rounded-full bg-accent xs:w-14 lg:w-20"
            >
              <Picture
                className="aspect-square w-8 md:w-8 lg:w-12"
                DEFAULT={"/icons/file.svg"}
                alt="File icon"
              />
            </a>
          </div>

          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:gap-8">
            <p className="px-2 lg:px-0 lg:text-lg">
              {t("prenatal:about.card.1")}{" "}
              <b>{t("prenatal:about.card.bold")}</b>{" "}
              {t("prenatal:about.card.2")}
            </p>

            <Button
              className="mx-auto flex-shrink-0"
              as="button"
              onClick={() => setPopupState(true)}
            >
              {t("components:button")}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
