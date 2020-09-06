import React from 'react';

import {Title, Container} from './styles'

import ButtonPokemon from '../../components/buttonPokemon/index'
import SelectPokemonModal from '../../components/selectPokemonModal'

function Home (){ 
    return( 
        <div style={{display:"flex",flexDirection:"row", marginTop:'15%'}}>
            <Container>
                <SelectPokemonModal />
                
            </Container>

            {/* <Container>
                <ButtonPokemon />
                <ButtonPokemon />
                <ButtonPokemon />
            </Container>

            <Container>
                <ButtonPokemon />
                <ButtonPokemon />
                <ButtonPokemon />
            </Container> */}
        </div>
    );
}

export default Home;