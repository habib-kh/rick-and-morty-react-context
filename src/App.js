import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import { Home, Profile } from './pages';
import { CharacterProvider } from './context/character-context';
import { ProfileProvider } from './context/profileContext';
import { EpisodeProvider } from './context/episodeContext';
import { LocationProvider } from './context/locationContext';

export default function App() {
  return (
    // <Provider store={store}>
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={HomeComponent} />
          <Route path='/profile/:id' exact component={ProfileComponent} />
        </Switch>
      </BrowserRouter>
      {/* // </Provider> */}
    </Provider>
  );
}

const HomeComponent = () => {
  return (
    <CharacterProvider>
      <Home />
    </CharacterProvider>
  );
};

const ProfileComponent = () => {
  return (
    <ProfileProvider>
      <EpisodeProvider>
        <LocationProvider>
          <Profile />
        </LocationProvider>
      </EpisodeProvider>
    </ProfileProvider>
  );
};
