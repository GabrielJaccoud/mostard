import React from 'react';

const StorySection: React.FC = () => {
  return (
    <section id="historia" className="py-16 bg-gradient-to-br from-blue-100 to-blue-200 text-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-700 mb-4">📖 A Jornada de Cadu</h2>
          <p className="text-xl text-blue-600">Uma aventura que começa com uma tempestade e floresce em amizades</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-justify">
              Em Temperópolis, Cadu embarca em uma jornada de <strong>amizade, autoconhecimento,
              respeito e esperança</strong> — com música, humor e muito amor.
            </p>
            <p className="text-lg leading-relaxed text-justify">
              Uma história que ensina que crescer é um movimento do coração,
              onde cada personagem traz uma lição especial sobre a vida.
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-6">
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg max-w-xs text-center border-l-4 border-blue-500">
              <div className="text-5xl mb-4">🌊</div>
              <h3 className="text-xl font-semibold text-blue-800 mb-2">O Naufrágio</h3>
              <p className="text-md text-gray-700">Cadu é um menino que caiu no mar durante uma tempestade...</p>
            </div>
            <div className="text-4xl text-blue-500 hidden md:block">➡️</div>
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg max-w-xs text-center border-l-4 border-blue-500">
              <div className="text-5xl mb-4">🏝️</div>
              <h3 className="text-xl font-semibold text-blue-800 mb-2">Temperópolis</h3>
              <p className="text-md text-gray-700">...e acordou em uma ilha mágica cheia de surpresas!</p>
            </div>
            <div className="text-4xl text-blue-500 hidden md:block">➡️</div>
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg max-w-xs text-center border-l-4 border-blue-500">
              <div className="text-5xl mb-4">👫</div>
              <h3 className="text-xl font-semibold text-blue-800 mb-2">Novos Amigos</h3>
              <p className="text-md text-gray-700">Conhece Mostardinha, Maionese, Salsinha e outros personagens encantadores.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;

