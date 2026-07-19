export const SERVICES = {
  title: "Services & Packages",
  subtitle: "From backyard birthdays to citywide festivals",
  partyHeading: "Private & Birthday Parties",
  corporateHeading: "Corporate & Community Events",
  corporate: {
    title: "Festivals, Grand Openings & Picnics",
    description:
      "High-volume booth service with hourly rate structures tailored to your event size, crowd flow, and duration. Let's build a plan that fits your budget.",
    note: "Contact for Custom Quote",
    ctaLabel: "Get a Quote",
  },
};

export type PartyPackage = {
  name: string;
  price: string;
  description: string;
  popular?: boolean;
};

export const PARTY_PACKAGES: PartyPackage[] = [
  {
    name: "Basic Package",
    price: "Starting at $75/hr",
    description:
      "Quick, fun designs — cheek art and simple characters, finished with a splash of glitter. Great for large groups who want everyone painted fast.",
  },
  {
    name: "Deluxe Package",
    price: "Starting at $120/hr",
    description:
      "Full-face masterpieces with glitter, gems, and intricate detail work — the showstopper option. This package may include fairy costume rentals, “let's play a game”, and cupcake options!",
    popular: true,
  },
];
