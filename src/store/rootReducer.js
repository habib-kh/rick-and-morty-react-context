import { combineReducers } from 'redux';
import charactersReducer from './reducers/characters';
import profileReducer from './reducers/profile';
import episodesReducer from './reducers/episodes';
import originReducer from './reducers/origin';
import locationReducer from './reducers/location';

const rootReducer = combineReducers({
  characters: charactersReducer,
  profile: profileReducer,
  episodes: episodesReducer,
  location: locationReducer,
  origin: originReducer,
});

export default rootReducer;
