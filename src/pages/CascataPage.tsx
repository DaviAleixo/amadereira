import React from 'react';
import { ArrowRight, MessageCircle, ArrowUpRight, Compass, ShieldCheck, Sparkles } from 'lucide-react';
import { CATALOG_BASE_URL, buildWhatsAppUrl, PRODUCTS } from '../data/products';

export const CascataPage: React.FC = () => {
  const cascataProducts = PRODUCTS.filter(p => p.category === 'mesas-cascata');

  return (
    <main className="w-full overflow-hidden bg-[#141414] pt-24 sm:pt-28">
      {/* Category Hero */}
      <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/mesacascata1.webp"
            alt="Mesa Cascata em madeira maciça com corte 45 graus"
            className="w-full h-full object-cover object-center scale-105"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/60 to-[#141414]/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#141414]/90 via-transparent to-[#141414]/70" />
        </div>

        <div className="container-editorial relative z-10 py-16 space-y-6 max-w-4xl">
          <span className="overline-tag">Coleção Arquitetônica</span>
          <h1 className="title-display-lg text-[#f3e2ba]">
            MESA CASCATA <br />
            <span className="text-[#be7b4c]">veios contínuos.</span>
          </h1>
          <p className="body-lead max-w-2xl text-[#f3e2ba]/90 font-light font-sans">
            A união perfeita entre a força bruta da madeira maciça e a precisão do corte em meia-esquadria de 45°. O tampo flui naturalmente e desce até o chão como uma queda d&apos;água viva.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
            <a
              href={`${CATALOG_BASE_URL}#produtos`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#be7b4c] hover:bg-[#a76538] text-[#141414] font-bebas text-sm uppercase tracking-wider rounded transition-all shadow-xl hover:scale-[1.02] active:scale-95 font-bold"
            >
              <span>Ver Cascatas no Catálogo</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href={buildWhatsAppUrl('Olá! Gostaria de consultar valores e medidas para uma Mesa Cascata sob medida.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#1a1a1a]/80 hover:bg-[#242424] text-[#f3e2ba] border border-[#be7b4c]/40 hover:border-[#be7b4c] font-bebas text-sm uppercase tracking-wider rounded backdrop-blur-md transition-all font-bold"
            >
              <MessageCircle className="w-4 h-4 text-[#25d366] fill-current" />
              <span>Orçar no WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* Engineering & Craft Attributes */}
      <section className="section-editorial bg-[#1a1a1a] relative border-y border-[#be7b4c]/20">
        <div className="container-editorial">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-[#1c1c1c] border border-[#be7b4c]/20 rounded-xl space-y-4">
              <Compass className="w-8 h-8 text-[#be7b4c]" />
              <h3 className="font-bebas text-2xl uppercase tracking-wide text-[#f3e2ba]">Continuidade Absoluta</h3>
              <p className="text-sm text-[#dcd0ba] leading-relaxed font-sans font-light">
                A mesma prancha de madeira é recortada milimetricamente para que os anéis de crescimento e os veios do tampo continuem na perna vertical.
              </p>
            </div>

            <div className="p-8 bg-[#1c1c1c] border border-[#be7b4c]/20 rounded-xl space-y-4">
              <ShieldCheck className="w-8 h-8 text-[#be7b4c]" />
              <h3 className="font-bebas text-2xl uppercase tracking-wide text-[#f3e2ba]">Estrutura Interna Blindada</h3>
              <p className="text-sm text-[#dcd0ba] leading-relaxed font-sans font-light">
                Alma metálica interna oculta e resina epóxi estrutural que garantem estabilidade total sem necessidade de travas visíveis.
              </p>
            </div>

            <div className="p-8 bg-[#1c1c1c] border border-[#be7b4c]/20 rounded-xl space-y-4">
              <Sparkles className="w-8 h-8 text-[#be7b4c]" />
              <h3 className="font-bebas text-2xl uppercase tracking-wide text-[#f3e2ba]">Acabamento Nobre</h3>
              <p className="text-sm text-[#dcd0ba] leading-relaxed font-sans font-light">
                Polimento manual progressivo e selagem com óleos minerais naturais que protegem contra líquidos e realçam o calor do Pequiá.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Available Models & Highlights */}
      <section className="section-editorial bg-[#141414]">
        <div className="container-editorial space-y-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-[#be7b4c]/20 pb-6">
            <div className="space-y-2">
              <span className="overline-tag">Modelos em Destaque</span>
              <h2 className="title-section">
                PEÇAS CASCATA <br />
                <span className="text-[#be7b4c]">selecionadas.</span>
              </h2>
            </div>
            <a
              href={`${CATALOG_BASE_URL}#produtos`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-bebas text-sm uppercase tracking-wider text-[#be7b4c] hover:text-[#f3e2ba]"
            >
              <span>Ver acervo completo</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {cascataProducts.map((product) => (
              <div
                key={product.id}
                className="group bg-[#1c1c1c] border border-[#be7b4c]/25 rounded-xl overflow-hidden shadow-2xl flex flex-col justify-between"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-[#101010]">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-[#141414]/85 backdrop-blur-md px-3 py-1 rounded text-[11px] font-bebas uppercase tracking-wider text-[#be7b4c] border border-[#be7b4c]/30">
                    {product.dimensions}
                  </div>
                </div>

                <div className="p-8 space-y-6 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    <span className="font-bebas text-xs uppercase tracking-widest text-[#be7b4c] block">
                      Madeira: {product.wood}
                    </span>
                    <h3 className="font-bebas text-2xl uppercase tracking-wide text-[#f3e2ba] group-hover:text-[#be7b4c] transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-sm text-[#dcd0ba] leading-relaxed font-sans font-light">
                      {product.description}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-[#be7b4c]/20 flex items-center justify-between gap-4">
                    <a
                      href={product.catalogUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bebas text-sm uppercase tracking-wider text-[#dcd0ba] hover:text-[#f3e2ba] inline-flex items-center gap-1"
                    >
                      <span>Catálogo</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href={buildWhatsAppUrl(product.whatsappMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 bg-[#be7b4c] hover:bg-[#a76538] text-[#141414] font-bebas text-sm uppercase tracking-wider rounded transition-all shadow-md active:scale-95 font-bold"
                    >
                      Consultar Disponibilidade
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Custom Cascata CTA */}
      <section className="section-editorial bg-[#1a1a1a] border-t border-[#be7b4c]/20">
        <div className="container-narrow text-center space-y-8">
          <span className="overline-tag justify-center">Projeto Sob Medida</span>
          <h2 className="title-section text-[#f3e2ba]">
            DESEJA UMA MESA CASCATA <br />
            <span className="text-[#be7b4c]">na sua medida ideal?</span>
          </h2>
          <p className="body-lead max-w-xl mx-auto font-sans font-light text-[#dcd0ba]">
            Produzimos mesas cascata de 2,00m a mais de 4,50m com seleção individual da prancha de madeira.
          </p>
          <a
            href={buildWhatsAppUrl('Olá! Gostaria de encomendar uma Mesa Cascata sob medida para meu projeto.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#be7b4c] hover:bg-[#a76538] text-[#141414] font-bebas text-sm uppercase tracking-wider rounded shadow-xl font-bold"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Falar com o Especialista em Mesa Cascata</span>
          </a>
        </div>
      </section>
    </main>
  );
};
