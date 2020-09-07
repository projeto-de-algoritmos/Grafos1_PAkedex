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
}> = ({ open, handleModal }) => {
  const [seletedPokemon, setSeletedPokemon] = useState<Pokemon | undefined>(
    undefined,
  );
  const pokemon: Pokemon[] = Pokemons;
  const { strengthsList } = useGraph();

  function handleClick(item: Pokemon): void {
    console.log(item);
    setSeletedPokemon(item);
  }

  console.log(get(PokemonType, `${seletedPokemon?.type[0]}`, undefined));
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
              <p>Pokemon Selecionado</p>
              {get(seletedPokemon, 'img', null) ? (
                <img
                  style={{ objectFit: 'contain' }}
                  src={get(seletedPokemon, 'img', '')}
                />
              ) : (
                <p>Nenhum Selecionado</p>
              )}
              {strengthsList &&
                seletedPokemon &&
                strengthsList
                  ?.filter(
                    (item) =>
                      head(item) ===
                      get(PokemonType, `${seletedPokemon?.type[0]}`),
                  )
                  .map((item) => (
                    <GraphCycle
                      cycle={item}
                      type={get(PokemonType, `${seletedPokemon?.type[0]}`)}
                      pokemon={seletedPokemon}
                    />
                  )) &&
                strengthsList
                  ?.filter(
                    (item) =>
                      head(item) ===
                      get(PokemonType, `${seletedPokemon?.type[1]}`),
                  )
                  .map((item) => (
                    <GraphCycle
                      cycle={item}
                      type={get(PokemonType, `${seletedPokemon?.type[1]}`)}
                      pokemon={seletedPokemon}
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
