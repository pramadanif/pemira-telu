"use client";
import { motion } from 'motion/react';
import { CalendarPlus } from 'lucide-react';

const events = [
  { date: "10 - 15 Okt", title: "Pendaftaran Paslon", desc: "Pendaftaran terbuka untuk seluruh calon kandidat." },
  { date: "20 Okt", title: "Debat Akbar I", desc: "Pemaparan visi dan misi publik antar kandidat." },
  { date: "25 Okt", title: "Debat Akbar II", desc: "Sesi tanya jawab panelis dan forum umum." },
  { date: "26 - 28 Okt", title: "Masa Tenang", desc: "Pemberhentian seluruh aktivitas kampanye tim sukses." },
  { date: "29 Okt", title: "Hari Pemungutan Suara", desc: "Portal e-voting digital dibuka 08:00 - 16:00 WIB." },
];

export function Timeline() {
  return (
    <section id="agenda" className="py-32 px-4 bg-white relative overflow-hidden border-t border-gray-100">
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl md:text-7xl font-display font-black text-gray-900 mb-6 uppercase tracking-tight">Agenda <span className="text-transparent bg-clip-text bg-gradient-to-r from-telkom-red to-red-600 drop-shadow-sm">Pemira</span></h2>
          <p className="text-gray-500 font-mono text-lg">Ikuti seluruh tahapan penting menuju hari penentuan.</p>
        </motion.div>
        
        <div className="relative border-l border-gray-200 ml-6 md:ml-1/2 md:left-1/2 md:-translate-x-1/2 space-y-24">
          {events.map((event, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 50, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
              className={`relative pl-12 md:pl-0 md:w-1/2 group ${i % 2 === 0 ? 'md:pr-16 md:text-right md:left-0' : 'md:pl-16 md:left-1/2'}`}
            >
              {/* Pulsing Node */}
              <div className={`absolute top-6 left-[-6px] md:top-8 md:left-auto ${i % 2 === 0 ? 'md:right-[-6.5px]' : 'md:left-[-6.5px]'} w-3 h-3 rounded-full bg-telkom-red shadow-[0_0_15px_rgba(200,16,46,0.4)] border-2 border-white z-20 group-hover:scale-150 transition-transform duration-500`}>
                <div className="absolute inset-0 bg-telkom-red rounded-full animate-ping opacity-75"></div>
              </div>

              {/* Connecting Line active state */}
              <div className={`hidden md:block absolute top-[2.2rem] h-[1px] bg-gradient-to-r from-telkom-red/30 to-transparent w-full max-w-[4rem] z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${i % 2 === 0 ? 'right-0' : 'left-0 bg-gradient-to-l'}`}></div>
              
              <div className="bg-white border border-gray-100 p-8 rounded-[2rem] hover:bg-gray-50 hover:border-red-200 transition-all duration-500 transform group-hover:-translate-y-2 shadow-[0_15px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_25px_50px_rgba(200,16,46,0.1)] relative overflow-hidden">
                <div className="absolute -right-10 -top-10 w-32 h-32 bg-red-50 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                <div className={`inline-block px-4 py-1.5 rounded-full border border-red-200 bg-red-50 text-telkom-red font-mono text-xs font-bold uppercase tracking-widest mb-6 shadow-sm`}>
                  {event.date}
                </div>
                <h3 className="text-3xl font-display font-black text-gray-900 mb-4 group-hover:text-telkom-red transition-colors">{event.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6 font-sans">{event.desc}</p>
                <button className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-gray-400 hover:text-telkom-red transition-colors bg-white px-4 py-2 rounded-lg border border-gray-100 group-hover:border-red-100">
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
