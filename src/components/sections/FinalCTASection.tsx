import React from 'react';

const FinalCTASection: React.FC = () => {
  return (
    <section id="cta-final" className="py-16 bg-gradient-to-br from-yellow-400 to-orange-500 text-white text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Não perca essa aventura! Garanta já o seu Mostardinha!
        </h2>
        <p className="text-xl md:text-2xl mb-8">
          Um livro que encanta, educa e diverte toda a família. Perfeito para ler junto e criar memórias inesquecíveis.
        </p>
        <a
          href="https://pay.hotmart.com/H100940670E"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-orange-600 hover:bg-gray-100 font-bold py-4 px-10 rounded-full text-xl transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
        >
          Quero o Livro Digital por R$ 34,99
        </a>
      </div>
    </section>
  );
};

export default FinalCTASection;

