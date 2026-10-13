import React, { useState } from 'react';
import { MessageCircle, MapPin, Clock, Send } from 'lucide-react';
import { InstagramIcon } from '../components/ui/Icons';
import { WHATSAPP_BASE_URL, buildWhatsAppUrl } from '../data/products';

export const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [category, setCategory] = useState('Mesa Cascata');
  const [dimensions, setDimensions] = useState('');
  const [comments, setComments] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Olá! Meu nome é ${name || 'Cliente'} (${city || 'Brasil'}).\nEstou interessado em uma ${category}.\nMedidas desejadas: ${dimensions || 'A definir'}.\nObservações: ${comments || 'Gostaria de opções e valores disponíveis.'}`;
    window.open(buildWhatsAppUrl(msg), '_blank');
  };

  return (
    <main className="w-full overflow-hidden bg-[#141414] pt-24 sm:pt-28">
      {/* Header */}
      <section className="section-editorial-sm bg-[#141414] border-b border-[#be7b4c]/20">
        <div className="container-editorial space-y-4 max-w-4xl">
          <span className="overline-tag">Fale Conosco</span>
          <h1 className="title-display text-[#f3e2ba]">
            CONTATO & <br />
            <span className="text-[#be7b4c]">atendimento exclusivo.</span>
          </h1>
          <p className="body-lead max-w-2xl text-[#f3e2ba]/90 font-light font-sans">
            Nossa equipe de consultores especializados está pronta para orientar a escolha da peça perfeita para o seu espaço ou orçar um projeto sob medida.
          </p>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="section-editorial bg-[#1a1a1a]">
        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Contact Info (5 cols) */}
            <div className="lg:col-span-5 space-y-8 bg-[#1c1c1c] border border-[#be7b4c]/25 rounded-2xl p-8 shadow-2xl">
              <div className="space-y-3">
                <span className="overline-tag">Canais Diretos</span>
                <h3 className="font-bebas text-3xl uppercase tracking-wide text-[#f3e2ba]">
                  Atendimento Personalizado
                </h3>
                <p className="text-xs text-[#dcd0ba] leading-relaxed font-sans font-light">
                  Respondemos orçamentos e dúvidas sobre estoque diretamente via WhatsApp em poucos minutos.
                </p>
              </div>

              <div className="space-y-6 pt-4 border-t border-[#be7b4c]/20 text-xs text-[#dcd0ba] font-sans">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#25d366]/10 border border-[#25d366]/30 flex items-center justify-center text-[#25d366] shrink-0">
                    <MessageCircle className="w-5 h-5 fill-current" />
                  </div>
                  <div className="space-y-1">
                    <strong className="text-sm text-[#f3e2ba] block">WhatsApp Oficial</strong>
                    <span>(19) 98415-3232</span>
                    <a
                      href={`${WHATSAPP_BASE_URL}?text=Ol%C3%A1!%20Gostaria%20de%20um%20atendimento%20da%20Amadeireira.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-[#be7b4c] hover:underline font-bold mt-1"
                    >
                      Iniciar conversa imediata →
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#141414] border border-[#be7b4c]/30 flex items-center justify-center text-[#be7b4c] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <strong className="text-sm text-[#f3e2ba] block">Showroom & Ateliê</strong>
                    <span>Campinas e Região Metropolitana, SP</span>
                    <span className="block text-[#8e8474]">Visitas presenciais com agendamento</span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#141414] border border-[#be7b4c]/30 flex items-center justify-center text-[#be7b4c] shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <strong className="text-sm text-[#f3e2ba] block">Horário de Funcionamento</strong>
                    <span>Segunda a Sexta · 08:00 às 18:00</span>
                    <span>Sábados · Com agendamento prévio</span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#141414] border border-[#be7b4c]/30 flex items-center justify-center text-[#be7b4c] shrink-0">
                    <InstagramIcon className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <strong className="text-sm text-[#f3e2ba] block">Instagram</strong>
                    <a
                      href="https://www.instagram.com/amadeireira_/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#be7b4c] hover:underline font-bold"
                    >
                      @amadeireira_
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Interactive Briefing Form (7 cols) */}
            <div className="lg:col-span-7 bg-[#1c1c1c] border border-[#be7b4c]/25 rounded-2xl p-8 sm:p-10 shadow-2xl space-y-6">
              <div className="space-y-2">
                <span className="overline-tag">Briefing Rápido</span>
                <h3 className="font-bebas text-2xl sm:text-3xl uppercase tracking-wide text-[#f3e2ba]">
                  Simule seu Orçamento Sob Medida
                </h3>
                <p className="text-xs text-[#dcd0ba] font-sans font-light">
                  Preencha as informações do seu espaço e receba orientações e fotos de toras disponíveis direto no WhatsApp.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 pt-2 font-sans">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs uppercase font-bebas tracking-wider text-[#dcd0ba]">
                      Seu Nome *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Ex: Camila Silveira"
                      className="w-full bg-[#141414] border border-[#be7b4c]/30 rounded-lg p-3 text-sm text-[#f3e2ba] focus:border-[#be7b4c] focus:outline-none"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs uppercase font-bebas tracking-wider text-[#dcd0ba]">
                      Cidade / Estado *
                    </label>
                    <input
                      type="text"
                      required
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder="Ex: Campinas / SP"
                      className="w-full bg-[#141414] border border-[#be7b4c]/30 rounded-lg p-3 text-sm text-[#f3e2ba] focus:border-[#be7b4c] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs uppercase font-bebas tracking-wider text-[#dcd0ba]">
                      Tipo de Peça Desejada
                    </label>
                    <select
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="w-full bg-[#141414] border border-[#be7b4c]/30 rounded-lg p-3 text-sm text-[#f3e2ba] focus:border-[#be7b4c] focus:outline-none"
                    >
                      <option value="Mesa Cascata">Mesa Cascata (Corte 45°)</option>
                      <option value="Mesa Prancha">Mesa Prancha (Bordas Vivas)</option>
                      <option value="Mesa Raiz">Mesa Raiz (Base Escultural)</option>
                      <option value="Aparador Maciço">Aparador Maciço</option>
                      <option value="Mesa com Resina Epóxi">Mesa com Resina Epóxi</option>
                      <option value="Outro Projeto Especial">Outro Projeto Especial</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs uppercase font-bebas tracking-wider text-[#dcd0ba]">
                      Dimensões Estimadas
                    </label>
                    <input
                      type="text"
                      value={dimensions}
                      onChange={(e) => setDimensions(e.target.value)}
                      placeholder="Ex: 3,00m x 1,10m"
                      className="w-full bg-[#141414] border border-[#be7b4c]/30 rounded-lg p-3 text-sm text-[#f3e2ba] focus:border-[#be7b4c] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs uppercase font-bebas tracking-wider text-[#dcd0ba]">
                    Detalhes ou Preferência de Madeira (Opcional)
                  </label>
                  <textarea
                    rows={3}
                    value={comments}
                    onChange={(e) => setComments(e.target.value)}
                    placeholder="Conte sobre o ambiente (sala de jantar, varanda gourmet, número de lugares)..."
                    className="w-full bg-[#141414] border border-[#be7b4c]/30 rounded-lg p-3 text-sm text-[#f3e2ba] focus:border-[#be7b4c] focus:outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-3 p-4 bg-[#be7b4c] hover:bg-[#a76538] text-[#141414] font-bebas text-base uppercase tracking-wider rounded-lg transition-all shadow-xl shadow-[#be7b4c]/20 active:scale-95 font-bold"
                >
                  <Send className="w-4 h-4" />
                  <span>Enviar Briefing via WhatsApp</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
