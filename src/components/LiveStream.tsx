"use client";
import { motion } from 'motion/react';
import { Play, MessageSquare } from 'lucide-react';

export function LiveStream() {
  return (
    <section className="py-32 px-4 bg-telkom-dark relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 flex justify-between items-end">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
              </span>
              <span className="text-red-500 font-mono font-bold uppercase tracking-widest text-sm">Sedang Berlangsung</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white">Arena Debat Akbar</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Video Player Mock */}
          <div className="lg:col-span-2 glass-panel rounded-3xl aspect-video relative overflow-hidden group cursor-pointer border-white/10">
            <img src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=1200" alt="Panggung Debat" className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-luminosity" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-telkom-red/80 backdrop-blur-sm flex items-center justify-center text-white pl-2 shadow-[0_0_30px_rgba(226,6,19,0.6)] transform group-hover:scale-110 transition-transform">
                <Play className="w-8 h-8" />
              </div>
            </div>
          </div>

          {/* Chat Mock */}
          <div className="glass-panel rounded-3xl p-6 flex flex-col h-[400px] lg:h-auto border-white/10">
            <div className="flex items-center gap-2 border-b border-white/10 pb-4 mb-4">
              <MessageSquare className="w-5 h-5 text-yellow-400" />
              <h3 className="font-bold text-white">Obrolan Langsung</h3>
            </div>
            
            <div className="flex-1 overflow-y-auto space-y-4 pr-2 custom-scrollbar">
              {[
                { user: "Mahasiswa_01", text: "Paslon 1 mantap programnya!" },
                { user: "Anon_FTEIC", text: "Tunggu jawaban paslon 2 soal fasilitas." },
                { user: "TelU_Student", text: "Debatnya seru banget tahun ini 🔥" },
                { user: "Voter_99", text: "Semoga yang terpilih bisa bawa perubahan nyata." },
              ].map((msg, i) => (
                <div key={i} className="text-sm">
                  <span className="font-bold text-yellow-400 mr-2">{msg.user}:</span>
                  <span className="text-gray-300">{msg.text}</span>
                </div>
              ))}
            </div>

            <div className="mt-4 pt-4 border-t border-white/10">
              <input type="text" placeholder="Kirim pesan..." className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-yellow-500 transition-colors" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
