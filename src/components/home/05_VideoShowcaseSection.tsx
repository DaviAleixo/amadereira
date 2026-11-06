import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Trees, ShieldCheck, Gem, Play } from 'lucide-react';

export const VideoShowcaseSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const renderPillars = () => (
    <div className="pt-4 sm:pt-5 grid grid-cols-3 gap-2 sm:gap-5 border-t border-[#be7b4c]/25 w-full">
      {/* Item 1 */}
      <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-2 group">
        <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[#be7b4c]/15 border border-[#be7b4c]/30 flex items-center justify-center text-[#be7b4c] group-hover:scale-110 group-hover:bg-[#be7b4c] group-hover:text-[#141414] transition-all">
          <Trees className="w-4 h-4 sm:w-5 sm:h-5" />
        </div>
        <span className="text-[9.5px] sm:text-xs font-bold uppercase tracking-wider text-[#f3e2ba]/90 leading-snug">
          MADEIRA 100% LEGAL & CERTIFICADA
        </span>
      </div>

      {/* Item 2 */}
      <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-2 group border-l border-[#be7b4c]/20 pl-2 sm:pl-4">
        <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[#be7b4c]/15 border border-[#be7b4c]/30 flex items-center justify-center text-[#be7b4c] group-hover:scale-110 group-hover:bg-[#be7b4c] group-hover:text-[#141414] transition-all">
          <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />
        </div>
        <span className="text-[9.5px] sm:text-xs font-bold uppercase tracking-wider text-[#f3e2ba]/90 leading-snug">
          CONFIANÇA & GARANTIA DIRETA
        </span>
      </div>

      {/* Item 3 */}
      <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-2 group border-l border-[#be7b4c]/20 pl-2 sm:pl-4">
        <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[#be7b4c]/15 border border-[#be7b4c]/30 flex items-center justify-center text-[#be7b4c] group-hover:scale-110 group-hover:bg-[#be7b4c] group-hover:text-[#141414] transition-all">
          <Gem className="w-4 h-4 sm:w-5 sm:h-5" />
        </div>
        <span className="text-[9.5px] sm:text-xs font-bold uppercase tracking-wider text-[#f3e2ba]/90 leading-snug">
          PEÇAS ÚNICAS & EXCLUSIVAS
        </span>
      </div>
    </div>
  );

  return (
    <section id="institucional" className="relative w-full min-h-[100dvh] flex items-center justify-center overflow-hidden bg-[#120f0d] py-16 sm:py-20 lg:py-24 text-[#f3e2ba]">
      {/* 1. Background Image Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <img
          src="/images/backgroundvideo.webp"
          alt="A Madeireira Background Texture"
          className="w-full h-full object-cover object-center"
          loading="lazy"
          decoding="async"
        />
        {/* Subtle vignette/contrast overlay */}
        <div className="absolute inset-0 bg-black/35 mix-blend-multiply" />
      </div>

      <div className="container-editorial relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* LEFT COLUMN: Narrative & Value Proposition */}
          <div className="lg:col-span-7 flex flex-col justify-center items-center lg:items-start text-center lg:text-left space-y-6 sm:space-y-8">
            
            {/* Tagline */}
            <div className="space-y-2 flex flex-col items-center lg:items-start">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.3em] text-[#be7b4c]">
                SEGURANÇA & PROCEDÊNCIA
              </span>
              <div className="w-14 h-[2.5px] bg-[#be7b4c] rounded-full mx-auto lg:mx-0" />
            </div>

            {/* Main Bold Display Title */}
            <h2 className="font-slab uppercase text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl tracking-tight leading-[1.05] drop-shadow-lg text-center lg:text-left">
              <span className="text-[#f3e2ba] block">POR QUE CONFIAR</span>
              <span className="text-[#be7b4c] block mt-1">NA AMADEIREIRA?</span>
            </h2>

            {/* Descriptive Body Paragraph */}
            <p className="text-sm sm:text-base lg:text-lg text-[#f3e2ba]/85 font-light leading-relaxed max-w-xl text-center lg:text-left mx-auto lg:mx-0">
              Assista ao vídeo e veja de perto o cuidado de ponta a ponta. Madeira maciça autêntica de origem 
              legal certificada, processo artesanal minucioso e um compromisso transparente com a excelência e durabilidade do seu projeto.
            </p>

            {/* 3 Pillars - VISÍVEL APENAS NO DESKTOP */}
            <div className="hidden lg:block w-full">
              {renderPillars()}
            </div>
          </div>

          {/* RIGHT COLUMN: Framed Vertical Video (9:16) with Offset Brown Backing Plate */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center w-full">
            <div className="relative w-full max-w-[280px] xs:max-w-[310px] sm:max-w-[340px] md:max-w-[360px] flex items-center justify-center my-4 sm:my-6">
              
              {/* Backing Terracotta Accent Plate - Exatamente como na Foto 1: deslocado para o topo e esquerda */}
              <div 
                className="absolute top-[-14px] left-[-14px] sm:top-[-20px] sm:left-[-20px] w-full h-full bg-[#be7b4c] rounded-none opacity-95 z-0 pointer-events-none shadow-2xl"
              />

              {/* Video Card Container (Vertical 9:16) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="relative z-10 w-full aspect-[9/16] rounded-none overflow-hidden border-2 border-[#be7b4c] bg-[#1a1410] shadow-[0_30px_60px_rgba(0,0,0,0.9)] group"
              >
                <video
                  ref={videoRef}
                  controls={isPlaying}
                  playsInline
                  preload="metadata"
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                  className="w-full h-full object-cover"
                >
                  <source src="/images/confiar.mp4" type="video/mp4" />
                  Seu navegador não suporta a reprodução deste vídeo.
                </video>

                {/* Stylish Play Overlay Button - Igual à foto com círculo escuro e borda branca */}
                {!isPlaying && (
                  <button
                    type="button"
                    onClick={togglePlay}
                    aria-label="Assistir ao vídeo"
                    className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/15 transition-all cursor-pointer z-20 group/btn"
                  >
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-black/55 border-2 border-white/90 text-white flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.8)] group-hover/btn:scale-110 group-hover/btn:bg-black/75 transition-all">
                      <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-white text-white translate-x-0.5" />
                    </div>
                  </button>
                )}
              </motion.div>

            </div>

            {/* 3 Pillars - VISÍVEL APENAS NO MOBILE (EMBAIXO DO VÍDEO) */}
            <div className="lg:hidden w-full max-w-[340px] sm:max-w-md mx-auto mt-6 sm:mt-8">
              {renderPillars()}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
