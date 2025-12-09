import React from 'react';
import { PROPERTIES } from '../constants';
import { PropertyCard } from './PropertyCard';
import { motion } from 'framer-motion';

interface ListingSectionProps {
  onPropertySelect: (id: string) => void;
  onLoadMore: () => void;
}

export const ListingSection: React.FC<ListingSectionProps> = ({ onPropertySelect, onLoadMore }) => {
  // Exclude those already shown in featured if desired, or just show regular listings
  const generalProperties = PROPERTIES.filter(p => !p.oldPrice);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif text-brand-900 font-medium mb-4"
          >
            Propriedades em Destaque
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 max-w-2xl mx-auto"
          >
            Explore nossa curadoria de imóveis selecionados para garantir conforto, segurança e valorização do seu patrimônio.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {generalProperties.map((property) => (
            <PropertyCard 
              key={property.id} 
              property={property} 
              onClick={onPropertySelect}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
            <button 
              className="px-8 py-4 border border-brand-900 text-brand-900 font-semibold rounded-full hover:bg-brand-900 hover:text-white transition-all duration-300"
              onClick={onLoadMore}
            >
                Carregar Mais Imóveis
            </button>
        </div>
      </div>
    </section>
  );
};