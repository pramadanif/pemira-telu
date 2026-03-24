"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useRouter } from 'next/navigation';
import { ShieldCheck, CheckSquare, Key, ArrowRight, ArrowLeft, Lock, Info } from 'lucide-react';

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

type Division = 'BEM' | 'DPM' | 'HIMA';
const stepsFlow: (Division | 'INTRO' | 'REVIEW' | 'SUCCESS')[] = ['INTRO', 'BEM', 'DPM', 'HIMA', 'REVIEW', 'SUCCESS'];

export default function VotePage() {
  const router = useRouter();
  const [currentStepIdx, setCurrentStepIdx] = useState(0);
  const [selections, setSelections] = useState<Record<Division, string | null>>({ BEM: null, DPM: null, HIMA: null });
  const [isProcessing, setIsProcessing] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState<Division | null>(null);

  const currentStep = stepsFlow[currentStepIdx];

  const handleNext = () => {
    if (currentStep === 'REVIEW') {
      submitVote();
    } else if (['BEM', 'DPM', 'HIMA'].includes(currentStep)) {
      setShowConfirmModal(currentStep as Division);
    } else {
      window.scrollTo(0, 0);
      setCurrentStepIdx(s => s + 1);
    }
  };

  const confirmSection = () => {
    setShowConfirmModal(null);
    window.scrollTo(0, 0);
    setCurrentStepIdx(s => s + 1);
  };

  const submitVote = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setCurrentStepIdx(prev => prev + 1);
      setTimeout(() => {
        router.push('/quick-count');
      }, 3000);
    }, 4000);
  };

  const getCandidateById = (div: Division, id: string) => candidatesData[div].find(c => c.id === id);

  return (
    <div className="min-h-screen bg-white text-gray-900 selection:bg-telkom-red/20 selection:text-telkom-red flex flex-col relative overflow-hidden">
      {/* Dynamic Background Light Theme */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-full h-[50vh] bg-gradient-to-b from-gray-50 to-transparent"></div>
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-telkom-red/5 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute top-1/2 -left-40 w-[500px] h-[500px] bg-red-500/5 rounded-full blur-[150px]"></div>
      </div>

      {/* Header Bar */}
      <header className="fixed top-0 inset-x-0 h-20 bg-white/80 backdrop-blur-md border-b border-gray-100 z-40 flex items-center px-6 lg:px-12 justify-between shadow-sm">
        <div className="font-display font-bold text-xl uppercase tracking-widest text-gray-900 flex items-center gap-3">
          <div className="bg-telkom-red/10 p-2 rounded-full"><ShieldCheck className="text-telkom-red w-5 h-5" /></div>
          Bilik Suara Digital
        </div>
        <div className="text-sm font-mono text-gray-500">
          Sesi aktif: <span className="text-green-600 font-bold">Aman</span>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 relative z-10 pt-32 pb-24 px-4 flex flex-col max-w-7xl mx-auto w-full">
        {/* Progress Tracker */}
        {currentStep !== 'INTRO' && currentStep !== 'SUCCESS' && (
           <div className="mb-12 flex justify-center">
             <div className="bg-white shadow-lg px-8 py-4 rounded-full flex gap-4 md:gap-8 items-center border border-gray-100">
               {['BEM', 'DPM', 'HIMA', 'REVIEW'].map((step, i) => {
                 const stepIdxInFlow = stepsFlow.indexOf(step as any);
                 const isActive = currentStepIdx === stepIdxInFlow;
                 const isPassed = currentStepIdx > stepIdxInFlow;
                 return (
                   <div key={step} className="flex items-center gap-2 md:gap-4">
                     <div className={`flex items-center justify-center w-8 h-8 rounded-full font-mono text-xs font-bold transition-all ${isActive ? 'bg-telkom-red text-white shadow-[0_4px_15px_rgba(200,16,46,0.3)]' : isPassed ? 'bg-red-800 text-white' : 'bg-gray-100 text-gray-400'}`}>
                       {isPassed ? <CheckSquare className="w-4 h-4" /> : i + 1}
                     </div>
                     <span className={`hidden md:inline text-xs font-bold tracking-widest uppercase ${isActive ? 'text-telkom-red' : isPassed ? 'text-gray-900' : 'text-gray-400'}`}>{step}</span>
                     {i < 3 && <div className="w-4 md:w-8 h-[2px] bg-gray-200 rounded-full ml-2 md:ml-4">
                       {isPassed && <div className="h-full w-full bg-telkom-red rounded-full"></div>}
                     </div>}
                   </div>
                 );
               })}
             </div>
           </div>
        )}

        <AnimatePresence mode="wait">
          {/* STEP: INTRO */}
          {currentStep === 'INTRO' && (
            <motion.div 
              key="intro"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="flex-1 flex flex-col items-center justify-center max-w-3xl mx-auto text-center mt-12"
            >
              <div className="w-24 h-24 bg-white rounded-full border border-red-100 flex items-center justify-center mb-8 shadow-xl">
                <Key className="w-10 h-10 text-telkom-red" />
              </div>
              <h1 className="text-4xl md:text-6xl font-display font-black mb-6 uppercase text-gray-900">Sumpah Pemilih</h1>
              <div className="bg-white border border-gray-100 shadow-2xl p-8 md:p-12 rounded-3xl mb-12 text-left">
                <p className="text-lg md:text-xl text-gray-700 font-serif italic leading-relaxed mb-6 border-l-4 border-telkom-red pl-6 bg-red-50/50 py-2">
                  "Saya menggunakan hak pilih saya dengan kesadaran penuh, bebas dari paksaan pihak mana pun. Saya berkomitmen untuk menjaga kerahasiaan pilihan saya dan mendukung proses demokrasi yang jujur dan adil."
                </p>
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 flex items-start gap-4">
                  <ShieldCheck className="w-6 h-6 text-green-600 shrink-0 mt-1" />
                  <p className="text-sm text-gray-600">Pilihan Anda dienkripsi mutakhir. Panitia dan sistem tidak dapat melacak identitas pemilih pada setiap surat suara. Gunakan hak Anda dengan bijak.</p>
                </div>
              </div>
              
              <button onClick={handleNext} className="px-12 py-5 bg-gradient-to-r from-telkom-red to-red-700 text-white rounded-full font-bold uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-[0_10px_30px_rgba(200,16,46,0.3)] flex items-center gap-3">
                Mulai Memilih <ArrowRight className="w-5 h-5" />
              </button>
            </motion.div>
          )}

          {/* STEPS: BEM / DPM / HIMA Voting Floor */}
          {['BEM', 'DPM', 'HIMA'].includes(currentStep) && (
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="flex-1 flex flex-col"
            >
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-6xl font-display font-black uppercase mb-4 text-gray-900">Pemilihan {currentStep}</h2>
                <p className="text-gray-500 font-mono">Pilih satu pasangan calon yang merepresentasikan aspirasi Anda.</p>
              </div>

              <div className={`grid grid-cols-1 md:grid-cols-2 ${currentStep === 'DPM' ? 'lg:grid-cols-3' : 'lg:grid-cols-2'} gap-8 justify-center max-w-6xl mx-auto w-full perspective-[1000px]`}>
                {candidatesData[currentStep as Division].map((c) => {
                  const isSelected = selections[currentStep as Division] === c.id;
                  return (
                    <motion.div 
                      key={c.id} 
                      onClick={() => setSelections({ ...selections, [currentStep as Division]: c.id })}
                      whileHover={{ scale: 1.02, rotateY: 2, y: -5 }}
                      className={`relative group cursor-pointer overflow-hidden rounded-[2.5rem] aspect-[3/4] border-2 transition-all duration-300 transform-gpu ${isSelected ? 'border-telkom-red shadow-[0_20px_40px_rgba(200,16,46,0.2)] bg-white' : 'border-gray-200 bg-white shadow-xl hover:border-gray-300'}`}
                    >
                      {/* Image */}
                      <img src={c.image} alt={c.pres} className={`absolute inset-0 w-full h-[60%] object-cover object-top transition-all duration-700 ${isSelected ? 'grayscale-0' : 'grayscale group-hover:grayscale-0'}`} />
                      
                      {/* Selection overlay graphic */}
                      <div className="absolute top-6 right-6 z-30">
                        {isSelected ? (
                          <motion.div initial={{scale:0}} animate={{scale:1}} className="w-12 h-12 bg-telkom-red border-4 border-white rounded-full flex items-center justify-center text-white shadow-lg">
                            <CheckSquare className="w-5 h-5" />
                          </motion.div>
                        ) : (
                          <div className="w-12 h-12 bg-white/80 backdrop-blur-sm border-2 border-white/50 rounded-full flex items-center justify-center text-gray-400 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">
                            <ArrowRight className="w-5 h-5" />
                          </div>
                        )}
                      </div>

                      {/* Number Badge */}
                      <div className={`absolute top-[50%] -translate-y-[50%] left-8 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-display font-black z-20 shadow-xl transition-all ${isSelected ? 'bg-telkom-red text-white scale-110' : 'bg-white text-gray-900 border border-gray-100'}`}>
                        {c.number}
                      </div>

                      {/* Content Lower Half */}
                      <div className="absolute inset-x-0 bottom-0 h-[45%] bg-white p-8 pt-12 z-20 flex flex-col justify-end rounded-t-3xl shadow-[0_-20px_30px_rgba(0,0,0,0.05)] border-t border-gray-50">
                        <h3 className="text-3xl font-display font-black text-gray-900 mb-1">{c.pres}</h3>
                        <h4 className="text-lg text-gray-500 font-sans mb-4">& {c.vp}</h4>
                        <p className={`font-serif italic text-[15px] leading-relaxed transition-colors ${isSelected ? 'text-telkom-red font-medium' : 'text-gray-400'}`}>"{c.slogan}"</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Action Bar */}
              <div className="mt-16 flex justify-between items-center max-w-6xl mx-auto w-full bg-white p-6 rounded-full shadow-lg border border-gray-100">
                <button 
                  onClick={() => setCurrentStepIdx(s => s - 1)}
                  className="flex items-center gap-2 px-6 py-3 rounded-full text-gray-500 hover:bg-gray-100 hover:text-gray-900 transition-colors uppercase font-mono text-sm tracking-widest font-bold"
                >
                  <ArrowLeft className="w-4 h-4" /> Kembali
                </button>
                <div className="text-sm font-mono text-gray-400 hidden md:block">
                  Tahap {['BEM','DPM','HIMA'].indexOf(currentStep)+1} dari 3
                </div>
                <button 
                  onClick={handleNext} 
                  disabled={!selections[currentStep as Division]}
                  className="flex items-center gap-2 px-8 py-3 bg-telkom-red text-white rounded-full font-bold uppercase tracking-widest disabled:opacity-30 disabled:cursor-not-allowed hover:bg-red-800 transition-all shadow-md active:scale-95"
                >
                  Lanjut <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          )}

          {/* STEP: REVIEW */}
          {currentStep === 'REVIEW' && !isProcessing && (
            <motion.div 
              key="review"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="flex-1 flex flex-col items-center justify-center max-w-4xl mx-auto w-full mt-8"
            >
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-display font-black uppercase mb-4 text-gray-900">Konfirmasi Final</h2>
                <p className="text-gray-500 font-mono">Harap pastikan pilihan surat suara Anda sebelum dikunci ke dalam bilik digital.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-16">
                {(['BEM', 'DPM', 'HIMA'] as Division[]).map((div) => {
                  const selId = selections[div];
                  const candidate = selId ? getCandidateById(div, selId) : null;
                  
                  return (
                    <div key={div} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-xl relative overflow-hidden group">
                      <div className="absolute top-0 right-0 p-4 opacity-[0.03] pointer-events-none">
                        <span className="text-8xl font-display font-black text-gray-900">{div}</span>
                      </div>
                      <h3 className="font-mono text-sm uppercase tracking-widest text-telkom-red font-bold mb-6">{div}</h3>
                      
                      {candidate ? (
                        <div className="relative z-10">
                          <div className="w-16 h-16 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center text-3xl font-display font-black text-gray-900 mb-6 shadow-inner">
                            {candidate.number}
                          </div>
                          <h4 className="text-2xl font-bold text-gray-900 mb-1">{candidate.pres}</h4>
                          <p className="text-gray-500 text-sm mb-6">& {candidate.vp}</p>
                          <button onClick={() => setCurrentStepIdx(stepsFlow.indexOf(div))} className="px-4 py-2 bg-gray-50 rounded-lg text-xs text-gray-600 font-bold uppercase tracking-wider hover:bg-gray-100 hover:text-gray-900 transition-colors w-full border border-gray-200">Ubah Suara</button>
                        </div>
                      ) : (
                        <div className="relative z-10 flex flex-col items-center justify-center h-full py-10 opacity-70">
                          <Info className="w-8 h-8 text-orange-400 mb-4" />
                          <span className="text-gray-900 font-bold uppercase text-sm tracking-widest mb-4">Abstain (Kosong)</span>
                          <button onClick={() => setCurrentStepIdx(stepsFlow.indexOf(div))} className="px-4 py-2 bg-gray-50 rounded-lg text-xs text-telkom-red font-bold uppercase tracking-wider hover:bg-red-50 hover:text-red-700 transition-colors border border-red-100">Beri Suara</button>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              <button 
                onClick={handleNext}
                className="w-full md:w-auto px-16 py-6 bg-gradient-to-r from-telkom-red to-red-800 text-white rounded-full font-display font-bold text-xl uppercase tracking-widest hover:scale-[1.02] active:scale-98 transition-all shadow-[0_15px_40px_rgba(200,16,46,0.3)] flex items-center justify-center gap-4 group"
              >
                Kunci & Kirim Suara <Lock className="w-6 h-6 group-hover:scale-110 transition-transform" />
              </button>
            </motion.div>
          )}

          {/* STEP: PROCESSING / SUCCESS */}
          {(isProcessing || currentStep === 'SUCCESS') && (
            <motion.div 
              key="processing"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex-1 flex flex-col items-center justify-center max-w-xl mx-auto text-center"
            >
              {isProcessing ? (
                <div className="flex flex-col items-center">
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ ease: "linear", duration: 1, repeat: Infinity }}
                    className="w-12 h-12 border-4 border-gray-100 border-t-telkom-red rounded-full mb-8"
                  />
                  <h2 className="text-3xl font-display font-bold mb-3 text-gray-900">Memproses...</h2>
                  <p className="text-gray-500 font-medium">Sistem sedang memverifikasi identitas aman dan mengunci pilihan Anda secara rahasia.</p>
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white p-10 rounded-[2rem] shadow-xl border border-gray-100 max-w-md w-full"
                >
                  <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6 mx-auto">
                    <CheckSquare className="w-10 h-10 text-green-600" />
                  </div>
                  <h2 className="text-3xl font-display font-bold mb-3 text-gray-900">Suara Terkirim</h2>
                  <p className="text-gray-500 font-medium mb-8">Terima kasih atas partisipasi Anda dalam Pemira Tel-U Surabaya 2026.</p>
                  <div className="text-sm font-mono text-gray-400">
                    Mengalihkan ke layar utama...
                  </div>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Confirmation Modal overlay */}
      <AnimatePresence>
        {showConfirmModal && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-sm"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 30, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-2xl max-w-lg w-full text-center relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-6 opacity-5 pointer-events-none">
                <ShieldCheck className="w-32 h-32" />
              </div>
              <div className="w-20 h-20 bg-red-50 text-telkom-red border border-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Info className="w-10 h-10" />
              </div>
              <h3 className="text-3xl font-display font-black uppercase text-gray-900 mb-2">Konfirmasi {showConfirmModal}</h3>
              <p className="text-gray-500 mb-8">Anda telah memilih Paslon Nomor <strong className="text-gray-900 font-display text-lg">{getCandidateById(showConfirmModal, selections[showConfirmModal]!)?.number}</strong>. Apakah Anda yakin ingin melanjutkan ke divisi berikutnya?</p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => setShowConfirmModal(null)}
                  className="px-8 py-4 rounded-full font-bold text-gray-600 bg-gray-100 hover:bg-gray-200 transition-colors uppercase tracking-widest text-sm"
                >
                  Ubah Pilihan
                </button>
                <button 
                  onClick={confirmSection}
                  className="px-8 py-4 rounded-full font-bold text-white bg-telkom-red hover:bg-red-800 transition-colors uppercase tracking-widest text-sm shadow-[0_5px_15px_rgba(200,16,46,0.3)]"
                >
                  Ya, Lanjutkan
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
