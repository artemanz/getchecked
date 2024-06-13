import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import resources from "@/locales"

let lang = localStorage.getItem("lang")
lang = lang ? (JSON.parse(lang) as string) : "en"

i18n.use(initReactI18next).init({
  resources,
  lng: lang,
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
