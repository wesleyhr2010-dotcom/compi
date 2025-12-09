import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, TrendingUp, Users } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section className="py-24 bg-brand-900 text-white relative overflow-hidden">
      {/* Decorative pattern */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 transform translate-x-20" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-brand-accent font-bold uppercase tracking-widest text-sm mb-4"
            >
              Sobre a Compiere
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-serif font-medium mb-6 leading-tight"
            >
              Excelência e solidez no mercado imobiliário.
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-300 text-lg leading-relaxed mb-8"
            >
              Somos especialistas em conectar investidores a oportunidades reais. Com foco no agronegócio e no setor imobiliário de alto padrão, garantimos transparência jurídica e potencial de valorização em cada metro quadrado negociado.
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {[
                    { icon: ShieldCheck, label: "Segurança Jurídica" },
                    { icon: TrendingUp, label: "Alto Retorno" },
                    { icon: Users, label: "Atendimento Exclusive" },
                ].map((item, idx) => (
                    <motion.div 
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + (idx * 0.1) }}
                        className="flex flex-col items-start p-4 border border-white/10 rounded-xl bg-white/5 backdrop-blur-sm"
                    >
                        <item.icon className="w-8 h-8 text-brand-accent mb-3" />
                        <span className="font-medium text-sm">{item.label}</span>
                    </motion.div>
                ))}
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[600px] rounded-2xl overflow-hidden"
          >
            <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80" 
                alt="Modern Architecture" 
                className="w-full h-full object-cover"
            />
            <div className="absolute bottom-8 left-8 bg-white text-brand-900 p-6 rounded-xl shadow-lg max-w-xs">
                <p className="font-serif italic text-xl mb-2">"Investir em terra é investir na única coisa que dura."</p>
                <p className="text-sm font-bold uppercase tracking-wide text-brand-500">— Compiere CEO</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};