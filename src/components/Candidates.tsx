"use client";
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { ChevronRight, X, Sparkles, Building2, GraduationCap, Users } from 'lucide-react';

const imgs = [
  "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800&h=1000",
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800&h=1000",
  "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800&h=1000"
];

const candidatesData = {
  BEM: [
    { number: "01", pres: "Arjuna W.", vp: "Bima S.", slogan: "Inovasi Tanpa Batas, Sinergi Tanpa Henti" },
    { number: "02", pres: "Citra D.", vp: "Dimas A.", slogan: "Harmoni dalam Keberagaman, Maju Bersama" }
  ],
  DPM: [
    { number: "01", pres: "Eka P.", vp: "Fajar R.", slogan: "Aspirasi Mahasiswa, Nafas Demokrasi" },
    { number: "02", pres: "Gita S.", vp: "Hadi K.", slogan: "Transparan, Kredibel, Dekat dengan Mahasiswa" },
    { number: "03", pres: "Intan L.", vp: "Joko B.", slogan: "Mengawal Kebijakan, Memperjuangkan Hak" }
  ],
  HIMA: [
    { number: "01", pres: "Kiki N.", vp: "Lulu V.", slogan: "Inklusif dan Solutif untuk Semua" },
    { number: "02", pres: "Miko T.", vp: "Nina B.", slogan: "Beraksi untuk Prestasi Himpunan" }
  ]
};

export function Candidates() {
  const [activeTab, setActiveTab] = useState<'BEM' | 'DPM' | 'HIMA'>('BEM');
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="candidates" className="py-32 px-4 bg-gray-50 relative overflow-hidden">
      {/* Dynamic Backgound Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[800px] bg-[radial-gradient(ellipse_at_center,rgba(200,16,46,0.03)_0,transparent_70%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-6xl md:text-8xl font-display font-black text-transparent bg-clip-text bg-gradient-to-b from-gray-900 to-gray-600 mb-6 uppercase tracking-tight drop-shadow-sm">
            Kandidat <span className="text-telkom-red drop-shadow-lg">Kami</span>
          </h2>
          <p className="text-gray-500 font-mono max-w-2xl mx-auto text-lg">Tentukan pemimpin masa depanmu. Jelajahi visi dan dedikasi mereka.</p>
        </motion.div>

        {/* Fancy Tabs */}
        <div className="flex justify-center mb-20">
          <div className="inline-flex bg-white border border-gray-200 p-2 rounded-full shadow-lg relative z-20">
            {['BEM', 'DPM', 'HIMA'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as any)}
                className={`relative px-10 py-4 rounded-full font-display font-bold text-lg transition-colors overflow-hidden ${activeTab === tab ? 'text-white' : 'text-gray-500 hover:text-gray-900'}`}
              >
                {activeTab === tab && (
                  <motion.div 
                    layoutId="active-tab"
                    className="absolute inset-0 bg-gradient-to-r from-telkom-red to-red-700 shadow-[0_5px_15px_rgba(200,16,46,0.4)]"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10 tracking-widest">{tab}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Candidates Grid */}
        <div className="relative perspective-[2000px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, rotateX: -10, y: 50 }}
              animate={{ opacity: 1, rotateX: 0, y: 0 }}
              exit={{ opacity: 0, rotateX: 10, y: -50 }}
              transition={{ duration: 0.5 }}
              className={`grid grid-cols-1 md:grid-cols-2 ${activeTab === 'DPM' ? 'lg:grid-cols-3' : 'lg:grid-cols-2 max-w-5xl mx-auto'} gap-10`}
            >
              {candidatesData[activeTab].map((c, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ scale: 1.03, y: -10, rotateY: i % 2 === 0 ? 2 : -2 }}
                  className="group relative rounded-[2.5rem] overflow-hidden bg-white shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_40px_80px_rgba(200,16,46,0.15)] border border-gray-100 transition-all duration-500 transform-gpu aspect-[3/4]"
                >
                  <img src={imgs[i % imgs.length]} alt={c.pres} className="absolute inset-0 w-full h-full object-cover object-top filter grayscale opacity-90 group-hover:grayscale-0 group-hover:scale-110 group-hover:opacity-100 transition-all duration-700" />
                
                {/* Advanced Gradients */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-telkom-red/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 mix-blend-overlay"></div>

                {/* Number Badge */}
                <div className="absolute top-8 left-8 w-16 h-16 rounded-full bg-white/20 flex items-center justify-center text-3xl font-display font-black text-white shadow-[0_5px_20px_rgba(0,0,0,0.3)] border border-white/40 backdrop-blur-md group-hover:bg-white group-hover:text-telkom-red transition-all duration-500">
                  {c.number}
                </div>

                <div className="absolute inset-0 p-10 flex flex-col justify-end z-10 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-4xl md:text-5xl font-display font-black text-white mb-2 leading-none drop-shadow-lg">{c.pres}</h3>
                  <h4 className="text-xl text-gray-200 font-sans mb-6 drop-shadow-md">& {c.vp}</h4>
                  
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150">
                    <p className="text-white font-serif italic text-xl mb-8 leading-snug drop-shadow-md">"{c.slogan}"</p>
                    
                    <button 
                      onClick={() => setIsModalOpen(true)}
                      className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white hover:bg-gray-50 text-gray-900 hover:text-telkom-red font-bold text-sm uppercase tracking-widest transition-all duration-300 shadow-xl group-hover:shadow-[0_10px_30px_rgba(200,16,46,0.3)]"
                    >
                      Bandingkan <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Comparison Modal Component (Integrated Light Theme) */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/40 backdrop-blur-md"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white rounded-[2rem] max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative border border-gray-100"
            >
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-6 right-6 p-2 rounded-full bg-gray-100 text-gray-500 hover:bg-red-50 hover:text-telkom-red transition-colors z-10"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="p-10 border-b border-gray-100 bg-gray-50">
                <h2 className="text-3xl font-display font-black text-gray-900 uppercase tracking-widest flex items-center gap-3">
                  <Sparkles className="text-telkom-red w-6 h-6" /> Komparasi Visi Misi
                </h2>
                <p className="text-gray-500 font-mono mt-2">Bandingkan gagasan para calon secara langsung.</p>
              </div>
              
              <div className="p-10 grid grid-cols-1 md:grid-cols-2 gap-12">
                {[1, 2].map((i) => (
                  <div key={i} className="space-y-8">
                    <div className="flex items-center gap-4 border-b border-gray-100 pb-4">
                      <div className="w-12 h-12 rounded-full bg-telkom-red text-white flex items-center justify-center font-display font-bold text-xl">{i}</div>
                      <div>
                        <h3 className="font-bold text-gray-900 text-lg">Paslon {i}</h3>
                        <p className="text-gray-500 text-sm">Arjuna & Bima</p>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="flex items-center gap-2 font-bold text-gray-900 mb-4 uppercase text-sm tracking-widest">
                        <Building2 className="w-4 h-4 text-telkom-red" /> Visi
                      </h4>
                      <p className="text-gray-600 leading-relaxed bg-red-50/50 p-4 rounded-xl border border-red-50">Menjadikan Telkom University Surabaya kampus unggul.</p>
                    </div>

                    <div>
                      <h4 className="flex items-center gap-2 font-bold text-gray-900 mb-4 uppercase text-sm tracking-widest">
                        <GraduationCap className="w-4 h-4 text-telkom-red" /> Misi Inti
                      </h4>
                      <ul className="space-y-4">
                        {[1, 2, 3].map(m => (
                          <li key={m} className="flex gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100 hover:border-red-100 transition-colors">
                            <span className="text-telkom-red font-bold">0{m}</span>
                            <span className="text-gray-600 text-sm">Inovasi akademik berkelanjutan dan pengabdian masyarakat.</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
