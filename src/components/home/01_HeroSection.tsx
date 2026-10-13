"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowDown } from "lucide-react";
import { WHATSAPP_BASE_URL, CATALOG_BASE_URL } from "../../data/products";

export function HeroSection() {
  const contentRef = useRef<HTMLDivElement>(null);
  const [animationComplete, setAnimationComplete] = useState(false);
  const accumulatedScrollRef = useRef(0);

  const SCROLL_THRESHOLD = 1300;

  useEffect(() => {
    const isDesktop = () => window.innerWidth >= 768;

    const updateAnimation = (progress: number) => {
      const content = contentRef.current;
      if (!content) return;

      if (!isDesktop()) {
        content.style.transform = "";
        content.style.opacity = "";
        return;
      }

      // Distância para afundar o conteúdo atrás da mesa de forma suave e progressiva (SOMENTE DESKTOP)
      content.style.transform = `translateY(${progress * 560}px) rotateX(${progress * 38}deg) scale(${1 - progress * 0.32})`;
      content.style.opacity = `${Math.max(0, 1 - progress * 0.85)}`;
    };

    // Desktop mouse wheel scroll handling
    const handleWheel = (event: WheelEvent) => {
      if (!isDesktop()) return;

      const atTopOfPage = window.scrollY === 0;
      if (!atTopOfPage) return;

      if (!animationComplete || event.deltaY < 0) {
        if (event.cancelable) {
          event.preventDefault();
        }

        accumulatedScrollRef.current = Math.max(
          0,
          Math.min(SCROLL_THRESHOLD, accumulatedScrollRef.current + event.deltaY * 0.65)
        );

        const progress = accumulatedScrollRef.current / SCROLL_THRESHOLD;
        updateAnimation(progress);

        if (progress >= 1) {
          setAnimationComplete(true);
        } else {
          setAnimationComplete(false);
        }
      }
    };

    const handleResize = () => {
      const content = contentRef.current;
      if (!isDesktop() && content) {
        content.style.transform = "";
        content.style.opacity = "";
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("resize", handleResize);
    };
  }, [animationComplete]);

  return (
    <section className="relative h-[100dvh] w-full overflow-hidden bg-[#141414]">
      {/* 1. Background Image Layer */}
      <div className="absolute inset-0 z-0 h-full w-full">
        <img
          src="/images/partedecima.webp"
          alt="Amadeireira Background"
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-transparent" />
      </div>

      {/* 2. Content Layer - Posicionado harmonicamente próximo à madeira no mobile sem encavalar */}
      <div
        ref={contentRef}
        className="absolute inset-x-0 bottom-[42.5%] md:bottom-auto md:top-[15vh] lg:top-[16vh] xl:top-[17vh] z-30 md:z-10 mx-auto flex w-full max-w-4xl flex-col items-center px-4 sm:px-6 text-center"
        style={{
          willChange: "transform, opacity",
          transform: "translateY(0px)",
          perspective: "1000px",
          transformStyle: "preserve-3d",
        }}
      >
        {/* Top Tagline */}
        <div className="flex items-center justify-center gap-2.5 mb-3 sm:mb-3.5">
          <span className="h-[1.5px] w-7 sm:w-10 bg-[#be7b4c]"></span>
          <span className="text-[#f3e2ba] text-[10.5px] sm:text-xs font-bebas tracking-[0.25em] uppercase">
            Móveis de Alto Padrão
          </span>
          <span className="h-[1.5px] w-7 sm:w-10 bg-[#be7b4c]"></span>
        </div>

        {/* Heading */}
        <h1 className="mb-3 sm:mb-4 text-[29px] xs:text-[32px] sm:text-4xl md:text-5xl lg:text-[56px] font-slab uppercase leading-[1.08] tracking-tight [text-wrap:balance]">
          <span className="text-[#f3e2ba]">FEITA PELA</span>{" "}
          <br className="sm:hidden" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f3e2ba] via-[#e2a87b] to-[#be7b4c]">
            NATUREZA.
          </span>{" "}
          <br className="hidden sm:block" />
          <span className="text-[#f3e2ba]">REFINADA</span>{" "}
          <br className="sm:hidden" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e2a87b] to-[#be7b4c]">
            POR NÓS.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mb-5 sm:mb-6 text-[12.5px] xs:text-[13px] sm:text-sm md:text-base text-[#f3e2ba]/90 font-light leading-relaxed max-w-[320px] sm:max-w-md md:max-w-xl mx-auto px-1">
          Madeira maciça autoral. Peças únicas, duráveis e acabamento fino para espaços exclusivos.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full max-w-[330px] sm:max-w-xl mx-auto">
          {/* Primary Button */}
          <a
            href={`${WHATSAPP_BASE_URL}?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Amadeireira%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento.`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:flex-1 h-12 sm:h-13 rounded-xl sm:rounded-2xl bg-[#be7b4c] hover:bg-[#a76538] flex items-center justify-between text-[#141414] font-bebas text-base tracking-[0.16em] uppercase overflow-hidden shadow-[0_4px_20px_rgba(190,123,76,0.4)] transition-all hover:scale-[1.01] active:scale-100"
          >
            <span className="flex-1 text-center pl-5 sm:pl-6 font-bold">Solicitar Orçamento</span>
            <div className="w-11 sm:w-13 h-full border-l border-[#141414]/20 flex items-center justify-center shrink-0">
              <span className="text-lg font-light">→</span>
            </div>
          </a>

          {/* Secondary Button */}
          <a
            href={`${CATALOG_BASE_URL}#produtos`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:flex-1 h-12 sm:h-13 rounded-xl sm:rounded-2xl bg-[#141414]/75 hover:bg-[#141414]/90 border border-[#f3e2ba]/30 hover:border-[#f3e2ba]/60 backdrop-blur-md flex items-center justify-between text-[#f3e2ba] font-bebas text-base tracking-[0.16em] uppercase overflow-hidden transition-all hover:scale-[1.01] active:scale-100"
          >
            <span className="flex-1 text-center pl-5 sm:pl-6">Conhecer Nossas Mesas</span>
            <div className="w-11 sm:w-13 h-full border-l border-[#f3e2ba]/20 flex items-center justify-center shrink-0 text-[#f3e2ba]/80">
              <span className="text-lg font-light">→</span>
            </div>
          </a>
        </div>
      </div>

      {/* 3. Foreground Table Layer (Pinned across bottom of viewport) */}
      <div className="pointer-events-none absolute inset-0 z-20 h-full w-full">
        <img
          src="/images/partedebaixo.webp"
          alt="Amadeireira Foreground"
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#141414] via-[#141414]/50 to-transparent" />
      </div>

      {/* 4. Scroll indicator when swipe animation completes (Desktop) */}
      {animationComplete && (
        <div
          className="hidden md:flex absolute bottom-6 left-1/2 z-30 -translate-x-1/2 animate-bounce cursor-pointer flex-col items-center gap-1"
          onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <ArrowDown className="h-5 w-5 text-[#be7b4c]" />
        </div>
      )}
    </section>
  );
}
