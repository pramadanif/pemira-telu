"use client";
import { motion, useScroll, useTransform } from 'motion/react';
import { ChevronDown, Fingerprint, Sparkles } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/navigation';

export function Hero() {
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const [timeLeft, setTimeLeft] = useState({ days: 12, hours: 8, minutes: 45, seconds: 20 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { days, hours, minutes, seconds } = prev;
        seconds--;
        if (seconds < 0) { seconds = 59; minutes--; }
        if (minutes < 0) { minutes = 59; hours--; }
        if (hours < 0) { hours = 23; days--; }
        return { days, hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-white">
      {/* Refined Premium Background (Light Theme) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Soft radial glow at top right */}
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-telkom-red/10 rounded-full blur-[120px] animate-pulse"></div>
        {/* Soft radial glow at bottom left */}
        <div className="absolute -bottom-40 -left-60 w-[800px] h-[800px] bg-gray-100 rounded-full blur-[150px]"></div>
        {/* Mesh Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/80 to-white"></div>
        {/* Very subtle grid structural texture */}
        <div className="absolute inset-0 opacity-[0.4]" style={{ backgroundImage: 'radial-gradient(circle, #E5E7EB 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      </div>

      <div className="absolute top-0 inset-x-0 z-50">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-6 md:py-8 flex items-center">
          <img src="/logo.png" alt="Telkom University Logo" className="h-10 md:h-14 w-auto object-contain" />
        </div>
      </div>

      <motion.div style={{ y: yText, opacity: opacityText }} className="relative z-10 text-center px-4 max-w-7xl mx-auto flex flex-col items-center mt-12 w-full">
        
        {/* Eyebrow Label */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-gray-200 bg-white shadow-sm mb-12"
        >
          <Sparkles className="w-4 h-4 text-telkom-red" />
          <span className="text-gray-600 font-mono tracking-[0.2em] uppercase text-xs font-bold">Pemilihan Raya Mahasiswa 2026</span>
        </motion.div>

        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
          className="flex flex-col items-center w-full mb-16"
        >
          <h1 className="text-6xl md:text-8xl lg:text-[9rem] font-display font-black leading-[0.9] tracking-tighter text-gray-900 mb-2 drop-shadow-sm">
            TEL-U SBY
          </h1>
          <h1 className="text-6xl md:text-8xl lg:text-[9rem] font-display font-black leading-[0.9] tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-telkom-red to-red-800 drop-shadow-xl">
            MEMILIH
          </h1>
        </motion.div>

        {/* Minimalist Countdown */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="w-full max-w-3xl mb-16"
          suppressHydrationWarning
        >
          <div className="flex justify-center flex-wrap gap-4 md:gap-8">
            {Object.entries(timeLeft).map(([unit, value], i) => {
              const labels: Record<string, string> = { days: 'Hari', hours: 'Jam', minutes: 'Menit', seconds: 'Detik' };
              return (
                <div key={unit} className="flex flex-col items-center px-8 py-6 rounded-[2rem] bg-white border border-gray-100 shadow-[0_20px_40px_rgba(0,0,0,0.04)] min-w-[120px] md:min-w-[160px] relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-red-50 rounded-full blur-2xl transform translate-x-12 -translate-y-12 group-hover:bg-red-100 transition-colors"></div>
                  <span className="relative z-10 text-5xl md:text-7xl font-display font-black text-gray-900 tabular-nums tracking-tighter">
                    {value.toString().padStart(2, '0')}
                  </span>
                  <span className="relative z-10 text-xs md:text-sm text-gray-500 font-mono uppercase tracking-widest mt-2">{labels[unit]}</span>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.button
          onClick={() => router.push('/login')}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(200, 16, 46, 0.25)" }}
          whileTap={{ scale: 0.98 }}
          className="group relative px-10 py-5 bg-telkom-red rounded-full font-display font-bold text-lg text-white uppercase tracking-[0.2em] overflow-hidden transition-all shadow-xl"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-telkom-red transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out z-0"></div>
          <span className="relative z-10 flex items-center gap-3">
            <Fingerprint className="w-6 h-6" />
            Mulai Memilih
          </span>
        </motion.button>
      </motion.div>

      {/* Floating Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="absolute bottom-8 text-gray-400 hover:text-gray-900 transition-colors cursor-pointer z-20"
      >
        <ChevronDown className="w-6 h-6" />
      </motion.div>
    </section>
  );
}
