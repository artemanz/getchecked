import { useTranslation } from "react-i18next"
import { Button } from "../ui"
import { popupContext } from "@/context/popup.context"
import { useContext } from "react"

type Props = {
  picture: React.ReactNode
  title: React.ReactNode
  subtitle: React.ReactNode
}

export const Banner = ({ picture, title, subtitle }: Props) => {
  const { t } = useTranslation("components")
  const { setPopupState } = useContext(popupContext)

  return (
    <div className="relative h-[18.5rem] overflow-hidden rounded-3xl bg-accent-light px-4 py-6 md:pb-6 lg:p-8">
      {picture}

      <div className="relative flex h-full flex-col">
        <p className="text-lg font-bold md:text-xl lg:text-2xl lg:leading-tight">
          {title}
        </p>

        <div className="mt-2 lg:text-lg">{subtitle}</div>

        <Button
          className="mt-auto"
          as="button"
          onClick={() => setPopupState(true)}
        >
          {t("button")}
        </Button>
      </div>
    </div>
  )
}
