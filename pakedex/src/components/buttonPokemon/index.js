import React, { useState, useEffect } from 'react';

import { Container } from './styles';

function ButtonPokemon() {

  const [selectedPokemon, setSelectedPokemon] = useState(false);
  const [pokeNumber, setPokeNumber] = useState('');

  useEffect(() => {
    let numTeste = Math.floor(Math.random() * 151);
    setPokeNumber(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numTeste}.png`)
  },[]);

  function testeFunc() {
    setSelectedPokemon(!selectedPokemon);
  }
  return(   
    <Container onClick={testeFunc}> 
      {selectedPokemon ? 
      <> 
        <img src={pokeNumber} height="120px" /> 
        <p>Bulbassaur</p> 
      </>
      :
      <>
        <p style={{fontSize:40, marginBottom:20}}>+</p> 
        <p>Select Pokemon</p>
      </>
      }
      
    </Container>
  )
}

export default ButtonPokemon;