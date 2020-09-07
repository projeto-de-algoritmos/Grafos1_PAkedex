import React, {useState, useEffect} from 'react';

import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';


import { Container, Column,Divider,PokeRow,PokeDisplay,PokeTitle } from './styles';


const SelectPokemonModal: React.FC<{open: boolean}> = ({open}) => {

    const [seletedPokemon, setSeletedPokemon] = useState('');

    let pokemons = [];
    for(let i  =1; i < 152;i++){
        pokemons.push(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`);
    }


    function handleClick(img: string){
       console.log("teste")
    }

    function renderPokemon(img: string){
        return (
            <PokeDisplay onClick={() => handleClick(img)}>
                <img src={img}></img>
            </PokeDisplay>
        )
    }
  return (
    <div>

        <Dialog 
            fullWidth={true}
            onClose={handleClick} 
            aria-labelledby="simple-dialog-title"
            open={open}
            maxWidth="md"
            scroll="paper"
        >
            <DialogContent>
                <Container>
                    <Column>
                    <PokeTitle>Selecione um Pokemon</PokeTitle>
                        <PokeRow>
                            {pokemons.map((pokemon) => (renderPokemon(pokemon)))}             
                        </PokeRow>
                    </Column>
                    <Divider />
                    <Column>
                        <p>Pokemon Selecionado</p>
                        {seletedPokemon != '' 
                        ? 
                            <img  style={{objectFit:"contain"}} src={seletedPokemon} /> 
                        : 
                        <p>Nenhum Selecionado</p>}
                    </Column>
                </Container>
            </DialogContent>
        </Dialog>
    </div>
  );
}

export default SelectPokemonModal;