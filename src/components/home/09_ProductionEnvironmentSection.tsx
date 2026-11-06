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

  // Mouse drag handlers
  const isMouseDown = useRef(false);
  const mouseStartX = useRef(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    isMouseDown.current = true;
    mouseStartX.current = e.clientX;
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    if (!isMouseDown.current) return;
    const diff = mouseStartX.current - e.clientX;
    if (diff > 40) {
      nextPhoto();
    } else if (diff < -40) {
      prevPhoto();
    }
    isMouseDown.current = false;
  };

  // Fila de fotos para os slots do Grid
  const mainPhoto = AMBIENTE_PHOTOS[activeIdx];
  const sidePhotoTop = AMBIENTE_PHOTOS[(activeIdx + 1) % AMBIENTE_PHOTOS.length];
  const sidePhotoBottom = AMBIENTE_PHOTOS[(activeIdx + 2) % AMBIENTE_PHOTOS.length];

  return (
    <section id="estrutura" className="relative w-full py-20 sm:py-28 overflow-hidden bg-[#0f0f0f] border-t border-[#be7b4c]/20 text-[#f3e2ba]">
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
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 sm:mb-12 gap-6">
          <div className="space-y-3 max-w-2xl text-center lg:text-left mx-auto lg:mx-0">
            <div className="flex items-center justify-center lg:justify-start gap-2">
              <span className="w-5 h-[1.5px] bg-[#be7b4c]" />
              <span className="text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-[#be7b4c]">
                BASTIDORES & ESTRUTURA PRÓPRIA
              </span>
              <span className="w-5 h-[1.5px] bg-[#be7b4c] lg:hidden" />
            </div>

            <h2 className="font-slab text-3xl sm:text-4xl lg:text-[42px] text-[#f3e2ba] uppercase tracking-tight leading-[1.08]">
              ONDE CADA PEÇA <span className="text-[#be7b4c]">GANHA VIDA</span>
            </h2>

            <p className="text-xs sm:text-sm text-[#f3e2ba]/80 font-light leading-relaxed max-w-xl">
              Aqui não terceirizamos o cuidado. Da seleção de pranchas brutas monumentais ao corte, 
              lixamento e acabamento minucioso, conheça nosso espaço de produção.
            </p>
          </div>

          {/* Controles de Navegação (Igual ao componente de vitrine de produtos) */}
          <div className="flex items-center justify-center lg:justify-end gap-3 self-center lg:self-end">
            <div className="text-[12px] font-mono text-[#be7b4c] tracking-widest uppercase font-bold">
              {String(activeIdx + 1).padStart(2, '0')} / {String(AMBIENTE_PHOTOS.length).padStart(2, '0')}
            </div>

            <div className="flex items-center gap-1.5 bg-[#14100c]/90 backdrop-blur-sm p-1 border border-white/10 shadow-md">
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
          </div>
        </div>

        {/* Bento Grid com Transição Suave e Fotos 100% Limpas */}
        <div 
          className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5 select-none"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
        >
          {/* Slot Grande Principal (Destaque) - 8 Colunas */}
          <div 
            onClick={nextPhoto}
            className="lg:col-span-8 relative aspect-[16/11] sm:aspect-[16/10] lg:aspect-auto lg:h-[500px] w-full overflow-hidden border border-[#be7b4c]/30 bg-[#16120e] shadow-2xl cursor-pointer group"
            title="Clique ou arraste para passar a foto"
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={mainPhoto.src}
                src={mainPhoto.src}
                alt={mainPhoto.alt}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.45, ease: 'easeOut' }}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="eager"
              />
            </AnimatePresence>
          </div>

          {/* Coluna Lateral: Duas fotos empilhadas (Slots Secundários) - 4 Colunas */}
          <div className="hidden lg:grid lg:col-span-4 grid-rows-2 gap-4 sm:gap-5 h-[500px]">
            {/* Slot Secundário Topo */}
            <div 
              onClick={() => setActiveIdx((prev) => (prev + 1) % AMBIENTE_PHOTOS.length)}
              className="relative w-full h-full overflow-hidden border border-[#be7b4c]/30 bg-[#16120e] shadow-xl cursor-pointer group hover:border-[#be7b4c]/80 transition-all duration-300"
              title="Clique para avançar"
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={sidePhotoTop.src}
                  src={sidePhotoTop.src}
                  alt={sidePhotoTop.alt}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.45 }}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
              </AnimatePresence>
            </div>

            {/* Slot Secundário Base */}
            <div 
              onClick={() => setActiveIdx((prev) => (prev + 2) % AMBIENTE_PHOTOS.length)}
              className="relative w-full h-full overflow-hidden border border-[#be7b4c]/30 bg-[#16120e] shadow-xl cursor-pointer group hover:border-[#be7b4c]/80 transition-all duration-300"
              title="Clique para avançar"
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={sidePhotoBottom.src}
                  src={sidePhotoBottom.src}
                  alt={sidePhotoBottom.alt}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.45 }}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Barra de Miniaturas (Thumbnails Strip) de ambiente1 a ambiente6 */}
        <div className="grid grid-cols-6 gap-2 sm:gap-3 mt-4 sm:mt-5">
          {AMBIENTE_PHOTOS.map((photo, idx) => (
            <button
              key={photo.id}
              type="button"
              onClick={() => setActiveIdx(idx)}
              aria-label={`Ver ${photo.alt}`}
              className={`relative aspect-[16/10] sm:aspect-[16/9] overflow-hidden border transition-all duration-300 cursor-pointer ${
                activeIdx === idx
                  ? 'border-[#be7b4c] ring-2 ring-[#be7b4c]/60 opacity-100 scale-[1.02]'
                  : 'border-[#be7b4c]/20 opacity-60 hover:opacity-100 hover:border-[#be7b4c]/60'
              }`}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
            </button>
          ))}
        </div>

        {/* Rodapé da Seção com Convite & WhatsApp */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 sm:pt-10 mt-6 sm:mt-8 border-t border-[#be7b4c]/20 gap-4">
          <p className="text-xs sm:text-sm text-[#f3e2ba]/80 font-light text-center sm:text-left">
            Gostaria de conhecer nosso estoque e escolher pessoalmente a prancha do seu projeto? Nossas portas estão abertas.
          </p>
          <a
            href={`${WHATSAPP_BASE_URL}?text=Ol%C3%A1!%20Vi%20as%20fotos%20da%20estrutura%20da%20Amadeireira%20no%20site%20e%20gostaria%20de%20agendar%20uma%20visita.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#be7b4c] hover:bg-[#a6653b] text-[#141414] font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-lg active:scale-95 shrink-0 w-full sm:w-auto"
          >
            <span>Agendar Visita à Estrutura</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
