import React from 'react';
import { MapPin, Clock, Phone, Navigation } from 'lucide-react';
import { WHATSAPP_BASE_URL } from '../../data/products';

export const ShowroomLocationSection: React.FC = () => {
  const address = 'Rod. José Bonifácio Coutinho Nogueira, KM 12,5 - Joaquim Egídio Campinas - SP, 13106-001';
  const mapsDirectionsUrl = 'https://www.google.com/maps/dir/?api=1&destination=AMADEIREIRA+-+M%C3%B3veis+em+Madeira+Maci%C3%A7a,+Rod.+Jos%C3%A9+Bonif%C3%A1cio+Coutinho+Nogueira,+KM+12.5+-+Joaquim+Eg%C3%ADdio,+Campinas+-+SP';

  return (
    <section id="localizacao" className="relative w-full bg-[#f4ebd9] text-[#1a1614] py-16 sm:py-20 lg:py-24 border-t border-[#d8c7b0] overflow-hidden">
      <div className="max-w-[1420px] w-[calc(100%-32px)] sm:w-[calc(100%-48px)] lg:w-[calc(100%-64px)] mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Lado Esquerdo: Conteúdo Editorial & Informações */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
            
            {/* Cabeçalho */}
            <div className="space-y-2 text-center lg:text-left flex flex-col items-center lg:items-start">
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <span className="w-4 h-[1.5px] bg-[#a06232] shrink-0" />
                <span className="text-[9.5px] sm:text-[11px] font-mono font-bold uppercase tracking-[0.14em] sm:tracking-[0.2em] text-[#a06232]">
                  NOSSO ESPAÇO, SUA PRÓXIMA INSPIRAÇÃO
                </span>
                <span className="w-4 h-[1.5px] bg-[#a06232] shrink-0 lg:hidden" />
              </div>
              
              <h2 className="font-slab text-3xl sm:text-4xl lg:text-[40px] uppercase tracking-tight leading-[1.05]">
                <span className="text-[#15100d] block">VENHA CONHECER</span>
                <span className="text-[#be7b4c] block mt-0.5">NOSSO SHOWROOM</span>
              </h2>

              <p className="text-xs sm:text-sm text-[#5c4f42] font-normal leading-relaxed max-w-xl font-sans pt-1 mx-auto lg:mx-0">
                Sinta a textura natural, os aromas e a grandiosidade da madeira maciça em nosso espaço de exposição em Joaquim Egídio, Campinas.
              </p>
            </div>

            {/* Linha Horizontal com 3 Informações */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
              
              {/* Endereço */}
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-full bg-[#eadbc8] border border-[#be7b4c]/30 flex items-center justify-center text-[#a06232] shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="space-y-0.5 text-left">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#1a1614] block">
                    ENDEREÇO
                  </span>
                  <p className="text-[11px] sm:text-[11.5px] text-[#5c4f42] leading-snug">
                    {address}
                  </p>
                </div>
              </div>

              {/* Horário */}
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-full bg-[#eadbc8] border border-[#be7b4c]/30 flex items-center justify-center text-[#a06232] shrink-0 mt-0.5">
                  <Clock className="w-4 h-4" />
                </div>
                <div className="space-y-0.5 text-left">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#1a1614] block">
                    HORÁRIO DE FUNCIONAMENTO
                  </span>
                  <p className="text-[11px] sm:text-[11.5px] text-[#5c4f42] leading-snug">
                    Segunda a Sexta<br />
                    08h30 às 17h30<br />
                    Sábado 08h30 às 15h00
                  </p>
                </div>
              </div>

              {/* Telefone & WhatsApp */}
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-full bg-[#eadbc8] border border-[#be7b4c]/30 flex items-center justify-center text-[#a06232] shrink-0 mt-0.5">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="space-y-0.5 text-left">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#1a1614] block">
                    TELEFONE & WHATSAPP
                  </span>
                  <a href="tel:19984153232" className="text-[11.5px] font-bold text-[#1a1614] hover:text-[#be7b4c] transition-colors block">
                    (19) 98415-3232
                  </a>
                  <p className="text-[10.5px] text-[#5c4f42] leading-snug">
                    Fale conosco para tirar dúvidas ou agendar sua visita.
                  </p>
                </div>
              </div>

            </div>

            {/* Botões Pill */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <a
                href={`${WHATSAPP_BASE_URL}?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20visita%20ao%20Showroom%20da%20Amadeireira%20em%20Campinas.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-[#be7b4c] hover:bg-[#a6653b] text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-md active:scale-95 text-center"
              >
                <img src="/images/wpp.png" alt="WhatsApp" className="w-4 h-4 object-contain brightness-0 invert" />
                <span>AGENDAR VISITA NO WHATSAPP →</span>
              </a>

              <a
                href={mapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full border border-[#a06232]/40 bg-[#eadbc8]/60 hover:bg-[#eadbc8] text-[#5f3312] font-bold text-xs uppercase tracking-wider transition-all duration-300 active:scale-95 text-center"
              >
                <Navigation className="w-3.5 h-3.5 text-[#a06232]" />
                <span>COMO CHEGAR (ROTAS)</span>
              </a>
            </div>

          </div>

          {/* Lado Direito: Frame do Google Maps */}
          <div className="lg:col-span-5 relative aspect-[4/3] sm:aspect-[16/11] lg:aspect-auto lg:h-[380px] bg-white border border-[#d8c7b0] rounded-2xl overflow-hidden shadow-md">
            <iframe
              title="Google Maps - AMADEIREIRA Móveis em Madeira Maciça"
              src="https://maps.google.com/maps?q=AMADEIREIRA%20M%C3%B3veis%20em%20Madeira%20Maci%C3%A7a%20Rod%20Jos%C3%A9%20Bonif%C3%A1cio%20Coutinho%20Nogueira%20Joaquim%20Eg%C3%ADdio%20Campinas%20SP&t=&z=14&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full object-cover"
            />
          </div>

        </div>

      </div>
    </section>
  );
};
