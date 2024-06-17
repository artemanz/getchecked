import { Animations } from "@/lib/types"
import { CursiveLine } from "./svg"
import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"

export const Video = () => {
  const { t } = useTranslation("main")

  const animations: Animations = {
    cursiveLine() {
      return {
        variants: {
          hidden: {
            opacity: 0,
            x: -100,
          },
          visible: { x: 0, opacity: 1 },
        },
        initial: "hidden",
        transition: {
          delay: 0.25,
          bounce: false,
        },
        whileInView: "visible",
        viewport: { once: true },
      }
    },
    backgroundRect() {
      return {
        variants: {
          hidden: {
            opacity: 0,
            x: 100,
          },
          visible: { x: 0, opacity: 1 },
        },
        initial: "hidden",
        transition: {
          delay: 0.5,
          bounce: false,
        },
        whileInView: "visible",
        viewport: { once: true },
      }
    },
  }

  return (
    <section className="section">
      <div className="container">
        <div>
          <h2 className="section-title">
            <span className="relative">
              {t("video.title.1")}{" "}
              <motion.div
                {...animations.cursiveLine()}
                className="absolute inset-x-0 max-w-full -bottom-1 [&>svg]:w-full"
              >
                <CursiveLine />
              </motion.div>
            </span>{" "}
            {t("video.title.2")} <br />{" "}
            <span className="relative">
              {t("video.title.3")}
              <motion.div
                {...animations.backgroundRect()}
                className="absolute -inset-x-1 inset-y-0 bg-accent z-[-1]"
              />
            </span>
          </h2>
        </div>

        <div className="aspect-[3/2] relative">
          <iframe
            className="w-full h-full"
            src="https://player.vimeo.com/video/385153257?h=060a084a73&color=36958e&title=0&byline=0&portrait=0"
            allow="autoplay; fullscreen; picture-in-picture"
            title="video Unity Screen"
          ></iframe>
        </div>
      </div>
    </section>
  )
}
