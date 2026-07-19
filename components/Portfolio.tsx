"use client";

import { useState } from "react";
import Image from "next/image";
import { Section } from "@/components/ui/Section";
import {
  CATEGORIES,
  GALLERY,
  PORTFOLIO,
  type Category,
} from "@/data/gallery";

const PILL = "rounded-full border-2 px-[22px] py-[10px] text-[14px] font-bold";
const PILL_INACTIVE = "border-mauve bg-transparent text-body-dark";

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<"All" | Category>(
    "All",
  );
  const [lightboxId, setLightboxId] = useState<string | null>(null);

  const filtered = GALLERY.filter(
    (item) => activeCategory === "All" || item.category === activeCategory,
  );
  const lightboxItem = GALLERY.find((item) => item.id === lightboxId);

  return (
    <Section
      id="portfolio"
      tone="charcoal"
      paddingY="py-[90px]"
      headerMargin="mb-9"
      title={PORTFOLIO.title}
      subtitle={PORTFOLIO.subtitle}
    >
      <div className="mb-11 flex flex-wrap justify-center gap-[14px]">
        {CATEGORIES.map((cat) => {
          const isActive = cat === activeCategory;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`${PILL} ${
                isActive ? "border-indigo bg-indigo text-cream" : PILL_INACTIVE
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
                style={{ objectPosition: item.position }}
              />
            </span>
          </button>
        ))}
      </div>

      {lightboxItem && (
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
                src={lightboxItem.src}
                alt={lightboxItem.alt}
                fill
                sizes="(min-width: 720px) 672px, 100vw"
                className="object-cover"
                style={{ objectPosition: lightboxItem.position }}
              />
            </div>
          </div>
        </div>
      )}
    </Section>
  );
}
