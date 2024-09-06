import { SOCIALS } from "@/lib/constants/socials"
import {
  Facebook,
  Instagram,
  LinkedIn,
  Location,
  Mail,
  Phone,
  WhatsApp,
} from "./svg"
import { Logo } from "../svg"
import { useTranslation } from "react-i18next"

export const Footer = () => {
  const { t } = useTranslation("components", { keyPrefix: "footer" })

  const contacts = [
    {
      id: "whatsapp",
      href: "https://wa.me/971527007915",
      icon: WhatsApp,
      text: "+971 52 700 79 15",
    },
    {
      id: "phone",
      href: "tel:+971527007915",
      icon: Phone,
      text: "+971 52 700 79 15",
    },
    {
      id: "mail",
      href: "mailto:enquiries@getcheckedclinic.com",
      icon: Mail,
      text: "enquiries@getcheckedclinic.com",
    },
    {
      id: "location",
      href: undefined,
      icon: Location,
      text: t("adress"),
    },
  ]

  return (
    <footer className="text-white bg-grey-dark section">
      <div className="container grid gap-4 md:grid-cols-2 md:gap-x-8 lg:grid-cols-[2fr_1fr]">
        <a
          href="https://getcheckedclinic.com/"
          aria-label="Go to Getchecked Clinik Home Page"
        >
          <Logo className="lg:w-32 lg:h-10" />
        </a>

        <p className="md:col-start-1 lg:max-w-[22.5rem]">{t("info")}</p>

        <div className="flex flex-col gap-6 py-4 md:col-start-2 md:row-start-2 md:row-end-4 md:py-0 lg:row-start-1">
          <ul className="flex flex-col gap-4">
            {contacts.map((item) => {
              const Tag = item.href ? "a" : "span"
              return (
                <li key={item.id}>
                  <Tag
                    href={item.href}
                    className="flex items-start gap-2 leading-[1.1]"
                  >
                    <item.icon className="flex-shrink-0 w-4 h-4 mt-0.5" />
                    {item.text}
                  </Tag>
                </li>
              )
            })}
          </ul>

          <ul className="flex justify-center gap-3 md:justify-start">
            <li>
              <a
                aria-label="Go to Getchecked Clinik Facebook Page"
                target="_blank"
                className="bg-[#3B5998] p-2 rounded-full grid place-content-center"
                href={SOCIALS.facebook}
              >
                <Facebook />
              </a>
            </li>
            <li>
              <a
                aria-label="Go to Getchecked Clinik LinkedIn Page"
                target="_blank"
                className="bg-[#0077B5] p-2 rounded-full grid place-content-center"
                href={SOCIALS.linkedin}
              >
                <LinkedIn />
              </a>
            </li>
            <li>
              <a
                aria-label="Go to Getchecked Clinik Instagram Page"
                target="_blank"
                className="bg-[#262626] p-2 rounded-full grid place-content-center"
                href={SOCIALS.instagram}
              >
                <Instagram />
              </a>
            </li>
          </ul>
        </div>

        <p className="hidden md:block">{t("advertisement")}</p>

        <p className="text-center md:col-span-2 lg:mt-4">{t("copyright")}</p>
      </div>
    </footer>
  )
}
