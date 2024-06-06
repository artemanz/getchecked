import { useState } from "react"
import { Location, Report, Sample } from "./svg"
import { cn } from "@/lib/helpers"
import { Button } from "@/components/ui"

export const Works = () => {
  const tabs = [
    {
      id: 1,
      text: "Submit Sample",
      icon: Sample,
      content: {
        title: "Submit Sample",
        text: "Book In-Clinic or At Home\nEffortlessly submit your sample: A simple, quick blood draw as early as 10 weeks is all it takes.",
      },
    },
    {
      id: 2,
      text: "USA Located Laboratory",
      icon: Location,
      content: {
        title: "USA Located Laboratory",
        text: "Your sample is sent to one of our exclusive partner laboratories in the USA, ensuring top-notch accuracy and reliability.",
      },
    },
    {
      id: 3,
      text: "Report ",
      icon: Report,
      content: {
        title: "Report",
        text: "Within 5-10 days, you will receive a detailed genetic report and have the opportunity to schedule a free consultation to determine next steps.",
      },
    },
  ]
  const [currentTab, setCurrentTab] = useState<number>(tabs[0].id)

  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">How It Works</h2>

        <ul className="flex justify-between h-12 p-0.5 border rounded-full border-accent/50 mb-2">
          {tabs.map((tab) => (
            <li
              onClick={() => setCurrentTab(tab.id)}
              className={cn(
                "grid rounded-full bg-accent aspect-square place-content-center opacity-50 cursor-pointer transition-opacity relative",
                tab.id === currentTab &&
                  "opacity-100 before:absolute before:inset-0  before:bg-accent before:z-[-1] before:rounded-full before:opacity-75 before:animate-ping before:[animation-duration:1.5s]"
              )}
              key={tab.text}
            >
              <tab.icon />
            </li>
          ))}
        </ul>

        <ul className="flex justify-between mb-6 lg:mb-8">
          {tabs.map((tab) => (
            <li
              onClick={() => setCurrentTab(tab.id)}
              className={cn(
                "opacity-50 cursor-pointer first:max-w-16 [&:nth-child(2)]:max-w-36 [&:nth-child(2)]:text-center lg:first:max-w-none lg:[&:nth-child(2)]:max-w-none lg:[&:nth-child(2)]:mr-12 lg:text-lg",
                tab.id === currentTab && "opacity-100 font-semibold"
              )}
              key={tab.text}
            >
              {tab.text}
            </li>
          ))}
        </ul>

        <div className="overflow-hidden">
          <ul
            style={{ transform: `translateX(-${(currentTab - 1) * 100}%)` }}
            className="flex [&>*]:flex-[1_0_100%] transition-transform"
          >
            {tabs.map((tab) => (
              <li className="flex flex-col text-center lg:text-lg" key={tab.id}>
                <p className="mb-2 font-semibold">{tab.content.title}</p>
                <p className="mb-3 whitespace-pre-line md:mb-6 md:max-w-[25rem] md:mx-auto lg:mb-8 lg:max-w-[32rem]">
                  {tab.content.text}
                </p>
                <Button className="mx-auto mt-auto" as="link" href="#contacts">
                  Book Now
                </Button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
