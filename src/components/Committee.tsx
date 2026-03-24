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
    <section className="py-32 px-4 bg-telkom-black">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Di Balik Pemilihan</h2>
        <p className="text-gray-400 font-mono mb-20">Kenali panitia KPR & Panwas yang memastikan proses demokrasi yang adil.</p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {committee.map((member, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center"
            >
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden mb-6 border-4 border-telkom-red/30 p-1">
                <img src={member.img} alt={member.name} className="w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-500" referrerPolicy="no-referrer" />
              </div>
              <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
              <p className="text-yellow-400 text-sm font-mono">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
