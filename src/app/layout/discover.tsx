import { Button, Picture } from "@/components/ui"
import { useTranslation } from "react-i18next"

export const Discover = () => {
  const { t } = useTranslation()

  const cards = [
    {
      id: 1,
      title: "3x",
      text: (
        <>
          {t(`prenatal:discover.cards.1.text.1`)}{" "}
          <b>{t(`prenatal:discover.cards.1.text.bold`)}</b>{" "}
          {t(`prenatal:discover.cards.1.text.2`)}
        </>
      ),
      icon: "/icons/baby.svg",
    },
    {
      id: 2,
      title: "~58%",
      text: (
        <>
          {t(`prenatal:discover.cards.2.text.1`)}{" "}
          <b>{t(`prenatal:discover.cards.2.text.bold`)}</b>{" "}
          {t(`prenatal:discover.cards.2.text.2`)}
        </>
      ),
      icon: "/icons/sex.svg",
    },
    {
      id: 3,
      title: "~99%",
      text: (
        <>
          {t(`prenatal:discover.cards.3.text.1`)}{" "}
          <b>{t(`prenatal:discover.cards.3.text.bold`)}</b>{" "}
          {t(`prenatal:discover.cards.3.text.2`)}
        </>
      ),
      icon: "/icons/sprout.svg",
    },
    {
      id: 4,
      title: "96.0%",
      text: (
        <>
          {t(`prenatal:discover.cards.4.text.1`)}{" "}
          <b>{t(`prenatal:discover.cards.4.text.bold`)}</b>{" "}
          {t(`prenatal:discover.cards.4.text.2`)}
        </>
      ),
      icon: "/icons/pie-chart.svg",
    },
    {
      id: 5,
      title: "99.8%",
      text: (
        <>
          {t(`prenatal:discover.cards.5.text.1`)}{" "}
          <b>{t(`prenatal:discover.cards.5.text.bold`)}</b>{" "}
          {t(`prenatal:discover.cards.5.text.2`)}
        </>
      ),
      icon: "/icons/shield-close.svg",
    },
  ]

  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">{t("common:discover.title")}</h2>

        <ul className="mb-8 grid auto-rows-fr grid-cols-1 gap-4 md:grid-cols-2">
          {cards.map((card) => (
            <li
              className="group relative flex items-center overflow-hidden rounded-2xl bg-accent-light p-3"
              key={card.id}
            >
              {card.icon && (
                <Picture
                  className="absolute -bottom-4 aspect-square w-[6.25rem] group-odd:-right-4 group-even:-left-4 lg:w-32"
                  DEFAULT={card.icon}
                  alt="icon"
                />
              )}
              <div className="relative flex items-center gap-4">
                <p className="flex-shrink-0 basis-12 whitespace-nowrap text-center font-bold lg:basis-20 lg:text-xl">
                  {card.title}
                </p>
                <p className="text-sm lg:text-lg">{card.text}</p>
              </div>
            </li>
          ))}
        </ul>

        <Button className="mx-auto" as="link" href="#contacts">
          {t("components:button")}
        </Button>
      </div>
    </section>
  )
}
