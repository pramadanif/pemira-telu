"use client";
import { motion } from 'motion/react';
import { CalendarPlus } from 'lucide-react';

const events = [
  { date: "10 - 15 Okt", title: "Pendaftaran Paslon", desc: "Pendaftaran terbuka untuk calon." },
  { date: "20 Okt", title: "Debat Akbar I", desc: "Pemaparan visi dan misi." },
  { date: "25 Okt", title: "Debat Akbar II", desc: "Sesi tanya jawab panelis dan umum." },
  { date: "26 - 28 Okt", title: "Masa Tenang", desc: "Larangan seluruh aktivitas kampanye." },
  { date: "29 Okt", title: "Hari Pemungutan Suara", desc: "Portal e-voting dibuka 08:00 - 16:00 WIB." },
];

export function Timeline() {
  return (
    <section className="py-32 px-4 bg-gradient-to-b from-telkom-dark to-telkom-maroon relative">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-16 text-center">Agenda Pemira</h2>
        
        <div className="relative border-l-2 border-telkom-red/30 ml-4 md:ml-1/2 md:left-1/2 md:-translate-x-1/2 space-y-12">
          {events.map((event, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`relative pl-8 md:pl-0 md:w-1/2 ${i % 2 === 0 ? 'md:pr-12 md:text-right md:left-0' : 'md:pl-12 md:left-1/2'}`}
            >
              {/* Node */}
              <div className={`absolute top-0 left-[-9px] md:left-auto ${i % 2 === 0 ? 'md:right-[-9px]' : 'md:left-[-9px]'} w-4 h-4 rounded-full bg-telkom-red shadow-[0_0_15px_rgba(226,6,19,1)] border-2 border-white`}></div>
              
              <div className="glass-panel p-6 rounded-2xl hover:border-yellow-500/50 transition-colors group">
                <div className="text-yellow-400 font-mono text-sm mb-2">{event.date}</div>
                <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{event.desc}</p>
                <button className="flex items-center gap-2 text-xs font-mono uppercase text-gray-500 group-hover:text-white transition-colors">
                  <CalendarPlus className="w-4 h-4" /> Tambah ke Kalender
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
