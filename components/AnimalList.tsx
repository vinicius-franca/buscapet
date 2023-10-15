import React, { useEffect, useState } from 'react';
import AnimalCard from './AnimalCard';

const AnimalList = () => {
  const [animals, setAnimals] = useState([]);
  const [selectedCity, setSelectedCity] = useState(''); // Estado local para armazenar a cidade selecionada

  const cities = Array.from(new Set(animals.map((animal:any) => animal.cidadeId))); // Obtenha uma lista de cidades únicas dos animais


    useEffect(() => {
        async function fetchAnimals() {
            try {
            const response = await fetch('/api/animals');
            const data = await response.json();
            setAnimals(data);
            } catch (error) {
            console.error('Erro ao buscar animais:', error);
            }
        }
        fetchAnimals();
    }, []);

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
  };

  // Filtre os animais com base na cidade selecionada
  const filteredAnimals = selectedCity
    ? animals.filter((animal:any ) => animal.cidadeId == selectedCity)
    : animals;

  return (
    <div className="p-10 container mx-auto">
      {/* Campo select para filtrar por cidade */}
      <label className="block mb-2" htmlFor="cityFilter">
        Filtrar por Cidade:
        <select
          id="cityFilter"
          name="cityFilter"
          value={selectedCity}
          onChange={handleCityChange}
          className="w-full p-2 border rounded"
        >
          <option value="">Todas as Cidades</option>
          {cities.map((city, index) => (
            <option key={index} value={city}>
              {city}
            </option>
          ))}
        </select>
      </label>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredAnimals.map((animal: any) => (
          <AnimalCard key={animal.id} animal={animal} />
        ))}
      </div>
    </div>
  );
};

export default AnimalList;