export interface CategoryInfo {
  slug: string;
  name: string;
  tagline: string;
  headline: string;
  description: string;
  heroImage: string;
  detailImage: string;
  woodTypes: string[];
  keyAttributes: { title: string; description: string }[];
  route: string;
  catalogFilter: string;
}

export const CATEGORIES: CategoryInfo[] = [
  {
    slug: 'mesas-cascata',
    name: 'Mesa Cascata',
    tagline: 'Continuidade & Arquitetura',
    headline: 'O fluxo contínuo da madeira que desce ao chão.',
    description: 'A Mesa Cascata se destaca pelo corte preciso em meia-esquadria que faz os veios da madeira descerem organicamente até o piso. Uma peça que une o peso da madeira maciça à leveza escultórica contemporânea.',
    heroImage: '/images/mesacascata1.webp',
    detailImage: '/images/mesacascata2.webp',
    woodTypes: ['Pequiá Maciço', 'Muiracatiara', 'Jatobá', 'Cumaru'],
    keyAttributes: [
      {
        title: 'Continuidade de Veios',
        description: 'O veio do tampo coincide exatamente com a lateral vertical, criando uma ilusão de dobra natural da tora.'
      },
      {
        title: 'Corte 45° Estrutural',
        description: 'Encaixe interno reforçado com alma de aço e resina estrutural de altíssima resistência.'
      },
      {
        title: 'Protagonismo no Ambiente',
        description: 'Ideal para salas de jantar integradas e espaços gourmet de alto padrão.'
      }
    ],
    route: '/mesas-cascata',
    catalogFilter: 'Mesas Cascata'
  },
  {
    slug: 'mesas-prancha',
    name: 'Mesa Prancha',
    tagline: 'Matéria-Prima & Borda Orgânica',
    headline: 'Grandes toras únicas com bordas naturais vivas.',
    description: 'A Mesa Prancha celebra a grandiosidade da natureza em seu estado mais autêntico. Toras centenárias selecionadas individualmente, com espessuras imponentes e bordas vivas trabalhadas à mão.',
    heroImage: '/images/mesaprancha1.webp',
    detailImage: '/images/mesaprancha2.webp',
    woodTypes: ['Pequiá Amarelo', 'Pequiá Rajado', 'Angelim', 'Teca'],
    keyAttributes: [
      {
        title: 'Bordas Vivas Preservadas',
        description: 'O contorno original do tronco é polido manualmente sem perder sua organicidade ancestral.'
      },
      {
        title: 'Grandes Dimensões',
        description: 'Capacidade de produzir pranchas únicas de 2,50m até mais de 5 metros de comprimento.'
      },
      {
        title: 'Encaixes Tradicionais "Mariposa"',
        description: 'Estabilização de fissuras naturais com detalhes artesanais em madeira escura contrastante.'
      }
    ],
    route: '/mesas-prancha',
    catalogFilter: 'Pranchas'
  },
  {
    slug: 'mesas-raiz',
    name: 'Mesa Raiz',
    tagline: 'Escultura & Natureza Viva',
    headline: 'Formas orgânicas irrepetíveis criadas pela terra.',
    description: 'Cada Mesa Raiz é uma obra de arte única no mundo. Bases formadas por raízes centenárias de manejo sustentável e reaproveitamento, tratadas e polidas com perfeição milimétrica.',
    heroImage: '/images/baseraiz1.webp',
    detailImage: '/images/baseraiz2.webp',
    woodTypes: ['Raiz de Pequiá', 'Raiz de Vinhático', 'Raiz de Jacarandá'],
    keyAttributes: [
      {
        title: '100% Irrepetível',
        description: 'Nenhuma base é igual a outra. As dobras e cavidades naturais são únicas em cada tronco.'
      },
      {
        title: 'Reaproveitamento Consciente',
        description: 'Madeiras resgatadas da natureza que ganham uma segunda vida como mobília de luxo.'
      },
      {
        title: 'Tampos em Cristal ou Madeira',
        description: 'Opção de vidro temperado translúcido para apreciar a escultura por todos os ângulos.'
      }
    ],
    route: '/mesas-raiz',
    catalogFilter: 'Bases'
  }
];
