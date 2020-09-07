import React from 'react';

import { Title, Container } from './styles';

import {
  ButtonPokemon,
  SelectPokemonModal,
  GraphCycle,
} from '../../components';

const Home: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', marginTop: '15%' }}>
      <Container>
        <ButtonPokemon />
        <ButtonPokemon />
        <ButtonPokemon />
        <GraphCycle />
      </Container>
    </div>
  );
};
export default Home;
