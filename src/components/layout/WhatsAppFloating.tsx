import React from 'react';
import { motion } from 'framer-motion';
import { buildWhatsAppUrl } from '../../data/products';
import { trackWhatsAppLead } from '../../lib/tracking';

export const WhatsAppFloating: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center justify-center pointer-events-auto">
      <motion.a
        href={buildWhatsAppUrl('Olá! Vim pelo site da Amadeireira e gostaria de mais informações.')}
        onClick={() => trackWhatsAppLead({ category: 'Geral', position: 'Botão Flutuante', label: 'WhatsApp Flutuante' })}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Conversar no WhatsApp com a Amadeireira"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        className="w-14 h-14 rounded-full bg-[#25d366] hover:bg-[#1eb855] text-white flex items-center justify-center shadow-2xl shadow-black/90 border border-white/20 transition-colors relative group cursor-pointer"
      >
        <img src="/images/wpp.png" alt="WhatsApp" className="w-7 h-7 object-contain drop-shadow" />
      </motion.a>
    </div>
  );
};
