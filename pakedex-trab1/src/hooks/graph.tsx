import React, { createContext, useContext, useEffect, useState } from 'react';
import { fill, get } from 'lodash';
import { PokemonType, PokemonTypeConnect } from '../common';
import { findCircuits } from './algorithmJohnson.js';

interface GraphContextData {
  matrix: number[][];
}

const GraphContext = createContext<GraphContextData>({} as GraphContextData);

const GraphProvider: React.FC = ({ children }) => {
  const [matrix, setMatrix] = useState<number[][]>({} as number[][]);

  useEffect(() => {
    // TODO: construindo matriz de adjacência e definindo peso nas arestas do grafo.
    const matrixTemp = PokemonTypeConnect.map((item) => {
      const rowMatrix = fill(Array(PokemonTypeConnect.length), 1);
      item.weaknesses.forEach((element) => {
        rowMatrix[get(PokemonType, `${element}`)] = 0.5;
      });

      item.strengths.forEach((element) => {
        rowMatrix[get(PokemonType, `${element}`)] = 2;
      });

      item.immunes.forEach((element) => {
        rowMatrix[get(PokemonType, `${element}`)] = 0;
      });

      return rowMatrix;
    });

    // console.log(matrixTemp);
    setMatrix(matrixTemp);

    const adjacencyList = [[1], [2], [3], [0]];

    console.log(findCircuits(adjacencyList));
  }, []);

  return (
    <GraphContext.Provider
      value={{
        matrix,
      }}
    >
      {children}
    </GraphContext.Provider>
  );
};

function useGraph(): GraphContextData {
  const context = useContext(GraphContext);

  if (!context) {
    throw new Error('useGraph must be user within  an AuthProviver');
  }

  return context;
}

export { GraphContext, GraphProvider, useGraph };
