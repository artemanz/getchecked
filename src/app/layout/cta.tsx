import { Banner } from "@/components"
import { Picture } from "@/components/ui"
import { useTranslation } from "react-i18next"

type Props = {
  page: "oncology" | "prenatal"
}

export const Cta = ({ page }: Props) => {
  const { t } = useTranslation(page)

  if (page === "oncology")
    return (
      <section className="section">
        <div className="container">
          <Banner
            picture={
              <Picture
                className="absolute hidden aspect-square rounded-full outline outline-[.5rem] outline-yellow-200/50 md:bottom-8 md:right-8 md:block md:w-[15rem] lg:bottom-0 lg:right-20 lg:w-[18.5rem] lg:outline-[2.5rem]"
                DEFAULT={"/images/oncology/cta-image.png"}
                alt="man looking on sunrise"
              />
            }
            title={
              <>
                {t("cta.title.1")}
                <br />
                {t("cta.title.2")}
              </>
            }
            subtitle={
              <p className="md:max-w-[17.5rem] lg:max-w-[28rem]">
                <b>{t("cta.subtitle.1")}</b> {t("cta.subtitle.2")}{" "}
                <b>{t("cta.subtitle.3")}</b>
              </p>
            }
            buttonHref="#contacts"
          />
        </div>
      </section>
    )
  else
    return (
      <section className="section">
        <div className="container">
          <Banner
            picture={
              <div className="absolute -right-4 bottom-0 flex flex-col items-end gap-2 md:right-2 lg:gap-0">
                <div className="order-1 lg:mb-[-2rem] lg:pr-[6rem]">
                  <Picture
                    className="aspect-square w-16 md:w-24 lg:w-[11rem]"
                    DEFAULT={"/images/prenatal/cta-decor-1.png"}
                    alt="decorative image"
                  />
                </div>
                <div className="order-2 pr-12 md:pr-[8rem] lg:mb-[-7rem] lg:pr-[14rem]">
                  <Picture
                    className="aspect-square w-16 md:w-24 lg:w-[11rem]"
                    DEFAULT={"/images/prenatal/cta-decor-2.png"}
                    alt="decorative image"
                  />
                </div>
                <div className="pr-8 md:pr-[6rem] lg:order-3 lg:mt-[-2rem] lg:pr-2">
                  <Picture
                    className="aspect-square w-16 md:w-24 lg:w-[11rem]"
                    DEFAULT={"/images/prenatal/cta-decor-3.png"}
                    alt="decorative image"
                  />
                </div>
              </div>
            }
            title={
              <>
                {t("cta.title.1")}
                <br />
                {t("cta.title.2")}
              </>
            }
            subtitle={
              <p className="max-w-[15rem] md:max-w-[17.5rem] lg:max-w-[28rem]">
                {t("cta.subtitle.text")} <b>{t("cta.subtitle.bold")}</b>
              </p>
            }
            buttonHref="#contacts"
          />
        </div>
      </section>
    )
}
