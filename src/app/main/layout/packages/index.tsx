import { useState } from "react"
import { Blood, CardBg, Time } from "./svg"
import { Button, Popup } from "@/components/ui"
import { PopupContent } from "./popup-content"

export const Packages = () => {
  const data = [
    {
      id: 1,
      title: `NIPT UNITY
    Aneuploidy Screen`,
      badges: {
        blood: true,
        report: true,
      },
      content: (
        <>
          T13, T18, T21, and Sex Chromosomes <br />
          <ul>
            <li>+ Optional Fetal Sex</li>
            <li>+ Optional Fetal RhD NIPT</li>
            <li>+ Optional 22q</li>
          </ul>
        </>
      ),
      oldprice: "2200",
      currentPrice: "1099",
    },
    {
      id: 2,
      title: `UNITY Carrier
      Screen`,
      badges: {
        blood: true,
        report: true,
      },
      content: (
        <>
          w/ sgNIPT Reflex <br />
          Сhecks the baby's DNA for specific conditions if mother is a carrier
        </>
      ),
      oldprice: "4600",
      currentPrice: "2300",
    },
    {
      id: 3,
      title: `UNITY Aneuploidy
      with Fetal Antigen NIPT`,
      badges: {
        blood: true,
        report: true,
      },
      content: (
        <>
          T13, T18, T21, and Sex Chromosomes
          <br />
          <ul>
            <li>+ Optional Fetal Sex</li>
            <li>+ Optional Fetal RhD NIPT</li>
            <li>+ Optional Fetal Rbc Antigen NIPT</li>
            <li>+ Optional 22q</li>
          </ul>
        </>
      ),
      oldprice: "6000",
      currentPrice: "3000",
    },
    {
      id: 4,
      title: `UNITY Complete
      NIPT +Carrier`,
      badges: {
        blood: true,
        report: true,
      },
      content: (
        <>
          Carrier Screen w/ sgNIPT Reflex <br />
          Aneuploidy Screen w/ T13, T18, T21, and Sex Chromosomes <br />
          <ul>
            <li>+ Optional Fetal Sex</li>
            <li>+ Optional Fetal RhD NIPT</li>
            <li>+ Optional 22q</li>
          </ul>
        </>
      ),
      oldprice: "7300",
      currentPrice: "3650",
    },
    {
      id: 5,
      title: `UNITY Complete
      with Fetal Antigen NIPT`,
      badges: {
        blood: true,
        report: true,
      },
      content: (
        <>
          Carrier Screen w/ sgNIPT Reflex <br />
          Aneuploidy Screen w/ T13, T18, T21, and Sex Chromosomes <br />
          <ul>
            <li>+ Optional Fetal Sex</li>
            <li>+ Optional Fetal RhD NIPT</li>
            <li>+ Optional Fetal Rbc Antigen NIPT</li>
            <li>+ Optional 22q</li>
          </ul>
        </>
      ),
      oldprice: "11000",
      currentPrice: "5500",
    },
  ]

  const [popup, setPopup] = useState<(typeof data)[number]["id"] | null>(null)

  return (
    <section className="section bg-grey-light">
      <div className="container md:px-[4.5rem] lg:px-[2rem]">
        <h2 className="section-title">
          UNITY Screen<sup className="">TM</sup> Packages
        </h2>

        <ul className="grid grid-cols-1 justify-items-center gap-y-8 gap-x-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-4">
          {data.map((item) => (
            <li
              className="relative w-[19rem] h-[32.125rem] pl-4 pt-4 overflow-hidden"
              key={item.id}
            >
              <CardBg className="absolute top-0 left-0 w-full h-full" />

              <div className="relative flex flex-col h-full">
                <div className="pr-4">
                  <h3 className="mb-4 text-lg font-semibold whitespace-pre-line">
                    {item.title}
                  </h3>

                  <ul className="flex flex-col items-start gap-2">
                    <li className="relative border border-[#620C16] rounded-full py-1 pl-10 text-[#620C16] font-medium inline-block pr-4">
                      <Blood className="absolute w-10 -left-2 -top-3" />
                      Blood from the Mother
                    </li>
                    <li className="relative inline-block py-1 pl-10 pr-4 font-medium text-black border border-black rounded-full">
                      <Time className="absolute w-10 -top-1 -left-1" />
                      5-10 Days Report
                    </li>
                  </ul>

                  <hr className="my-4 border-grey" />

                  <p className="font-semibold mb-2">Includes</p>

                  <div className="mb-4">{item.content}</div>
                </div>

                <div className="flex justify-between mb-4 mt-auto pr-4">
                  <button
                    onClick={() => setPopup(item.id)}
                    className="underline underline-offset-4"
                  >
                    Find Out More
                  </button>
                  <a className="underline underline-offset-4" href="#documents">
                    View Sample Report
                  </a>
                </div>

                <div className="flex justify-between items-end">
                  <div className="flex flex-col gap-1 pb-2">
                    <p className="line-through font-semibold text-sm leading-none">
                      {item.oldprice} <span>AED</span>
                    </p>
                    <p className="text-2xl font-semibold leading-none">
                      {item.currentPrice}
                      <span className="text-base">AED</span>
                    </p>
                  </div>
                  <Button className="w-[9.6875rem]" as="link" href="#contacts">
                    Book Now
                  </Button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {popup && (
        <Popup hide={() => setPopup(null)}>
          <PopupContent id={popup} hide={() => setPopup(null)} />
        </Popup>
      )}
    </section>
  )
}
