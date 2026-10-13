import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MAIN_NAV_ITEMS, WHATSAPP_NAV_LINK } from '../../data/navigation';

const cn = (...classes: (string | false | undefined)[]) => classes.filter(Boolean).join(' ');

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false);
    };

    if (isOpen) window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={cn(
        'fixed z-50 transition-all duration-300 ease-out',
        // Desktop always full width at top:
        'md:fixed md:inset-x-0 md:top-0 md:h-[72px] md:max-w-none md:rounded-none md:border-0 md:px-8 lg:px-12',
        isScrolled || isOpen
          ? 'md:bg-[#141414]/95 md:backdrop-blur-md md:border-b md:border-[#be7b4c]/20'
          : 'md:bg-transparent',
        // Mobile styles:
        isOpen
          ? 'top-0 inset-x-0 h-[68px] bg-[#141414] border-b border-[#be7b4c]/20 rounded-none px-5'
          : isScrolled
          ? 'top-3 inset-x-3.5 sm:inset-x-6 max-w-lg mx-auto h-[54px] sm:h-[58px] rounded-2xl bg-[#161210]/95 backdrop-blur-md border border-[#be7b4c]/30 shadow-[0_10px_35px_rgba(0,0,0,0.85)] px-4 sm:px-5'
          : 'top-0 inset-x-0 h-[68px] sm:h-[72px] bg-transparent rounded-none px-5 sm:px-8 border-transparent'
      )}
    >
      <nav
        className="mx-auto flex h-full w-full max-w-[1440px] items-center justify-between"
        aria-label="Navegação principal"
      >
        {/* Logo */}
        <Link
          to="/"
          aria-label="Amadeireira — início"
          onClick={closeMenu}
          className="relative z-[60] flex shrink-0 items-center gap-2.5"
        >
          <img src="/images/logo-minimal.png" alt="Amadeireira" className="h-6 w-auto sm:h-7 md:h-8" />
          <span className="flex flex-col leading-none">
            <span className="font-slab text-xs sm:text-sm uppercase tracking-[0.14em] text-[#f3e2ba] md:text-base">
              Amadeireira
            </span>
            <span className="mt-0.5 font-bebas text-[8.5px] sm:text-[9px] tracking-[0.22em] text-[#be7b4c] uppercase md:text-[10px]">
              Móveis Sob Medida
            </span>
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center md:flex md:gap-4 lg:gap-6 xl:gap-8">
          {MAIN_NAV_ITEMS.map((link) => (
            link.isExternal ? (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bebas text-[13px] lg:text-[14px] xl:text-[15px] uppercase tracking-[0.12em] lg:tracking-[0.14em] xl:tracking-[0.16em] text-[#f3e2ba] transition-colors hover:text-[#be7b4c]"
              >
                {link.label}
              </a>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className="font-bebas text-[13px] lg:text-[14px] xl:text-[15px] uppercase tracking-[0.12em] lg:tracking-[0.14em] xl:tracking-[0.16em] text-[#f3e2ba] transition-colors hover:text-[#be7b4c]"
              >
                {link.label}
              </a>
            )
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href={WHATSAPP_NAV_LINK.href}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center gap-2 rounded-full bg-[#be7b4c] px-4 lg:px-5 xl:px-6 py-2.5 font-bebas text-sm xl:text-base uppercase tracking-[0.14em] text-[#141414] font-bold shadow-[0_4px_16px_rgba(190,123,76,0.35)] transition-all hover:bg-[#a76538] md:inline-flex"
        >
          <span>Solicitar Orçamento</span>
          <span className="text-base font-light">→</span>
        </a>

        {/* Mobile toggle (2 clean horizontal lines matching user reference) */}
        <button
          type="button"
          aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen((open) => !open)}
          className="relative z-[60] flex h-10 w-10 items-center justify-center text-[#f3e2ba] hover:text-[#be7b4c] transition-colors md:hidden"
        >
          <span className="sr-only">{isOpen ? 'Fechar menu' : 'Abrir menu'}</span>
          <div className="relative flex flex-col items-center justify-center w-5 h-4 gap-1.5">
            <span
              className={cn(
                'block h-[1.5px] w-5 bg-current transition-all duration-300 origin-center',
                isOpen ? 'rotate-45 translate-y-[3.75px]' : ''
              )}
            />
            <span
              className={cn(
                'block h-[1.5px] w-5 bg-current transition-all duration-300 origin-center',
                isOpen ? '-rotate-45 -translate-y-[3.75px]' : ''
              )}
            />
          </div>
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-navigation"
        aria-hidden={!isOpen}
        className={cn(
          'fixed inset-x-0 top-[68px] bottom-0 z-50 bg-[#141414] transition-all duration-300 md:hidden flex flex-col',
          isOpen ? 'opacity-100 pointer-events-auto visible' : 'opacity-0 pointer-events-none invisible'
        )}
      >
        <div className="flex-1 overflow-y-auto px-6 py-6 flex flex-col justify-between">
          <ul className="flex flex-col divide-y divide-[#be7b4c]/15">
            {MAIN_NAV_ITEMS.map((link) => (
              <li key={link.label}>
                {link.isExternal ? (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    tabIndex={isOpen ? 0 : -1}
                    onClick={closeMenu}
                    className="block py-4 font-bebas text-3xl font-light tracking-[0.08em] uppercase text-[#f3e2ba] hover:text-[#be7b4c] transition-colors"
                  >
                    {link.label}
                  </a>
                ) : (
                  <a
                    href={link.href}
                    tabIndex={isOpen ? 0 : -1}
                    onClick={closeMenu}
                    className="block py-4 font-bebas text-3xl font-light tracking-[0.08em] uppercase text-[#f3e2ba] hover:text-[#be7b4c] transition-colors"
                  >
                    {link.label}
                  </a>
                )}
              </li>
            ))}
          </ul>

          <div className="pt-6 pb-6">
            <a
              href={WHATSAPP_NAV_LINK.href}
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={isOpen ? 0 : -1}
              onClick={closeMenu}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#be7b4c] hover:bg-[#a6653b] py-3.5 font-bebas text-base font-bold uppercase tracking-[0.14em] text-[#141414] transition-colors shadow-lg active:scale-95"
            >
              <img src="/images/wpp.png" alt="WhatsApp" className="w-4 h-4 object-contain brightness-0" />
              <span>Solicitar Orçamento</span>
              <span className="text-base font-light">→</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
