
"use client";
import { motion, AnimatePresence } from "framer-motion";
export default function SuccessModal({open,onClose,title='Message envoyé !',description='Merci, nous vous rappelons très vite.'}:{open:boolean;onClose:()=>void;title?:string;description?:string;}){
  return (<AnimatePresence>{open&&(<motion.div className="fixed inset-0 z-[90] grid place-items-center p-6 bg-black/60" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}><motion.div initial={{y:20,opacity:0,scale:.98}} animate={{y:0,opacity:1,scale:1}} exit={{y:10,opacity:0,scale:.98}} transition={{type:'spring',stiffness:220,damping:24}} className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl border border-sky-100 text-center"><div className="mx-auto mb-3 h-14 w-14 rounded-2xl bg-gradient-to-tr from-accent2 to-accent text-white grid place-items-center shadow-ring2 text-2xl">✓</div><h3 className="text-xl font-bold">{title}</h3><p className="text-sky-700 mt-1">{description}</p><button onClick={onClose} className="btn mt-4">OK</button></motion.div></motion.div>)}</AnimatePresence>);
}
