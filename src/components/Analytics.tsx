"use client";
import { motion } from 'motion/react';
import { Users, Activity, ShieldCheck, ChevronRight } from 'lucide-react';

export function Analytics() {
  const faculties = [
    { name: "FTEIC", percentage: 78 },
    { name: "FTIB", percentage: 65 },
    { name: "FKB", percentage: 82 },
  ];

  return (
    <section className="py-32 px-4 bg-gray-50 relative overflow-hidden">
      {/* Premium Light Gradients */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-telkom-red/5 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-red-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <h2 className="text-5xl md:text-7xl font-display font-black text-transparent bg-clip-text bg-gradient-to-b from-gray-900 to-gray-600 mb-6 uppercase tracking-tight">Data <span className="text-telkom-red">Langsung</span></h2>
          <p className="text-gray-500 font-mono text-lg max-w-2xl mx-auto">Pantau tingkat partisipasi mahasiswa secara real-time dan terenkripsi.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 perspective-[1000px]">
          {/* Total Votes */}
          <motion.div 
            initial={{ opacity: 0, rotateX: 10, y: 30 }}
            whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100 }}
            whileHover={{ y: -5, scale: 1.01 }}
            className="bg-white border border-gray-100 p-10 rounded-[2.5rem] md:col-span-2 relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.05)] group transition-shadow hover:shadow-[0_30px_60px_rgba(200,16,46,0.1)]"
          >
            <div className="absolute top-0 right-0 p-10 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity duration-700 transform group-hover:scale-110">
              <Users className="w-40 h-40 text-gray-900" />
            </div>
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <h3 className="text-gray-500 font-mono text-xs uppercase tracking-[0.2em] mb-4 flex items-center gap-2 font-bold">
                  <div className="w-2 h-2 rounded-full bg-telkom-red animate-pulse"></div> Total Suara Masuk
                </h3>
                <div className="text-7xl md:text-[8rem] font-display font-black text-gray-900 leading-none tracking-tighter drop-shadow-sm">
                  4,821
                </div>
              </div>
              <div className="flex items-center gap-3 mt-8">
                <div className="px-4 py-2 bg-green-50 rounded-full text-green-700 text-sm font-mono flex items-center gap-2 border border-green-100/50 font-bold">
                  <Activity className="w-4 h-4 text-green-600" /> +12 suara dalam menit terakhir
                </div>
              </div>
            </div>
          </motion.div>

          {/* Turnout */}
          <motion.div 
            initial={{ opacity: 0, rotateX: 10, y: 30 }}
            whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, delay: 0.1 }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="bg-white border border-gray-100 p-10 rounded-[2.5rem] flex flex-col justify-center items-center text-center shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:shadow-[0_30px_60px_rgba(200,16,46,0.1)] hover:border-red-100 relative overflow-hidden group transition-all"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-red-50/30"></div>
            <div className="relative w-40 h-40 mb-8 z-10">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="45" fill="none" stroke="#F3F4F6" strokeWidth="6" />
                <motion.circle 
                  cx="50" cy="50" r="45" fill="none" 
                  stroke="#C8102E" strokeWidth="8" strokeLinecap="round"
                  strokeDasharray="283"
                  initial={{ strokeDashoffset: 283 }}
                  whileInView={{ strokeDashoffset: 283 - (283 * 0.72) }}
                  transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
                  className="drop-shadow-[0_0_15px_rgba(200,16,46,0.3)]"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center flex-col">
                <span className="text-5xl font-display font-black text-gray-900">72<span className="text-2xl text-telkom-red">%</span></span>
              </div>
            </div>
            <h3 className="text-gray-900 font-display font-bold text-xl uppercase tracking-widest relative z-10">Partisipasi</h3>
            <p className="text-gray-500 font-mono text-xs mt-2 relative z-10">Total kuorum tercapai</p>
          </motion.div>

          {/* Faculty Breakdown */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white border border-gray-100 p-10 rounded-[2.5rem] md:col-span-3 mt-4 shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:shadow-[0_30px_60px_rgba(200,16,46,0.05)] transition-shadow"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 border-b border-gray-100 pb-8">
              <h3 className="text-3xl font-display font-bold text-gray-900 flex items-center gap-4 uppercase tracking-wider">
                <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center border border-red-100">
                  <ShieldCheck className="text-telkom-red w-6 h-6" />
                </div>
                Distribusi Fakultas
              </h3>
              <button className="text-xs font-mono text-gray-500 hover:text-telkom-red transition-colors flex items-center gap-2 font-bold uppercase tracking-widest bg-gray-50 px-4 py-2 rounded-full hover:bg-red-50">
                Lihat Lengkap <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {faculties.map((fac, i) => (
                <div key={fac.name} className="group cursor-default">
                  <div className="flex justify-between items-end mb-4">
                    <span className="text-2xl font-display font-bold text-gray-400 group-hover:text-gray-900 transition-colors">{fac.name}</span>
                    <span className="text-xl font-mono font-bold text-gray-900">{fac.percentage}%</span>
                  </div>
                  <div className="h-4 bg-gray-100 rounded-full overflow-hidden border border-gray-200/50 p-0.5 shadow-inner">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${fac.percentage}%` }}
                      transition={{ duration: 1.5, delay: i * 0.2, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-red-600 to-telkom-red rounded-full shadow-[0_0_10px_rgba(200,16,46,0.3)] relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-white/30 w-1/2 -skew-x-12 -translate-x-full animate-[shimmer_2s_infinite]"></div>
                    </motion.div>
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
