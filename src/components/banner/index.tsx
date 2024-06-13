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
    <div className="relative px-4 py-6 overflow-hidden rounded-3xl bg-accent-light h-[18.75rem] md:pb-6 lg:p-8">
      {picture}

      <div className="relative flex flex-col h-full">
        <p className="mb-2 text-lg font-bold md:text-xl lg:text-2xl lg:mb-4">
          {title}
        </p>

        <p className="mb-auto max-w-[12rem] md:max-w-[17.5rem] lg:max-w-[28rem] lg:text-lg">
          {subtitle}
        </p>

        <Button as="link" href={buttonHref}>
          {t("button")}
        </Button>
      </div>
    </div>
  )
}
