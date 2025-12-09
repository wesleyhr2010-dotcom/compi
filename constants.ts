import { Property } from './types';

export const LOCATIONS = [
  'Assunção',
  'Ciudad del Este',
  'Santa Rita',
  'Encarnación',
  'Hernandarias'
];

export const PROPERTY_TYPES = [
  'Residencial',
  'Comercial',
  'Industrial',
  'Terreno',
  'Oficina',
  'Depósito'
];

export const AGENTS = {
  gleison: {
    name: 'Gleison',
    photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80',
    phone: '+595 983 123 456'
  },
  ana: {
    name: 'Ana Silva',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    phone: '+595 973 654 321'
  }
};

export const PROPERTIES: Property[] = [
  {
    id: '1',
    title: 'Mansão Alphaville Premium',
    location: 'Barrio Boquerón',
    city: 'Ciudad del Este',
    price: 450000,
    oldPrice: 485000,
    type: 'Residencial',
    image: 'https://images.unsplash.com/photo-1600596542815-6ad4c727dd2d?auto=format&fit=crop&w=800&q=80', // Fixed: Reliable luxury house image
    beds: 5,
    baths: 6,
    sqm: 650,
    agent: AGENTS.gleison,
    isFeatured: true
  },
  {
    id: '2',
    title: 'Executive Center Office',
    location: 'Villa Morra',
    city: 'Assunção',
    price: 120000,
    type: 'Oficina',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80', // Verified office image
    sqm: 85,
    agent: AGENTS.ana
  },
  {
    id: '3',
    title: 'Terreno Industrial Logístico',
    location: 'Ruta 6',
    city: 'Santa Rita',
    price: 850000,
    oldPrice: 920000,
    type: 'Industrial',
    image: 'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?auto=format&fit=crop&w=800&q=80', // Fixed: Modern industrial building/land
    sqm: 10000,
    agent: AGENTS.gleison,
    isFeatured: true
  },
  {
    id: '4',
    title: 'Penthouse View 360',
    location: 'Costanera',
    city: 'Encarnación',
    price: 320000,
    type: 'Residencial',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80', // Verified modern home
    beds: 3,
    baths: 3,
    sqm: 220,
    agent: AGENTS.ana
  },
  {
    id: '5',
    title: 'Galpão Logístico Modular',
    location: 'Parque Industrial',
    city: 'Hernandarias',
    price: 2500, // Monthly Rent implied or sale price
    type: 'Depósito',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80', // Verified warehouse
    sqm: 1200,
    agent: AGENTS.gleison
  },
  {
    id: '6',
    title: 'Loteamento Fechado Exclusive',
    location: 'Area Rural',
    city: 'Santa Rita',
    price: 90000,
    type: 'Terreno',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80', // Verified land/field
    sqm: 450,
    agent: AGENTS.ana
  }
];