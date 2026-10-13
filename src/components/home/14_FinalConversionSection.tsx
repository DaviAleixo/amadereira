import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { WHATSAPP_BASE_URL, CATALOG_BASE_URL } from '../../data/products';

export const FinalConversionSection: React.FC = () => {
  return (
    <section className="relative py-28 sm:py-36 bg-[#0e0805] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/categories/prancha.webp"
          alt="Mesa de madeira maciça Amadeireira"
          className="w-full h-full object-cover object-center opacity-30 scale-105"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0e0805] via-[#0e0805]/80 to-[#0e0805]" />
      </div>

      <div className="max-w-4xl mx-auto px-6 sm:px-10 relative z-10 text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-4"
        >
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#d49a6a]">
            <span className="w-5 h-[1.5px] bg-[#d49a6a] inline-block" />
            O Próximo Passo
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#f5ede3] font-medium leading-tight">
            SUA PRÓXIMA MESA <br />
            <em className="font-serif italic font-normal text-[#d49a6a]">pode estar aqui.</em>
          </h2>
          <p className="text-sm sm:text-base text-[#f5ede3]/85 max-w-xl mx-auto leading-relaxed">
            Descubra as peças disponíveis no catálogo ou envie as medidas do seu projeto para um orçamento sob medida no WhatsApp.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
        >
          <a
            href={`${CATALOG_BASE_URL}#produtos`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#be7b4c] hover:bg-[#a6653b] text-[#0e0805] font-black text-xs uppercase tracking-wider rounded transition-all duration-300 shadow-2xl shadow-[#be7b4c]/30 hover:scale-[1.02] active:scale-95 group text-center"
          >
            <span>Ver Peças Disponíveis</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>

          <a
            href={`${WHATSAPP_BASE_URL}?text=Ol%C3%A1!%20Gostaria%20de%20conversar%20sobre%20as%20mesas%20da%20Amadeireira.`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#180e09] hover:bg-[#25150d] text-[#f5ede3] hover:text-white border border-[#be7b4c]/40 hover:border-[#d49a6a] font-bold text-xs uppercase tracking-wider rounded transition-all duration-300 active:scale-95 text-center shadow-lg"
          >
            <MessageCircle className="w-4 h-4 text-[#25d366] fill-current" />
            <span>Falar no WhatsApp</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
