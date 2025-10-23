import React from 'react';
import HeroSection from './components/sections/HeroSection';
import StorySection from './components/sections/StorySection';
import CharactersSection from './components/sections/CharactersSection';
import MusicSection from './components/sections/MusicSection';
import AudiobookSection from './components/sections/AudiobookSection';
import QuizSection from './components/sections/QuizSection';
import ReadingImportanceSection from './components/sections/ReadingImportanceSection';
import AuthorSection from './components/sections/AuthorSection';
import PublisherSection from './components/sections/PublisherSection';
import BehindScenesSection from './components/sections/BehindScenesSection';
import VoicesSection from './components/sections/VoicesSection';
import FinalCTASection from './components/sections/FinalCTASection';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="min-h-screen font-sans antialiased text-gray-900 bg-gray-50">
      <HeroSection />
      <StorySection />
      <CharactersSection />
      <MusicSection />
      <AudiobookSection />
      <QuizSection />
      <ReadingImportanceSection />
      <AuthorSection />
      <PublisherSection />
      <BehindScenesSection />
      <VoicesSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
}

export default App;

