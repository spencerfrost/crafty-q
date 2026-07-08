import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

type Variant = "pill" | "block";
type Size = "sm" | "lg";

type ButtonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
  href?: string;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "className"> &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className">;

const variantClass: Record<Variant, string> = {
  pill: "inline-flex items-center justify-center rounded-full bg-indigo font-bold text-cream disabled:opacity-70",
  block:
    "flex w-full items-center justify-center rounded-xl bg-indigo px-4 py-4 text-base font-extrabold text-cream shadow-[0_5px_0_var(--color-indigo-shadow)] disabled:opacity-70",
};

const pillSizeClass: Record<Size, string> = {
  sm: "px-7 py-3 text-[15px] shadow-[0_4px_0_var(--color-indigo-shadow)]",
  lg: "px-[38px] py-[18px] text-lg shadow-[0_6px_0_var(--color-indigo-shadow)]",
};

export function Button({
  variant = "pill",
  size = "sm",
  className,
  children,
  href,
  ...rest
}: ButtonProps) {
  const classes = [
    variantClass[variant],
    variant === "pill" ? pillSizeClass[size] : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={classes}
      {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
}
