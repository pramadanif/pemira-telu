"use client";
export function Partners() {
  const partners = ["BEM KEMA", "DPM", "HIMA FTEIC", "HIMA FTIB", "HIMA FKB", "UKM Jurnalistik", "Tel-U Esports", "Radio Kampus"];
  
  return (
    <section className="py-16 bg-telkom-maroon border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-8 text-center">
        <p className="text-sm font-mono text-gray-400 uppercase tracking-widest">Didukung Oleh</p>
      </div>
      
      <div className="relative flex overflow-x-hidden">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-16 py-4">
          {[...partners, ...partners, ...partners].map((partner, i) => (
            <span key={i} className="text-2xl md:text-4xl font-display font-bold text-white/20 uppercase tracking-tighter hover:text-white/60 transition-colors cursor-default">
              {partner}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
