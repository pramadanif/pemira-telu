"use client";
import { motion, AnimatePresence } from 'motion/react';
import { X, Check } from 'lucide-react';

export function ComparisonModal({ onClose }: { onClose: () => void }) {
  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          onClick={onClose}
        />
        <motion.div 
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto glass-panel-light rounded-3xl p-8 md:p-12 bg-gray-900/90"
        >
          <button onClick={onClose} className="absolute top-6 right-6 text-gray-400 hover:text-white">
            <X className="w-8 h-8" />
          </button>

          <h2 className="text-3xl font-display font-bold text-white mb-10 text-center">Perbandingan Antar Kandidat</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Paslon 1 */}
            <div className="space-y-8">
              <div className="text-center pb-6 border-b border-white/10">
                <div className="text-5xl font-display font-bold text-telkom-red mb-2">01</div>
                <h3 className="text-2xl font-bold text-white">Arjuna & Bima</h3>
              </div>
              <div>
                <h4 className="text-yellow-400 font-mono text-sm uppercase mb-4">Visi</h4>
                <p className="text-gray-300 leading-relaxed">Mewujudkan BEM KEMA Tel-U Surabaya yang adaptif, inovatif, dan bersinergi dalam harmoni untuk kesejahteraan mahasiswa.</p>
              </div>
              <div>
                <h4 className="text-yellow-400 font-mono text-sm uppercase mb-4">Misi Utama</h4>
                <ul className="space-y-3">
                  {['Optimalisasi advokasi mahasiswa', 'Inkubator karya dan prestasi', 'Digitalisasi layanan BEM'].map((m, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-300">
                      <Check className="w-5 h-5 text-telkom-red shrink-0 mt-0.5" />
                      <span>{m}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Paslon 2 */}
            <div className="space-y-8">
              <div className="text-center pb-6 border-b border-white/10">
                <div className="text-5xl font-display font-bold text-telkom-red mb-2">02</div>
                <h3 className="text-2xl font-bold text-white">Citra & Dimas</h3>
              </div>
              <div>
                <h4 className="text-yellow-400 font-mono text-sm uppercase mb-4">Visi</h4>
                <p className="text-gray-300 leading-relaxed">Menjadikan BEM sebagai poros pergerakan yang inklusif, responsif, dan berwawasan global berlandaskan kolaborasi.</p>
              </div>
              <div>
                <h4 className="text-yellow-400 font-mono text-sm uppercase mb-4">Misi Utama</h4>
                <ul className="space-y-3">
                  {['Ruang aman dan inklusif', 'Pengembangan soft-skill terpadu', 'Kemitraan strategis eksternal'].map((m, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-300">
                      <Check className="w-5 h-5 text-telkom-red shrink-0 mt-0.5" />
                      <span>{m}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
