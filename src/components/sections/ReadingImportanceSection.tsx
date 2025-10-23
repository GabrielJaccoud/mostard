import React, { useState } from 'react';
import ReadingTipsModal from '../ui/ReadingTipsModal';

const ReadingImportanceSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section id="importancia-leitura" className="py-16 bg-gradient-to-br from-blue-100 to-indigo-100 text-gray-800">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-blue-700 mb-4">📚 A Importância da Leitura na Infância</h2>
        <p className="text-xl text-blue-600 mb-8">Mais que uma história, uma ferramenta para o desenvolvimento!</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-xl p-6 transform transition-transform duration-300 hover:scale-105 border-b-4 border-blue-400">
            <div className="text-5xl mb-4">🧠</div>
            <h3 className="text-2xl font-semibold text-blue-800 mb-2">Desenvolvimento Cognitivo</h3>
            <p className="text-gray-700">Estimula a imaginação, criatividade e capacidade de concentração.</p>
          </div>
          <div className="bg-white rounded-lg shadow-xl p-6 transform transition-transform duration-300 hover:scale-105 border-b-4 border-blue-400">
            <div className="text-5xl mb-4">❤️</div>
            <h3 className="text-2xl font-semibold text-blue-800 mb-2">Inteligência Emocional</h3>
            <p className="text-gray-700">Ajuda a criança a identificar e lidar com suas emoções e as dos outros.</p>
          </div>
          <div className="bg-white rounded-lg shadow-xl p-6 transform transition-transform duration-300 hover:scale-105 border-b-4 border-blue-400">
            <div className="text-5xl mb-4">🗣️</div>
            <h3 className="text-2xl font-semibold text-blue-800 mb-2">Habilidades Sociais</h3>
            <p className="text-gray-700">Fomenta a empatia, o respeito às diferenças e a comunicação.</p>
          </div>
        </div>

        <button
          onClick={openModal}
          className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-105 inline-block"
        >
          Quero Dicas de Leitura!
        </button>
      </div>

      <ReadingTipsModal isOpen={isModalOpen} onClose={closeModal} />
    </section>
  );
};

export default ReadingImportanceSection;

