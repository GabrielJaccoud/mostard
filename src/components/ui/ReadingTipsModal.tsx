import React from 'react';

interface ReadingTipsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ReadingTipsModal: React.FC<ReadingTipsModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-lg w-full mx-4 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl font-bold"
          aria-label="Fechar"
        >
          &times;
        </button>
        <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">Dicas para uma Leitura Mágica!</h2>
        <ul className="list-disc list-inside text-lg text-gray-700 space-y-3">
          <li><strong>Crie um Cantinho Aconchegante:</strong> Um lugar especial para ler torna o momento mais convidativo.</li>
          <li><strong>Leiam Juntos:</strong> A leitura compartilhada fortalece laços e o interesse pela história.</li>
          <li><strong>Façam Perguntas:</strong> Incentive a criança a interagir com a história e os personagens.</li>
          <li><strong>Usem a Imaginação:</strong> Façam vozes diferentes para os personagens, dramatizem!</li>
          <li><strong>Conectem com a Vida Real:</strong> Conversem sobre como as lições da história se aplicam no dia a dia.</li>
          <li><strong>Respeitem o Ritmo:</strong> Se a criança perder o interesse, tudo bem. Tentem novamente mais tarde.</li>
          <li><strong>Livros são Tesouros:</strong> Mostre o valor do livro, cuidando dele com carinho.</li>
        </ul>
        <div className="text-center mt-8">
          <button
            onClick={onClose}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
          >
            Entendi!
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReadingTipsModal;

