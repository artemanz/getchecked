import { Prenatal } from "@/app/prenatal"
import { createLazyFileRoute } from "@tanstack/react-router"

export const Route = createLazyFileRoute("/booking_page1")({
  component: Prenatal,
})
