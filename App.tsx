import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Admin from './pages/Admin';
import { Product } from './types';
import { INITIAL_PRODUCTS } from './constants';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const AppContent: React.FC = () => {
  // State
  const [products, setProducts] = useState<Product[]>(INITIAL_PRODUCTS);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden font-serif bg-midnight-charcoal text-midnight-light-text antialiased selection:bg-midnight-gold selection:text-midnight-charcoal text-shadow-custom">
      {/* Background Pattern Overlay */}
      <div
        className="fixed inset-0 z-0 pointer-events-none opacity-10"
        style={{
          backgroundImage: "url('/bg_natal_v2.png')",
          backgroundRepeat: "repeat",
          backgroundSize: "800px"
        }}
      />
      <div className="layout-container flex h-full grow flex-col relative z-10">
        <div className="px-4 md:px-8 flex flex-1 py-5 w-full">
          <div className="layout-content-container flex flex-col w-full flex-1">

            <Header
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
            />

            <ScrollToTop />

            <Routes>
              <Route
                path="/"
                element={
                  <Home
                    products={products}
                    searchQuery={searchQuery}
                  />
                }
              />
              <Route
                path="/admin"
                element={
                  <Admin
                    products={products}
                    setProducts={setProducts}
                  />
                }
              />
            </Routes>

          </div>
        </div>
        <footer className="mt-auto border-t border-midnight-gold/20 bg-midnight-charcoal/50 backdrop-blur-sm px-6 py-12">
          <div className="flex flex-col gap-10">

            {/* Main Footer Content */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">

              {/* Column 1: Logos */}
              <div className="flex flex-col items-center md:items-start gap-2">
                <p className="text-sm font-display tracking-widest text-midnight-gold uppercase mb-2">Realização</p>
                <div className="flex items-center gap-8">
                  <img src="/Escola_startUp.png" alt="Escola StartUp" className="h-24 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity" />
                  <div className="h-8 w-px bg-midnight-light-text/20"></div>
                  <img src="/LogoRedeCalabria.png" alt="Rede Calabria" className="h-16 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity" />
                </div>
              </div>

              {/* Column 2: Navigation */}
              <nav className="flex flex-col md:flex-row justify-center items-center gap-8">
                <a className="text-midnight-light-text/80 hover:text-midnight-gold font-display text-xl tracking-wide transition-colors relative group" href="#">
                  Nossa História
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-midnight-gold transition-all group-hover:w-full"></span>
                </a>
                <a className="text-midnight-light-text/80 hover:text-midnight-gold font-display text-xl tracking-wide transition-colors relative group" href="#">
                  Monte sua Banca
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-midnight-gold transition-all group-hover:w-full"></span>
                </a>
                <a className="text-midnight-light-text/80 hover:text-midnight-gold font-display text-xl tracking-wide transition-colors relative group" href="#">
                  Fale Conosco
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-midnight-gold transition-all group-hover:w-full"></span>
                </a>
              </nav>

              {/* Column 3: Social & Contact */}
              <div className="flex flex-col items-center md:items-end gap-4">
                <div className="flex gap-5">
                  <a className="text-midnight-light-text/70 hover:text-midnight-gold transition-colors transform hover:scale-110 duration-200" href="#" aria-label="Instagram">
                    <svg aria-hidden="true" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                      <path clipRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" fillRule="evenodd"></path>
                    </svg>
                  </a>
                  <a className="text-midnight-light-text/70 hover:text-midnight-gold transition-colors transform hover:scale-110 duration-200" href="#" aria-label="Facebook">
                    <svg aria-hidden="true" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.585-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.585-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.07-1.645-.07-4.85s.012-3.585.07-4.85c.149-3.225 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98C15.667 0 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Copyright Divider */}
            <div className="border-t border-midnight-light-text/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-base text-midnight-dark-text/60 font-serif">
              <p>© 2025 Tudo de Bonja. Todos os direitos reservados.</p>
              <p className="flex items-center gap-1">
                Feito com <span className="text-midnight-ruby">♥</span> pela nossa comunidade
              </p>
            </div>
          </div>
        </footer>
      </div>


    </div>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <AppContent />
    </HashRouter>
  );
};

export default App;
