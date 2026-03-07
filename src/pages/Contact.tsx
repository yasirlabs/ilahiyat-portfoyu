import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, Globe } from 'lucide-react';
import { SITE_DATA } from '../data';
import { SEO } from '../components/SEO';

export const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Mesajınız başarıyla iletildi. En kısa sürede dönüş yapılacaktır.');
  };

  return (
    <div>
      <SEO 
        title="İletişim" 
        description="Yasir Alrawi ile iletişime geçin. Soru, görüş, randevu ve iş birliği talepleriniz için."
      />

      {/* Header */}
      <section className="relative pt-40 pb-24 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&q=80&w=2000" 
            alt="Contact"
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 to-slate-900"></div>
        </div>
        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-4 block">BİZE ULAŞIN</span>
            <h1 className="text-5xl md:text-7xl text-white mb-6">İletişim</h1>
            <div className="w-24 h-1.5 bg-primary mx-auto rounded-full"></div>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-20">
            {/* Contact Info */}
            <div className="lg:w-1/3 space-y-12">
              <div>
                <h2 className="text-4xl mb-8 leading-tight">İrtibat Bilgileri</h2>
                <p className="text-slate-600 text-lg font-light leading-relaxed mb-12">
                  Her türlü soru, görüş ve iş birliği talepleriniz için aşağıdaki kanallardan bize ulaşabilirsiniz.
                </p>
              </div>

              <div className="space-y-8">
                {[
                  { icon: Mail, label: "E-posta", value: SITE_DATA.email, link: `mailto:${SITE_DATA.email}` },
                  { icon: Phone, label: "Telefon", value: SITE_DATA.phone, link: `tel:${SITE_DATA.phone}` },
                  { icon: MapPin, label: "Adres", value: SITE_DATA.address, link: "#" },
                  { icon: Clock, label: "Çalışma Saatleri", value: "Hafta içi: 09:00 - 18:00", link: null }
                ].map((item, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start gap-6 group"
                  >
                    <div className="w-14 h-14 bg-slate-50 text-primary rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">{item.label}</p>
                      {item.link ? (
                        <a href={item.link} className="text-xl text-slate-900 hover:text-primary transition-colors font-medium">{item.value}</a>
                      ) : (
                        <p className="text-xl text-slate-900 font-medium">{item.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Map Placeholder */}
              <div className="aspect-square rounded-[2.5rem] overflow-hidden bg-slate-100 border border-slate-200 relative group">
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-slate-50/80 backdrop-blur-sm group-hover:bg-slate-50 transition-colors">
                  <Globe className="text-slate-300 mb-6" size={64} />
                  <h3 className="text-xl mb-2">Harita Görünümü</h3>
                  <p className="text-slate-500 text-sm">Google Maps entegrasyonu için API anahtarı gereklidir.</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:w-2/3">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-slate-50 p-10 md:p-16 rounded-[3rem] border border-slate-100 shadow-xl shadow-slate-200/50"
              >
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-2xl flex items-center justify-center">
                    <MessageSquare size={24} />
                  </div>
                  <h2 className="text-3xl font-serif italic">Mesaj Gönderin</h2>
                </div>

                <form className="space-y-8" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-4">Adınız Soyadınız</label>
                      <input 
                        type="text" 
                        required
                        placeholder="Örn: Yasir Alrawi"
                        className="w-full px-8 py-5 bg-white border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-4">E-posta Adresiniz</label>
                      <input 
                        type="email" 
                        required
                        placeholder="Örn: yasir@mail.com"
                        className="w-full px-8 py-5 bg-white border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-4">Konu</label>
                    <select className="w-full px-8 py-5 bg-white border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all appearance-none cursor-pointer">
                      <option>Genel Soru</option>
                      <option>Randevu Talebi</option>
                      <option>İş Birliği</option>
                      <option>Ders/Seminer Talebi</option>
                      <option>Diğer</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-4">Mesajınız</label>
                    <textarea 
                      rows={6} 
                      required
                      placeholder="Mesajınızı buraya yazın..."
                      className="w-full px-8 py-5 bg-white border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                    ></textarea>
                  </div>

                  <button type="submit" className="btn-premium-primary w-full py-6 text-lg group">
                    Mesajı Gönder <Send className="ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={20} />
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
