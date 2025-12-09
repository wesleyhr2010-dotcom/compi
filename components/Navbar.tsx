import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

interface NavbarProps {
  onNavigate: (page: 'home' | 'properties') => void;
  currentPage: 'home' | 'properties';
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPage }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // If we are not on home, the navbar should always look "scrolled" (solid background)
  const isSolid = currentPage !== 'home';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determine text color based on state
  const textColor = scrolled || isSolid ? 'text-brand-900' : 'text-white';
  const bgColor = scrolled || isSolid ? 'bg-white/95 backdrop-blur-sm border-gray-100 shadow-sm' : 'bg-transparent border-transparent';
  const logoBg = scrolled || isSolid ? 'bg-brand-900' : 'bg-white';

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 border-b ${bgColor} ${scrolled || isSolid ? 'py-3' : 'py-6'}`}
    >
      <div className="container mx-auto px-4 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <button onClick={() => onNavigate('home')} className="flex items-center gap-2 group">
           <div className={`w-8 h-8 ${logoBg} rounded-tr-xl rounded-bl-xl transition-colors`} />
           <span className={`font-serif text-2xl font-bold tracking-tight ${textColor}`}>
            Compiere
           </span>
        </button>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          <button 
            onClick={() => onNavigate('properties')}
            className={`text-sm font-medium tracking-wide hover:text-brand-accent transition-colors ${textColor} ${currentPage === 'properties' ? 'text-brand-accent' : ''}`}
          >
            Propriedades
          </button>
          <button className={`text-sm font-medium tracking-wide hover:text-brand-accent transition-colors ${textColor}`}>
            Investimentos
          </button>
          <button className={`text-sm font-medium tracking-wide hover:text-brand-accent transition-colors ${textColor}`}>
            Sobre
          </button>
          <button className={`text-sm font-medium tracking-wide hover:text-brand-accent transition-colors ${textColor}`}>
            Contato
          </button>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
             scrolled || isSolid
              ? 'bg-brand-900 text-white hover:bg-brand-800' 
              : 'bg-white text-brand-900 hover:bg-gray-100'
          }`}>
            <Phone className="w-4 h-4" />
            <span>Fale Conosco</span>
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen 
            ? <X className={textColor} /> 
            : <Menu className={textColor} />
          }
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-gray-100 p-4 flex flex-col gap-4 shadow-xl md:hidden">
          <button onClick={() => { onNavigate('properties'); setMobileMenuOpen(false); }} className="text-gray-800 font-medium py-2 px-4 hover:bg-gray-50 rounded-lg text-left">
            Propriedades
          </button>
          <button className="text-gray-800 font-medium py-2 px-4 hover:bg-gray-50 rounded-lg text-left">
            Investimentos
          </button>
          <button className="text-gray-800 font-medium py-2 px-4 hover:bg-gray-50 rounded-lg text-left">
            Sobre
          </button>
          <button className="text-gray-800 font-medium py-2 px-4 hover:bg-gray-50 rounded-lg text-left">
            Contato
          </button>
          <button className="w-full bg-brand-900 text-white py-3 rounded-lg font-medium mt-2">
            Fale Conosco
          </button>
        </div>
      )}
    </header>
  );
};