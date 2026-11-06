import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

export type LayoutGridCard = {
  id: number;
  content: React.ReactNode;
  className: string;
  thumbnail: string;
  title?: string;
  subtitle?: string;
};

export const LayoutGrid = ({ cards }: { cards: LayoutGridCard[] }) => {
  const [selected, setSelected] = useState<LayoutGridCard | null>(null);
  const [lastSelected, setLastSelected] = useState<LayoutGridCard | null>(null);

  const handleClick = (card: LayoutGridCard) => {
    setLastSelected(selected);
    setSelected(card);
  };

  const handleOutsideClick = () => {
    setLastSelected(selected);
    setSelected(null);
  };

  return (
    <div className="w-full py-6 grid grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto gap-4 sm:gap-6 relative">
      {cards.map((card, i) => (
        <div key={i} className={cn(card.className, "min-h-[280px] xs:min-h-[320px] sm:min-h-[360px] md:min-h-[380px]")}>
          <motion.div
            onClick={() => handleClick(card)}
            className={cn(
              card.className,
              "relative overflow-hidden cursor-pointer group rounded-none border border-[#be7b4c]/30 shadow-xl",
              selected?.id === card.id
                ? "rounded-none cursor-pointer fixed inset-4 sm:inset-10 md:inset-auto md:absolute md:inset-0 md:h-4/5 md:w-3/4 m-auto z-50 flex justify-center items-center flex-wrap flex-col shadow-[0_30px_90px_rgba(0,0,0,0.95)] border-2 border-[#be7b4c]"
                : lastSelected?.id === card.id
                ? "z-40 bg-[#16120e] h-full w-full"
                : "bg-[#16120e] h-full w-full"
            )}
            layoutId={`card-${card.id}`}
          >
            {selected?.id === card.id ? (
              <SelectedCard selected={selected} />
            ) : (
              <DefaultCardPreview card={card} />
            )}
            <ImageComponent card={card} />
          </motion.div>
        </div>
      ))}

      {/* Dimmed backdrop when a card is opened */}
      <motion.div
        onClick={handleOutsideClick}
        className={cn(
          "fixed inset-0 md:absolute md:h-full md:w-full left-0 top-0 bg-black/85 backdrop-blur-sm z-30",
          selected?.id ? "pointer-events-auto" : "pointer-events-none"
        )}
        animate={{ opacity: selected?.id ? 1 : 0 }}
        transition={{ duration: 0.25 }}
      />
    </div>
  );
};

const ImageComponent = ({ card }: { card: LayoutGridCard }) => {
  return (
    <motion.img
      layoutId={`image-${card.id}-image`}
      src={card.thumbnail}
      className={cn(
        "object-cover object-center absolute inset-0 h-full w-full transition-transform duration-500 ease-out group-hover:scale-105"
      )}
      alt="Amadeireira Produção"
      loading="lazy"
    />
  );
};

const DefaultCardPreview = ({ card }: { card: LayoutGridCard }) => {
  return (
    <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-5 sm:p-6 text-left">
      {card.subtitle && (
        <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.2em] text-[#be7b4c] font-bold mb-1 drop-shadow">
          {card.subtitle}
        </span>
      )}
      {card.title && (
        <h3 className="font-slab text-lg sm:text-2xl text-[#f3e2ba] uppercase tracking-tight drop-shadow leading-snug">
          {card.title}
        </h3>
      )}
      <span className="text-[10px] font-mono uppercase tracking-widest text-[#f3e2ba]/70 mt-2 flex items-center gap-1 group-hover:text-[#be7b4c] transition-colors">
        <span>Clique para explorar</span>
        <span>→</span>
      </span>
    </div>
  );
};

const SelectedCard = ({ selected }: { selected: LayoutGridCard | null }) => {
  return (
    <div className="bg-transparent h-full w-full flex flex-col justify-end rounded-none relative z-[60] p-6 sm:p-8 text-left">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.85 }}
        className="absolute inset-0 h-full w-full bg-gradient-to-t from-black via-black/80 to-black/40 z-10"
      />
      <motion.div
        layoutId={`content-${selected?.id}`}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="relative z-[70] max-w-2xl"
      >
        {selected?.content}
      </motion.div>
    </div>
  );
};
