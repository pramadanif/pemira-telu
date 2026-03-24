"use client";
import { motion } from 'motion/react';
import { Shield, Key, EyeOff, CheckCircle2 } from 'lucide-react';

const steps = [
  { icon: Key, title: "Verifikasi NIM", desc: "Masuk menggunakan kredensial SSO Telkom University resmi Anda." },
  { icon: Shield, title: "Enkripsi Data", desc: "Suara Anda dienkripsi mutakhir sebelum mencapai server." },
  { icon: EyeOff, title: "Anonimitas Penuh", desc: "Identitas pemilih dipisahkan dari surat suara. 100% rahasia." },
  { icon: CheckCircle2, title: "Rekam Jejak Permanen", desc: "Hasil terkunci dan dapat diverifikasi oleh pengamat independen." },
];

export function EducationHub() {
  return (
    <section className="py-32 px-4 bg-white relative overflow-hidden border-t border-gray-100">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-5xl md:text-7xl font-display font-black text-gray-900 mb-6 uppercase tracking-tighter leading-tight">
              Aman. Pribadi.<br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-telkom-red drop-shadow-sm">Terverifikasi.</span>
            </h2>
            <p className="text-gray-500 text-lg mb-12 leading-relaxed max-w-lg">
              Kami menggunakan protokol kriptografi kelas industri untuk memastikan integritas pemilihan. Suara Anda berharga, melindunginya adalah prioritas absolut kami.
            </p>
            
            <div className="space-y-8">
              {steps.map((step, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-6 items-start group"
                >
                  <div className="w-16 h-16 rounded-[1.5rem] bg-red-50 border border-red-100 flex items-center justify-center shrink-0 text-telkom-red shadow-[0_10px_20px_rgba(200,16,46,0.1)] group-hover:bg-telkom-red group-hover:text-white transition-colors duration-500">
                    <step.icon className="w-7 h-7" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-2">{step.title}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2 relative w-full flex justify-center mt-12 lg:mt-0">
            {/* Abstract 3D representation (Light Mode) */}
            <motion.div 
              animate={{ rotateY: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="relative w-full aspect-square max-w-[400px]"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-telkom-red/10 to-red-100/50 rounded-[3rem] backdrop-blur-3xl border border-red-100 shadow-[0_20px_50px_rgba(200,16,46,0.1)] flex items-center justify-center">
                <Shield className="w-40 h-40 text-telkom-red opacity-80" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
