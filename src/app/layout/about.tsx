import { Button, Picture } from "@/components/ui"
import { useTranslation } from "react-i18next"

type Props = {
  page: "oncology" | "prenatal"
  image: {
    src: string
    alt: string
  }
  content: React.ReactNode
}

export const About = ({ image, content }: Props) => {
  const { t } = useTranslation()

  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">{t("common:about.title")}</h2>

        <div className="px-2 pt-3 pb-8 bg-grey-light rounded-[2.5rem] md:px-6 lg:pt-8 lg:px-8">
          <div className="relative mb-5">
            <Picture
              className="rounded-3xl overflow-hidden h-[12rem] lg:h-[15.625rem]"
              DEFAULT={image.src}
              alt={image.alt}
            />
            <a
              href="#documents"
              className="absolute bottom-2 right-2 grid w-12 rounded-full aspect-square bg-accent place-content-center xs:w-14 lg:w-20"
            >
              <Picture
                className="w-8 aspect-square md:w-8 lg:w-12"
                DEFAULT={"/icons/file.svg"}
                alt="File icon"
              />
            </a>
          </div>

          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:gap-8">
            <p className="px-2 lg:px-0 lg:text-lg">{content}</p>

            <Button
              className="flex-shrink-0 mx-auto"
              as="link"
              href="#contacts"
            >
              {t("components:button")}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
