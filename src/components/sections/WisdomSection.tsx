import React from 'react';

const WisdomSection: React.FC = () => {
  return (
    <section id="sabedoria" className="py-16 bg-gradient-to-br from-blue-200 to-cyan-200 text-gray-800">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-blue-700 mb-4">💡 A Sabedoria de Temperópolis</h2>
        <p className="text-xl text-blue-600 mb-8">Pequenas frases, grandes reflexões para o dia a dia!</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-xl p-6 transform transition-transform duration-300 hover:scale-105 border-b-4 border-blue-400">
            <p className="text-lg italic text-gray-700 mb-4">
              "Se você quiser ter mais sorrisos na vida, sorria mais."
            </p>
            <p className="font-semibold text-blue-800">- Mostardinha</p>
          </div>
          <div className="bg-white rounded-lg shadow-xl p-6 transform transition-transform duration-300 hover:scale-105 border-b-4 border-blue-400">
            <p className="text-lg italic text-gray-700 mb-4">
              "Cantar me faz trabalhar melhor. E perdoar é o segredo."
            </p>
            <p className="font-semibold text-blue-800">- Dona Formiga</p>
          </div>
          <div className="bg-white rounded-lg shadow-xl p-6 transform transition-transform duration-300 hover:scale-105 border-b-4 border-blue-400">
            <p className="text-lg italic text-gray-700 mb-4">
              "O caminho é o que fazemos dele."
            </p>
            <p className="font-semibold text-blue-800">- Tovar (o Elefante)</p>
          </div>
          <div className="bg-white rounded-lg shadow-xl p-6 transform transition-transform duration-300 hover:scale-105 border-b-4 border-blue-400">
            <p className="text-lg italic text-gray-700 mb-4">
              "O tempo de mudar é agora!"
            </p>
            <p className="font-semibold text-blue-800">- Cuco</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WisdomSection;

