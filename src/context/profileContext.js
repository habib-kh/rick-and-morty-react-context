import React, { createContext, useContext, useReducer } from 'react';

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

const profileProvider = ({ children }) => {
  const [state, dispatch] = useReducer(profileReducer, initialState);
  return (
    <profileDispatchContext.Provider value={dispatch}>
      <profileStateContext.Provider value={state}>
        {children}
      </profileStateContext.Provider>
    </profileDispatchContext.Provider>
  );
};

export { useProfile, profileProvider };
