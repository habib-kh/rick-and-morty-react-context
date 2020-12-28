import React, { createContext, useContext, useReducer } from 'react';
import api from '../services/api';

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

const getEpisodes = async (dispatch, episodes) => {
  dispatch({ type: 'loading', payload: true });
  const apiData = await api.get(
    `episode/${episodes.map((episode) => episode.split('episode/')[1])}`,
  );
  if (Array.isArray(apiData.data)) {
    const episodesList = apiData.data;
    dispatch({ type: 'set', payload: episodesList });
  } else {
    const episodesList = apiData.data;
    dispatch({ type: 'set', payload: [episodesList] });
  }
  dispatch({ type: 'loading', payload: false });
};

export { EpisodeProvider, useEpisode, getEpisodes };
