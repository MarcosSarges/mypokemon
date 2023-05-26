import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import Pokemon from '../screens/Pokemon';

const Stack = createStackNavigator();

export type RootStackParamList = {
  Home: undefined;
  Pokemon: {pokemon: any};
};

function RootStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Pokemon" component={Pokemon} />
    </Stack.Navigator>
  );
}

export default RootStack;
