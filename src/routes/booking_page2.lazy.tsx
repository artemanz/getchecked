import { Main } from "@/app/main"
import { ContactMenu, Footer, Header } from "@/components"
import { createLazyFileRoute } from "@tanstack/react-router"

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

export const Route = createLazyFileRoute("/booking_page2")({
  component: Index,
})
