import { useTranslation } from "react-i18next"

export const Faq = () => {
  const { t } = useTranslation("main")

  const faq = [
    {
      question: t("faq.questions.1.q"),
      answer: `${t("faq.questions.1.answer.1")}

        ${t("faq.questions.1.answer.2")}`,
    },
    {
      question: t("faq.questions.2.q"),
      answer: `${t("faq.questions.2.answer.1")}

      ${t("faq.questions.2.answer.2")}

      ${t("faq.questions.2.answer.3")}

      ${t("faq.questions.2.answer.4")}

      ${t("faq.questions.2.answer.5")}`,
    },
    {
      question: t("faq.questions.3.q"),
      answer: `${t("faq.questions.3.answer.1")}

      ${t("faq.questions.3.answer.2")}

      ${t("faq.questions.3.answer.3")}

      ${t("faq.questions.3.answer.4")}

      ${t("faq.questions.3.answer.5")}`,
    },
  ]

  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">{t("faq.title")}</h2>

        <ul>
          {faq.map((item) => (
            <li
              className="py-4 border-t cursor-pointer last:border-b border-foreground"
              key={item.question}
            >
              <details className="peer group">
                <summary className="flex items-center justify-between gap-8 list-none">
                  <p className="md:text-lg">{item.question}</p>
                  <div className="grid flex-shrink-0 w-10 text-xl font-semibold transition-transform rounded-full select-none bg-accent aspect-square place-content-center group-open:rotate-45">
                    +
                  </div>
                </summary>
              </details>
              <div className="grid grid-rows-[0fr] transition-[grid-template-rows,padding] duration-300 ease-linear peer-open:grid-rows-[1fr] peer-open:py-8">
                <div className="overflow-hidden text-sm whitespace-pre-line md:text-base">
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
