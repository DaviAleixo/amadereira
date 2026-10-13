import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, X, ArrowUpRight } from 'lucide-react';
import { REAL_PROJECTS } from '../../data/projects';
import { WHATSAPP_BASE_URL } from '../../data/products';

export const RealEnvironmentsSection: React.FC = () => {
  const [playingVideoId, setPlayingVideoId] = useState<string | null>(null);
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

  return (
    <section
      id="projetos"
      className="relative w-full py-16 sm:py-24 overflow-hidden scroll-mt-20"
    >
      <div id="depoimentos" className="absolute top-0 -translate-y-20 pointer-events-none" />
      {/* 1. Background Image with backgroundprojetos.png */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <img
          src="/images/backgroundprojetos.webp"
          alt="Amadeireira Projetos Background"
          className="w-full h-full object-cover object-center"
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className="max-w-[1420px] w-[calc(100%-32px)] sm:w-[calc(100%-48px)] lg:w-[calc(100%-64px)] mx-auto relative z-10">
        
        {/* Header (Bordas quadradas / rounded-none) */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 sm:mb-12 gap-6 items-center lg:items-end">
          <div className="space-y-2 text-center lg:text-left flex flex-col items-center lg:items-start max-w-2xl">
            <div className="flex items-center justify-center lg:justify-start gap-2">
              <span className="w-5 h-[1.5px] bg-[#9e5d2b]" />
              <span className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-[#9e5d2b]">
                AMBIENTES REAIS & CLIENTES
              </span>
              <span className="w-5 h-[1.5px] bg-[#9e5d2b] lg:hidden" />
            </div>
            <h2 className="font-slab text-3xl sm:text-4xl lg:text-[42px] text-[#120e0b] uppercase tracking-tight leading-[1.05]">
              PROJETOS & DEPOIMENTOS
            </h2>
            <p className="text-xs sm:text-sm text-[#5c4f42] font-normal leading-relaxed pt-1 max-w-xl">
              Mais do que móveis, entregamos histórias. Veja como nossos clientes transformaram seus espaços com a qualidade da nossa madeira.
            </p>
          </div>

          {/* Action buttons on top right */}
          <div className="flex items-center justify-center lg:justify-end gap-3 self-center lg:self-end">
            <a
              href={`${WHATSAPP_BASE_URL}?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20projeto%20sob%20medida%20com%20a%20Amadeireira.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-none border border-[#9e5d2b]/50 bg-[#faefe4]/70 hover:bg-[#9e5d2b] text-[#6d3e1a] hover:text-white text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-sm active:scale-95"
            >
              <span>Orçar no WhatsApp</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            <div className="flex items-center gap-1.5">
              <button
                onClick={() => scroll('left')}
                disabled={!canScrollLeft}
                aria-label="Voltar"
                className="w-10 h-10 border border-[#2a221b]/20 bg-white/80 hover:bg-white text-[#120e0b] disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center transition-all cursor-pointer rounded-none active:scale-95 shadow-sm"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <button
                onClick={() => scroll('right')}
                disabled={!canScrollRight}
                aria-label="Avançar"
                className="w-10 h-10 border border-[#2a221b]/20 bg-white/80 hover:bg-white text-[#120e0b] disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center transition-all cursor-pointer rounded-none active:scale-95 shadow-sm"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Drag-enabled Horizontal Slider com Bordas Quadradas */}
        <div
          ref={scrollContainerRef}
          onScroll={checkScroll}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          className="flex gap-5 sm:gap-6 overflow-x-auto scrollbar-none snap-x snap-mandatory scroll-smooth pb-4 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 cursor-grab active:cursor-grabbing select-none"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {REAL_PROJECTS.map((project) => (
            <article
              key={project.id}
              className="relative shrink-0 w-[300px] sm:w-[350px] lg:w-[370px] aspect-[3/4.2] bg-[#110c09] rounded-none overflow-hidden snap-start group border border-[#2a2018] select-none shadow-2xl"
            >
              {playingVideoId === project.id ? (
                <div className="relative w-full h-full bg-black">
                  <iframe
                    src={`${project.videoUrl || 'https://www.youtube-nocookie.com/embed/sAVHpVLfgng'}?autoplay=1&rel=0&modestbranding=1`}
                    title={`${project.client} - ${project.piece}`}
                    className="w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setPlayingVideoId(null);
                    }}
                    aria-label="Fechar vídeo"
                    className="absolute top-3 right-3 z-30 w-8 h-8 rounded-full bg-black/85 hover:bg-[#be7b4c] text-white hover:text-[#110c09] flex items-center justify-center transition-all cursor-pointer shadow-lg active:scale-95"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <>
                  {/* Image Visual */}
                  <img
                    src={project.image}
                    alt={`${project.title} - ${project.piece}`}
                    className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-105 pointer-events-none"
                    loading="lazy"
                    draggable={false}
                  />

                  {/* Video Play Button (center) */}
                  <button
                    onClick={(e) => {
                      if (isDragging.current) return;
                      e.stopPropagation();
                      setPlayingVideoId(project.id);
                    }}
                    aria-label={`Assistir vídeo de ${project.client}`}
                    className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-black/75 hover:bg-[#be7b4c] text-white hover:text-[#110c09] border border-white/20 hover:border-transparent flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer z-20 backdrop-blur-sm shadow-2xl"
                  >
                    <Play className="w-6 h-6 fill-current translate-x-0.5" />
                  </button>

                  {/* Bottom Card Content with dark gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent flex flex-col justify-end p-5 text-white text-left z-10 pointer-events-none">
                    <div className="space-y-1">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-[#d49a6a] font-extrabold block">
                        {project.client}
                      </span>

                      <h3 className="font-slab text-lg sm:text-xl text-white uppercase leading-tight font-normal">
                        {project.piece}
                      </h3>

                      {/* Botão Solicitar Projeto no WhatsApp */}
                      <div className="pt-2">
                        <a
                          href={`${WHATSAPP_BASE_URL}?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20projeto%20sob%20medida%20inspirado%20no%20${encodeURIComponent(project.title)}%20(${encodeURIComponent(project.piece)}).`}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => {
                            if (isDragging.current) e.preventDefault();
                            e.stopPropagation();
                          }}
                          className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-none bg-[#be7b4c] hover:bg-[#a6653b] text-[#141414] font-bebas font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-md active:scale-95 pointer-events-auto"
                        >
                          <img src="/images/wpp.png" alt="WhatsApp" className="w-3.5 h-3.5 object-contain brightness-0" />
                          <span>Solicitar Projeto</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
