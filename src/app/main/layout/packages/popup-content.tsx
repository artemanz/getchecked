export const PopupContent = ({ id, hide }: { id: number; hide(): void }) => {
  const PopupWrap = ({
    children,
    title,
  }: {
    children: React.ReactNode
    title: string
  }) => (
    <div className="border border-accent bg-accent-light rounded-xl px-4 py-6 flex flex-col md:p-6">
      <div className="flex justify-between gap-8 items-center mb-10">
        <h3 className="font-semibold md:text-lg">{title}</h3>
        <button
          onClick={hide}
          className="w-10 aspect-square bg-accent rounded-full flex-shrink-0 font-semibold rotate-45 text-xl transition-colors hover:bg-accent/75"
        >
          +
        </button>
      </div>

      {children}
    </div>
  )

  switch (id) {
    case 1:
      return (
        <PopupWrap title="NIPT UNITY Aneuploidy Screen">
          <div className="overflow-y-auto flex flex-col gap-2 custom-scrollbar">
            <p>
              <b>Main Checks</b>
            </p>
            <p>
              <b>T13, T18, T21:</b>
            </p>
            <p>
              T13 (Trisomy 13): Checks for Patau syndrome, caused by an extra
              chromosome 13.
            </p>
            <p>
              T18 (Trisomy 18): Checks for Edwards syndrome, caused by an extra
              chromosome 18.
            </p>
            <p>
              T21 (Trisomy 21): Checks for Down syndrome, caused by an extra
              chromosome 21.
            </p>

            <p className="mt-8">
              <b>Sex Chromosomes:</b>
            </p>

            <p>
              Checks for abnormalities in the X and Y chromosomes, which
              determine the baby's sex and can reveal conditions like Turner
              syndrome (missing an X chromosome in girls) or Klinefelter
              syndrome (an extra X chromosome in boys).
            </p>

            <p className="mt-8">
              <b>Optional Checks</b>
            </p>
            <p className="mt-2">
              <b>Fetal Sex:</b>
            </p>
            <p>Can determine if the baby is a boy or a girl.</p>
            <p className="mt-2">
              <b>Fetal RhD:</b>
            </p>

            <p>
              Checks if the baby has the RhD protein on their red blood cells,
              important if the mother is RhD-negative.
            </p>

            <p className="mt-2">
              <b>22q:</b>
            </p>

            <p>
              Checks for 22q11.2 deletion syndrome, caused by a small missing
              piece of chromosome 22, which can lead to various health issues.
            </p>

            <p className="mt-8">
              <b>Sample Type</b>
            </p>
            <p>
              The sample for this test is a blood sample from the mother. It
              involves drawing a small amount of blood, usually from the arm, to
              be analyzed in a lab.
            </p>

            <p className="mt-8">
              <b>Summary</b>
            </p>
            <p>
              NIPT UNITY Aneuploidy Screen: Checks for major chromosomal
              abnormalities (T13, T18, T21) and sex chromosome conditions.
            </p>
            <p>
              Optional Checks: Fetal sex, Fetal RhD status, and 22q11.2 deletion
              syndrome.
            </p>
            <p>Sample Type: Blood sample from the mother.</p>
          </div>
        </PopupWrap>
      )
    case 2:
      return (
        <PopupWrap title="UNITY Carrier Screen">
          <div className="overflow-y-auto flex flex-col gap-2 custom-scrollbar">
            <p>
              This test checks if the mother is a carrier for certain genetic
              disorders. Being a carrier means you have a change (mutation) in
              one of your genes that could potentially be passed on to your
              baby, even if you don't have the disorder yourself. Common
              conditions checked by carrier screens include cystic fibrosis,
              spinal muscular atrophy, and various other inherited diseases.
            </p>

            <p className="mt-8">
              <b>sgNIPT Reflex</b>
            </p>

            <p>
              If the carrier screen shows that the mother is a carrier for
              certain genetic conditions, the test can reflex to a specialized
              non-invasive prenatal testing (sgNIPT) to further check if the
              baby has inherited these conditions. This second step uses the
              same blood sample but focuses on the baby's DNA.
            </p>

            <p className="mt-8">
              <b>Sample Type</b>
            </p>
            <p>
              The sample for this test is a blood sample from the mother. It
              involves drawing a small amount of blood, usually from the arm, to
              be analyzed in a lab.
            </p>

            <p className="mt-8">
              <b>Summary</b>
            </p>
            <p>
              UNITY Carrier Screen: Checks if the mother is a carrier of genetic
              disorders.
            </p>
            <p>
              sgNIPT Reflex: Further checks the baby's DNA for specific
              conditions if the mother is found to be a carrier.
            </p>
            <p>Sample Type: Blood sample from the mother.</p>
          </div>
        </PopupWrap>
      )
    case 3:
      return (
        <PopupWrap title="UNITY Aneuploidy Screen w/ Fetal Antigen NIPT">
          <div className="overflow-y-auto flex flex-col gap-2 custom-scrollbar">
            <p>
              The UNITY Aneuploidy Screen with Fetal Antigen NIPT is a prenatal
              test that examines the baby's DNA found in the mother's blood for
              various genetic conditions and other important health markers.
              Here's a simpler explanation:
            </p>
            <p className="mt-8">
              <b>Main Checks</b>
            </p>
            <p>
              <b>T13, T18, T21:</b>
            </p>
            <p>
              T13 (Trisomy 13): Checks for Patau syndrome, caused by an extra
              chromosome 13.
            </p>
            <p>
              T18 (Trisomy 18): Checks for Edwards syndrome, caused by an extra
              chromosome 18.
            </p>
            <p>
              T21 (Trisomy 21): Checks for Down syndrome, caused by an extra
              chromosome 21.
            </p>

            <p className="mt-2">
              <b>22q:</b>
            </p>

            <p>
              Checks for 22q11.2 deletion syndrome, caused by a small missing
              piece of chromosome 22, which can lead to various health issues.
            </p>

            <p className="mt-2">
              <b>Sex Chromosomes:</b>
            </p>

            <p>
              Checks for abnormalities in the X and Y chromosomes, which
              determine the baby's sex and can reveal conditions like Turner
              syndrome (missing an X chromosome in girls) or Klinefelter
              syndrome (an extra X chromosome in boys).
            </p>

            <p className="mt-8">
              <b>Optional Checks</b>
            </p>
            <p className="mt-2">
              <b>Fetal Sex:</b>
            </p>
            <p>Can determine if the baby is a boy or a girl.</p>
            <p className="mt-2">
              <b>Fetal RhD:</b>
            </p>
            <p>
              Checks if the baby has the RhD protein on their red blood cells,
              important if the mother is RhD-negative.
            </p>

            <p className="mt-2">
              <b>Fetal Rbc Antigen NIPT:</b>
            </p>

            <p>
              Checks for specific antigens on the baby's red blood cells that
              could be important for the baby's blood compatibility and health.
            </p>

            <p className="mt-8">
              <b>Sample Type</b>
            </p>
            <p>
              The sample for this test is a blood sample from the mother. It
              involves drawing a small amount of blood, usually from the arm, to
              be analyzed in a lab.
            </p>

            <p className="mt-8">
              <b>Summary</b>
            </p>
            <p>
              UNITY Aneuploidy Screen w/ Fetal Antigen NIPT is a prenatal test
              that examines the baby's DNA found in the mother's blood for
              various genetic conditions and other important health markers.
            </p>
            <p>
              NIPT UNITY Aneuploidy Screen: Checks for major chromosomal
              abnormalities (T13, T18, T21) and sex chromosome conditions.
            </p>
            <p>
              Optional Checks: Fetal sex, Fetal RhD status, Fetal Rbc Antigen
              NIPT.
            </p>
            <p>Sample Type: Blood sample from the mother.</p>
          </div>
        </PopupWrap>
      )
    case 4:
      return (
        <PopupWrap title="UNITY Complete NIPT+Carrier">
          <div className="overflow-y-auto flex flex-col gap-2 custom-scrollbar">
            <p>
              This comprehensive prenatal test combines two main types of
              screenings: the Carrier Screen and the Aneuploidy Screen. Here's a
              simpler explanation:
            </p>
            <p className="mt-8">
              <b>Main Checks</b>
            </p>
            <p>
              <b>Carrier Screen:</b>
            </p>
            <p>
              This part of the test checks if the mother is a carrier for
              certain genetic disorders. Being a carrier means you have a change
              (mutation) in one of your genes that could potentially be passed
              on to your baby, even if you don't have the disorder yourself.
              Common conditions checked by carrier screens include cystic
              fibrosis, spinal muscular atrophy, and various other inherited
              diseases.
            </p>

            <p className="mt-2">
              <b>sgNIPT Reflex:</b>
            </p>

            <p>
              If the carrier screen shows that the mother is a carrier for
              certain genetic conditions, the test can reflex to a specialized
              non-invasive prenatal testing (sgNIPT) to further check if the
              baby has inherited these conditions. This second step uses the
              same blood sample but focuses on the baby's DNA.
            </p>

            <p className="mt-2">
              <b>Aneuploidy Screen:</b>
            </p>

            <p>
              This part of the test checks for major chromosomal abnormalities:
            </p>

            <p className="mt-2">
              <b>T13, T18, T21:</b>
            </p>

            <p>
              T13 (Trisomy 13): Checks for Patau syndrome, caused by an extra
              chromosome 13.
            </p>
            <p>
              T18 (Trisomy 18): Checks for Edwards syndrome, caused by an extra
              chromosome 18.
            </p>
            <p>
              T21 (Trisomy 21): Checks for Down syndrome, caused by an extra
              chromosome 21.
            </p>

            <p className="mt-2">
              <b>Sex Chromosomes:</b>
            </p>

            <p>
              Checks for abnormalities in the X and Y chromosomes, which
              determine the baby's sex and can reveal conditions like Turner
              syndrome (missing an X chromosome in girls) or Klinefelter
              syndrome (an extra X chromosome in boys).
            </p>

            <p className="mt-8">
              <b>Optional Checks</b>
            </p>
            <p className="mt-2">
              <b>Fetal Sex:</b>
            </p>
            <p>Can determine if the baby is a boy or a girl.</p>
            <p className="mt-2">
              <b>Fetal RhD:</b>
            </p>
            <p>
              Checks if the baby has the RhD protein on their red blood cells,
              important if the mother is RhD-negative.
            </p>

            <p className="mt-2">
              <b>22q:</b>
            </p>

            <p>
              Checks for 22q11.2 deletion syndrome, caused by a small missing
              piece of chromosome 22, which can lead to various health issues.
            </p>

            <p className="mt-8">
              <b>Sample Type</b>
            </p>
            <p>
              The sample for this test is a blood sample from the mother. It
              involves drawing a small amount of blood, usually from the arm, to
              be analyzed in a lab.
            </p>

            <p className="mt-8">
              <b>Summary</b>
            </p>
            <p>
              Carrier Screen: Checks if the mother is a carrier of genetic
              disorders.
            </p>
            <p>
              sgNIPT Reflex: Further checks the baby's DNA for specific
              conditions if the mother is found to be a carrier.
            </p>
            <p>
              Aneuploidy Screen: Checks for major chromosomal abnormalities
              (T13, T18, T21) and sex chromosome conditions.
            </p>
            <p>
              Optional Checks: Fetal sex, Fetal RhD status, and 22q11.2 deletion
              syndrome.
            </p>

            <p>Sample Type: Blood sample from the mother.</p>
          </div>
        </PopupWrap>
      )
    case 5:
      return (
        <PopupWrap title="UNITY Complete w/ Fetal Antigen NIPT">
          <div className="overflow-y-auto flex flex-col gap-2 custom-scrollbar">
            <p>
              This comprehensive prenatal test combines the Carrier Screen,
              Aneuploidy Screen, and checks for additional fetal antigens.
              Here's a simpler explanation:
            </p>
            <p className="mt-8">
              <b>Main Checks</b>
            </p>
            <p>
              <b>Carrier Screen:</b>
            </p>
            <p>
              This part of the test checks if the mother is a carrier for
              certain genetic disorders. Being a carrier means you have a change
              (mutation) in one of your genes that could potentially be passed
              on to your baby, even if you don't have the disorder yourself.
              Common conditions checked by carrier screens include cystic
              fibrosis, spinal muscular atrophy, and various other inherited
              diseases.
            </p>

            <p className="mt-2">
              <b>sgNIPT Reflex:</b>
            </p>

            <p>
              If the carrier screen shows that the mother is a carrier for
              certain genetic conditions, the test can reflex to a specialized
              non-invasive prenatal testing (sgNIPT) to further check if the
              baby has inherited these conditions. This second step uses the
              same blood sample but focuses on the baby's DNA.
            </p>

            <p className="mt-2">
              <b>Aneuploidy Screen:</b>
            </p>

            <p>
              This part of the test checks for major chromosomal abnormalities:
            </p>

            <p className="mt-2">
              <b>T13, T18, T21:</b>
            </p>

            <p>
              T13 (Trisomy 13): Checks for Patau syndrome, caused by an extra
              chromosome 13.
            </p>
            <p>
              T18 (Trisomy 18): Checks for Edwards syndrome, caused by an extra
              chromosome 18.
            </p>
            <p>
              T21 (Trisomy 21): Checks for Down syndrome, caused by an extra
              chromosome 21.
            </p>

            <p className="mt-2">
              <b>Sex Chromosomes:</b>
            </p>

            <p>
              Checks for abnormalities in the X and Y chromosomes, which
              determine the baby's sex and can reveal conditions like Turner
              syndrome (missing an X chromosome in girls) or Klinefelter
              syndrome (an extra X chromosome in boys).
            </p>

            <p className="mt-8">
              <b>Optional Checks</b>
            </p>
            <p className="mt-2">
              <b>Fetal Sex:</b>
            </p>
            <p>Can determine if the baby is a boy or a girl.</p>

            <p className="mt-2">
              <b>Fetal RhD:</b>
            </p>
            <p>
              Checks if the baby has the RhD protein on their red blood cells,
              important if the mother is RhD-negative.
            </p>

            <p className="mt-2">
              <b>Fetal Rbc Antigen NIPT:</b>
            </p>
            <p>
              Checks for specific antigens on the baby's red blood cells that
              could be important for the baby's blood compatibility and health.
            </p>

            <p className="mt-2">
              <b>22q:</b>
            </p>

            <p>
              Checks for 22q11.2 deletion syndrome, caused by a small missing
              piece of chromosome 22, which can lead to various health issues.
            </p>

            <p className="mt-8">
              <b>Sample Type</b>
            </p>
            <p>
              The sample for this test is a blood sample from the mother. It
              involves drawing a small amount of blood, usually from the arm, to
              be analyzed in a lab.
            </p>

            <p className="mt-8">
              <b>Summary</b>
            </p>
            <p>
              Carrier Screen: Checks if the mother is a carrier of genetic
              disorders.
            </p>
            <p>
              sgNIPT Reflex: Further checks the baby's DNA for specific
              conditions if the mother is found to be a carrier.
            </p>
            <p>
              Aneuploidy Screen: Checks for major chromosomal abnormalities
              (T13, T18, T21) and sex chromosome conditions.
            </p>
            <p>
              Optional Checks: Fetal sex, Fetal RhD status, specific red blood
              cell antigens, and 22q11.2 deletion syndrome.
            </p>

            <p>Sample Type: Blood sample from the mother.</p>
          </div>
        </PopupWrap>
      )
    default:
      return null
  }
}
