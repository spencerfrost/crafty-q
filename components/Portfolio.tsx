"use client";

import { useState } from "react";
import Image from "next/image";

type Category = "Birthdays" | "Festivals" | "FX & Seasonal";

const CATEGORIES: readonly ("All" | Category)[] = [
  "All",
  "Birthdays",
  "Festivals",
  "FX & Seasonal",
];

const GALLERY: { id: string; category: Category; src: string; alt: string }[] = [
  {
    id: "p1",
    category: "Birthdays",
    src: "/facepaint4.jpg",
    alt: "Child with pink and yellow petal face paint around the eyes",
  },
  {
    id: "p2",
    category: "Festivals",
    src: "/facepaint3.jpg",
    alt: "Child with a glittery pink and gold masquerade-style face paint design",
  },
  {
    id: "p3",
    category: "FX & Seasonal",
    src: "/facepaint2.jpg",
    alt: "Child with a red and white fox face paint design",
  },
  {
    id: "p4",
    category: "Birthdays",
    src: "/facepaint1.jpg",
    alt: "Child with pink heart and butterfly face paint",
  },
  {
    id: "p5",
    category: "Festivals",
    src: "/placeholders/gallery.svg",
    alt: "Festivals face painting example",
  },
  {
    id: "p6",
    category: "FX & Seasonal",
    src: "/placeholders/gallery.svg",
    alt: "FX & Seasonal face painting example",
  },
  {
    id: "p7",
    category: "Birthdays",
    src: "/placeholders/gallery.svg",
    alt: "Birthdays face painting example",
  },
  {
    id: "p8",
    category: "Festivals",
    src: "/placeholders/gallery.svg",
    alt: "Festivals face painting example",
  },
];

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<"All" | Category>(
    "All",
  );
  const [lightboxId, setLightboxId] = useState<string | null>(null);

  const filtered = GALLERY.filter(
    (item) => activeCategory === "All" || item.category === activeCategory,
  );

  return (
    <section
      id="portfolio"
      className="scroll-mt-[84px] bg-charcoal px-6 py-[90px] md:px-14"
    >
      <div className="mb-9 text-center">
        <h2 className="mb-3 font-display text-[40px] font-semibold text-cream">
          Our Portfolio
        </h2>
        <p className="text-[17px] text-body-dark">
          A rainbow of faces we&apos;ve had the joy to paint
        </p>
      </div>

      <div className="mb-11 flex flex-wrap justify-center gap-[14px]">
        {CATEGORIES.map((cat) => {
          const isActive = cat === activeCategory;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full border-2 px-[22px] py-[10px] text-[14px] font-bold ${
                isActive
                  ? "border-indigo bg-indigo text-cream"
                  : "border-[#8A6685] bg-transparent text-body-dark"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {filtered.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setLightboxId(item.id)}
            className="flex flex-col gap-2 text-left"
          >
            <span className="relative block aspect-square overflow-hidden rounded-[18px]">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover"
              />
            </span>
            <span className="text-center text-[13px] font-bold text-blush">
              {item.category}
            </span>
          </button>
        ))}
      </div>

      {lightboxId && (
        <div
          className="fixed inset-0 z-30 flex items-center justify-center bg-black/80 p-6"
          onClick={() => setLightboxId(null)}
        >
          <div
            className="relative w-full max-w-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Close"
              onClick={() => setLightboxId(null)}
              className="absolute -top-10 right-0 text-2xl font-bold text-cream"
            >
              &times;
            </button>
            <div className="relative aspect-square w-full overflow-hidden rounded-[18px]">
              <Image
                src={
                  GALLERY.find((g) => g.id === lightboxId)?.src ??
                  "/placeholders/gallery.svg"
                }
                alt={GALLERY.find((g) => g.id === lightboxId)?.alt ?? ""}
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
