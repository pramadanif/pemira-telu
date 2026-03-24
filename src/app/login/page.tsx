"use client";
import { useState } from 'react';
import { motion } from 'motion/react';
import { useRouter } from 'next/navigation';
import { Fingerprint, Lock, User, ArrowRight, ShieldCheck } from 'lucide-react';

export default function LoginPage() {
  const router = useRouter();
  const [nim, setNim] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nim || !password) {
      setError(true);
      setTimeout(() => setError(false), 2000);
      return;
    }
    
    setIsSubmitting(true);
    // Simulate API verification delay
    setTimeout(() => {
      router.push('/vote');
    }, 2500);
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center bg-gray-50 overflow-hidden font-sans selection:bg-red-100 selection:text-telkom-red">
      {/* Immersive Background (Light Theme) */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-telkom-red/5 rounded-full mix-blend-multiply filter blur-[150px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[40rem] h-[40rem] bg-red-100 rounded-full mix-blend-multiply filter blur-[200px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      {/* Decorative Grids */}
      <div className="absolute inset-0 z-0 opacity-[0.2]" style={{ backgroundImage: 'radial-gradient(circle, #E5E7EB 2px, transparent 2px)', backgroundSize: '40px 40px' }}></div>

      <div className="relative z-10 w-full max-w-5xl flex flex-col lg:flex-row gap-12 lg:gap-24 items-center p-8">
        
        {/* Left Side Branding */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="lg:w-1/2 text-center lg:text-left"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-red-100 text-telkom-red shadow-sm text-sm font-mono tracking-widest uppercase mb-8 font-bold">
            <ShieldCheck className="w-4 h-4" /> SSO Terenkripsi
          </div>
          <h1 className="text-5xl lg:text-7xl font-display font-black text-gray-900 mb-6 uppercase tracking-tighter leading-tight drop-shadow-sm">
            Gerbang<br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-telkom-red">Demokrasi</span>
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed max-w-md mx-auto lg:mx-0 font-medium">
            Masuk menggunakan kredensial iGracias Telkom University. Identitas Anda akan dipisahkan secara kriptografis dari surat suara setelah verifikasi.
          </p>
        </motion.div>

        {/* Right Side Form */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
          className="w-full lg:w-1/2 max-w-md"
        >
          <div className="bg-white p-10 md:p-12 rounded-[2.5rem] border border-gray-100 shadow-[0_30px_60px_rgba(0,0,0,0.06)] hover:shadow-[0_40px_80px_rgba(200,16,46,0.08)] transition-all duration-500 relative overflow-hidden group">
            {/* Form Glow Insert */}
            <div className="absolute -top-32 -right-32 w-64 h-64 bg-red-50 rounded-full blur-[80px] group-hover:bg-red-100 transition-colors"></div>
            
            <div className="text-center mb-10 relative">
              <div className="w-20 h-20 mx-auto bg-gray-50 rounded-full flex items-center justify-center border border-red-100 mb-6 shadow-sm group-hover:scale-110 transition-transform duration-500">
                <Fingerprint className="w-10 h-10 text-telkom-red" />
              </div>
              <h2 className="text-2xl font-display font-black text-gray-900 uppercase tracking-wider">Otentikasi Pemilih</h2>
            </div>

            <form onSubmit={handleLogin} className="space-y-6 relative">
              <div className="relative group/input">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <User className="w-5 h-5 text-gray-400 group-focus-within/input:text-telkom-red transition-colors" />
                </div>
                <input 
                  type="text" 
                  value={nim}
                  onChange={(e) => setNim(e.target.value)}
                  disabled={isSubmitting}
                  placeholder="Nomor Induk Mahasiswa" 
                  className={`w-full bg-gray-50 border ${error && !nim ? 'border-red-500 bg-red-50' : 'border-gray-200'} focus:border-telkom-red rounded-xl py-4 pl-12 pr-4 text-gray-900 placeholder:text-gray-400 font-medium outline-none transition-all focus:bg-white focus:shadow-[0_0_20px_rgba(200,16,46,0.1)]`}
                />
              </div>

              <div className="relative group/input">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock className="w-5 h-5 text-gray-400 group-focus-within/input:text-telkom-red transition-colors" />
                </div>
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={isSubmitting}
                  placeholder="Kata Sandi iGracias" 
                  className={`w-full bg-gray-50 border ${error && !password ? 'border-red-500 bg-red-50' : 'border-gray-200'} focus:border-telkom-red rounded-xl py-4 pl-12 pr-4 text-gray-900 placeholder:text-gray-400 font-medium outline-none transition-all focus:bg-white focus:shadow-[0_0_20px_rgba(200,16,46,0.1)]`}
                />
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full group/btn mt-4 relative overflow-hidden bg-telkom-red text-white rounded-xl py-4 font-bold uppercase tracking-widest font-mono text-sm shadow-[0_10px_20px_rgba(200,16,46,0.2)] hover:shadow-[0_15px_30px_rgba(200,16,46,0.3)] disabled:opacity-70 disabled:cursor-not-allowed transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-telkom-red transform -translate-x-full group-hover/btn:translate-x-0 transition-transform duration-500 z-0"></div>
                <div className="relative z-10 flex items-center justify-center gap-3">
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                      />
                      Memverifikasi Identitas...
                    </>
                  ) : (
                    <>
                      Masuk Bilik Suara <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </>
                  )}
                </div>
              </button>
            </form>
            
            <div className="mt-8 text-center relative z-10">
              <a href="/" className="text-sm font-mono font-bold text-gray-400 hover:text-telkom-red transition-colors">← Kembali ke Beranda</a>
            </div>
            
          </div>
        </motion.div>
      </div>
    </div>
  );
}
