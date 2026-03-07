import React from 'react';
import { motion } from 'motion/react';
import { Calendar, MapPin, Clock, ArrowRight, Bell, History } from 'lucide-react';
import { SITE_DATA } from '../data';
import { SEO } from '../components/SEO';

export const Announcements: React.FC = () => {
  return (
    <div>
      <SEO 
        title="Duyurular" 
        description="Yaklaşan dersler, sohbetler, seminerler ve etkinlikler hakkında güncel bilgiler."
      />

      {/* Header */}
      <section className="relative pt-40 pb-24 bg-primary overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=2000" 
            alt="Events"
            className="w-full h-full object-cover opacity-10"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/60 to-primary"></div>
        </div>
        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-white/60 font-bold tracking-[0.3em] uppercase text-xs mb-4 block">GÜNCEL ETKİNLİKLER</span>
            <h1 className="text-5xl md:text-7xl text-white mb-6">Duyurular</h1>
            <div className="w-24 h-1.5 bg-white/20 mx-auto rounded-full"></div>
          </motion.div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="flex items-center gap-4 mb-16">
            <div className="w-12 h-12 bg-primary/5 text-primary rounded-2xl flex items-center justify-center">
              <Bell size={24} />
            </div>
            <h2 className="text-3xl md:text-4xl">Yaklaşan Etkinlikler</h2>
          </div>

          <div className="grid grid-cols-1 gap-12">
            {SITE_DATA.announcements.map((item, idx) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group bg-white rounded-[3rem] overflow-hidden border border-slate-100 hover:border-primary/20 hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500"
              >
                <div className="flex flex-col lg:flex-row">
                  <div className="lg:w-1/4 bg-slate-50 p-10 flex flex-col items-center justify-center text-center border-r border-slate-100 group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                    <div className="text-5xl font-serif font-bold mb-2">{item.date.split(' ')[0]}</div>
                    <div className="text-lg font-bold tracking-widest uppercase opacity-60">{item.date.split(' ')[1]}</div>
                    <div className="mt-6 w-12 h-1 bg-primary group-hover:bg-white/30 rounded-full"></div>
                  </div>
                  <div className="lg:w-3/4 p-10 md:p-12 flex flex-col md:flex-row items-center justify-between gap-12">
                    <div className="flex-1">
                      <h3 className="text-3xl mb-6 group-hover:text-primary transition-colors leading-tight">{item.title}</h3>
                      <div className="flex flex-wrap gap-8 text-slate-500">
                        <span className="flex items-center gap-3 font-medium">
                          <Clock size={20} className="text-primary group-hover:text-primary transition-colors" /> {item.time}
                        </span>
                        <span className="flex items-center gap-3 font-medium">
                          <MapPin size={20} className="text-primary group-hover:text-primary transition-colors" /> {item.location}
                        </span>
                      </div>
                    </div>
                    <button className="btn-premium-primary whitespace-nowrap px-10 py-4 group/btn">
                      Detaylar & Kayıt <ArrowRight className="ml-2 group-hover/btn:translate-x-1 transition-transform" size={18} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events Placeholder */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="flex items-center gap-4 mb-16">
            <div className="w-12 h-12 bg-slate-200 text-slate-500 rounded-2xl flex items-center justify-center">
              <History size={24} />
            </div>
            <h2 className="text-3xl md:text-4xl text-slate-500">Geçmiş Etkinlikler</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 opacity-60 grayscale">
            {[
              { title: "Tefsir Okumaları: Bakara Suresi", date: "15 Ocak 2024", location: "Kültür Merkezi" },
              { title: "İslam ve Modernite Paneli", date: "10 Aralık 2023", location: "Üniversite Konferans Salonu" }
            ].map((event, idx) => (
              <div key={idx} className="bg-white p-10 rounded-[2.5rem] border border-slate-200">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">{event.date}</div>
                <h3 className="text-2xl mb-4">{event.title}</h3>
                <p className="text-slate-500 flex items-center gap-2"><MapPin size={16} /> {event.location}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <button className="text-slate-400 font-bold tracking-widest uppercase text-xs hover:text-primary transition-colors">
              Tüm Geçmiş Etkinlikleri Gör
            </button>
          </div>
        </div>
      </section>

      {/* Subscription CTA */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="bg-navy p-12 md:p-20 rounded-[3rem] text-center text-white relative overflow-hidden">
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl mb-8 font-serif italic">Hiçbir Etkinliği Kaçırmayın</h2>
              <p className="text-xl text-white/70 mb-12 font-light leading-relaxed">
                Yeni dersler, seminerler ve duyurular yayınlandığında anında haberdar olmak için bildirim listemize katılın.
              </p>
              <form className="flex flex-col md:flex-row gap-4 max-w-xl mx-auto" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="E-posta adresiniz"
                  className="flex-1 px-8 py-5 bg-white/10 border border-white/20 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/50 text-white placeholder:text-white/40"
                />
                <button className="btn-premium-primary px-10 py-5">Abone Ol</button>
              </form>
            </div>
            {/* Decorative circles */}
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </section>
    </div>
  );
};
