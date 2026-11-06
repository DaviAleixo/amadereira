import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';
import { WHATSAPP_BASE_URL } from '../../data/products';

const AMBIENTE_PHOTOS = [
  { id: 1, src: '/images/ambiente1.jpeg', alt: 'Ambiente Amadeireira 01' },
  { id: 2, src: '/images/ambiente2.jpeg', alt: 'Ambiente Amadeireira 02' },
  { id: 3, src: '/images/ambiente3.jpeg', alt: 'Ambiente Amadeireira 03' },
  { id: 4, src: '/images/ambiente4.jpeg', alt: 'Ambiente Amadeireira 04' },
  { id: 5, src: '/images/ambiente5.jpeg', alt: 'Ambiente Amadeireira 05' },
  { id: 6, src: '/images/ambiente6.jpeg', alt: 'Ambiente Amadeireira 06' },
];

export const ProductionEnvironmentSection: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const nextPhoto = () => {
    setActiveIdx((prev) => (prev + 1) % AMBIENTE_PHOTOS.length);
  };

  const prevPhoto = () => {
    setActiveIdx((prev) => (prev === 0 ? AMBIENTE_PHOTOS.length - 1 : prev - 1));
  };

  // Touch Swipe Handlers para celular
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 40) {
      nextPhoto();
    } else if (diff < -40) {
      prevPhoto();
    }
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  // Slots do Bento Grid para Desktop (calculados a partir do activeIdx)
  const slot1 = AMBIENTE_PHOTOS[activeIdx];
  const slot2 = AMBIENTE_PHOTOS[(activeIdx + 1) % AMBIENTE_PHOTOS.length];
  const slot3 = AMBIENTE_PHOTOS[(activeIdx + 2) % AMBIENTE_PHOTOS.length];
  const slot4 = AMBIENTE_PHOTOS[(activeIdx + 3) % AMBIENTE_PHOTOS.length];
  const mainPhoto = slot1;

  return (
    <section id="estrutura" className="relative w-full min-h-[100dvh] flex items-center justify-center overflow-hidden bg-[#0f0f0f] border-t border-[#be7b4c]/20 text-[#f3e2ba] py-8 sm:py-10 lg:py-10">
      {/* Background Image - exatamente o mesmo fundo do Footer */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <img
          src="/images/backgroundfooter.webp"
          alt="Amadeireira Background"
          className="w-full h-full object-cover object-center"
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className="container-editorial relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        {/* Header da Seção */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-5 sm:mb-6 gap-4">
          <div className="space-y-1.5 max-w-2xl text-center lg:text-left mx-auto lg:mx-0">
            <div className="flex items-center justify-center lg:justify-start gap-2">
              <span className="w-5 h-[1.5px] bg-[#be7b4c]" />
              <span className="text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-[#be7b4c]">
                BASTIDORES & ESTRUTURA PRÓPRIA
              </span>
              <span className="w-5 h-[1.5px] bg-[#be7b4c] lg:hidden" />
            </div>

            <h2 className="font-slab text-2xl sm:text-3xl lg:text-[34px] text-[#f3e2ba] uppercase tracking-tight leading-[1.08]">
              ONDE CADA PEÇA <span className="text-[#be7b4c]">GANHA VIDA</span>
            </h2>

            <p className="text-xs sm:text-[13px] text-[#f3e2ba]/80 font-light leading-relaxed max-w-xl">
              Aqui não terceirizamos o cuidado. Da seleção de pranchas brutas monumentais ao corte, 
              lixamento e acabamento minucioso, conheça nosso espaço de produção.
            </p>
          </div>

          {/* Controles de Navegação Desktop */}
          <div className="hidden lg:flex items-center justify-end gap-3 self-end">
            <div className="text-[11px] font-mono text-[#be7b4c] tracking-widest uppercase font-bold">
              {String(activeIdx + 1).padStart(2, '0')} / {String(AMBIENTE_PHOTOS.length).padStart(2, '0')}
            </div>

            <div className="flex items-center gap-1 bg-[#14100c]/90 backdrop-blur-sm p-1 border border-white/10 shadow-md">
              <button
                type="button"
                onClick={prevPhoto}
                aria-label="Foto anterior"
                className="w-7 h-7 rounded-none bg-[#241c16] hover:bg-[#be7b4c] text-white hover:text-[#141414] flex items-center justify-center transition-all duration-200 cursor-pointer active:scale-95"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>
              <button
                type="button"
                onClick={nextPhoto}
                aria-label="Próxima foto"
                className="w-7 h-7 rounded-none bg-[#be7b4c] hover:bg-[#d49a6a] text-[#141414] flex items-center justify-center transition-all duration-200 cursor-pointer active:scale-95 font-bold"
              >
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* 1. DESKTOP: Bento Grid Clássico (2+1 e 1+2) com proporção otimizada para 100% da tela */}
        <div className="hidden lg:grid grid-cols-3 gap-3.5 sm:gap-4 select-none">
          {/* Card 1: Grande (2 Colunas) */}
          <div 
            onClick={nextPhoto}
            className="col-span-2 h-[235px] xl:h-[255px] relative overflow-hidden border border-[#be7b4c]/30 bg-[#16120e] shadow-xl group cursor-pointer"
            title="Clique para avançar"
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={slot1.src}
                src={slot1.src}
                alt={slot1.alt}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35 }}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="eager"
              />
            </AnimatePresence>
          </div>

          {/* Card 2: Menor (1 Coluna) */}
          <div 
            onClick={nextPhoto}
            className="col-span-1 h-[235px] xl:h-[255px] relative overflow-hidden border border-[#be7b4c]/30 bg-[#16120e] shadow-xl group cursor-pointer"
            title="Clique para avançar"
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={slot2.src}
                src={slot2.src}
                alt={slot2.alt}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35 }}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
            </AnimatePresence>
          </div>

          {/* Card 3: Menor (1 Coluna) */}
          <div 
            onClick={nextPhoto}
            className="col-span-1 h-[235px] xl:h-[255px] relative overflow-hidden border border-[#be7b4c]/30 bg-[#16120e] shadow-xl group cursor-pointer"
            title="Clique para avançar"
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={slot3.src}
                src={slot3.src}
                alt={slot3.alt}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35 }}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
            </AnimatePresence>
          </div>

          {/* Card 4: Grande (2 Colunas) */}
          <div 
            onClick={nextPhoto}
            className="col-span-2 h-[235px] xl:h-[255px] relative overflow-hidden border border-[#be7b4c]/30 bg-[#16120e] shadow-xl group cursor-pointer"
            title="Clique para avançar"
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={slot4.src}
                src={slot4.src}
                alt={slot4.alt}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35 }}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
            </AnimatePresence>
          </div>
        </div>

        {/* 2. MOBILE: Visualização Otimizada com Swipe Touch e Setas Embaixo */}
        <div 
          className="block lg:hidden select-none"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div 
            onClick={nextPhoto}
            className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden border border-[#be7b4c]/30 bg-[#16120e] shadow-2xl cursor-pointer"
            title="Toque ou deslize para passar a foto"
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={mainPhoto.src}
                src={mainPhoto.src}
                alt={mainPhoto.alt}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="w-full h-full object-cover object-center"
                loading="eager"
              />
            </AnimatePresence>
          </div>

          {/* Controles de navegação embaixo da foto no mobile */}
          <div className="mt-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1 bg-[#14100c]/90 backdrop-blur-sm p-1 border border-white/10 shadow-md">
                <button
                  type="button"
                  onClick={prevPhoto}
                  aria-label="Foto anterior"
                  className="w-8 h-8 rounded-none bg-[#241c16] hover:bg-[#be7b4c] text-white hover:text-[#141414] flex items-center justify-center transition-all duration-200 cursor-pointer active:scale-95"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={nextPhoto}
                  aria-label="Próxima foto"
                  className="w-8 h-8 rounded-none bg-[#be7b4c] hover:bg-[#d49a6a] text-[#141414] flex items-center justify-center transition-all duration-200 cursor-pointer active:scale-95 font-bold"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
              <span className="text-[10px] sm:text-[11px] font-mono tracking-wider text-[#be7b4c] uppercase">
                ARRASTE OU CLIQUE
              </span>
            </div>

            <div className="text-[11px] font-mono text-[#be7b4c] tracking-widest uppercase font-bold">
              {String(activeIdx + 1).padStart(2, '0')} / {String(AMBIENTE_PHOTOS.length).padStart(2, '0')}
            </div>
          </div>
        </div>

        {/* Rodapé da Seção com Convite & WhatsApp */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-4 sm:pt-5 mt-4 sm:mt-5 border-t border-[#be7b4c]/20 gap-3">
          <p className="text-[11.5px] sm:text-xs text-[#f3e2ba]/80 font-light text-center sm:text-left">
            Gostaria de conhecer nosso estoque e escolher pessoalmente a prancha do seu projeto? Nossas portas estão abertas.
          </p>
          <a
            href={`${WHATSAPP_BASE_URL}?text=Ol%C3%A1!%20Vi%20as%20fotos%20da%20estrutura%20da%20Amadeireira%20no%20site%20e%20gostaria%20de%20agendar%20uma%20visita.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 bg-[#be7b4c] hover:bg-[#a6653b] text-[#141414] font-bold text-[11px] uppercase tracking-wider transition-all duration-300 shadow-md active:scale-95 shrink-0 w-full sm:w-auto"
          >
            <span>Agendar Visita à Estrutura</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
