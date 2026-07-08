"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

const LINKS = [
  { label: "Home", href: "#home" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 border-b border-charcoal/8 bg-cream">
      <div className="flex h-[84px] items-center justify-between px-6 md:px-14">
        <a
          href="#home"
          className="flex items-center gap-3 leading-none"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/crafty-q-logo.png"
            alt=""
            width={64}
            height={66}
            className="h-14 w-auto md:h-16"
          />
          <span className="flex flex-col">
            <span className="font-display text-2xl font-bold text-plum md:text-[26px]">
              Crafty Q
            </span>
            <span className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-indigo">
              Facepainting
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-9 md:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[15px] font-bold text-charcoal"
            >
              {link.label}
            </a>
          ))}
          <Button href="#contact">Book Your Event</Button>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span
            className={`h-0.5 w-6 bg-charcoal transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
          />
          <span className={`h-0.5 w-6 bg-charcoal transition-opacity ${open ? "opacity-0" : ""}`} />
          <span
            className={`h-0.5 w-6 bg-charcoal transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {open && (
        <div className="flex flex-col gap-1 border-t border-charcoal/8 bg-cream px-6 pb-6 pt-2 md:hidden">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-3 text-[15px] font-bold text-charcoal"
            >
              {link.label}
            </a>
          ))}
          <Button
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2"
          >
            Book Your Event
          </Button>
        </div>
      )}
    </header>
  );
}
