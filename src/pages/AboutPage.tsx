import React from 'react';
import { Trees, MessageCircle } from 'lucide-react';
import { buildWhatsAppUrl } from '../data/products';

export const AboutPage: React.FC = () => {
  const woodSpecies = [
    {
      name: 'Pequiá Maciço',
      traits: 'Tonalidade dourada acobreada com veios entrelaçados densos. Altíssima durabilidade natural e resistência mecânica excepcional.',
      idealFor: 'Mesas cascata, grandes pranchas e áreas gourmet'
    },
    {
      name: 'Muiracatiara Rajada',
      traits: 'Design natural marcante com rajadas escuras sobre fundo castanho avermelhado. Visual contemporâneo de alto contraste.',
      idealFor: 'Mesas de jantar de destaque e aparadores'
    },
    {
      name: 'Cumaru Nobre',
      traits: 'Extrema dureza e densidade pesada. Brilho acetinado com aroma suave e estabilidade dimensional incomparável.',
      idealFor: 'Espaços com alta circulação e áreas semi-cobertas'
    },
    {
      name: 'Raízes Centenárias',
      traits: 'Esculturas naturais formadas por décadas sob a terra, revelando cavidades, dobras e nós de beleza artística inigualável.',
      idealFor: 'Mesas de centro e mesas de jantar esculturais'
    }
  ];

  return (
    <main className="w-full overflow-hidden bg-[#141414] pt-24 sm:pt-28">
      {/* Header */}
      <section className="section-editorial-sm bg-[#141414] border-b border-[#be7b4c]/20">
        <div className="container-editorial space-y-4 max-w-4xl">
          <span className="overline-tag">Nossa Origem & Propósito</span>
          <h1 className="title-display text-[#f3e2ba]">
            O ATELIÊ DA <br />
            <span className="text-[#be7b4c]">madeira nobre.</span>
          </h1>
          <p className="body-lead max-w-2xl text-[#f3e2ba]/90 font-light font-sans">
            Mais do que marcenaria: resgatamos e lapidamos a memória das florestas brasileiras, criando peças atemporais que atravessam gerações.
          </p>
        </div>
      </section>

      {/* Main Story & Workshop Photo */}
      <section className="section-editorial bg-[#1a1a1a]">
        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#be7b4c]/30 shadow-2xl">
              <img
                src="/images/craft/workshop.jpg"
                alt="Ateliê de marcenaria artesanal Amadeireira"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141414]/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 bg-[#141414]/85 backdrop-blur-md px-4 py-2 rounded-md border border-[#be7b4c]/30 text-xs text-[#be7b4c] font-bebas uppercase tracking-wider">
                Mestre Marceneiro em Ação · Ateliê Campinas
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <span className="overline-tag">Filosofia de Produção</span>
              <h2 className="title-section text-[#f3e2ba]">
                RESPEITO TOTAL À FORMA <br />
                <span className="text-[#be7b4c]">que a natureza esculpiu.</span>
              </h2>
              <p className="body-regular font-sans font-light text-[#dcd0ba]">
                Cada tronco que chega ao nosso ateliê carrega décadas, por vezes séculos, de história. Nosso papel não é forçar a madeira a uma forma geométrica padronizada, mas sim ouvir o que suas curvas, nós e fissuras pedem.
              </p>
              <p className="body-regular font-sans font-light text-[#dcd0ba]">
                Utilizamos técnicas ancestrais de marcenaria combinadas com ferramentas contemporâneas de precisão para garantir peças estruturalmente eternas, confortáveis e imponentes.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#be7b4c]/20">
                <div>
                  <h4 className="font-slab text-3xl text-[#be7b4c]">100%</h4>
                  <p className="text-xs text-[#dcd0ba] uppercase tracking-wider mt-1 font-bebas">
                    Madeira Maciça Autoral
                  </p>
                </div>
                <div>
                  <h4 className="font-slab text-3xl text-[#be7b4c]">0%</h4>
                  <p className="text-xs text-[#dcd0ba] uppercase tracking-wider mt-1 font-bebas">
                    MDF ou Compensados
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Species Guide */}
      <section className="section-editorial bg-[#141414] border-t border-[#be7b4c]/20">
        <div className="container-editorial space-y-12">
          <div className="max-w-2xl space-y-3">
            <span className="overline-tag">Guia de Matéria-Prima</span>
            <h2 className="title-section">
              ESPÉCIES NOBRES <br />
              <span className="text-[#be7b4c]">brasileiras.</span>
            </h2>
            <p className="body-regular font-sans font-light text-[#dcd0ba]">
              Conheça as características das principais madeiras utilizadas em nosso ateliê.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {woodSpecies.map((sp, idx) => (
              <div
                key={idx}
                className="p-8 bg-[#1c1c1c] border border-[#be7b4c]/25 rounded-xl space-y-4 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <Trees className="w-6 h-6 text-[#be7b4c]" />
                  <h3 className="font-bebas text-2xl uppercase tracking-wide text-[#f3e2ba]">{sp.name}</h3>
                </div>
                <p className="text-sm text-[#dcd0ba] leading-relaxed font-sans font-light">
                  {sp.traits}
                </p>
                <div className="pt-3 border-t border-[#be7b4c]/15 text-xs text-[#be7b4c] font-sans">
                  <span className="text-[#8e8474]">Indicado para: </span>
                  <strong className="text-[#f3e2ba]">{sp.idealFor}</strong>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainable Commitment */}
      <section className="section-editorial bg-[#1a1a1a] border-t border-[#be7b4c]/20">
        <div className="container-narrow text-center space-y-8">
          <span className="overline-tag justify-center">Sustentabilidade Real</span>
          <h2 className="title-section text-[#f3e2ba]">
            MANEJO RESPONSÁVEL & <br />
            <span className="text-[#be7b4c]">procedência garantida.</span>
          </h2>
          <p className="body-lead max-w-xl mx-auto font-sans font-light text-[#dcd0ba]">
            Todas as nossas matérias-primas provêm de áreas de manejo florestal sustentável regulamentadas, árvores tombadas por intempéries ou resgates conscientes de áreas licenciadas.
          </p>
          <a
            href={buildWhatsAppUrl('Olá! Gostaria de conversar com a equipe sobre a procedência e confecção das mesas.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#be7b4c] hover:bg-[#a76538] text-[#141414] font-bebas text-sm uppercase tracking-wider rounded shadow-xl font-bold"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Conversar com a Equipe Amadeireira</span>
          </a>
        </div>
      </section>
    </main>
  );
};
