import { Section } from "@/components/ui/Section";
import { PARTY_PACKAGES, SERVICES } from "@/data/services";

export function Services() {
  return (
    <Section
      id="services"
      title={SERVICES.title}
      subtitle={SERVICES.subtitle}
    >
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
        <div className="flex flex-col">
          <h3 className="mb-5 font-display text-[22px] font-semibold text-plum">
            {SERVICES.partyHeading}
          </h3>
          <div className="flex flex-col gap-5">
            {PARTY_PACKAGES.map((pkg) => (
              <div
                key={pkg.name}
                className={`relative rounded-[20px] border-2 bg-white p-7 ${
                  pkg.popular ? "border-indigo" : "border-blush"
                }`}
              >
                {pkg.popular && (
                  <span className="absolute -top-[13px] right-6 rounded-full bg-indigo px-3 py-[5px] text-[11px] font-extrabold tracking-[0.05em] text-cream uppercase">
                    Most Popular
                  </span>
                )}
                <div className="mb-[10px] flex items-baseline justify-between gap-4">
                  <span className="font-display text-xl font-semibold text-charcoal">
                    {pkg.name}
                  </span>
                  <span className="text-[17px] font-extrabold text-indigo">
                    {pkg.price}
                  </span>
                </div>
                <p className="text-[15px] leading-[1.6] text-body-warm">
                  {pkg.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col">
          <h3 className="mb-5 font-display text-[22px] font-semibold text-plum">
            {SERVICES.corporateHeading}
          </h3>
          <div className="flex flex-1 flex-col justify-between rounded-[20px] bg-charcoal p-9">
            <div>
              <span className="mb-[14px] block font-display text-[22px] font-semibold text-cream">
                {SERVICES.corporate.title}
              </span>
              <p className="mb-6 text-[15px] leading-[1.7] text-body-dark">
                {SERVICES.corporate.description}
              </p>
            </div>
            <div>
              <div className="mb-4 text-[19px] font-extrabold text-blush">
                {SERVICES.corporate.note}
              </div>
              <a
                href="#contact"
                className="inline-flex items-center rounded-full bg-blush px-[30px] py-[14px] text-[15px] font-extrabold text-charcoal"
              >
                {SERVICES.corporate.ctaLabel}
              </a>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
