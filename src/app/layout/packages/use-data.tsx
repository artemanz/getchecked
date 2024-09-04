import { type CardData } from "@/components/card/types"
import { useTranslation } from "react-i18next"

export const useOncologyData = () => {
  const { t } = useTranslation()

  const northstarData: CardData[] = [
    {
      id: 1,
      title: (
        <>
          {t("oncology:packages.northstar.cards.1.title.1")} <br />
          {t("oncology:packages.northstar.cards.1.title.2")}
        </>
      ),
      analysis: "blood",
      badges: {
        blood: t("components:card.analysis-type.blood"),
        report: t("oncology:packages.northstar.cards.1.report"),
      },
      content: (
        <>
          <p className="font-bold">{t("components:card.includes")}</p>
          <p className="mt-2">
            {t("oncology:packages.northstar.cards.1.content.1")}
          </p>
        </>
      ),
      oldprice: <p>{t("components:card.per")}</p>,
      currentPrice: <p>{t("components:card.request")}</p>,
      actions: true,
    },
    {
      id: 2,
      title: (
        <>
          {t("oncology:packages.northstar.cards.2.title.1")} <br />
          {t("oncology:packages.northstar.cards.2.title.2")}
        </>
      ),
      analysis: "blood",
      badges: {
        blood: t("components:card.analysis-type.blood"),
        report: t("oncology:packages.northstar.cards.2.report"),
      },
      content: (
        <>
          <p className="font-bold">{t("components:card.includes")}</p>
          <p className="mt-2">
            {t("oncology:packages.northstar.cards.2.content.1")}
          </p>
        </>
      ),
      oldprice: <p>{t("components:card.per")}</p>,
      currentPrice: <p>{t("components:card.request")}</p>,
      actions: true,
    },
  ]

  const hereditaryCancerData = [
    {
      id: 3,
      title: (
        <>
          {t("oncology:packages.hereditary.cards.1.title.1")} <br />
          {t("oncology:packages.hereditary.cards.1.title.2")}
        </>
      ),
      analysis: "blood",
      badges: {
        blood: t("components:card.analysis-type.blood"),
        report: t("oncology:packages.hereditary.cards.1.report"),
      },
      content: (
        <>
          <p className="font-bold">{t("components:card.includes")}</p>
          <ul className="mt-2 flex flex-col gap-2">
            <li>{t("oncology:packages.hereditary.cards.1.content.1")}</li>
            <li>{t("oncology:packages.hereditary.cards.1.content.2")}</li>
            <li>{t("oncology:packages.hereditary.cards.1.content.3")}</li>
            <li>{t("oncology:packages.hereditary.cards.1.content.4")}</li>
            <li>{t("oncology:packages.hereditary.cards.1.content.5")}</li>
            <li>{t("oncology:packages.hereditary.cards.1.content.6")}</li>
          </ul>
        </>
      ),
      oldprice: (
        <p className="line-through">3600 {t("components:card.currency")}</p>
      ),
      currentPrice: (
        <div>
          1800{" "}
          <span className="text-base">{t("components:card.currency")}</span>
        </div>
      ),
      actions: true,
    },
    {
      id: 4,
      title: (
        <>
          {t("oncology:packages.hereditary.cards.2.title.1")} <br />
          {t("oncology:packages.hereditary.cards.2.title.2")}
        </>
      ),
      analysis: "blood",
      badges: {
        blood: t("components:card.analysis-type.blood"),
        report: t("oncology:packages.hereditary.cards.2.report"),
      },
      content: (
        <>
          <p className="font-bold">{t("components:card.includes")}</p>
          <ul className="mt-2 flex flex-col gap-2">
            <li>{t("oncology:packages.hereditary.cards.2.content.1")}</li>
            <li>{t("oncology:packages.hereditary.cards.2.content.2")}</li>
            <li>{t("oncology:packages.hereditary.cards.2.content.3")}</li>
            <li>{t("oncology:packages.hereditary.cards.2.content.4")}</li>
            <li>{t("oncology:packages.hereditary.cards.2.content.5")}</li>
            <li>{t("oncology:packages.hereditary.cards.2.content.6")}</li>
          </ul>
        </>
      ),
      oldprice: (
        <p className="line-through">4000 {t("components:card.currency")}</p>
      ),
      currentPrice: (
        <div>
          1999{" "}
          <span className="text-base">{t("components:card.currency")}</span>
        </div>
      ),
      actions: true,
    },
    {
      id: 5,
      title: (
        <>
          {t("oncology:packages.hereditary.cards.3.title.1")} <br />
          {t("oncology:packages.hereditary.cards.3.title.2")}
        </>
      ),
      analysis: "blood",
      badges: {
        blood: t("components:card.analysis-type.blood"),
        report: t("oncology:packages.hereditary.cards.3.report"),
      },
      content: (
        <>
          <p className="font-bold">{t("components:card.includes")}</p>
          <ul className="mt-2 flex flex-col gap-2">
            <li>{t("oncology:packages.hereditary.cards.3.content.1")}</li>
            <li>{t("oncology:packages.hereditary.cards.3.content.2")}</li>
            <li>{t("oncology:packages.hereditary.cards.3.content.3")}</li>
            <li>{t("oncology:packages.hereditary.cards.3.content.4")}</li>
            <li>{t("oncology:packages.hereditary.cards.3.content.5")}</li>
            <li>{t("oncology:packages.hereditary.cards.3.content.6")}</li>
          </ul>
        </>
      ),
      oldprice: (
        <p className="line-through">5000 {t("components:card.currency")}</p>
      ),
      currentPrice: (
        <div>
          2500{" "}
          <span className="text-base">{t("components:card.currency")}</span>
        </div>
      ),
      actions: true,
    },
  ]

  const bloodCancerData = [
    {
      id: 6,
      title: (
        <>
          {t("oncology:packages.blood-cancer.cards.1.title.1")} <br />
          {t("oncology:packages.blood-cancer.cards.1.title.2")}
        </>
      ),
      analysis: "blood",
      badges: {
        blood: t("components:card.analysis-type.blood"),
        report: t("oncology:packages.blood-cancer.cards.1.report"),
      },
      content: (
        <>
          <p className="font-bold">{t("components:card.includes")}</p>
          <ul className="mt-2 flex flex-col gap-2">
            <li>{t("oncology:packages.blood-cancer.cards.1.content.1")}</li>
            <li>{t("oncology:packages.blood-cancer.cards.1.content.2")}</li>
            <li>{t("oncology:packages.blood-cancer.cards.1.content.3")}</li>
            <li>{t("oncology:packages.blood-cancer.cards.1.content.4")}</li>
          </ul>
        </>
      ),
      oldprice: (
        <p className="line-through">2400 {t("components:card.currency")}</p>
      ),
      currentPrice: (
        <div>
          799 <span className="text-base">{t("components:card.currency")}</span>
        </div>
      ),
      actions: true,
    },
    {
      id: 7,
      title: (
        <>
          {t("oncology:packages.blood-cancer.cards.2.title.1")} <br />
          {t("oncology:packages.blood-cancer.cards.2.title.2")}
        </>
      ),
      analysis: "blood",
      badges: {
        blood: t("components:card.analysis-type.blood"),
        report: t("oncology:packages.blood-cancer.cards.2.report"),
      },
      content: (
        <>
          <p className="font-bold">{t("components:card.includes")}</p>
          <ul className="mt-2 flex flex-col gap-2">
            <li>{t("oncology:packages.blood-cancer.cards.2.content.1")}</li>
            <li>{t("oncology:packages.blood-cancer.cards.2.content.2")}</li>
            <li>{t("oncology:packages.blood-cancer.cards.2.content.3")}</li>
            <li>{t("oncology:packages.blood-cancer.cards.2.content.4")}</li>
            <li>{t("oncology:packages.blood-cancer.cards.2.content.5")}</li>
          </ul>
        </>
      ),
      oldprice: (
        <p className="line-through">2000 {t("components:card.currency")}</p>
      ),
      currentPrice: (
        <div>
          999 <span className="text-base">{t("components:card.currency")}</span>
        </div>
      ),
      actions: true,
    },
  ]

  const geneticTestPackages = [
    {
      id: 8,
      title: (
        <>
          {t("oncology:packages.genetic-test.cards.1.title.1")} <br />
          {t("oncology:packages.genetic-test.cards.1.title.2")}
        </>
      ),
      analysis: "blood",
      badges: {
        blood: t("components:card.analysis-type.blood"),
        report: t("oncology:packages.genetic-test.cards.1.report"),
      },
      content: (
        <>
          <p className="font-bold">{t("components:card.includes")}</p>
          <ul className="mt-2 flex flex-col gap-2">
            <li>{t("oncology:packages.genetic-test.cards.1.content.1")}</li>
          </ul>
        </>
      ),
      oldprice: (
        <p className="line-through">3000 {t("components:card.currency")}</p>
      ),
      currentPrice: (
        <div>
          1500{" "}
          <span className="text-base">{t("components:card.currency")}</span>
        </div>
      ),
      actions: true,
    },
    {
      id: 9,
      title: (
        <>
          {t("oncology:packages.genetic-test.cards.2.title.1")} <br />
          {t("oncology:packages.genetic-test.cards.2.title.2")}
        </>
      ),
      analysis: "saliva",
      badges: {
        blood: t("components:card.analysis-type.saliva"),
        report: t("oncology:packages.genetic-test.cards.2.report"),
      },
      content: (
        <>
          <p className="font-bold">{t("components:card.includes")}</p>
          <p className="mt-2">
            {t("oncology:packages.genetic-test.cards.2.content.1")}
          </p>
          <ul className="mt-2 flex flex-col">
            <li>{t("oncology:packages.genetic-test.cards.2.content.2")}</li>
            <li>{t("oncology:packages.genetic-test.cards.2.content.3")}</li>
            <li>{t("oncology:packages.genetic-test.cards.2.content.4")}</li>
          </ul>
        </>
      ),
      oldprice: (
        <p className="line-through">4000 {t("components:card.currency")}</p>
      ),
      currentPrice: (
        <div>
          1999{" "}
          <span className="text-base">{t("components:card.currency")}</span>
        </div>
      ),
      actions: true,
    },
  ]

  return {
    northstarData,
    hereditaryCancerData,
    bloodCancerData,
    geneticTestPackages,
  }
}

export const usePrenatalData = () => {
  const { t } = useTranslation()

  const unityScreen: CardData[] = [
    {
      id: 1,
      title: (
        <>
          {t("prenatal:packages.unity-screen.cards.1.title.1")} <br />
          {t("prenatal:packages.unity-screen.cards.1.title.2")}
        </>
      ),
      analysis: "blood",
      badges: {
        blood: t("components:card.analysis-type.blood-mother"),
        report: t("prenatal:packages.unity-screen.cards.1.report"),
      },
      content: (
        <>
          <p className="font-bold">{t("components:card.includes")}</p>
          <p className="mt-2">
            {t("prenatal:packages.unity-screen.cards.1.content.1")}
          </p>
          <ul>
            <li>{t("prenatal:packages.unity-screen.cards.1.content.2")}</li>
            <li>{t("prenatal:packages.unity-screen.cards.1.content.3")}</li>
            <li>{t("prenatal:packages.unity-screen.cards.1.content.4")}</li>
          </ul>
        </>
      ),
      oldprice: (
        <p className="line-through">2200 {t("components:card.currency")}</p>
      ),
      currentPrice: (
        <div>
          1099{" "}
          <span className="text-base">{t("components:card.currency")}</span>
        </div>
      ),
      actions: true,
    },
    {
      id: 2,
      title: (
        <>
          {t("prenatal:packages.unity-screen.cards.2.title.1")} <br />
          {t("prenatal:packages.unity-screen.cards.2.title.2")}
        </>
      ),
      analysis: "blood",
      badges: {
        blood: t("components:card.analysis-type.blood-mother"),
        report: t("prenatal:packages.unity-screen.cards.2.report"),
      },
      content: (
        <>
          <p className="font-bold">{t("components:card.includes")}</p>
          <p className="mt-2">
            {t("prenatal:packages.unity-screen.cards.2.content.1")}
          </p>
          <p>{t("prenatal:packages.unity-screen.cards.2.content.2")}</p>
        </>
      ),
      oldprice: (
        <p className="line-through">4600 {t("components:card.currency")}</p>
      ),
      currentPrice: (
        <div>
          2300{" "}
          <span className="text-base">{t("components:card.currency")}</span>
        </div>
      ),
      actions: true,
    },
    {
      id: 3,
      title: (
        <>
          {t("prenatal:packages.unity-screen.cards.3.title.1")} <br />
          {t("prenatal:packages.unity-screen.cards.3.title.2")}
        </>
      ),
      analysis: "blood",
      badges: {
        blood: t("components:card.analysis-type.blood-mother"),
        report: t("prenatal:packages.unity-screen.cards.3.report"),
      },
      content: (
        <>
          <p className="font-bold">{t("components:card.includes")}</p>
          <p className="mt-2">
            {t("prenatal:packages.unity-screen.cards.3.content.1")}
          </p>
          <ul>
            <li>{t("prenatal:packages.unity-screen.cards.3.content.2")}</li>
            <li>{t("prenatal:packages.unity-screen.cards.3.content.3")}</li>
            <li>{t("prenatal:packages.unity-screen.cards.3.content.4")}</li>
            <li>{t("prenatal:packages.unity-screen.cards.3.content.5")}</li>
          </ul>
        </>
      ),
      oldprice: (
        <p className="line-through">6000 {t("components:card.currency")}</p>
      ),
      currentPrice: (
        <div>
          3000{" "}
          <span className="text-base">{t("components:card.currency")}</span>
        </div>
      ),
      actions: true,
    },
    {
      id: 4,
      title: (
        <>
          {t("prenatal:packages.unity-screen.cards.4.title.1")} <br />
          {t("prenatal:packages.unity-screen.cards.4.title.2")}
        </>
      ),
      analysis: "blood",
      badges: {
        blood: t("components:card.analysis-type.blood-mother"),
        report: t("prenatal:packages.unity-screen.cards.4.report"),
      },
      content: (
        <>
          <p className="font-bold">{t("components:card.includes")}</p>
          <p className="mt-2">
            {t("prenatal:packages.unity-screen.cards.4.content.1")}
          </p>
          <p>{t("prenatal:packages.unity-screen.cards.4.content.2")}</p>
          <ul>
            <li>{t("prenatal:packages.unity-screen.cards.4.content.3")}</li>
            <li>{t("prenatal:packages.unity-screen.cards.4.content.4")}</li>
            <li>{t("prenatal:packages.unity-screen.cards.4.content.5")}</li>
          </ul>
        </>
      ),
      oldprice: (
        <p className="line-through">7300 {t("components:card.currency")}</p>
      ),
      currentPrice: (
        <div>
          3650{" "}
          <span className="text-base">{t("components:card.currency")}</span>
        </div>
      ),
      actions: true,
    },
    {
      id: 5,
      title: (
        <>
          {t("prenatal:packages.unity-screen.cards.5.title.1")} <br />
          {t("prenatal:packages.unity-screen.cards.5.title.2")}
        </>
      ),
      analysis: "blood",
      badges: {
        blood: t("components:card.analysis-type.blood-mother"),
        report: t("prenatal:packages.unity-screen.cards.5.report"),
      },
      content: (
        <>
          <p className="font-bold">{t("components:card.includes")}</p>
          <p className="mt-2">
            {t("prenatal:packages.unity-screen.cards.5.content.1")}
          </p>
          <p>{t("prenatal:packages.unity-screen.cards.5.content.2")}</p>
          <ul>
            <li>{t("prenatal:packages.unity-screen.cards.5.content.3")}</li>
            <li>{t("prenatal:packages.unity-screen.cards.5.content.4")}</li>
            <li>{t("prenatal:packages.unity-screen.cards.5.content.5")}</li>
            <li>{t("prenatal:packages.unity-screen.cards.5.content.6")}</li>
          </ul>
        </>
      ),
      oldprice: (
        <p className="line-through">11000 {t("components:card.currency")}</p>
      ),
      currentPrice: (
        <div>
          5500{" "}
          <span className="text-base">{t("components:card.currency")}</span>
        </div>
      ),
      actions: true,
    },
    {
      id: 6,
      title: (
        <>
          {t("prenatal:packages.unity-screen.cards.6.title")}
          <p className="text-sm leading-none">
            {t("prenatal:packages.unity-screen.cards.6.subtitle")}
          </p>
        </>
      ),
      analysis: "blood",
      badges: {
        blood: t("components:card.analysis-type.blood-mother"),
        report: t("prenatal:packages.unity-screen.cards.6.report"),
      },
      content: (
        <>
          <p className="font-bold">{t("components:card.includes")}</p>
          <p className="mt-2">
            {t("prenatal:packages.unity-screen.cards.6.content")}
          </p>
        </>
      ),
      oldprice: <p>&nbsp;</p>,
      currentPrice: <div>FREE</div>,
      actions: true,
    },
  ]

  const genderDetection = [
    {
      id: 7,
      title: (
        <>
          {t("prenatal:packages.gender-detection.cards.1.title.1")} <br />
          {t("prenatal:packages.gender-detection.cards.1.title.2")}
        </>
      ),
      analysis: "blood",
      badges: {
        blood: t("components:card.analysis-type.blood-mother"),
        report: t("prenatal:packages.gender-detection.cards.1.report"),
      },
      content: (
        <>
          <p className="font-bold">{t("components:card.includes")}</p>
          <p className="mt-2">
            {t("prenatal:packages.gender-detection.cards.1.content.1")}
          </p>
          <p>{t("prenatal:packages.gender-detection.cards.1.content.2")}</p>
          <p>{t("prenatal:packages.gender-detection.cards.1.content.3")}</p>
        </>
      ),
      oldprice: (
        <p className="line-through">3000 {t("components:card.currency")}</p>
      ),
      currentPrice: (
        <div>
          1500{" "}
          <span className="text-base">{t("components:card.currency")}</span>
        </div>
      ),
      actions: false,
    },
  ]

  return {
    unityScreen,
    genderDetection,
  }
}
