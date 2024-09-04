import { Picture } from "@/components/ui"
import {
  About,
  Hero,
  Needs,
  Video,
  Works,
  Discover,
  Packages,
  Cta,
  Documents,
  Faq,
  Contact,
} from "./layout"
import { useTranslation } from "react-i18next"

export const Prenatal = () => {
  const { t } = useTranslation("prenatal")

  return (
    <main>
      <Hero
        page="prenatal"
        image={{
          src: "/images/prenatal/hero.jpg",
          alt: "short hair woman smiling on sunset",
        }}
      />
      <About
        page="prenatal"
        image={{
          src: "/images/prenatal/about.jpg",
          alt: "newborn holding mothers hand",
        }}
        content={
          <>
            {t("about.card.1")} <b>{t("about.card.bold")}</b>{" "}
            {t("about.card.2")}
          </>
        }
      />
      <Needs
        page="prenatal"
        bannerImage={
          <Picture
            className="absolute -right-4 bottom-0 aspect-square w-48 rounded-full outline outline-[1rem] outline-yellow-200/50 md:right-8 md:w-[15rem] md:outline md:outline-[2.5rem] lg:right-20 lg:w-[18.5rem]"
            DEFAULT={"/images/prenatal/pregnant-woman.png"}
            alt="pregnant woman"
          />
        }
      />
      <Video
        page="prenatal"
        videoSrc="https://player.vimeo.com/video/385153257?h=060a084a73&color=36958e&title=0&byline=0&portrait=0"
      />
      <Works page="common" />
      <Discover page="prenatal" />
      <Packages page="prenatal" />
      <Cta page="prenatal" />
      <Documents page="prenatal" />
      <Faq page="prenatal" />
      <Contact />
    </main>
  )
}
