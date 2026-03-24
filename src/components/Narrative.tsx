"use client";
import { motion } from 'motion/react';

export function Narrative() {
  return (
    <section className="py-32 px-4 relative overflow-hidden bg-telkom-black">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-serif italic text-white leading-tight">
            "Masa depan kampus kita tidaklah diwariskan, melainkan <span className="text-telkom-red font-bold not-italic drop-shadow-[0_0_15px_rgba(200,16,46,0.8)]">dipilih</span>."
          </h2>
          <p className="mt-12 text-lg md:text-xl text-gray-300 font-sans max-w-3xl mx-auto leading-relaxed">
            Suaramu adalah arsitek masa depan. Di era digital ini, demokrasi bertemu dengan inovasi. Kami memastikan setiap suara aman, transparan, dan berdampak. Melangkah maju dan bentuk warisan Telkom University Surabaya.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
