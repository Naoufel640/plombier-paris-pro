
import Link from "next/link";
import Image from "next/image";

export default function Footer(){
  return (
<footer className="mt-16 bg-[linear-gradient(180deg,rgba(125,211,252,.15),rgba(34,211,238,.08))]">
      <div className="container">
        <div className="border-t border-sky-100"></div>
      </div>

      <div className="container py-12">
        <div className="grid md:grid-cols-4 gap-10 items-start">
          {/* Brand */}
          <div className="space-y-3">
            <Link href="/" className="inline-flex items-center">
              <Image src="/logo.png" alt="MOHA Services - Plombier Paris" width={170} height={50} className="logo-img" />
            </Link>
            <p className="text-sm text-sky-800/80">
              Plombier à Paris & Île-de-France. Dépannage, installation et rénovation.
              Devis clair, intervention rapide, travail garanti.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sky-900 font-semibold mb-3">Navigation</h4>
            <ul className="space-y-2 text-sky-800/90">
              <li><Link href="/" className="hover:underline">Accueil</Link></li>
              <li><Link href="/services" className="hover:underline">Services</Link></li>
              <li><Link href="/galerie" className="hover:underline">Réalisations</Link></li>
              <li><Link href="/a-propos" className="hover:underline">À propos</Link></li>
              <li><Link href="/contact" className="hover:underline">Contact</Link></li>
            </ul>
          </div>

          {/* Coordonnées */}
          <div>
            <h4 className="text-sky-900 font-semibold mb-3">Coordonnées</h4>
            <ul className="space-y-2 text-sky-800/90 text-sm">
              <li>📍 63 rue Yves Cremlin, 92100 Boulogne‑Billancourt</li>
              <li>🕒 24h/24 – 7j/7</li>
              <li>📞 Intervention Paris & IDF</li>
            </ul>
            <div className="mt-3 text-xs text-sky-700/80">
              <p>Assuré & déclaré • Facture fournie</p>
              <p>Garantie main‑d’œuvre • Pièces certifiées</p>
            </div>
          </div>

          {/* Services rapides */}
          <div>
            <h4 className="text-sky-900 font-semibold mb-3">Interventions rapides</h4>
            <ul className="space-y-2 text-sky-800/90 text-sm">
              <li>Fuite d’eau, WC bouché, débouchage</li>
              <li>Robinetterie encastrée, mitigeur</li>
              <li>Chauffe‑eau (remplacement, mise en service)</li>
              <li>Salle de bain & cuisine (pose, finitions)</li>
            </ul>
            <div className="mt-4">
              <Link href="/contact" className="btn">Demander un devis</Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-sky-700/70">
          <p>© {new Date().getFullYear()} Plombier Paris Pro — Tous droits réservés.</p>
          <div className="flex gap-4">
            <Link href="/mentions-legales" className="hover:underline">Mentions légales</Link>
            <Link href="/politique-de-confidentialite" className="hover:underline">Confidentialité</Link>
            <Link href="/plan-du-site" className="hover:underline">Plan du site</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
