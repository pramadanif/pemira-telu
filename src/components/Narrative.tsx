"use client";
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export function Narrative() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section ref={containerRef} className="py-40 px-4 bg-white relative overflow-hidden">
      {/* Decorative Orbs (Light Theme) */}
      <motion.div style={{ y: y1 }} className="absolute top-20 left-10 w-[30rem] h-[30rem] bg-gray-100 rounded-full blur-[100px] pointer-events-none" />
      <motion.div style={{ y: y2 }} className="absolute bottom-20 right-10 w-[40rem] h-[40rem] bg-telkom-red/5 rounded-full blur-[120px] pointer-events-none" />

      <motion.div 
        style={{ opacity }}
        className="max-w-5xl mx-auto text-center relative z-10"
      >
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-serif text-gray-500 leading-relaxed md:leading-snug tracking-tight"
        >
          Demokrasi bukan sekadar <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-telkom-red font-bold italic drop-shadow-sm">memberikan suara</span>; ini tentang membentuk masa depan <span className="text-gray-900 font-display font-black">Telkom University Surabaya</span>. Sistem kami memastikan integrasi, transparansi, dan keamanan mutlak untuk setiap suara yang diberikan.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 w-1.5 h-32 mx-auto bg-gradient-to-b from-telkom-red to-transparent rounded-full shadow-[0_0_15px_rgba(200,16,46,0.3)]"
        />
      </motion.div>
    </section>
  );
}
