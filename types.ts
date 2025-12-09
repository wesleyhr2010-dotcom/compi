export type PropertyType = 'Residencial' | 'Comercial' | 'Industrial' | 'Terreno' | 'Oficina' | 'Depósito';

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
  isFeatured?: boolean;
}

export interface FilterState {
  location: string;
  type: string;
  priceRange: string;
}