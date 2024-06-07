import { FaPhoneAlt } from "react-icons/fa"
import { FaWhatsapp } from "react-icons/fa"

export const ContactMenu = () => {
  return (
    <div className="fixed left-4 bottom-4 flex flex-col gap-4 z-10">
      <a
        className="bg-amber-400 w-16 aspect-square grid place-content-center rounded-full"
        href="tel:+971527007915"
      >
        <FaPhoneAlt size={32} color="#fff" />
      </a>

      <a
        className="bg-green-400 w-16 aspect-square grid place-content-center rounded-full"
        href="https://wa.me/97143331473"
        target="_blank"
      >
        <FaWhatsapp size={32} color="#fff" />
      </a>
    </div>
  )
}
