import { ContactMenu, Footer, Header } from "@/components"
import { createRootRoute, Outlet } from "@tanstack/react-router"

export const Route = createRootRoute({
  component: () => (
    <div className="font-default">
      <Header />
      <Outlet />
      <Footer />
      <ContactMenu />
    </div>
  ),
})
