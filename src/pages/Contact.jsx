import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Send, Clock, MapPin, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-5xl font-display font-extrabold text-gray-900 mb-8 leading-tight">
              Biz bilan <span className="text-primary-600">bog‘laning</span>
            </h1>
            <p className="text-lg text-gray-600 mb-12">
              Savollaringiz bormi? Bizga qo'ng’iroq qiling yoki Telegram orqali yozing. Biz har doim yordam berishga tayyormiz.
            </p>

            <div className="space-y-6">
              {[
                { icon: <Phone className="h-6 w-6" />, label: 'Telefon', value: '+998 (90) 123-45-67', color: 'bg-green-50 text-green-600' },
                { icon: <Send className="h-6 w-6" />, label: 'Telegram', value: '@mojiza_savdo_markazi', color: 'bg-blue-50 text-blue-600' },
                { icon: <Clock className="h-6 w-6" />, label: 'Ish vaqti', value: 'Dush-Yak: 08:00 - 22:00', color: 'bg-purple-50 text-purple-600' },
                { icon: <MapPin className="h-6 w-6" />, label: 'Manzil', value: 'Paxtaobod tumani, Markaziy ko\'cha, 1-uy', color: 'bg-orange-50 text-orange-600' },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center space-x-6 p-6 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className={`${item.color} p-4 rounded-2xl`}>
                    {item.icon}
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">{item.label}</span>
                    <span className="text-xl font-bold text-gray-900">{item.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form or Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-primary-900 rounded-[3rem] p-10 lg:p-16 text-white relative overflow-hidden flex flex-col justify-center"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-600 rounded-full blur-[100px] opacity-20 -mr-32 -mt-32" />
            <h2 className="text-3xl font-bold mb-6">Xabar qoldiring</h2>
            <form className="space-y-6 relative z-10">
              <div>
                <label className="block text-sm font-medium mb-2 opacity-70">Ismingiz</label>
                <input type="text" className="w-full bg-white/10 border border-white/20 rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-primary-500 transition-all" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 opacity-70">Xabaringiz</label>
                <textarea rows="4" className="w-full bg-white/10 border border-white/20 rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-primary-500 transition-all"></textarea>
              </div>
              <button className="w-full bg-white text-primary-900 font-bold py-4 rounded-2xl hover:bg-gray-100 transition-all shadow-xl">
                Yuborish
              </button>
            </form>
          </motion.div>
        </div>

        {/* Map Section */}
        <div id="location" className="w-full h-[500px] rounded-[3rem] overflow-hidden shadow-2xl relative">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11364.639330617326!2d72.48318852656247!3d40.92388000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bc938e2d4f243b%3A0x63351d1844579c0!2sPakhtaabad%2C%20Andijan%20Region%2C%20Uzbekistan!5e0!3m2!1sen!2s!4v1712952000000!5m2!1sen!2s" 
            className="absolute inset-0 w-full h-full border-0"
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

      </div>
    </div>
  );
};

export default Contact;
