import React from 'react';
import andreCarneiro from '../../assets/images/andre-carneiro.jpg';
import andreNobrega from '../../assets/images/andre-nobrega.jpg';
import antonioJaccoud from '../../assets/images/antonio-jaccoud.jpg';
import carol from '../../assets/images/carol.jpg';
import daniSouza from '../../assets/images/dani-souza.jpg';
import gabrielMorais from '../../assets/images/gabriel-morais.jpg';
import grazi from '../../assets/images/grazi.jpg';
import helderCanto from '../../assets/images/helder-canto.jpg';
import jaqueline from '../../assets/images/jaqueline.jpg';
import klaudiaLopes from '../../assets/images/klaudia-lopes.jpg';
import nathaliaJaccoud from '../../assets/images/nathalia-jaccoud.jpg';
import piterDePaula from '../../assets/images/piter-de-paula.jpg';
import victorMoreno from '../../assets/images/victor-moreno.jpg';

interface VoiceActor {
  name: string;
  role: string;
  image: string;
}

const voiceActors: VoiceActor[] = [
  { name: 'André Carneiro', role: 'Mostardinha', image: andreCarneiro },
  { name: 'André Nóbrega', role: 'Cadu', image: andreNobrega },
  { name: 'Antônio Jaccoud', role: 'Repolho', image: antonioJaccoud },
  { name: 'Carol', role: 'Maionese', image: carol },
  { name: 'Dani Souza', role: 'Salsinha', image: daniSouza },
  { name: 'Gabriel Morais', role: 'Catchup', image: gabrielMorais },
  { name: 'Grazi', role: 'Dona Formiga', image: grazi },
  { name: 'Helder Canto', role: 'Alho', image: helderCanto },
  { name: 'Jaqueline', role: 'Dona Cigarra', image: jaqueline },
  { name: 'Klaudia Lopes', role: 'Cuco', image: klaudiaLopes },
  { name: 'Nathalia Jaccoud', role: 'Narradora', image: nathaliaJaccoud },
  { name: 'Piter de Paula', role: 'Tovar', image: piterDePaula },
  { name: 'Victor Moreno', role: 'Xadu', image: victorMoreno },
];

const VoicesSection: React.FC = () => {
  return (
    <section id="vozes" className="py-16 bg-gradient-to-br from-indigo-100 to-purple-100 text-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-indigo-700 mb-4">🗣️ As Vozes de Temperópolis</h2>
          <p className="text-xl text-indigo-600">Conheça os talentos que deram vida aos personagens!</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {voiceActors.map((actor, index) => (
            <div key={index} className="bg-white rounded-lg shadow-xl p-6 text-center transform transition-transform duration-300 hover:scale-105 border-b-4 border-indigo-400">
              <img
                src={actor.image}
                alt={actor.name}
                className="w-32 h-32 rounded-full object-cover mx-auto mb-4 border-4 border-yellow-400"
              />
              <h3 className="text-xl font-semibold text-indigo-800 mb-2">{actor.name}</h3>
              <p className="text-gray-700 italic">{actor.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VoicesSection;

