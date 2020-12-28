import React, { createContext, useContext, useReducer } from 'react';
import api from '../services/api';

const profileDispatchContext = createContext(null);
const profileStateContext = createContext(null);

const useProfileDispatchContext = () => {
  const context = useContext(profileDispatchContext);
  if (context === undefined) {
    throw new Error('it should have a value');
  }
  return context;
};

const useProfileStateContext = () => {
  const context = useContext(profileStateContext);
  if (context === undefined) {
    throw new Error('it should have a value');
  }
  return context;
};

const useProfile = () => {
  return [useProfileStateContext(), useProfileDispatchContext];
};

const initialState = {
  loading: true,
  profile: {},
};

const profileReducer = (state, action) => {
  switch (action.type) {
    case 'get':
      return {
        ...state,
        profile: action.payload,
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

const ProfileProvider = ({ children }) => {
  const [state, dispatch] = useReducer(profileReducer, initialState);
  return (
    <profileDispatchContext.Provider value={dispatch}>
      <profileStateContext.Provider value={state}>
        {children}
      </profileStateContext.Provider>
    </profileDispatchContext.Provider>
  );
};

const getProfile = async (dispatch, profileId) => {
  dispatch({ type: 'loading', payload: false });
  const apiData = await api.get(`character/${profileId}`);
  const profile = apiData.data;
  dispatch({ type: 'set', payload: profile });
  dispatch({ type: 'loading', payload: false });
};

export { useProfile, ProfileProvider, getProfile };
