export interface Product {
  id: string;
  name: string;
  category: 'mesas-cascata' | 'mesas-prancha' | 'mesas-raiz' | 'aparadores' | 'especiais';
  categoryLabel: string;
  wood: string;
  dimensions: string;
  price?: number;
  formattedPrice?: string;
  description: string;
  tag?: string;
  images: string[];
  featured?: boolean;
  catalogUrl: string;
  whatsappMessage: string;
}

export const CATALOG_BASE_URL = 'https://amadereiravendas.vercel.app/';
export const WHATSAPP_BASE_URL = 'https://wa.me/5519984153232';

export const buildWhatsAppUrl = (message: string) => {
  return `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(message)}`;
};

export const PRODUCTS: Product[] = [
  {
    id: 'cascata-pequia-320',
    name: 'Mesa Cascata Pequiá Nobre',
    category: 'mesas-cascata',
    categoryLabel: 'Mesa Cascata',
    wood: 'Pequiá Maciço Selecionado',
    dimensions: '3,20m × 1,10m × 7cm',
    description: 'Continuidade perfeita do veio da madeira no corte em meia-esquadria de 90°. Uma peça arquitetônica imponente com acabamento acetinado com óleos naturais.',
    tag: 'Destaque Comercial',
    images: [
      '/images/mesacascata1.webp',
      '/images/mesacascata2.webp',
      '/images/mesacascata3.webp',
      '/images/mesacascata4.webp'
    ],
    featured: true,
    catalogUrl: `${CATALOG_BASE_URL}#produtos`,
    whatsappMessage: 'Olá! Gostaria de informações sobre a Mesa Cascata Pequiá Nobre (3,20m x 1,10m) que vi no site.'
  },
  {
    id: 'prancha-pequia-400',
    name: 'Mesa Prancha Borda Orgânica',
    category: 'mesas-prancha',
    categoryLabel: 'Mesa Prancha',
    wood: 'Pequiá com Bordas Naturais',
    dimensions: '4,00m × 1,15m × 8cm',
    description: 'Tampo único esculpido pela natureza com bordas vivas preservadas e base em aço carbono com pintura eletrostática preta fosca.',
    tag: 'Grande Porte',
    images: [
      '/images/mesaprancha1.webp',
      '/images/mesaprancha2.webp',
      '/images/mesaprancha3.webp'
    ],
    featured: true,
    catalogUrl: `${CATALOG_BASE_URL}#produtos`,
    whatsappMessage: 'Olá! Gostaria de consultar a disponibilidade da Mesa Prancha Borda Orgânica de 4 metros.'
  },
  {
    id: 'raiz-escultural-240',
    name: 'Mesa Raiz Orgânica Escultural',
    category: 'mesas-raiz',
    categoryLabel: 'Mesa Raiz',
    wood: 'Raiz Maciça Centenária de Reaproveitamento',
    dimensions: '2,40m × 1,30m × 75cm',
    description: 'Base escultural esculpida a partir de raiz matriz de madeira de reaproveitamento, com tampo em cristal temperado de 15mm que valoriza todas as curvas da escultura.',
    tag: 'Peça Única',
    images: [
      '/images/baseraiz1.webp',
      '/images/baseraiz2.webp',
      '/images/baseraiz3.webp',
      '/images/baseraiz4.webp'
    ],
    featured: true,
    catalogUrl: `${CATALOG_BASE_URL}#produtos`,
    whatsappMessage: 'Olá! Fiquei encantado com a Mesa Raiz Orgânica Escultural e gostaria de mais detalhes.'
  },
  {
    id: 'aparador-organico-pequia',
    name: 'Aparador Suspenso Borda Viva',
    category: 'aparadores',
    categoryLabel: 'Aparador',
    wood: 'Pequiá Maciço com Detalhe Mariposa',
    dimensions: '2,60m × 0,45m × 7cm',
    description: 'Linhas puras que valorizam a arquitetura do hall de entrada ou living. Fixação invisível de alta resistência e encaixes tradicionais.',
    tag: 'Design Autoral',
    images: [
      '/images/gallery/aparador-1.webp',
      '/images/img-1.png'
    ],
    featured: true,
    catalogUrl: `${CATALOG_BASE_URL}#produtos`,
    whatsappMessage: 'Olá! Gostaria de orçar o Aparador Suspenso Borda Viva em madeira maciça.'
  },
  {
    id: 'mesa-resina-river-dark',
    name: 'Mesa River Epóxi Translúcida',
    category: 'especiais',
    categoryLabel: 'Resina Epóxi',
    wood: 'Pranchas Gêmeas de Pequiá & Resina Fume',
    dimensions: '3,00m × 1,05m × 6cm',
    description: 'Duas pranchas espelhadas conectadas por rio de resina epóxi de alta dureza com transparência fumê acetinada e bordas orgânicas externas.',
    tag: 'Edição Especial',
    images: [
      '/images/gallery/resina-1.webp',
      '/images/gallery/macro-1.webp'
    ],
    featured: false,
    catalogUrl: `${CATALOG_BASE_URL}#produtos`,
    whatsappMessage: 'Olá! Gostaria de consultar valores e detalhes da Mesa River Epóxi Translúcida.'
  },
  {
    id: 'cascata-gourmet-280',
    name: 'Mesa Cascata Área Gourmet',
    category: 'mesas-cascata',
    categoryLabel: 'Mesa Cascata',
    wood: 'Muiracatiara Rajada',
    dimensions: '2,80m × 1,00m × 6,5cm',
    description: 'Desenhada especificamente para varandas e espaços gourmet integrados. Tratamento especial hidrorrepelente que preserva os veios dourados da madeira.',
    tag: 'Gourmet',
    images: [
      '/images/categories/cascata.webp',
      '/images/banner3.webp'
    ],
    featured: false,
    catalogUrl: `${CATALOG_BASE_URL}#produtos`,
    whatsappMessage: 'Olá! Gostaria de saber mais sobre a Mesa Cascata Área Gourmet em Muiracatiara.'
  }
];
