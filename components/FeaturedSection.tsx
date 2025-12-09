import React from 'react';
import { PROPERTIES } from '../constants';
import { PropertyCard } from './PropertyCard';
import { motion } from 'framer-motion';

interface FeaturedSectionProps {
  onPropertySelect: (id: string) => void;
  onViewAll: () => void;
}

export const FeaturedSection: React.FC<FeaturedSectionProps> = ({ onPropertySelect, onViewAll }) => {
  const featuredProperties = PROPERTIES.filter(p => p.oldPrice);

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-xl">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-brand-accent font-bold uppercase tracking-widest text-sm mb-3"
            >
              Oportunidades Exclusivas
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-serif text-brand-900 font-medium"
            >
              Ofertas da Semana
            </motion.h3>
          </div>
          <motion.button 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            onClick={onViewAll}
            className="text-brand-900 font-semibold border-b border-brand-900 pb-1 hover:text-brand-accent hover:border-brand-accent transition-all mt-4 md:mt-0"
          >
            Ver todas as ofertas
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProperties.map((property) => (
            <PropertyCard 
              key={property.id} 
              property={property} 
              onClick={onPropertySelect}
            />
          ))}
        </div>
      </div>
    </section>
  );
};