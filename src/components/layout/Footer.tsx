import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="text-lg mb-4">
          © {new Date().getFullYear()} Mostardinha. Todos os direitos reservados.
        </p>
        <div className="flex justify-center space-x-6 mb-4">
          <a href="#" className="hover:text-yellow-400 transition duration-300">Política de Privacidade</a>
          <a href="#" className="hover:text-yellow-400 transition duration-300">Termos de Uso</a>
        </div>
        <p className="text-sm text-gray-400">
          Desenvolvido com ❤️ por Gabriel Jaccoud e equipe.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

