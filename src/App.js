import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import { Home, Profile } from './pages';
import { CharacterProvider } from './context/character-context';

export default function App() {
  return (
    // <Provider store={store}>
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/profile/:id' exact component={Profile} />
        </Switch>
      </BrowserRouter>
      {/* // </Provider> */}
    </Provider>
  );
}
