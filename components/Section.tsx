
"use client";
import { motion } from "framer-motion";
export default function Section({ children, className="" }: { children: React.ReactNode, className?: string }){
  return (
    <section className={`py-16 ${className}`}>
      <div className="container">
        <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{ once: true, margin: "-80px" }} transition={{duration:.6}}>
          {children}
        </motion.div>
      </div>
    </section>
  );
}
