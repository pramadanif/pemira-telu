"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  { q: "Siapa yang berhak memilih?", a: "Seluruh mahasiswa aktif Telkom University Surabaya yang terdaftar pada semester akademik berjalan berhak menyalurkan suaranya." },
  { q: "Bagaimana cara login ke portal pemilihan?", a: "Gunakan kredensial SSO (Single Sign-On) resmi Anda yang biasa digunakan untuk portal akademik iGracias." },
  { q: "Apakah suara saya benar-benar rahasia?", a: "Absolut. Sistem kami menggunakan algoritma pemisahan kriptografi (blind signature). SSO memverifikasi status Anda sebagai pemilih sah, lalu menghasilkan token acak. Token ini mengunci surat suara Anda sehingga identitas pribadi dan pilihan kandidat tidak pernah terhubung dalam database." },
  { q: "Apa yang harus dilakukan jika terjadi galat sistem?", a: "Hubungi Helpdesk IT Telkom University melalui fitur Obrolan Terpusat atau kunjungi sekteriat luring di Lantai Dasar Gedung A." },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-32 px-4 bg-gray-50 border-t border-gray-100 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-red-50 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="w-16 h-16 bg-white border border-red-100 shadow-md rounded-2xl flex items-center justify-center mx-auto mb-6 text-telkom-red">
            <HelpCircle className="w-8 h-8" />
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-black text-gray-900 mb-6 uppercase tracking-tight">Pusat <span className="text-telkom-red">Bantuan</span></h2>
          <p className="text-gray-500 font-mono text-lg">Jawaban cepat untuk kelancaran partisipasi Anda.</p>
        </div>
        
        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_15px_40px_rgba(200,16,46,0.06)] transition-all">
              <button 
                className="w-full px-10 py-8 flex items-center justify-between text-left focus:outline-none group"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className={`text-xl font-bold font-display transition-colors ${openIndex === i ? 'text-telkom-red' : 'text-gray-900 group-hover:text-telkom-red'}`}>
                  {faq.q}
                </span>
                <div className={`p-2 rounded-full transition-colors ${openIndex === i ? 'bg-red-50 text-telkom-red' : 'bg-gray-50 text-gray-400 group-hover:bg-red-50 group-hover:text-telkom-red'}`}>
                  <ChevronDown className={`w-6 h-6 transition-transform duration-500 ease-out ${openIndex === i ? 'rotate-180' : ''}`} />
                </div>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-10 pb-8 text-gray-500 leading-relaxed font-medium">
                      <div className="pt-2 border-t border-gray-50">{faq.a}</div>
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
