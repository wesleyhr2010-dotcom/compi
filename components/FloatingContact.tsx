import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export const FloatingContact: React.FC = () => {
  return (
    <motion.a
      href="https://wa.me/"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: "spring" }}
      className="fixed bottom-8 right-8 z-50 group"
    >
      <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white px-4 py-2 rounded-lg shadow-lg text-sm font-medium text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden md:block">
        Fale conosco agora
      </span>
      <div className="bg-green-500 text-white p-4 rounded-full shadow-lg shadow-green-500/30 hover:bg-green-600 hover:scale-110 transition-all duration-300 flex items-center justify-center">
        <MessageCircle className="w-8 h-8" />
      </div>
      {/* Pulse Effect */}
      <div className="absolute inset-0 rounded-full bg-green-500 opacity-20 animate-ping z-[-1]" />
    </motion.a>
  );
};