"use client";

import { useState } from "react";
import Image from "next/image";
import { Section } from "@/components/ui/Section";

type Category =
  | "Animals"
  | "Fantasy & Magic"
  | "Characters"
  | "Nature & Florals"
  | "Abstract & FX";

const CATEGORIES: readonly ("All" | Category)[] = [
  "All",
  "Animals",
  "Fantasy & Magic",
  "Characters",
  "Nature & Florals",
  "Abstract & FX",
];

// `position` is the CSS object-position that centers the subject's face
// within the square object-cover crop (computed via face detection)
const GALLERY: {
  id: string;
  category: Category;
  src: string;
  position: string;
  alt: string;
}[] = [
  {
    id: "p1",
    category: "Abstract & FX",
    src: "/facepaint/pink-hearts.jpg",
    position: "50% 10%",
    alt: "Girl with glittery pink hearts painted on her forehead and cheek",
  },
  {
    id: "p2",
    category: "Animals",
    src: "/facepaint/red-fox.jpg",
    position: "50% 50%",
    alt: "Boy with a red and white fox face paint design",
  },
  {
    id: "p3",
    category: "Animals",
    src: "/facepaint/teal-butterfly.jpg",
    position: "50% 45%",
    alt: "Boy with a teal glitter butterfly painted across his eyes",
  },
  {
    id: "p4",
    category: "Abstract & FX",
    src: "/facepaint/glitter-hearts.jpg",
    position: "50% 100%",
    alt: "Woman with pink and red glittery hearts and swirls painted around her eye",
  },
  {
    id: "p5",
    category: "Fantasy & Magic",
    src: "/facepaint/unicorn.jpg",
    position: "50% 49%",
    alt: "Girl with a golden unicorn horn and pink swirl face paint",
  },
  {
    id: "p6",
    category: "Characters",
    src: "/facepaint/spiderman.jpg",
    position: "50% 34%",
    alt: "Boy with a red Spiderman mask design painted across his eyes and forehead",
  },
  {
    id: "p7",
    category: "Nature & Florals",
    src: "/facepaint/floral-eye.jpg",
    position: "50% 25%",
    alt: "Girl with pastel blue and pink flowers painted around her eye",
  },
  {
    id: "p8",
    category: "Fantasy & Magic",
    src: "/facepaint/party-group.jpg",
    position: "59% 50%",
    alt: "Three kids at a party showing off dragon, clown, and unicorn face paint",
  },
  {
    id: "p9",
    category: "Fantasy & Magic",
    src: "/facepaint/green-dragon.jpg",
    position: "50% 44%",
    alt: "Boy with a green dragon face paint design",
  },
  {
    id: "p10",
    category: "Nature & Florals",
    src: "/facepaint/golden-flowers.jpg",
    position: "50% 100%",
    alt: "Woman with golden swirls and white flowers painted around her eye",
  },
  {
    id: "p11",
    category: "Animals",
    src: "/facepaint/turtle.jpg",
    position: "50% 39%",
    alt: "Boy with a green turtle painted on his cheek",
  },
  {
    id: "p12",
    category: "Fantasy & Magic",
    src: "/facepaint/unicorn-profile.jpg",
    position: "50% 30%",
    alt: "Profile of a girl with golden unicorn horn and pink swirl face paint",
  },
  {
    id: "p13",
    category: "Nature & Florals",
    src: "/facepaint/fairy-leaves.jpg",
    position: "50% 100%",
    alt: "Woman with green fairy leaves and vines painted around her eyes",
  },
  {
    id: "p14",
    category: "Abstract & FX",
    src: "/facepaint/blue-wave.jpg",
    position: "50% 70%",
    alt: "Woman with a sparkling blue wave design painted across her eyes",
  },
  {
    id: "p15",
    category: "Animals",
    src: "/facepaint/bass-fish.jpg",
    position: "50% 85%",
    alt: "Boy with a leaping bass fish and Bass Pro Shops logo painted on his forehead",
  },
  {
    id: "p16",
    category: "Abstract & FX",
    src: "/facepaint/peace-sign.jpg",
    position: "50% 75%",
    alt: "Woman with a blue peace sign and gold glitter painted on her cheek",
  },
  {
    id: "p17",
    category: "Fantasy & Magic",
    src: "/facepaint/snowflakes.jpg",
    position: "50% 75%",
    alt: "Girl with sparkling white winter snowflakes painted on her forehead and cheek",
  },
  {
    id: "p18",
    category: "Characters",
    src: "/facepaint/sugar-skull.jpg",
    position: "50% 55%",
    alt: "Woman in full purple and white sugar skull face paint with spider web details",
  },
  {
    id: "p19",
    category: "Animals",
    src: "/facepaint/leopard.jpg",
    position: "50% 20%",
    alt: "Boy with a yellow spotted leopard face paint design with whiskers",
  },
  {
    id: "p20",
    category: "Animals",
    src: "/facepaint/shark.jpg",
    position: "50% 0%",
    alt: "Boy with a blue shark with sparkly fins painted on his cheek",
  },
];

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
      title="Our Portfolio"
      subtitle="A rainbow of faces we've had the joy to paint"
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
            <span className="text-center text-[13px] font-bold text-blush">
              {item.category}
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
