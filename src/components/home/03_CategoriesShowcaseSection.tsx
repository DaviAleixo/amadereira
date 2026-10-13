import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { CATALOG_BASE_URL } from '../../data/products';

interface ShowcaseImage {
  src: string;
  alt: string;
}

const CASCATA_IMAGES: ShowcaseImage[] = [
  { src: '/images/mesacascata1.webp', alt: 'Mesa Cascata em Madeira Maciça com Corte 45 Graus' },
  { src: '/images/mesacascata2.webp', alt: 'Mesa Cascata com Veios Contínuos e Acabamento Nobre' },
  { src: '/images/mesacascata3.webp', alt: 'Mesa Cascata Orgânica em Madeira Maciça' },
  { src: '/images/mesacascata4.webp', alt: 'Mesa Cascata Monumental sob Medida - Amadeireira' },
];

const RAIZ_IMAGES: ShowcaseImage[] = [
  { src: '/images/baseraiz1.webp', alt: 'Base de Mesa Raiz Maciça Orgânica Escultural - Amadeireira' },
  { src: '/images/baseraiz2.webp', alt: 'Base Raiz Centenária com Acabamento Nobre' },
  { src: '/images/baseraiz3.webp', alt: 'Escultura Viva em Madeira Maciça - Base Raiz' },
  { src: '/images/baseraiz4.webp', alt: 'Mesa Base Raiz Autoral Exclusiva sob Medida' },
];

const RESINA_IMAGES: ShowcaseImage[] = [
  { src: '/images/mesaresinaepoxi1.webp', alt: 'Mesa de Resina Epóxi e Madeira Maciça de Alto Padrão' },
  { src: '/images/mesaresinaepoxi2.webp', alt: 'Mesa com Resina Epóxi Translúcida e Madeira Selecionada' },
  { src: '/images/mesaresinaepoxi3.webp', alt: 'Mesa de Jantar com Acabamento em Resina Epóxi' },
  { src: '/images/mesaresinaepoxi4.webp', alt: 'Mesa Autoral com Efeito Rio em Resina Epóxi' },
];

const PRANCHA_IMAGES: ShowcaseImage[] = [
  { src: '/images/mesaprancha1.webp', alt: 'Mesa Prancha Maciça com Borda Viva em Madeira Nobre' },
  { src: '/images/mesaprancha2.webp', alt: 'Mesa Prancha Monumental em Madeira Maciça' },
];

export const CategoriesShowcaseSection: React.FC = () => {
  // Cascata Queue State
  const [cascataIdx, setCascataIdx] = useState(0);
  const [isCascataPaused, setIsCascataPaused] = useState(false);

  // Raiz Queue State
  const [raizIdx, setRaizIdx] = useState(0);
  const [isRaizPaused, setIsRaizPaused] = useState(false);

  // Resina Queue State
  const [resinaIdx, setResinaIdx] = useState(0);
  const [isResinaPaused, setIsResinaPaused] = useState(false);

  // Prancha Queue State
  const [pranchaIdx, setPranchaIdx] = useState(0);
  const [isPranchaPaused, setIsPranchaPaused] = useState(false);

  // Auto-play timers
  useEffect(() => {
    if (isCascataPaused) return;
    const timer = setInterval(() => {
      setCascataIdx((prev) => (prev + 1) % CASCATA_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isCascataPaused]);

  useEffect(() => {
    if (isRaizPaused) return;
    const timer = setInterval(() => {
      setRaizIdx((prev) => (prev + 1) % RAIZ_IMAGES.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [isRaizPaused]);

  useEffect(() => {
    if (isResinaPaused) return;
    const timer = setInterval(() => {
      setResinaIdx((prev) => (prev + 1) % RESINA_IMAGES.length);
    }, 5800);
    return () => clearInterval(timer);
  }, [isResinaPaused]);

  useEffect(() => {
    if (isPranchaPaused) return;
    const timer = setInterval(() => {
      setPranchaIdx((prev) => (prev + 1) % PRANCHA_IMAGES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isPranchaPaused]);

  // Navigation handlers
  const nextCascata = () => setCascataIdx((prev) => (prev + 1) % CASCATA_IMAGES.length);
  const prevCascata = () => setCascataIdx((prev) => (prev === 0 ? CASCATA_IMAGES.length - 1 : prev - 1));

  const nextRaiz = () => setRaizIdx((prev) => (prev + 1) % RAIZ_IMAGES.length);
  const prevRaiz = () => setRaizIdx((prev) => (prev === 0 ? RAIZ_IMAGES.length - 1 : prev - 1));

  const nextResina = () => setResinaIdx((prev) => (prev + 1) % RESINA_IMAGES.length);
  const prevResina = () => setResinaIdx((prev) => (prev === 0 ? RESINA_IMAGES.length - 1 : prev - 1));

  const nextPrancha = () => setPranchaIdx((prev) => (prev + 1) % PRANCHA_IMAGES.length);
  const prevPrancha = () => setPranchaIdx((prev) => (prev === 0 ? PRANCHA_IMAGES.length - 1 : prev - 1));

  // Drag handler helper (works on all photos with mouse, pointer and touch)
  const createDragHandler = (onNext: () => void, onPrev: () => void) => {
    let startX = 0;
    let isDragging = false;
    return {
      onPointerDown: (e: React.PointerEvent) => {
        startX = e.clientX;
        isDragging = true;
      },
      onPointerUp: (e: React.PointerEvent) => {
        if (!isDragging) return;
        const diffX = startX - e.clientX;
        if (diffX > 30) onNext();
        else if (diffX < -30) onPrev();
        isDragging = false;
      },
      onPointerLeave: (e: React.PointerEvent) => {
        if (!isDragging) return;
        const diffX = startX - e.clientX;
        if (diffX > 40) onNext();
        else if (diffX < -40) onPrev();
        isDragging = false;
      },
      onPointerCancel: () => {
        isDragging = false;
      },
      onTouchStart: (e: React.TouchEvent) => {
        startX = e.touches[0].clientX;
        isDragging = true;
      },
      onTouchEnd: (e: React.TouchEvent) => {
        if (!isDragging) return;
        const diffX = startX - e.changedTouches[0].clientX;
        if (diffX > 30) onNext();
        else if (diffX < -30) onPrev();
        isDragging = false;
      }
    };
  };

  const cascataDrag = createDragHandler(nextCascata, prevCascata);
  const raizDrag = createDragHandler(nextRaiz, prevRaiz);
  const resinaDrag = createDragHandler(nextResina, prevResina);
  const pranchaDrag = createDragHandler(nextPrancha, prevPrancha);

  // Helper to get 3 queue slots
  const getQueueImages = (images: ShowcaseImage[], current: number) => {
    const main = images[current % images.length];
    const top = images[(current + 1) % images.length];
    const bottom = images[(current + 2) % images.length];
    return { main, top, bottom };
  };

  const cascataQueue = getQueueImages(CASCATA_IMAGES, cascataIdx);
  const raizQueue = getQueueImages(RAIZ_IMAGES, raizIdx);
  const resinaQueue = getQueueImages(RESINA_IMAGES, resinaIdx);
  const pranchaQueue = getQueueImages(PRANCHA_IMAGES, pranchaIdx);

  return (
    <section id="colecoes" className="relative w-full bg-[#f5efe6] text-[#1a1614] py-14 sm:py-18 lg:py-24 overflow-hidden border-t border-[#dfd4c5]">
      <div className="max-w-[1420px] w-[calc(100%-32px)] sm:w-[calc(100%-48px)] lg:w-[calc(100%-64px)] mx-auto">
        
        {/* ============================================================ */}
        {/* TOP BAR DESKTOP                                              */}
        {/* ============================================================ */}
        <div className="hidden md:flex items-center justify-between text-[11px] font-bold uppercase tracking-[0.25em] text-[#be7b4c] mb-6">
          <span>NOSSAS COLEÇÕES</span>
          <span className="text-[#8c6f56] tracking-[0.2em]">
            MADEIRA • DESIGN • DURABILIDADE
          </span>
        </div>

        {/* ============================================================ */}
        {/* TOP HEADER MOBILE (Conforme Imagem de Referência)            */}
        {/* ============================================================ */}
        <div className="showcase-mobile-only space-y-2.5 mb-8 text-center flex flex-col items-center">
          <div className="flex items-center justify-center gap-2">
            <span className="w-5 h-[1.5px] bg-[#be7b4c]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#be7b4c]">
              NOSSAS COLEÇÕES
            </span>
            <span className="w-5 h-[1.5px] bg-[#be7b4c]" />
          </div>
          <h2 className="font-slab uppercase text-2xl leading-[1.05] tracking-tight text-[#1a1614] text-center">
            PEÇAS QUE <br />
            TRANSFORMAM <br />
            <span className="text-[#be7b4c]">AMBIENTES REAIS.</span>
          </h2>
          <p className="text-[12px] text-[#5c4f42] font-light leading-relaxed max-w-sm text-center">
            Quatro linhas de mesas em madeira maciça, cada uma com características únicas, pensadas para diferentes estilos e projetos.
          </p>
        </div>

        {/* ============================================================ */}
        {/* AS QUATRO COLEÇÕES                                           */}
        {/* ============================================================ */}
        <div className="space-y-12 sm:space-y-16 lg:space-y-20">

          {/* ------------------------------------------------------------ */}
          {/* SEÇÃO 01 — MESAS CASCATA (Desktop: 24% | 54% | 22%)          */}
          {/* ------------------------------------------------------------ */}
          <div className="w-full">
            {/* Desktop Layout (Grid 1) */}
            <div className="showcase-desktop-only showcase-grid-1">
              {/* Coluna 1: Headline Geral + Bloco Editorial 01 */}
              <div className="flex flex-col justify-between pr-4 lg:pr-6 text-left h-full py-1">
                {/* Headline Principal da Vitrine */}
                <div className="space-y-2.5">
                  <h2 className="font-slab uppercase text-2xl lg:text-[28px] xl:text-[32px] leading-[1.02] tracking-tight text-[#1a1614]">
                    PEÇAS QUE <br />
                    TRANSFORMAM <br />
                    <span className="text-[#be7b4c]">AMBIENTES REAIS.</span>
                  </h2>
                  <p className="text-[12px] lg:text-[13px] text-[#5c4f42] font-light leading-relaxed max-w-[270px]">
                    Quatro linhas exclusivas de mesas em madeira maciça, cada uma com características únicas, pensadas para diferentes estilos e projetos.
                  </p>
                </div>

                {/* Bloco Editorial 01 */}
                <div className="space-y-2.5 pt-4 border-t border-[#ded3c2]">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-[2px] bg-[#be7b4c]" />
                    <span className="text-[11px] font-bold text-[#be7b4c] uppercase tracking-widest font-mono">01</span>
                  </div>
                  <h3 className="font-slab text-xl lg:text-2xl text-[#1a1614] uppercase leading-none tracking-tight">
                    MESAS <span className="text-[#be7b4c] block mt-0.5">CASCATA</span>
                  </h3>
                  <p className="text-[12px] lg:text-[13px] text-[#5c4f42] font-light leading-relaxed max-w-[250px]">
                    Design escultural com o tampo contínuo, unindo sofisticação e imponência em uma única peça.
                  </p>
                  <div className="pt-1">
                    <a
                      href={`${CATALOG_BASE_URL}#produtos`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#be7b4c] hover:text-[#1a1614] transition-colors group pb-0.5 border-b border-[#be7b4c]/40 hover:border-[#1a1614]"
                    >
                      <span>VER TODOS OS MODELOS</span>
                      <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Coluna 2: Fotografia Principal (Slot Grande com Drag) */}
              <div 
                className="relative h-full w-full overflow-hidden bg-[#1c1510] group cursor-grab active:cursor-grabbing select-none touch-pan-y"
                onMouseEnter={() => setIsCascataPaused(true)}
                onMouseLeave={() => setIsCascataPaused(false)}
                {...cascataDrag}
              >
                <AnimatePresence mode="wait">
                  <motion.img
                    key={cascataQueue.main.src}
                    src={cascataQueue.main.src}
                    alt={cascataQueue.main.alt}
                    draggable={false}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.02 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="w-full h-full object-cover object-center pointer-events-none select-none"
                    loading="lazy"
                  />
                </AnimatePresence>
              </div>

              {/* Coluna 3: Duas Fotografias Empilhadas da Fila com Drag */}
              <div 
                className="showcase-subgrid-2rows relative"
                onMouseEnter={() => setIsCascataPaused(true)}
                onMouseLeave={() => setIsCascataPaused(false)}
              >
                {/* Slot Menor 1 (Topo) - Com Drag e Clique */}
                <div 
                  onClick={() => setCascataIdx((prev) => (prev + 1) % CASCATA_IMAGES.length)}
                  className="relative h-full w-full overflow-hidden bg-[#1c1510] group cursor-grab active:cursor-grabbing border border-transparent hover:border-[#be7b4c]/60 transition-all duration-300 select-none touch-pan-y"
                  title="Clique ou arraste para passar as fotos"
                  {...cascataDrag}
                >
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={cascataQueue.top.src}
                      src={cascataQueue.top.src}
                      alt={cascataQueue.top.alt}
                      draggable={false}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-105 pointer-events-none select-none"
                      loading="lazy"
                    />
                  </AnimatePresence>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300 pointer-events-none" />
                </div>

                {/* Slot Menor 2 (Base) - Com Drag e Clique */}
                <div 
                  onClick={() => setCascataIdx((prev) => (prev + 2) % CASCATA_IMAGES.length)}
                  className="relative h-full w-full overflow-hidden bg-[#1c1510] group cursor-grab active:cursor-grabbing border border-transparent hover:border-[#be7b4c]/60 transition-all duration-300 select-none touch-pan-y"
                  title="Clique ou arraste para passar as fotos"
                  {...cascataDrag}
                >
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={cascataQueue.bottom.src}
                      src={cascataQueue.bottom.src}
                      alt={cascataQueue.bottom.alt}
                      draggable={false}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-105 pointer-events-none select-none"
                      loading="lazy"
                    />
                  </AnimatePresence>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* BARRA DE CONTROLE / SETAS ABAIXO DA COLUNA DIREITA (Posicionado exatamente na coluna 3) */}
            <div className="hidden md:grid grid-cols-[24%_54%_22%] gap-2 pt-2.5 items-center">
              <div />
              <div />
              <div className="flex items-center justify-between w-full">
                <div className="text-[11px] font-mono text-[#8c6f56] tracking-wider uppercase font-medium">
                  {String(cascataIdx + 1).padStart(2, '0')} / {String(CASCATA_IMAGES.length).padStart(2, '0')}
                </div>
                <div className="flex items-center gap-1.5 bg-[#14100c]/90 backdrop-blur-sm p-1 border border-white/10 shadow-md">
                  <button
                    onClick={prevCascata}
                    aria-label="Mesa Cascata anterior"
                    className="w-7 h-7 rounded-none bg-[#241c16] hover:bg-[#be7b4c] text-white hover:text-[#141414] flex items-center justify-center transition-all duration-200 cursor-pointer active:scale-95"
                  >
                    <ChevronLeft className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={nextCascata}
                    aria-label="Próxima foto da Mesa Cascata"
                    className="w-7 h-7 rounded-none bg-[#be7b4c] hover:bg-[#d49a6a] text-[#141414] flex items-center justify-center transition-all duration-200 cursor-pointer active:scale-95 font-bold"
                  >
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Mobile Layout (Layout idêntico à Imagem 1) */}
            <div className="showcase-mobile-only space-y-3 text-center">
              {/* Header do Item 01 */}
              <div className="space-y-1.5 flex flex-col items-center text-center">
                <div className="flex items-center justify-center gap-2">
                  <span className="w-4 h-[2px] bg-[#be7b4c]" />
                  <span className="text-[11px] font-bold text-[#be7b4c] uppercase tracking-widest font-mono">01</span>
                  <span className="w-4 h-[2px] bg-[#be7b4c]" />
                </div>
                <h3 className="font-slab text-xl text-[#1a1614] uppercase leading-none text-center">
                  MESAS <span className="text-[#be7b4c]">CASCATA</span>
                </h3>
                <p className="text-[11.5px] text-[#5c4f42] font-light leading-relaxed max-w-sm text-center">
                  Design escultural com o tampo contínuo, unindo sofisticação e imponência em uma única peça.
                </p>
                <div className="pt-0.5 flex justify-center">
                  <a
                    href={`${CATALOG_BASE_URL}#produtos`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#be7b4c] hover:text-[#1a1614] transition-colors pb-0.5 border-b border-[#be7b4c]/40"
                  >
                    <span>VER TODOS OS MODELOS</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Foto Principal Mobile com Setas Circulares Brancas */}
              <div 
                className="relative aspect-[16/10] w-full overflow-hidden bg-[#1c1510] select-none touch-pan-y cursor-grab active:cursor-grabbing"
                {...cascataDrag}
              >
                <img
                  src={cascataQueue.main.src}
                  alt={cascataQueue.main.alt}
                  draggable={false}
                  className="w-full h-full object-cover object-center pointer-events-none select-none"
                  loading="lazy"
                />
                {/* Setas Circulares Brancas Overlay */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    prevCascata();
                  }}
                  aria-label="Foto anterior"
                  className="absolute left-2.5 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-white/95 text-[#1a1614] shadow-md flex items-center justify-center cursor-pointer active:scale-90 transition-transform z-10"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    nextCascata();
                  }}
                  aria-label="Próxima foto"
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-white/95 text-[#1a1614] shadow-md flex items-center justify-center cursor-pointer active:scale-90 transition-transform z-10"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* 2 Fotos Secundárias Lado a Lado */}
              <div className="grid grid-cols-2 gap-2 w-full aspect-[2/1]">
                <div 
                  onClick={() => setCascataIdx((prev) => (prev + 1) % CASCATA_IMAGES.length)}
                  className="relative h-full w-full overflow-hidden bg-[#1c1510] cursor-pointer touch-pan-y"
                  {...cascataDrag}
                >
                  <img
                    src={cascataQueue.top.src}
                    alt={cascataQueue.top.alt}
                    draggable={false}
                    className="w-full h-full object-cover object-center pointer-events-none select-none"
                    loading="lazy"
                  />
                </div>
                <div 
                  onClick={() => setCascataIdx((prev) => (prev + 2) % CASCATA_IMAGES.length)}
                  className="relative h-full w-full overflow-hidden bg-[#1c1510] cursor-pointer touch-pan-y"
                  {...cascataDrag}
                >
                  <img
                    src={cascataQueue.bottom.src}
                    alt={cascataQueue.bottom.alt}
                    draggable={false}
                    className="w-full h-full object-cover object-center pointer-events-none select-none"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* ------------------------------------------------------------ */}
          {/* SEÇÃO 02 — MESAS RAIZ (Carrossel Amplo + Texto à Direita)     */}
          {/* ------------------------------------------------------------ */}
          <div className="w-full">
            {/* Desktop Layout (Grid 2: Carrossel 68% + Bloco Editorial à Direita 32%) */}
            <div className="showcase-desktop-only showcase-grid-2">
              {/* Coluna 1: Carrossel da Mesa Raiz com Suporte a Drag em Toda Área */}
              <div 
                className="relative h-full w-full overflow-hidden bg-[#1c1510] group cursor-grab active:cursor-grabbing select-none touch-pan-y"
                onMouseEnter={() => setIsRaizPaused(true)}
                onMouseLeave={() => setIsRaizPaused(false)}
                {...raizDrag}
              >
                <AnimatePresence mode="wait">
                  <motion.img
                    key={raizQueue.main.src}
                    src={raizQueue.main.src}
                    alt={raizQueue.main.alt}
                    draggable={false}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.02 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="w-full h-full object-cover object-center pointer-events-none select-none"
                    loading="lazy"
                  />
                </AnimatePresence>
              </div>

              {/* Coluna 2: Bloco Editorial 02 Posicionado à Direita */}
              <div className="flex flex-col justify-center pl-6 lg:pl-10 pr-2 text-left h-full">
                <div className="space-y-3.5">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-[2px] bg-[#be7b4c]" />
                    <span className="text-[11px] font-bold text-[#be7b4c] uppercase tracking-widest font-mono">02</span>
                  </div>
                  <h3 className="font-slab text-2xl lg:text-3xl text-[#1a1614] uppercase leading-[0.98] tracking-tight">
                    MESAS <span className="text-[#be7b4c] block mt-0.5">RAIZ</span>
                  </h3>
                  <p className="text-[12px] lg:text-[13.5px] text-[#5c4f42] font-light leading-relaxed max-w-[290px]">
                    Peças únicas, esculpidas pela própria natureza. Cada raiz centenária carrega veios orgânicos irrepetíveis e transforma o espaço em uma galeria autoral.
                  </p>
                  <div className="pt-2">
                    <a
                      href={`${CATALOG_BASE_URL}#produtos`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#be7b4c] hover:text-[#1a1614] transition-colors group pb-0.5 border-b border-[#be7b4c]/40 hover:border-[#1a1614]"
                    >
                      <span>VER TODOS OS MODELOS</span>
                      <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* BARRA DE CONTROLE / SETAS ABAIXO DO CARROSSEL RAIZ */}
            <div className="hidden md:grid grid-cols-[68%_32%] gap-4 pt-2.5 items-center">
              <div className="flex items-center justify-end gap-3">
                <div className="text-[11px] font-mono text-[#8c6f56] tracking-wider uppercase font-medium">
                  {String(raizIdx + 1).padStart(2, '0')} / {String(RAIZ_IMAGES.length).padStart(2, '0')}
                </div>
                <div className="flex items-center gap-1.5 bg-[#14100c]/90 backdrop-blur-sm p-1 border border-white/10 shadow-md">
                  <button
                    onClick={prevRaiz}
                    aria-label="Mesa Raiz anterior"
                    className="w-7 h-7 rounded-none bg-[#241c16] hover:bg-[#be7b4c] text-white hover:text-[#141414] flex items-center justify-center transition-all duration-200 cursor-pointer active:scale-95"
                  >
                    <ChevronLeft className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={nextRaiz}
                    aria-label="Próxima foto da Mesa Raiz"
                    className="w-7 h-7 rounded-none bg-[#be7b4c] hover:bg-[#d49a6a] text-[#141414] flex items-center justify-center transition-all duration-200 cursor-pointer active:scale-95 font-bold"
                  >
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
              <div />
            </div>

            {/* Mobile Layout (Layout idêntico à Imagem 1) */}
            <div className="showcase-mobile-only space-y-3 text-center">
              {/* Header do Item 02 */}
              <div className="space-y-1.5 flex flex-col items-center text-center">
                <div className="flex items-center justify-center gap-2">
                  <span className="w-4 h-[2px] bg-[#be7b4c]" />
                  <span className="text-[11px] font-bold text-[#be7b4c] uppercase tracking-widest font-mono">02</span>
                  <span className="w-4 h-[2px] bg-[#be7b4c]" />
                </div>
                <h3 className="font-slab text-xl text-[#1a1614] uppercase leading-none text-center">
                  MESAS <span className="text-[#be7b4c]">RAIZ</span>
                </h3>
                <p className="text-[11.5px] text-[#5c4f42] font-light leading-relaxed max-w-sm text-center">
                  Peças únicas, esculpidas pela própria natureza. Cada raiz conta uma história e torna o ambiente exclusivo.
                </p>
                <div className="pt-0.5 flex justify-center">
                  <a
                    href={`${CATALOG_BASE_URL}#produtos`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#be7b4c] hover:text-[#1a1614] transition-colors pb-0.5 border-b border-[#be7b4c]/40"
                  >
                    <span>VER TODOS OS MODELOS</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Foto Principal Mobile com Setas Circulares Brancas e Dots */}
              <div 
                className="relative aspect-[16/10] w-full overflow-hidden bg-[#1c1510] select-none touch-pan-y cursor-grab active:cursor-grabbing"
                {...raizDrag}
              >
                <img
                  src={raizQueue.main.src}
                  alt={raizQueue.main.alt}
                  draggable={false}
                  className="w-full h-full object-cover object-center pointer-events-none select-none"
                  loading="lazy"
                />
                {/* Setas Circulares Brancas Overlay */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    prevRaiz();
                  }}
                  aria-label="Foto anterior"
                  className="absolute left-2.5 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-white/95 text-[#1a1614] shadow-md flex items-center justify-center cursor-pointer active:scale-90 transition-transform z-10"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    nextRaiz();
                  }}
                  aria-label="Próxima foto"
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-white/95 text-[#1a1614] shadow-md flex items-center justify-center cursor-pointer active:scale-90 transition-transform z-10"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
                {/* Dots Pagination */}
                <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 pointer-events-none z-10">
                  {RAIZ_IMAGES.map((_, i) => (
                    <span
                      key={i}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        i === raizIdx ? 'w-4 bg-white shadow-sm' : 'w-1.5 bg-white/60'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ------------------------------------------------------------ */}
          {/* SEÇÃO 03 — MESAS DE RESINA EPÓXI (22% | 56% | 22%)           */}
          {/* ------------------------------------------------------------ */}
          <div className="w-full">
            {/* Desktop Layout (Grid 3) */}
            <div className="showcase-desktop-only showcase-grid-3">
              {/* Coluna 1: Bloco Editorial 03 */}
              <div className="flex flex-col justify-center pr-4 lg:pr-6 text-left h-full">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-[2px] bg-[#be7b4c]" />
                    <span className="text-[11px] font-bold text-[#be7b4c] uppercase tracking-widest font-mono">03</span>
                  </div>
                  <h3 className="font-slab text-xl lg:text-2xl text-[#1a1614] uppercase leading-[0.98] tracking-tight">
                    MESAS DE <span className="text-[#be7b4c] block mt-0.5">RESINA EPÓXI</span>
                  </h3>
                  <p className="text-[12px] lg:text-[13px] text-[#5c4f42] font-light leading-relaxed max-w-[250px]">
                    União perfeita entre a solidez da madeira nobre e a translucidez da resina de alta resistência, criando rios orgânicos e brilho acetinado único.
                  </p>
                  <div className="pt-1">
                    <a
                      href={`${CATALOG_BASE_URL}#produtos`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#be7b4c] hover:text-[#1a1614] transition-colors group pb-0.5 border-b border-[#be7b4c]/40 hover:border-[#1a1614]"
                    >
                      <span>VER TODOS OS MODELOS</span>
                      <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Coluna 2: Fotografia Principal Panorâmica (Slot Grande com Drag) */}
              <div 
                className="relative h-full w-full overflow-hidden bg-[#1c1510] group cursor-grab active:cursor-grabbing select-none touch-pan-y"
                onMouseEnter={() => setIsResinaPaused(true)}
                onMouseLeave={() => setIsResinaPaused(false)}
                {...resinaDrag}
              >
                <AnimatePresence mode="wait">
                  <motion.img
                    key={resinaQueue.main.src}
                    src={resinaQueue.main.src}
                    alt={resinaQueue.main.alt}
                    draggable={false}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.02 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="w-full h-full object-cover object-center pointer-events-none select-none"
                    loading="lazy"
                  />
                </AnimatePresence>
              </div>

              {/* Coluna 3: Duas Fotografias Empilhadas da Fila com Drag */}
              <div 
                className="showcase-subgrid-2rows relative"
                onMouseEnter={() => setIsResinaPaused(true)}
                onMouseLeave={() => setIsResinaPaused(false)}
              >
                {/* Slot Menor 1 (Topo) - Com Drag e Clique */}
                <div 
                  onClick={() => setResinaIdx((prev) => (prev + 1) % RESINA_IMAGES.length)}
                  className="relative h-full w-full overflow-hidden bg-[#1c1510] group cursor-grab active:cursor-grabbing border border-transparent hover:border-[#be7b4c]/60 transition-all duration-300 select-none touch-pan-y"
                  title="Clique ou arraste para passar as fotos"
                  {...resinaDrag}
                >
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={resinaQueue.top.src}
                      src={resinaQueue.top.src}
                      alt={resinaQueue.top.alt}
                      draggable={false}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-105 pointer-events-none select-none"
                      loading="lazy"
                    />
                  </AnimatePresence>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300 pointer-events-none" />
                </div>

                {/* Slot Menor 2 (Base) - Com Drag e Clique */}
                <div 
                  onClick={() => setResinaIdx((prev) => (prev + 2) % RESINA_IMAGES.length)}
                  className="relative h-full w-full overflow-hidden bg-[#1c1510] group cursor-grab active:cursor-grabbing border border-transparent hover:border-[#be7b4c]/60 transition-all duration-300 select-none touch-pan-y"
                  title="Clique ou arraste para passar as fotos"
                  {...resinaDrag}
                >
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={resinaQueue.bottom.src}
                      src={resinaQueue.bottom.src}
                      alt={resinaQueue.bottom.alt}
                      draggable={false}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-105 pointer-events-none select-none"
                      loading="lazy"
                    />
                  </AnimatePresence>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* BARRA DE CONTROLE / SETAS ABAIXO DA COLUNA DIREITA (Posicionado exatamente na coluna 3) */}
            <div className="hidden md:grid grid-cols-[22%_56%_22%] gap-2 pt-2.5 items-center">
              <div />
              <div />
              <div className="flex items-center justify-between w-full">
                <div className="text-[11px] font-mono text-[#8c6f56] tracking-wider uppercase font-medium">
                  {String(resinaIdx + 1).padStart(2, '0')} / {String(RESINA_IMAGES.length).padStart(2, '0')}
                </div>
                <div className="flex items-center gap-1.5 bg-[#14100c]/90 backdrop-blur-sm p-1 border border-white/10 shadow-md">
                  <button
                    onClick={prevResina}
                    aria-label="Mesa de Resina anterior"
                    className="w-7 h-7 rounded-none bg-[#241c16] hover:bg-[#be7b4c] text-white hover:text-[#141414] flex items-center justify-center transition-all duration-200 cursor-pointer active:scale-95"
                  >
                    <ChevronLeft className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={nextResina}
                    aria-label="Próxima foto da Mesa de Resina"
                    className="w-7 h-7 rounded-none bg-[#be7b4c] hover:bg-[#d49a6a] text-[#141414] flex items-center justify-center transition-all duration-200 cursor-pointer active:scale-95 font-bold"
                  >
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Mobile Layout (Layout idêntico à Imagem 1) */}
            <div className="showcase-mobile-only space-y-3 text-center">
              {/* Header do Item 03 */}
              <div className="space-y-1.5 flex flex-col items-center text-center">
                <div className="flex items-center justify-center gap-2">
                  <span className="w-4 h-[2px] bg-[#be7b4c]" />
                  <span className="text-[11px] font-bold text-[#be7b4c] uppercase tracking-widest font-mono">03</span>
                  <span className="w-4 h-[2px] bg-[#be7b4c]" />
                </div>
                <h3 className="font-slab text-xl text-[#1a1614] uppercase leading-none text-center">
                  MESAS DE <span className="text-[#be7b4c]">RESINA EPÓXI</span>
                </h3>
                <p className="text-[11.5px] text-[#5c4f42] font-light leading-relaxed max-w-sm text-center">
                  União perfeita entre a nobreza da madeira maciça e a modernidade da resina epóxi translúcida.
                </p>
                <div className="pt-0.5 flex justify-center">
                  <a
                    href={`${CATALOG_BASE_URL}#produtos`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#be7b4c] hover:text-[#1a1614] transition-colors pb-0.5 border-b border-[#be7b4c]/40"
                  >
                    <span>VER TODOS OS MODELOS</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Foto Principal Mobile com Setas Circulares Brancas */}
              <div 
                className="relative aspect-[16/10] w-full overflow-hidden bg-[#1c1510] select-none touch-pan-y cursor-grab active:cursor-grabbing"
                {...resinaDrag}
              >
                <img
                  src={resinaQueue.main.src}
                  alt={resinaQueue.main.alt}
                  draggable={false}
                  className="w-full h-full object-cover object-center pointer-events-none select-none"
                  loading="lazy"
                />
                {/* Setas Circulares Brancas Overlay */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    prevResina();
                  }}
                  aria-label="Foto anterior"
                  className="absolute left-2.5 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-white/95 text-[#1a1614] shadow-md flex items-center justify-center cursor-pointer active:scale-90 transition-transform z-10"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    nextResina();
                  }}
                  aria-label="Próxima foto"
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-white/95 text-[#1a1614] shadow-md flex items-center justify-center cursor-pointer active:scale-90 transition-transform z-10"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* 2 Fotos Secundárias Lado a Lado */}
              <div className="grid grid-cols-2 gap-2 w-full aspect-[2/1]">
                <div 
                  onClick={() => setResinaIdx((prev) => (prev + 1) % RESINA_IMAGES.length)}
                  className="relative h-full w-full overflow-hidden bg-[#1c1510] cursor-pointer touch-pan-y"
                  {...resinaDrag}
                >
                  <img
                    src={resinaQueue.top.src}
                    alt={resinaQueue.top.alt}
                    draggable={false}
                    className="w-full h-full object-cover object-center pointer-events-none select-none"
                    loading="lazy"
                  />
                </div>
                <div 
                  onClick={() => setResinaIdx((prev) => (prev + 2) % RESINA_IMAGES.length)}
                  className="relative h-full w-full overflow-hidden bg-[#1c1510] cursor-pointer touch-pan-y"
                  {...resinaDrag}
                >
                  <img
                    src={resinaQueue.bottom.src}
                    alt={resinaQueue.bottom.alt}
                    draggable={false}
                    className="w-full h-full object-cover object-center pointer-events-none select-none"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* ------------------------------------------------------------ */}
          {/* SEÇÃO 04 — MESAS PRANCHA (Mesmo Estilo da Raiz: 68% | 32%)   */}
          {/* ------------------------------------------------------------ */}
          <div className="w-full">
            {/* Desktop Layout (Grid 2 Style: Carrossel 68% + Bloco Editorial à Direita 32%) */}
            <div className="showcase-desktop-only showcase-grid-2">
              {/* Coluna 1: Carrossel da Mesa Prancha com Suporte a Drag em Toda Área */}
              <div 
                className="relative h-full w-full overflow-hidden bg-[#1c1510] group cursor-grab active:cursor-grabbing select-none touch-pan-y"
                onMouseEnter={() => setIsPranchaPaused(true)}
                onMouseLeave={() => setIsPranchaPaused(false)}
                {...pranchaDrag}
              >
                <AnimatePresence mode="wait">
                  <motion.img
                    key={pranchaQueue.main.src}
                    src={pranchaQueue.main.src}
                    alt={pranchaQueue.main.alt}
                    draggable={false}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.02 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="w-full h-full object-cover object-center pointer-events-none select-none"
                    loading="lazy"
                  />
                </AnimatePresence>
              </div>

              {/* Coluna 2: Bloco Editorial 04 Posicionado à Direita */}
              <div className="flex flex-col justify-center pl-6 lg:pl-10 pr-2 text-left h-full">
                <div className="space-y-3.5">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-[2px] bg-[#be7b4c]" />
                    <span className="text-[11px] font-bold text-[#be7b4c] uppercase tracking-widest font-mono">04</span>
                  </div>
                  <h3 className="font-slab text-2xl lg:text-3xl text-[#1a1614] uppercase leading-[0.98] tracking-tight">
                    MESAS <span className="text-[#be7b4c] block mt-0.5">PRANCHA</span>
                  </h3>
                  <p className="text-[12px] lg:text-[13.5px] text-[#5c4f42] font-light leading-relaxed max-w-[290px]">
                    Tampo em prancha única maciça com bordas naturais e orgânicas. Preserva toda a história botânica e a força monumental da árvore em uma peça exclusiva.
                  </p>
                  <div className="pt-2">
                    <a
                      href={`${CATALOG_BASE_URL}#produtos`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#be7b4c] hover:text-[#1a1614] transition-colors group pb-0.5 border-b border-[#be7b4c]/40 hover:border-[#1a1614]"
                    >
                      <span>VER TODOS OS MODELOS</span>
                      <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* BARRA DE CONTROLE / SETAS ABAIXO DO CARROSSEL PRANCHA */}
            <div className="hidden md:grid grid-cols-[68%_32%] gap-4 pt-2.5 items-center">
              <div className="flex items-center justify-end gap-3">
                <div className="text-[11px] font-mono text-[#8c6f56] tracking-wider uppercase font-medium">
                  {String(pranchaIdx + 1).padStart(2, '0')} / {String(PRANCHA_IMAGES.length).padStart(2, '0')}
                </div>
                <div className="flex items-center gap-1.5 bg-[#14100c]/90 backdrop-blur-sm p-1 border border-white/10 shadow-md">
                  <button
                    onClick={prevPrancha}
                    aria-label="Mesa Prancha anterior"
                    className="w-7 h-7 rounded-none bg-[#241c16] hover:bg-[#be7b4c] text-white hover:text-[#141414] flex items-center justify-center transition-all duration-200 cursor-pointer active:scale-95"
                  >
                    <ChevronLeft className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={nextPrancha}
                    aria-label="Próxima foto da Mesa Prancha"
                    className="w-7 h-7 rounded-none bg-[#be7b4c] hover:bg-[#d49a6a] text-[#141414] flex items-center justify-center transition-all duration-200 cursor-pointer active:scale-95 font-bold"
                  >
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
              <div />
            </div>

            {/* Mobile Layout (Layout idêntico à Imagem 1) */}
            <div className="showcase-mobile-only space-y-3 text-center">
              {/* Header do Item 04 */}
              <div className="space-y-1.5 flex flex-col items-center text-center">
                <div className="flex items-center justify-center gap-2">
                  <span className="w-4 h-[2px] bg-[#be7b4c]" />
                  <span className="text-[11px] font-bold text-[#be7b4c] uppercase tracking-widest font-mono">04</span>
                  <span className="w-4 h-[2px] bg-[#be7b4c]" />
                </div>
                <h3 className="font-slab text-xl text-[#1a1614] uppercase leading-none text-center">
                  MESAS <span className="text-[#be7b4c]">PRANCHA</span>
                </h3>
                <p className="text-[11.5px] text-[#5c4f42] font-light leading-relaxed max-w-sm text-center">
                  Tampo em peça única, valorizando o formato natural da madeira e suas características originais.
                </p>
                <div className="pt-0.5 flex justify-center">
                  <a
                    href={`${CATALOG_BASE_URL}#produtos`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#be7b4c] hover:text-[#1a1614] transition-colors pb-0.5 border-b border-[#be7b4c]/40"
                  >
                    <span>VER TODOS OS MODELOS</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Foto Principal Mobile com Setas Circulares Brancas e Dots */}
              <div 
                className="relative aspect-[16/10] w-full overflow-hidden bg-[#1c1510] select-none touch-pan-y cursor-grab active:cursor-grabbing"
                {...pranchaDrag}
              >
                <img
                  src={pranchaQueue.main.src}
                  alt={pranchaQueue.main.alt}
                  draggable={false}
                  className="w-full h-full object-cover object-center pointer-events-none select-none"
                  loading="lazy"
                />
                {/* Setas Circulares Brancas Overlay */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    prevPrancha();
                  }}
                  aria-label="Foto anterior"
                  className="absolute left-2.5 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-white/95 text-[#1a1614] shadow-md flex items-center justify-center cursor-pointer active:scale-90 transition-transform z-10"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    nextPrancha();
                  }}
                  aria-label="Próxima foto"
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-white/95 text-[#1a1614] shadow-md flex items-center justify-center cursor-pointer active:scale-90 transition-transform z-10"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
                {/* Dots Pagination */}
                <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 pointer-events-none z-10">
                  {PRANCHA_IMAGES.map((_, i) => (
                    <span
                      key={i}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        i === pranchaIdx ? 'w-4 bg-white shadow-sm' : 'w-1.5 bg-white/60'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
