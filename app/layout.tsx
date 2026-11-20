import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Fredoka, Nunito } from "next/font/google";
import { SITE } from "@/data/site";
import "./globals.css";

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const DESCRIPTION =
  "Professional face painting for birthday parties, festivals, and corporate events in London, Ontario & area — safe, vibrant, and unforgettable.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: "Face Painting in London, Ontario | Crafty Q Face Painting",
  description: DESCRIPTION,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Crafty Q Face Painting — London, Ontario",
    description: DESCRIPTION,
    url: "/",
    siteName: SITE.name,
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE.url}/#business`,
  name: SITE.name,
  description: DESCRIPTION,
  url: SITE.url,
  image: `${SITE.url}/facepaint/party-group.jpg`,
  logo: `${SITE.url}/crafty-q-logo.png`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "London",
    addressRegion: "ON",
    addressCountry: "CA",
  },
  areaServed: {
    "@type": "City",
    name: "London",
    containedInPlace: { "@type": "AdministrativeArea", name: "Ontario" },
  },
  priceRange: "$75–$120/hr",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Face Painting Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Birthday & Private Party Face Painting",
          areaServed: SITE.serviceArea,
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Festival, Corporate & Community Event Face Painting",
          areaServed: SITE.serviceArea,
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fredoka.variable} ${nunito.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-body">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
