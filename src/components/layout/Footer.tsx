import React from 'react';
import { ArrowUpRight, MapPin, Clock, Phone } from 'lucide-react';
import { InstagramIcon } from '../ui/Icons';
import { WHATSAPP_BASE_URL, CATALOG_BASE_URL } from '../../data/products';

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#0f0f0f] border-t border-[#be7b4c]/20 pt-16 pb-12 text-[#f3e2ba] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <img
          src="/images/backgroundfooter.webp"
          alt="Amadeireira Footer Background"
          className="w-full h-full object-cover object-center"
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className="container-editorial relative z-10">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-14 border-b border-[#be7b4c]/15 text-left">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-5">
            <a href="#" className="inline-block">
              <img
                src="/images/logo.webp"
                alt="Amadeireira - Móveis em Madeira Maciça"
                className="h-10 w-auto"
              />
            </a>
            <p className="text-sm text-[#dcd0ba] max-w-sm leading-relaxed font-sans">
              Móveis autorais em madeira maciça, peças de grande porte e projetos sob medida com acabamento nobre para residências e espaços contemporâneos.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.instagram.com/amadeireira_/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#1a1a1a]/80 backdrop-blur-sm border border-white/25 flex items-center justify-center text-white hover:bg-white hover:text-[#141414] transition-all"
                aria-label="Instagram da Amadeireira"
              >
                <InstagramIcon className="w-4 h-4 text-white" />
              </a>
              <a
                href={`${WHATSAPP_BASE_URL}?text=Ol%C3%A1!%20Gostaria%20de%20falar%20com%20um%20consultor%20da%20Amadeireira.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#1a1a1a]/80 backdrop-blur-sm border border-white/25 flex items-center justify-center hover:bg-white/20 transition-all"
                aria-label="WhatsApp da Amadeireira"
              >
                <img src="/images/wpp.png" alt="WhatsApp" className="w-4 h-4 object-contain brightness-0 invert" />
              </a>
            </div>
          </div>

          {/* Coleções */}
          <div className="space-y-4">
            <h4 className="font-bebas text-base uppercase tracking-[0.2em] text-[#be7b4c]">
              Coleções
            </h4>
            <ul className="space-y-2.5 text-sm text-[#dcd0ba]">
              <li>
                <a href="#colecoes" className="hover:text-[#f3e2ba] transition-colors">
                  Mesa Cascata
                </a>
              </li>
              <li>
                <a href="#colecoes" className="hover:text-[#f3e2ba] transition-colors">
                  Mesa Prancha
                </a>
              </li>
              <li>
                <a href="#colecoes" className="hover:text-[#f3e2ba] transition-colors">
                  Mesa Raiz
                </a>
              </li>
              <li>
                <a href="#colecoes" className="hover:text-[#f3e2ba] transition-colors">
                  Mesa Resina Epóxi
                </a>
              </li>
              <li>
                <a
                  href={`${CATALOG_BASE_URL}#produtos`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#f3e2ba] inline-flex items-center gap-1 font-bold text-[#be7b4c] transition-colors"
                >
                  <span>Catálogo Completo</span>
                  <ArrowUpRight className="w-3 h-3 text-[#be7b4c]" />
                </a>
              </li>
            </ul>
          </div>

          {/* Navegação Rápida */}
          <div className="space-y-4">
            <h4 className="font-bebas text-base uppercase tracking-[0.2em] text-[#be7b4c]">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-sm text-[#dcd0ba]">
              <li>
                <a href="#" className="hover:text-[#f3e2ba] transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#colecoes" className="hover:text-[#f3e2ba] transition-colors">
                  Nossas Linhas
                </a>
              </li>
              <li>
                <a href="#projetos" className="hover:text-[#f3e2ba] transition-colors">
                  Projetos & Clientes
                </a>
              </li>
              <li>
                <a href="#depoimentos" className="hover:text-[#f3e2ba] transition-colors">
                  Depoimentos
                </a>
              </li>
              <li>
                <a href="#localizacao" className="hover:text-[#f3e2ba] transition-colors">
                  Showroom & Mapa
                </a>
              </li>
              <li>
                <a
                  href="https://amadeireira.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#f3e2ba] transition-colors"
                >
                  Institucional
                </a>
              </li>
              <li>
                <a
                  href={`${WHATSAPP_BASE_URL}?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20sob%20medida.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#f3e2ba] inline-flex items-center gap-1 transition-colors"
                >
                  <span>Orçar no WhatsApp</span>
                  <ArrowUpRight className="w-3 h-3 text-[#be7b4c]" />
                </a>
              </li>
            </ul>
          </div>

          {/* Atendimento & Localização */}
          <div className="space-y-4">
            <h4 className="font-bebas text-base uppercase tracking-[0.2em] text-[#be7b4c]">
              Atendimento
            </h4>
            <div className="space-y-2.5 text-xs text-[#dcd0ba] leading-relaxed">
              <p className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#be7b4c] shrink-0 mt-0.5" />
                <span>Rod. José Bonifácio Coutinho Nogueira, KM 12,5 - Joaquim Egídio, Campinas - SP</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#be7b4c] shrink-0" />
                <a href="tel:19984153232" className="hover:text-[#be7b4c] transition-colors font-bold">
                  (19) 98415-3232
                </a>
              </p>
              <div className="flex items-start gap-2">
                <Clock className="w-3.5 h-3.5 text-[#be7b4c] shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <p>Segunda a Sexta · 08h30 às 17h30</p>
                  <p>Sábado · 08h30 às 15h00</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8e8474]">
          <p>© {new Date().getFullYear()} Amadeireira. Todos os direitos reservados.</p>
          <p className="flex items-center gap-4">
            <span>Móveis Autorais de Madeira Maciça</span>
            <span>·</span>
            <span>Entrega Segura para Todo o Brasil</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
