
import Section from "@/components/Section";
import Link from "next/link";

export const metadata = {
  title: "Services de plomberie à Paris – Dépannage, Chauffe-eau, Rénovation",
  description: "Tous nos services de plomberie à Paris : urgences, chauffe-eau, débouchage, réseaux, rénovation salle de bain. Intervention rapide et soignée.",
  alternates: { canonical: "" }
};

export default function Page(){
  return (
    <main>
      <Section>
        <h1 className="text-3xl font-bold">Nos services de plomberie</h1>
        <p className="text-sky-700 max-w-2xl mt-2">
          Intervention rapide à Paris & petite couronne. Dépannages urgents,
          installations, remplacement d’équipements et rénovations complètes.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          <div className="surface p-6 space-y-3 card-hover">
            <h3 className="text-xl font-semibold">Dépannage & urgences</h3>
            <p className="text-sky-700 text-sm">
              Arrivée rapide selon votre zone. Diagnostic précis sur place.
            </p>
            <ul className="list-disc pl-5 space-y-1 text-sm text-sky-800">
              <li>Fuites d’eau (cuisine, salle de bain, WC)</li>
              <li>Débouchage WC, éviers, siphons, douches</li>
              <li>Dégorgement et curage des canalisations</li>
              <li>Remise en service d’alimentation en eau</li>
            </ul>
            <p className="text-sky-600 text-xs">
              Intervention possible en soirée & week-end.
            </p>
            <Link className="btn mt-3 inline-flex" href="/contact">
              Intervention rapide
            </Link>
          </div>

          <div className="surface p-6 space-y-3 card-hover">
            <h3 className="text-xl font-semibold">Chauffe-eau & Ballons</h3>
            <p className="text-sky-700 text-sm">
              Réparation, entretien ou remplacement complet.
            </p>
            <ul className="list-disc pl-5 space-y-1 text-sm text-sky-800">
              <li>Chauffe-eau électrique / thermodynamique</li>
              <li>Remplacement groupe de sécurité</li>
              <li>Détartrage & entretien annuel</li>
              <li>Conseil sur la capacité adaptée à votre foyer</li>
            </ul>
            <p className="text-sky-600 text-xs">
              Travail soigné, matériel garanti.
            </p>
            <Link className="btn mt-3 inline-flex" href="/contact">
              Obtenir un devis
            </Link>
          </div>

          <div className="surface p-6 space-y-3 card-hover">
            <h3 className="text-xl font-semibold">Rénovations salle de bain</h3>
            <p className="text-sky-700 text-sm">
              Création ou transformation complète de votre salle de bain.
            </p>
            <ul className="list-disc pl-5 space-y-1 text-sm text-sky-800">
              <li>Douche italienne / receveur extra-plat</li>
              <li>Pose carrelage & étanchéité certifiée</li>
              <li>Réseaux d’alimentation & évacuation</li>
              <li>Installation robinetterie & meubles</li>
            </ul>
            <p className="text-sky-600 text-xs">
              Accompagnement sur le choix des matériaux.
            </p>
            <Link className="btn mt-3 inline-flex" href="/contact">
              Planifier un projet
            </Link>
          </div>
        </div>

        <div className="surface p-6 text-center mt-12">
          <h2 className="text-2xl font-semibold">Besoin d’un dépannage immédiat ?</h2>
          <p className="text-sky-700 mt-2">Nous arrivons chez vous en 20 à 45 minutes sur Paris.</p>
          <div className="mt-4 flex items-center justify-center gap-3">
            <Link href="/contact" className="btn">Demander un devis</Link>
            <a href="tel:0637510880" className="btn bg-white text-ink border border-sky-200">📞 Appeler maintenant</a>
          </div>
        </div>

      </Section>
    </main>
  );
}
