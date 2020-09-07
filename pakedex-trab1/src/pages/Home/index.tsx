import React from 'react';

import { Title, Container } from './styles';

import { ButtonPokemon, SelectPokemonModal } from '../../components';

const Home: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', marginTop: '15%' }}>
      <Container>
    
        <ButtonPokemon isEnemy={false} />
        <ButtonPokemon isEnemy={false} />
        <ButtonPokemon isEnemy={false} />
      </Container>
      <Container>
        <ButtonPokemon isEnemy={true} />
        <ButtonPokemon isEnemy={true}/>
        <ButtonPokemon isEnemy={true}/>
      </Container>
    </div>
  );
};
export default Home;
