import { Card } from "@/components"
import { cn } from "@/lib/helpers"
import { Dispatch, SetStateAction } from "react"
import { useTranslation } from "react-i18next"

type Props = {
  className?: string
  page: "oncology" | "prenatal"
  context: string
  data: any
  setPopup: Dispatch<SetStateAction<number | null>>
  columns: number
}

export const CardsGroup = ({
  className,
  page,
  context,
  data,
  setPopup,
  columns,
}: Props) => {
  const { t } = useTranslation(page)

  return (
    <div className={className}>
      <h2 className="section-title">{t(`packages.${context}.title`)}</h2>

      <ul
        className={cn(
          `grid grid-cols-[19rem] justify-center gap-x-4 gap-y-8 md:grid-cols-[repeat(2,19rem)] lg:gap-x-4 ${columns === 1 ? "lg:grid-cols-[19rem]" : `lg:grid-cols-[repeat(${columns},19rem)]`}`,
        )}
      >
        {data.map((item) => (
          <Card key={item.id} tag="li" item={item} setPopup={setPopup} />
        ))}
      </ul>
    </div>
  )
}
