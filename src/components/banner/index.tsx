import { useTranslation } from "react-i18next"
import { Button } from "../ui"

type Props = {
  picture: React.ReactNode
  title: React.ReactNode
  subtitle: React.ReactNode
  buttonHref: string
}

export const Banner = ({ picture, title, subtitle, buttonHref }: Props) => {
  const { t } = useTranslation("components")
  return (
    <div className="relative h-[18.5rem] overflow-hidden rounded-3xl bg-accent-light px-4 py-6 md:pb-6 lg:p-8">
      {picture}

      <div className="relative flex h-full flex-col">
        <p className="text-lg font-bold md:text-xl lg:text-2xl lg:leading-tight">
          {title}
        </p>

        <div className="mt-2 lg:text-lg">{subtitle}</div>

        <Button className="mt-auto" as="link" href={buttonHref}>
          {t("button")}
        </Button>
      </div>
    </div>
  )
}
