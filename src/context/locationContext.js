import React, { createContext, useContext, useReducer } from 'react';

const locationDispatchContext = createContext(null);
const locationStateContext = createContext(null);

const useLocationDispatchContext = () => {
  const context = useContext(locationDispatchContext);
  if (context === undefined) {
    throw new Error('there must be a value');
  }
};

const useLocationStateContext = () => {
  const context = useContext(locationStateContext);
  if (context === undefined) {
    throw new Error('it should have a value');
  }
  return context;
};

const useLocation = () => {
  return [useLocationStateContext(), useLocationDispatchContext()];
};

const initialState = {
  loading: true,
  location: {},
};

const locationReducer = (state, action) => {
  switch (action.type) {
    case 'get':
      return {
        ...state,
        location: action.payload,
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

const locationProvider = ({ children }) => {
  const [state, dispatch] = useReducer(locationReducer, initialState);
  return (
    <locationDispatchContext.Provider value={dispatch}>
      <locationStateContext.Provider value={state}>
        {children}
      </locationStateContext.Provider>
    </locationDispatchContext.Provider>
  );
};

export { locationProvider, useLocation };
