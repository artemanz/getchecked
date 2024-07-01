import { Main } from "@/app/main"
import { ContactMenu, Footer, Header } from "@/components"
import { createFileRoute } from "@tanstack/react-router"

const Index = () => {
  return (
    <div className="font-default">
      <Header />
      <Main />
      <Footer />
      <ContactMenu />
    </div>
  )
}

export const Route = createFileRoute("/")({
  component: Index,
})
