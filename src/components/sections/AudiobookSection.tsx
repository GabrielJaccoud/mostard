import React from 'react';
import Mostardvideosite from '../../assets/video/Mostardvideosite.mp4';

const AudiobookSection: React.FC = () => {
  return (
    <section id="audiobook" className="py-16 bg-gradient-to-br from-red-100 to-orange-100 text-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-red-700 mb-4">🎧 Audiobook - Mostardinha</h2>
          <p className="text-xl text-red-600">Ouça a história completa e mergulhe no mundo de Temperópolis!</p>
        </div>

        <div className="flex justify-center">
          <div className="w-full max-w-2xl bg-white rounded-lg shadow-xl overflow-hidden border-b-4 border-red-400">
            <video controls className="w-full" poster="/src/assets/images/CAPA.png">
              <source src={Mostardvideosite} type="video/mp4" />
              Seu navegador não suporta o elemento de vídeo.
            </video>
            <div className="p-6 text-center">
              <h3 className="text-2xl font-semibold text-red-800 mb-2">Mostardinha: A História Completa</h3>
              <p className="text-gray-700">Narrado com carinho para encantar crianças e adultos.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AudiobookSection;

