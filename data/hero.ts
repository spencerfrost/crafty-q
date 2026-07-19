import { GALLERY, type GalleryItem } from "@/data/gallery";

// First id renders server-side and is preloaded as the LCP image;
// the rest load client-side, one rotation ahead of being shown.
const SLIDE_IDS = ["p1", "p5", "p9", "p3", "p6", "p7"];

export const HERO = {
  heading: "Bringing Magic & Color to Your Event with Crafty Q Face Painting",
  description:
    "Hand-painted smiles for birthday parties, festivals, and corporate events. Colorful creations for all ages!",
  slides: SLIDE_IDS.map((id): GalleryItem => {
    const item = GALLERY.find((g) => g.id === id);
    if (!item) throw new Error(`Unknown gallery id in hero slides: ${id}`);
    return item;
  }),
};
