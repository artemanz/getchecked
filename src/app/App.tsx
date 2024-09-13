import { useEffect } from "react"
import { useTranslation } from "react-i18next"
import emailjs from "@emailjs/browser"
import { Providers } from "./providers"

const App = () => {
  const { i18n } = useTranslation()

  useEffect(() => {
    localStorage.setItem("lang", JSON.stringify(i18n.language))
  }, [i18n.language])

  useEffect(() => {
    emailjs.init({
      publicKey: "zVPIJXrrxAsFrjxJN",
      limitRate: {
        throttle: 10000,
      },
    })
  }, [])

  return <Providers />
}

export default App
