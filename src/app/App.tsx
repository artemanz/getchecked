import { Main } from "@/app/main"
import { ContactMenu, Footer, Header } from "@/components"
import { useEffect } from "react"
import { useTranslation } from "react-i18next"

const App = () => {
  const { i18n } = useTranslation()

  useEffect(() => {
    localStorage.setItem("lang", JSON.stringify(i18n.language))
  }, [i18n.language])

  return (
    <div className="font-default">
      <Header />
      <Main />
      <Footer />
      <ContactMenu />
    </div>
  )
}

export default App
