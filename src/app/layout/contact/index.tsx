import { useTranslation } from "react-i18next"
import { Form } from "./form"

export const Contact = () => {
  const { t } = useTranslation("common")
  return (
    <section className="section" id="contacts">
      <div className="container">
        <h2 className="section-title mb-2">{t("contact.title")}</h2>
        <p className="mb-10 text-center lg:text-lg">{t("contact.subtitle")}</p>

        <div className="flex flex-col gap-10 md:flex-row-reverse md:*:basis-1/2">
          <Form />

          <div>
            <iframe
              className="h-full w-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57789.75005434449!2d55.11541724863281!3d25.140444600000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6b3743ea753d%3A0xc01ea9ec27830e25!2sGetchecked%20Clinic!5e0!3m2!1sen!2s!4v1711531677235!5m2!1sen!2s"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}
