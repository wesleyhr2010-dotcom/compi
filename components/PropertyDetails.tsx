import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, MapPin, BedDouble, Bath, Maximize, Check, Phone, MessageCircle, Calendar, ShieldCheck } from 'lucide-react';
import { Property } from '../types';
import { PROPERTIES } from '../constants';

interface PropertyDetailsProps {
  propertyId: string;
  onBack: () => void;
}

export const PropertyDetails: React.FC<PropertyDetailsProps> = ({ propertyId, onBack }) => {
  const property = PROPERTIES.find(p => p.id === propertyId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [propertyId]);

  if (!property) return <div>Propriedade não encontrada.</div>;

  const formatCurrency = (value: number) =>
    new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(value);

  // Mock additional images for the gallery effect
  const galleryImages = [
    property.image,
    "https://images.unsplash.com/photo-1616486338812-3dadae4b4f9d?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1616137466211-f939a420be84?auto=format&fit=crop&w=800&q=80",
  ];

  const features = [
    "Ar Condicionado Central",
    "Acabamento em Mármore",
    "Segurança 24h",
    "Área Gourmet",
    "Piscina Aquecida",
    "Automação Residencial"
  ];

  return (
    <div className="bg-white min-h-screen pt-24 pb-20">
      {/* Navigation / Breadcrumb */}
      <div className="container mx-auto px-4 lg:px-8 mb-8">
        <button 
          onClick={onBack}
          className="group flex items-center text-sm font-medium text-gray-500 hover:text-brand-900 transition-colors"
        >
          <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center mr-3 group-hover:bg-brand-900 group-hover:text-white transition-all">
            <ArrowLeft className="w-4 h-4" />
          </div>
          Voltar para lista
        </button>
      </div>

      {/* Gallery Section */}
      <div className="container mx-auto px-4 lg:px-8 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-[500px] md:h-[600px]">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:col-span-3 h-full rounded-2xl overflow-hidden relative group"
          >
            <img src={galleryImages[0]} alt="Main" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute top-4 left-4">
                <span className="bg-white/90 backdrop-blur text-brand-900 text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider">
                    {property.type}
                </span>
            </div>
          </motion.div>
          <div className="hidden md:flex flex-col gap-4 md:col-span-1 h-full">
            <motion.div 
                 initial={{ opacity: 0, x: 20 }}
                 animate={{ opacity: 1, x: 0 }}
                 transition={{ delay: 0.1 }}
                 className="flex-1 rounded-2xl overflow-hidden relative"
            >
                <img src={galleryImages[1]} alt="Detail 1" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
            </motion.div>
            <motion.div 
                 initial={{ opacity: 0, x: 20 }}
                 animate={{ opacity: 1, x: 0 }}
                 transition={{ delay: 0.2 }}
                 className="flex-1 rounded-2xl overflow-hidden relative"
            >
                <img src={galleryImages[2]} alt="Detail 2" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center hover:bg-black/40 transition-colors cursor-pointer">
                    <span className="text-white font-medium border border-white/30 px-4 py-2 rounded-full backdrop-blur-sm">
                        + 8 Fotos
                    </span>
                </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Left Column: Details */}
          <div className="lg:col-span-2">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
            >
                <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-gray-100 pb-8 mb-8">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-serif font-medium text-brand-900 mb-2">
                            {property.title}
                        </h1>
                        <div className="flex items-center text-gray-500 text-lg">
                            <MapPin className="w-5 h-5 mr-2 text-brand-accent" />
                            {property.location}, {property.city}
                        </div>
                    </div>
                    <div className="mt-6 md:mt-0 text-right">
                        {property.oldPrice && (
                            <span className="text-gray-400 text-lg line-through block font-medium">
                                {formatCurrency(property.oldPrice)}
                            </span>
                        )}
                        <span className="text-3xl md:text-4xl font-serif text-brand-900 font-semibold block">
                            {formatCurrency(property.price)}
                        </span>
                    </div>
                </div>

                {/* Key Stats */}
                <div className="grid grid-cols-3 gap-4 mb-10">
                    <div className="p-4 bg-gray-50 rounded-2xl flex flex-col items-center justify-center text-center hover:bg-gray-100 transition-colors">
                        <BedDouble className="w-6 h-6 text-brand-accent mb-2" />
                        <span className="text-2xl font-bold text-brand-900">{property.beds || '-'}</span>
                        <span className="text-xs text-gray-500 uppercase tracking-wide">Quartos</span>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-2xl flex flex-col items-center justify-center text-center hover:bg-gray-100 transition-colors">
                        <Bath className="w-6 h-6 text-brand-accent mb-2" />
                        <span className="text-2xl font-bold text-brand-900">{property.baths || '-'}</span>
                        <span className="text-xs text-gray-500 uppercase tracking-wide">Banheiros</span>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-2xl flex flex-col items-center justify-center text-center hover:bg-gray-100 transition-colors">
                        <Maximize className="w-6 h-6 text-brand-accent mb-2" />
                        <span className="text-2xl font-bold text-brand-900">{property.sqm}</span>
                        <span className="text-xs text-gray-500 uppercase tracking-wide">m² Úteis</span>
                    </div>
                </div>

                {/* Description */}
                <div className="mb-12">
                    <h3 className="text-xl font-bold text-brand-900 mb-4">Sobre a Propriedade</h3>
                    <div className="prose prose-lg text-gray-500 leading-relaxed">
                        <p>
                            Uma oportunidade única de adquirir um imóvel de prestígio em uma das localizações mais cobiçadas de {property.city}. 
                            Esta propriedade combina arquitetura contemporânea com acabamentos de altíssimo padrão, oferecendo um estilo de vida incomparável.
                        </p>
                        <p className="mt-4">
                            Projetada para maximizar a luz natural e a integração entre ambientes internos e externos, a residência conta com amplas salas de estar, 
                            pé direito duplo e uma área de lazer completa. Ideal para quem busca privacidade, segurança e sofisticação.
                        </p>
                    </div>
                </div>

                {/* Features List */}
                <div className="mb-12">
                    <h3 className="text-xl font-bold text-brand-900 mb-6">Comodidades & Detalhes</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {features.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-3 text-gray-600">
                                <div className="w-6 h-6 rounded-full bg-brand-accent/10 flex items-center justify-center shrink-0">
                                    <Check className="w-3 h-3 text-brand-accent" />
                                </div>
                                <span>{feature}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>
          </div>

          {/* Right Column: Sticky Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-28">
                {/* Contact Card */}
                <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-xl shadow-brand-900/5 mb-6">
                    <div className="mb-6">
                        <h4 className="text-xl font-serif font-medium text-brand-900 mb-2">Interessado neste imóvel?</h4>
                        <p className="text-sm text-gray-500">Entre em contato diretamente com nossa equipe de vendas.</p>
                    </div>
                    
                    <div className="flex gap-3 mb-6">
                        <button className="flex-1 bg-brand-900 text-white py-3 rounded-xl font-medium text-sm flex items-center justify-center gap-2 hover:bg-brand-800 transition-colors">
                            <Phone className="w-4 h-4" />
                            Ligar
                        </button>
                        <button className="flex-1 bg-green-500 text-white py-3 rounded-xl font-medium text-sm flex items-center justify-center gap-2 hover:bg-green-600 transition-colors">
                            <MessageCircle className="w-4 h-4" />
                            WhatsApp
                        </button>
                    </div>

                    <div className="border-t border-gray-100 pt-6">
                        <h5 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-brand-accent" />
                            Agendar Visita
                        </h5>
                        <form className="space-y-3" onSubmit={(e) => { e.preventDefault(); alert("Mensagem enviada! Entraremos em contato."); }}>
                            <input type="text" placeholder="Seu Nome" className="w-full bg-gray-50 border-transparent focus:bg-white focus:border-brand-accent rounded-lg px-4 py-3 text-sm transition-all outline-none" required />
                            <input type="email" placeholder="Seu E-mail" className="w-full bg-gray-50 border-transparent focus:bg-white focus:border-brand-accent rounded-lg px-4 py-3 text-sm transition-all outline-none" required />
                            <input type="tel" placeholder="Seu Telefone" className="w-full bg-gray-50 border-transparent focus:bg-white focus:border-brand-accent rounded-lg px-4 py-3 text-sm transition-all outline-none" required />
                            <button type="submit" className="w-full bg-brand-accent text-white font-bold py-3 rounded-lg hover:bg-yellow-600 transition-colors mt-2">
                                Solicitar Contato
                            </button>
                        </form>
                    </div>
                </div>

                <div className="bg-brand-900 rounded-3xl p-6 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/20 rounded-full blur-2xl transform translate-x-10 -translate-y-10" />
                    <div className="relative z-10 flex flex-col items-center text-center">
                        <ShieldCheck className="w-10 h-10 text-brand-accent mb-3" />
                        <h5 className="font-serif text-xl mb-2">Segurança Garantida</h5>
                        <p className="text-gray-300 text-sm mb-4">Todas as nossas propriedades possuem documentação verificada.</p>
                        <button className="text-xs font-bold uppercase tracking-widest border border-white/30 px-4 py-2 rounded-full hover:bg-white hover:text-brand-900 transition-all">
                            Saiba Mais
                        </button>
                    </div>
                </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};