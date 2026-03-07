import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Target, Eye, CheckCircle2, Award, BookOpen } from 'lucide-react';
import { SITE_DATA } from '../data';
import { SEO } from '../components/SEO';

export const About: React.FC = () => {
  return (
    <div>
      <SEO 
        title="Hakkımda" 
        description="Yasir Alrawi'nin biyografisi, eğitimi, uzmanlık alanları, misyon ve vizyonu."
      />

      {/* Header */}
      <section className="relative pt-40 pb-24 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80&w=2000" 
            alt="Library"
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
            <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-4 block">BİRİKİM & TECRÜBE</span>
            <h1 className="text-5xl md:text-7xl text-white mb-6">Hakkımda</h1>
            <div className="w-24 h-1.5 bg-primary mx-auto rounded-full"></div>
          </motion.div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-2/5 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative z-10"
              >
                <div className="aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-2xl border-[12px] border-slate-50">
                  <img 
                    src="https://picsum.photos/seed/scholar-bio-p/800/1000" 
                    alt={SITE_DATA.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-beige rounded-full -z-10"></div>
              </motion.div>
            </div>
            <div className="lg:w-3/5">
              <h2 className="text-4xl md:text-5xl mb-8">İlmi Bir Yolculuk</h2>
              <div className="prose prose-slate prose-lg max-w-none text-slate-600 leading-relaxed space-y-6 font-light">
                <p>{SITE_DATA.about.bio}</p>
                <p>
                  Akademik çalışmalarımda temel prensibim, "hikmet müminin yitik malıdır" düsturuyla hareket ederek, sahih dini bilgiyi modern dünyanın ihtiyaç duyduğu rasyonel ve ahlaki çerçevede sunmaktır. 
                  Tefsir anabilim dalındaki uzmanlığımı, toplumsal rehberlik ve irşat faaliyetleriyle birleştirerek bütüncül bir hizmet anlayışı benimsiyorum.
                </p>
              </div>

              <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-2xl mb-8 flex items-center text-primary font-serif italic">
                    <GraduationCap className="mr-4 text-primary" size={32} /> Eğitim Hayatı
                  </h3>
                  <div className="space-y-8">
                    {SITE_DATA.about.education.map((edu, idx) => (
                      <div key={idx} className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-primary/20">
                        <div className="absolute left-[-4px] top-0 w-2 h-2 rounded-full bg-primary"></div>
                        <h4 className="font-bold text-slate-900 text-lg">{edu.degree}</h4>
                        <p className="text-slate-600">{edu.school}</p>
                        <p className="text-sm text-primary font-bold mt-2">{edu.year}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <h3 className="text-2xl mb-8 flex items-center text-primary font-serif italic">
                    <Award className="mr-4 text-primary" size={32} /> Uzmanlıklar
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {SITE_DATA.about.expertise.map((exp, idx) => (
                      <div key={idx} className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
                        <CheckCircle2 className="text-primary" size={18} />
                        <span className="text-slate-700 font-medium">{exp}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-beige relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-12 md:p-16 rounded-[3rem] shadow-xl border border-white/50"
            >
              <div className="w-20 h-20 bg-primary/5 text-primary rounded-3xl flex items-center justify-center mb-10">
                <Target size={40} />
              </div>
              <h2 className="text-3xl md:text-4xl mb-6 font-serif italic">Misyonumuz</h2>
              <p className="text-xl text-slate-600 leading-relaxed font-light">
                {SITE_DATA.about.mission}
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-primary p-12 md:p-16 rounded-[3rem] shadow-xl text-white"
            >
              <div className="w-20 h-20 bg-white/10 text-white rounded-3xl flex items-center justify-center mb-10">
                <Eye size={40} />
              </div>
              <h2 className="text-3xl md:text-4xl mb-6 font-serif italic">Vizyonumuz</h2>
              <p className="text-xl text-primary-foreground/80 leading-relaxed font-light">
                {SITE_DATA.about.vision}
              </p>
            </motion.div>
          </div>
        </div>
        
        {/* Decorative Background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none opacity-[0.03]">
          <BookOpen size={800} className="mx-auto" />
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl mb-6">Temel Değerlerimiz</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">Hizmet anlayışımızın temelini oluşturan sarsılmaz prensiplerimiz.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "Sahih Bilgi", desc: "Kur'an ve Sünnet eksenli, hurafe ve aşırılıktan uzak, delile dayalı bilgi üretimi." },
              { title: "Akademik Titizlik", desc: "Bilimsel yöntemlere sadık, eleştirel düşünceyi önemseyen araştırmacı yaklaşım." },
              { title: "Toplumsal Fayda", desc: "Bilginin sadece teoride kalmadığı, hayatın içine dokunan ve çözüm üreten bir anlayış." }
            ].map((value, idx) => (
              <div key={idx} className="text-center group">
                <div className="w-1 bg-primary/20 h-12 mx-auto mb-8 group-hover:h-16 group-hover:bg-primary transition-all duration-500"></div>
                <h3 className="text-2xl mb-4">{value.title}</h3>
                <p className="text-slate-600 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
