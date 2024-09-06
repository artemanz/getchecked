import { Banner } from "@/components"
import { Picture } from "@/components/ui"
import { useTranslation } from "react-i18next"

export const Cta = () => {
  const { t } = useTranslation()

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
              {t("prenatal:cta.title.1")}
              <br />
              {t("prenatal:cta.title.2")}
            </>
          }
          subtitle={
            <p className="max-w-[15rem] md:max-w-[17.5rem] lg:max-w-[28rem]">
              {t("prenatal:cta.subtitle.text")}{" "}
              <b>{t("prenatal:cta.subtitle.bold")}</b>
            </p>
          }
          buttonHref="#contacts"
        />
      </div>
    </section>
  )
}
