import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Eye } from 'lucide-react';

const ProductCard = ({ product }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all border border-gray-100 group"
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-white/90 backdrop-blur-sm text-primary-900 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-sm">
            {product.category}
          </span>
        </div>
        
        {/* Overlay Buttons */}
        <div className="absolute inset-0 bg-primary-900/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-3">
          <button className="p-3 bg-white rounded-full text-primary-900 hover:bg-primary-600 hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 duration-300">
            <Eye className="h-5 w-5" />
          </button>
          <button className="p-3 bg-white rounded-full text-primary-900 hover:bg-primary-600 hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 duration-300 delay-75">
            <ShoppingCart className="h-5 w-5" />
          </button>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-2 truncate group-hover:text-primary-600 transition-colors">
          {product.name}
        </h3>
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-2xl font-display font-extrabold text-primary-700">
              {product.price.toLocaleString()} sʻom
            </span>
          </div>
          <button className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center text-gray-400 group-hover:bg-primary-50 group-hover:text-primary-600 transition-all">
            <ShoppingCart className="h-5 w-5" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
