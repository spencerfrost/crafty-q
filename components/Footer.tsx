import { SITE } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-charcoal px-6 py-[22px] text-center text-[13px] text-body-dark">
      © {new Date().getFullYear()} {SITE.name} — {SITE.location}
    </footer>
  );
}
