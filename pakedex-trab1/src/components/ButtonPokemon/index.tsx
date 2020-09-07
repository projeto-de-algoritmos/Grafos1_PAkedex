import React, { useState, useEffect } from 'react';
import SelectPokemonModal from '../SelectPokemonModal';

import { Container } from './styles';

interface Pokemon {
  id: number;
  num: string;
  name: string;
  img: string;
  type: string[];
  height: string;
  weight: string;
  candy: string;
  candy_count?: number | null;
  egg: string;
  spawn_chance: number;
  avg_spawns: number;
  spawn_time: string;
  multipliers: number[] | null;
  weaknesses: string[];
  next_evolution?: {
    num: string;
    name: string;
  }[];
  prev_evolution?: {
    num: string;
    name: string;
  }[];
}


const ButtonPokemon: React.FC = () => {
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | undefined>(
    undefined,
  );
  const [isVisible, setIsVisible] = useState(false);

  const [pokeNumber, setPokeNumber] = useState('');

  useEffect(() => {
    const numTeste = Math.floor(Math.random() * 151);
    setPokeNumber(
      `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numTeste}.png`,
    );
  }, []);

  const handleModal = (): void => {
    setIsVisible(!isVisible);
    // setSelectedPokemon(!selectedPokemon);
  };

  return (
    <Container onClick={handleModal}>
      {selectedPokemon ? (
       <>
        <img src={selectedPokemon.img} />
        <p>{selectedPokemon.name}</p>
      </>
      ): 
      (
       <>
          <p style={{ fontSize: 40, marginBottom: 20 }}>+</p>
          <p>Select Pokemon</p>
        </>
      ) }
      <SelectPokemonModal open={isVisible} selectedPokemon={selectedPokemon} setSelectedPokemon={setSelectedPokemon} handleModal={handleModal} />
    </Container>
  );
};

export default ButtonPokemon;
