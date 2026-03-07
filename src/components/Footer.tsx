import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Twitter, Facebook, Instagram, Youtube, BookOpen } from 'lucide-react';
import { SITE_DATA } from '../data';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <img className="w-10" src="src/public/images/logo.png" alt="Logo" />
              <span className="text-xl font-serif font-bold text-white">Yasir Alrawi</span>
            </Link>
            <p className="text-sm leading-relaxed mb-6">
              İslami ilimler ve akademik araştırmalar ışığında sahih bilgiyi toplumla buluşturma gayesiyle.
            </p>
            <div className="flex space-x-4">
              <a href={SITE_DATA.social.twitter} className="hover:text-white transition-colors"><Twitter size={20} /></a>
              <a href={SITE_DATA.social.facebook} className="hover:text-white transition-colors"><Facebook size={20} /></a>
              <a href={SITE_DATA.social.instagram} className="hover:text-white transition-colors"><Instagram size={20} /></a>
              <a href={SITE_DATA.social.youtube} className="hover:text-white transition-colors"><Youtube size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-serif font-bold mb-6">Hızlı Menü</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/" className="hover:text-white transition-colors">Ana Sayfa</Link></li>
              <li><Link to="/hakkimda" className="hover:text-white transition-colors">Hakkımda</Link></li>
              <li><Link to="/hizmetler" className="hover:text-white transition-colors">Hizmetler</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors">Makaleler</Link></li>
              <li><Link to="/duyurular" className="hover:text-white transition-colors">Duyurular</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-serif font-bold mb-6">Hizmetler</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/hizmetler" className="hover:text-white transition-colors">Vaaz & İrşat</Link></li>
              <li><Link to="/hizmetler" className="hover:text-white transition-colors">Dini Sohbetler</Link></li>
              <li><Link to="/hizmetler" className="hover:text-white transition-colors">İslami Eğitimler</Link></li>
              <li><Link to="/hizmetler" className="hover:text-white transition-colors">Dini Danışmanlık</Link></li>
              <li><Link to="/hizmetler" className="hover:text-white transition-colors">Akademik Seminerler</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-serif font-bold mb-6">İletişim</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <Mail size={18} className="mt-0.5" />
                <span>{SITE_DATA.email}</span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone size={18} className="mt-0.5" />
                <span>{SITE_DATA.phone}</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="mt-0.5" />
                <span>{SITE_DATA.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
          <p>© {new Date().getFullYear()} Yasir Alrawi. Tüm Hakları Saklıdır.</p>
          <p className="mt-4 md:mt-0">Tasarım & Geliştirme: Profesyonel İlahiyatçı Portfolyosu</p>
        </div>
      </div>
    </footer>
  );
};
