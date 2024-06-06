import { Button, Picture } from "@/components/ui"
import aboutImage_sm from "@/assets/images/about/about-image@sm.webp"
import aboutImage_md from "@/assets/images/about/about-image@md.webp"
import aboutImage_lg from "@/assets/images/about/about-image@lg.webp"
import file from "@/assets/svg/icons/file.svg"

export const About = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">About</h2>

        <div className="px-2 pt-3 pb-8 bg-grey-light rounded-[2.5rem] md:px-6 lg:pt-8 lg:px-8">
          <div className="relative mb-5">
            <Picture
              DEFAULT={aboutImage_sm}
              tablet={aboutImage_md}
              desktop={aboutImage_lg}
              alt="baby with mother"
            />
            <a
              href="#documents"
              className="absolute bottom-0 right-0 grid w-12 rounded-full aspect-square bg-accent place-content-center md:right-2 lg:w-20 lg:right-5 lg:-bottom-1"
            >
              <Picture
                className="w-8 aspect-square md:w-8 lg:w-12"
                DEFAULT={file}
                alt="File icon"
              />
            </a>
          </div>

          <p className="mb-3 text-xl font-semibold text-center lg:hidden">
            Prenatal Screening
          </p>

          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:gap-8">
            <p className="px-2 lg:px-0 lg:text-lg">
              UNITY Screen™ includes a carrier screen as well as a single-gene
              (for recessive conditions) and aneuploidy{" "}
              <b>Non-Invasive Prenatal Test (NIPT)</b> and only requires a
              maternal blood draw at 10+ weeks to assess fetal risk. No paternal
              sample needed.
            </p>

            <Button
              className="flex-shrink-0 mx-auto"
              as="link"
              href="#contacts"
            >
              Book Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
