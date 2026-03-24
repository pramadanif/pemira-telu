"use client";
import { motion } from 'motion/react';
import { Send } from 'lucide-react';

const aspirations = [
  "Harapannya BEM bisa lebih transparan soal anggaran.",
  "Perbanyak event kolaborasi antar fakultas!",
  "Fasilitas parkir tolong disuarakan ke rektorat.",
  "Semoga paslon terpilih amanah dan tidak cuma janji manis.",
  "Butuh lebih banyak workshop karir dari BEM.",
  "Kantin FTIB butuh perbaikan, tolong advokasi.",
];

export function AspirationWall() {
  return (
    <section className="py-32 px-4 bg-telkom-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Suara Mahasiswa</h2>
          <p className="text-gray-400 font-mono">Aspirasi kalian, tanpa sensor.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {aspirations.map((text, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-panel p-6 rounded-2xl border-l-4 border-l-telkom-red"
            >
              <p className="text-gray-300 font-serif italic text-lg">"{text}"</p>
            </motion.div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto glass-panel p-2 rounded-full flex items-center">
          <input 
            type="text" 
            placeholder="Kirimkan suaramu secara anonim..." 
            className="flex-1 bg-transparent border-none outline-none text-white px-6 font-sans placeholder:text-gray-600"
          />
          <button className="bg-telkom-red hover:bg-red-600 text-white p-4 rounded-full transition-colors">
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
