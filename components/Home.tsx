import React from 'react';
import { Hero } from './Hero';
import { FeaturedSection } from './FeaturedSection';
import { ListingSection } from './ListingSection';
import { AboutSection } from './AboutSection';

interface HomeProps {
  onPropertySelect: (id: string) => void;
}

export const Home: React.FC<HomeProps> = ({ onPropertySelect }) => {
  return (
    <>
      <Hero />
      <FeaturedSection onPropertySelect={onPropertySelect} />
      <ListingSection onPropertySelect={onPropertySelect} />
      <AboutSection />
    </>
  );
};