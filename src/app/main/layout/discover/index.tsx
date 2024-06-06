import { Button, Picture } from "@/components/ui"
import baby from "@/assets/svg/icons/baby.svg"
import sex from "@/assets/svg/icons/sex.svg"
import sprout from "@/assets/svg/icons/sprout.svg"
import pieChart from "@/assets/svg/icons/pie-chart.svg"
import shield from "@/assets/svg/icons/shield-close.svg"

export const Discover = () => {
  const cards = [
    {
      id: 1,
      title: "3x",
      text: (
        <>
          <b>Detects ~3x more affected pregnancies</b> than traditional carrier
          screening
        </>
      ),
      icon: baby,
    },
    {
      id: 2,
      title: "~58%",
      text: (
        <>
          <b>Of male partners do not get tested.</b> UNITY Fetal Risk Screen
          does not need the male partner's sample
        </>
      ),
      icon: sex,
    },
    {
      id: 3,
      title: "~99%",
      text: (
        <>
          <b>Reassure patients early:</b> {">"}99% of pregnancies have a low
          risk of being affected
        </>
      ),
      icon: sprout,
    },
    {
      id: 4,
      title: "96.0%",
      text: (
        <>
          <b>Assay sensitivity: </b> <br /> accurately detect affected
          pregnancies
        </>
      ),
      icon: pieChart,
    },
    {
      id: 5,
      title: "99.8%",
      text: (
        <>
          <b>Negative predictive value (NPV)</b> <br />
          trust in a negative result
        </>
      ),
      icon: shield,
    },
  ]

  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">Discover The Difference</h2>

        <ul className="grid grid-cols-1 gap-4 mb-8 md:grid-cols-2 auto-rows-fr">
          {cards.map((card) => (
            <li
              className="relative flex items-center p-3 overflow-hidden bg-accent-light group rounded-2xl"
              key={card.id}
            >
              <Picture
                className="absolute -bottom-4 group-odd:-right-4 group-even:-left-4 lg:w-32"
                DEFAULT={card.icon}
                alt="icon"
              />
              <div className="relative flex items-center gap-4">
                <p className="flex-shrink-0 font-bold text-center basis-12 lg:text-xl lg:basis-20">
                  {card.title}
                </p>
                <p className="text-sm lg:text-lg">{card.text}</p>
              </div>
            </li>
          ))}
        </ul>

        <Button className="mx-auto" as="link" href="#contacts">
          Book Now
        </Button>
      </div>
    </section>
  )
}
