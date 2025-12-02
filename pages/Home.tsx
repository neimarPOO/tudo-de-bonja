import React, { useState } from 'react';
import { Product, Category } from '../types';
import { CATEGORIES } from '../constants';

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
          <div className="flex flex-row overflow-x-auto gap-8 horizontal-scroll-snap pb-12 pt-4 px-4 -mx-4 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:overflow-visible">
            {filteredProducts.map((product, index) => (
              <div
                key={product.id}
                className={`
                  min-w-[300px] md:min-w-0 aspect-[4/5] flex-shrink-0 relative rounded-xl shadow-xl transition-all duration-500 ease-in-out transform hover:scale-[1.01] group
                  bg-midnight-charcoal border border-transparent hover:border-midnight-gold hover:shadow-[0_0_30px_rgba(212,175,55,0.4)]
                  ${index % 3 === 0 ? 'md:rotate-1' : index % 3 === 1 ? 'md:-rotate-1' : 'md:rotate-0'}
                `}
              >
                {/* Image Background */}
                <div
                  className="absolute inset-0 bg-cover bg-center rounded-xl z-0 midnight-market-image group-hover:scale-105 group-hover:filter-none transition-all duration-700 ease-in-out"
                  style={{ backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.1) 60%), url("${product.image}")` }}
                />

                {/* Content Overlay */}
                <div className="relative z-20 flex flex-col justify-end p-6 h-full">
                  <div className="mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
                    <span className="inline-block px-2 py-0.5 rounded text-xs font-bold uppercase tracking-wider bg-midnight-gold text-midnight-charcoal mb-2">
                      {product.category}
                    </span>
                    <div className="flex justify-between items-end gap-2">
                      <p className="font-display text-midnight-light-text text-3xl font-bold leading-tight line-clamp-2">
                        {product.title}
                      </p>
                    </div>
                  </div>

                  <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100 flex flex-col gap-4">
                    <p className="font-serif text-midnight-light-text/90 text-sm mt-2 line-clamp-3">
                      {product.description}
                    </p>
                    <a
                      href={product.link || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3 border border-midnight-gold text-midnight-gold hover:bg-midnight-gold hover:text-midnight-charcoal rounded-lg font-sans text-sm font-medium tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-2 text-center no-underline"
                    >
                      <span className="material-symbols-outlined text-lg">open_in_new</span>
                      Visitar página
                    </a>
                  </div>

                  {/* Mobile-only visible generic desc if not hovering (for touch devices often dont hover well) */}
                  <div className="block md:hidden group-hover:hidden">
                    <p className="font-serif text-midnight-light-text/90 text-sm mt-2 line-clamp-2">{product.description}</p>
                  </div>
                </div>
              </div>
            ))}
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
