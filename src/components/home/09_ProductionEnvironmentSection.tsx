import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Hammer, Sparkles, ArrowUpRight } from 'lucide-react';
import { WHATSAPP_BASE_URL } from '../../data/products';

export const ProductionEnvironmentSection: React.FC = () => {
  return (
    <section id="estrutura" className="relative w-full py-20 sm:py-28 overflow-hidden bg-[#120f0d] text-[#f3e2ba]">
      {/* Background Texture com overlay sutil */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none opacity-20">
        <img
          src="/images/backgroundprojetos.webp"
          alt="Textura de fundo Amadeireira"
          className="w-full h-full object-cover object-center"
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className="container-editorial relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        {/* Header da Seção */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 sm:mb-16 gap-6">
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
              lixamento e acabamento minucioso, acompanhe de perto como transformamos madeira nobre em arte duradoura.
            </p>
          </div>

          {/* Tag de destaque à direita */}
          <div className="hidden lg:flex items-center gap-4 border-l border-[#be7b4c]/30 pl-6 text-left">
            <div>
              <p className="font-slab text-2xl text-[#be7b4c] font-bold uppercase tracking-wide">100%</p>
              <p className="text-[11px] font-mono uppercase tracking-wider text-[#f3e2ba]/70">
                Produção Própria & Manejo Legal
              </p>
            </div>
          </div>
        </div>

        {/* Bento Grid Cinematográfico */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 sm:gap-6">
          
          {/* Card 1: Destaque Principal (Acervo & Galpão) - 7 colunas */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 group relative min-h-[380px] sm:min-h-[440px] rounded-none overflow-hidden border border-[#be7b4c]/40 bg-[#1a1410] shadow-2xl flex flex-col justify-end p-6 sm:p-8"
          >
            <img
              src="/images/ctaprodutos.webp"
              alt="Galpão de Madeiras Nobres da Amadeireira"
              className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              loading="lazy"
            />
            {/* Gradient Overlays para legibilidade */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20" />
            
            <div className="relative z-10 space-y-2">
              <span className="inline-block px-3 py-1 bg-[#be7b4c] text-[#141414] text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-widest shadow-md">
                Acervo de Pranchas
              </span>
              <h3 className="font-slab text-2xl sm:text-3xl text-[#f3e2ba] uppercase tracking-tight">
                Estoque Monumental de Madeira Maciça
              </h3>
              <p className="text-xs sm:text-sm text-[#f3e2ba]/85 font-light leading-relaxed max-w-lg">
                Toras centenárias selecionadas com veios orgânicos únicos e secagem controlada para garantir que sua peça nunca empene ou rache.
              </p>
            </div>
          </motion.div>

          {/* Card 2: Trabalho Manual & Artesãos - 5 colunas */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 group relative min-h-[380px] sm:min-h-[440px] rounded-none overflow-hidden border border-[#be7b4c]/40 bg-[#1a1410] shadow-2xl flex flex-col justify-end p-6 sm:p-8"
          >
            <img
              src="/images/mesaprancha2.webp"
              alt="Mão de obra especializada e corte em madeira"
              className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/20" />

            <div className="relative z-10 space-y-2">
              <span className="inline-block px-3 py-1 bg-black/80 border border-[#be7b4c]/60 text-[#f3e2ba] text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-widest shadow-md">
                Precisão & Técnica
              </span>
              <h3 className="font-slab text-xl sm:text-2xl text-[#f3e2ba] uppercase tracking-tight">
                Mão de Obra Especializada
              </h3>
              <p className="text-xs sm:text-sm text-[#f3e2ba]/85 font-light leading-relaxed">
                Cada corte em 45º, lixamento e encaixe estrutural é executado por profissionais que conhecem a fundo a anatomia da madeira.
              </p>
            </div>
          </motion.div>

          {/* Card 3: Selo de Qualidade / Card Técnico - 4 colunas */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-4 rounded-none border border-[#be7b4c]/50 bg-gradient-to-br from-[#1d1712] via-[#16120e] to-black p-6 sm:p-8 flex flex-col justify-between shadow-2xl space-y-6"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-none bg-[#be7b4c]/15 border border-[#be7b4c]/40 flex items-center justify-center text-[#be7b4c]">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-slab text-xl sm:text-2xl text-[#f3e2ba] uppercase tracking-tight leading-snug">
                Rigor em Cada Milímetro
              </h3>
              <p className="text-xs sm:text-sm text-[#f3e2ba]/80 font-light leading-relaxed">
                Madeiras estabilizadas e niveladas com maquinário de alta precisão, preservando a essência viva e as bordas orgânicas de cada prancha.
              </p>
            </div>

            <div className="pt-4 border-t border-[#be7b4c]/20 flex items-center justify-between text-[11px] font-mono uppercase tracking-wider text-[#be7b4c]">
              <span>Controle Rigoroso</span>
              <Sparkles className="w-3.5 h-3.5" />
            </div>
          </motion.div>

          {/* Card 4: Acabamento Nobre & Resina - 4 colunas */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-4 group relative min-h-[300px] sm:min-h-[340px] rounded-none overflow-hidden border border-[#be7b4c]/40 bg-[#1a1410] shadow-2xl flex flex-col justify-end p-6 sm:p-7"
          >
            <img
              src="/images/mesaresinaepoxi2.webp"
              alt="Acabamento com resina e seladoras especiais"
              className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />

            <div className="relative z-10 space-y-1.5">
              <span className="inline-block px-2.5 py-0.5 bg-[#be7b4c]/90 text-[#141414] text-[10px] font-mono font-bold uppercase tracking-widest shadow-md">
                Acabamento
              </span>
              <h3 className="font-slab text-lg sm:text-xl text-[#f3e2ba] uppercase tracking-tight">
                Toque Aveludado & Proteção
              </h3>
              <p className="text-xs text-[#f3e2ba]/80 font-light leading-relaxed">
                Seladoras nobres e resinas que protegem contra líquidos e manchas sem perder a textura natural.
              </p>
            </div>
          </motion.div>

          {/* Card 5: Convite à Fábrica / CTA direto - 4 colunas */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-4 rounded-none border-2 border-[#be7b4c] bg-[#be7b4c]/10 hover:bg-[#be7b4c]/15 transition-all p-6 sm:p-8 flex flex-col justify-between shadow-2xl space-y-6"
          >
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Hammer className="w-4 h-4 text-[#be7b4c]" />
                <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.2em] text-[#be7b4c] font-bold">
                  PORTAS ABERTAS
                </span>
              </div>
              <h3 className="font-slab text-xl sm:text-2xl text-[#f3e2ba] uppercase tracking-tight leading-snug">
                Venha Conhecer Nossa Estrutura
              </h3>
              <p className="text-xs text-[#f3e2ba]/85 font-light leading-relaxed">
                Gostaria de ver de perto nosso estoque e escolher pessoalmente a prancha do seu projeto? Nossas portas estão abertas.
              </p>
            </div>

            <a
              href={`${WHATSAPP_BASE_URL}?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20visita%20para%20conhecer%20a%20estrutura%20da%20Amadeireira%20e%20escolher%20minha%20pe%C3%A7a.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-none bg-[#be7b4c] hover:bg-[#a6653b] text-[#141414] font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-lg active:scale-95"
            >
              <span>Agendar Visita</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
