import React from 'react';

import { useEffect } from '../hooks/useEffect';
import { useDispatch, useSelector } from 'react-redux';
import { getCharacters } from '../store/actions';
import { CharacterList, Layout } from '../components';
// import { useCharacter, getCharacters } from '../context/character-context';

export default function Home({ match }) {
  // const [state, dispatch] = useCharacter();
  // const { characters, loading } = state;
  // console.log(state);
  const loading = useSelector((state) => state.characters.loading);
  const characters = useSelector((state) => state.characters.characters);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCharacters());
  }, []);

  return (
    <Layout
      loading={loading}
      title='The Rick and Morty'
      desc='In this site we show you more information about Rick & Morty'
    >
      <CharacterList characters={characters} />
    </Layout>
  );
}
