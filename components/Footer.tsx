import React from 'react';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const CompiereLogoFooter = () => (
  <div className="flex items-center gap-3 text-brand-900">
    <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
      <path d="M10 90H90" stroke="currentColor" strokeWidth="6" strokeLinecap="square"/>
      <path d="M10 90V40" stroke="currentColor" strokeWidth="6" strokeLinecap="square"/>
      <path d="M30 50V20H80V60H50" stroke="currentColor" strokeWidth="6" strokeLinecap="square"/>
    </svg>
    <div className="flex flex-col justify-center">
      <span className="font-sans text-xl font-medium tracking-wide leading-none">
        COMPIERE
      </span>
      <span className="font-sans text-[0.6rem] tracking-[0.15em] font-normal leading-tight opacity-90 mt-1">
        DESARROLLOS INMOBILIARIOS
      </span>
    </div>
  </div>
);

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 pt-20 pb-10 border-t border-gray-200">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="space-y-6">
            <CompiereLogoFooter />
            <p className="text-gray-500 text-sm leading-relaxed mt-4">
              Transformando sonhos em patrimônio sólido. A sua parceira de confiança no mercado imobiliário paraguaio.
            </p>
            <div className="flex gap-4">
                {[Instagram, Facebook, Linkedin].map((Icon, i) => (
                    <a key={i} href="#" className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-brand-900 hover:text-white hover:border-brand-900 transition-all">
                        <Icon className="w-4 h-4" />
                    </a>
                ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-brand-900 mb-6">Propriedades</h4>
            <ul className="space-y-4 text-sm text-gray-500">
                {['Residenciais', 'Comerciais', 'Industriais', 'Terrenos', 'Novos Lançamentos'].map(item => (
                    <li key={item}><a href="#" className="hover:text-brand-accent transition-colors">{item}</a></li>
                ))}
            </ul>
          </div>

          {/* Institutional */}
          <div>
            <h4 className="font-bold text-brand-900 mb-6">Institucional</h4>
            <ul className="space-y-4 text-sm text-gray-500">
                {['Sobre Nós', 'Nossa Equipe', 'Investidores', 'Trabalhe Conosco', 'Blog'].map(item => (
                    <li key={item}><a href="#" className="hover:text-brand-accent transition-colors">{item}</a></li>
                ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-brand-900 mb-6">Contato</h4>
            <ul className="space-y-4 text-sm text-gray-500">
                <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-brand-accent shrink-0" />
                    <span>Av. Principal, 1234, Ciudad del Este, Paraguay</span>
                </li>
                <li className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-brand-accent shrink-0" />
                    <span>+595 983 000 000</span>
                </li>
                <li className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-brand-accent shrink-0" />
                    <span>contato@compiere.com</span>
                </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} Compiere Imobiliária. Todos os direitos reservados.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
                <a href="#" className="hover:text-brand-900">Termos</a>
                <a href="#" className="hover:text-brand-900">Privacidade</a>
            </div>
        </div>
      </div>
    </footer>
  );
};