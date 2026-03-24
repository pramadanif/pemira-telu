"use client";
import { motion } from 'motion/react';
import { ArrowLeft, Users, Activity } from 'lucide-react';

const resultsData = {
  BEM: [
    { number: "01", pres: "Arjuna W.", vp: "Bima S.", votes: 2150, percentage: 44.5 },
    { number: "02", pres: "Citra D.", vp: "Dimas A.", votes: 2680, percentage: 55.5 }
  ],
  DPM: [
    { number: "01", pres: "Eka P.", vp: "Fajar R.", votes: 1200, percentage: 24.8 },
    { number: "02", pres: "Gita S.", vp: "Hadi K.", votes: 1950, percentage: 40.4 },
    { number: "03", pres: "Intan L.", vp: "Joko B.", votes: 1680, percentage: 34.8 }
  ],
  HIMA: [
    { number: "01", pres: "Kiki N.", vp: "Lulu V.", votes: 1420, percentage: 48.0 },
    { number: "02", pres: "Miko T.", vp: "Nina B.", votes: 1540, percentage: 52.0 }
  ]
};

export default function QuickCount() {
  const totalVotes = 4830;

  return (
    <div className="min-h-screen relative bg-gradient-to-b from-telkom-dark via-telkom-black to-telkom-dark text-white font-sans selection:bg-gold-glow selection:text-telkom-black pt-24 pb-32 px-4">
      {/* Abstract Backgrounds */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-telkom-red rounded-full mix-blend-screen filter blur-[120px] opacity-30 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-gold-glow rounded-full mix-blend-screen filter blur-[150px] opacity-10"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-16">
          <a href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="w-5 h-5" /> Kembali ke Beranda
          </a>
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 uppercase tracking-tight">
            Hitung <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-600 drop-shadow-[0_0_15px_rgba(212,175,55,0.5)]">Cepat</span>
          </h1>
          <div className="flex flex-wrap gap-6 items-center">
            <div className="glass-panel px-6 py-3 rounded-xl flex items-center gap-3 border-l-4 border-l-telkom-red">
              <Users className="text-gray-400 w-5 h-5" />
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wider font-mono">Total Suara Masuk</p>
                <p className="text-xl font-bold font-display">{totalVotes.toLocaleString()} Suara</p>
              </div>
            </div>
            <div className="glass-panel px-6 py-3 rounded-xl flex items-center gap-3 border-l-4 border-l-yellow-500">
              <Activity className="text-gray-400 w-5 h-5" />
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wider font-mono">Status Data</p>
                <p className="text-xl font-bold font-display flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  Real-time (72% Terkumpul)
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="space-y-24">
          {(Object.keys(resultsData) as Array<keyof typeof resultsData>).map((division, idx) => (
            <motion.div 
              key={division}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
            >
              <h2 className="text-3xl font-display font-bold mb-8 border-b border-white/10 pb-4">President & Vice President - {division}</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {resultsData[division].map((candidate, i) => {
                  const isWinning = candidate.percentage >= Math.max(...resultsData[division].map(c => c.percentage));
                  
                  return (
                    <div key={i} className={`glass-panel rounded-3xl p-8 relative overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(0,0,0,0.5)] ${isWinning ? 'border border-yellow-500/50 shadow-[0_0_30px_rgba(212,175,55,0.15)]' : 'border border-white/5'}`}>
                      {/* Win indicator glow */}
                      {isWinning && (
                        <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500 rounded-full mix-blend-screen filter blur-[60px] opacity-30 transform translate-x-1/2 -translate-y-1/2"></div>
                      )}
                      
                      <div className="flex justify-between items-start mb-6 relative z-10">
                        <div className="w-16 h-16 rounded-full glass-panel-light flex items-center justify-center text-2xl font-display font-bold text-white shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                          {candidate.number}
                        </div>
                        <div className="text-right">
                          <p className="text-4xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400">
                            {candidate.percentage.toFixed(1)}%
                          </p>
                          <p className="text-sm font-mono text-gray-400">{candidate.votes.toLocaleString()} Suara</p>
                        </div>
                      </div>

                      <div className="relative z-10 mb-8">
                        <h3 className="text-2xl font-bold text-white mb-1">{candidate.pres}</h3>
                        <h4 className="text-gray-400 font-sans">& {candidate.vp}</h4>
                      </div>

                      {/* Progress Bar */}
                      <div className="relative h-4 bg-white/5 rounded-full overflow-hidden z-10">
                        <motion.div 
                          className={`absolute top-0 left-0 h-full rounded-full ${isWinning ? 'bg-gradient-to-r from-yellow-600 to-amber-400' : 'bg-gradient-to-r from-telkom-red to-red-500'}`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${candidate.percentage}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, ease: "easeOut", delay: i * 0.2 }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
