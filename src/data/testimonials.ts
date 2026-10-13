export interface Testimonial {
  id: string;
  quote: string;
  customerName: string;
  location: string;
  projectType: string;
  image: string;
  product: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    quote: 'A mesa cascata foi o ponto alto de toda a nossa reforma. A continuidade dos veios da madeira é impressionante e o atendimento da equipe foi impecável desde a escolha da tora até a entrega técnica.',
    customerName: 'Rodrigo & Camila Silveira',
    location: 'Campinas / SP',
    projectType: 'Residência Unifamiliar',
    image: '/images/categories/cascata.jpg',
    product: 'Mesa Cascata Pequiá 3,20m'
  },
  {
    id: 'test-2',
    quote: 'Procurávamos uma prancha única de grandes dimensões para nossa área gourmet na fazenda. Encontramos na Amadeireira exatamente a matéria-prima e o respeito à forma orgânica da madeira.',
    customerName: 'Eduardo M. Prado',
    location: 'Porto Feliz / SP',
    projectType: 'Área Gourmet Fazenda',
    image: '/images/categories/prancha.jpg',
    product: 'Mesa Prancha 4,00m'
  },
  {
    id: 'test-3',
    quote: 'Especificar peças da Amadeireira nos meus projetos de interiores é garantia de encantamento dos clientes. O acabamento artesanal e a durabilidade das madeiras são incomparáveis.',
    customerName: 'Arq. Mariana Vasconcellos',
    location: 'São Paulo / SP',
    projectType: 'Projeto de Interiores Residencial',
    image: '/images/categories/raiz.jpg',
    product: 'Mesa Raiz com Tampo de Cristal'
  }
];
