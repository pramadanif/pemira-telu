"use client";
import { motion } from 'motion/react';
import { Shield, Key, EyeOff, CheckCircle2 } from 'lucide-react';

const steps = [
  { icon: Key, title: "Verifikasi NIM", desc: "Masuk menggunakan kredensial SSO Telkom University resmi Anda." },
  { icon: Shield, title: "Enkripsi Data", desc: "Suara Anda dienkripsi end-to-end sebelum mencapai server." },
  { icon: EyeOff, title: "Anonimitas Penuh", desc: "Identitas pemilih dipisahkan dari surat suara. 100% rahasia." },
  { icon: CheckCircle2, title: "Rekam Jejak Permanen", desc: "Hasil terkunci dan dapat diverifikasi oleh pengamat independen." },
];

export function EducationHub() {
  return (
    <section className="py-32 px-4 bg-gradient-to-b from-telkom-black to-telkom-dark">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Aman. Pribadi.<br/><span className="text-yellow-400">Terverifikasi.</span></h2>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
              Kami menggunakan protokol kriptografi mutakhir untuk memastikan integritas pemilihan. Suara Anda berharga, dan melindunginya adalah prioritas utama kami.
            </p>
            
            <div className="space-y-8">
              {steps.map((step, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-6"
                >
                  <div className="w-14 h-14 rounded-2xl bg-telkom-red/20 border border-telkom-red/50 flex items-center justify-center shrink-0 text-telkom-red shadow-[0_0_15px_rgba(226,6,19,0.3)]">
                    <step.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">{step.title}</h4>
                    <p className="text-gray-400 text-sm">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            {/* Abstract 3D representation */}
            <motion.div 
              animate={{ rotateY: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="relative w-full aspect-square max-w-md mx-auto"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-telkom-red/40 to-yellow-500/40 rounded-3xl backdrop-blur-3xl border border-white/20 shadow-[0_0_50px_rgba(212,175,55,0.2)] flex items-center justify-center">
                <Shield className="w-32 h-32 text-white/80" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
