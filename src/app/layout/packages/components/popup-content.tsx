import { useTranslation } from "react-i18next"

export const PopupContent = ({
  page,
  id,
  hide,
}: {
  page: "oncology" | "prenatal"
  id: number
  hide(): void
}) => {
  const { t } = useTranslation(page)

  const PopupWrap = ({
    children,
    title,
  }: {
    children: React.ReactNode
    title: string
  }) => (
    <div className="flex flex-col rounded-xl border border-accent bg-accent-light px-4 py-6 md:p-6">
      <div className="mb-10 flex items-center justify-between gap-8">
        <h3 className="font-semibold md:text-lg">{title}</h3>
        <button
          onClick={hide}
          className="aspect-square w-10 flex-shrink-0 rotate-45 rounded-full bg-accent text-xl font-semibold transition-colors hover:bg-accent/75"
        >
          +
        </button>
      </div>

      {children}
    </div>
  )

  if (page === "oncology") {
    switch (id) {
      case 1:
        return (
          <PopupWrap title={t("packages.popups.1.title")}>
            <div className="custom-scrollbar flex flex-col gap-2 overflow-y-auto">
              <p>{t("packages.popups.1.content.1")}</p>
            </div>
          </PopupWrap>
        )
      case 2:
        return (
          <PopupWrap title={t("packages.popups.2.title")}>
            <div className="custom-scrollbar flex flex-col gap-2 overflow-y-auto">
              <p>{t("packages.popups.2.content.1")}</p>
            </div>
          </PopupWrap>
        )
      case 3:
        return (
          <PopupWrap title={t("packages.popups.3.title")}>
            <div className="custom-scrollbar flex flex-col gap-2 overflow-y-auto">
              <p>{t("packages.popups.3.content.1")}</p>
            </div>
          </PopupWrap>
        )
      case 4:
        return (
          <PopupWrap title={t("packages.popups.4.title")}>
            <div className="custom-scrollbar flex flex-col gap-2 overflow-y-auto">
              <p>{t("packages.popups.4.content.1")}</p>
            </div>
          </PopupWrap>
        )
      case 5:
        return (
          <PopupWrap title={t("packages.popups.5.title")}>
            <div className="custom-scrollbar flex flex-col gap-2 overflow-y-auto">
              <p>{t("packages.popups.5.content.1")}</p>
            </div>
          </PopupWrap>
        )
      case 6:
        return (
          <PopupWrap title={t("packages.popups.6.title")}>
            <div className="custom-scrollbar flex flex-col gap-2 overflow-y-auto">
              <p>{t("packages.popups.6.content.1")}</p>
            </div>
          </PopupWrap>
        )
      case 7:
        return (
          <PopupWrap title={t("packages.popups.7.title")}>
            <div className="custom-scrollbar flex flex-col gap-2 overflow-y-auto">
              <p>{t("packages.popups.7.content.1")}</p>
            </div>
          </PopupWrap>
        )
      case 8:
        return (
          <PopupWrap title={t("packages.popups.8.title")}>
            <div className="custom-scrollbar flex flex-col gap-2 overflow-y-auto">
              <p>{t("packages.popups.8.content.1")}</p>
            </div>
          </PopupWrap>
        )
      case 9:
        return (
          <PopupWrap title={t("packages.popups.9.title")}>
            <div className="custom-scrollbar flex flex-col gap-2 overflow-y-auto">
              <p>{t("packages.popups.9.content.1")}</p>
            </div>
          </PopupWrap>
        )
      default:
        return null
    }
  } else {
    switch (id) {
      case 1:
        return (
          <PopupWrap title={t("packages.popups.1.title")}>
            <div className="custom-scrollbar flex flex-col gap-2 overflow-y-auto">
              <p>
                <b>{t("packages.popups.1.content.1")}</b>
              </p>
              <p>
                <b>{t("packages.popups.1.content.2")}</b>
              </p>
              <p>{t("packages.popups.1.content.3")}</p>
              <p>{t("packages.popups.1.content.4")}</p>
              <p>{t("packages.popups.1.content.5")}</p>

              <p className="mt-8">
                <b>{t("packages.popups.1.content.6")}</b>
              </p>

              <p>{t("packages.popups.1.content.7")}</p>

              <p className="mt-8">
                <b>{t("packages.popups.1.content.8")}</b>
              </p>
              <p className="mt-2">
                <b>{t("packages.popups.1.content.9")}</b>
              </p>
              <p>{t("packages.popups.1.content.10")}</p>
              <p className="mt-2">
                <b>{t("packages.popups.1.content.11")}</b>
              </p>

              <p>{t("packages.popups.1.content.12")}</p>

              <p className="mt-2">
                <b>{t("packages.popups.1.content.13")}</b>
              </p>

              <p>{t("packages.popups.1.content.14")}</p>

              <p className="mt-8">
                <b>{t("packages.popups.1.content.15")}</b>
              </p>
              <p>{t("packages.popups.1.content.16")}</p>

              <p className="mt-8">
                <b>{t("packages.popups.1.content.17")}</b>
              </p>
              <p>{t("packages.popups.1.content.18")}</p>
              <p>{t("packages.popups.1.content.19")}</p>
              <p>{t("packages.popups.1.content.20")}</p>
            </div>
          </PopupWrap>
        )
      case 2:
        return (
          <PopupWrap title={t("packages.popups.2.title")}>
            <div className="custom-scrollbar flex flex-col gap-2 overflow-y-auto">
              <p>{t("packages.popups.2.content.1")}</p>

              <p className="mt-8">
                <b>{t("packages.popups.2.content.2")}</b>
              </p>

              <p>{t("packages.popups.2.content.3")}</p>

              <p className="mt-8">
                <b>{t("packages.popups.2.content.4")}</b>
              </p>
              <p>{t("packages.popups.2.content.5")}</p>

              <p className="mt-8">
                <b>{t("packages.popups.2.content.6")}</b>
              </p>
              <p>{t("packages.popups.2.content.7")}</p>
              <p>{t("packages.popups.2.content.8")}</p>
              <p>{t("packages.popups.2.content.9")}</p>
            </div>
          </PopupWrap>
        )
      case 3:
        return (
          <PopupWrap title={t("packages.popups.3.title")}>
            <div className="custom-scrollbar flex flex-col gap-2 overflow-y-auto">
              <p>{t("packages.popups.3.content.1")}</p>
              <p className="mt-8">
                <b>{t("packages.popups.3.content.2")}</b>
              </p>
              <p>
                <b>{t("packages.popups.3.content.3")}</b>
              </p>
              <p>{t("packages.popups.3.content.4")}</p>
              <p>{t("packages.popups.3.content.5")}</p>
              <p>{t("packages.popups.3.content.6")}</p>

              <p className="mt-2">
                <b>{t("packages.popups.3.content.7")}</b>
              </p>

              <p>{t("packages.popups.3.content.8")}</p>

              <p className="mt-2">
                <b>{t("packages.popups.3.content.9")}</b>
              </p>

              <p>{t("packages.popups.3.content.10")}</p>

              <p className="mt-8">
                <b>{t("packages.popups.3.content.11")}</b>
              </p>
              <p className="mt-2">
                <b>{t("packages.popups.3.content.12")}</b>
              </p>
              <p>{t("packages.popups.3.content.13")}</p>
              <p className="mt-2">
                <b>{t("packages.popups.3.content.14")}</b>
              </p>
              <p>{t("packages.popups.3.content.15")}</p>

              <p className="mt-2">
                <b>{t("packages.popups.3.content.16")}</b>
              </p>

              <p>{t("packages.popups.3.content.17")}</p>

              <p className="mt-8">
                <b>{t("packages.popups.3.content.18")}</b>
              </p>
              <p>{t("packages.popups.3.content.19")}</p>

              <p className="mt-8">
                <b>{t("packages.popups.3.content.20")}</b>
              </p>
              <p>{t("packages.popups.3.content.21")}</p>
              <p>{t("packages.popups.3.content.22")}</p>
              <p>{t("packages.popups.3.content.23")}</p>
              <p>{t("packages.popups.3.content.24")}</p>
            </div>
          </PopupWrap>
        )
      case 4:
        return (
          <PopupWrap title={t("packages.popups.4.title")}>
            <div className="custom-scrollbar flex flex-col gap-2 overflow-y-auto">
              <p>{t("packages.popups.4.content.1")}</p>
              <p className="mt-8">
                <b>{t("packages.popups.4.content.2")}</b>
              </p>
              <p>
                <b>{t("packages.popups.4.content.3")}</b>
              </p>
              <p>{t("packages.popups.4.content.4")}</p>

              <p className="mt-2">
                <b>{t("packages.popups.4.content.5")}</b>
              </p>

              <p>{t("packages.popups.4.content.6")}</p>

              <p className="mt-2">
                <b>{t("packages.popups.4.content.7")}</b>
              </p>

              <p>{t("packages.popups.4.content.8")}</p>

              <p className="mt-2">
                <b>{t("packages.popups.4.content.9")}</b>
              </p>

              <p>{t("packages.popups.4.content.10")}</p>
              <p>{t("packages.popups.4.content.11")}</p>
              <p>{t("packages.popups.4.content.12")}</p>

              <p className="mt-2">
                <b>{t("packages.popups.4.content.13")}</b>
              </p>

              <p>{t("packages.popups.4.content.14")}</p>

              <p className="mt-8">
                <b>{t("packages.popups.4.content.15")}</b>
              </p>
              <p className="mt-2">
                <b>{t("packages.popups.4.content.16")}</b>
              </p>
              <p>{t("packages.popups.4.content.17")}</p>
              <p className="mt-2">
                <b>{t("packages.popups.4.content.18")}</b>
              </p>
              <p>{t("packages.popups.4.content.19")}</p>

              <p className="mt-2">
                <b>{t("packages.popups.4.content.20")}</b>
              </p>

              <p>{t("packages.popups.4.content.21")}</p>

              <p className="mt-8">
                <b>{t("packages.popups.4.content.22")}</b>
              </p>
              <p>{t("packages.popups.4.content.23")}</p>

              <p className="mt-8">
                <b>{t("packages.popups.4.content.24")}</b>
              </p>
              <p>{t("packages.popups.4.content.25")}</p>
              <p>{t("packages.popups.4.content.26")}</p>
              <p>{t("packages.popups.4.content.27")}</p>
              <p>{t("packages.popups.4.content.28")}</p>

              <p>{t("packages.popups.4.content.29")}</p>
            </div>
          </PopupWrap>
        )
      case 5:
        return (
          <PopupWrap title={t("packages.popups.5.title")}>
            <div className="custom-scrollbar flex flex-col gap-2 overflow-y-auto">
              <p>{t("packages.popups.5.content.1")}</p>
              <p className="mt-8">
                <b>{t("packages.popups.5.content.2")}</b>
              </p>
              <p>
                <b>{t("packages.popups.5.content.3")}</b>
              </p>
              <p>{t("packages.popups.5.content.4")}</p>

              <p className="mt-2">
                <b>{t("packages.popups.5.content.5")}</b>
              </p>

              <p>{t("packages.popups.5.content.6")}</p>

              <p className="mt-2">
                <b>{t("packages.popups.5.content.7")}</b>
              </p>

              <p>{t("packages.popups.5.content.8")}</p>

              <p className="mt-2">
                <b>{t("packages.popups.5.content.9")}</b>
              </p>

              <p>{t("packages.popups.5.content.10")}</p>
              <p>{t("packages.popups.5.content.11")}</p>
              <p>{t("packages.popups.5.content.12")}</p>

              <p className="mt-2">
                <b>{t("packages.popups.5.content.13")}</b>
              </p>

              <p>{t("packages.popups.5.content.14")}</p>

              <p className="mt-8">
                <b>{t("packages.popups.5.content.15")}</b>
              </p>
              <p className="mt-2">
                <b>{t("packages.popups.5.content.16")}</b>
              </p>
              <p>{t("packages.popups.5.content.17")}</p>

              <p className="mt-2">
                <b>{t("packages.popups.5.content.18")}</b>
              </p>
              <p>{t("packages.popups.5.content.19")}</p>

              <p className="mt-2">
                <b>{t("packages.popups.5.content.20")}</b>
              </p>
              <p>{t("packages.popups.5.content.21")}</p>

              <p className="mt-2">
                <b>{t("packages.popups.5.content.22")}</b>
              </p>
              <p>{t("packages.popups.5.content.23")}</p>

              <p className="mt-8">
                <b>{t("packages.popups.5.content.24")}</b>
              </p>

              <p>{t("packages.popups.5.content.25")}</p>

              <p className="mt-8">
                <b>{t("packages.popups.5.content.26")}</b>
              </p>
              <p>{t("packages.popups.5.content.27")}</p>

              <p>{t("packages.popups.5.content.28")}</p>
              <p>{t("packages.popups.5.content.29")}</p>
              <p>{t("packages.popups.5.content.30")}</p>
              <p>{t("packages.popups.5.content.31")}</p>
            </div>
          </PopupWrap>
        )
      case 6:
        return (
          <PopupWrap title={t("packages.popups.6.title")}>
            <div className="custom-scrollbar flex flex-col gap-2 overflow-y-auto">
              <p>{t("packages.popups.6.content.1")}</p>
              <p>{t("packages.popups.6.content.2")}</p>

              <p className="mt-8">
                <b>{t("packages.popups.6.content.3")}</b>
              </p>

              <p>{t("packages.popups.6.content.4")}</p>

              <p className="mt-8">
                <b>{t("packages.popups.6.content.5")}</b>
              </p>
              <p>{t("packages.popups.6.content.6")}</p>

              <p className="mt-8">
                <b>{t("packages.popups.6.content.7")}</b>
              </p>
              <p>{t("packages.popups.6.content.8")}</p>
              <p>{t("packages.popups.6.content.9")}</p>
              <p>{t("packages.popups.6.content.10")}</p>
            </div>
          </PopupWrap>
        )
      default:
        return null
    }
  }
}
