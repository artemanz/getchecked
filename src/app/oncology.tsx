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

export const Oncology = () => {
  const { t } = useTranslation("oncology")

  return (
    <main>
      <Hero
        page="oncology"
        image={{
          src: "/images/oncology/hero.jpg",
          alt: "short hair woman smiling on sunset",
        }}
      />
      <About
        page="oncology"
        image={{
          src: "/images/oncology/about.jpg",
          alt: "night sky with stars",
        }}
        content={
          <>
            <b>{t("about.card.bold-1")}</b> {t("about.card.and")}{" "}
            <b>{t("about.card.bold-2")}</b> {t("about.card.content")}
          </>
        }
      />
      <Needs
        page="oncology"
        bannerImage={
          <Picture
            className="absolute bottom-12 right-2 aspect-square w-40 rounded-full outline outline-[.5rem] outline-yellow-200/50 md:bottom-8 md:right-8 md:w-[15rem] lg:bottom-0 lg:right-20 lg:w-[18.5rem] lg:outline-[2.5rem]"
            DEFAULT={"/images/oncology/man-looking-on-sunrise.png"}
            alt="man looking on sunrise"
          />
        }
      />
      <Video
        page="oncology"
        videoSrc="https://player.vimeo.com/video/725082500?h=db6ac1ef0c"
      />
      <Works page="common" />
      <Discover page="oncology" />
      <Packages page="oncology" />
      <Cta page="oncology" />
      <Documents page="oncology" />
      {/* <Faq page="oncology" /> */}
      <Contact />
    </main>
  )
}
