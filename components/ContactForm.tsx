
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import SuccessModal from "@/components/SuccessModal";

export default function ContactForm(){
  const [sending,setSending]=useState(false);
  const [open,setOpen]=useState(false);
  const [err,setErr]=useState<string|null>(null);
  const router = useRouter();

  async function onSubmit(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault();
    setErr(null);
    setSending(true);
    const fd = new FormData(e.currentTarget);
    try{
      const r = await fetch("/api/contact", { method:"POST", body: fd });
      const p = await r.json();
      if(p?.ok){
        setOpen(true);
        setTimeout(()=>{ setOpen(false); router.push("/"); }, 2600);
        e.currentTarget.reset();
      }else{
        setErr(p?.error || "Échec d'envoi");
      }
    }catch(e:any){
      setErr("Impossible d'envoyer la demande");
    }
    setSending(false);
  }

  return (<>
    {err && <div className="mb-3 rounded-xl border border-red-200 bg-red-50 text-red-800 px-4 py-3">{err}</div>}
    <form className="space-y-4" onSubmit={onSubmit} encType="multipart/form-data">
      <h1 className="text-3xl md:text-4xl font-bold">Aide rapide & conseil gratuit</h1>
      <p className="text-sky-700/80">Réponse en 15 minutes – sans engagement & gratuit</p>

      <div className="grid md:grid-cols-2 gap-3">
        <input name="name" required placeholder="Nom complet *" className="input" />
        <input name="phone" required placeholder="Téléphone *" className="input" />
      </div>

      <div className="grid md:grid-cols-2 gap-3">
        <input name="email" type="email" placeholder="Email" className="input" />
        <select name="service" className="input">
          <option value="">Type de service</option>
          <option>Dépannage en urgence</option>
          <option>Robinetterie encastrée</option>
          <option>Remplacement chauffe-eau</option>
          <option>Salle de bain complète</option>
          <option>Autre</option>
        </select>
      </div>

      <div className="grid md:grid-cols-2 gap-3">
        <input name="street" required placeholder="Rue & numéro *" className="input" />
        <input name="zipcity" required placeholder="Code postal & Ville *" className="input" />
      </div>

      <div className="grid md:grid-cols-2 gap-3">
        <select name="urgency" className="input">
          <option value="">Urgence</option>
          <option>Immédiat</option>
          <option>Dans la journée</option>
          <option>Dans la semaine</option>
        </select>
        <input name="slot" placeholder="Créneau souhaité (ex. demain 14h)" className="input" />
      </div>

      <textarea name="message" required className="input h-36" placeholder="Décrivez brièvement votre problème (fuite, canalisation bouchée, chauffe‑eau en panne, etc.)" />

      <div className="grid md:grid-cols-2 gap-3 items-center">
        <input type="file" name="photo" accept="image/*" className="input" />
        <label className="text-sm text-sky-700/80"><input type="checkbox" name="rgpd" required className="mr-2" />J’accepte d’être recontacté par Moha Services pour ma demande.</label>
      </div>

      <div className="flex gap-3">
        <button className="btn disabled:opacity-60" disabled={sending}>{sending?"Envoi…":"Envoyer ma demande"}</button>
      </div>
    </form>

    <SuccessModal open={open} onClose={()=>{ setOpen(false); router.push("/"); }} title="Demande envoyée" description="Merci ! Nous vous recontactons sous 15 minutes."/>
  </>);
}
