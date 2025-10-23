import React from 'react';
import gabrielJaccoud from '../../assets/images/gabriel-jaccoud.jpg';

const AuthorSection: React.FC = () => {
  return (
    <section id="autor" className="py-16 bg-gradient-to-br from-purple-100 to-pink-100 text-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-purple-700 mb-4">✍️ O Autor</h2>
          <p className="text-xl text-purple-600">Conheça a mente criativa por trás de Mostardinha!</p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 bg-white rounded-lg shadow-xl p-8 border-b-4 border-purple-400">
          <div className="md:w-1/3 flex justify-center">
            <img
              src={gabrielJaccoud}
              alt="Gabriel Jaccoud"
              className="w-64 h-64 rounded-full object-cover shadow-lg border-4 border-yellow-400"
            />
          </div>
          <div className="md:w-2/3 text-center md:text-left space-y-4">
            <h3 className="text-3xl font-bold text-purple-800">Gabriel Jaccoud</h3>
            <p className="text-lg leading-relaxed text-gray-700">
              Gabriel Jaccoud é um autor, compositor e contador de histórias que acredita no poder da arte para transformar vidas.
              Com uma paixão por criar mundos imaginativos e personagens cativantes, ele busca inspirar crianças e adultos a explorarem
              seus sentimentos e a valorizarem as pequenas grandes coisas da vida.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              Mostardinha é o resultado de sua dedicação em construir uma narrativa que, além de divertida, transmita mensagens
              importantes sobre amizade, coragem, respeito e a beleza de ser quem você é.
            </p>
            <a
              href="https://www.instagram.com/gabrieljaccoud/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105 mt-4"
            >
              Siga no Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthorSection;

