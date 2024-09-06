import { Animations } from "@/lib/types"
import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"

const CursiveLine = () => (
  <svg
    width="226"
    height="8"
    viewBox="0 0 226 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full"
  >
    <path
      d="M1 6L15.5741 2.33289C16.445 2.11376 17.3539 2.09291 18.2339 2.27188L35.3203 5.74675C36.1414 5.91373 36.9883 5.9069 37.8065 5.72669L53.4632 2.27852C54.2968 2.09495 55.1598 2.09132 55.9949 2.26787L72.352 5.72621C73.2051 5.90657 74.0872 5.89883 74.937 5.70355L89.7088 2.30883C90.5931 2.10559 91.5121 2.10559 92.3964 2.30883L106.974 5.65885C107.948 5.88273 108.963 5.85967 109.926 5.59177L121.369 2.40823C122.332 2.14033 123.347 2.11727 124.321 2.34115L139.019 5.71886C139.826 5.90428 140.662 5.92072 141.476 5.76715L160.134 2.24489C160.989 2.08356 161.869 2.10995 162.712 2.32223L175.951 5.6545C176.854 5.88172 177.797 5.89577 178.706 5.69556L193.982 2.33116C194.969 2.11391 195.994 2.14922 196.963 2.43381L207.539 5.53923C208.566 5.84091 209.656 5.86218 210.694 5.60083L225 2"
      stroke="#FFE629"
      strokeWidth="3"
    />
  </svg>
)

export const Video = () => {
  const { t } = useTranslation()

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
              {t(`prenatal:video.title.1`)}{" "}
              <motion.div
                {...animations.cursiveLine()}
                className="absolute inset-x-0 -bottom-1 right-1 max-w-full"
              >
                <CursiveLine />
              </motion.div>
            </span>{" "}
            {t(`prenatal:video.title.2`)} <br />
            <span className="relative">
              {t(`prenatal:video.title.3`)}
              <motion.div
                {...animations.backgroundRect()}
                className="absolute -inset-x-1 inset-y-0 z-[-1] bg-accent"
              />
            </span>
          </h2>
        </div>

        <div className="relative aspect-[3/2]">
          <iframe
            className="h-full w-full"
            src="https://player.vimeo.com/video/385153257?h=060a084a73&color=36958e&title=0&byline=0&portrait=0"
            allow="autoplay; fullscreen; picture-in-picture"
            title="video Ultra-sensitive Liquid Biopsy & Precise Monitoring"
          ></iframe>
        </div>
      </div>
    </section>
  )
}
