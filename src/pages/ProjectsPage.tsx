import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, MessageCircle, ArrowRight } from 'lucide-react';
import { REAL_PROJECTS } from '../data/projects';
import { buildWhatsAppUrl } from '../data/products';

export const ProjectsPage: React.FC = () => {
  return (
    <main className="w-full overflow-hidden bg-[#141414] pt-24 sm:pt-28">
      {/* Header */}
      <section className="section-editorial-sm bg-[#141414] border-b border-[#be7b4c]/20">
        <div className="container-editorial space-y-4 max-w-4xl">
          <span className="overline-tag">Galeria de Ambientes</span>
          <h1 className="title-display text-[#f3e2ba]">
            PROJETOS & <br />
            <span className="text-[#be7b4c]">ambientes reais.</span>
          </h1>
          <p className="body-lead max-w-2xl text-[#f3e2ba]/90 font-light font-sans">
            Inspire-se com residências contemporâneas, coberturas e varandas gourmet que escolheram as mesas autorais da Amadeireira para ancorar seus espaços de convivência.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-editorial bg-[#1a1a1a]">
        <div className="container-editorial space-y-16">
          {REAL_PROJECTS.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8 }}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-[#1c1c1c] border border-[#be7b4c]/25 rounded-2xl overflow-hidden p-6 sm:p-10 shadow-2xl ${
                idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image */}
              <div className={`lg:col-span-7 relative aspect-[16/10] rounded-xl overflow-hidden border border-[#be7b4c]/30 shadow-xl ${
                idx % 2 === 1 ? 'lg:order-2' : 'lg:order-1'
              }`}>
                <img
                  src={project.image}
                  alt={`${project.title} - ${project.pieceUsed}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-[#141414]/85 backdrop-blur-md px-3.5 py-1 rounded text-[11px] font-bebas uppercase tracking-wider text-[#be7b4c] border border-[#be7b4c]/30">
                  {project.category}
                </div>
              </div>

              {/* Details */}
              <div className={`lg:col-span-5 space-y-6 ${
                idx % 2 === 1 ? 'lg:order-1' : 'lg:order-2'
              }`}>
                <div className="space-y-2">
                  <span className="flex items-center gap-1.5 text-xs text-[#be7b4c] font-semibold font-sans">
                    <MapPin className="w-3.5 h-3.5" />
                    {project.location}
                  </span>
                  <h2 className="font-bebas text-3xl sm:text-4xl uppercase tracking-wide text-[#f3e2ba]">
                    {project.title}
                  </h2>
                  <p className="text-sm text-[#dcd0ba] leading-relaxed font-sans font-light">
                    {project.description}
                  </p>
                </div>

                <div className="p-4 bg-[#141414] border border-[#be7b4c]/20 rounded-lg space-y-2 text-xs font-sans">
                  <div className="flex justify-between text-[#dcd0ba]">
                    <span>Peça Selecionada:</span>
                    <strong className="text-[#f3e2ba]">{project.pieceUsed}</strong>
                  </div>
                  <div className="flex justify-between text-[#dcd0ba]">
                    <span>Espécie Nobre:</span>
                    <strong className="text-[#be7b4c]">{project.wood}</strong>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href={buildWhatsAppUrl(`Olá! Vi o projeto ${project.title} no site e gostaria de orçar uma peça semelhante.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#be7b4c] hover:bg-[#a76538] text-[#141414] font-bebas text-sm uppercase tracking-wider rounded transition-all shadow-lg active:scale-95 font-bold"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>Orçar Peça Semelhante</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Architect / Designer Partner CTA */}
      <section className="section-editorial bg-[#141414] border-t border-[#be7b4c]/20">
        <div className="container-narrow text-center space-y-6">
          <span className="overline-tag justify-center">Arquitetos & Designers</span>
          <h2 className="title-section text-[#f3e2ba]">
            ESPECIFIQUE A AMADEIREIRA <br />
            <span className="text-[#be7b4c]">nos seus projetos.</span>
          </h2>
          <p className="body-lead max-w-xl mx-auto font-sans font-light text-[#dcd0ba]">
            Oferecemos atendimento exclusivo para escritórios de arquitetura, consultoria de medidas especiais, arquivos 3D e amostras de madeiras.
          </p>
          <a
            href={buildWhatsAppUrl('Olá! Sou arquiteto(a)/designer e gostaria de cadastrar meu escritório para especificar peças da Amadeireira.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#be7b4c] hover:bg-[#a76538] text-[#141414] font-bebas text-sm uppercase tracking-wider rounded shadow-xl font-bold"
          >
            <span>Falar com Atendimento a Arquitetos</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </main>
  );
};
