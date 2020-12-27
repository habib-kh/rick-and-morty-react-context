import React, { createContext, useContext, useReducer } from 'react';

const episodeDispatchContext = createContext(null);
const episodeStateContext = createContext(null);

const useEpisodeDispatchContext = () => {
  const context = useContext(episodeDispatchContext);
  if (context === undefined) {
    throw new Error('shuld be a value');
  }
  return context;
};

const useEpisodeStateContext = () => {
  const context = useContext(episodeStateContext);
  if (context === undefined) {
    throw new Error('shuld be a value');
  }
  return context;
};

const useEpisode = () => {
  return [useEpisodeDispatchContext(), useEpisodeStateContext()];
};

const initialState = {
  loading: true,
  episodes: [],
};

const episodeReducer = (state, action) => {
  switch (action.type) {
    case 'get':
      return {
        ...state,
        episodes: action.payload,
      };
    case 'loading':
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};

const EpisodeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(episodeReducer, initialState);
  return (
    <episodeDispatchContext.Provider value={dispatch}>
      <episodeStateContext.Provider value={state}>
        {children}
      </episodeStateContext.Provider>
    </episodeDispatchContext.Provider>
  );
};

export { EpisodeProvider, useEpisode };
