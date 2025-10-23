import React from 'react';
import mostardinha from '../../assets/images/mostardinha.png';
import maionese from '../../assets/images/maionese.png';
import salsinha from '../../assets/images/salsinha.png';
import repolho from '../../assets/images/repolho.png';
import catchup from '../../assets/images/catchup.png';
import tovar from '../../assets/images/tovar.png';
import donaFormiga from '../../assets/images/dona_formiga.png';
import cigarra from '../../assets/images/cigarra.png';
import cuco from '../../assets/images/cuco.png';
import alho from '../../assets/images/alho.png';

interface Character {
  name: string;
  image: string;
  quote: string;
}

const characters: Character[] = [
  {
    name: 'Mostardinha',
    image: mostardinha,
    quote: '"Se você quiser ter mais sorrisos na vida, sorria mais."'
  },
  {
    name: 'Maionese',
    image: maionese,
    quote: '"Estou apaixonada... será que eu também posso aprender com o velho Alho?"'
  },
  {
    name: 'Salsinha',
    image: salsinha,
    quote: '"Nossa Senhora do Grande Inhame! Que aventura!"'
  },
  {
    name: 'Repolho',
    image: repolho,
    quote: '"PUUUM!" (Sim, ele solta muitos...)'
  },
  {
    name: 'Catchup',
    image: catchup,
    quote: '"Sou medroso, mas mapas me dão coragem!"'
  },
  {
    name: 'Tovar (elefante)',
    image: tovar,
    quote: '"O caminho é o que fazemos dele."'
  },
  {
    name: 'Dona Formiga',
    image: donaFormiga,
    quote: '"Cantar me faz trabalhar melhor. E perdoar é o segredo."'
  },
  {
    name: 'Dona Cigarra',
    image: cigarra,
    quote: '"A gente pode voltar a cantar... e a ser feliz."'
  },
  {
    name: 'Cuco',
    image: cuco,
    quote: '"CUUUCOOOO! O tempo de mudar é agora!"'
  },
  {
    name: 'Velho Alho',
    image: alho,
    quote: '"Faça o bem, que o bem volta."'
  }
];

const CharactersSection: React.FC = () => {
  return (
    <section id="personagens" className="py-16 bg-gradient-to-br from-purple-100 to-pink-100 text-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-purple-700 mb-4">🌟 Conheça os Personagens</h2>
          <p className="text-xl text-purple-600">Cada um com sua personalidade e lições de vida!</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {characters.map((character, index) => (
            <div key={index} className="bg-white rounded-lg shadow-xl p-6 text-center transform transition-transform duration-300 hover:scale-105 border-b-4 border-purple-400">
              <img
                src={character.image}
                alt={character.name}
                className="w-32 h-32 rounded-full object-cover mx-auto mb-4 border-4 border-yellow-400"
              />
              <h3 className="text-xl font-semibold text-purple-800 mb-2">{character.name}</h3>
              <p className="text-gray-700 italic">{character.quote}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CharactersSection;

