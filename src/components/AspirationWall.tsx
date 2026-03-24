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
    <section className="py-32 px-4 bg-gray-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-50 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-black text-gray-900 mb-4 uppercase tracking-tighter drop-shadow-sm">Suara Mahasiswa</h2>
          <p className="text-gray-500 font-mono">Aspirasi kalian, tanpa sensor.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {aspirations.map((text, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-[2rem] border-l-4 border-l-telkom-red shadow-[0_15px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(200,16,46,0.08)] transition-shadow border-y border-r border-gray-100"
            >
              <p className="text-gray-600 font-serif italic text-lg leading-relaxed">"{text}"</p>
            </motion.div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto bg-white p-3 rounded-full flex items-center shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-gray-100">
          <input 
            type="text" 
            placeholder="Kirimkan suaramu secara anonim..." 
            className="flex-1 bg-transparent border-none outline-none text-gray-900 px-6 font-sans placeholder:text-gray-400 font-medium"
          />
          <button className="bg-telkom-red hover:bg-red-800 text-white p-4 rounded-full transition-colors shadow-[0_5px_15px_rgba(200,16,46,0.3)]">
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
