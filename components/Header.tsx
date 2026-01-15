import React, { useState, useEffect } from 'react';
import Logo from './Logo';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id.replace('#', ''));
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      setMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { name: 'Producción', href: '#services' },
    { name: 'Riders', href: '#packages' },
    { name: 'Social', href: '#gallery' },
    { name: 'Contacto', href: '#booking-form' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        isScrolled 
          ? 'bg-black/95 backdrop-blur-md py-3 border-white/10 shadow-2xl' 
          : 'bg-transparent py-6 border-transparent'
      }`}
    >
      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
        <a href="#" onClick={(e) => scrollToSection(e, 'root')} className="cursor-pointer">
          <Logo />
        </a>

        <nav className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={(e) => scrollToSection(e, link.href)}
              className="font-sync text-[9px] font-bold uppercase tracking-[0.2em] text-gray-300 hover:text-white transition-all duration-300 relative group"
            >
              {link.name}
              <span className="absolute -bottom-2 left-0 w-0 h-[1.5px] bg-violet-500 group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
          <a 
            href="#booking-form"
            onClick={(e) => scrollToSection(e, '#booking-form')}
            className="px-6 py-2.5 bg-violet-600/10 border border-violet-500/50 rounded-full font-sync text-[9px] font-black uppercase tracking-widest text-violet-300 hover:bg-violet-600 hover:text-white hover:border-violet-600 transition-all duration-300 shadow-[0_0_15px_rgba(139,92,246,0.1)]"
          >
            Cotizar
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <div className={`fixed inset-0 bg-black/98 backdrop-blur-3xl z-40 transition-transform duration-500 md:hidden flex flex-col items-center justify-center space-y-10 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <Logo className="mb-8 scale-150" />
        {navLinks.map((link) => (
          <a 
            key={link.name} 
            href={link.href} 
            onClick={(e) => scrollToSection(e, link.href)}
            className="font-syne text-3xl font-extrabold uppercase text-white hover:text-violet-500 transition-colors tracking-tighter"
          >
            {link.name}
          </a>
        ))}
        <button 
          onClick={(e) => scrollToSection(e, '#booking-form')}
          className="px-10 py-4 bg-violet-600 text-white rounded-full font-sync text-xs font-black uppercase tracking-widest"
        >
          Cotizar Ahora
        </button>
      </div>
    </header>
  );
};

export default Header;