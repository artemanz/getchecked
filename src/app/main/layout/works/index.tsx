import { useState } from "react"
import { Location, Report, Sample, Time } from "./svg"
import { cn } from "@/lib/helpers"
import { Button } from "@/components/ui"
import { useTranslation } from "react-i18next"

export const Works = () => {
  const { t } = useTranslation(["main", "components"])

  const tabs = [
    {
      id: 1,
      content: {
        title: t("main:works.cards.1.content.title"),
        text: t("main:works.cards.1.content.text"),
      },
    },
    {
      id: 2,
      content: {
        title: t("main:works.cards.2.content.title"),
        text: t("main:works.cards.2.content.text"),
      },
    },
    {
      id: 3,
      content: {
        title: t("main:works.cards.3.content.title"),
        text: t("main:works.cards.3.content.text"),
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
        <h2 className="section-title">{t("main:works.title")}</h2>
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
              {t("main:works.cards.1.tab.time") && (
                <div className={cn(classNames.tabLabelHeader, "")}>
                  <Time />
                  {t("main:works.cards.1.tab.time")}
                </div>
              )}
              <p className="font-semibold lg:text-lg">
                {t("main:works.cards.1.tab.title")}
              </p>
            </li>
            <li
              onClick={() => setCurrentTab(2)}
              className={cn(
                classNames.tabLabel,
                currentTab === 2 && "opacity-100"
              )}
            >
              {t("main:works.cards.2.tab.time") && (
                <div
                  className={cn(
                    classNames.tabLabelHeader,
                    "md:justify-center md:mr-8"
                  )}
                >
                  <Time />
                  {t("main:works.cards.2.tab.time")}
                </div>
              )}
              <p className="font-semibold lg:text-lg md:text-center">
                {t("main:works.cards.2.tab.title")}
              </p>
            </li>
            <li
              onClick={() => setCurrentTab(3)}
              className={cn(
                classNames.tabLabel,
                currentTab === 3 && "opacity-100"
              )}
            >
              {t("main:works.cards.3.tab.time") && (
                <div
                  className={cn(classNames.tabLabelHeader, "md:justify-end")}
                >
                  <Time />
                  {t("main:works.cards.3.tab.time")}
                </div>
              )}
              <p className="font-semibold lg:text-lg md:text-right">
                {t("main:works.cards.3.tab.title")}
              </p>
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
                  {t("components:button")}
                </Button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
