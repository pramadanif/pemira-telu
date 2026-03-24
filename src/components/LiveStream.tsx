"use client";
import { motion } from 'motion/react';
import { Play, MessageSquare } from 'lucide-react';

export function LiveStream() {
  return (
    <section className="py-32 px-4 bg-gray-50 relative border-t border-gray-100">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4 bg-white px-4 py-2 rounded-full border border-red-100 shadow-sm inline-flex">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-telkom-red"></span>
              </span>
              <span className="text-telkom-red font-mono font-bold uppercase tracking-widest text-sm">Sedang Berlangsung</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-display font-black text-gray-900 uppercase tracking-tighter drop-shadow-sm">Arena Debat Akbar</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Video Player Mock */}
          <div className="lg:col-span-2 bg-white rounded-[2.5rem] aspect-video relative overflow-hidden group cursor-pointer border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.06)]">
            <img src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=1200" alt="Panggung Debat" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-gray-900/40 group-hover:bg-gray-900/20 transition-colors flex items-center justify-center">
              <div className="w-24 h-24 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-telkom-red pl-2 shadow-[0_15px_40px_rgba(0,0,0,0.3)] transform group-hover:scale-110 transition-transform">
                <Play className="w-10 h-10" />
              </div>
            </div>
          </div>

          {/* Chat Mock */}
          <div className="bg-white rounded-[2.5rem] p-8 flex flex-col h-[500px] lg:h-auto border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.06)]">
            <div className="flex items-center gap-3 border-b border-gray-100 pb-6 mb-6">
              <div className="p-2 bg-red-50 rounded-lg"><MessageSquare className="w-5 h-5 text-telkom-red" /></div>
              <h3 className="font-black font-display text-gray-900 text-xl uppercase tracking-wider">Obrolan Terpusat</h3>
            </div>
            
            <div className="flex-1 overflow-y-auto space-y-6 pr-4 custom-scrollbar">
              {[
                { user: "Mahasiswa_01", text: "Paslon 1 terstruktur banget nyampein program kerjanya 👍" },
                { user: "Anon_FTEIC", text: "Tunggu jawaban paslon 2 soal fasilitas laboratorium nih." },
                { user: "TelU_Student", text: "Debatnya jauh lebih seru tahun ini 🔥" },
                { user: "Voter_99", text: "Fokus ke solusi konkrit, jangan cuma retorika." },
                { user: "FIK_Warrior", text: "Gaskeun!!!" },
              ].map((msg, i) => (
                <div key={i} className="text-sm bg-gray-50 p-4 rounded-2xl border border-gray-100">
                  <div className="font-bold text-telkom-red mb-1">{msg.user}</div>
                  <div className="text-gray-600 leading-relaxed">{msg.text}</div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-gray-100">
              <input type="text" placeholder="Ketik pesan Anda..." className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-6 py-4 text-sm text-gray-900 outline-none focus:border-telkom-red focus:bg-white transition-all shadow-inner placeholder:text-gray-400 font-medium" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
