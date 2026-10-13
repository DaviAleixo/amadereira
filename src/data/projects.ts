export interface RealProject {
  id: string;
  title: string;
  client: string;
  clientName?: string;
  location: string;
  piece: string;
  pieceUsed: string;
  category: string;
  wood: string;
  image: string;
  quote: string;
  description: string;
  mediaType: 'video' | 'photo';
  videoUrl?: string;
}

export const REAL_PROJECTS: RealProject[] = [
  {
    id: 'sorocaba',
    title: 'Projeto Sorocaba',
    client: 'Cantor Sorocaba',
    clientName: 'Cantor Sorocaba',
    location: 'Interior de SP',
    piece: 'Mesa Prancha Maciça 5,00m',
    pieceUsed: 'Mesa Prancha Maciça 5,00m',
    category: 'Rancho & Espaço Gourmet',
    wood: 'Pequiá Maciço Selecionado',
    image: '/images/gallery/prancha-1.jpg',
    quote: 'A imponência da madeira maciça e o acabamento da Amadeireira transformaram completamente nosso espaço.',
    description: 'Mesa monumental de 5 metros em prancha única de Pequiá maciço, integrando a área gourmet do rancho.',
    mediaType: 'video',
    videoUrl: 'https://www.youtube-nocookie.com/embed/sAVHpVLfgng'
  },
  {
    id: 'fazenda-boa-vista',
    title: 'Fazenda Boa Vista',
    client: 'Rodrigo & Camila Silveira',
    clientName: 'Rodrigo & Camila Silveira',
    location: 'Porto Feliz / SP',
    piece: 'Mesa Cascata Pequiá 3,60m',
    pieceUsed: 'Mesa Cascata Pequiá 3,60m',
    category: 'Área Gourmet Integrada',
    wood: 'Pequiá com Corte 45°',
    image: '/images/categories/cascata.jpg',
    quote: 'A continuidade dos veios no corte 45 graus é uma verdadeira obra de arte.',
    description: 'Integração completa entre o living avarandado e o jardim tropical com mesa cascata para 14 lugares.',
    mediaType: 'video',
    videoUrl: 'https://www.youtube-nocookie.com/embed/sAVHpVLfgng'
  },
  {
    id: 'alphaville',
    title: 'Casa Alphaville',
    client: 'Eduardo M. Prado',
    clientName: 'Eduardo M. Prado',
    location: 'Campinas / SP',
    piece: 'Mesa Raiz Monumental',
    pieceUsed: 'Mesa Raiz Monumental',
    category: 'Living Principal',
    wood: 'Raiz Nobre Centenária',
    image: '/images/categories/raiz.jpg',
    quote: 'A mesa raiz virou a grande escultura focal da nossa casa.',
    description: 'Posicionada estrategicamente no centro do pé-direito duplo como escultura focal.',
    mediaType: 'video',
    videoUrl: 'https://www.youtube-nocookie.com/embed/sAVHpVLfgng'
  },
  {
    id: 'cobertura-jardins',
    title: 'Cobertura Jardins',
    client: 'Arq. Mariana Vasconcellos',
    clientName: 'Arq. Mariana Vasconcellos',
    location: 'São Paulo / SP',
    piece: 'Mesa Resina Epóxi & Madeira',
    pieceUsed: 'Mesa Resina Epóxi & Madeira',
    category: 'Sala de Jantar Contemporânea',
    wood: 'Pequiá e Resina Translúcida',
    image: '/images/gallery/resina-1.jpg',
    quote: 'Especificar a Amadeireira nos meus projetos de alto padrão é garantia de precisão e encantamento.',
    description: 'Projetada para compor um ambiente de concreto aparente e iluminação cênica.',
    mediaType: 'video',
    videoUrl: 'https://www.youtube-nocookie.com/embed/sAVHpVLfgng'
  },
  {
    id: 'rancho-santa-fe',
    title: 'Rancho Santa Fé',
    client: 'Família Albuquerque',
    clientName: 'Família Albuquerque',
    location: 'Ribeirão Preto / SP',
    piece: 'Mesa Prancha Borda Viva 4,20m',
    pieceUsed: 'Mesa Prancha Borda Viva 4,20m',
    category: 'Varanda & Espaço Gourmet',
    wood: 'Pequiá 8cm Espessura',
    image: '/images/banner1.png',
    quote: 'A textura da borda orgânica e a robustez da peça impressionam todos os convidados.',
    description: 'Tampo maciço selecionado de 4,20m para 16 lugares em varanda gourmet.',
    mediaType: 'video',
    videoUrl: 'https://www.youtube-nocookie.com/embed/sAVHpVLfgng'
  }
];
