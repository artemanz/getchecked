import { Button, Picture } from "@/components/ui"
import { useTranslation } from "react-i18next"

type Props = {
  page: "oncology" | "prenatal"
  image: {
    src: string
    alt: string
  }
}

export const Hero = ({ page, image }: Props) => {
  const { t } = useTranslation()

  return (
    <section className="bg-[linear-gradient(180deg,#FEFCE9_0%,#FFFFFF_92.01%)] pb-10 pt-3 xl:pt-5">
      <div className="mx-auto max-w-[68.75rem] px-2">
        <div className="relative mb-4 aspect-[3/2] max-h-[25rem] w-full">
          <Picture
            className="absolute inset-0 overflow-hidden rounded-2xl"
            DEFAULT={image.src}
            alt={image.alt}
          />
        </div>

        <h1
          className={
            "text-center text-xl-xl font-semibold lg:text-2xl-xl xl:mb-6 xl:text-4xl"
          }
        >
          {t(`${page}:hero.title`)}
        </h1>

        <p className="mb-4 text-balance text-center text-xl leading-tight lg:mb-6 lg:text-2xl-lg xl:mb-10 xl:text-3xl">
          {t(`${page}:hero.subtitle`)}
        </p>
        <Button className="mx-auto" as="link" href="#contacts">
          {t("components:button")}
        </Button>
      </div>
    </section>
  )
}
