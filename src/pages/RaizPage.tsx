import React from 'react';
import { ArrowRight, MessageCircle, ArrowUpRight, Sparkles, Gem, Recycle } from 'lucide-react';
import { CATALOG_BASE_URL, buildWhatsAppUrl, PRODUCTS } from '../data/products';

export const RaizPage: React.FC = () => {
  const raizProducts = PRODUCTS.filter(p => p.category === 'mesas-raiz');

  return (
    <main className="w-full overflow-hidden bg-[#141414] pt-24 sm:pt-28">
      {/* Category Hero */}
      <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/baseraiz1.webp"
            alt="Mesa Raiz escultural com base orgânica em madeira maciça"
            className="w-full h-full object-cover object-center scale-105"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/60 to-[#141414]/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#141414]/90 via-transparent to-[#141414]/70" />
        </div>

        <div className="container-editorial relative z-10 py-16 space-y-6 max-w-4xl">
          <span className="overline-tag">Coleção Escultural</span>
          <h1 className="title-display-lg text-[#f3e2ba]">
            MESA RAIZ <br />
            <span className="text-[#be7b4c]">esculturas da terra.</span>
          </h1>
          <p className="body-lead max-w-2xl text-[#f3e2ba]/90 font-light font-sans">
            Formas orgânicas irrepetíveis forjadas pelo tempo. Raízes matrizes centenárias de manejo sustentável que se tornam o ponto focal de residências sofisticadas.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
            <a
              href={`${CATALOG_BASE_URL}#produtos`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#be7b4c] hover:bg-[#a76538] text-[#141414] font-bebas text-sm uppercase tracking-wider rounded transition-all shadow-xl hover:scale-[1.02] active:scale-95 font-bold"
            >
              <span>Ver Raízes no Catálogo</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href={buildWhatsAppUrl('Olá! Fiquei muito interessado nas Mesas Raiz e gostaria de conhecer as bases disponíveis.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#1a1a1a]/80 hover:bg-[#242424] text-[#f3e2ba] border border-[#be7b4c]/40 hover:border-[#be7b4c] font-bebas text-sm uppercase tracking-wider rounded backdrop-blur-md transition-all font-bold"
            >
              <MessageCircle className="w-4 h-4 text-[#25d366] fill-current" />
              <span>Consultar Bases no WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* Attributes */}
      <section className="section-editorial bg-[#1a1a1a] relative border-y border-[#be7b4c]/20">
        <div className="container-editorial">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-[#1c1c1c] border border-[#be7b4c]/20 rounded-xl space-y-4">
              <Gem className="w-8 h-8 text-[#be7b4c]" />
              <h3 className="font-bebas text-2xl uppercase tracking-wide text-[#f3e2ba]">100% Únicas</h3>
              <p className="text-sm text-[#dcd0ba] leading-relaxed font-sans font-light">
                As dobras, nós e cavidades naturais são absolutamente exclusivas. Ninguém no mundo terá uma mesa idêntica à sua.
              </p>
            </div>

            <div className="p-8 bg-[#1c1c1c] border border-[#be7b4c]/20 rounded-xl space-y-4">
              <Recycle className="w-8 h-8 text-[#be7b4c]" />
              <h3 className="font-bebas text-2xl uppercase tracking-wide text-[#f3e2ba]">Resgate Consciente</h3>
              <p className="text-sm text-[#dcd0ba] leading-relaxed font-sans font-light">
                Raízes resgatadas de áreas de manejo regulamentado ou tombamentos naturais, transformadas em patrimônio familiar.
              </p>
            </div>

            <div className="p-8 bg-[#1c1c1c] border border-[#be7b4c]/20 rounded-xl space-y-4">
              <Sparkles className="w-8 h-8 text-[#be7b4c]" />
              <h3 className="font-bebas text-2xl uppercase tracking-wide text-[#f3e2ba]">Tampas de Vidro Cristal</h3>
              <p className="text-sm text-[#dcd0ba] leading-relaxed font-sans font-light">
                Vidro temperado de 15mm a 19mm com bordas bisotadas ou polidas que revelam a anatomia escultural por qualquer ângulo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Raiz Showcase Gallery */}
      <section className="section-editorial bg-[#141414]">
        <div className="container-editorial space-y-12">
          <div className="max-w-2xl space-y-3">
            <span className="overline-tag">Escultura Viva</span>
            <h2 className="title-section">
              O EQUILÍBRIO ENTRE <br />
              <span className="text-[#be7b4c]">o rústico e o sofisticado.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {raizProducts.map((p) => (
              <div
                key={p.id}
                className="lg:col-span-8 bg-[#1c1c1c] border border-[#be7b4c]/25 rounded-2xl overflow-hidden p-8 space-y-6 shadow-2xl flex flex-col justify-between"
              >
                <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-[#101010]">
                  <img
                    src={p.images[0]}
                    alt={p.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-[#141414]/85 backdrop-blur-md px-3 py-1 rounded text-[11px] font-bebas uppercase tracking-wider text-[#be7b4c] border border-[#be7b4c]/30">
                    {p.dimensions}
                  </div>
                </div>

                <div className="space-y-3">
                  <span className="font-bebas text-xs uppercase tracking-widest text-[#be7b4c]">
                    Espécie: {p.wood}
                  </span>
                  <h3 className="font-bebas text-3xl uppercase tracking-wide text-[#f3e2ba]">
                    {p.name}
                  </h3>
                  <p className="text-sm text-[#dcd0ba] leading-relaxed font-sans font-light">
                    {p.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-[#be7b4c]/20 flex items-center justify-between">
                  <a
                    href={p.catalogUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bebas text-sm uppercase tracking-wider text-[#dcd0ba] hover:text-[#f3e2ba] inline-flex items-center gap-1"
                  >
                    <span>Ver no Catálogo</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href={buildWhatsAppUrl(p.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-[#be7b4c] hover:bg-[#a76538] text-[#141414] font-bebas text-sm uppercase tracking-wider rounded transition-all shadow-md active:scale-95 font-bold"
                  >
                    Consultar esta Peça
                  </a>
                </div>
              </div>
            ))}

            <div className="lg:col-span-4 bg-[#1c1c1c] border border-[#be7b4c]/20 rounded-2xl p-8 space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <span className="overline-tag">Acervo Físico</span>
                <h4 className="font-bebas text-2xl uppercase tracking-wide text-[#f3e2ba]">
                  Quer escolher a sua raiz pessoalmente?
                </h4>
                <p className="text-xs text-[#dcd0ba] leading-relaxed font-sans font-light">
                  Temos diversas raízes brutas em nosso pátio aguardando o polimento e acabamento final de acordo com o tamanho desejado.
                </p>
              </div>

              <a
                href={buildWhatsAppUrl('Olá! Gostaria de agendar uma visita para escolher uma base de Mesa Raiz.')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 p-3.5 border border-[#be7b4c] text-[#f3e2ba] hover:bg-[#be7b4c] hover:text-[#141414] font-bebas text-sm uppercase tracking-wider rounded transition-all font-bold"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Agendar Escolha de Raiz</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
