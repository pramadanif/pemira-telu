"use client";
import { motion } from 'motion/react';
import { ChevronDown, Fingerprint } from 'lucide-react';
import { useEffect, useState } from 'react';

export function Hero() {
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
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-telkom-maroon via-telkom-dark to-telkom-black">
      {/* Abstract 3D Glass elements simulated with gradients */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-telkom-red rounded-full mix-blend-screen filter blur-[100px] opacity-40 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-gold-glow rounded-full mix-blend-screen filter blur-[150px] opacity-20"></div>

      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h2 className="text-gold-glow font-mono tracking-[0.3em] uppercase text-sm md:text-base mb-4">Pemilihan Raya Mahasiswa 2026</h2>
          <h1 className="text-6xl md:text-8xl lg:text-[9rem] font-display font-bold leading-none tracking-tighter mb-8 text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 drop-shadow-2xl">
            TEL-U SURABAYA<br/>MEMILIH
          </h1>
        </motion.div>

        {/* Countdown Timer */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="glass-panel rounded-3xl p-6 md:p-10 mb-12 flex gap-4 md:gap-8 border-t border-white/20 shadow-[0_0_50px_rgba(226,6,19,0.3)]"
        >
          {Object.entries(timeLeft).map(([unit, value]) => {
            const labels: Record<string, string> = { days: 'Hari', hours: 'Jam', minutes: 'Menit', seconds: 'Detik' };
            return (
              <div key={unit} className="flex flex-col items-center">
                <span className="text-4xl md:text-6xl font-display font-bold text-white tabular-nums tracking-tighter">
                  {value.toString().padStart(2, '0')}
                </span>
                <span className="text-xs md:text-sm text-gray-400 uppercase tracking-widest mt-2">{labels[unit]}</span>
              </div>
            );
          })}
        </motion.div>

        <motion.button
          whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(212, 175, 55, 0.6)" }}
          whileTap={{ scale: 0.95 }}
          className="group relative px-8 py-4 bg-gradient-to-r from-yellow-600 to-amber-600 rounded-full font-display font-bold text-lg uppercase tracking-wider overflow-hidden"
        >
          <div className="absolute inset-0 bg-white/20 group-hover:bg-transparent transition-colors"></div>
          <span className="relative flex items-center gap-3">
            <Fingerprint className="w-6 h-6" />
            Masuk untuk Memilih
          </span>
        </motion.button>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 text-white/50"
      >
        <ChevronDown className="w-8 h-8" />
      </motion.div>
    </section>
  );
}
