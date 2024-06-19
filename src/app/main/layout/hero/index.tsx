import s from "./styles.module.scss"
import heroImagePrenatal from "@/assets/images/hero/hero-prenatal.webp"

import { Button, Picture } from "@/components/ui"
import { cn } from "@/lib/helpers/cn"
import { useTranslation } from "react-i18next"

export const Hero = () => {
  const { t, i18n } = useTranslation(["main", "components"])

  return (
    <section className="pt-3 pb-10 xl:pt-5 bg-[linear-gradient(180deg,#FEFCE9_0%,#FFFFFF_92.01%)]">
      <div className="px-2 max-w-[68.75rem] mx-auto">
        <div className="aspect-[3/2] w-full mb-4 max-h-[25rem] relative">
          <Picture
            className={cn(s["image"], s["first"])}
            DEFAULT={heroImagePrenatal}
            alt="Happy mother with child"
          />
          {/* <Picture
            className={cn(s["image"], s["second"])}
            DEFAULT={heroImageOnco}
            alt="Happy woman"
          /> */}
        </div>

        <div className={cn("relative h-12 lg:h-16 xl:h-20 xl:mb-6", i18n.language === "ru" && "h-24 max-w-[20rem] mx-auto md:max-w-none md:h-12")}>
          <h1 className={cn(s["title"], s["first"])}>
            {t("hero.title-prenatal", { ns: "main" })}
          </h1>
          {/* <h1 className={cn(s["title"], s["second"])}>
            {t("hero.title-onco", { ns: "main" })}
          </h1> */}
        </div>
        <p className="mb-4 text-balance text-xl leading-tight text-center lg:text-2xl-lg lg:mb-6 xl:text-3xl xl:mb-10">
          {t("hero.subtitle", { ns: "main" })}
        </p>
        <Button className="mx-auto" as="link" href="#contacts">
          {t("button", { ns: "components" })}
        </Button>
      </div>
    </section>
  )
}
