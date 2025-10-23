import React from 'react';
import logoHumanizar from '../../assets/images/logo_humanizar.png';
import logoMundoNinus from '../../assets/images/logo-mundoninus.png';

const PublisherSection: React.FC = () => {
  return (
    <section id="editora" className="py-16 bg-gradient-to-br from-green-100 to-teal-100 text-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-green-700 mb-4">🤝 Nossos Parceiros</h2>
          <p className="text-xl text-green-600">Conheça quem torna essa aventura possível!</p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          <div className="bg-white rounded-lg shadow-xl p-8 text-center transform transition-transform duration-300 hover:scale-105 border-b-4 border-green-400">
            <img
              src={logoHumanizar}
              alt="Logo Humanizar Editora"
              className="w-48 h-auto mx-auto mb-4"
            />
            <h3 className="text-2xl font-semibold text-green-800 mb-2">Humanizar Editora</h3>
            <p className="text-lg text-gray-700 mb-4">Promovendo a literatura infantil com valores humanos.</p>
            <a
              href="https://www.humanizareditora.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
            >
              Visitar Site
            </a>
          </div>

          <div className="bg-white rounded-lg shadow-xl p-8 text-center transform transition-transform duration-300 hover:scale-105 border-b-4 border-green-400">
            <img
              src={logoMundoNinus}
              alt="Logo Mundo Ninus"
              className="w-48 h-auto mx-auto mb-4"
            />
            <h3 className="text-2xl font-semibold text-green-800 mb-2">Mundo Ninus</h3>
            <p className="text-lg text-gray-700 mb-4">Conteúdo educativo e divertido para o desenvolvimento infantil.</p>
            <a
              href="https://mundoninus.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
            >
              Visitar Site
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PublisherSection;

