import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Trees, ShieldCheck, Gem, Play, ChevronLeft, ChevronRight } from 'lucide-react';
import { WHATSAPP_BASE_URL } from '../../data/products';

interface ShowcaseVideo {
  id: string;
  title: string;
  subtitle: string;
  src: string;
}

const SHOWCASE_VIDEOS: ShowcaseVideo[] = [
  {
    id: 'confiar',
    title: 'Por Que Confiar',
    subtitle: 'Segurança & Origem Legal',
    src: '/images/confiar.mp4',
  },
  {
    id: 'diferencial',
    title: 'Nossos Diferenciais',
    subtitle: 'Exclusividade & Mestria Autoral',
    src: '/images/diferencial.mp4',
  },
  {
    id: 'vendameio',
    title: 'Processo & Atendimento',
    subtitle: 'Cuidado do Início ao Fim',
    src: '/images/vendameio.mp4',
  },
];

export const VideoShowcaseSection: React.FC = () => {
  const [playingVideoId, setPlayingVideoId] = useState<string | null>(null);
  const videoRefs = useRef<{ [key: string]: HTMLVideoElement | null }>({});
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Mouse & Touch Dragging State
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeftStart = useRef(0);
  const isDragging = useRef(false);

  const checkScroll = () => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setCanScrollLeft(scrollLeft > 20);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 20);
  };

  useEffect(() => {
    checkScroll();
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    const offset = scrollContainerRef.current.clientWidth * 0.75;
    scrollContainerRef.current.scrollBy({
      left: direction === 'left' ? -offset : offset,
      behavior: 'smooth'
    });
  };

  const handlePlay = (id: string) => {
    setPlayingVideoId(id);
    Object.entries(videoRefs.current).forEach(([k, v]) => {
      if (k !== id && v && !v.paused) {
        v.pause();
      }
    });
  };

  // Mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;
    isDown.current = true;
    startX.current = e.pageX - scrollContainerRef.current.offsetLeft;
    scrollLeftStart.current = scrollContainerRef.current.scrollLeft;
    isDragging.current = false;
  };

  const handleMouseLeave = () => {
    isDown.current = false;
  };

  const handleMouseUp = () => {
    isDown.current = false;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDown.current || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    if (Math.abs(x - startX.current) > 6) {
      isDragging.current = true;
    }
    scrollContainerRef.current.scrollLeft = scrollLeftStart.current - walk;
    checkScroll();
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* LEFT COLUMN: Narrative & Value Proposition */}
          <div className="lg:col-span-5 flex flex-col justify-center items-center lg:items-start text-center lg:text-left space-y-6 sm:space-y-8">
            
            {/* Tagline */}
            <div className="space-y-2 flex flex-col items-center lg:items-start">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.3em] text-[#be7b4c]">
                SEGURANÇA & PROCEDÊNCIA
              </span>
              <div className="w-14 h-[2.5px] bg-[#be7b4c] rounded-full mx-auto lg:mx-0" />
            </div>

            {/* Main Bold Display Title */}
            <h2 className="font-slab uppercase text-3xl sm:text-4xl md:text-5xl lg:text-5xl tracking-tight leading-[1.05] drop-shadow-lg text-center lg:text-left">
              <span className="text-[#f3e2ba] block">POR QUE CONFIAR</span>
              <span className="text-[#be7b4c] block mt-1">NA AMADEIREIRA?</span>
            </h2>

            {/* Descriptive Body Paragraph */}
            <p className="text-sm sm:text-base text-[#f3e2ba]/85 font-light leading-relaxed max-w-xl text-center lg:text-left mx-auto lg:mx-0">
              Assista aos vídeos e veja de perto o cuidado de ponta a ponta. Madeira maciça autêntica de origem 
              legal certificada, processo artesanal minucioso e um compromisso transparente com a excelência e durabilidade do seu projeto.
            </p>

            {/* Navigation Controls & Hint */}
            <div className="flex items-center gap-3 pt-1">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => scroll('left')}
                  disabled={!canScrollLeft}
                  aria-label="Vídeo anterior"
                  className="w-10 h-10 border border-[#be7b4c]/40 bg-[#1a1410]/80 hover:bg-[#be7b4c] text-[#f3e2ba] hover:text-[#120e0b] disabled:opacity-25 disabled:cursor-not-allowed flex items-center justify-center transition-all cursor-pointer rounded-none active:scale-95 shadow-md"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <button
                  type="button"
                  onClick={() => scroll('right')}
                  disabled={!canScrollRight}
                  aria-label="Próximo vídeo"
                  className="w-10 h-10 border border-[#be7b4c]/40 bg-[#1a1410]/80 hover:bg-[#be7b4c] text-[#f3e2ba] hover:text-[#120e0b] disabled:opacity-25 disabled:cursor-not-allowed flex items-center justify-center transition-all cursor-pointer rounded-none active:scale-95 shadow-md"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              <span className="text-[11px] font-mono text-[#be7b4c]/90 uppercase tracking-widest pl-1">
                Arraste ou clique para ver mais
              </span>
            </div>

            {/* 3 Pillars - VISÍVEL APENAS NO DESKTOP */}
            <div className="hidden lg:block w-full pt-2">
              {renderPillars()}
            </div>
          </div>

          {/* RIGHT COLUMN: Video Carousel with Side-by-Side Cards */}
          <div className="lg:col-span-7 w-full overflow-hidden">
            <div
              ref={scrollContainerRef}
              onScroll={checkScroll}
              onMouseDown={handleMouseDown}
              onMouseLeave={handleMouseLeave}
              onMouseUp={handleMouseUp}
              onMouseMove={handleMouseMove}
              className="flex gap-7 sm:gap-8 overflow-x-auto scrollbar-none snap-x snap-mandatory scroll-smooth pt-4 pb-6 pl-4 pr-6 cursor-grab active:cursor-grabbing select-none"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {SHOWCASE_VIDEOS.map((item) => (
                <article
                  key={item.id}
                  className="relative shrink-0 w-[260px] xs:w-[285px] sm:w-[310px] snap-start my-2"
                >
                  {/* Backing Terracotta Accent Plate - idêntico ao layout original: deslocado para o topo e esquerda */}
                  <div 
                    className="absolute top-[-12px] left-[-12px] sm:top-[-16px] sm:left-[-16px] w-full h-full bg-[#be7b4c] rounded-none opacity-95 z-0 pointer-events-none shadow-2xl"
                  />

                  {/* Video Card Container (Vertical 9:16) */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative z-10 w-full aspect-[9/16] rounded-none overflow-hidden border-2 border-[#be7b4c] bg-[#1a1410] shadow-[0_30px_60px_rgba(0,0,0,0.9)] group flex flex-col justify-between"
                  >
                    {/* Native Video Player */}
                    <video
                      ref={(el) => {
                        videoRefs.current[item.id] = el;
                      }}
                      playsInline
                      preload="metadata"
                      controls={playingVideoId === item.id}
                      onPlay={() => handlePlay(item.id)}
                      onPause={() => {
                        if (playingVideoId === item.id) {
                          setPlayingVideoId(null);
                        }
                      }}
                      onEnded={() => setPlayingVideoId(null)}
                      className="w-full h-full object-cover"
                    >
                      <source src={item.src} type="video/mp4" />
                      Seu navegador não suporta a reprodução deste vídeo.
                    </video>

                    {/* Stylish Play Overlay Button when not playing */}
                    {playingVideoId !== item.id && (
                      <button
                        type="button"
                        onClick={(e) => {
                          if (isDragging.current) return;
                          e.stopPropagation();
                          const v = videoRefs.current[item.id];
                          if (v) {
                            v.play();
                          }
                        }}
                        aria-label={`Assistir ao vídeo ${item.title}`}
                        className="absolute inset-0 flex items-center justify-center bg-black/35 hover:bg-black/15 transition-all cursor-pointer z-20 group/btn"
                      >
                        <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-black/60 border-2 border-white/90 text-white flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.8)] group-hover/btn:scale-110 group-hover/btn:bg-[#be7b4c] group-hover/btn:border-[#be7b4c] group-hover/btn:text-[#120e0b] transition-all">
                          <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-current translate-x-0.5" />
                        </div>
                      </button>
                    )}

                    {/* Bottom Card Overlay: Title and WhatsApp CTA Button */}
                    <div className="absolute inset-x-0 bottom-0 p-4 z-20 bg-gradient-to-t from-black via-black/85 to-transparent pt-12 pointer-events-none">
                      <div className="space-y-1 mb-3 text-left">
                        <p className="text-[10px] uppercase font-mono tracking-widest text-[#be7b4c] font-semibold">
                          Amadeireira Produções
                        </p>
                        <h3 className="font-slab text-base sm:text-lg text-[#f3e2ba] uppercase tracking-tight leading-snug">
                          {item.title}
                        </h3>
                      </div>

                      <a
                        href={`${WHATSAPP_BASE_URL}?text=Ol%C3%A1!%20Vi%20o%20v%C3%ADdeo%20%22${encodeURIComponent(item.title)}%22%20no%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => {
                          if (isDragging.current) e.preventDefault();
                          e.stopPropagation();
                        }}
                        className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-none bg-[#be7b4c] hover:bg-[#a6653b] text-[#141414] font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-md active:scale-95 pointer-events-auto"
                      >
                        <img src="/images/wpp.png" alt="WhatsApp" className="w-3.5 h-3.5 object-contain brightness-0" />
                        <span>Falar no WhatsApp</span>
                      </a>
                    </div>
                  </motion.div>
                </article>
              ))}
            </div>
          </div>

        </div>

        {/* 3 Pillars - VISÍVEL APENAS NO MOBILE (EMBAIXO DO VÍDEO) */}
        <div className="lg:hidden w-full max-w-xl mx-auto mt-8 sm:mt-10">
          {renderPillars()}
        </div>
      </div>
    </section>
  );
};
