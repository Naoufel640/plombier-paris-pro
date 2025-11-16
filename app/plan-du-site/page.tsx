
import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "Plan du site",
  description: "Plan du site – navigation rapide vers toutes les pages du site Plombier Paris Pro."
};

const links = [
  { href: "/" as const, label: "Accueil" },
  { href: "/services" as const, label: "Services" },
  { href: "/galerie" as const, label: "Réalisations" },
  { href: "/a-propos" as const, label: "À propos" },
  { href: "/contact" as const, label: "Contact" },
  { href: "/mentions-legales" as const, label: "Mentions légales" },
  { href: "/politique-de-confidentialite" as const, label: "Politique de confidentialité" }
];

export default function SitemapPage(){
  return (
    <main>
      <Section>
        <h1 className="text-3xl font-bold mb-6">Plan du site</h1>
        <ul className="grid sm:grid-cols-2 gap-3">
          {links.map(l => (
            <li key={l.href} className="kpi">
              <Link href={l.href} className="font-semibold">{l.label}</Link>
            </li>
          ))}
        </ul>
      </Section>
    </main>
  );
}
