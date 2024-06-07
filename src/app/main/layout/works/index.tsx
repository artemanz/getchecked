import { useState } from "react"
import { Location, Report, Sample, Time } from "./svg"
import { cn } from "@/lib/helpers"
import { Button } from "@/components/ui"

export const Works = () => {
  const tabs = [
    {
      id: 1,
      content: {
        title: "Submit Sample",
        text: "Book In-Clinic or At Home\nEffortlessly submit your sample: A simple, quick blood draw as early as 10 weeks is all it takes.",
      },
    },
    {
      id: 2,
      content: {
        title: "USA Located Laboratory",
        text: "Your sample is sent to one of our exclusive partner laboratories in the USA, ensuring top-notch accuracy and reliability.",
      },
    },
    {
      id: 3,
      content: {
        title: "Report",
        text: "Within 5-10 days, you will receive a detailed genetic report and have the opportunity to schedule a free consultation to determine next steps.",
      },
    },
  ]
  const [currentTab, setCurrentTab] = useState<number>(tabs[0].id)

  const classNames = {
    tabIcon:
      "grid rounded-full bg-accent aspect-square place-content-center opacity-50 cursor-pointer transition-opacity relative md:w-[2.625rem]",
    "tabIcon-active":
      "opacity-100 before:absolute before:inset-0  before:bg-accent before:z-[-1] before:rounded-full before:opacity-75 before:animate-ping before:[animation-duration:1.5s]",
    tabLabel: "opacity-50 cursor-pointer",
    tabLabelHeader: "flex items-center gap-2",
  }

  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">How It Works</h2>
        <div className="flex gap-4 mb-8 md:flex-col">
          <ul className="flex flex-shrink-0 flex-col justify-between w-12 h-[15rem] p-0.5 border rounded-full border-accent/50 md:flex-row md:h-12 md:w-full">
            <li
              onClick={() => setCurrentTab(1)}
              className={cn(
                classNames.tabIcon,
                currentTab === 1 && classNames["tabIcon-active"]
              )}
            >
              <Sample />
            </li>
            <li
              onClick={() => setCurrentTab(2)}
              className={cn(
                classNames.tabIcon,
                currentTab === 2 && classNames["tabIcon-active"]
              )}
            >
              <Location />
            </li>
            <li
              onClick={() => setCurrentTab(3)}
              className={cn(
                classNames.tabIcon,
                currentTab === 3 && classNames["tabIcon-active"]
              )}
            >
              <Report />
            </li>
          </ul>

          <ul className="flex flex-col justify-between md:flex-row lg:mb-8">
            <li
              onClick={() => setCurrentTab(1)}
              className={cn(
                classNames.tabLabel,
                currentTab === 1 && "opacity-100"
              )}
            >
              <div className={cn(classNames.tabLabelHeader, "")}>
                <Time />
                Same Day
              </div>
              <p className="font-semibold lg:text-lg">Submit Sample</p>
            </li>
            <li
              onClick={() => setCurrentTab(2)}
              className={cn(
                classNames.tabLabel,
                currentTab === 2 && "opacity-100"
              )}
            >
              <div
                className={cn(classNames.tabLabelHeader, "md:justify-center md:mr-8")}
              >
                <Time />
                2-3 Days
              </div>
              <p className="font-semibold lg:text-lg md:text-center">
                USA Located Laboratory
              </p>
            </li>
            <li
              onClick={() => setCurrentTab(3)}
              className={cn(
                classNames.tabLabel,
                currentTab === 3 && "opacity-100"
              )}
            >
              <div className={cn(classNames.tabLabelHeader, "md:justify-end")}>
                <Time />
                5-8 Days
              </div>
              <p className="font-semibold lg:text-lg md:text-right">Report</p>
            </li>
          </ul>
        </div>

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
