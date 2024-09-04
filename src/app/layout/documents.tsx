import { Button, Picture, Popup } from "@/components/ui"
import { useState } from "react"
import { Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import { useTranslation } from "react-i18next"

type Props = {
  page: "oncology" | "prenatal"
}

export const Documents = ({ page }: Props) => {
  const { t } = useTranslation("common")
  const [popup, setPopup] = useState<`sample-${number}` | null>(null)

  const slides: {
    img: string
    sample: `sample-${number}`
  }[] = []

  if (page === "oncology") {
    //
  } else {
    slides.push(
      { img: "/samples/prenatal/sample-1.png", sample: "sample-1" },
      { img: "/samples/prenatal/sample-2.png", sample: "sample-2" },
      { img: "/samples/prenatal/sample-3.png", sample: "sample-3" },
      { img: "/samples/prenatal/sample-4.png", sample: "sample-4" },
    )
  }

  if (!slides.length) return null

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
              className="relative grid h-auto w-full bg-white p-8 md:p-16"
            >
              <Picture DEFAULT={slide.img} alt="Document" />

              <button
                onClick={() => setPopup(slide.sample)}
                className="absolute right-4 top-4 grid aspect-square w-12 place-content-center rounded-full bg-accent"
              >
                <Picture
                  className="aspect-square w-8"
                  DEFAULT={"/icons/file.svg"}
                  alt="File icon"
                />
              </button>
            </SwiperSlide>
          ))}
        </Swiper>

        <div
          className="flex h-8 justify-center gap-3"
          data-selector="slider-pagination"
        ></div>

        {popup && (
          <Popup hide={() => setPopup(null)}>
            <object
              className="h-full w-full"
              // type="application/pdf"
              data={`/samples/${page}/${popup}.pdf`}
            >
              <div className="grid h-full w-full place-content-center rounded-xl bg-white p-6">
                <p className="mb-4 text-center">
                  Your browser does not support PDF files. Try to download it.
                </p>
                <Button
                  className="mx-auto"
                  as="link"
                  href={`/samples/${page}/${popup}.pdf`}
                >
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
