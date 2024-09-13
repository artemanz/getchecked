import { RxCross1, RxHamburgerMenu } from "react-icons/rx"
import { Button, Picture } from "../ui"
import { MobileMenu } from "./mobile-menu"
import { useContext, useEffect, useState } from "react"
import { FaFacebook, FaInstagram, FaLinkedin, FaPhone } from "react-icons/fa"
import { SOCIALS } from "@/lib/constants/socials"
import { handlePageScroll } from "@/lib/helpers/handlePageScroll"

import { Logo } from "../svg"
import { useTranslation } from "react-i18next"
import { cn } from "@/lib/helpers"
import { useNavigation } from "@/lib/hooks/useNavigation"
import { popupContext } from "@/context/popup.context"

export const Header = () => {
  const { t, i18n } = useTranslation("components")
  const navigation = useNavigation()
  const { setPopupState } = useContext(popupContext)

  const langs = [
    { title: "Ar", img: "/icons/flags/ar.svg", lang: "ar" },
    { title: "En", img: "/icons/flags/en.svg", lang: "en" },
    { title: "Ru", img: "/icons/flags/ru.svg", lang: "ru" },
  ]
  const socials = [
    {
      id: "facebook",
      href: SOCIALS.facebook,
      icon: FaFacebook,
      label: "Go to Getchecked Clinik Facebook Page",
    },
    {
      id: "instagram",
      href: SOCIALS.instagram,
      icon: FaInstagram,
      label: "Go to Getchecked Clinik Instagram Page",
    },
    {
      id: "linkedin",
      href: SOCIALS.linkedin,
      icon: FaLinkedin,
      label: "Go to Getchecked Clinik LinkedIn Page",
    },
  ]

  const [mobileMenu, setMobileMenu] = useState(false)

  useEffect(() => {
    handlePageScroll(!mobileMenu)
  }, [mobileMenu])

  return (
    <header className="relative z-10">
      <div className="flex h-10 items-center bg-grey-light pl-4">
        <div className="flex h-full w-full justify-between">
          <ul className="flex items-center">
            {langs.map((lang) => (
              <li
                className={cn(
                  "flex cursor-pointer items-center gap-1 p-2 font-semibold uppercase hover:bg-accent",
                  i18n.language === lang.lang &&
                    "cursor-default opacity-50 hover:bg-transparent",
                )}
                key={lang.title}
                onClick={() => i18n.changeLanguage(lang.lang)}
              >
                <Picture className="w-6" DEFAULT={lang.img} alt={lang.title} />
                {lang.title}
              </li>
            ))}
          </ul>

          <div className="hidden h-full w-[45rem] items-center justify-end gap-4 bg-[linear-gradient(230deg,#FFE629_70%,#F4F4F3_70%)] pr-4 lg:flex">
            <a
              className="flex items-center gap-2 text-grey-darker hover:text-accent-dark"
              type="tel"
              href="tel:+971527007915"
            >
              <FaPhone size={14} />
              +971 52 700 7915
            </a>

            <hr className="h-5 w-px bg-grey-darker" />

            <ul className="flex items-center gap-2">
              {socials.map((s) => (
                <li key={s.id}>
                  <a
                    aria-label={s.label}
                    target="_blank"
                    className="grid h-6 w-6 place-content-center rounded-full bg-grey-darker"
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
          <a
            href="https://getcheckedclinic.com/"
            aria-label="Go to Getchecked Clinik Home Page"
          >
            <Logo className="w-32 md:w-48" />
          </a>

          <nav className="ml-12 mr-auto hidden lg:flex">
            <ul className="flex gap-8 xl:text-lg">
              {navigation.map((item) => (
                <li key={item.title}>
                  <a href={item.route}>{item.title}</a>
                </li>
              ))}
            </ul>
          </nav>

          <Button
            className="hidden lg:block"
            as="button"
            onClick={() => setPopupState(true)}
          >
            {t("button")}
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
