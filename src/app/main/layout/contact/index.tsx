import { Form } from "./_components"

export const Contact = () => {
  return (
    <section className="section" id="contacts">
      <div className="container">
        <h2 className="mb-2 section-title">Contact</h2>
        <p className="mb-10 text-center lg:text-lg">
          If you have a query - we'll do our best to assist you.
        </p>

        <div className="flex flex-col gap-10 md:flex-row-reverse md:*:basis-1/2 md:gap-4">
          <Form />

          <div>
            <div className="aspect-square">Map 1</div>
            <div className="aspect-square">Map 2</div>
            <div className="aspect-square">Map 3</div>
          </div>
        </div>
      </div>
    </section>
  )
}
