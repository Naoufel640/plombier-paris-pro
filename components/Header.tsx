
"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";
import clsx from "clsx";
import { useEffect, useState } from "react";
import type { Route } from "next";

const nav: { href: Route; label: string }[] = [
  { href: "/" as Route, label: "Accueil" },
  { href: "/services" as Route, label: "Services" },
  { href: "/galerie" as Route, label: "Réalisations" },
  { href: "/a-propos" as Route, label: "À propos" },
  { href: "/contact" as Route, label: "Contact" },
];

export default function Header(){
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const body = document.body;
    if (open) { const prev = body.style.overflow; body.style.overflow = "hidden"; return () => { body.style.overflow = prev; }; }
  }, [open]);

  return (
    <header className="header">
      
<div className="bg-[linear-gradient(90deg,rgba(125,211,252,.15),rgba(34,211,238,.15))] backdrop-blur-sm text-sky-900 text-sm border-b border-sky-100">
  <div className="container py-2 flex flex-wrap items-center justify-center md:justify-between gap-2">
    <div className="flex flex-wrap items-center gap-3">
      <span className="inline-flex items-center gap-1"><span>💰</span><span className="hidden sm:inline">Prix compétitifs</span><span className="sm:hidden">Prix justes</span></span>
      <span className="hidden md:inline">•</span>
      <span className="inline-flex items-center gap-1"><span>⚡</span><span className="hidden sm:inline">Urgence 24/7</span><span className="sm:hidden">24/7</span></span>
      <span className="hidden md:inline">•</span>
      <span className="inline-flex items-center gap-1"><span>📍</span><span className="hidden sm:inline">Paris & Île‑de‑France</span><span className="sm:hidden">Paris & IDF</span></span>
    </div>
    <div className="flex items-center gap-2">
      <a href="/contact" className="btn py-1">Devis gratuit</a>
    </div>
  </div>
</div>
<div className="container h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.svg" alt="logo" width={160} height={40} priority className="logo-img" />
        </Link>

        <nav className="hidden md:flex items-center gap-5 mx-auto">
          {nav.map(item => (
            <Link key={item.href} href={item.href} className={clsx("navlink", pathname===item.href && "opacity-100 underline underline-offset-4")}>
              {item.label}
            </Link>
          ))}
          
        </nav>

        <button aria-label="Ouvrir le menu" className="mobile-trigger" onClick={()=>setOpen(true)}>☰</button>
      </div>
      <motion.div className="h-[1px] bg-gradient-to-r from-accent/20 via-accent2/40 to-accent/20" layoutId="border" />

      {typeof window !== 'undefined' && createPortal(
        <AnimatePresence>
          {open && (
            <motion.div className="mobile-drawer" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={()=>setOpen(false)}>
              <motion.div className="mobile-panel" initial={{ x: 60, opacity: .5 }} animate={{ x: 0, opacity: 1 }} exit={{ x: 40, opacity: 0 }} transition={{ type: "spring", stiffness: 220, damping: 26 }} onClick={(e)=>e.stopPropagation()}>
                <div className="flex items-center justify-between mb-4">
                  <Image src="/logo.svg" alt="logo" width={140} height={36} className="logo-img" />
                  <button aria-label="Fermer le menu" className="mobile-trigger" onClick={()=>setOpen(false)}>✕</button>
                </div>
                <nav className="mobile-nav space-y-1">
                  {nav.map(item => (
                    <Link key={item.href} href={item.href} className={clsx(pathname===item.href && "text-accent")} onClick={()=>setOpen(false)}>{item.label}</Link>
                  ))}
                  <div className="pt-4">
                    
                  </div>
                </nav>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </header>
  );
}
