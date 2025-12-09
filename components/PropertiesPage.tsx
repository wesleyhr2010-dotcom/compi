import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Filter, ChevronDown, MapPin, Search } from 'lucide-react';
import { PROPERTIES, LOCATIONS, PROPERTY_TYPES } from '../constants';
import { PropertyCard } from './PropertyCard';
import { Property } from '../types';

interface PropertiesPageProps {
  onPropertySelect: (id: string) => void;
}

export const PropertiesPage: React.FC<PropertiesPageProps> = ({ onPropertySelect }) => {
  const [filters, setFilters] = useState({
    location: '',
    type: '',
    priceRange: ''
  });
  
  const [filteredProperties, setFilteredProperties] = useState<Property[]>(PROPERTIES);
  const [loading, setLoading] = useState(true);

  // Simulate loading state for smoother UX transition
  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => setLoading(false), 500);
  }, []);

  // Filter Logic
  useEffect(() => {
    let result = PROPERTIES;

    if (filters.location) {
      result = result.filter(p => p.location.includes(filters.location) || p.city.includes(filters.location));
    }
    if (filters.type) {
      result = result.filter(p => p.type === filters.type);
    }
    if (filters.priceRange) {
      if (filters.priceRange === 'low') result = result.filter(p => p.price <= 100000);
      if (filters.priceRange === 'mid') result = result.filter(p => p.price > 100000 && p.price <= 500000);
      if (filters.priceRange === 'high') result = result.filter(p => p.price > 500000);
    }

    setFilteredProperties(result);
  }, [filters]);

  const handleFilterChange = (key: string, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Page Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 lg:px-8 py-12">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="text-brand-accent font-bold uppercase tracking-widest text-xs mb-2 block">
              Portfolio Exclusivo
            </span>
            <h1 className="text-4xl md:text-5xl font-serif text-brand-900 font-medium mb-4">
              Nossa Coleção de Imóveis
            </h1>
            <p className="text-gray-500 text-lg">
              Explore nossa seleção rigorosa de propriedades de alto padrão, desenhadas para oferecer o máximo em conforto e valorização.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Sticky Filter Bar */}
      <div className="sticky top-[72px] z-30 bg-white shadow-sm border-b border-gray-100 py-4 transition-all">
        <div className="container mx-auto px-4 lg:px-8 flex flex-col md:flex-row gap-4 items-center justify-between">
          
          <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 no-scrollbar">
            {/* Filter: Location */}
            <div className="relative group">
              <select 
                value={filters.location}
                onChange={(e) => handleFilterChange('location', e.target.value)}
                className="appearance-none bg-gray-50 hover:bg-gray-100 border border-transparent hover:border-gray-200 text-gray-700 py-2.5 pl-4 pr-10 rounded-full text-sm font-medium focus:outline-none focus:ring-2 focus:ring-brand-900/20 transition-all cursor-pointer min-w-[160px]"
              >
                <option value="">Todas as Cidades</option>
                {LOCATIONS.map(loc => <option key={loc} value={loc}>{loc}</option>)}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
            </div>

            {/* Filter: Type */}
            <div className="relative group">
               <select 
                value={filters.type}
                onChange={(e) => handleFilterChange('type', e.target.value)}
                className="appearance-none bg-gray-50 hover:bg-gray-100 border border-transparent hover:border-gray-200 text-gray-700 py-2.5 pl-4 pr-10 rounded-full text-sm font-medium focus:outline-none focus:ring-2 focus:ring-brand-900/20 transition-all cursor-pointer min-w-[160px]"
              >
                <option value="">Todos os Tipos</option>
                {PROPERTY_TYPES.map(type => <option key={type} value={type}>{type}</option>)}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
            </div>

             {/* Filter: Price */}
             <div className="relative group">
               <select 
                value={filters.priceRange}
                onChange={(e) => handleFilterChange('priceRange', e.target.value)}
                className="appearance-none bg-gray-50 hover:bg-gray-100 border border-transparent hover:border-gray-200 text-gray-700 py-2.5 pl-4 pr-10 rounded-full text-sm font-medium focus:outline-none focus:ring-2 focus:ring-brand-900/20 transition-all cursor-pointer min-w-[180px]"
              >
                <option value="">Qualquer Preço</option>
                <option value="low">Até $100.000</option>
                <option value="mid">$100k - $500k</option>
                <option value="high">Acima de $500k</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
            </div>

            {/* Clear Filters */}
            {(filters.location || filters.type || filters.priceRange) && (
                <button 
                    onClick={() => setFilters({ location: '', type: '', priceRange: '' })}
                    className="text-sm text-red-500 font-medium hover:underline whitespace-nowrap ml-2"
                >
                    Limpar filtros
                </button>
            )}
          </div>

          <div className="text-sm text-gray-500 font-medium whitespace-nowrap">
            {filteredProperties.length} imóveis encontrados
          </div>
        </div>
      </div>

      {/* Grid Content */}
      <div className="container mx-auto px-4 lg:px-8 py-12">
        {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div key={i} className="bg-white rounded-2xl h-[450px] animate-pulse">
                        <div className="h-64 bg-gray-200 rounded-t-2xl"></div>
                        <div className="p-6 space-y-4">
                            <div className="h-6 bg-gray-200 rounded w-3/4"></div>
                            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                            <div className="h-10 bg-gray-200 rounded w-full mt-4"></div>
                        </div>
                    </div>
                ))}
            </div>
        ) : filteredProperties.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProperties.map((property, index) => (
                    <motion.div
                        key={property.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="h-full"
                    >
                        <PropertyCard 
                          property={property} 
                          onClick={onPropertySelect}
                        />
                    </motion.div>
                ))}
            </div>
        ) : (
            <div className="flex flex-col items-center justify-center py-20 text-center">
                <div className="bg-gray-100 p-6 rounded-full mb-4">
                    <Search className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Nenhum imóvel encontrado</h3>
                <p className="text-gray-500 max-w-md mx-auto mb-6">
                    Não encontramos propriedades com os filtros selecionados. Tente ajustar sua busca ou ver todas as opções.
                </p>
                <button 
                    onClick={() => setFilters({ location: '', type: '', priceRange: '' })}
                    className="px-6 py-2 bg-brand-900 text-white rounded-full font-medium hover:bg-brand-800 transition-colors"
                >
                    Limpar Filtros
                </button>
            </div>
        )}

        {/* Pagination Mockup */}
        {!loading && filteredProperties.length > 0 && (
            <div className="mt-16 flex justify-center gap-2">
                <button className="w-10 h-10 flex items-center justify-center rounded-full bg-brand-900 text-white font-bold">1</button>
                <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white hover:bg-gray-100 text-gray-600 font-medium transition-colors">2</button>
                <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white hover:bg-gray-100 text-gray-600 font-medium transition-colors">3</button>
                <span className="w-10 h-10 flex items-center justify-center text-gray-400">...</span>
                <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white hover:bg-gray-100 text-gray-600 font-medium transition-colors">
                    <ChevronDown className="w-4 h-4 -rotate-90" />
                </button>
            </div>
        )}
      </div>
    </div>
  );
};