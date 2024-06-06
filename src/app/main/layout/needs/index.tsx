import { Button, Picture } from "@/components/ui"
import { cn } from "@/lib/helpers/cn"

import dna from "@/assets/images/needs/dna.webp"
import pregnantWoman from "@/assets/images/needs/pregnant-woman.png"

import loading from "@/assets/svg/icons/loading.svg"
import dnaSvg from "@/assets/svg/icons/dna.svg"
import danger from "@/assets/svg/icons/danger.svg"

export const Needs = () => {
  const cards = [
    {
      title: "Expecting parents",
      icon: loading,
    },
    {
      title: "Families with a history of genetic disorders",
      icon: dnaSvg,
    },
    {
      title: "Pregnant woman at risk for alloimmunization",
      icon: danger,
    },
  ]

  const styles = {
    card: "relative px-2 py-3 overflow-hidden aspect-square rounded-2xl md:py-6 md:px-8 md:aspect-[1.35] lg:aspect-[3.5]",
  }

  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">Who Needs This</h2>

        <ul className="grid grid-cols-2 gap-2 mb-20">
          <li className={styles.card}>
            <Picture className="absolute inset-0" DEFAULT={dna} alt="Dna" />

            <p className="relative inline-block font-medium lg:text-lg">
              Designed for a
              <span className="block p-0.5 rounded-full whitespace-nowrap bg-accent-light">
                general obstetric
              </span>
              population
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

        <div className="relative px-4 pt-5 pb-8 overflow-hidden rounded-3xl bg-accent-light md:p-8">
          <div className="relative z-[1]">
            <p className="mb-2 text-xl font-semibold md:text-2xl md:mb-8">
              Know More. <br className="md:hidden" /> Know Early.
            </p>
            <p className="mb-14 max-w-[15rem] md:mb-20 md:max-w-[17.5rem] lg:text-lg lg:max-w-[22rem]">
              One blood sample from mom. Direct genetic insights about your baby
            </p>
            <Button as="link" href="#contacts">
              Book Now
            </Button>
          </div>
          <div className="aspect-square w-[23.75rem] rounded-full border-[2.5rem] border-accent opacity-20 absolute left-[-6.75rem] top-[-5rem] md:right-[-2.5rem] md:bottom-[-7rem] md:left-auto md:top-auto lg:right-[6.25rem]" />

          <Picture
            className="aspect-square w-[18.75rem] absolute right-[-7.875rem] bottom-[-2.5rem] md:w-[21.25rem] md:right-[-2.5rem] md:bottom-[-4rem] lg:right-[6.25rem]"
            DEFAULT={pregnantWoman}
            alt="pregnant woman"
          />
        </div>
      </div>
    </section>
  )
}
