import React from 'react';
import { ShoppingBag, Phone, Send, Clock, MapPin, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Logo & Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="bg-primary-600 p-2 rounded-lg">
                <ShoppingBag className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-display font-bold">Mojiza</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Paxtaobod tumanidagi eng yirik va zamonaviy savdo markazi. Mijozlarimiz uchun eng yaxshi sharoitlarni yaratamiz.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary-600 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary-600 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary-600 transition-colors">
                <Send className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-l-4 border-primary-600 pl-4">Bo'limlar</h3>
            <ul className="space-y-4 text-gray-400">
              <li><a href="/" className="hover:text-primary-400 transition-colors">Bosh sahifa</a></li>
              <li><a href="/products" className="hover:text-primary-400 transition-colors">Mahsulotlar</a></li>
              <li><a href="/about" className="hover:text-primary-400 transition-colors">Biz haqimizda</a></li>
              <li><a href="/location" className="hover:text-primary-400 transition-colors">Manzilimiz</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-l-4 border-primary-600 pl-4">Aloqa</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-gray-400">
                <Phone className="h-5 w-5 text-primary-500 mt-1" />
                <span>+998 (90) 123-45-67</span>
              </li>
              <li className="flex items-start space-x-3 text-gray-400">
                <Send className="h-5 w-5 text-primary-500 mt-1" />
                <span>@mojiza_savdo_markazi</span>
              </li>
              <li className="flex items-start space-x-3 text-gray-400">
                <Clock className="h-5 w-5 text-primary-500 mt-1" />
                <span>Dush-Yak: 08:00 - 22:00</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-l-4 border-primary-600 pl-4">Yangiliklar</h3>
            <p className="text-gray-400 text-sm mb-4">Aksiyalar va chegirmalardan xabardor bo'ling.</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Emailingiz..." 
                className="bg-gray-800 border-none rounded-l-xl px-4 py-3 text-white w-full focus:ring-2 focus:ring-primary-600 transition-all outline-none"
              />
              <button className="bg-primary-600 px-4 rounded-r-xl hover:bg-primary-700 transition-all">
                <Send className="h-5 w-5" />
              </button>
            </form>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Mojiza Savdo Markazi. Barcha huquqlar himoyalangan.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
