export const PORTFOLIO = {
  title: "Our Portfolio",
  subtitle: "A rainbow of faces we've had the joy to paint",
};

export type Category =
  | "Animals"
  | "Fantasy & Magic"
  | "Characters"
  | "Nature & Florals"
  | "Abstract & FX";

export const CATEGORIES: readonly ("All" | Category)[] = [
  "All",
  "Animals",
  "Fantasy & Magic",
  "Characters",
  "Nature & Florals",
  "Abstract & FX",
];

export type GalleryItem = {
  id: string;
  category: Category;
  src: string;
  position: string;
  alt: string;
};

// `position` is the CSS object-position that centers the subject's face
// within the square object-cover crop (computed via face detection)
export const GALLERY: GalleryItem[] = [
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
