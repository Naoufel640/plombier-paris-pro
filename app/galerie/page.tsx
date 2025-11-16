
import Section from "@/components/Section";
import GalleryPro from "@/components/GalleryPro";

export const metadata = {
  title: "Réalisations plomberie à Paris – Avant/Après, Douches, Chauffe-eau",
  description: "Découvrez nos chantiers : douches italiennes, chauffe-eau, débouchages, rénovations à Paris. Preuves de qualité et finitions soignées.",
  alternates: { canonical: "" }
};

export default function Page(){
  return (
    <main>
      <Section>
        <div className="flex items-end justify-between flex-wrap gap-3">
          <div>
            <h1 className="text-3xl font-bold">Réalisations</h1>
            <p className="text-sky-700">Avant / après, finitions, douches à l’italienne, chauffe-eau, réseaux.</p>
          </div>
          <a href="/contact" className="btn">Demander un devis</a>
        </div>
        <div className="surface p-5 mt-6"><GalleryPro/></div>
      </Section>
    </main>
  );
}
