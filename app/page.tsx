
  import Link from "next/link";
  import Section from "@/components/Section";
  import LiteMap from "@/components/LiteMap";

  export const metadata = {
    title: "Plombier Paris – Dépannage 24/7, Fuites & Débouchage | Plombier Paris Pro",
    description: "Plombier à Paris : intervention rapide 24/7. Dépannage fuite, débouchage WC, chauffe-eau, installations et rénovations. Devis clair, travail garanti.",
    alternates: { canonical: "" }
  };

  export default function Page(){
    return (
      <main>
        <Section className="pt-12">
          <div className="hero-grid">
           <div>
  <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
    Plombier à Paris : intervention{" "}
    <span className="bg-clip-text text-transparent bg-gradient-to-tr from-accent2 to-accent">
      rapide & garantie
    </span>
  </h1>

  <p className="text-sky-700 mt-3">
    🟢 Intervention à Paris et Île-de-France • 🚨 Dépannage 7j/7 – Arrivée en 20 à 45 min
  </p>

  {/* 👇 NOUVEAU : services les plus demandés */}
  <div className="mt-4">
    <p className="text-xs font-semibold uppercase tracking-wide text-sky-600">
      Services les plus demandés
    </p>
    <div className="mt-2 grid gap-2.5 sm:grid-cols-2">
      <div className="flex items-center gap-2 rounded-2xl border border-sky-100 bg-white/80 px-3 py-2 shadow-sm">
        <span className="text-lg">🚿</span>
        <div className="text-xs leading-snug text-sky-900/90">
          <p className="font-semibold">Dégorgement & débouchage</p>
          <p className="text-[11px] text-sky-700/80">WC, éviers, douches bouchés</p>
        </div>
      </div>

      <div className="flex items-center gap-2 rounded-2xl border border-sky-100 bg-white/80 px-3 py-2 shadow-sm">
        <span className="text-lg">💧</span>
        <div className="text-xs leading-snug text-sky-900/90">
          <p className="font-semibold">Recherche de fuite</p>
          <p className="text-[11px] text-sky-700/80">Robinet, flexible, tuyauterie</p>
        </div>
      </div>

      <div className="flex items-center gap-2 rounded-2xl border border-sky-100 bg-white/80 px-3 py-2 shadow-sm">
        <span className="text-lg">🔥</span>
        <div className="text-xs leading-snug text-sky-900/90">
          <p className="font-semibold">Remplacement chauffe-eau</p>
          <p className="text-[11px] text-sky-700/80">Électrique, gaz, ballon HS</p>
        </div>
      </div>

      <div className="flex items-center gap-2 rounded-2xl border border-sky-100 bg-white/80 px-3 py-2 shadow-sm">
        <span className="text-lg">🛁</span>
        <div className="text-xs leading-snug text-sky-900/90">
          <p className="font-semibold">Salle de bain & cuisine</p>
          <p className="text-[11px] text-sky-700/80">Mitigeur, douche, évier, WC</p>
        </div>
      </div>
    </div>
  </div>

  <div className="mt-5 flex gap-3">
    <Link className="btn" href="/contact">
      Appeler / Devis
    </Link>
    <Link className="btn bg-white text-ink border border-sky-200" href="/services">
      Voir nos services
    </Link>
  </div>
</div>


<div className="rounded-3xl bg-[linear-gradient(135deg,#38bdf8,#22d3ee)] p-[1px]">
  <div className="surface rounded-[1.35rem] p-5 md:p-6 space-y-5">
        {/* Titre + sous-titre */}
    <div>
      <h3 className="text-sm font-semibold text-sky-900 uppercase tracking-wide">
        Prise en charge rapide
      </h3>
      <p className="mt-1 text-sm text-sky-700/90">
        Devis clair, intervention garantie, artisan déclaré.
      </p>
    </div>

    {/* 3 mini KPIs */}
    <div className="grid grid-cols-3 gap-3 text-center text-xs">
      <div className="rounded-xl border border-sky-100 bg-sky-50/60 px-2.5 py-2">
        <div className="text-[10px] text-sky-500">Délai moyen</div>
        <div className="text-sm font-semibold text-sky-900">&lt; 30 min</div>
      </div>
      <div className="rounded-xl border border-sky-100 bg-sky-50/60 px-2.5 py-2">
        <div className="text-[10px] text-sky-500">Zone</div>
        <div className="text-sm font-semibold text-sky-900">Paris & IDF</div>
      </div>
      <div className="rounded-xl border border-sky-100 bg-sky-50/60 px-2.5 py-2">
        <div className="text-[10px] text-sky-500">Disponibilité</div>
        <div className="text-sm font-semibold text-sky-900">24/7</div>
      </div>
    </div>

    {/* Étapes */}
    <ol className="space-y-3 text-[15px] text-sky-900/90">
      <li className="flex items-start gap-3">
        <div className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sky-100 text-xs font-semibold text-sky-700">
          1
        </div>
        <div>
          <p className="font-medium">Vous nous contactez</p>
          <p className="text-sm text-sky-700/90">
            Par téléphone ou via le formulaire : vous expliquez votre problème (fuite, WC bouché, chauffe-eau…).
          </p>
        </div>
      </li>
      <li className="flex items-start gap-3">
        <div className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sky-100 text-xs font-semibold text-sky-700">
          2
        </div>
        <div>
          <p className="font-medium">Devis clair & heure d’intervention</p>
          <p className="text-sm text-sky-700/90">
            On vous propose un tarif estimatif et un créneau d’arrivée (généralement sous 20 à 45 minutes en urgence).
          </p>
        </div>
      </li>
      <li className="flex items-start gap-3">
        <div className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sky-100 text-xs font-semibold text-sky-700">
          3
        </div>
        <div>
          <p className="font-medium">Intervention & remise en service</p>
          <p className="text-sm text-sky-700/90">
            Intervention soignée, remise en service et conseils d’entretien. Facture et garantie main-d’œuvre fournies.
          </p>
        </div>
      </li>
    </ol>

    {/* Bandeau confiance + CTA */}
    <div className="mt-2 flex flex-col gap-2 border-t border-sky-100 pt-4 text-sm">
      <p className="text-xs text-sky-700/90">
        Artisan plombier déclaré, intervention sur tout Paris et l’Île-de-France, matériel conforme aux normes en vigueur.
      </p>
      <div className="flex flex-wrap gap-2">
        <a href="/contact" className="btn text-sm">
          Demander un devis maintenant
        </a>
        <a href="/galerie" className="btn-outline text-sm">
          Voir des exemples de chantier
        </a>
      </div>
    </div>
  </div>
  </div>


          </div>
        </Section>
      </main>
    );
  }
