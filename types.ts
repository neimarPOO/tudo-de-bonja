export interface Product {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  price: number;
  link?: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export type Category = 'Todos' | 'Petiscos' | 'Doces' | 'Bebidas' | 'Pães' | 'Confeitaria' | 'Biscoitos de Natal';

export interface AdminContextType {
  isAdmin: boolean;
  login: (password: string) => boolean;
  logout: () => void;
}
