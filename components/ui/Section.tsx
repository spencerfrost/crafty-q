import type { ReactNode } from "react";

const TONES = {
  cream: {
    bg: "bg-cream",
    title: "text-charcoal",
    subtitle: "text-body-warm",
  },
  charcoal: {
    bg: "bg-charcoal",
    title: "text-cream",
    subtitle: "text-body-dark",
  },
  plum: {
    bg: "bg-plum",
    title: "text-cream",
    subtitle: "text-body-plum",
  },
} as const;

type SectionProps = {
  id: string;
  tone?: keyof typeof TONES;
  title?: string;
  subtitle?: string;
  paddingY?: string;
  headerMargin?: string;
  children: ReactNode;
};

export function Section({
  id,
  tone = "cream",
  title,
  subtitle,
  paddingY = "py-[100px]",
  headerMargin = "mb-14",
  children,
}: SectionProps) {
  const colors = TONES[tone];

  return (
    <section
      id={id}
      className={`scroll-mt-nav px-6 md:px-14 ${colors.bg} ${paddingY}`}
    >
      {title && (
        <div className={`${headerMargin} text-center`}>
          <h2
            className={`mb-3 font-display text-[40px] font-semibold ${colors.title}`}
          >
            {title}
          </h2>
          {subtitle && (
            <p className={`text-[17px] ${colors.subtitle}`}>{subtitle}</p>
          )}
        </div>
      )}
      {children}
    </section>
  );
}
