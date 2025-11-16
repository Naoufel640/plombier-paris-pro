import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";
import { mohaSans } from "./fonts"; // ← Inter via next/font/google

export const metadata: Metadata = {
  metadataBase: new URL("https://www.plombier-paris-pro.fr"),
  title: { default: "Plombier Paris Pro", template: "%s – Plombier Paris Pro" },
  description:
    "Plombier à Paris : dépannage en urgence, recherche de fuite, installations et rénovations. Intervention rapide, devis clair, travail garanti.",
  openGraph: {
    title: "Plombier Paris Pro",
    siteName: "Plombier Paris Pro",
    description:
      "Dépannage, installations, rénovation à Paris. 24/7, devis gratuit.",
    type: "website",
    url: "https://www.plombier-paris-pro.fr",
    locale: "fr_FR",
    images: ["/logo.png"],
  },
  icons: { icon: "/logo.png" },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "/" },
};

export const viewport = { themeColor: "#0ea5e9" };

export const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Plumber",
  name: "Plombier Paris Pro",
  image: "https://www.plombier-paris-pro.fr/logo.png",
  url: "https://www.plombier-paris-pro.fr",
  telephone: "0637510880",
  address: {
    "@type": "PostalAddress",
    streetAddress: "63 rue yves cremlin",
    addressLocality: "Boulogne -Billancourt",
    postalCode: "92100",
    addressCountry: "FR",
  },
  areaServed: [
    "Paris",
    "Boulogne -Billancourt",
    "Levallois-Perret",
    "Neuilly-sur-Seine",
  ],
  priceRange: "€€",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={mohaSans.className}>
      <head>
        {/* Préconnect pour la Google Map afin de gagner quelques ms sur mobile */}
        <link rel="preconnect" href="https://www.google.com" />
        <link rel="preconnect" href="https://maps.googleapis.com" />
      </head>
      <body>
        <Header />
        {children}
        <FloatingCallButton />
        <Footer />
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </body>
    </html>
  );
}
