"use client";
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { ComparisonModal } from './ComparisonModal';

// Shared images for mock
const imgs = [
  "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800&h=1000",
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800&h=1000",
  "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800&h=1000"
];

const candidatesData = {
  BEM: [
    { id: 'b1', number: "01", pres: "Arjuna W.", vp: "Bima S.", slogan: "Inovasi Tanpa Batas, Sinergi Tanpa Henti", image: imgs[0] },
    { id: 'b2', number: "02", pres: "Citra D.", vp: "Dimas A.", slogan: "Harmoni dalam Keberagaman, Maju Bersama", image: imgs[1] }
  ],
  DPM: [
    { id: 'd1', number: "01", pres: "Eka P.", vp: "Fajar R.", slogan: "Aspirasi Mahasiswa, Nafas Demokrasi", image: imgs[2] },
    { id: 'd2', number: "02", pres: "Gita S.", vp: "Hadi K.", slogan: "Transparan, Kredibel, Dekat", image: imgs[0] },
    { id: 'd3', number: "03", pres: "Intan L.", vp: "Joko B.", slogan: "Mengawal Kebijakan, Memperjuangkan Hak", image: imgs[1] }
  ],
  HIMA: [
    { id: 'h1', number: "01", pres: "Kiki N.", vp: "Lulu V.", slogan: "Inklusif dan Solutif", image: imgs[1] },
    { id: 'h2', number: "02", pres: "Miko T.", vp: "Nina B.", slogan: "Beraksi untuk Prestasi", image: imgs[2] }
  ]
};

type Division = keyof typeof candidatesData;

export function Candidates() {
  const [activeTab, setActiveTab] = useState<Division>('BEM');
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="candidates" className="py-32 px-4 bg-telkom-dark relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 uppercase tracking-tight">Kandidat Kami</h2>
          <p className="text-gray-400 font-mono max-w-2xl mx-auto">Tentukan pemimpin masa depanmu. Arahkan kursor untuk melihat visi mereka.</p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-16">
          <div className="glass-panel-light rounded-full p-2 flex gap-2">
            {(['BEM', 'DPM', 'HIMA'] as Division[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-3 rounded-full font-bold font-display uppercase tracking-widest transition-all duration-300 ${
                  activeTab === tab 
                    ? 'bg-gradient-to-r from-telkom-red to-telkom-maroon text-white shadow-lg' 
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div 
            key={activeTab}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4 }}
            className={`grid grid-cols-1 md:grid-cols-2 ${activeTab === 'DPM' ? 'lg:grid-cols-3' : 'lg:grid-cols-2'} gap-8 lg:gap-16 justify-center`}
          >
            {candidatesData[activeTab].map((c, i) => (
              <motion.div 
                key={c.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                className="group relative rounded-[2rem] overflow-hidden aspect-[3/4] bg-telkom-black border border-white/10 shadow-2xl mx-auto w-full max-w-md"
              >
                {/* Image */}
                <img 
                  src={c.image} 
                  alt={`${c.pres} & ${c.vp}`} 
                  className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-700 grayscale group-hover:grayscale-0 mix-blend-luminosity group-hover:mix-blend-normal"
                  referrerPolicy="no-referrer"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-telkom-black via-telkom-black/60 to-transparent"></div>

                {/* Number Badge */}
                <div className="absolute top-6 left-6 w-14 h-14 rounded-full glass-panel-light flex items-center justify-center text-xl font-display font-bold text-white shadow-[0_0_20px_rgba(255,255,255,0.1)] border border-white/20">
                  {c.number}
                </div>

                {/* Content */}
                <div className="absolute inset-x-0 bottom-0 p-8 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-3xl font-display font-bold text-white mb-1">{c.pres}</h3>
                  <h4 className="text-lg text-gray-300 font-sans mb-4">& {c.vp}</h4>
                  
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    <p className="text-yellow-400 font-serif italic text-lg mb-6 text-glow-gold">"{c.slogan}"</p>
                    
                    <button 
                      onClick={() => setIsModalOpen(true)}
                      className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-white hover:text-yellow-400 transition-colors"
                    >
                      Bandingkan Cepat <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {isModalOpen && <ComparisonModal onClose={() => setIsModalOpen(false)} />}
    </section>
  );
}
