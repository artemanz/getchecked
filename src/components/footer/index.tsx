import { SOCIALS } from "@/lib/constants/socials"
import { Picture } from "../ui"
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

export const Footer = () => {
  const contacts = [
    {
      id: "whatsapp",
      href: "https://wa.me/97143331473",
      icon: WhatsApp,
      text: "+971 4 333 1473",
    },
    {
      id: "phone",
      href: "tel:+97143331473",
      icon: Phone,
      text: "+971 4 333 1473",
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
      text: "The Mall, Umm Suqqiem - Opposite Madinat Jumeirah Hotel",
    },
  ]

  return (
    <footer className="text-white bg-grey section">
      <div className="container grid gap-4 md:grid-cols-2 md:gap-x-8 lg:grid-cols-[2fr_1fr]">
        <a href="https://getcheckedclinic.com/">
          <Logo className="lg:w-32 lg:h-10" />
        </a>

        <p className="md:col-start-1 lg:max-w-[22.5rem]">
          Our clinics are specially chosen to offer you a discreet and
          confidential service. Confidence comes from knowing your tests are
          accurate. We only work with accredited Laboratories.
        </p>

        <div className="flex flex-col gap-6 py-4 md:col-start-2 md:row-start-2 md:row-end-4 md:py-0 lg:row-start-1">
          <ul className="flex flex-col gap-4">
            {contacts.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  className="flex items-start gap-2 leading-[1.1]"
                >
                  <item.icon className="flex-shrink-0 w-4 h-4 mt-0.5" />
                  {item.text}
                </a>
              </li>
            ))}
          </ul>

          <ul className="flex justify-center gap-3 md:justify-start">
            <li>
              <a
                target="_blank"
                className="bg-[#3B5998] p-2 rounded-full grid place-content-center"
                href={SOCIALS.facebook}
              >
                <Facebook />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                className="bg-[#0077B5] p-2 rounded-full grid place-content-center"
                href={SOCIALS.linkedin}
              >
                <LinkedIn />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                className="bg-[#262626] p-2 rounded-full grid place-content-center"
                href={SOCIALS.instagram}
              >
                <Instagram />
              </a>
            </li>
          </ul>
        </div>

        <p className="hidden md:block">
          Advertisement License No: 6DDI7WHT-050923
        </p>

        <p className="text-center md:col-span-2 lg:mt-4">
          getcheckedclinic.com © 2024
        </p>
      </div>
    </footer>
  )
}
