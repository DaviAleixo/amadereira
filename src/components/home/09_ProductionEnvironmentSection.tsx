import React from 'react';
import { LayoutGrid } from '../ui/layout-grid';
import type { LayoutGridCard } from '../ui/layout-grid';
import { WHATSAPP_BASE_URL } from '../../data/products';
import { ArrowUpRight } from 'lucide-react';

const CardContentOne = () => (
  <div className="space-y-3">
    <div className="flex items-center gap-2">
      <span className="w-4 h-[1.5px] bg-[#be7b4c]" />
      <span className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-[#be7b4c]">
        ACERVO & PÁTIO DE MADEIRAS
      </span>
    </div>
    <h3 className="font-slab text-2xl sm:text-3xl md:text-4xl text-[#f3e2ba] uppercase tracking-tight leading-tight">
      Estoque Monumental de Pranchas Maciças
    </h3>
    <p className="text-xs sm:text-sm text-[#f3e2ba]/90 font-light leading-relaxed max-w-xl">
      Toras nobres centenárias de manejo 100% legal e certificado pelo IBAMA. Pranchas maciças de Pequiá, Cumaru e Ipê com secagem controlada e veios orgânicos preservados, prontas para se tornarem o centro das atenções no seu ambiente.
    </p>
    <div className="pt-2">
      <a
        href={`${WHATSAPP_BASE_URL}?text=Ol%C3%A1!%20Vi%20as%20pranchas%20maci%C3%A7as%20no%20site%20da%20Amadeireira%20e%20gostaria%20de%20consultar%20disponibilidade.`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#be7b4c] hover:bg-[#a6653b] text-[#141414] font-bold text-xs uppercase tracking-wider transition-all shadow-md active:scale-95"
        onClick={(e) => e.stopPropagation()}
      >
        <span>Consultar Pranchas Disponíveis</span>
        <ArrowUpRight className="w-3.5 h-3.5" />
      </a>
    </div>
  </div>
);

const CardContentTwo = () => (
  <div className="space-y-3">
    <div className="flex items-center gap-2">
      <span className="w-4 h-[1.5px] bg-[#be7b4c]" />
      <span className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-[#be7b4c]">
        PROCESSO ARTESANAL
      </span>
    </div>
    <h3 className="font-slab text-2xl sm:text-3xl md:text-4xl text-[#f3e2ba] uppercase tracking-tight leading-tight">
      Corte & Encaixes de Alta Precisão
    </h3>
    <p className="text-xs sm:text-sm text-[#f3e2ba]/90 font-light leading-relaxed max-w-xl">
      Mão de obra especializada na arte da madeira pesada. Cada corte em 45º para mesas cascata, plainamento e ajuste estrutural é feito manualmente para garantir estabilidade absoluta e encaixes perfeitos.
    </p>
    <div className="pt-2">
      <a
        href={`${WHATSAPP_BASE_URL}?text=Ol%C3%A1!%20Gostaria%20de%20fazer%20um%20projeto%20sob%20medida%20com%20corte%20especial.`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#be7b4c] hover:bg-[#a6653b] text-[#141414] font-bold text-xs uppercase tracking-wider transition-all shadow-md active:scale-95"
        onClick={(e) => e.stopPropagation()}
      >
        <span>Solicitar Projeto Especial</span>
        <ArrowUpRight className="w-3.5 h-3.5" />
      </a>
    </div>
  </div>
);

const CardContentThree = () => (
  <div className="space-y-3">
    <div className="flex items-center gap-2">
      <span className="w-4 h-[1.5px] bg-[#be7b4c]" />
      <span className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-[#be7b4c]">
        RESINA & PROTEÇÃO
      </span>
    </div>
    <h3 className="font-slab text-2xl sm:text-3xl md:text-4xl text-[#f3e2ba] uppercase tracking-tight leading-tight">
      Acabamento Nobre & Toque Aveludado
    </h3>
    <p className="text-xs sm:text-sm text-[#f3e2ba]/90 font-light leading-relaxed max-w-xl">
      Aplicação minuciosa de resinas cristalinas de alta densidade e seladoras nobres. O resultado é uma superfície impermeabilizada, altamente resistente ao calor e manchas de vinho ou café, preservando o toque e a alma da madeira.
    </p>
    <div className="pt-2">
      <a
        href={`${WHATSAPP_BASE_URL}?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20as%20mesas%20com%20resina%20ep%C3%B3xi.`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#be7b4c] hover:bg-[#a6653b] text-[#141414] font-bold text-xs uppercase tracking-wider transition-all shadow-md active:scale-95"
        onClick={(e) => e.stopPropagation()}
      >
        <span>Conhecer Modelos Resinados</span>
        <ArrowUpRight className="w-3.5 h-3.5" />
      </a>
    </div>
  </div>
);

const CardContentFour = () => (
  <div className="space-y-3">
    <div className="flex items-center gap-2">
      <span className="w-4 h-[1.5px] bg-[#be7b4c]" />
      <span className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-[#be7b4c]">
        EXCLUSIVIDADE ABSOLUTA
      </span>
    </div>
    <h3 className="font-slab text-2xl sm:text-3xl md:text-4xl text-[#f3e2ba] uppercase tracking-tight leading-tight">
      Peças Monumentais Sob Medida
    </h3>
    <p className="text-xs sm:text-sm text-[#f3e2ba]/90 font-light leading-relaxed max-w-xl">
      Nenhuma peça sai da nossa produção igual a outra. Cada mesa é uma escultura viva personalizada para a planta e o estilo do seu ambiente residencial ou corporativo.
    </p>
    <div className="pt-2">
      <a
        href={`${WHATSAPP_BASE_URL}?text=Ol%C3%A1!%20Gostaria%20de%20um%20or%C3%A7amento%20personalizado%20para%20meu%20espa%C3%A7o.`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#be7b4c] hover:bg-[#a6653b] text-[#141414] font-bold text-xs uppercase tracking-wider transition-all shadow-md active:scale-95"
        onClick={(e) => e.stopPropagation()}
      >
        <span>Orçar Peça Exclusiva</span>
        <ArrowUpRight className="w-3.5 h-3.5" />
      </a>
    </div>
  </div>
);

const CARDS: LayoutGridCard[] = [
  {
    id: 1,
    title: 'Estoque Monumental de Pranchas',
    subtitle: 'Acervo & Pátio',
    className: 'md:col-span-2',
    thumbnail: '/images/ctaprodutos.webp',
    content: <CardContentOne />,
  },
  {
    id: 2,
    title: 'Corte & Encaixes de Alta Precisão',
    subtitle: 'Mestria Manual',
    className: 'col-span-1',
    thumbnail: '/images/mesaprancha2.webp',
    content: <CardContentTwo />,
  },
  {
    id: 3,
    title: 'Acabamento Nobre & Resina',
    subtitle: 'Proteção & Toque Aveludado',
    className: 'col-span-1',
    thumbnail: '/images/mesaresinaepoxi2.webp',
    content: <CardContentThree />,
  },
  {
    id: 4,
    title: 'Peças Monumentais Sob Medida',
    subtitle: 'Exclusividade Autoral',
    className: 'md:col-span-2',
    thumbnail: '/images/mesacascata1.webp',
    content: <CardContentFour />,
  },
];

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
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 sm:mb-14 gap-6">
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
              lixamento e acabamento minucioso, clique em cada etapa para conhecer nossos bastidores.
            </p>
          </div>

          {/* Destaque à direita */}
          <div className="hidden lg:flex items-center gap-4 border-l border-[#be7b4c]/30 pl-6 text-left">
            <div>
              <p className="font-slab text-2xl text-[#be7b4c] font-bold uppercase tracking-wide">100%</p>
              <p className="text-[11px] font-mono uppercase tracking-wider text-[#f3e2ba]/70">
                Produção Própria & Manejo Legal
              </p>
            </div>
          </div>
        </div>

        {/* LayoutGrid Interativo com Expansão e Suporte Mobile */}
        <LayoutGrid cards={CARDS} />
      </div>
    </section>
  );
};
