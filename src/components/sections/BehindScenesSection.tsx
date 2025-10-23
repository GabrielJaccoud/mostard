import React from 'react';
import banda from '../../assets/images/13-BANDA.png';
import ilha from '../../assets/images/28-ILHA.png';
import festival from '../../assets/images/48-FESTIVAL.png';
import vinhetaFinal from '../../assets/images/52-VINHETAFINAL.png';

const BehindScenesSection: React.FC = () => {
  const images = [
    { src: banda, alt: 'Banda Mostardinha' },
    { src: ilha, alt: 'Ilha de Temperópolis' },
    { src: festival, alt: 'Festival em Temperópolis' },
    { src: vinhetaFinal, alt: 'Vinheta Final Mostardinha' },
  ];

  return (
    <section id="bastidores" className="py-16 bg-gradient-to-br from-gray-100 to-gray-200 text-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-700 mb-4">🎬 Bastidores de Temperópolis</h2>
          <p className="text-xl text-gray-600">Uma espiadinha no processo criativo e na magia por trás do livro!</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {images.map((image, index) => (
            <div key={index} className="bg-white rounded-lg shadow-xl overflow-hidden transform transition-transform duration-300 hover:scale-105 border-b-4 border-gray-400">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-4">
                <p className="text-lg font-semibold text-gray-800">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            A criação de Mostardinha envolveu muita paixão, dedicação e a colaboração de diversos artistas e profissionais.
            Cada detalhe foi pensado para trazer uma experiência rica e significativa para as crianças.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BehindScenesSection;

