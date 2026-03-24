"use client";
import { motion } from 'motion/react';
import { Users, Activity, ShieldCheck } from 'lucide-react';

export function Analytics() {
  const faculties = [
    { name: "FTEIC", color: "bg-blue-500", percentage: 78 },
    { name: "FTIB", color: "bg-orange-500", percentage: 65 },
    { name: "FKB", color: "bg-purple-500", percentage: 82 },
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-telkom-black to-telkom-dark relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Data Langsung</h2>
          <div className="w-20 h-1 bg-gold-glow"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Total Votes */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-panel p-8 rounded-3xl md:col-span-2 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Users className="w-32 h-32" />
            </div>
            <h3 className="text-gray-400 font-mono text-sm uppercase tracking-wider mb-2">Total Suara Masuk</h3>
            <div className="text-6xl md:text-8xl font-display font-bold text-white mb-4">
              4,821
            </div>
            <div className="flex items-center gap-2 text-yellow-500 text-sm font-mono">
              <Activity className="w-4 h-4" />
              <span>+12 dalam menit terakhir</span>
            </div>
          </motion.div>

          {/* Turnout */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass-panel p-8 rounded-3xl flex flex-col justify-center items-center text-center"
          >
            <div className="relative w-32 h-32 mb-6">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="10" />
                <motion.circle 
                  cx="50" cy="50" r="45" fill="none" 
                  stroke="var(--color-gold-glow)" strokeWidth="10"
                  strokeDasharray="283"
                  initial={{ strokeDashoffset: 283 }}
                  whileInView={{ strokeDashoffset: 283 - (283 * 0.72) }}
                  transition={{ duration: 2, ease: "easeOut" }}
                  className="drop-shadow-[0_0_10px_rgba(212,175,55,0.8)]"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-3xl font-display font-bold">72%</span>
              </div>
            </div>
            <h3 className="text-gray-300 font-sans font-medium">Partisipasi Keseluruhan</h3>
          </motion.div>

          {/* Faculty Breakdown */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-8 rounded-3xl md:col-span-3"
          >
            <h3 className="text-xl font-display font-bold text-white mb-8 flex items-center gap-3">
              <ShieldCheck className="text-telkom-red" />
              Partisipasi Per Fakultas
            </h3>
            <div className="space-y-6">
              {faculties.map((fac, i) => (
                <div key={fac.name}>
                  <div className="flex justify-between text-sm font-mono mb-2">
                    <span className="text-gray-300">{fac.name}</span>
                    <span className="text-white">{fac.percentage}%</span>
                  </div>
                  <div className="h-3 bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${fac.percentage}%` }}
                      transition={{ duration: 1.5, delay: i * 0.2 }}
                      className={`h-full ${fac.color} shadow-[0_0_10px_currentColor]`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
