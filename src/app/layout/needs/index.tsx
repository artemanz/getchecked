import { Banner } from "@/components"
import { useTranslation } from "react-i18next"
import { NeedsCard, NeedsCardSpecial } from "./needs-card"
import { Picture } from "@/components/ui"

export const Needs = () => {
  const { t } = useTranslation()

  const cards = [
    {
      id: 1,
      title: t(`prenatal:needs.cards.2.title`),
      icon: "/icons/loading.svg",
    },
    {
      id: 2,
      title: t(`prenatal:needs.cards.3.title`),
      icon: "/icons/dna.svg",
    },
    {
      id: 3,
      title: t(`prenatal:needs.cards.4.title`),
      icon: "/icons/danger.svg",
    },
  ]

  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">{t("common:needs.title")}</h2>

        <ul className="mb-20 grid auto-rows-fr grid-cols-2 gap-2">
          <NeedsCardSpecial>
            {t(`prenatal:needs.cards.1.title.1`)}{" "}
            {t(`prenatal:needs.cards.1.title.span`) && (
              <span className="inline-block whitespace-nowrap rounded-full bg-accent-light p-0.5">
                {t(`prenatal:needs.cards.1.title.span`)}
              </span>
            )}{" "}
            {t(`prenatal:needs.cards.1.title.2`)}
          </NeedsCardSpecial>

          {cards.map((card) => (
            <NeedsCard key={card.id} card={card} />
          ))}
        </ul>

        <Banner
          picture={
            <Picture
              className="absolute -right-4 bottom-0 aspect-square w-48 rounded-full outline outline-[1rem] outline-yellow-200/50 md:right-8 md:w-[15rem] md:outline md:outline-[2.5rem] lg:right-20 lg:w-[18.5rem]"
              DEFAULT={"/images/prenatal/pregnant-woman.png"}
              alt="pregnant woman"
            />
          }
          title={<>{t(`prenatal:needs.banner.title`)}</>}
          subtitle={
            <p className="max-w-[12rem] md:max-w-[17.5rem] lg:max-w-[28rem]">
              {t(`prenatal:needs.banner.subtitle`)}
            </p>
          }
          buttonHref="#contacts"
        />
      </div>
    </section>
  )
}
