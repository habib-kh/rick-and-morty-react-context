import React, { createContext, useContext, useReducer } from 'react';
import api from '../services/api';

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

const LocationProvider = ({ children }) => {
  const [state, dispatch] = useReducer(locationReducer, initialState);
  return (
    <locationDispatchContext.Provider value={dispatch}>
      <locationStateContext.Provider value={state}>
        {children}
      </locationStateContext.Provider>
    </locationDispatchContext.Provider>
  );
};

const getLocation = async (dispatch, locationURL) => {
  dispatch({ type: 'loading', payload: true });
  const apiData = await api.get(
    `location/${locationURL.split('location/')[1]}`,
  );
  const location = apiData.data;
  dispatch({ type: 'set', payload: location });
  dispatch({ type: 'loading', payload: false });
};

export { LocationProvider, useLocation, getLocation };
