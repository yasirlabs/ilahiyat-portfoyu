import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const navLinks = [
  { name: 'Ana Sayfa', path: '/' },
  { name: 'Hakkımda', path: '/hakkimda' },
  { name: 'Hizmetler', path: '/hizmetler' },
  { name: 'Blog', path: '/blog' },
  { name: 'Duyurular', path: '/duyurular' },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = location.pathname === '/';

  return (
    <nav className={cn(
      "glass-nav",
      scrolled ? "glass-nav-scrolled" : "glass-nav-transparent"
    )}>
      <div className="container-custom">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className={cn(
                "w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300",
                scrolled ? "bg-primary text-white" : "bg-white/20 backdrop-blur-sm text-white"
              )}>
                <img className="p-2" src="src/public/images/logo.png" alt="Logo" />
              </div>
              <span className={cn(
                "text-xl font-serif font-bold transition-colors duration-300",
                scrolled || !isHome ? "text-slate-900" : "text-white"
              )}>
                Yasir Alrawi
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-sm font-semibold transition-all duration-300 hover:opacity-70",
                  scrolled || !isHome 
                    ? (location.pathname === link.path ? "text-primary" : "text-slate-600")
                    : (location.pathname === link.path ? "text-white underline underline-offset-8" : "text-white/80")
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/iletisim" 
              className={cn(
                "btn-premium-primary px-6 py-2.5",
                !scrolled && isHome && "bg-white text-primary hover:bg-white/90"
              )}
            >
              İletişime Geç
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={cn(
                "p-2 rounded-lg transition-colors",
                scrolled || !isHome ? "text-slate-600 hover:bg-slate-100" : "text-white hover:bg-white/10"
              )}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t border-slate-100 overflow-hidden"
          >
            <div className="px-6 py-8 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "block text-lg font-medium transition-colors",
                    location.pathname === link.path ? "text-primary" : "text-slate-600"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4">
                <Link
                  to="/iletisim"
                  onClick={() => setIsOpen(false)}
                  className="btn-premium-primary w-full"
                >
                  İletişime Geç
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
