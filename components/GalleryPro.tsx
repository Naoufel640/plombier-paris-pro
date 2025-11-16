
"use client";
import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";
type Item = { src:string; alt:string; cat:"Dépannage"|"Installation"|"Rénovation"; desc:string };
export default function GalleryPro(){
    const all: Item[] = [
  { src: "/galerie/sdb1.jpg", alt: "Salle de bain rénovée - meuble & douche", cat: "Rénovation", desc: "Rénovation complète de salle de bain : meuble vasque sur‑mesure, paroi de bain, faïence imitation bois, joints sanitaires premium. Étanchéité reprise (SPEC) et finitions propres." },
  { src: "/galerie/sdb2.jpg", alt: "Salle de bain rénovée moderne", cat: "Rénovation", desc: "Aménagement moderne avec baignoire‑douche, faïence grand format et coffrage propre. Test d’étanchéité et nettoyage de fin de chantier inclus." },
  { src: "/galerie/robinet1.jpg", alt: "Robinetterie encastrée - corps de mitigeur", cat: "Installation", desc: "Pose robinetterie encastrée : raccord PER/cuivre, sertissage, contrôle planéité et profondeur de niche, purge réseau, essais eau froide/chaude." },
  { src: "/galerie/robinet2.jpg", alt: "Pose mitigeur évier - cuisine", cat: "Installation", desc: "Installation évier + mitigeur, flexible inox, étanchéité sous embase, raccordement évacuation & siphon, test de débit." },
  { src: "/galerie/chauffe_eau.jpg", alt: "Remplacement chauffe-eau", cat: "Installation", desc: "Dépose ancien ballon, mise en place chauffe‑eau neuf, groupe de sécurité, raccordements cuivre/PER, mise en service et réglage thermostat." }
];
  const [cat, setCat] = useState<null | Item["cat"]>(null);
  const [q, setQ] = useState("");
  const [active, setActive] = useState<Item | null>(null);
  const filtered = useMemo(() => all.filter(i => (!cat || i.cat===cat) && (q==="" || i.alt.toLowerCase().includes(q.toLowerCase()))), [all, cat, q]);
  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-2">
        {(["Dépannage","Installation","Rénovation"] as const).map(c => (
          <button key={c} onClick={()=>setCat(cat===c?null:c)} className={clsx("filter-chip", cat===c && "filter-chip-active")}>{c}</button>
        ))}
        <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Rechercher une prestation..." className="ml-auto w-full md:w-72 border border-sky-200 rounded-xl px-3 py-2 bg-white" />
      </div>
      <div className="gallery-grid">
        {filtered.map(item => (
          <button key={item.src} onClick={()=>setActive(item)} className="relative card-hover overflow-hidden rounded-xl border border-sky-100 text-left">
            <img src={item.src} alt={item.alt} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/0 to-transparent opacity-0 hover:opacity-100 transition"></div>
            <div className="absolute bottom-2 left-2 right-2 text-white">
              <div className="text-xs opacity-90">{item.cat}</div>
              <div className="text-sm font-semibold drop-shadow">{item.alt}</div>
            </div>
          </button>
        ))}
      </div>
      <AnimatePresence>
        {active && (
          <motion.div className="fixed inset-0 z-[95] bg-black/40" onClick={()=>setActive(null)} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <motion.div className="absolute right-0 top-0 h-full w-full md:w-[520px] bg-white border-l border-sky-100 p-6 overflow-y-auto" initial={{ x: 60 }} animate={{ x: 0 }} exit={{ x: 40 }} transition={{ type: "spring", stiffness: 220, damping: 26 }} onClick={(e)=>e.stopPropagation()}>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-bold">{active.alt}</h3>
                <button className="mobile-trigger" onClick={()=>setActive(null)}>✕</button>
              </div>
              <img src={active.src} alt={active.alt} className="w-full rounded-xl border border-sky-100" />
              <div className="mt-4">
                <span className="badge">{active.cat}</span>
                <p className="text-sky-800 mt-3">{active.desc}</p>
                <ul className="list-disc pl-5 text-sky-800 mt-3 space-y-1">
                  <li>Devis détaillé et transparent avant travaux</li>
                  <li>Respect des normes et garanties pièces/main d’œuvre</li>
                  <li>Propreté du chantier et délais respectés</li>
                </ul>
                <a href="/contact" className="btn mt-4 inline-flex">Demander un devis</a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
