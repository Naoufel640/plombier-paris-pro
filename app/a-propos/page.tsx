
import Section from "@/components/Section";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "À propos – Artisans plombiers de confiance à Paris",
  description: "Entreprise artisanale à taille humaine. Interventions rapides, devis clairs, garanties pièces & main d’œuvre, respect des délais à Paris et petite couronne.",
  alternates: { canonical: "" }
};

function Badge({children}:{children:React.ReactNode}){
  return <span className="badge">{children}</span>;
}
function Stat({label, value}:{label:string; value:string}){
  return (<div className="text-center surface p-5"><div className="text-3xl font-extrabold">{value}</div><div className="text-sky-700">{label}</div></div>);
}

export default function Page(){
  return (
    <main>
      <Section className="pt-12">
        <div className="grid md:grid-cols-[1.1fr_.9fr] gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Des artisans de confiance, pour un travail <span className="bg-clip-text text-transparent bg-gradient-to-tr from-accent2 to-accent">durable & garanti</span>
            </h1>
            <p className="text-sky-800 mt-3">
              Plombier Paris Pro est une entreprise artisanale qui intervient rapidement à Paris & petite couronne.
              Notre différence : des interventions soignées, des prix clairs, et un suivi après travaux.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              <Badge>Intervention 24/7</Badge>
              <Badge>Devis clair avant travaux</Badge>
              <Badge>Garantie pièces & main d’œuvre</Badge>
              <Badge>Respect des délais</Badge>
            </div>
          </div>
          <div className="surface p-5">
            <div className="grid grid-cols-2 gap-4">
              <Stat label="Avis clients" value="4.9/5" />
              <Stat label="Délai moyen" value="< 30 min" />
              <Stat label="Années d'expérience" value="10+" />
              <Stat label="Projets/an" value="50+" />
            </div>
          </div>
        </div>
      </Section>

      <Section className="py-10">
        <div className="surface p-6">
          <h2 className="text-2xl font-bold">Nos engagements</h2>
          <div className="mt-4 grid md:grid-cols-3 gap-5">
            <div className="card-hover p-4 rounded-xl border border-sky-100 bg-white">
              <h3 className="font-semibold">Transparence totale</h3>
              <p className="text-sky-800 text-sm mt-1">Un devis précis avant chaque intervention. Pas de surprise sur la facture.</p>
            </div>
            <div className="card-hover p-4 rounded-xl border border-sky-100 bg-white">
              <h3 className="font-semibold">Qualité & durabilité</h3>
              <p className="text-sky-800 text-sm mt-1">Matériaux professionnels, respect des normes, finitions soignées.</p>
            </div>
            <div className="card-hover p-4 rounded-xl border border-sky-100 bg-white">
              <h3 className="font-semibold">Disponibilité 24/7</h3>
              <p className="text-sky-800 text-sm mt-1">Urgences, soirs & week-ends : nous répondons quand vous en avez besoin.</p>
            </div>
          </div>
        </div>
      </Section>

      <Section className="py-10">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="surface p-6">
  <h2 className="text-2xl font-bold">Engagements & garanties</h2>
  <p className="text-sky-800 mt-2">
    Artisan plombier déclaré, assuré, et engagé sur la qualité du travail comme sur le suivi après intervention.
  </p>

  <div className="mt-4 grid gap-4 sm:grid-cols-2">
    <div className="flex items-start gap-3">
      <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-sky-50 text-sky-700 text-lg">
        🛡️
      </span>
      <div>
        <h3 className="font-semibold text-sky-900 text-sm">
          Assurance professionnelle
        </h3>
        <p className="text-xs text-sky-800">
          Travaux couverts par une responsabilité civile professionnelle, factures claires et traçables.
        </p>
      </div>
    </div>

    <div className="flex items-start gap-3">
      <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-sky-50 text-sky-700 text-lg">
        ✅
      </span>
      <div>
        <h3 className="font-semibold text-sky-900 text-sm">
          Devis clair & validé avant travaux
        </h3>
        <p className="text-xs text-sky-800">
          Tarif annoncé avant intervention, pas de mauvaise surprise sur la facture.
        </p>
      </div>
    </div>

    <div className="flex items-start gap-3">
      <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-sky-50 text-sky-700 text-lg">
        🔧
      </span>
      <div>
        <h3 className="font-semibold text-sky-900 text-sm">
          Matériel de marques reconnues
        </h3>
        <p className="text-xs text-sky-800">
          Pièces et équipements choisis chez des fournisseurs professionnels, adaptés à votre installation.
        </p>
      </div>
    </div>

    <div className="flex items-start gap-3">
      <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-sky-50 text-sky-700 text-lg">
        💬
      </span>
      <div>
        <h3 className="font-semibold text-sky-900 text-sm">
          Conseils & suivi après intervention
        </h3>
        <p className="text-xs text-sky-800">
          Explications sur les travaux réalisés et conseils d’entretien pour éviter les prochaines pannes.
        </p>
      </div>
    </div>
  </div>
</div>

          <div className="surface p-6">
            <h2 className="text-2xl font-bold">Notre méthode</h2>
            <ol className="list-decimal pl-5 text-sky-800 space-y-2 mt-2">
              <li>Écoute du besoin & diagnostic</li>
              <li>Devis clair et validé ensemble</li>
              <li>Intervention propre et sécurisée</li>
              <li>Contrôle, remise en service, conseils d’entretien</li>
            </ol>
          </div>
        </div>
      </Section>

      <Section className="py-10">
        <h2 className="text-2xl font-bold">Ce que disent nos clients</h2>
        <div className="grid md:grid-cols-3 gap-5 mt-4">
          {[
            { name:"Alexandre – Paris 11", txt:"Fuite réparée en 30 minutes. Devis annoncé respecté, travail propre. Je recommande !" },
            { name:"Nadia – Boulogne", txt:"Remplacement chauffe-eau impeccable, explications claires et ponctualité." },
            { name:"Jules – Paris 3", txt:"Rénovation salle de bain : finitions top, chantier tenu dans les délais." },
          ].map((t, i)=> (
            <div key={i} className="surface p-5 card-hover">
              <div className="flex items-center gap-2">
                {[0,1,2,3,4].map(k => <Image key={k} src="/star.svg" alt="star" width={18} height={18} />)}
              </div>
              <p className="text-sky-800 mt-3">{t.txt}</p>
              <div className="text-sm text-sky-600 mt-2">{t.name}</div>
            </div>
          ))}
        </div>
      </Section>
    </main>
  );
}
