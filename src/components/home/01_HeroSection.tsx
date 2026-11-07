"use client";

import { WHATSAPP_BASE_URL } from "../../data/products";

export function HeroSection() {
  return (
    <section className="relative h-[100dvh] w-full overflow-hidden bg-[#141414]">
      {/* 1. Background Image Layer - Apenas a foto hero.png com os gradientes idênticos ao layout de exemplo */}
      <div className="absolute inset-0 z-0 h-full w-full">
        <img
          src="/images/hero.png"
          alt="Amadeireira — Móveis Autorais de Madeira Maciça"
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        {/* Gradiente superior para enquadrar perfeitamente o header e as vigas */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-transparent pointer-events-none" />
        {/* Gradiente inferior para transição suave com a seção seguinte */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#141414] via-[#141414]/50 to-transparent pointer-events-none" />
      </div>

      {/* 2. Content Layer - Headline e botões posicionados harmoniosamente com folga acima da mesa */}
      <div
        className="absolute inset-x-0 bottom-[36%] sm:bottom-[37%] md:bottom-[38%] lg:bottom-[39%] z-10 mx-auto flex w-full max-w-4xl flex-col items-center px-4 sm:px-6 text-center"
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
        <h1 className="mb-9 xs:mb-10 sm:mb-7 text-[29px] xs:text-[32px] sm:text-4xl md:text-5xl lg:text-[56px] font-slab uppercase leading-[1.08] tracking-tight [text-wrap:balance]">
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
            href={`${WHATSAPP_BASE_URL}?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Amadeireira%20e%20gostaria%20de%20conhecer%20os%20modelos%20de%20mesas.`}
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
    </section>
  );
}
