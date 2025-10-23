import React from 'react';
import HeroSection from './components/sections/HeroSection';
import StorySection from './components/sections/StorySection';
import CharactersSection from './components/sections/CharactersSection';
import MusicSection from './components/sections/MusicSection';
import AudiobookSection from './components/sections/AudiobookSection';
import QuizSection from './components/sections/QuizSection';
import ReadingImportanceSection from './components/sections/ReadingImportanceSection';

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
    </div>
  );
}

export default App;

