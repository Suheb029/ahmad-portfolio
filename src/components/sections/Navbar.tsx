import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles } from 'lucide-react';
import { Button } from '../ui/Button';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/85 backdrop-blur-md border-b border-slate-200/80 shadow-sm shadow-slate-900/5 py-3.5'
          : 'bg-white/40 backdrop-blur-sm py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-primary to-accent flex items-center justify-center text-white font-bold shadow-md shadow-primary/25 group-hover:scale-105 transition-transform">
            A
          </div>
          <span className="text-xl font-bold tracking-tight text-textPrimary group-hover:text-primary transition-colors">
            AHMAD<span className="text-primary">.</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-1 bg-slate-100/80 p-1.5 rounded-2xl border border-slate-200/70">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setActiveLink(link.href)}
                  className={`relative px-4 py-2 text-sm font-medium rounded-xl transition-all duration-200 ${
                    activeLink === link.href
                      ? 'text-primary font-semibold'
                      : 'text-textSecondary hover:text-textPrimary hover:bg-white/60'
                  }`}
                >
                  {link.name}
                  {activeLink === link.href && (
                    <motion.div
                      layoutId="navPill"
                      className="absolute inset-0 bg-white rounded-xl shadow-xs -z-10 border border-slate-200/60"
                      transition={{ type: 'spring', stiffness: 450, damping: 30 }}
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>
          
          <Button
            variant="primary"
            size="sm"
            className="gap-1.5 shadow-md shadow-primary/20"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Sparkles size={15} />
            Hire Me
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 rounded-xl text-textPrimary hover:bg-slate-100 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-xl overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => {
                    setActiveLink(link.href);
                    setMobileMenuOpen(false);
                  }}
                  className={`text-base font-medium px-4 py-2.5 rounded-xl transition-colors ${
                    activeLink === link.href
                      ? 'bg-primary/10 text-primary font-semibold'
                      : 'text-textSecondary hover:bg-slate-50 hover:text-textPrimary'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <Button
                variant="primary"
                className="w-full mt-2 gap-2"
                onClick={() => {
                  setMobileMenuOpen(false);
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <Sparkles size={16} /> Hire Me
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
