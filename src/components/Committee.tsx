"use client";
import { motion } from 'motion/react';

const committee = [
  { name: "Reza Rahadian", role: "Ketua KPR", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200" },
  { name: "Nadia Saphira", role: "Ketua Panwas", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200" },
  { name: "Budi Santoso", role: "Koordinator IT", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200&h=200" },
  { name: "Ayu Lestari", role: "Humas", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200&h=200" },
];

export function Committee() {
  return (
    <section className="py-32 px-4 bg-white relative">
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-display font-black text-gray-900 mb-6 uppercase tracking-tighter drop-shadow-sm">Di Balik <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-telkom-red">Pemilihan</span></h2>
        <p className="text-gray-500 font-mono mb-20 text-lg max-w-2xl mx-auto">Kenali panitia KPR & Panwas yang memastikan setiap tahapan proses demokrasi berjalan independen dan adil.</p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {committee.map((member, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, type: "spring", stiffness: 100 }}
              className="flex flex-col items-center group cursor-pointer"
            >
              <div className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden mb-8 border-[6px] border-gray-50 p-2 shadow-[0_20px_40px_rgba(0,0,0,0.06)] group-hover:border-red-100 group-hover:shadow-[0_20px_50px_rgba(200,16,46,0.15)] transition-all duration-500">
                <img src={member.img} alt={member.name} className="w-full h-full object-cover rounded-full grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" referrerPolicy="no-referrer" />
              </div>
              <h3 className="text-2xl font-display font-black text-gray-900 mb-2 group-hover:text-telkom-red transition-colors">{member.name}</h3>
              <div className="px-4 py-1.5 bg-gray-100 rounded-full border border-gray-200 group-hover:bg-red-50 group-hover:border-red-100 transition-colors">
                <p className="text-gray-500 group-hover:text-telkom-red text-xs font-mono font-bold tracking-widest uppercase transition-colors">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
