import { useTranslation } from "react-i18next"

export const useNavigation = () => {
  const { t } = useTranslation("navigation")
  return [
    { route: "https://getcheckedclinic.com/", title: t("home") },
    { route: "https://getcheckedclinic.com/en/about/", title: t("about") },
    { route: "https://getcheckedclinic.com/", title: t("services") },
    { route: "https://getcheckedclinic.com/en/career/", title: t("career") },
    { route: "https://getcheckedclinic.com/en/contact/", title: t("contact") },
    { route: "https://getcheckedclinic.com/en/contact/", title: t("blog") },
  ]
}
