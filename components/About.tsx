import Image from "next/image";
import { Section } from "@/components/ui/Section";

const CERTIFICATIONS = [
  "FDA-Compliant, Cosmetic-Grade Paints",
  "Hypoallergenic & Washable Formulas",
  "Certified Face Painting Training",
  "Strict Sanitization Protocols",
  "Education in Child Services & Human Development",
  "Recreation & Leisure Studies",
];

export function About() {
  return (
    <Section id="about" tone="plum">
      <div className="grid grid-cols-1 items-center gap-14 md:grid-cols-[0.85fr_1.15fr]">
        <div className="relative h-[460px] w-[460px] overflow-hidden rounded-full border-[6px] border-cream">
          <Image
            src="/roz.png"
            alt="Roz, the artist behind Crafty Q Face Painting, wearing a monarch butterfly face paint design"
            fill
            sizes="(min-width: 768px) 40vw, 100vw"
            className="rounded-full object-cover"
          />
        </div>

        <div>
          <h2 className="mb-[18px] font-display text-[38px] font-semibold text-cream">
            Meet Roz
          </h2>
          <p className="mb-[30px] max-w-[560px] text-[17px] leading-[1.7] text-body-plum">
            Hi, I&apos;m Roz, the artist behind Crafty Q Face Painting. For
            over 20 years I&apos;ve been turning faces into canvases across
            London, Ontario, and surrounding areas. From backyard birthday
            parties to city festivals. My mission: make every event a
            little more magical, one brushstroke at a time.
          </p>

          <div className="grid grid-cols-1 gap-[14px] sm:grid-cols-2">
            {CERTIFICATIONS.map((cert) => (
              <div
                key={cert}
                className="flex items-center gap-3 rounded-[14px] bg-cream/10 px-4 py-[14px]"
              >
                <span className="flex h-[30px] w-[30px] flex-none items-center justify-center rounded-full bg-blush">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    aria-hidden="true"
                    className="text-charcoal"
                  >
                    <polyline
                      points="2,8 6,12 14,3"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span className="text-[14px] leading-[1.3] font-bold text-cream">
                  {cert}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
