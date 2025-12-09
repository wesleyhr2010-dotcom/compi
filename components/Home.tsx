import React from 'react';
import { Hero } from './Hero';
import { FeaturedSection } from './FeaturedSection';
import { ListingSection } from './ListingSection';
import { AboutSection } from './AboutSection';

interface HomeProps {
  onPropertySelect: (id: string) => void;
  onNavigate: () => void;
}

export const Home: React.FC<HomeProps> = ({ onPropertySelect, onNavigate }) => {
  return (
    <>
      <Hero onSearch={onNavigate} />
      <FeaturedSection onPropertySelect={onPropertySelect} onViewAll={onNavigate} />
      <ListingSection onPropertySelect={onPropertySelect} onLoadMore={onNavigate} />
      <AboutSection />
    </>
  );
};