import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative min-h-[90vh] flex items-center pt-16 overflow-hidden bg-white">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary-100 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-accent-gold rounded-full blur-3xl opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex items-center space-x-2 bg-primary-50 px-4 py-2 rounded-full w-fit mb-6">
              <Star className="h-4 w-4 text-accent-gold fill-accent-gold" />
              <span className="text-primary-800 text-xs font-bold uppercase tracking-wider">
                Paxtaoboddagi eng katta savdo markazi
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-display font-extrabold text-gray-900 leading-tight mb-6">
              <span className="text-primary-700">Mojiza</span> Savdo <br />
              Markazi
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 max-w-lg leading-relaxed">
              Sifatli mahsulotlar, hamyonbop narxlar va a'lo darajadagi xizmat — barchasi bir joyda. Biz bilan hayotingizni yanada qulayroq qiling.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                to="/products"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 text-white rounded-2xl font-bold shadow-xl shadow-primary-200 hover:bg-primary-700 transition-all hover:translate-y-[-2px] group"
              >
                Mahsulotlarni ko‘rish
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-900 border-2 border-primary-100 rounded-2xl font-bold hover:bg-primary-50 transition-all"
              >
                Biz bilan bog‘lanish
              </Link>
            </div>

            <div className="mt-12 flex items-center space-x-6">
              <div className="flex -space-x-3">
                {[1,2,3,4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200" />
                ))}
              </div>
              <div className="text-sm">
                <span className="block font-bold text-gray-900">10,000+ Muvaffaqiyatli mijozlar</span>
                <span className="text-gray-500">Paxtaobod bo'yicha ishonchli xizmat</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl z-20">
              <img 
                src="/hero.png" 
                alt="Mojiza Savdo Markazi" 
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Glossy card overlay */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-6 -left-6 md:-left-12 bg-white/90 backdrop-blur-md p-6 rounded-3xl shadow-xl z-30 border border-white/20 hidden sm:block"
            >
              <div className="flex items-center space-x-4">
                <div className="bg-accent-gold/20 p-3 rounded-2xl">
                  <ShoppingBag className="h-6 w-6 text-accent-gold" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium">Bugungi aksiyalar</p>
                  <p className="text-lg font-bold text-gray-900">-30% gacha chegirmalar</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
