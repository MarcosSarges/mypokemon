import React, {useCallback, useEffect, useState} from 'react';

import {FlatList} from 'react-native';
import CardPokemon from '../../components/CardPokemon';
import getAllPokemons from '../../services/getAllPokemons';
import TListPokemons from '../../typing/TListPokemons';
import Styles from './styles';

const Home = () => {
  const [pokemons, setPokemons] = useState<TListPokemons>();

  const bootstrap = useCallback(async () => {
    const response = await getAllPokemons();
    setPokemons(response.result);
  }, []);

  useEffect(() => {
    bootstrap();
  }, [bootstrap]);

  return (
    <FlatList
      data={pokemons}
      renderItem={({item}) => {
        return <CardPokemon url={item.url} />;
      }}
      contentContainerStyle={Styles.container}
    />
  );
};

export default Home;
