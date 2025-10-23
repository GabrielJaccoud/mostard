import React from 'react';
import mostardinhaCapa from '../../assets/images/CAPA.png';

const HeroSection: React.FC = () => {
  return (
    <section id="inicio" className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-yellow-200 via-yellow-300 to-yellow-400 text-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
              <span className="text-yellow-600">Mostardinha</span> é um grão de mostarda
            </h1>
            <p className="text-lg md:text-xl mb-6">
              Pequeno no tamanho, mas <strong>gigante em amor, coragem e sabedoria</strong>.
              Ele vive em Temperópolis, uma ilha encantada onde os sentimentos criam forma,
              os alimentos falam e a vida ensina com leveza.
            </p>
            <p className="text-md md:text-lg mb-8">
              Conheça o livro digital que está <strong>emocionando crianças, pais, professores e terapeutas</strong>.
            </p>
            <div className="bg-white rounded-lg p-6 shadow-lg mb-8 border-l-4 border-yellow-500">
              <h2 className="text-2xl font-bold mb-2">📘 Mostardinha e sua Turma em: Temperópolis</h2>
              <p>Uma aventura afetiva com trilha sonora original, personagens cativantes e lições que tocam o coração.</p>
            </div>
            <a href="https://pay.hotmart.com/H100940670E" target="_blank" rel="noopener noreferrer" className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-105 inline-block">
              Quero o Livro por R$ 34,99
            </a>
          </div>
          <div className="flex justify-center">
            <img src={mostardinhaCapa} alt="Capa do livro Mostardinha" className="w-full max-w-sm rounded-lg shadow-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

