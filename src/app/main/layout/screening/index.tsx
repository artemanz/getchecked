import { Button, Picture } from "@/components/ui"

export const Screeining = () => {
  return (
    <section className="py-20 section">
      <div className="container">
        <div className="relative px-4 pt-6 pb-20 overflow-hidden rounded-3xl bg-accent-light md:pb-6 lg:p-8">
          <Picture
            className="absolute w-80 -right-24 -bottom-24 md:w-[22rem] md:-right-16 md:-bottom-20 lg:right-20 lg:-bottom-6"
            DEFAULT="assets/images/screening/screening.png"
            webp
            alt="baby screening"
          />

          <div className="relative">
            <p className="mb-2 text-lg font-bold md:text-xl lg:text-2xl lg:mb-4">
              Discover The Difference <br />
              With UNITY Complete
            </p>

            <p className="mb-4 md:mb-12 lg:text-lg">
              Unity Complete NIPT <br className="lg:hidden" />+ Carrier Screen{" "}
              <b>3650 AED</b>
            </p>

            <Button as="link" href="#contacts">
              Book Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
