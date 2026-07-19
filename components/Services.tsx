export function Services() {
  return (
    <section
      id="services"
      className="scroll-mt-[84px] bg-cream px-6 py-[100px] md:px-14"
    >
      <div className="mb-14 text-center">
        <h2 className="mb-3 font-display text-[40px] font-semibold text-charcoal">
          Services &amp; Packages
        </h2>
        <p className="text-[17px] text-body-warm">
          From backyard birthdays to citywide festivals
        </p>
      </div>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
        <div className="flex flex-col">
          <h3 className="mb-5 font-display text-[22px] font-semibold text-plum">
            Private &amp; Birthday Parties
          </h3>
          <div className="flex flex-col gap-5">
            <div className="rounded-[20px] border-2 border-blush bg-white p-7">
              <div className="mb-[10px] flex items-baseline justify-between gap-4">
                <span className="font-display text-xl font-semibold text-charcoal">
                  Basic Package
                </span>
                <span className="text-[17px] font-extrabold text-indigo">
                  Starting at $75/hr
                </span>
              </div>
              <p className="text-[15px] leading-[1.6] text-body-warm">
                Quick, fun designs — cheek art and simple characters, finished with a splash of glitter. Great for large groups who want everyone painted fast.
              </p>
            </div>

            <div className="relative rounded-[20px] border-2 border-indigo bg-white p-7">
              <span className="absolute -top-[13px] right-6 rounded-full bg-indigo px-3 py-[5px] text-[11px] font-extrabold tracking-[0.05em] text-cream uppercase">
                Most Popular
              </span>
              <div className="mb-[10px] flex items-baseline justify-between gap-4">
                <span className="font-display text-xl font-semibold text-charcoal">
                  Deluxe Package
                </span>
                <span className="text-[17px] font-extrabold text-indigo">
                  Starting at $120/hr
                </span>
              </div>
              <p className="text-[15px] leading-[1.6] text-body-warm">
                Full-face masterpieces with glitter, gems, and intricate
                detail work — the showstopper option. This package may
                include fairy costume rentals, &ldquo;let&apos;s play a
                game&rdquo;, and cupcake options!
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <h3 className="mb-5 font-display text-[22px] font-semibold text-plum">
            Corporate &amp; Community Events
          </h3>
          <div className="flex flex-1 flex-col justify-between rounded-[20px] bg-charcoal p-9">
            <div>
              <span className="mb-[14px] block font-display text-[22px] font-semibold text-cream">
                Festivals, Grand Openings &amp; Picnics
              </span>
              <p className="mb-6 text-[15px] leading-[1.7] text-body-dark">
                High-volume booth service with hourly rate structures
                tailored to your event size, crowd flow, and duration.
                Let&apos;s build a plan that fits your budget.
              </p>
            </div>
            <div>
              <div className="mb-4 text-[19px] font-extrabold text-blush">
                Contact for Custom Quote
              </div>
              <a
                href="#contact"
                className="inline-flex items-center rounded-full bg-blush px-[30px] py-[14px] text-[15px] font-extrabold text-charcoal"
              >
                Get a Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
