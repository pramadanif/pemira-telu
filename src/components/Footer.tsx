"use client";
import { Fingerprint, Instagram, Twitter, Mail, Globe } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-telkom-dark pt-32 pb-12 px-4 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[1px] bg-gradient-to-r from-transparent via-telkom-red to-transparent"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-7xl font-display font-bold text-white mb-8">JANGAN SIA-SIAKAN<br/>SUARAMU.</h2>
          <button className="px-10 py-5 bg-white text-telkom-dark rounded-full font-display font-bold text-xl uppercase tracking-wider hover:bg-gray-200 transition-colors shadow-[0_0_40px_rgba(255,255,255,0.3)] flex items-center gap-3 mx-auto">
            <Fingerprint className="w-6 h-6" />
            Pilih Sekarang
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-t border-white/10 pt-16 mb-16">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-display font-bold text-white mb-4">PEMIRA TEL-U SBY</h3>
            <p className="text-gray-400 max-w-sm leading-relaxed">
              Portal resmi Pemilihan Raya Mahasiswa Telkom University Surabaya. Memberdayakan demokrasi melalui teknologi.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Tautan Cepat</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="/" className="hover:text-yellow-400 transition-colors">Beranda</a></li>
              <li><a href="/#candidates" className="hover:text-yellow-400 transition-colors">Kandidat</a></li>
              <li><a href="/quick-count" className="hover:text-yellow-400 transition-colors">Hitung Cepat</a></li>
              <li><a href="/#faq" className="hover:text-yellow-400 transition-colors">Pusat Bantuan</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Hubungi Kami</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-telkom-red hover:text-white transition-all"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-telkom-red hover:text-white transition-all"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-telkom-red hover:text-white transition-all"><Mail className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-telkom-red hover:text-white transition-all"><Globe className="w-5 h-5" /></a>
            </div>
          </div>
        </div>

        <div className="text-center text-gray-500 text-sm font-mono">
          <p>&copy; 2026 KPR Telkom University Surabaya. Hak Cipta Dilindungi.</p>
          <p className="mt-2">Dirancang dengan presisi untuk demokrasi.</p>
        </div>
      </div>
    </footer>
  );
}
