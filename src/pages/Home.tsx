import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Calendar, MapPin, ChevronRight, Mic2, Users, HeartHandshake, BookOpen, Presentation, Quote } from 'lucide-react';
import { SITE_DATA } from '../data';
import { SEO } from '../components/SEO';

const iconMap: Record<string, any> = {
  Mic2,
  Users,
  HeartHandshake,
  BookOpen,
  Presentation
};

export const Home: React.FC = () => {
  return (
    <div className="overflow-hidden">
      <SEO 
        title="Ana Sayfa" 
        description="Yasir Alrawi - İlahiyatçı, Araştırmacı ve Vaiz. Dini hizmetler, akademik makaleler ve güncel duyurular."
        keywords="ilahiyat, vaaz, tefsir, hadis, dini danışmanlık, Yasir Alrawi"
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 pb-12 overflow-hidden bg-slate-900">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1519817650390-64a93db51149?auto=format&fit=crop&q=80&w=2000" 
            alt="Library Background"
            className="w-full h-full object-cover opacity-30"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/60 to-slate-900"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-3/5 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <span className="inline-block px-4 py-1.5 bg-primary/70 backdrop-blur-md text-white/80 text-xs font-bold tracking-[0.2em] uppercase rounded-full mb-6 border border-primary/30">
                  {SITE_DATA.title}
                </span>
                <h1 className="text-5xl md:text-7xl lg:text-8xl mb-8 text-white leading-[1.1]">
                  İlim ve İrfan <br />
                  <span className="text-primary italic">Yolunda</span> Bir Ömür
                </h1>
                <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
                  {SITE_DATA.about.short}
                </p>
                <div className="flex flex-wrap justify-center lg:justify-start gap-5">
                  <Link to="/hakkimda" className="btn-premium-primary group text-lg">
                    Hakkımda <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                  </Link>
                  <Link to="/iletisim" className="btn-premium-outline bg-transparent text-white border-white/20 hover:bg-white/10 text-lg">
                    İletişime Geç
                  </Link>
                </div>
              </motion.div>
            </div>
            
            <div className="lg:w-2/5 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="relative z-10"
              >
                <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)] border-[12px] border-white/5 backdrop-blur-sm">
                  <img 
                    src="https://res.cloudinary.com/dvx6nsrd9/image/upload/v1773341303/yasir-hocam_o9dmka.png" 
                    alt={SITE_DATA.name}
                    className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                {/* Floating Badge */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 hidden md:block"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                      <BookOpen size={24} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Akademik</p>
                      <p className="text-slate-900 font-serif font-bold">Tefsir Araştırmacısı</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-24 bg-beige relative">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <Quote className="mx-auto text-primary/20 mb-8" size={64} />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif italic text-slate-800 leading-snug mb-8">
              "İlim, amel ile taçlanmadıkça sahibine yük olur. Hakiki bilgi, kalbe inen ve hayatı güzelleştiren bilgidir."
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20">
            <div className="max-w-2xl">
              <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-4 block">NE YAPIYORUZ?</span>
              <h2 className="text-4xl md:text-5xl mb-6">Hizmet Alanlarımız</h2>
              <p className="text-slate-600 text-lg">Toplumun manevi ve ilmi ihtiyaçlarına yönelik profesyonel çözümler.</p>
            </div>
            <Link to="/hizmetler" className="btn-premium-outline mt-8 md:mt-0 group">
              Tüm Hizmetler <ChevronRight size={18} className="ml-1 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {SITE_DATA.services.slice(0, 3).map((service, idx) => {
              const Icon = iconMap[service.icon];
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.6 }}
                  className="card-premium group p-10"
                >
                  <div className="w-16 h-16 bg-slate-50 text-primary rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                    <Icon size={32} />
                  </div>
                  <h3 className="text-2xl mb-4 group-hover:text-primary transition-colors">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed mb-8">
                    {service.description}
                  </p>
                  <Link to="/hizmetler" className="inline-flex items-center text-primary font-bold group/link">
                    Detaylı İncele <ArrowRight size={18} className="ml-2 group-hover/link:translate-x-2 transition-transform" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="text-center mb-20">
            <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-4 block">BİLGİ PAYLAŞIMI</span>
            <h2 className="text-4xl md:text-5xl mb-6">Akademik Makaleler</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">Derinlemesine araştırmalar ve güncel dini meseleler üzerine kaleme alınmış yazılar.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {SITE_DATA.blog.map((post, idx) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="card-premium flex flex-col h-full"
              >
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img 
                    src={`https://picsum.photos/seed/blog-p-${post.id}/800/500`} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-primary text-[10px] font-bold uppercase tracking-widest rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 mb-4 text-xs text-slate-400 font-medium">
                    <span className="flex items-center gap-1"><Calendar size={14} /> {post.date}</span>
                  </div>
                  <h3 className="text-xl mb-4 leading-tight group-hover:text-primary transition-colors">{post.title}</h3>
                  <p className="text-slate-600 text-sm line-clamp-3 mb-8 flex-grow">
                    {post.excerpt}
                  </p>
                  <Link to="/blog" className="text-primary font-bold text-sm flex items-center group/btn">
                    Makaleyi Oku <ChevronRight size={16} className="ml-1 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-primary text-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { label: "Yıllık Tecrübe", value: "12+" },
              { label: "Yayınlanmış Makale", value: "45+" },
              { label: "Verilen Seminer", value: "120+" },
              { label: "Mezun Öğrenci", value: "500+" }
            ].map((stat, idx) => (
              <div key={idx}>
                <p className="text-4xl md:text-5xl font-serif font-bold mb-2">{stat.value}</p>
                <p className="text-primary-foreground/60 text-sm font-bold uppercase tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="bg-navy rounded-[3rem] p-12 md:p-24 text-center text-white shadow-2xl relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl mb-8 font-serif italic">Geleceği İlimle İnşa Edelim</h2>
              <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
                Dini eğitimler, akademik iş birlikleri veya bireysel danışmanlık talepleriniz için her zaman yanınızdayım.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <Link to="/iletisim" className="btn-premium bg-white text-navy hover:bg-slate-100 px-12 py-5 text-lg">
                  Hemen İletişime Geç
                </Link>
                <Link to="/duyurular" className="btn-premium border border-white/20 text-white hover:bg-white/10 px-12 py-5 text-lg">
                  Etkinlik Takvimi
                </Link>
              </div>
            </div>
            {/* Abstract Background Shapes */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
              <div className="absolute -top-24 -left-24 w-96 h-96 border-[40px] border-white rounded-full"></div>
              <div className="absolute -bottom-48 -right-48 w-[500px] h-[500px] border-[60px] border-white rounded-full"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
