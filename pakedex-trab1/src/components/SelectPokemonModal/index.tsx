import React, { useState, useEffect } from 'react';

import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import { get } from 'lodash';
import GraphCycle from '../GraphCycle';
import { Pokemons } from '../../common';
import {
  Container,
  Column,
  Divider,
  PokeRow,
  PokeDisplay,
  PokeTitle,
} from './styles';

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
  const [seletedPokemon, setSeletedPokemon] = useState<Pokemon>({} as Pokemon);
  const pokemon: Pokemon[] = Pokemons;

  function handleClick(item: Pokemon): void {
    console.log(item);
    setSeletedPokemon(item);
  }

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
              <GraphCycle />
            </Column>
          </Container>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default SelectPokemonModal;
