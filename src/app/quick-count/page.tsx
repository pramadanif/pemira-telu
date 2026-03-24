"use client";
import { motion } from 'motion/react';
import { ArrowLeft, Users, Activity, Trophy } from 'lucide-react';

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
    <div className="min-h-screen relative bg-gray-50 text-gray-900 font-sans selection:bg-red-100 selection:text-telkom-red pt-20 pb-24 px-4 sm:px-6 lg:px-8">
      {/* Background Orbs */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] bg-red-50 rounded-full mix-blend-multiply blur-[80px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Responsive Header */}
        <div className="mb-12 sm:mb-16">
          <div className="flex items-center justify-between mb-6 sm:mb-8">
            <a href="/" className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono font-bold text-gray-500 hover:text-telkom-red transition-colors bg-white px-4 py-2 rounded-full border border-gray-200 shadow-sm">
              <ArrowLeft className="w-4 h-4" /> Kembali ke Beranda
            </a>
            <img src="/logo.png" alt="Telkom University Logo" className="h-10 md:h-12 w-auto object-contain" />
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black text-gray-900 mb-6 sm:mb-8 uppercase tracking-tighter drop-shadow-sm leading-none">
            Hitung <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-telkom-red drop-shadow-md">Cepat</span>
          </h1>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start sm:items-center">
            <div className="w-full sm:w-auto bg-white shadow-sm border border-gray-200 px-6 sm:px-8 py-4 rounded-2xl flex items-center gap-4">
              <div className="bg-red-50 p-3 rounded-xl"><Users className="text-telkom-red w-5 h-5 sm:w-6 sm:h-6" /></div>
              <div>
                <p className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-widest font-mono font-bold mb-1">Total Suara Masuk</p>
                <p className="text-xl sm:text-2xl font-black font-display text-gray-900 leading-none">{totalVotes.toLocaleString()} Suara</p>
              </div>
            </div>
            <div className="w-full sm:w-auto bg-white shadow-sm border border-gray-200 px-6 sm:px-8 py-4 rounded-2xl flex items-center gap-4">
              <div className="bg-green-50 p-3 rounded-xl"><Activity className="text-green-600 w-5 h-5 sm:w-6 sm:h-6" /></div>
              <div>
                <p className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-widest font-mono font-bold mb-1">Status Data</p>
                <p className="text-xl sm:text-2xl font-black font-display text-gray-900 leading-none flex items-center gap-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                  </span>
                  Real-time (72%)
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Categories / Grid */}
        <div className="space-y-16 sm:space-y-20">
          {(Object.keys(resultsData) as Array<keyof typeof resultsData>).map((division, idx) => (
            <motion.div 
              key={division}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
            >
              <div className="flex items-center gap-4 mb-6 sm:mb-8">
                <span className="bg-gray-200 text-gray-600 px-3 py-1 rounded-md text-sm sm:text-base font-bold font-display uppercase">Pilkada</span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-black text-gray-900 uppercase tracking-tight">
                  {division}
                </h2>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {resultsData[division].map((candidate, i) => {
                  const isWinning = candidate.percentage >= Math.max(...resultsData[division].map(c => c.percentage));
                  
                  return (
                    <div key={i} className={`bg-white rounded-3xl p-6 sm:p-8 relative transition-shadow duration-300 ${isWinning ? 'border-2 border-red-500 shadow-[0_10px_30px_rgba(200,16,46,0.1)]' : 'border border-gray-200 shadow-sm hover:shadow-md'}`}>
                      {/* Win Ribbon */}
                      {isWinning && (
                         <div className="absolute top-0 right-6 -translate-y-1/2">
                           <div className="bg-telkom-red text-white px-3 py-1.5 rounded-full shadow-md flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider">
                             <Trophy className="w-3.5 h-3.5" /> Unggul
                           </div>
                         </div>
                      )}
                      
                      <div className="flex justify-between items-start mb-6">
                        <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center text-xl sm:text-2xl font-display font-black border-4 ${isWinning ? 'bg-telkom-red text-white border-red-100' : 'bg-gray-100 text-gray-700 border-white shadow-inner'}`}>
                          {candidate.number}
                        </div>
                        <div className="text-right">
                          <p className={`text-3xl sm:text-4xl font-display font-black tracking-tighter ${isWinning ? 'text-telkom-red' : 'text-gray-900'}`}>
                            {candidate.percentage.toFixed(1)}%
                          </p>
                          <p className="text-[11px] sm:text-xs font-mono text-gray-500 font-bold uppercase mt-1">{candidate.votes.toLocaleString()} Suara</p>
                        </div>
                      </div>

                      <div className="mb-8">
                        <h3 className="text-xl sm:text-2xl font-display font-bold text-gray-900 mb-1 leading-tight">{candidate.pres}</h3>
                        <h4 className="text-sm sm:text-base text-gray-500 font-sans font-medium">& {candidate.vp}</h4>
                      </div>

                      {/* Cleaner Progress Bar */}
                      <div className="relative h-3 sm:h-4 bg-gray-100 rounded-full overflow-hidden">
                        <motion.div 
                          className={`absolute top-0 left-0 h-full rounded-full ${isWinning ? 'bg-gradient-to-r from-red-600 to-telkom-red' : 'bg-gray-300'}`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${candidate.percentage}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: "easeOut", delay: i * 0.1 }}
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
