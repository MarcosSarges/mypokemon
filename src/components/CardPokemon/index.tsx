import axios from 'axios';
import React, {useCallback, useEffect, useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import Styles from './styles';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../routes/RootStack.router';
import IPokemon from '../../typing/IPokemon';

const CardPokemon: React.FC<{url: string}> = ({url}) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const [pokemon, setPokemon] = useState<null | IPokemon>(null);

  const getPokemon = useCallback(async () => {
    const {data} = await axios.get(url);
    setPokemon({
      name: data.name,
      sprit: data.sprites.front_default,
    });
  }, [url]);

  useEffect(() => {
    getPokemon();
  }, [getPokemon]);

  if (!pokemon) {
    return (
      <View>
        <Text>LOADING...</Text>
      </View>
    );
  }

  return (
    <TouchableOpacity
      style={Styles.card}
      onPress={() => {
        navigation.navigate('Pokemon', {
          pokemon,
        });
      }}>
      <Image source={{uri: pokemon.sprit}} style={Styles.imgPokemon} />
      <Text style={Styles.text}>{pokemon.name}</Text>
    </TouchableOpacity>
  );
};

export default CardPokemon;
