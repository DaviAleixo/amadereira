import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../../data/testimonials';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const current = TESTIMONIALS[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section id="depoimentos" className="py-20 sm:py-28 bg-[#120b07] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-6 border-b border-[#be7b4c]/20 pb-8">
          <div className="space-y-3">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#d49a6a]">
              <span className="w-5 h-[1.5px] bg-[#d49a6a] inline-block" />
              Confiança & Prova Real
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#f5ede3] font-medium leading-tight">
              EXPERIÊNCIAS <br />
              <em className="font-serif italic font-normal text-[#d49a6a]">compartilhadas.</em>
            </h2>
          </div>
          {/* Controls */}
          <div className="flex items-center gap-4">
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-full bg-[#180e09] border border-[#be7b4c]/40 text-[#d49a6a] hover:bg-[#be7b4c] hover:text-[#0e0805] flex items-center justify-center transition-all shadow-md active:scale-95"
              aria-label="Depoimento anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="text-xs font-mono font-bold text-[#a89787]">
              0{currentIndex + 1} / 0{TESTIMONIALS.length}
            </span>
            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full bg-[#180e09] border border-[#be7b4c]/40 text-[#d49a6a] hover:bg-[#be7b4c] hover:text-[#0e0805] flex items-center justify-center transition-all shadow-md active:scale-95"
              aria-label="Próximo depoimento"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Editorial Spread */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-[#180e09] border border-[#be7b4c]/30 rounded-2xl overflow-hidden p-6 sm:p-12 shadow-2xl"
          >
            {/* Left Photo */}
            <div className="lg:col-span-6 relative aspect-[4/3] rounded-xl overflow-hidden border border-[#be7b4c]/30 shadow-xl bg-[#100905]">
              <img
                src={current.image}
                alt={`${current.customerName} - ${current.product}`}
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
              <div className="absolute bottom-4 left-4 bg-[#0e0805]/90 px-3.5 py-1 rounded text-[10px] font-bold uppercase tracking-wider text-[#d49a6a] border border-[#be7b4c]/30">
                {current.product}
              </div>
            </div>

            {/* Right Quote */}
            <div className="lg:col-span-6 space-y-6">
              <Quote className="w-10 h-10 text-[#d49a6a] opacity-80" />

              <blockquote className="font-serif text-xl sm:text-2xl md:text-3xl text-[#f5ede3] leading-relaxed font-normal">
                &ldquo;{current.quote}&rdquo;
              </blockquote>

              <div className="pt-4 border-t border-[#be7b4c]/20 space-y-1">
                <p className="font-bold text-base text-[#f5ede3]">
                  {current.customerName}
                </p>
                <p className="text-xs text-[#d49a6a] uppercase tracking-wider font-semibold">
                  {current.projectType} · {current.location}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
