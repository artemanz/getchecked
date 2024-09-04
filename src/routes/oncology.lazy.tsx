import { Oncology } from "@/app/oncology"
import { createLazyFileRoute } from "@tanstack/react-router"

export const Route = createLazyFileRoute("/oncology")({
  component: Oncology,
})
