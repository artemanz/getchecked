import { useTranslation } from "react-i18next"

export const Faq = () => {
  const { t } = useTranslation()

  const faq = [
    {
      question: t("prenatal:faq.questions.1.q"),
      answer: `${t("prenatal:faq.questions.1.answer.1")}

        ${t("prenatal:faq.questions.1.answer.2")}`,
    },
    {
      question: t("prenatal:faq.questions.2.q"),
      answer: `${t("prenatal:faq.questions.2.answer.1")}

      ${t("prenatal:faq.questions.2.answer.2")}

      ${t("prenatal:faq.questions.2.answer.3")}

      ${t("prenatal:faq.questions.2.answer.4")}

      ${t("prenatal:faq.questions.2.answer.5")}`,
    },
    {
      question: t("prenatal:faq.questions.3.q"),
      answer: `${t("prenatal:faq.questions.3.answer.1")}

      ${t("prenatal:faq.questions.3.answer.2")}

      ${t("prenatal:faq.questions.3.answer.3")}

      ${t("prenatal:faq.questions.3.answer.4")}

      ${t("prenatal:faq.questions.3.answer.5")}`,
    },
  ]

  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">{t("common:faq.title")}</h2>

        <ul>
          {faq.map((item) => (
            <li
              className="cursor-pointer border-t border-foreground py-4 last:border-b"
              key={item.question}
            >
              <details className="group peer">
                <summary className="flex list-none items-center justify-between gap-8">
                  <p className="md:text-lg">{item.question}</p>
                  <div className="grid aspect-square w-10 flex-shrink-0 select-none place-content-center rounded-full bg-accent text-xl font-semibold transition-transform group-open:rotate-45">
                    +
                  </div>
                </summary>
              </details>
              <div className="grid grid-rows-[0fr] transition-[grid-template-rows,padding] duration-300 ease-linear peer-open:grid-rows-[1fr] peer-open:py-8">
                <div className="overflow-hidden whitespace-pre-line text-sm md:text-base">
                  {item.answer}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
