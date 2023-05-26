import {RouteProp, useRoute} from '@react-navigation/native';
import React from 'react';
import {Text} from 'react-native';
import {RootStackParamList} from '../../routes/RootStack.router';

const Pokemon = () => {
  const {params} = useRoute<RouteProp<RootStackParamList>>();

  return <Text>{params?.pokemon?.nome}</Text>;
};

export default Pokemon;
