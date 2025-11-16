
"use client";
import { useEffect, useState } from "react";
export default function FloatingCallButton(){
  const [mounted,setMounted]=useState(false);
  useEffect(()=>setMounted(true),[]);
  if(!mounted) return null;
  const phone="0637510880";
  return (
    <a href={`tel:${phone}`} aria-label="Appeler maintenant" title="Appeler maintenant" className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-[120] group">
      <div className="relative flex items-center gap-3 rounded-full px-4 pr-5 py-3 bg-gradient-to-tr from-accent2 to-accent text-white shadow-2xl hover:shadow-[0_15px_35px_rgba(14,165,233,.35)] transition duration-300 ease-out">
        <span className="grid place-items-center w-9 h-9 rounded-full bg-white/15 backdrop-blur-sm ring-1 ring-white/20"><span aria-hidden>📞</span></span>
        <div className="text-left leading-tight">
          <span className="block text-xs opacity-90">Appeler</span>
          <strong className="block text-sm md:text-base tracking-wide">{phone}</strong>
        </div>
        <span className="absolute -z-10 inset-0 rounded-full blur-2xl opacity-40 bg-accent2/40 group-hover:opacity-60 transition"></span>
      </div>
    </a>
  );
}
