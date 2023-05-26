import axios from 'axios';
import IListPokemons from '../typing/TListPokemons';

type TResultGetAllPokemons = {
  result: IListPokemons;
};
const getAllPokemons = () =>
  axios
    .get<TResultGetAllPokemons>('https://pokeapi.co/api/v2/pokemon/')
    .then(result => result.data);

export default getAllPokemons;
