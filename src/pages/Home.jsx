import React from 'react';
import Hero from '../components/Hero';
import { motion } from 'framer-motion';
import { ArrowRight, ShoppingBag, ShieldCheck, Zap, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = [
  { name: 'Kiyim-kechak', image: '/clothing.png', count: '1200+ mahsulot', color: 'bg-blue-50' },
  { name: 'Maishiy texnika', image: '/electronics.png', count: '500+ mahsulot', color: 'bg-purple-50' },
  { name: 'Oziq-ovqat', image: '/food.png', count: '3000+ mahsulot', color: 'bg-orange-50' },
];

const features = [
  { icon: <ShieldCheck className="h-8 w-8 text-primary-600" />, title: 'Sifat kafolati', desc: 'Barcha mahsulotlar sertifikatlangan' },
  { icon: <Zap className="h-8 w-8 text-primary-600" />, title: 'Tezkor xizmat', desc: 'Mijozlarga yuqori darajada xizmat ko’rsatish' },
  { icon: <Heart className="h-8 w-8 text-primary-600" />, title: 'Hamyonbop narx', desc: 'Eng qulay narxlar bizda' },
];

const Home = () => {
  return (
    <div className="bg-white">
      <Hero />

      {/* Categories Section */}
      <section className="py-24 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-display font-extrabold text-gray-900 mb-4">
                Katalogimiz bo'ylab <span className="text-primary-600">sayohat qiling</span>
              </h2>
              <p className="text-gray-500 max-w-lg">
                Eng ommabop bo'limlarni ko'zdan kechiring va o'zingizga kerakli narsani toping.
              </p>
            </div>
            <Link to="/products" className="mt-6 md:mt-0 text-primary-600 font-bold flex items-center hover:translate-x-1 transition-transform">
              Barcha kategoriyalar <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((cat, idx) => (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative group cursor-pointer overflow-hidden rounded-[2.5rem] bg-white shadow-sm hover:shadow-2xl transition-all h-[400px]"
              >
                <img src={cat.image} alt={cat.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8 w-full text-white">
                  <p className="text-sm font-medium text-primary-300 mb-2">{cat.count}</p>
                  <h3 className="text-3xl font-display font-bold mb-4">{cat.name}</h3>
                  <div className="flex items-center space-x-2 text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 duration-300">
                    <span>Ko'rish</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary-900 rounded-[3rem] p-12 lg:p-20 relative overflow-hidden">
             {/* Decorative patterns */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-600 rounded-full blur-[100px] opacity-20 -mr-32 -mt-32" />
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-10">
              {features.map((feature, idx) => (
                <div key={idx} className="flex flex-col items-center text-center space-y-4">
                  <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/10">
                    <div className="text-white">{feature.icon}</div>
                  </div>
                  <h4 className="text-2xl font-bold text-white">{feature.title}</h4>
                  <p className="text-primary-100/70">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Promo Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-square rounded-[3rem] overflow-hidden">
                <img src="/hero.png" alt="Promo" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -top-10 -right-10 bg-accent-gold p-8 rounded-full w-40 h-40 flex flex-col items-center justify-center animate-bounce shadow-2xl">
                <span className="text-4xl font-extrabold text-white">70%</span>
                <span className="text-xs font-bold text-white text-center">Gacha Chegirma</span>
              </div>
            </div>
            <div className="space-y-8">
              <h2 className="text-5xl font-display font-extrabold text-gray-900 leading-tight">
                Paxtaobod aholisi uchun <br />
                <span className="text-primary-600">eng yaxshi takliflar</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Biz har doim mijozlarimizga eng sara mahsulotlarni hamyonbop narxlarda taqdim etishga harakat qilamiz. Savdo markazimizda siz nafaqat xarid qilasiz, balki yuqori darajadagi xizmatdan bahramand bo'lasiz.
              </p>
              <div className="space-y-4">
                {['Keng assortiment', 'Doimiy aksiyalar', 'Qulay avtoturargoh', 'Professional xodimlar'].map((item) => (
                  <div key={item} className="flex items-center space-x-3">
                    <div className="w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center">
                      <ShieldCheck className="h-4 w-4 text-primary-600" />
                    </div>
                    <span className="font-medium text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <Link to="/about" className="inline-block px-10 py-4 bg-primary-600 text-white rounded-2xl font-bold hover:bg-primary-700 transition-all shadow-xl shadow-primary-100">
                Batafsil ma'lumot
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
