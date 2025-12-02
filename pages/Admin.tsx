import React, { useState } from 'react';
import { Product, Category } from '../types';
import { CATEGORIES } from '../constants';

interface AdminProps {
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}

const Admin: React.FC<AdminProps> = ({ products, setProducts }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Form State
  const [isEditing, setIsEditing] = useState<string | null>(null); // Product ID or null
  const [formData, setFormData] = useState<Omit<Product, 'id'>>({
    title: '',
    description: '',
    category: 'Petiscos',
    image: '',
    price: 0
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'admin') {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Senha incorreta. Tente "admin".');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setPassword('');
  };

  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
      category: 'Petiscos',
      image: '',
      price: 0
    });
    setIsEditing(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (isEditing) {
      setProducts(prev => prev.map(p => p.id === isEditing ? { ...formData, id: isEditing } : p));
    } else {
      const newProduct: Product = {
        ...formData,
        id: Math.random().toString(36).substr(2, 9)
      };
      setProducts(prev => [...prev, newProduct]);
    }
    resetForm();
  };

  const handleEdit = (product: Product) => {
    setIsEditing(product.id);
    setFormData({
      title: product.title,
      description: product.description,
      category: product.category,
      image: product.image,
      price: product.price
    });
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Tem certeza que deseja excluir este produto?')) {
      setProducts(prev => prev.filter(p => p.id !== id));
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="flex flex-col items-center justify-center py-20 px-4 min-h-[60vh]">
        <div className="bg-midnight-indigo/30 p-8 xl:p-12 rounded-2xl border border-midnight-gold/20 shadow-2xl max-w-md xl:max-w-2xl w-full">
          <div className="flex justify-center mb-6 text-midnight-gold">
            <span className="material-symbols-outlined text-6xl xl:text-8xl">lock</span>
          </div>
          <h2 className="text-3xl xl:text-5xl font-display text-midnight-light-text text-center mb-6 xl:mb-10">Área Restrita</h2>
          <form onSubmit={handleLogin} className="space-y-4 xl:space-y-6">
            <div>
              <label className="block text-sm xl:text-lg font-medium text-midnight-dark-text mb-1">Senha de Acesso</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-midnight-charcoal border border-midnight-gold/30 rounded-lg p-3 xl:p-5 text-midnight-light-text xl:text-xl focus:ring-2 focus:ring-midnight-gold outline-none"
                placeholder="Digite a senha"
              />
            </div>
            {error && <p className="text-red-400 text-sm xl:text-base">{error}</p>}
            <button
              type="submit"
              className="w-full bg-midnight-emerald hover:bg-midnight-gold hover:text-midnight-charcoal text-white font-bold py-3 xl:py-5 rounded-lg transition-colors uppercase font-display tracking-wider xl:text-xl"
            >
              Entrar
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full px-4 md:px-8 pb-20">
      <div className="flex justify-between items-center mb-8 border-b border-midnight-gold/20 pb-4">
        <h1 className="text-4xl xl:text-6xl font-display text-midnight-gold">Painel Administrativo</h1>
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 text-midnight-ruby hover:text-red-400 font-medium xl:text-xl"
        >
          <span className="material-symbols-outlined xl:text-3xl">logout</span>
          Sair
        </button>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Form Section */}
        <div className="lg:col-span-1">
          <div className="bg-midnight-indigo/20 p-6 xl:p-8 rounded-xl border border-midnight-light-text/10 sticky top-4">
            <h3 className="text-2xl xl:text-4xl font-display text-midnight-light-text mb-4 xl:mb-8">
              {isEditing ? 'Editar Produto' : 'Novo Produto'}
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4 xl:space-y-6">
              <div>
                <label className="block text-sm xl:text-lg text-midnight-dark-text mb-1">Nome do Produto</label>
                <input
                  required
                  type="text"
                  value={formData.title}
                  onChange={e => setFormData({ ...formData, title: e.target.value })}
                  className="w-full bg-midnight-charcoal border border-midnight-gold/20 rounded p-2 xl:p-4 text-white xl:text-xl focus:border-midnight-gold outline-none"
                />
              </div>

              <div>
                <label className="block text-sm xl:text-lg text-midnight-dark-text mb-1">Preço (R$)</label>
                <input
                  required
                  type="number"
                  step="0.01"
                  min="0"
                  value={formData.price}
                  onChange={e => setFormData({ ...formData, price: parseFloat(e.target.value) })}
                  className="w-full bg-midnight-charcoal border border-midnight-gold/20 rounded p-2 xl:p-4 text-white xl:text-xl focus:border-midnight-gold outline-none"
                />
              </div>

              <div>
                <label className="block text-sm xl:text-lg text-midnight-dark-text mb-1">Categoria</label>
                <select
                  value={formData.category}
                  onChange={e => setFormData({ ...formData, category: e.target.value })}
                  className="w-full bg-midnight-charcoal border border-midnight-gold/20 rounded p-2 xl:p-4 text-white xl:text-xl focus:border-midnight-gold outline-none"
                >
                  {CATEGORIES.filter(c => c !== 'Todos').map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm xl:text-lg text-midnight-dark-text mb-1">URL da Imagem</label>
                <input
                  required
                  type="url"
                  value={formData.image}
                  onChange={e => setFormData({ ...formData, image: e.target.value })}
                  className="w-full bg-midnight-charcoal border border-midnight-gold/20 rounded p-2 xl:p-4 text-white xl:text-xl focus:border-midnight-gold outline-none"
                  placeholder="https://..."
                />
              </div>

              <div>
                <label className="block text-sm xl:text-lg text-midnight-dark-text mb-1">Descrição</label>
                <textarea
                  required
                  rows={3}
                  value={formData.description}
                  onChange={e => setFormData({ ...formData, description: e.target.value })}
                  className="w-full bg-midnight-charcoal border border-midnight-gold/20 rounded p-2 xl:p-4 text-white xl:text-xl focus:border-midnight-gold outline-none resize-none"
                />
              </div>

              <div className="flex gap-2 pt-2 xl:pt-4">
                <button
                  type="submit"
                  className="flex-1 bg-midnight-emerald hover:bg-emerald-600 text-white py-2 xl:py-4 rounded font-bold font-display uppercase tracking-wide transition-colors xl:text-xl"
                >
                  {isEditing ? 'Atualizar' : 'Adicionar'}
                </button>
                {isEditing && (
                  <button
                    type="button"
                    onClick={resetForm}
                    className="px-4 bg-midnight-charcoal border border-midnight-light-text/30 hover:bg-midnight-light-text/10 text-white py-2 xl:py-4 rounded font-bold transition-colors xl:text-xl"
                  >
                    Cancelar
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>

        {/* List Section */}
        <div className="lg:col-span-2 space-y-4">
          <div className="bg-midnight-indigo/20 rounded-xl border border-midnight-light-text/10 overflow-hidden">
            <table className="w-full text-left">
              <thead className="bg-midnight-indigo/50 text-midnight-gold font-display text-lg xl:text-2xl">
                <tr>
                  <th className="p-4 xl:p-6">Produto</th>
                  <th className="p-4 xl:p-6">Preço</th>
                  <th className="p-4 xl:p-6 text-right">Ações</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-midnight-gold/10">
                {products.map(product => (
                  <tr key={product.id} className="hover:bg-midnight-light-text/5 transition-colors">
                    <td className="p-4 xl:p-6">
                      <div className="flex items-center gap-3 xl:gap-5">
                        <img src={product.image} alt="" className="w-12 h-12 xl:w-20 xl:h-20 rounded object-cover bg-midnight-charcoal" />
                        <div>
                          <p className="font-bold text-midnight-light-text xl:text-xl">{product.title}</p>
                          <span className="text-xs xl:text-sm text-midnight-dark-text px-2 py-0.5 bg-midnight-charcoal rounded-full border border-midnight-light-text/10">
                            {product.category}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="p-4 xl:p-6 text-midnight-light-text font-serif xl:text-xl">
                      R$ {product.price.toFixed(2)}
                    </td>
                    <td className="p-4 xl:p-6 text-right">
                      <div className="flex justify-end gap-2 xl:gap-4">
                        <button
                          onClick={() => handleEdit(product)}
                          className="p-2 xl:p-3 text-blue-400 hover:bg-blue-400/10 rounded-full transition-colors"
                          title="Editar"
                        >
                          <span className="material-symbols-outlined text-lg xl:text-2xl">edit</span>
                        </button>
                        <button
                          onClick={() => handleDelete(product.id)}
                          className="p-2 xl:p-3 text-midnight-ruby hover:bg-midnight-ruby/10 rounded-full transition-colors"
                          title="Excluir"
                        >
                          <span className="material-symbols-outlined text-lg xl:text-2xl">delete</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {products.length === 0 && (
              <div className="p-8 text-center text-midnight-dark-text">
                Nenhum produto cadastrado.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
