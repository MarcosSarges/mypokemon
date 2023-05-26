import {Dimensions, StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
  card: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    width: Dimensions.get('window').width - 40,
    backgroundColor: '#FFF',
    marginBottom: 10,
    shadowColor: '#999',
    shadowOffset: {width: 1, height: 1},
    shadowRadius: 10,
    shadowOpacity: 0.5,
    alignItems: 'center',
    flexDirection: 'row',
  },
  imgPokemon: {
    height: 100,
    width: 100,
  },
  text: {
    fontSize: 40,
  },
});

export default Styles;
