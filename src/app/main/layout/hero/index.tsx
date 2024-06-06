import s from "./styles.module.scss"

import { Button, Picture } from "@/components/ui"
import { cn } from "@/lib/helpers/cn"

export const Hero = () => {
  return (
    <section className="pt-3 pb-10 xl:pt-5 bg-[linear-gradient(180deg,#FEFCE9_0%,#FFFFFF_92.01%)]">
      <div className="px-2 max-w-[68.75rem] mx-auto">
        <div className="aspect-[3/2] w-full mb-4 max-h-[25rem] relative">
          <Picture
            className={cn(s["image"], s["first"])}
            DEFAULT="assets/images/hero/hero-prenatal.jpg"
            webp
            alt="Happy mother with children"
          />
          <Picture
            className={cn(s["image"], s["second"])}
            DEFAULT="assets/images/hero/hero-onco.jpg"
            webp
            alt="Happy woman"
          />
        </div>

        <div className="relative h-12 lg:h-16 xl:h-20 xl:mb-6">
          <h1 className={cn(s["title"], s["first"])}>Prenatal Screening</h1>
          <h1 className={cn(s["title"], s["second"])}>Oncology Testing</h1>
        </div>
        <p className="mb-4 text-xl leading-tight text-center lg:text-2xl-lg lg:mb-6 xl:text-3xl xl:mb-10">
          At the Forefront of Disease Detection
        </p>
        <Button className="mx-auto" as="link" href="#contacts">
          Book Now
        </Button>
      </div>
    </section>
  )
}
