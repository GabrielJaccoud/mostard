import React from 'react';

import banda from '../../assets/images/13-BANDA.png';
import ilha from '../../assets/images/28-ILHA.png';
import festival from '../../assets/images/48-FESTIVAL.png';
import vinhetaFinal from '../../assets/images/52-VINHETAFINAL.png';

const GallerySection: React.FC = () => {
  const galleryItems = [
    { src: banda, alt: 'A Banda de Temperópolis' },
    { src: ilha, alt: 'A Ilha da Empatia' },
    { src: festival, alt: 'O Festival Final' },
    { src: vinhetaFinal, alt: 'Mostardinha e a Pedra' },
  ];

  return (
    <section id="galeria" className="py-16 bg-gradient-to-br from-purple-100 to-pink-100 text-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-purple-700 mb-4">🖼️ Galeria de Ilustrações</h2>
          <p className="text-xl text-purple-600">Confira algumas das cenas mais marcantes e encantadoras da jornada de Mostardinha e sua turma.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {galleryItems.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-xl overflow-hidden transform transition-transform duration-300 hover:scale-105 border-b-4 border-purple-400">
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-4">
                <p className="text-lg font-semibold text-purple-800">{item.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;

