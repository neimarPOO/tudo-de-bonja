import React from 'react';
import { Link } from 'react-router-dom';

interface HeaderProps {
  searchQuery: string;
  onSearchChange: (q: string) => void;
}

const Header: React.FC<HeaderProps> = ({ searchQuery, onSearchChange }) => {
  return (
    <header className="flex flex-col md:flex-row items-center justify-between whitespace-nowrap border-b-2 border-dashed border-midnight-gold px-4 sm:px-10 py-3 mb-6 gap-4">
      <div className="flex items-center gap-8 w-full md:w-auto justify-between md:justify-start">
        <Link to="/" className="flex items-center gap-4 text-midnight-light-text hover:text-midnight-gold transition-colors">
          <img src="/Escola_startUp.png" alt="Escola StartUp Logo" className="h-16 xl:h-24 w-auto object-contain" />
        </Link>

        {/* Mobile Search Toggle (simplified as just input for now) */}
        <div className="md:hidden">
          {/* Mobile specifics could go here */}
        </div>
      </div>

      <div className="flex w-full md:w-auto gap-4 items-center">
        <label className="flex flex-col min-w-40 !h-12 xl:!h-16 w-full md:max-w-72 xl:max-w-[600px]">
          <div className="flex w-full flex-1 items-stretch rounded-full h-full border-2 border-midnight-gold shadow-md group focus-within:ring-2 focus-within:ring-midnight-ruby/50">
            <div className="text-midnight-dark-text/70 flex border-none bg-midnight-indigo items-center justify-center pl-4 rounded-l-full">
              <span className="material-symbols-outlined text-xl xl:text-3xl">search</span>
            </div>
            <input
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-full text-midnight-light-text focus:outline-0 focus:ring-0 border-none bg-midnight-indigo focus:border-none h-full placeholder:text-midnight-dark-text/50 px-4 rounded-l-none border-l-0 pl-2 text-base xl:text-xl font-normal leading-normal"
              placeholder="O que te faz sorrir hoje?"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
            />
          </div>
        </label>

        <div className="flex gap-3 shrink-0">
          <Link to="/admin" className="flex items-center justify-center overflow-hidden rounded-full h-12 w-12 xl:h-16 xl:w-16 bg-midnight-emerald text-midnight-light-text shadow-md hover:bg-midnight-gold transition-colors hover:text-midnight-charcoal relative group" title="Área Admin">
            <span className="material-symbols-outlined xl:text-3xl">admin_panel_settings</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
