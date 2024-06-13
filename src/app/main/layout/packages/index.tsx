import { useState } from "react"
import {  Popup } from "@/components/ui"
import { PopupContent } from "./popup-content"
import { useTranslation } from "react-i18next"
import { Card } from "./card"

export const Packages = () => {
  const { t } = useTranslation(["main", "components"])

  const data = [
    {
      id: 1,
      title: `${t("main:packages.cards.1.title.1")}
    ${t("main:packages.cards.1.title.2")}`,
      badges: {
        blood: true,
        report: true,
      },
      content: (
        <>
          {t("main:packages.cards.1.content.1")} <br />
          <ul>
            <li>{t("main:packages.cards.1.content.list.1")}</li>
            <li>{t("main:packages.cards.1.content.list.2")}</li>
            <li>{t("main:packages.cards.1.content.list.3")}</li>
          </ul>
        </>
      ),
      oldprice: "2200",
      currentPrice: "1099",
    },
    {
      id: 2,
      title: `${t("main:packages.cards.2.title.1")}
      ${t("main:packages.cards.2.title.2")}`,
      badges: {
        blood: true,
        report: true,
      },
      content: (
        <>
          {t("main:packages.cards.2.content.1")} <br />
          {t("main:packages.cards.2.content.2")}
        </>
      ),
      oldprice: "4600",
      currentPrice: "2300",
    },
    {
      id: 3,
      title: `${t("main:packages.cards.3.title.1")}
      ${t("main:packages.cards.3.title.2")}`,
      badges: {
        blood: true,
        report: true,
      },
      content: (
        <>
          {t("main:packages.cards.3.content.1")}
          <br />
          <ul>
            <li>{t("main:packages.cards.3.content.list.1")}</li>
            <li>{t("main:packages.cards.3.content.list.2")}</li>
            <li>{t("main:packages.cards.3.content.list.3")}</li>
            <li>{t("main:packages.cards.3.content.list.4")}</li>
          </ul>
        </>
      ),
      oldprice: "6000",
      currentPrice: "3000",
    },
    {
      id: 4,
      title: `${t("main:packages.cards.4.title.1")}
      ${t("main:packages.cards.4.title.2")}`,
      badges: {
        blood: true,
        report: true,
      },
      content: (
        <>
          {t("main:packages.cards.4.content.1")} <br />
          {t("main:packages.cards.4.content.2")} <br />
          <ul>
            <li>{t("main:packages.cards.4.content.list.1")}</li>
            <li>{t("main:packages.cards.4.content.list.2")}</li>
            <li>{t("main:packages.cards.4.content.list.3")}</li>
          </ul>
        </>
      ),
      oldprice: "7300",
      currentPrice: "3650",
    },
    {
      id: 5,
      title: `${t("main:packages.cards.5.title.1")}
      ${t("main:packages.cards.5.title.2")}`,
      badges: {
        blood: true,
        report: true,
      },
      content: (
        <>
          {t("main:packages.cards.5.content.1")} <br />
          {t("main:packages.cards.5.content.2")} <br />
          <ul>
            <li>{t("main:packages.cards.5.content.list.1")}</li>
            <li>{t("main:packages.cards.5.content.list.2")}</li>
            <li>{t("main:packages.cards.5.content.list.3")}</li>
            <li>{t("main:packages.cards.5.content.list.4")}</li>
          </ul>
        </>
      ),
      oldprice: "11000",
      currentPrice: "5500",
    },
    {
      id: 6,
      title: `${t("main:packages.cards.6.title")}`,
      subtitle: t("main:packages.cards.6.subtitle"),
      badges: {
        blood: true,
        report: true,
      },
      content: <>{t("main:packages.cards.6.content")}</>,
      oldprice: null,
      currentPrice: "FREE",
    },
  ]

  const genderDetectionItem = {
    id: 7,
    title: `${t("main:packages.gender-detection.title.1")}
    ${t("main:packages.gender-detection.title.2")}
    `,
    badges: {
      blood: true,
      report: true,
    },
    content: (
      <>
        {t("main:packages.gender-detection.content.1")} <br />
        {t("main:packages.gender-detection.content.2")} <br />
        {t("main:packages.gender-detection.content.3")}
      </>
    ),
    oldprice: "3000",
    currentPrice: "1500",
  }

  const [popup, setPopup] = useState<(typeof data)[number]["id"] | null>(null)

  return (
    <section className="section bg-grey-light">
      <div className="container md:px-[4.5rem] lg:px-[2rem]">
        <h2 className="section-title">
          {t("main:packages.title.1")}
          <sup className="">TM</sup> {t("main:packages.title.2")}
        </h2>

        <ul className="grid grid-cols-1 justify-items-center gap-y-8 gap-x-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-4">
          {data.map((item) => (
            <Card tag="li" item={item} setPopup={setPopup} key={item.id} />
          ))}
        </ul>

        <h2 className="section-title mt-20">
          {t("main:packages.second-title")}
        </h2>

        <div className="grid place-content-center">
          <Card
            tag="div"
            item={genderDetectionItem}
            setPopup={setPopup}
            actions={false}
          />
        </div>
      </div>

      {popup && (
        <Popup hide={() => setPopup(null)}>
          <PopupContent id={popup} hide={() => setPopup(null)} />
        </Popup>
      )}
    </section>
  )
}
