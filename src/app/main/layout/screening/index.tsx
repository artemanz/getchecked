import { Picture } from "@/components/ui"

import decor1 from "@/assets/images/screening/screening-banner-decor-1.png"
import decor2 from "@/assets/images/screening/screening-banner-decor-2.png"
import decor3 from "@/assets/images/screening/screening-banner-decor-3.png"
import { Banner } from "@/components"
import { useTranslation } from "react-i18next"

export const Screeining = () => {
  const { t } = useTranslation("main")

  return (
    <section className="py-20 section">
      <div className="container">
        <Banner
          picture={
            <div className="absolute bottom-0 -right-4 flex flex-col items-end gap-2 md:right-2 lg:gap-0">
              <div className="order-1 lg:pr-[6rem] lg:mb-[-2rem]">
                <Picture
                  className="w-16 aspect-square md:w-24 lg:w-[11rem]"
                  DEFAULT={decor1}
                  alt="decorative image"
                />
              </div>
              <div className="order-2 pr-12 md:pr-[8rem] lg:pr-[14rem] lg:mb-[-7rem]">
                <Picture
                  className="w-16 aspect-square md:w-24 lg:w-[11rem]"
                  DEFAULT={decor2}
                  alt="decorative image"
                />
              </div>
              <div className="pr-8 md:pr-[6rem] lg:mt-[-2rem] lg:order-3 lg:pr-2">
                <Picture
                  className="w-16 aspect-square md:w-24 lg:w-[11rem]"
                  DEFAULT={decor3}
                  alt="decorative image"
                />
              </div>
            </div>
          }
          title={
            <>
              {t("screening.banner.title.1")}
              <br />
              {t("screening.banner.title.2")}
            </>
          }
          subtitle={
            <>
              {t("screening.banner.subtitle.text")}{" "}
              <b>{t("screening.banner.subtitle.bold")}</b>
            </>
          }
          buttonHref="#contacts"
        />
      </div>
    </section>
  )
}
