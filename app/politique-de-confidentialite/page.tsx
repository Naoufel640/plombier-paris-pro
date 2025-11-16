
import type { Metadata } from "next";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description: "Politique de confidentialité – Plombier Paris Pro. Explications sur l’usage des données, cookies, formulaires et droits RGPD."
};

export default function PrivacyPage(){
  return (
    <main>
      <Section>
        <h1 className="text-3xl font-bold mb-6">Politique de confidentialité</h1>
        <div className="prose max-w-none">
          <p>Nous accordons une grande importance à la protection de vos données personnelles. Cette page explique comment nous collectons, utilisons et protégeons vos informations.</p>
          <h3>Données collectées</h3>
          <ul>
            <li>Formulaire de contact : nom, email, téléphone, message.</li>
            <li>Mesure d’audience anonyme (pages visitées, temps de visite).</li>
          </ul>
          <h3>Finalités</h3>
          <p>Répondre à vos demandes de devis et améliorer nos services.</p>
          <h3>Durées de conservation</h3>
          <p>Les informations de contact sont conservées le temps du traitement de votre demande puis archivées si nécessaire.</p>
          <h3>Vos droits</h3>
          <p>Conformément au RGPD, vous disposez d’un droit d’accès, de rectification et de suppression. Écrivez-nous à <a href="mailto:contact@plombier-paris-pro.fr">contact@plombier-paris-pro.fr</a>.</p>
          <h3>Contact</h3>
          <p>📍 63 rue yves cremlin 92100 Boulogne -Billancourt – 📞 01 84 80 12 34</p>
        </div>
      </Section>
    </main>
  );
}
