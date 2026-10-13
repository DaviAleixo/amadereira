import React from 'react';
import { motion } from 'framer-motion';
import { Trees, Hammer, Gem } from 'lucide-react';

export const VideoShowcaseSection: React.FC = () => {
  return (
    <section className="relative w-full min-h-[100dvh] flex items-center justify-center overflow-hidden bg-[#120f0d] py-14 sm:py-16 lg:py-0 text-[#f3e2ba]">
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
        <div className="absolute inset-0 bg-black/25 mix-blend-multiply" />
      </div>

      <div className="container-editorial relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* LEFT COLUMN: Narrative & Value Proposition */}
          <div className="lg:col-span-6 flex flex-col justify-center items-center lg:items-start text-center lg:text-left space-y-6 sm:space-y-8">
            
            {/* Tagline */}
            <div className="space-y-2 flex flex-col items-center lg:items-start">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.3em] text-[#be7b4c]">
                NOSSA HISTÓRIA
              </span>
              <div className="w-14 h-[2.5px] bg-[#be7b4c] rounded-full mx-auto lg:mx-0" />
            </div>

            {/* Main Bold Display Title */}
            <h2 className="font-slab uppercase text-4xl sm:text-5xl lg:text-6xl xl:text-7xl tracking-tight leading-[0.96] drop-shadow-lg text-center lg:text-left">
              <span className="text-[#f3e2ba] block">TRADIÇÃO</span>
              <span className="text-[#be7b4c] block mt-1">QUE GANHA</span>
              <span className="text-[#be7b4c] block">FORMA</span>
            </h2>

            {/* Descriptive Body Paragraph */}
            <p className="text-sm sm:text-base lg:text-lg text-[#f3e2ba]/85 font-light leading-relaxed max-w-xl text-center lg:text-left mx-auto lg:mx-0">
              Conheça de perto o nosso ateliê, o processo de produção e o cuidado que colocamos em cada detalhe. 
              Da madeira bruta à mesa pronta, tudo é feito com propósito e respeito à natureza.
            </p>

            {/* 3 Pillars / Quality Badges */}
            <div className="pt-3 sm:pt-5 grid grid-cols-3 gap-3 sm:gap-5 border-t border-[#be7b4c]/25 w-full">
              
              {/* Item 1 */}
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-2 group">
                <div className="w-9 h-9 rounded-lg bg-[#be7b4c]/15 border border-[#be7b4c]/30 flex items-center justify-center text-[#be7b4c] group-hover:scale-110 group-hover:bg-[#be7b4c] group-hover:text-[#141414] transition-all">
                  <Trees className="w-5 h-5" />
                </div>
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#f3e2ba]/90 leading-snug">
                  MADEIRA DE ORIGEM CONTROLADA
                </span>
              </div>

              {/* Item 2 */}
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-2 group border-l border-[#be7b4c]/20 pl-2 sm:pl-4">
                <div className="w-9 h-9 rounded-lg bg-[#be7b4c]/15 border border-[#be7b4c]/30 flex items-center justify-center text-[#be7b4c] group-hover:scale-110 group-hover:bg-[#be7b4c] group-hover:text-[#141414] transition-all">
                  <Hammer className="w-5 h-5" />
                </div>
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#f3e2ba]/90 leading-snug">
                  PROCESSO ARTESANAL
                </span>
              </div>

              {/* Item 3 */}
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-2 group border-l border-[#be7b4c]/20 pl-2 sm:pl-4">
                <div className="w-9 h-9 rounded-lg bg-[#be7b4c]/15 border border-[#be7b4c]/30 flex items-center justify-center text-[#be7b4c] group-hover:scale-110 group-hover:bg-[#be7b4c] group-hover:text-[#141414] transition-all">
                  <Gem className="w-5 h-5" />
                </div>
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#f3e2ba]/90 leading-snug">
                  PEÇAS ÚNICAS E EXCLUSIVAS
                </span>
              </div>

            </div>
          </div>

          {/* RIGHT COLUMN: Framed Video Element with Terracotta Backing */}
          <div className="lg:col-span-6 flex items-center justify-center w-full">
            <div className="relative w-full max-w-lg lg:max-w-none flex items-center justify-center py-4">
              
              {/* Backing Terracotta Accent Plate (Square / Editorial) */}
              <div 
                className="absolute inset-x-6 sm:inset-x-8 -inset-y-3 sm:-inset-y-4 bg-[#be7b4c] rounded-none opacity-90 z-0 pointer-events-none shadow-2xl"
              />

              {/* Video Card Container (Square / Editorial) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="relative z-10 w-full aspect-[16/9] rounded-none overflow-hidden border-2 border-[#be7b4c]/80 bg-[#1a1410] shadow-[0_30px_60px_rgba(0,0,0,0.9)]"
              >
                <iframe
                  src="https://www.youtube-nocookie.com/embed/sAVHpVLfgng?rel=0&modestbranding=1"
                  title="Processo Artesanal - Móveis de Madeira Maciça"
                  className="w-full h-full border-0"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </motion.div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
