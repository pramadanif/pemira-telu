"use client";
import { Fingerprint, Instagram, Twitter, Mail, Globe } from 'lucide-react';
import { useRouter } from 'next/navigation';

export function Footer() {
  const router = useRouter();

  return (
    <footer className="bg-white pt-32 pb-12 px-4 relative overflow-hidden border-t-[8px] border-t-telkom-red">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-50 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-6xl md:text-8xl font-display font-black text-gray-900 mb-10 tracking-tighter leading-[0.9] uppercase drop-shadow-sm">JANGAN SIA-SIAKAN<br/><span className="text-telkom-red">SUARAMU.</span></h2>
          <button onClick={() => router.push('/login')} className="group px-12 py-6 bg-gradient-to-r from-red-600 to-telkom-red text-white rounded-[2rem] font-display font-black text-2xl uppercase tracking-[0.2em] shadow-[0_20px_40px_rgba(200,16,46,0.3)] hover:shadow-[0_25px_50px_rgba(200,16,46,0.4)] flex items-center gap-4 mx-auto overflow-hidden relative active:scale-95 transition-all">
            <div className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out pointer-events-none"></div>
            <Fingerprint className="w-8 h-8 relative z-10" />
            <span className="relative z-10 drop-shadow-md">Pilih Sekarang</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-t border-gray-100 pt-16 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-telkom-red rounded-xl flex items-center justify-center text-white font-black font-display text-xl shadow-lg">T</div>
              <h3 className="text-2xl font-display font-black text-gray-900 tracking-wider">PEMIRA TEL-U SBY</h3>
            </div>
            <p className="text-gray-500 max-w-md leading-relaxed font-medium">
              Portal resmi Pemilihan Raya Mahasiswa Telkom University Surabaya. Membawa tradisi demokrasi ke ranah digital yang andal dan terpercaya.
            </p>
          </div>
          
          <div>
            <h4 className="text-gray-900 font-black mb-6 uppercase tracking-widest text-sm font-display">Tautan Prioritas</h4>
            <ul className="space-y-4 text-gray-500 font-medium font-sans">
              <li><a href="/" className="hover:text-telkom-red transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-red-200"></span> Beranda</a></li>
              <li><a href="/#candidates" className="hover:text-telkom-red transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-red-200"></span> Kandidat Kami</a></li>
              <li><a href="/quick-count" className="hover:text-telkom-red transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-red-200"></span> Hitung Cepat Layar Utama</a></li>
              <li><a href="/#faq" className="hover:text-telkom-red transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-red-200"></span> Bantuan Akademik IT</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-gray-900 font-black mb-6 uppercase tracking-widest text-sm font-display">Tetap Terhubung</h4>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-500 hover:bg-telkom-red hover:border-telkom-red hover:text-white hover:shadow-lg transition-all"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="w-12 h-12 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-500 hover:bg-telkom-red hover:border-telkom-red hover:text-white hover:shadow-lg transition-all"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="w-12 h-12 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-500 hover:bg-telkom-red hover:border-telkom-red hover:text-white hover:shadow-lg transition-all"><Mail className="w-5 h-5" /></a>
              <a href="#" className="w-12 h-12 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-500 hover:bg-telkom-red hover:border-telkom-red hover:text-white hover:shadow-lg transition-all"><Globe className="w-5 h-5" /></a>
            </div>
          </div>
        </div>

        <div className="text-center text-gray-400 text-sm font-mono pt-8 border-t border-gray-50">
          <p>&copy; 2026 KPR Telkom University Surabaya. Hak Cipta Dilindungi.</p>
          <p className="mt-2 text-xs uppercase tracking-widest">Dirancang dengan standar presisi keamanan tinggi.</p>
        </div>
      </div>
    </footer>
  );
}
