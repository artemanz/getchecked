import { Banner } from "@/components"
import { useTranslation } from "react-i18next"
import { NeedsCard, NeedsCardSpecial } from "./needs-card"

type Props = {
  page: "oncology" | "prenatal"
  bannerImage?: React.ReactNode
}

export const Needs = ({ page, bannerImage }: Props) => {
  const { t } = useTranslation()

  const cards = [
    {
      id: 1,
      title: t(`${page}:needs.cards.2.title`),
      icon: page === "oncology" ? "/icons/target.svg" : "/icons/loading.svg",
    },
    {
      id: 2,
      title: t(`${page}:needs.cards.3.title`),
      icon: page === "oncology" ? "/icons/shield.svg" : "/icons/dna.svg",
    },
    {
      id: 3,
      title: t(`${page}:needs.cards.4.title`),
      icon: page === "oncology" ? "/icons/dna.svg" : "/icons/danger.svg",
    },
  ]

  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">{t("common:needs.title")}</h2>

        <ul className="mb-20 grid auto-rows-fr grid-cols-2 gap-2">
          <NeedsCardSpecial>
            {t(`${page}:needs.cards.1.title.1`)}{" "}
            {t(`${page}:needs.cards.1.title.span`) && (
              <span className="inline-block whitespace-nowrap rounded-full bg-accent-light p-0.5">
                {t(`${page}:needs.cards.1.title.span`)}
              </span>
            )}{" "}
            {t(`${page}:needs.cards.1.title.2`)}
          </NeedsCardSpecial>

          {cards.map((card) => (
            <NeedsCard key={card.id} card={card} />
          ))}
        </ul>

        <Banner
          picture={bannerImage}
          title={<>{t(`${page}:needs.banner.title`)}</>}
          subtitle={
            <p className="max-w-[12rem] md:max-w-[17.5rem] lg:max-w-[28rem]">
              {page === "oncology" ? (
                <>
                  <b>{t(`${page}:needs.banner.subtitle.bold`)}</b>{" "}
                  {t(`${page}:needs.banner.subtitle.text`)}
                </>
              ) : (
                t(`${page}:needs.banner.subtitle`)
              )}
            </p>
          }
          buttonHref="#contacts"
        />
      </div>
    </section>
  )
}
