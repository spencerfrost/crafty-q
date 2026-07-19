"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import type { GalleryItem } from "@/data/gallery";

const INTERVAL_MS = 5500;

export function HeroSlideshow({ slides }: { slides: GalleryItem[] }) {
  const [active, setActive] = useState(0);
  // Slides mount one rotation before they're shown, so each image fetches
  // while hidden instead of all at once on page load
  const [mountedCount, setMountedCount] = useState(1);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = setInterval(() => {
      setActive((i) => (i + 1) % slides.length);
    }, INTERVAL_MS);
    return () => clearInterval(timer);
  }, [slides.length]);

  useEffect(() => {
    setMountedCount((count) =>
      Math.max(count, Math.min(active + 2, slides.length)),
    );
  }, [active, slides.length]);

  return (
    <>
      {slides.slice(0, mountedCount).map((slide, i) => (
        <Image
          key={slide.id}
          src={slide.src}
          alt={slide.alt}
          fill
          preload={i === 0}
          sizes="(min-width: 768px) 520px, 90vw"
          aria-hidden={i !== active}
          className={`object-cover transition-opacity duration-1000 ${
            i === active ? "opacity-100" : "opacity-0"
          }`}
          style={{ objectPosition: slide.position }}
        />
      ))}
    </>
  );
}
