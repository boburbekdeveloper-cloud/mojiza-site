import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, History, Award } from 'lucide-react';

const stats = [
  { label: 'Yil Tajriba', value: '15+' },
  { label: 'Xodimlar', value: '100+' },
  { label: 'Mahsulotlar', value: '50,000+' },
  { label: 'Kunlik Mehmonlar', value: '5k+' },
];

const About = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h1 className="text-5xl font-display font-extrabold text-gray-900 mb-8 leading-tight">
              Bizning <span className="text-primary-600">tariximiz</span> va maqsadimiz
            </h1>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              "Mojiza Savdo Markazi" 2010-yilda Paxtaobod tumanida o'z faoliyatini boshlagan. O'tgan yillar davomida biz tuman aholisining ishonchini qozonib, eng yirik savdo majmuasiga aylandik.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Bizning bosh maqsadimiz — aholi uchun sifatli mahsulotlarni bir joyda, eng qulay sharoitlarda va hamyonbop narxlarda taqdim etishdir. Biz doimo rivojlanishda va yangiliklar kiritishda davom etamiz.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-gray-50 p-6 rounded-[2rem] border border-gray-100">
                  <span className="block text-3xl font-display font-extrabold text-primary-600 mb-1">{stat.value}</span>
                  <span className="text-sm font-bold text-gray-500 uppercase tracking-tighter">{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl relative z-10">
              <img src="/hero.png" alt="History" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-accent-gold/20 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>

        {/* Mission/Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: <Target className="h-8 w-8 text-primary-600" />, title: 'Maqsad', desc: 'Mijozlarga eng yaxshi tajribani taqdim etish.' },
            { icon: <Users className="h-8 w-8 text-primary-600" />, title: 'Jamoa', desc: 'Professional va samimiy xizmat ko’rsatuvchi xodimlar.' },
            { icon: <History className="h-8 w-8 text-primary-600" />, title: 'An’ana', desc: 'Yillar davomida shakllangan ishonch va sifat.' },
            { icon: <Award className="h-8 w-8 text-primary-600" />, title: 'Sifat', desc: 'Faqat sertifikatlangan va ishonchli mahsulotlar.' },
          ].map((item, idx) => (
            <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all border border-gray-50"
            >
              <div className="bg-primary-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
              <p className="text-gray-500 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
