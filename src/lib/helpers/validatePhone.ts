export function validatePhone(val: string) {
  val = val.replace(/[^\d+]+/g, "")
  val = val.replace(/\++/g, "+")
  if (val.length > 15) val = val.slice(0, 16)
  if (val === "") return ""
  val = val.startsWith("+") ? val : `+${val}`
  return val
}
