import { RxCross1, RxHamburgerMenu } from "react-icons/rx"
import { Button, Picture } from "../ui"
import { MobileMenu } from "./mobile-menu"
import { useEffect, useState } from "react"
import { FaFacebook, FaInstagram, FaLinkedin, FaPhone } from "react-icons/fa"
import { SOCIALS } from "@/lib/constants/socials"
import { NAVIGATION } from "@/lib/constants/routes"
import { handlePageScroll } from "@/lib/helpers/handlePageScroll"

export const Header = () => {
  const langs = [
    { title: "Ar", img: "assets/images/flags/ar.png" },
    { title: "En", img: "assets/images/flags/en.png" },
    { title: "Ru", img: "assets/images/flags/ru.png" },
  ]
  const socials = [
    { id: "facebook", href: SOCIALS.facebook, icon: FaFacebook },
    { id: "instagram", href: SOCIALS.instagram, icon: FaInstagram },
    { id: "linkedin", href: SOCIALS.linkedin, icon: FaLinkedin },
  ]

  const [mobileMenu, setMobileMenu] = useState(false)

  useEffect(() => {
    handlePageScroll(!mobileMenu)
  }, [mobileMenu])

  return (
    <header className="relative z-10">
      <div className="flex items-center h-10 pl-4 bg-grey-light">
        <div className="flex justify-between w-full h-full">
          <ul className="flex gap-2">
            {langs.map((lang) => (
              <li
                className="flex items-center gap-1 font-semibold uppercase"
                key={lang.title}
              >
                <Picture className="w-6" DEFAULT={lang.img} webp alt="Ar" />
                {lang.title}
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex justify-end items-center gap-4 bg-[linear-gradient(230deg,#FFE629_70%,#F4F4F3_70%)] w-[45rem] h-full pr-4">
            <a
              className="flex items-center gap-2 text-grey-dark hover:text-accent-dark"
              type="tel"
              href="tel:+971527007915"
            >
              <FaPhone size={14} />
              +971 52 700 7915
            </a>

            <hr className="w-px h-5 bg-grey-dark" />

            <ul className="flex items-center gap-2">
              {socials.map((s) => (
                <li key={s.id}>
                  <a
                    target="_blank"
                    className="grid w-6 h-6 rounded-full bg-grey-dark place-content-center"
                    href={s.href}
                  >
                    <s.icon color="white" size={14} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="relative px-4 py-3">
        <div className="flex items-center justify-between">
          <a href="https://getcheckedclinic.com/">
            <Picture
              className="w-32 xl:w-48"
              DEFAULT="assets/svg/logo.svg"
              alt="Getchecked logo"
            />
          </a>

          <nav className="hidden ml-12 mr-auto lg:flex">
            <ul className="flex gap-8 xl:text-lg">
              {NAVIGATION.map((item) => (
                <li key={item.title}>
                  <a href={item.route}>{item.title}</a>
                </li>
              ))}
            </ul>
          </nav>

          <Button className="hidden lg:block" as="link" href="#contacts">
            Book Now
          </Button>

          <button
            className="lg:hidden"
            onClick={() => setMobileMenu((s) => !s)}
          >
            {mobileMenu ? (
              <RxCross1 size={24} />
            ) : (
              <RxHamburgerMenu size={24} />
            )}
          </button>
        </div>
      </div>

      {mobileMenu && <MobileMenu hide={() => setMobileMenu(false)} />}
    </header>
  )
}
