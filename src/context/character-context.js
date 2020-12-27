import React, { createContext, useContext, useReducer } from 'react';
import api from '../services/api';

const characterDispatchContext = createContext(null);
const characterStateContext = createContext(null);

const useCharacterDispatch = () => {
  const context = useContext(characterDispatchContext);
  if (context === undefined) {
    throw new Error('it should have a value');
  }
  return context;
};

const useCharacterState = () => {
  const context = useContext(characterStateContext);
  if (context === undefined) {
    throw new Error('it should have a value');
  }
  return context;
};

const useCharacter = () => {
  return [useCharacterState(), useCharacterDispatch()];
};

const initialState = {
  loading: true,
  characters: [],
};

const characterReducer = (state, action) => {
  switch (action.type) {
    case 'loading':
      return {
        ...state,
        loading: action.payload,
      };
    case 'get':
      return {
        ...state,
        characters: action.payload,
      };
    default:
      return state;
  }
};

const CharacterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(characterReducer, initialState);
  return (
    <characterDispatchContext.Provider value={dispatch}>
      <characterStateContext.Provider value={state}>
        {children}
      </characterStateContext.Provider>
    </characterDispatchContext.Provider>
  );
};

const getCharacters = async (dispatch) => {
  dispatch({ type: 'loading', payload: true });
  const apiData = await api.get('character/');
  const characters = apiData.data.results;
  dispatch({ type: 'get', payload: characters });
  dispatch({ type: 'loading', payload: false });
};

export { getCharacters, CharacterProvider, useCharacter };
