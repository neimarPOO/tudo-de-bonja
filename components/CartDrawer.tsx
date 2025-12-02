import React from 'react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onRemove: (id: string) => void;
  onUpdateQuantity: (id: string, delta: number) => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose, items, onRemove, onUpdateQuantity }) => {
  const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" onClick={onClose} />
      
      <div className="absolute inset-y-0 right-0 max-w-full flex">
        <div className="w-screen max-w-md bg-midnight-charcoal border-l border-midnight-gold/30 shadow-2xl flex flex-col h-full transform transition-transform duration-300">
          
          <div className="flex items-center justify-between px-6 py-4 border-b border-midnight-gold/20 bg-midnight-indigo/50">
            <h2 className="text-2xl font-display text-midnight-gold">Seu Carrinho</h2>
            <button onClick={onClose} className="text-midnight-light-text hover:text-midnight-ruby transition-colors">
              <span className="material-symbols-outlined text-3xl">close</span>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-midnight-dark-text opacity-50">
                <span className="material-symbols-outlined text-6xl mb-4">remove_shopping_cart</span>
                <p className="font-serif text-lg">Seu carrinho está vazio.</p>
              </div>
            ) : (
              items.map((item) => (
                <div key={item.id} className="flex gap-4 bg-midnight-indigo/30 p-3 rounded-lg border border-midnight-light-text/5">
                  <div className="h-20 w-20 shrink-0 overflow-hidden rounded-md border border-midnight-gold/10">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>

                  <div className="flex flex-1 flex-col">
                    <div>
                      <div className="flex justify-between text-base font-medium text-midnight-light-text">
                        <h3 className="line-clamp-1">{item.title}</h3>
                        <p className="ml-4 text-midnight-gold">R$ {(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                      <p className="mt-1 text-sm text-midnight-dark-text">{item.category}</p>
                    </div>
                    <div className="flex flex-1 items-end justify-between text-sm">
                      <div className="flex items-center gap-2 bg-midnight-charcoal rounded-full px-2 py-1 border border-midnight-light-text/10">
                        <button 
                          onClick={() => onUpdateQuantity(item.id, -1)}
                          className="text-midnight-light-text hover:text-midnight-ruby disabled:opacity-50"
                          disabled={item.quantity <= 1}
                        >
                          <span className="material-symbols-outlined text-sm">remove</span>
                        </button>
                        <span className="font-display w-4 text-center">{item.quantity}</span>
                        <button 
                          onClick={() => onUpdateQuantity(item.id, 1)}
                          className="text-midnight-light-text hover:text-midnight-emerald"
                        >
                          <span className="material-symbols-outlined text-sm">add</span>
                        </button>
                      </div>

                      <button
                        type="button"
                        onClick={() => onRemove(item.id)}
                        className="font-medium text-midnight-ruby hover:text-red-400 transition-colors flex items-center gap-1"
                      >
                        <span className="material-symbols-outlined text-lg">delete</span>
                        <span className="text-xs uppercase tracking-wide">Remover</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="border-t border-midnight-gold/20 px-6 py-6 bg-midnight-indigo/30">
            <div className="flex justify-between text-base font-medium text-midnight-light-text mb-4">
              <p>Subtotal</p>
              <p className="font-display text-2xl text-midnight-gold">R$ {total.toFixed(2)}</p>
            </div>
            <p className="mt-0.5 text-sm text-midnight-dark-text mb-6">Frete calculado no checkout.</p>
            <div className="mt-6">
              <button
                disabled={items.length === 0}
                onClick={() => alert('Checkout functionality would go here!')}
                className="flex w-full items-center justify-center rounded-full border border-transparent bg-midnight-emerald px-6 py-4 text-base font-medium text-white shadow-sm hover:bg-midnight-gold hover:text-midnight-charcoal transition-all disabled:opacity-50 disabled:cursor-not-allowed uppercase font-display tracking-wider text-xl"
              >
                Finalizar Pedido
              </button>
            </div>
            <div className="mt-6 flex justify-center text-center text-sm text-midnight-dark-text">
              <p>
                ou{' '}
                <button
                  type="button"
                  className="font-medium text-midnight-gold hover:text-midnight-emerald transition-colors"
                  onClick={onClose}
                >
                  Continuar comprando
                  <span aria-hidden="true"> &rarr;</span>
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;
