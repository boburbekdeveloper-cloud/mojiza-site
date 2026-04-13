import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProductCard from '../components/ProductCard';
import { Search, Filter, SlidersHorizontal } from 'lucide-react';

const productsData = [
  // Kiyim
  { id: 1, name: 'Erkaklar kostyum-shimi', category: 'Kiyim', price: 850000, image: 'https://images.unsplash.com/photo-1594932224828-b4b059b6f6f9?auto=format&fit=crop&q=80&w=800' },
  { id: 2, name: 'Ayollar ko\'ylagi (Premium)', category: 'Kiyim', price: 450000, image: 'https://images.unsplash.com/photo-1539109132304-39299f2183a8?auto=format&fit=crop&q=80&w=800' },
  { id: 3, name: 'Sport poyabzali Nike', category: 'Kiyim', price: 620000, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800' },
  
  // Texnika
  { id: 4, name: 'Samsung Smart TV (4K)', category: 'Texnika', price: 5400000, image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&q=80&w=800' },
  { id: 5, name: 'Apple iPhone 15 Pro', category: 'Texnika', price: 15800000, image: 'https://images.unsplash.com/photo-1696446701796-da61225697cc?auto=format&fit=crop&q=80&w=800' },
  { id: 6, name: 'Dazmol Philips Elite', category: 'Texnika', price: 850000, image: 'https://images.unsplash.com/photo-1626202340510-9943486a4225?auto=format&fit=crop&q=80&w=800' },
  
  // Oziq-ovqat
  { id: 7, name: 'Sut mahsulotlari to\'plami', category: 'Oziq-ovqat', price: 85000, image: 'https://images.unsplash.com/photo-1550583724-125581cc2532?auto=format&fit=crop&q=80&w=800' },
  { id: 8, name: 'Yangi uzilgan mevalar', category: 'Oziq-ovqat', price: 45000, image: 'https://images.unsplash.com/photo-1610832958506-ee563384239d?auto=format&fit=crop&q=80&w=800' },
  { id: 9, name: 'Gugurt va ziravorlar', category: 'Oziq-ovqat', price: 12000, image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=800' },
];

const categories = ['Hammasi', 'Kiyim', 'Texnika', 'Oziq-ovqat'];

const Products = () => {
  const [activeCategory, setActiveCategory] = useState('Hammasi');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = productsData.filter(product => {
    const matchesCategory = activeCategory === 'Hammasi' || product.category === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-32 pb-24 min-h-screen bg-gray-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-display font-extrabold text-gray-900 mb-4">Mahsulotlar Katalogi</h1>
          <p className="text-gray-500">Siz qidirayotgan barcha narsa shu yerda.</p>
        </div>

        {/* Filters and Search */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-6 lg:space-y-0 mb-12">
          <div className="flex items-center space-x-2 overflow-x-auto pb-2 w-full lg:w-auto scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-full text-sm font-bold whitespace-nowrap transition-all ${
                  activeCategory === cat
                    ? 'bg-primary-600 text-white shadow-lg shadow-primary-200'
                    : 'bg-white text-gray-600 border border-gray-100 hover:border-primary-300'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full lg:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Mahsulot qidirish..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white border border-gray-100 rounded-2xl focus:ring-2 focus:ring-primary-600 transition-all outline-none shadow-sm"
            />
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            <AnimatePresence mode='popLayout'>
              {filteredProducts.map((product) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        ) : (
          <div className="text-center py-24">
            <div className="bg-white p-8 rounded-[3rem] shadow-sm inline-block">
              <p className="text-gray-500 text-lg">Hech qanday mahsulot topilmadi.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
