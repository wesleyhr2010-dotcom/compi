import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, BedDouble, Bath, Maximize, MessageCircle, ArrowUpRight } from 'lucide-react';
import { Property } from '../types';

interface PropertyCardProps {
  property: Property;
  onClick?: (id: string) => void;
}

export const PropertyCard: React.FC<PropertyCardProps> = ({ property, onClick }) => {
  const formatCurrency = (value: number) =>
    new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(value);

  const handleClick = (e: React.MouseEvent) => {
    // Prevent default anchor behavior if we wrap in link later, 
    // and trigger the onClick prop
    e.preventDefault();
    if (onClick) onClick(property.id);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      onClick={handleClick}
      className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full cursor-pointer"
    >
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        <div className="absolute top-4 left-4 z-10 flex gap-2">
           <span className="bg-brand-900/90 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider backdrop-blur-sm">
            {property.type}
          </span>
          {property.oldPrice && (
            <span className="bg-brand-accent text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
              Oferta
            </span>
          )}
        </div>
        
        <motion.img
          src={property.image}
          alt={property.title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
        
        {/* Overlay gradient for text readability if needed, though clean is better */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
            <div>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-brand-900 transition-colors line-clamp-1" title={property.title}>
                    {property.title}
                </h3>
                <div className="flex items-center text-gray-500 text-sm mt-1">
                    <MapPin className="w-3.5 h-3.5 mr-1" />
                    {property.location}, {property.city}
                </div>
            </div>
        </div>

        {/* Features Grid */}
        <div className="flex gap-4 my-4 text-gray-600 text-sm border-b border-gray-100 pb-4">
          {property.beds && (
            <div className="flex items-center gap-1.5" title="Quartos">
              <BedDouble className="w-4 h-4 text-brand-accent" />
              <span>{property.beds}</span>
            </div>
          )}
          {property.baths && (
            <div className="flex items-center gap-1.5" title="Banheiros">
              <Bath className="w-4 h-4 text-brand-accent" />
              <span>{property.baths}</span>
            </div>
          )}
          <div className="flex items-center gap-1.5" title="Área Total">
            <Maximize className="w-4 h-4 text-brand-accent" />
            <span>{property.sqm} m²</span>
          </div>
        </div>

        {/* Price Area */}
        <div className="mb-4">
            {property.oldPrice && (
                <span className="text-gray-400 text-sm line-through block font-medium">
                    {formatCurrency(property.oldPrice)}
                </span>
            )}
            <span className="text-2xl font-serif text-brand-900 font-semibold">
                {formatCurrency(property.price)}
            </span>
        </div>

        {/* Footer: Agent & Actions */}
        <div className="mt-auto flex items-center justify-between pt-2">
            <div className="flex items-center gap-3">
                <img 
                    src={property.agent.photo} 
                    alt={property.agent.name} 
                    className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm"
                />
                <div className="flex flex-col">
                    <span className="text-[10px] text-gray-400 uppercase tracking-wide">Representante</span>
                    <span className="text-xs font-semibold text-gray-700">{property.agent.name}</span>
                </div>
            </div>
            
            <div className="flex gap-2">
                <button 
                  onClick={(e) => { e.stopPropagation(); /* Logic for whatsapp */ }}
                  className="p-2 rounded-full bg-gray-50 hover:bg-green-50 text-gray-600 hover:text-green-600 transition-colors" 
                  title="WhatsApp"
                >
                    <MessageCircle className="w-4 h-4" />
                </button>
                <button 
                  onClick={handleClick}
                  className="p-2 rounded-full bg-brand-900 text-white hover:bg-brand-800 transition-colors" 
                  title="Ver Detalhes"
                >
                    <ArrowUpRight className="w-4 h-4" />
                </button>
            </div>
        </div>
      </div>
    </motion.div>
  );
};