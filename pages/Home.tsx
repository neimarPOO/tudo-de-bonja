import React, { useState } from 'react';
import { Product, Category } from '../types';
import { CATEGORIES } from '../constants';
import Carousel from '../components/Carousel';

interface HomeProps {
  products: Product[];
  searchQuery: string;
}

const Home: React.FC<HomeProps> = ({ products, searchQuery }) => {
  const [selectedCategory, setSelectedCategory] = useState<Category>('Todos');

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'Todos' || product.category === selectedCategory;
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="flex flex-col gap-8 pb-10">
      <div className="flex flex-col gap-0 p-4 mt-4 text-center">
        <img
          src="/logo_natal.png"
          alt="Tudo de Bonja - Edição de Natal"
          className="h-40 md:h-56 xl:h-72 2xl:h-96 w-auto object-contain mx-auto drop-shadow-xl"
        />
        <p className="font-christmas text-midnight-light-text text-2xl xl:text-4xl 2xl:text-5xl font-bold leading-normal max-w-2xl xl:max-w-4xl mx-auto">
          Festival de biscoitos de Natal 2025
        </p>
      </div>

      {/* Categories */}
      <div className="flex gap-4 p-3 overflow-x-auto horizontal-scroll-snap scrollbar-hide pb-4">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`
              flex h-12 xl:h-16 shrink-0 items-center justify-center gap-x-2 rounded-full px-6 shadow-sm transition-all duration-300
              ${selectedCategory === cat
                ? 'bg-midnight-gold text-midnight-charcoal scale-105 font-bold shadow-midnight-gold/20 shadow-lg'
                : 'bg-midnight-indigo/60 text-midnight-light-text hover:bg-midnight-ruby/60 hover:text-white'}
            `}
          >
            <p className="font-display text-lg xl:text-2xl tracking-wide leading-normal uppercase">{cat}</p>
          </button>
        ))}
      </div>

      {/* Product List */}
      <div className="px-4">
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20 bg-midnight-indigo/10 rounded-xl border border-dashed border-midnight-dark-text/20">
            <span className="material-symbols-outlined text-5xl text-midnight-dark-text/50 mb-2">search_off</span>
            <p className="text-midnight-light-text text-xl font-serif">Nenhum produto encontrado.</p>
          </div>
        ) : (
          <div className="w-full">
            <Carousel products={filteredProducts} />
          </div>
        )}
      </div>

      <div className="flex px-4 py-3 justify-center mt-4">
        <button
          onClick={() => setSelectedCategory('Todos')}
          className="flex min-w-[84px] max-w-[480px] xl:max-w-[600px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-14 xl:h-20 px-8 bg-midnight-ruby text-midnight-light-text text-xl xl:text-3xl font-bold leading-normal tracking-[0.015em] hover:bg-midnight-gold hover:text-midnight-charcoal transition-colors shadow-lg shadow-midnight-ruby/20"
        >
          <span className="truncate font-display">Ver Cardápio Completo</span>
        </button>
      </div>
    </main>
  );
};

export default Home;
