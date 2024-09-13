import { useTranslation } from "react-i18next"
import { Blood, CardBg, Time } from "./svg"
import { Button } from "@/components/ui"
import { cn } from "@/lib/helpers"
import { CardProps } from "./types"
import { popupContext } from "@/context/popup.context"
import { useContext } from "react"

export const Card = ({ tag: Tag, item, setPopup }: CardProps) => {
  const { t } = useTranslation()
  const { setPopupState } = useContext(popupContext)

  return (
    <Tag className="relative h-[32.2rem] pl-2.5 pt-2.5 overflow-hidden">
      <CardBg className="absolute inset-0" />

      <div className="relative flex flex-col h-full">
        <div className="pr-4">
          <h3 className="h-[3.75rem] mb-4 text-lg font-semibold whitespace-pre-line">
            {item.title}
            {item.subtitle}
          </h3>

          <ul className="flex flex-col items-start gap-2">
            {item.badges.blood && (
              <li
                className={cn(
                  "relative border  rounded-full py-1 pl-10  font-medium inline-block pr-4",
                  {
                    blood: "border-[#620C16] text-[#620C16]",
                    saliva: "border-[#9ABCE3] text-[#9ABCE3]",
                  }[item.analysis],
                )}
              >
                <Blood
                  className={cn(
                    "absolute w-10 -left-2 -top-3",
                    {
                      blood: "text-[#620C16]",
                      saliva: "text-[#9ABCE3]",
                    }[item.analysis],
                  )}
                />
                {item.badges.blood}
              </li>
            )}
            {item.badges.report && (
              <li className="relative inline-block py-1 pl-10 pr-4 font-medium text-black border border-black rounded-full">
                <Time className="absolute w-10 -top-1 -left-1" />
                {item.badges.report}
              </li>
            )}
          </ul>

          <hr className="my-4 border-grey" />

          <div className="mb-4 leading-[1.2]">{item.content}</div>
        </div>

        {item.actions && (
          <div className="flex justify-between mb-4 mt-auto pr-4">
            <button
              onClick={() => setPopup(item.id)}
              className="underline underline-offset-4"
            >
              {t("components:card.find-out")}
            </button>
            <a className="underline underline-offset-4" href="#documents">
              {t("components:card.sample")}
            </a>
          </div>
        )}

        <div
          className={cn(
            "flex justify-between items-end",
            !item.actions && "mt-auto",
          )}
        >
          <div className="flex flex-col gap-1 pb-3">
            <div className="font-semibold text-sm leading-none">
              {item.oldprice}
            </div>
            <div className="font-semibold text-2xl leading-none">
              {item.currentPrice}
            </div>
          </div>
          <Button
            className="mb-1 w-[9.6875rem]"
            as="button"
            onClick={() => setPopupState(true)}
          >
            {t("components:button")}
          </Button>
        </div>
      </div>
    </Tag>
  )
}
