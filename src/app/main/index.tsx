import {
  About,
  Contact,
  Discover,
  Documents,
  Faq,
  Hero,
  Needs,
  Packages,
  Screeining,
  Video,
  Works,
} from "./layout"

export const Main = () => {
  return (
    <main>
      <Hero />
      <About />
      <Needs />
      <Video />
      <Works />
      <Discover />
      <Packages />
      <Screeining />
      <Documents />
      <Faq />
      <Contact />
    </main>
  )
}
