import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Search, Calendar, User, ArrowRight, BookOpen, ChevronRight } from 'lucide-react';
import { SITE_DATA } from '../data';
import { SEO } from '../components/SEO';
import { Link } from 'react-router-dom';

export const Blog: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Hepsi');

  const categories = ['Hepsi', ...new Set(SITE_DATA.blog.map(post => post.category))];

  const filteredPosts = SITE_DATA.blog.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'Hepsi' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div>
      <SEO 
        title="Makaleler" 
        description="İslami ilimler, tefsir, fıkıh ve güncel dini meseleler üzerine akademik ve irşat odaklı makaleler."
      />

      {/* Header */}
      <section className="relative pt-40 pb-24 bg-navy overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=2000" 
            alt="Library"
            className="w-full h-full object-cover opacity-10"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/60 to-navy"></div>
        </div>
        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-white/60 font-bold tracking-[0.3em] uppercase text-xs mb-4 block">İLMİ ARAŞTIRMALAR</span>
            <h1 className="text-5xl md:text-7xl text-white mb-6">Makaleler</h1>
            <div className="w-24 h-1.5 bg-white/20 mx-auto rounded-full"></div>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Sidebar */}
            <aside className="lg:w-1/3 space-y-12 order-2 lg:order-1">
              {/* Search */}
              <div className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100">
                <h3 className="text-xl mb-6 font-serif italic">Arama Yap</h3>
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Makale ara..."
                    className="w-full pl-12 pr-4 py-4 bg-white border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                </div>
              </div>

              {/* Categories */}
              <div className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100">
                <h3 className="text-xl mb-6 font-serif italic">Kategoriler</h3>
                <div className="flex flex-col gap-2">
                  {categories.map(category => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`flex items-center justify-between px-6 py-4 rounded-2xl transition-all group ${
                        selectedCategory === category 
                        ? 'bg-primary text-white shadow-lg shadow-primary/20' 
                        : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                      }`}
                    >
                      <span className="font-medium">{category}</span>
                      <ChevronRight size={16} className={selectedCategory === category ? 'opacity-100' : 'opacity-0 group-hover:opacity-100 transition-opacity'} />
                    </button>
                  ))}
                </div>
              </div>

              {/* Newsletter */}
              <div className="bg-navy p-10 rounded-[2.5rem] text-white relative overflow-hidden">
                <div className="relative z-10">
                  <BookOpen className="text-primary mb-6" size={40} />
                  <h3 className="text-2xl mb-4 font-serif italic">İlmi Bülten</h3>
                  <p className="text-white/70 mb-8 font-light">Yeni makale ve duyurulardan haberdar olmak için bültenimize abone olun.</p>
                  <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                    <input 
                      type="email" 
                      placeholder="E-posta adresiniz"
                      className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/50 text-white placeholder:text-white/40"
                    />
                    <button className="w-full btn-premium-primary py-4">Abone Ol</button>
                  </form>
                </div>
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
              </div>
            </aside>

            {/* Main Content */}
            <div className="lg:w-2/3 order-1 lg:order-2">
              <div className="grid grid-cols-1 gap-12">
                {filteredPosts.length > 0 ? (
                  filteredPosts.map((post, idx) => (
                    <motion.article 
                      key={post.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="group bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 hover:border-primary/20 hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500"
                    >
                      <div className="flex flex-col md:flex-row">
                        <div className="md:w-2/5 relative overflow-hidden">
                          <img 
                            src={`https://picsum.photos/seed/blog-p-${post.id}/800/800`} 
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            referrerPolicy="no-referrer"
                          />
                          <div className="absolute top-6 left-6">
                            <span className="px-4 py-2 bg-white/90 backdrop-blur-sm text-primary rounded-full text-xs font-bold tracking-widest uppercase shadow-sm">
                              {post.category}
                            </span>
                          </div>
                        </div>
                        <div className="md:w-3/5 p-10 md:p-12 flex flex-col justify-center">
                          <div className="flex items-center gap-6 text-slate-400 text-xs font-bold tracking-widest uppercase mb-6">
                            <span className="flex items-center gap-2"><Calendar size={14} /> {post.date}</span>
                            <span className="flex items-center gap-2"><User size={14} /> {post.author}</span>
                          </div>
                          <h2 className="text-3xl mb-6 group-hover:text-primary transition-colors leading-tight">
                            <Link to={`/blog/${post.id}`}>{post.title}</Link>
                          </h2>
                          <p className="text-slate-600 mb-8 font-light leading-relaxed line-clamp-3">
                            {post.excerpt}
                          </p>
                          <Link to={`/blog/${post.id}`} className="inline-flex items-center text-primary font-bold tracking-widest uppercase text-xs group/link">
                            Devamını Oku <ArrowRight className="ml-2 group-hover/link:translate-x-2 transition-transform" size={16} />
                          </Link>
                        </div>
                      </div>
                    </motion.article>
                  ))
                ) : (
                  <div className="text-center py-20 bg-slate-50 rounded-[2.5rem] border border-dashed border-slate-200">
                    <Search className="mx-auto text-slate-300 mb-6" size={48} />
                    <h3 className="text-2xl text-slate-900 mb-2">Sonuç Bulunamadı</h3>
                    <p className="text-slate-500">Arama kriterlerinize uygun makale bulunmamaktadır.</p>
                  </div>
                )}
              </div>

              {/* Pagination Placeholder */}
              {filteredPosts.length > 0 && (
                <div className="mt-20 flex justify-center gap-4">
                  <button className="w-12 h-12 rounded-2xl bg-primary text-white flex items-center justify-center shadow-lg shadow-primary/20">1</button>
                  <button className="w-12 h-12 rounded-2xl bg-white text-slate-600 border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-colors">2</button>
                  <button className="w-12 h-12 rounded-2xl bg-white text-slate-600 border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-colors">3</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
