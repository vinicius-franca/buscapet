import Image from 'next/image';
import React from 'react';

const AnimalCard = ({animal}) => {
  const shareAnimal = () => {
    // Lógica para compartilhar o animal
  };

  const sendMessage = () => {
    // Lógica para enviar mensagem ao dono do animal
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <img src={animal.foto} alt={animal.name} className="w-full h-48 object-cover mb-4" />
      <h2 className="text-xl font-semibold">{animal.name}</h2>
      <p>{animal.description}</p>
      <p><strong>{animal.rua}, {animal.numero}</strong></p>
      <p><strong>{animal.cidadeId} - {animal.uf}</strong></p>
      <div className="mt-4 flex justify-between">
        <button onClick={shareAnimal} className="bg-blue-500 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded">
          Compartilhar
        </button>
        <button onClick={sendMessage} className="bg-green-500 hover:bg-green-700 text-white font-semibold px-4 py-2 rounded">
          Enviar Mensagem
        </button>
      </div>
    </div>
  );
};

export default AnimalCard;