import React from 'react';
import { ArrowRight, Layers, Truck, Ruler } from 'lucide-react';
import { CATALOG_BASE_URL } from '../../data/products';

export const ProductsCatalogCtaSection: React.FC = () => {
  return (
    <section className="relative w-full text-[#f5ede3] overflow-hidden border-y border-[#26211d]">
      {/* Background Image Pure without dark effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="/images/ctaprodutos.png"
          alt="Textura Amadeireira"
          className="w-full h-full object-cover object-center"
          loading="lazy"
        />
      </div>

      <div className="max-w-[1420px] w-[calc(100%-24px)] sm:w-[calc(100%-48px)] mx-auto relative z-10 py-5 sm:py-6 lg:py-7">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-4 items-center">
          
          {/* Item 1: Acervo Completo */}
          <a
            href={`${CATALOG_BASE_URL}#produtos`}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center text-center p-3 rounded-lg hover:bg-white/[0.03] transition-all"
          >
            <div className="w-9 h-9 rounded-full flex items-center justify-center text-[#d49a6a] group-hover:scale-110 transition-transform mb-2">
              <Layers className="w-6 h-6 stroke-[1.5]" />
            </div>
            <h4 className="text-xs sm:text-sm font-bold tracking-wide text-[#f5ede3] group-hover:text-[#d49a6a] transition-colors">
              Veja os Demais Produtos
            </h4>
            <p className="text-[11px] sm:text-[11.5px] text-[#b8ab99] font-light leading-relaxed mt-1 max-w-[230px]">
              Centenas de peças exclusivas em cascata, pranchas, raízes e resina no catálogo.
            </p>
          </a>

          {/* Item 2: Pronta Entrega */}
          <div className="flex flex-col items-center text-center p-3">
            <div className="w-9 h-9 rounded-full flex items-center justify-center text-[#d49a6a] mb-2">
              <Truck className="w-6 h-6 stroke-[1.5]" />
            </div>
            <h4 className="text-xs sm:text-sm font-bold tracking-wide text-[#f5ede3]">
              Pronta Entrega
            </h4>
            <p className="text-[11px] sm:text-[11.5px] text-[#b8ab99] font-light leading-relaxed mt-1 max-w-[230px]">
              Peças catalogadas prontas para entrega imediata com envio seguro para todo Brasil.
            </p>
          </div>

          {/* Item 3: Sob Medida */}
          <div className="flex flex-col items-center text-center p-3">
            <div className="w-9 h-9 rounded-full flex items-center justify-center text-[#d49a6a] mb-2">
              <Ruler className="w-6 h-6 stroke-[1.5]" />
            </div>
            <h4 className="text-xs sm:text-sm font-bold tracking-wide text-[#f5ede3]">
              Projetos Sob Medida
            </h4>
            <p className="text-[11px] sm:text-[11.5px] text-[#b8ab99] font-light leading-relaxed mt-1 max-w-[230px]">
              Personalização milimétrica de medidas, bordas naturais e acabamento nobre.
            </p>
          </div>

          {/* Item 4: CTA Botão para o Catálogo */}
          <div className="flex flex-col items-center text-center p-3 sm:col-span-2 lg:col-span-1 justify-center">
            <a
              href={`${CATALOG_BASE_URL}#produtos`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full max-w-[240px] inline-flex items-center justify-center gap-2 px-5 py-2.5 sm:py-3 bg-gradient-to-r from-[#be7b4c] to-[#a4643a] hover:from-[#d49a6a] hover:to-[#be7b4c] text-[#0e0805] font-extrabold text-xs uppercase tracking-wider rounded transition-all duration-300 shadow-md shadow-black/40 hover:scale-[1.03] active:scale-95 group"
            >
              <span>Ir para o Catálogo</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </a>
            <span className="text-[10px] text-[#8c7f6e] mt-1.5 block text-center">
              Acesso imediato às peças
            </span>
          </div>

        </div>
      </div>
    </section>
  );
};
