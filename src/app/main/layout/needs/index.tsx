import { Picture } from "@/components/ui"
import { cn } from "@/lib/helpers/cn"

import dna from "@/assets/images/needs/dna.webp"
import pregnantWoman from "@/assets/images/needs/pregnant-woman.png"

import loading from "@/assets/svg/icons/loading.svg"
import dnaSvg from "@/assets/svg/icons/dna.svg"
import danger from "@/assets/svg/icons/danger.svg"
import { Banner } from "@/components"
import { useTranslation } from "react-i18next"

export const Needs = () => {
  const { t } = useTranslation(["main", "components"])

  const cards = [
    {
      title: t("main:needs.cards.2.title"),
      icon: loading,
    },
    {
      title: t("main:needs.cards.3.title"),
      icon: dnaSvg,
    },
    {
      title: t("main:needs.cards.4.title"),
      icon: danger,
    },
  ]

  const styles = {
    card: "relative px-2 py-3 overflow-hidden aspect-square rounded-2xl md:py-6 md:px-8 md:aspect-[1.35] lg:aspect-[3.5]",
  }

  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">{t("main:needs.title")}</h2>

        <ul className="grid grid-cols-2 gap-2 mb-20">
          <li className={styles.card}>
            <Picture className="absolute inset-0" DEFAULT={dna} alt="Dna" />

            <p className="relative inline-block font-medium lg:text-lg">
              {t("main:needs.cards.1.title.1")}{" "}
              {t("main:needs.cards.1.title.span") && (
                <span className="inline-block p-0.5 rounded-full whitespace-nowrap bg-accent-light">
                  {t("main:needs.cards.1.title.span")}
                </span>
              )}
              {t("main:needs.cards.1.title.2")}
            </p>
          </li>

          {cards.map((card) => (
            <li
              className={cn(
                styles.card,
                "bg-grey-light flex flex-col items-center justify-center gap-3 lg:flex-row lg:justify-start lg:text-lg lg:gap-4"
              )}
              key={card.title}
            >
              <div className="grid p-2 rounded-full place-content-center bg-accent">
                <Picture
                  DEFAULT={card.icon}
                  className="w-6 aspect-square md:w-12"
                  alt="icon"
                />
              </div>

              <p className="text-center lg:text-left">{card.title}</p>
            </li>
          ))}
        </ul>

        <Banner
          picture={
            <>
              <div className="aspect-square w-[23.75rem] rounded-full border-[2.5rem] border-accent opacity-20 absolute left-[-6.75rem] top-[-5rem] md:right-[-2.5rem] md:bottom-[-7rem] md:left-auto md:top-auto lg:right-[6.25rem]" />

              <Picture
                className="aspect-square w-[18.75rem] absolute right-[-7.875rem] bottom-[-2.5rem] md:w-[21.25rem] md:right-[-2.5rem] md:bottom-[-4rem] lg:right-[6.25rem]"
                DEFAULT={pregnantWoman}
                alt="pregnant woman"
              />
            </>
          }
          title={
            <>
              {t("main:needs.banner.title.1")} <br className="md:hidden" />{" "}
              {t("main:needs.banner.title.2")}
            </>
          }
          subtitle={t("main:needs.banner.subtitle")}
          buttonHref="#contacts"
        />
      </div>
    </section>
  )
}
