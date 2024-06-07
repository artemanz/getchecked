import { Main } from "@/app/main"
import { ContactMenu, Footer, Header } from "@/components"

const App = () => {
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
