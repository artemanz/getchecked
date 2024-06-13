import { Button, Picture, Popup } from "@/components/ui"
import { useState } from "react"
import { Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

import sample1 from "@/assets/images/samples/sample-1.webp"
import sample2 from "@/assets/images/samples/sample-2.webp"
import sample3 from "@/assets/images/samples/sample-3.webp"
import sample4 from "@/assets/images/samples/sample-4.webp"

import file from "@/assets/svg/icons/file.svg"
import { useTranslation } from "react-i18next"

export const Documents = () => {
  const { t } = useTranslation("main")
  const [popup, setPopup] = useState<`sample-${number}` | null>(null)

  const slides: {
    img: string
    sample: `sample-${number}`
  }[] = [
    { img: sample1, sample: "sample-1" },
    { img: sample2, sample: "sample-2" },
    { img: sample3, sample: "sample-3" },
    { img: sample4, sample: "sample-4" },
  ]

  return (
    <section className="section bg-grey-light" id="documents">
      <div className="container">
        <h2 className="section-title">{t("documents.title")}</h2>

        <Swiper
          className="mb-4 max-w-[25rem]"
          modules={[Pagination]}
          spaceBetween={20}
          pagination={{
            clickable: true,
            el: "[data-selector=slider-pagination]",
            renderBullet: (_, cl) => `<div class="slider-bullet ${cl}"></div>`,
            bulletActiveClass: "active",
          }}
        >
          {slides.map((slide) => (
            <SwiperSlide
              key={slide.sample}
              className="relative grid w-full h-auto p-8 bg-white md:p-16"
            >
              <Picture DEFAULT={slide.img} alt="Document" />

              <button
                onClick={() => setPopup(slide.sample)}
                className="absolute grid w-12 rounded-full top-4 right-4 aspect-square bg-accent place-content-center"
              >
                <Picture
                  className="w-8 aspect-square"
                  DEFAULT={file}
                  alt="File icon"
                />
              </button>
            </SwiperSlide>
          ))}
        </Swiper>

        <div
          className="flex justify-center h-8 gap-3"
          data-selector="slider-pagination"
        ></div>

        {popup && (
          <Popup hide={() => setPopup(null)}>
            <object
              className="w-full h-full"
              // type="application/pdf"
              data={`/${popup}.pdf`}
            >
              <div className="grid w-full h-full p-6 bg-white rounded-xl place-content-center">
                <p className="mb-4 text-center">
                  Your browser does not support PDF files. Try to download it.
                </p>
                <Button className="mx-auto" as="link" href={`/${popup}.pdf`}>
                  Download
                </Button>
              </div>
            </object>
          </Popup>
        )}
      </div>
    </section>
  )
}
