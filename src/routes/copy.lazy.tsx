import { Prenatal } from "@/app/prenatal"
import { createLazyFileRoute } from "@tanstack/react-router"

export const Route = createLazyFileRoute("/copy")({
  component: Prenatal,
})
