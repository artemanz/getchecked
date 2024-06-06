export const Faq = () => {
  const faq = [
    {
      question: "How does UNITY Complete work?",
      answer: `UNITY Complete takes advantage of a pregnancy's DNA (circulating cell-free DNA, ccfDNA) floating in the maternal bloodstream to assess for genetic changes. Some of these genetic changes are extremely small - like changes to single genes that can cause recessive conditions. Some of these genetic changes involve the presence of an entire extra chromosome (aneuploidies).

        Our specialized QCT technology enables us to be able to count the genetic information we see from both mom and baby in a blood sample, and determine if there are differences that could indicate a baby has a higher chance of being affected with one of these conditions.`,
    },
    {
      question: "What genetic conditions does UNITY Complete screen for?",
      answer: `UNITY Complete offers multiple genetic insights from a single maternal blood sample. The results you receive will depend on which tests your healthcare provider orders.

UNITY Aneuploidy NIPT screens pregnancies for chromosome conditions caused by extra or missing chromosomes including trisomy 21, trisomy 18, trisomy 13, monosomy X, XXX, XXY, and XYY. UNITY Aneuploidy NIPT can also tell you the baby's gender. For twin pregnancies, you will also learn if your twins are identical or fraternal.

Depending on your clinical picture, your doctor may also order UNITY Fetal RhD NIPT for moms who have a RhD- blood type, UNITY Fetal Antigen NIPT for moms who are alloimmunized to certain antigens, and 22q11.2 microdeletion analysis.

UNITY Fetal Risk Screen determines if a pregnant person is a carrier for cystic fibrosis, spinal muscular atrophy, sickle cell disease, alpha-thalassemia, or beta-thalassemia. If you're found to be a carrier for one of these conditions, the fetal DNA will be screened to determine if there is a high-chance or a low-chance for a pregnancy to be affected with a condition. In some cases, like twin pregnancies or those achieved with an egg donor, we are not able to perform a fetal risk assessment.

Your provider may also order carrier screening for fragile X syndrome. If the mom is determined to be a carrier for this, our assay can perform cell-free DNA analysis to determine if the fetus is a male- this would put the fetus at higher risk to develop Fragile X Syndrome.`,
    },
    {
      question: "What are the possible results I can get with UNITY Complete?",
      answer: `Possible results with UNITY Aneuploidy NIPT typically fall into low-risk fetus or high-risk fetus results.

A Low Risk Fetus result means that the chance your pregnancy is affected with the screened conditions is significantly reduced, but not eliminated.

A High-Risk Fetus result means there is an increased chance for your pregnancy to be affected with a specific condition. Confirmatory testing via chorionic villus sampling, amniocentesis, or postnatal evaluation is recommended.

Note: this result does not guarantee a healthy child and does not eliminate the possibility of other chromosome abnormalities, birth defects, or other genetic conditions.

UNITY Fetal Risk Screen provides maternal carrier screening results (reported as a positive carrier or negative carrier). If a pregnant person is found to be a carrier, fetal testing will automatically be performed via cell-free DNA analysis. Possible results from the fetal testing can fall into decreased/low-risk categories or increased/high-risk categories.`,
    },
  ]

  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">Frequently Asked Questions</h2>

        <ul>
          {faq.map((item) => (
            <li
              className="py-4 border-t cursor-pointer last:border-b border-foreground"
              key={item.question}
            >
              <details className="peer group">
                <summary className="flex items-center justify-between gap-8 list-none">
                  <p className="md:text-lg">{item.question}</p>
                  <div className="grid flex-shrink-0 w-10 text-xl font-semibold transition-transform rounded-full select-none bg-accent aspect-square place-content-center group-open:rotate-45">
                    +
                  </div>
                </summary>
              </details>
              <div className="grid grid-rows-[0fr] transition-[grid-template-rows,padding] duration-300 ease-linear peer-open:grid-rows-[1fr] peer-open:py-8">
                <div className="overflow-hidden text-sm whitespace-pre-line md:text-base">
                  {item.answer}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
