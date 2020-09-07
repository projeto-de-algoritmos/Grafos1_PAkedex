import React, { createContext, useContext } from 'react';

interface GraphContextData {
  signOut(): void;
}

const GraphContext = createContext<GraphContextData>({} as GraphContextData);

const GraphProvider: React.FC = ({ children }) => {};

function useGraph(): GraphContextData {
  const context = useContext(GraphContext);

  if (!context) {
    throw new Error('useGraph must be user within  an AuthProviver');
  }

  return context;
}

export { GraphContext, GraphProvider, useGraph };
