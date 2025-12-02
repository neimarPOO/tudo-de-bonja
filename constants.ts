import { Product, Category } from './types';

export const INITIAL_PRODUCTS: Product[] = [
  {
    id: '1',
    title: 'Natal Doce',
    description: 'Um pedacinho do céu, feito com carinho e chocolate belga.',
    category: 'Biscoitos de Natal',
    image: '/thumb01.png',
    price: 45.00,
    link: 'https://aquamarine-kataifi-2d5ca7.netlify.app/'
  },
  {
    id: '2',
    title: 'Petiscos do Rei',
    description: 'A crocância que você respeita, feito na hora com molho especial.',
    category: 'Petiscos',
    image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=2680&auto=format&fit=crop',
    price: 28.50,
    link: '#'
  },
  {
    id: '3',
    title: 'Pão da Quebrada',
    description: 'Quentinho e fresquinho, direto do forno a lenha.',
    category: 'Pães',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=2672&auto=format&fit=crop',
    price: 12.00,
    link: '#'
  },
  {
    id: '4',
    title: 'Doce Sonho',
    description: 'Um abraço em forma de açúcar e morangos frescos.',
    category: 'Confeitaria',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=2757&auto=format&fit=crop',
    price: 18.90,
    link: '#'
  },
  {
    id: '5',
    title: 'Acarajé da Baiana',
    description: 'O sabor da Bahia na sua mesa, com vatapá e camarão.',
    category: 'Petiscos',
    image: 'https://images.unsplash.com/photo-1626804475297-411d87f73cf0?q=80&w=2670&auto=format&fit=crop',
    price: 22.00,
    link: '#'
  },
  {
    id: '6',
    title: 'Sucos do Pomar',
    description: 'Vitaminas direto da natureza para você. 500ml.',
    category: 'Bebidas',
    image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?q=80&w=2658&auto=format&fit=crop',
    price: 14.00,
    link: '#'
  }
];

export const CATEGORIES: Category[] = ['Todos', 'Biscoitos de Natal', 'Petiscos', 'Doces', 'Bebidas', 'Pães', 'Confeitaria'];
