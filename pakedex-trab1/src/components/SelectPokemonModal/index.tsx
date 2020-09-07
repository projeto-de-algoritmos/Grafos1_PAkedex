import React, { useState, useEffect, useCallback } from 'react';

import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import { get, drop, head } from 'lodash';
import GraphCycle from '../GraphCycle';

import { Pokemons, PokemonType } from '../../common';
import {
  Container,
  Column,
  Divider,
  PokeRow,
  PokeDisplay,
  PokeTitle,
  StatsList,
  PokeDisplayStats,
  Stats,
  Status,
  ConfirmButton
} from './styles';
import { useGraph } from '../../hooks/graph';


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




const SelectPokemonModal: React.FC<{
  open: boolean;
  handleModal: () => void;
  selectedPokemon: Pokemon | undefined; 
  setSelectedPokemon: React.Dispatch<React.SetStateAction<Pokemon | undefined>>;

}> = ({ open, handleModal,selectedPokemon,setSelectedPokemon }) => {
  
  const pokemon: Pokemon[] = Pokemons;
  const { strengthsList } = useGraph();

  function handleClick(item: Pokemon): void {
    console.log(item);
    setSelectedPokemon(item);
  }

  console.log(get(PokemonType, `${selectedPokemon?.type[0]}`, undefined));
  console.log(strengthsList);
  function renderPokemon(item: Pokemon): JSX.Element {
    return (
      <PokeDisplay onClick={() => handleClick(item)}>
        <img src={item.img} />
      </PokeDisplay>
    );
  }
  return (
    <div>
      <Dialog
        fullWidth
        onClose={handleModal}
        aria-labelledby="simple-dialog-title"
        open={open}
        maxWidth="md"
        scroll="paper"
        PaperProps={{ style: { maxWidth: '100%' } }}
        onClick={(e) => e.stopPropagation()}
      >
        <DialogContent>
          <Container>
            <Column>
              <PokeTitle>Selecione um Pokemon</PokeTitle>
              <PokeRow>{pokemon.map((item) => renderPokemon(item))}</PokeRow>
            </Column>
            <Divider />
            <Column>
              {get(selectedPokemon, 'img', null) ? (
              <>
                
                <div style={{display:'flex',justifyContent:'center', alignItems:'center'}}>
                  <PokeTitle>Pokemon Selecionado</PokeTitle>
                </div>
                <StatsList>
                  <PokeDisplayStats>
                    <img
                      style={{height:150, width:150}}
                      src={get(selectedPokemon, 'img', '')}
                    />
                  </PokeDisplayStats>
                  <Stats>
                    <Status>Nome : {get(selectedPokemon, 'name', '')}</Status>
                    <Status>Id : #{get(selectedPokemon, 'id', '')}</Status>
                    <Status>Tipos :</Status>
                    <div style={{display:'flex', flexDirection:'row'}}>
                      {selectedPokemon?.type.map((type) => (
                        <p style={{marginLeft: 5, marginRight:5}}>{type}</p>
                      ))}
                    </div>
                  </Stats>
                </StatsList>
                <ConfirmButton onClick={handleModal}>
                    <p>
                      Selecionar pokemon
                    </p>
                  </ConfirmButton>
              </>
              ) : (
                <div style={{display:'flex',justifyContent:'center', alignItems:'center'}}>
                  <PokeTitle>Nenhum Selecionado</PokeTitle>
                </div>
              )}
              {strengthsList &&
                selectedPokemon &&
                strengthsList
                  ?.filter(
                    (item) =>
                      head(item) ===
                      get(PokemonType, `${selectedPokemon?.type[0]}`),
                  )
                  .map((item) => (
                    <GraphCycle
                      cycle={item}
                      type={get(PokemonType, `${selectedPokemon?.type[0]}`)}
                      pokemon={selectedPokemon}
                    />
                  )) &&
                strengthsList
                  ?.filter(
                    (item) =>
                      head(item) ===
                      get(PokemonType, `${selectedPokemon?.type[1]}`),
                  )
                  .map((item) => (
                    <GraphCycle
                      cycle={item}
                      type={get(PokemonType, `${selectedPokemon?.type[1]}`)}
                      pokemon={selectedPokemon}
                    />
                  ))}
            </Column>
          </Container>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default SelectPokemonModal;
