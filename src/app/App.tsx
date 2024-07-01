import { useEffect } from "react"
import { useTranslation } from "react-i18next"
import emailjs from "@emailjs/browser"

import { routeTree } from "@/routeTree.gen"
import { RouterProvider, createRouter } from "@tanstack/react-router"

// Create a new router instance
const router = createRouter({ routeTree })

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router
  }
}

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

  return <RouterProvider router={router} />
}

export default App
