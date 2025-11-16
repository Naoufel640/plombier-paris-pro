
import type { Metadata } from "next";
import Section from "@/components/Section";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact & Devis – Plombier Paris 24/7",
  description: "Contact Moha Services : dépannage en urgence, installation et rénovation. Réponse en 15 minutes – Paris & Boulogne-Billancourt."
};

export default function ContactPage(){
  return (
    <main>
      <Section>
        <div className="grid lg:grid-cols-[1.15fr_.85fr] gap-8 items-start">
          <div className="surface p-6 md:p-8"><ContactForm/></div>

          <aside className="space-y-4">
            <div className="surface p-6">
              <h3 className="font-semibold text-lg">Contact immédiat</h3>
              <p className="mt-2">📞 <a className="underline" href="tel:0637510880">0637510880</a></p>
              <p className="text-sky-700/80 text-sm">Pour toute demande écrite, utilisez le formulaire ci‑dessus.</p>
            </div>

            <div className="surface p-6">
              <h3 className="font-semibold text-lg">Disponibilité</h3>
              <ul className="text-sm text-sky-800/90 list-disc ml-5 space-y-1 mt-2">
                <li>24h/24 – 7j/7 (weekends & jours fériés)</li>
                <li>Arrivée estimée 20 à 45 minutes selon secteur</li>
                <li>Devis clair, intervention garantie</li>
              </ul>
            </div>

            <div className="surface p-6">
              <h3 className="font-semibold text-lg">Adresse</h3>
              <p className="text-sm">63 rue yves cremlin, 92100 Boulogne‑Billancourt</p>
              <p className="text-xs text-sky-700/80 mt-1">Intervention à Paris & Île‑de‑France.</p>
            </div>
          </aside>
        </div>
      </Section>
    </main>
  );
}
