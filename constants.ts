import { Product, Category } from './types';

export const INITIAL_PRODUCTS: Product[] = [
  {
    id: '1',
    title: 'Biscoiteria Natalina',
    description: 'Biscoitos artesanais com tema de Natal.',
    category: 'Biscoitos de Natal',
    image: '/thumb01.png',
    price: 45.00,
    link: 'https://aquamarine-kataifi-2d5ca7.netlify.app/'
  },
  {
    id: '2',
    title: 'Os Biscoiteiros de Hogwarts',
    category: 'Biscoitos de Natal',
    image: '/biscoiteiros.png',
    link: 'https://biscoiteiros-de-hogwarts.netlify.app/'
  },
  {
    id: '3',
    title: 'The Memory Crumb',
    description: 'Pães de fermentação natural.',
    category: 'Biscoitos de Natal',
    image: '/crumb.png',
    link: 'https://the-memory-crumb.netlify.app/'
  },
  {
    id: '4',
    title: 'Estrela Polar',
    description: 'Fatias de bolo e doces finos.',
    category: 'Biscoitos de Natal',
    image: '/estrela-polar.png',
    link: 'https://estrela-polar.netlify.app/'
  },
  {
    id: '5',
    title: 'Sabor da Bahia',
    description: 'Acarajé tradicional feito na hora.',
    category: 'Petiscos',
    image: 'https://images.unsplash.com/photo-1626804475297-411d87f73cf0?q=80&w=2670&auto=format&fit=crop',
    price: 22.00,
    link: '#'
  },
  {
    id: '6',
    title: 'Pomar Urbano',
    description: 'Sucos naturais e frescos de 500ml.',
    category: 'Bebidas',
    image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?q=80&w=2658&auto=format&fit=crop',
    price: 14.00,
    link: '#'
  }
];

export const CATEGORIES: Category[] = ['Todos', 'Biscoitos de Natal', 'Petiscos', 'Doces', 'Bebidas', 'Pães', 'Confeitaria'];
