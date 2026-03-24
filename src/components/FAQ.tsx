"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  { q: "Siapa yang berhak memilih?", a: "Seluruh mahasiswa aktif Telkom University Surabaya yang terdaftar pada semester akademik berjalan." },
  { q: "Bagaimana cara login ke portal pemilihan?", a: "Gunakan kredensial SSO (Single Sign-On) resmi Anda. Sama dengan yang digunakan untuk iGracias." },
  { q: "Apakah suara saya benar-benar anonim?", a: "Ya. Sistem menggunakan pemisahan kriptografi. Identitas Anda diverifikasi untuk memastikan Anda belum memilih, tetapi surat suara itu sendiri tidak mengandung informasi yang mengidentifikasi." },
  { q: "Apa yang harus dilakukan jika saya menghadapi masalah teknis saat memilih?", a: "Hubungi Helpdesk IT melalui widget obrolan langsung di portal pemilihan atau kunjungi pusat bantuan luring di lobi utama." },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-32 px-4 bg-gradient-to-b from-telkom-black to-telkom-maroon">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-16 text-center">Pertanyaan yang Sering Diajukan</h2>
        
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="glass-panel rounded-2xl overflow-hidden border-white/10">
              <button 
                className="w-full px-8 py-6 flex items-center justify-between text-left focus:outline-none"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="text-lg font-bold text-white">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-yellow-400 transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-6 text-gray-300 leading-relaxed">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
