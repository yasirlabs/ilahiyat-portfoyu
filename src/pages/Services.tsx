import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Mic2, Users, HeartHandshake, BookOpen, Presentation, Clock, CheckCircle, ChevronRight, ArrowRight } from 'lucide-react';
import { SITE_DATA } from '../data';
import { SEO } from '../components/SEO';

const iconMap: Record<string, any> = {
  Mic2,
  Users,
  HeartHandshake,
  BookOpen,
  Presentation
};

export const Services: React.FC = () => {
  return (
    <div>
      <SEO 
        title="Hizmetler" 
        description="Vaaz, sohbet, dini danışmanlık, online dersler ve akademik seminer hizmetleri."
      />

      {/* Header */}
      <section className="relative pt-40 pb-24 bg-primary overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&q=80&w=2000" 
            alt="Education"
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
            <span className="text-white/60 font-bold tracking-[0.3em] uppercase text-xs mb-4 block">HİZMET & REHBERLİK</span>
            <h1 className="text-5xl md:text-7xl text-white mb-6">Hizmetlerimiz</h1>
            <div className="w-24 h-1.5 bg-white/20 mx-auto rounded-full"></div>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-32">
            {SITE_DATA.services.map((service, idx) => {
              const Icon = iconMap[service.icon];
              const isEven = idx % 2 === 0;
              
              return (
                <motion.div 
                  key={service.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-center`}
                >
                  <div className="lg:w-1/2 relative">
                    <div className="aspect-[16/10] rounded-[2.5rem] overflow-hidden shadow-2xl bg-slate-100 group">
                      <img 
                        src={`https://picsum.photos/seed/service-p-${service.id}/1200/750`} 
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    {/* Decorative element */}
                    <div className={`absolute -bottom-6 ${isEven ? '-right-6' : '-left-6'} w-32 h-32 bg-primary/5 rounded-full -z-10`}></div>
                  </div>
                  
                  <div className="lg:w-1/2">
                    <div className="inline-flex items-center gap-3 px-4 py-2 bg-slate-50 text-primary rounded-full text-xs font-bold tracking-widest uppercase mb-8 border border-slate-100">
                      <Icon size={16} />
                      <span>{service.title}</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl mb-8 leading-tight">{service.title}</h2>
                    <p className="text-xl text-slate-600 mb-10 leading-relaxed font-light">
                      {service.description}
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
                      <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                        <div className="flex items-center gap-3 mb-2">
                          <Clock className="text-primary" size={20} />
                          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Süre</span>
                        </div>
                        <p className="text-slate-900 font-semibold">{service.duration}</p>
                      </div>
                      <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                        <div className="flex items-center gap-3 mb-2">
                          <CheckCircle className="text-primary" size={20} />
                          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Kimler İçin</span>
                        </div>
                        <p className="text-slate-900 font-semibold">{service.suitableFor}</p>
                      </div>
                    </div>
                    
                    <Link to="/iletisim" className="btn-premium-primary group">
                      Bilgi Al & Randevu <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-slate-50 relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="text-center mb-24">
            <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-4 block">YOL HARİTASI</span>
            <h2 className="text-4xl md:text-5xl mb-6">Hizmet Sürecimiz</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">Sizinle tanışmamızdan hizmetin tamamlanmasına kadar geçen şeffaf süreç.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {[
              { step: "01", title: "İlk Temas", desc: "İhtiyaçlarınızı anlamak için form veya telefon üzerinden iletişime geçiyoruz." },
              { step: "02", title: "Program Tasarımı", desc: "Size veya kurumunuza özel, akademik derinliği olan bir içerik planlıyoruz." },
              { step: "03", title: "Zamanlama", desc: "Online veya yüz yüze görüşme takvimini karşılıklı olarak netleştiriyoruz." },
              { step: "04", title: "Gerçekleştirme", desc: "Belirlenen programı samimi, rasyonel ve irşat odaklı bir dille sunuyoruz." }
            ].map((item, idx) => (
              <div key={idx} className="relative group">
                <div className="text-8xl font-serif font-bold text-slate-100 absolute -top-12 -left-4 -z-10 group-hover:text-primary/5 transition-colors duration-500">{item.step}</div>
                <div className="pt-8">
                  <h3 className="text-2xl mb-4 font-serif italic">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed font-light">{item.desc}</p>
                </div>
                {idx < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-6 text-slate-200">
                    <ChevronRight size={32} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ CTA */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="bg-beige p-12 md:p-20 rounded-[3rem] flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-2/3">
              <h2 className="text-3xl md:text-4xl mb-6">Özel Bir Program mı Düşünüyorsunuz?</h2>
              <p className="text-xl text-slate-600 font-light leading-relaxed">
                Kurumunuz, vakfınız veya grubunuz için özel temalı seminer ve ders programları tasarlayabiliriz. Detayları görüşmek için bize ulaşın.
              </p>
            </div>
            <Link to="/iletisim" className="btn-premium-navy whitespace-nowrap px-12 py-5 text-lg">
              Teklif Alın
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
