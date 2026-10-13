import React from 'react';
import { ArrowRight, MessageCircle, ArrowUpRight, Trees, Hammer, Layers } from 'lucide-react';
import { CATALOG_BASE_URL, buildWhatsAppUrl, PRODUCTS } from '../data/products';

export const PranchaPage: React.FC = () => {
  const pranchaProducts = PRODUCTS.filter(p => p.category === 'mesas-prancha');

  return (
    <main className="w-full overflow-hidden bg-[#141414] pt-24 sm:pt-28">
      {/* Category Hero */}
      <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/mesaprancha1.webp"
            alt="Mesa Prancha rústica de tora maciça inteiriça"
            className="w-full h-full object-cover object-center scale-105"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/60 to-[#141414]/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#141414]/90 via-transparent to-[#141414]/70" />
        </div>

        <div className="container-editorial relative z-10 py-16 space-y-6 max-w-4xl">
          <span className="overline-tag">Coleção Matéria-Prima</span>
          <h1 className="title-display-lg text-[#f3e2ba]">
            MESA PRANCHA <br />
            <span className="text-[#be7b4c]">bordas vivas.</span>
          </h1>
          <p className="body-lead max-w-2xl text-[#f3e2ba]/90 font-light font-sans">
            A celebração da madeira em sua forma mais autêntica. Grandes toras únicas com bordas orgânicas preservadas que trazem a história ancestral da floresta para a sua sala ou varanda gourmet.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
            <a
              href={`${CATALOG_BASE_URL}#produtos`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#be7b4c] hover:bg-[#a76538] text-[#141414] font-bebas text-sm uppercase tracking-wider rounded transition-all shadow-xl hover:scale-[1.02] active:scale-95 font-bold"
            >
              <span>Ver Pranchas no Catálogo</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href={buildWhatsAppUrl('Olá! Gostaria de consultar toras e pranchas disponíveis de grande porte.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#1a1a1a]/80 hover:bg-[#242424] text-[#f3e2ba] border border-[#be7b4c]/40 hover:border-[#be7b4c] font-bebas text-sm uppercase tracking-wider rounded backdrop-blur-md transition-all font-bold"
            >
              <MessageCircle className="w-4 h-4 text-[#25d366] fill-current" />
              <span>Consultar Toras no WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* Craft Details Grid */}
      <section className="section-editorial bg-[#1a1a1a] relative border-y border-[#be7b4c]/20">
        <div className="container-editorial">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-[#1c1c1c] border border-[#be7b4c]/20 rounded-xl space-y-4">
              <Trees className="w-8 h-8 text-[#be7b4c]" />
              <h3 className="font-bebas text-2xl uppercase tracking-wide text-[#f3e2ba]">Tora Inteiriça</h3>
              <p className="text-sm text-[#dcd0ba] leading-relaxed font-sans font-light">
                Pranchas maciças únicas cortadas do centro do tronco com espessuras imponentes de 7cm a 10cm.
              </p>
            </div>

            <div className="p-8 bg-[#1c1c1c] border border-[#be7b4c]/20 rounded-xl space-y-4">
              <Hammer className="w-8 h-8 text-[#be7b4c]" />
              <h3 className="font-bebas text-2xl uppercase tracking-wide text-[#f3e2ba]">Bases em Aço Carbono</h3>
              <p className="text-sm text-[#dcd0ba] leading-relaxed font-sans font-light">
                Desenhos de bases geométricas, cavaletes esculturais ou vigas em aço carbono com pintura eletrostática preta fosca.
              </p>
            </div>

            <div className="p-8 bg-[#1c1c1c] border border-[#be7b4c]/20 rounded-xl space-y-4">
              <Layers className="w-8 h-8 text-[#be7b4c]" />
              <h3 className="font-bebas text-2xl uppercase tracking-wide text-[#f3e2ba]">Encaixes &quot;Mariposa&quot;</h3>
              <p className="text-sm text-[#dcd0ba] leading-relaxed font-sans font-light">
                Trabalho tradicional de marcenaria que estabiliza as fissuras naturais com gravatas de madeira maciça escura.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Macro Detail Split-Screen */}
      <section className="section-editorial bg-[#141414]">
        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="overline-tag">Textura & Sensação</span>
              <h2 className="title-section text-[#f3e2ba]">
                A TEXTURA DA NATUREZA <br />
                <span className="text-[#be7b4c]">ao alcance das mãos.</span>
              </h2>
              <p className="body-lead font-sans font-light text-[#dcd0ba]">
                O lixamento fino seguido da aplicação de ceras naturais de abelha e óleos nobres cria um toque aveludado único que convida ao toque e envelhece com beleza.
              </p>
              <div className="pt-2">
                <a
                  href={`${CATALOG_BASE_URL}#produtos`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-bebas text-sm uppercase tracking-widest text-[#be7b4c] hover:text-[#f3e2ba]"
                >
                  <span>Ver Pranchas Prontas para Entrega</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-6 relative aspect-square rounded-2xl overflow-hidden border border-[#be7b4c]/30 shadow-2xl">
              <img
                src="/images/gallery/macro-1.jpg"
                alt="Macro dos veios da mesa prancha de madeira maciça"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute bottom-6 left-6 bg-[#141414]/85 backdrop-blur-md px-4 py-2 rounded-md border border-[#be7b4c]/30 text-xs text-[#be7b4c] font-bebas uppercase tracking-wider">
                Detalhe Real de Acabamento Maciço
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prancha Products Section */}
      <section className="section-editorial bg-[#1a1a1a] border-t border-[#be7b4c]/20">
        <div className="container-editorial space-y-10">
          <h2 className="title-section">
            MODELOS DE PRANCHA <br />
            <span className="text-[#be7b4c]">em destaque.</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pranchaProducts.map((p) => (
              <div
                key={p.id}
                className="bg-[#1c1c1c] border border-[#be7b4c]/25 rounded-xl overflow-hidden p-6 space-y-6 flex flex-col justify-between shadow-xl"
              >
                <div className="relative aspect-[16/10] rounded-lg overflow-hidden bg-[#101010]">
                  <img
                    src={p.images[0]}
                    alt={p.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-[#141414]/85 backdrop-blur-md px-2.5 py-1 rounded text-[11px] font-bebas uppercase tracking-wider text-[#be7b4c] border border-[#be7b4c]/30">
                    {p.dimensions}
                  </div>
                </div>

                <div className="space-y-3">
                  <span className="font-bebas text-xs uppercase tracking-wider text-[#be7b4c]">
                    Madeira: {p.wood}
                  </span>
                  <h3 className="font-bebas text-2xl uppercase tracking-wide text-[#f3e2ba]">
                    {p.name}
                  </h3>
                  <p className="text-xs text-[#dcd0ba] font-sans font-light leading-relaxed">
                    {p.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#be7b4c]/20 flex items-center justify-between">
                  <a
                    href={p.catalogUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bebas text-sm uppercase tracking-wider text-[#dcd0ba] hover:text-[#f3e2ba] inline-flex items-center gap-1"
                  >
                    <span>Catálogo</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href={buildWhatsAppUrl(p.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 bg-[#be7b4c] hover:bg-[#a76538] text-[#141414] font-bebas text-sm uppercase tracking-wider rounded transition-all shadow-md active:scale-95 font-bold"
                  >
                    Consultar Tora
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};
