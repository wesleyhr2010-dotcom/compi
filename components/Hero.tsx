import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, ChevronDown, MapPin, Building2, Wallet } from 'lucide-react';
import { LOCATIONS, PROPERTY_TYPES } from '../constants';

interface HeroProps {
    onSearch: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onSearch }) => {
  const [activeTab, setActiveTab] = useState<'comprar' | 'alugar'>('comprar');

  return (
    <div className="relative min-h-[90vh] flex flex-col justify-center items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80" 
          alt="Luxury Real Estate" 
          className="w-full h-full object-cover"
        />
        {/* Modern Overlay: Gradient for text legibility + slight dark tint */}
        <div className="absolute inset-0 bg-brand-900/40 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-900/80 via-transparent to-transparent" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 pt-20">
        <div className="max-w-4xl mx-auto text-center text-white mb-12">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-medium tracking-widest uppercase mb-6"
          >
            Imobiliária de Alto Padrão
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl md:text-6xl lg:text-7xl font-serif font-medium leading-tight mb-6"
          >
            Encontre o imóvel que <br/>
            <span className="italic">define seu legado.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-lg text-gray-200 font-light max-w-2xl mx-auto"
          >
            Especialistas em propriedades residenciais, comerciais e industriais no Paraguai. 
            Segurança jurídica e excelência em cada negociação.
          </motion.p>
        </div>

        {/* Search Component - Floating Panel */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          {/* Tabs */}
          <div className="flex justify-center mb-4 gap-4">
            {['comprar', 'alugar'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as any)}
                className={`px-8 py-2 rounded-full backdrop-blur-md transition-all duration-300 border ${
                  activeTab === tab 
                    ? 'bg-white text-brand-900 border-white font-semibold' 
                    : 'bg-black/30 text-white border-white/10 hover:bg-black/40'
                } capitalize`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Filter Bar */}
          <div className="bg-white rounded-2xl p-4 shadow-2xl md:grid md:grid-cols-4 gap-4 items-center">
            
            {/* Location Input */}
            <div className="relative p-2 md:border-r border-gray-100">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1 block flex items-center gap-1">
                <MapPin className="w-3 h-3" /> Localização
              </label>
              <div className="relative">
                <select className="w-full bg-transparent font-medium text-gray-800 outline-none appearance-none cursor-pointer py-1">
                  <option value="">Todas as Cidades</option>
                  {LOCATIONS.map(loc => <option key={loc} value={loc}>{loc}</option>)}
                </select>
                <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>
            </div>

            {/* Type Input */}
            <div className="relative p-2 md:border-r border-gray-100">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1 block flex items-center gap-1">
                <Building2 className="w-3 h-3" /> Tipo
              </label>
              <div className="relative">
                <select className="w-full bg-transparent font-medium text-gray-800 outline-none appearance-none cursor-pointer py-1">
                  <option value="">Todos os Tipos</option>
                  {PROPERTY_TYPES.map(type => <option key={type} value={type}>{type}</option>)}
                </select>
                <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>
            </div>

            {/* Price Input */}
            <div className="relative p-2">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1 block flex items-center gap-1">
                <Wallet className="w-3 h-3" /> Faixa de Preço
              </label>
              <div className="relative">
                <select className="w-full bg-transparent font-medium text-gray-800 outline-none appearance-none cursor-pointer py-1">
                  <option value="">Qualquer Valor</option>
                  <option value="low">Até $100k</option>
                  <option value="mid">$100k - $500k</option>
                  <option value="high">$500k+</option>
                </select>
                <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>
            </div>

            {/* Search Button */}
            <div className="mt-4 md:mt-0">
              <button 
                onClick={onSearch}
                className="w-full bg-brand-900 hover:bg-brand-800 text-white font-medium h-14 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-brand-900/20 active:scale-95"
              >
                <Search className="w-5 h-5" />
                <span>Buscar Imóveis</span>
              </button>
            </div>

          </div>
        </motion.div>
      </div>
    </div>
  );
};