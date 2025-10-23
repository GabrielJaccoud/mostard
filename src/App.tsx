import React from 'react';
import HeroSection from './components/sections/HeroSection';
import StorySection from './components/sections/StorySection';

function App() {
  return (
    <div className="min-h-screen font-sans antialiased text-gray-900 bg-gray-50">
      <HeroSection />
      <StorySection />
    </div>
  );
}

export default App;

