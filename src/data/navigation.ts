export interface NavItem {
  label: string;
  href: string;
  isExternal?: boolean;
}

export const MAIN_NAV_ITEMS: NavItem[] = [
  {
    label: 'Coleções',
    href: '#colecoes'
  },
  {
    label: 'Projetos',
    href: '#projetos'
  },
  {
    label: 'Depoimentos',
    href: '#depoimentos'
  },
  {
    label: 'Institucional',
    href: 'https://amadeireira.com.br',
    isExternal: true
  },
  {
    label: 'Catálogo',
    href: 'https://amadereiravendas.vercel.app/#produtos',
    isExternal: true
  }
];

export const CATALOG_NAV_LINK = {
  label: 'Ver Catálogo',
  href: 'https://amadereiravendas.vercel.app/#produtos',
  isExternal: true
};

export const WHATSAPP_NAV_LINK = {
  label: 'WhatsApp',
  href: 'https://wa.me/5519984153232?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Amadeireira%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es.',
  isExternal: true
};
