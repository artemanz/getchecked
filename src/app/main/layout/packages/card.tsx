import { useTranslation } from "react-i18next"
import { Blood, CardBg, Time } from "./svg"
import { Button } from "@/components/ui"
import { Dispatch, SetStateAction } from "react"
import { cn } from "@/lib/helpers"

type Props = {
  item: {
    id: number
    title: string
    subtitle?: string
    badges: {
      blood: boolean
      report: boolean
    }
    content: React.ReactNode
    oldprice: string | null
    currentPrice: string
  }
  setPopup: Dispatch<SetStateAction<number | null>>
  tag: "div" | "li"
  actions?: boolean
}

export const Card = ({ tag: Tag, item, setPopup, actions }: Props) => {
  const { t } = useTranslation("main")

  return (
    <Tag className="relative w-[19rem] h-[32.125rem] pl-4 pt-4 overflow-hidden">
      <CardBg className="absolute top-0 left-0 w-full h-full" />

      <div className="relative flex flex-col h-full">
        <div className="pr-4">
          <h3 className="h-[3.75rem] mb-4 text-lg font-semibold whitespace-pre-line">
            {item.title}
            {item.subtitle && <span className="text-sm leading-none block">{item.subtitle}</span>}
          </h3>

          <ul className="flex flex-col items-start gap-2">
            <li className="relative border border-[#620C16] rounded-full py-1 pl-10 text-[#620C16] font-medium inline-block pr-4">
              <Blood className="absolute w-10 -left-2 -top-3" />
              {t("main:packages.blood")}
            </li>
            <li className="relative inline-block py-1 pl-10 pr-4 font-medium text-black border border-black rounded-full">
              <Time className="absolute w-10 -top-1 -left-1" />
              {t("main:packages.report")}
            </li>
          </ul>

          <hr className="my-4 border-grey" />

          <p className="font-semibold mb-2">{t("main:packages.includes")}</p>

          <div className="mb-4 leading-[1.05]">{item.content}</div>
        </div>

        {(actions === undefined || actions) && (
          <div className="flex justify-between mb-4 mt-auto pr-4">
            <button
              onClick={() => setPopup(item.id)}
              className="underline underline-offset-4"
            >
              {t("main:packages.find-out")}
            </button>
            <a className="underline underline-offset-4" href="#documents">
              {t("main:packages.sample")}
            </a>
          </div>
        )}

        <div
          className={cn(
            "flex justify-between items-end",
            actions !== undefined && !actions && "mt-auto"
          )}
        >
          <div className="flex flex-col gap-1 pb-2">
            <p className="line-through font-semibold text-sm leading-none min-h-3">
              {item.oldprice}{" "}
              {item.oldprice && <span>{t("main:packages.currency")}</span>}
            </p>
            <p className="text-2xl font-semibold leading-none">
              {item.currentPrice}
              {item.currentPrice.toLowerCase() != "free" && (
                <span className="text-base">{t("main:packages.currency")}</span>
              )}
            </p>
          </div>
          <Button className="w-[9.6875rem]" as="link" href="#contacts">
            {t("components:button")}
          </Button>
        </div>
      </div>
    </Tag>
  )
}
