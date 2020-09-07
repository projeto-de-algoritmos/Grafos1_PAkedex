import React, { useState, useEffect } from 'react';
import SelectPokemonModal from '../SelectPokemonModal';

import { Container } from './styles';

const ButtonPokemon: React.FC = () => {
  const [selectedPokemon, setSelectedPokemon] = useState(false);
  const [pokeNumber, setPokeNumber] = useState('');

  useEffect(() => {
    const numTeste = Math.floor(Math.random() * 151);
    setPokeNumber(
      `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numTeste}.png`,
    );
  }, []);

  const testeFunc = (): void => {
    setSelectedPokemon(!selectedPokemon);
  };

  return (
    <Container onClick={testeFunc}>
      {selectedPokemon ? (
        <>
          <SelectPokemonModal open={selectedPokemon} />
        </>
      ) : (
        <>
          <p style={{ fontSize: 40, marginBottom: 20 }}>+</p>
          <p>Select Pokemon</p>
        </>
      )}
    </Container>
  );
};

export default ButtonPokemon;
