import React from 'react';

import { Title, Container } from './styles'

import { ButtonPokemon } from '../../components/'
import { PokemonTypeConnect } from '../../common/'

const Home: React.FC = () =>{

    return (
        <div style={{ display: "flex", flexDirection: "row", marginTop: '15%' }}>
            <Container>
                <ButtonPokemon />
                <ButtonPokemon />
                <ButtonPokemon />
            </Container>

            <Container>
                <ButtonPokemon />
                <ButtonPokemon />
                <ButtonPokemon />
            </Container>
        </div>
    );
}

export default Home;