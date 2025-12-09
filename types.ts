export type PropertyType = 'Residencial' | 'Comercial' | 'Industrial' | 'Terreno' | 'Oficina' | 'Depósito';

export interface Agent {
  name: string;
  photo: string;
  phone: string;
}

export interface Property {
  id: string;
  title: string;
  location: string;
  city: string;
  price: number;
  oldPrice?: number; // If set, it's an offer
  type: PropertyType;
  image: string;
  beds?: number;
  baths?: number;
  sqm: number;
  agent: Agent;
  isFeatured?: boolean;
}

export interface FilterState {
  location: string;
  type: string;
  priceRange: string;
}