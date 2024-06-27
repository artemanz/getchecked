import { FaPhoneAlt } from "react-icons/fa"
import { FaWhatsapp } from "react-icons/fa"

export const ContactMenu = () => {
  const handleWhatsAppClick = () => {
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({
      event: "whatsapp_conversion_click",
      conversionValue: 1, // set this if you want to pass a specific value
    })
  }

  return (
    <div className="fixed right-4 bottom-4 flex flex-col gap-4 z-10">
      <a
        className="bg-amber-400 w-16 aspect-square grid place-content-center rounded-full"
        href="tel:+971527007915"
      >
        <FaPhoneAlt size={32} color="#fff" />
      </a>

      <a
        onClick={handleWhatsAppClick}
        className="bg-green-400 w-16 aspect-square grid place-content-center rounded-full"
        href="https://wa.me/97143331473"
        target="_blank"
      >
        <FaWhatsapp size={32} color="#fff" />
      </a>
    </div>
  )
}
