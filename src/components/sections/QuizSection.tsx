import React, { useState } from 'react';

import mostardinha from '../../assets/images/mostardinha.png';
import maionese from '../../assets/images/maionese.png';
import salsinha from '../../assets/images/salsinha.png';
import alho from '../../assets/images/alho.png';

const QuizSection = () => {
  const [showResult, setShowResult] = useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState<{
    name: string;
    description: string;
    image: string;
  } | null>(null);

  const characters = {
    mostardinha: {
      name: 'Mostardinha',
      description: 'Você é corajoso, amoroso e sempre disposto a ajudar os amigos! Assim como Mostardinha, você valoriza a amizade acima de tudo.',
      image: mostardinha
    },
    maionese: {
      name: 'Maionese',
      description: 'Você é doce, carinhoso e sempre pensa nos outros! Como Maionese, você espalha amor por onde passa.',
      image: maionese
    },
    salsinha: {
      name: 'Salsinha',
      description: 'Você é alegre, divertido e adora fazer os outros sorrirem! Assim como Salsinha, você traz energia positiva para todos.',
      image: salsinha
    },
    alho: {
      name: 'Velho Alho',
      description: 'Você é sábio, paciente e sempre tem um conselho valioso! Como o Velho Alho, você é a voz da experiência e da sabedoria.',
      image: alho
    }
  };

  const handleOptionSelect = (characterKey: keyof typeof characters) => {
    setSelectedCharacter(characters[characterKey]);
    setShowResult(true);
  };

  const restartQuiz = () => {
    setShowResult(false);
    setSelectedCharacter(null);
  };

  const sendCharacterMessage = () => {
    const emailInput = document.getElementById('quizEmail') as HTMLInputElement;
    const email = emailInput ? emailInput.value : '';
    if (email) {
      alert(`Mensagem especial de ${selectedCharacter?.name} será enviada para ${email}!`);
      // Aqui você pode implementar a lógica de envio de e-mail
    } else {
      alert('Por favor, insira um e-mail válido.');
    }
  };

  return (
    <section id="quiz" className="py-16 bg-gradient-to-br from-yellow-100 to-orange-100 text-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-yellow-700 mb-4">🎭 Qual Personagem de Temperópolis é Você?</h2>
          <p className="text-xl text-yellow-600">Descubra qual personagem mais combina com você!</p>
        </div>
        
        <div className="bg-white rounded-lg shadow-xl p-8 max-w-2xl mx-auto border-b-4 border-yellow-400">
          {!showResult ? (
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-6">Como você reage quando encontra um amigo triste?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button 
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
                  onClick={() => handleOptionSelect('mostardinha')}
                  aria-label="Escolher opção: Ofereço um abraço e escuto com carinho"
                >
                  🤗 Ofereço um abraço e escuto com carinho
                </button>
                <button 
                  className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
                  onClick={() => handleOptionSelect('maionese')}
                  aria-label="Escolher opção: Tento fazer algo especial para alegrar"
                >
                  💝 Tento fazer algo especial para alegrar
                </button>
                <button 
                  className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
                  onClick={() => handleOptionSelect('salsinha')}
                  aria-label="Escolher opção: Conto uma piada para fazer rir"
                >
                  🎉 Conto uma piada para fazer rir
                </button>
                <button 
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
                  onClick={() => handleOptionSelect('alho')}
                  aria-label="Escolher opção: Dou um conselho sábio e carinhoso"
                >
                  🧠 Dou um conselho sábio e carinhoso
                </button>
              </div>
            </div>
          ) : (
            <div className="text-center">
              <div className="flex flex-col items-center">
                <img 
                  src={selectedCharacter?.image}
                  alt={selectedCharacter?.name}
                  className="w-40 h-40 rounded-full object-cover mx-auto mb-4 border-4 border-yellow-500"
                />
                <h3 className="text-3xl font-bold text-yellow-800 mb-2">Você é {selectedCharacter?.name}!</h3>
                <p className="text-lg text-gray-700 mb-6">{selectedCharacter?.description}</p>
              </div>
              <div className="space-y-4">
                <button 
                  className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105 w-full md:w-auto"
                  onClick={restartQuiz}
                  aria-label="Refazer o quiz"
                >
                  <span className="inline-block mr-2">🔄</span> Fazer Novamente
                </button>
                <div className="p-4 bg-gray-100 rounded-lg">
                  <p className="mb-2 text-lg">Receba uma mensagem especial do seu personagem por e-mail!</p>
                  <div className="flex flex-col md:flex-row gap-2 items-center justify-center">
                    <label htmlFor="quizEmail" className="sr-only">Seu e-mail</label>
                    <input 
                      type="email" 
                      placeholder="Seu e-mail" 
                      id="quizEmail" 
                      aria-label="Campo para digitar seu e-mail"
                      className="flex-grow p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    />
                    <button 
                      className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105 w-full md:w-auto"
                      onClick={sendCharacterMessage}
                      aria-label="Receber mensagem por e-mail"
                    >
                      <span className="inline-block mr-2">✨</span> Receber
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default QuizSection;

