import React, { useRef, useState } from 'react';

import A_Cigarra_e_a_Formiga from '../../assets/audio/A_Cigarra_e_a_Formiga.mp3';
import Brilhe_Brilhe from '../../assets/audio/Brilhe_Brilhe.mp3';
import cancao_da_amizade from '../../assets/audio/cancao_da_amizade.mp3';
import Cem_Leguas from '../../assets/audio/Cem_Leguas.mp3';
import Mostardinha from '../../assets/audio/Mostardinha.mp3';
import O_Cuco from '../../assets/audio/O_Cuco.mp3';
import O_Elefante from '../../assets/audio/O_Elefante.mp3';
import O_Trem from '../../assets/audio/O_Trem.mp3';
import rock_do_repolho from '../../assets/audio/rock_do_repolho.mp3';
import Salsinha_e_Repolho from '../../assets/audio/Salsinha_e_Repolho.mp3';
import Tesouros from '../../assets/audio/Tesouros.mp3';
import valsa_da_maionese from '../../assets/audio/valsa_da_maionese.mp3';

interface Song {
  title: string;
  artist: string;
  src: string;
}

const songs: Song[] = [
  { title: 'Mostardinha', artist: 'Gabriel Jaccoud', src: Mostardinha },
  { title: 'A Cigarra e a Formiga', artist: 'Gabriel Jaccoud', src: A_Cigarra_e_a_Formiga },
  { title: 'Brilhe Brilhe', artist: 'Gabriel Jaccoud', src: Brilhe_Brilhe },
  { title: 'Canção da Amizade', artist: 'Gabriel Jaccoud', src: cancao_da_amizade },
  { title: 'Cem Léguas', artist: 'Gabriel Jaccoud', src: Cem_Leguas },
  { title: 'O Cuco', artist: 'Gabriel Jaccoud', src: O_Cuco },
  { title: 'O Elefante', artist: 'Gabriel Jaccoud', src: O_Elefante },
  { title: 'O Trem', artist: 'Gabriel Jaccoud', src: O_Trem },
  { title: 'Rock do Repolho', artist: 'Gabriel Jaccoud', src: rock_do_repolho },
  { title: 'Salsinha e Repolho', artist: 'Gabriel Jaccoud', src: Salsinha_e_Repolho },
  { title: 'Tesouros', artist: 'Gabriel Jaccoud', src: Tesouros },
  { title: 'Valsa da Maionese', artist: 'Gabriel Jaccoud', src: valsa_da_maionese },
];

const MusicSection: React.FC = () => {
  const audioRefs = useRef<(HTMLAudioElement | null)[]>([]);
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);

  const handlePlayPause = (index: number) => {
    if (playingIndex === index) {
      audioRefs.current[index]?.pause();
      setPlayingIndex(null);
    } else {
      // Pause currently playing song
      if (playingIndex !== null) {
        audioRefs.current[playingIndex]?.pause();
      }
      // Play new song
      audioRefs.current[index]?.play();
      setPlayingIndex(index);
    }
  };

  return (
    <section id="musica" className="py-16 bg-gradient-to-br from-green-100 to-blue-100 text-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-green-700 mb-4">🎶 Trilha Sonora Original</h2>
          <p className="text-xl text-green-600">As canções que embalam as aventuras de Mostardinha!</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {songs.map((song, index) => (
            <div key={index} className="bg-white rounded-lg shadow-xl p-6 text-center transform transition-transform duration-300 hover:scale-105 border-b-4 border-green-400">
              <h3 className="text-xl font-semibold text-green-800 mb-2">{song.title}</h3>
              <p className="text-gray-700 mb-4">{song.artist}</p>
              <audio
                ref={el => audioRefs.current[index] = el}
                src={song.src}
                onEnded={() => setPlayingIndex(null)}
                className="w-full mb-4"
              >
                Seu navegador não suporta o elemento de áudio.
              </audio>
              <button
                onClick={() => handlePlayPause(index)}
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
              >
                {playingIndex === index ? 'Pause' : 'Play'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MusicSection;

