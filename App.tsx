import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import { PropertiesPage } from './components/PropertiesPage';
import { PropertyDetails } from './components/PropertyDetails';
import { Footer } from './components/Footer';
import { FloatingContact } from './components/FloatingContact';

type PageView = 'home' | 'properties' | 'property-details';

function App() {
  const [currentView, setCurrentView] = useState<PageView>('home');
  const [selectedPropertyId, setSelectedPropertyId] = useState<string | null>(null);

  const handlePropertySelect = (id: string) => {
    setSelectedPropertyId(id);
    setCurrentView('property-details');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigate = (page: 'home' | 'properties') => {
    setCurrentView(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderContent = () => {
    switch (currentView) {
      case 'home':
        return <Home onPropertySelect={handlePropertySelect} onNavigate={() => handleNavigate('properties')} />;
      case 'properties':
        return <PropertiesPage onPropertySelect={handlePropertySelect} />;
      case 'property-details':
        if (selectedPropertyId) {
          return <PropertyDetails propertyId={selectedPropertyId} onBack={() => handleNavigate('properties')} />;
        }
        return <PropertiesPage onPropertySelect={handlePropertySelect} />; // Fallback
      default:
        return <Home onPropertySelect={handlePropertySelect} onNavigate={() => handleNavigate('properties')} />;
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-brand-accent selection:text-white">
      <Navbar 
        onNavigate={handleNavigate} 
        currentPage={currentView === 'property-details' ? 'properties' : (currentView as 'home' | 'properties')}
      />
      
      <main>
        {renderContent()}
      </main>

      <Footer />
      <FloatingContact />
    </div>
  );
}

export default App;