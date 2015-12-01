import * as types from './action-types';
import {filter} from 'lodash';

var initialTimeState = {
  pokemonDataBase: [],
  pokemonResultSearch: [],
  currentPokemonData: {},
  isLoading: false
};

export default function (state = initialTimeState, action) {

  switch (action.type) {

    case types.LOAD_POKEDEX_DATA_REQUEST:
    case types.LOAD_POKEMON_DATA_REQUEST:
    case types.SEARCH_POKEMON_DATA_REQUEST:
      return {...state, isLoading: true};
      break;

    case types.SEARCH_POKEMON_DATA_SUCCESS:
      const pokemonResultSearch = filter(state.pokemonDataBase, pokemon => {
        return pokemon.name.search(action.result) !== -1;
      });
      return {...state, pokemonResultSearch, isLoading: false};
      break;

    case types.LOAD_POKEDEX_DATA_SUCCESS:
      return {...state, pokemonDataBase: action.result.data.pokemon, isLoading: false};
      break;

    case types.LOAD_POKEMON_DATA_SUCCESS:
      const currentPokemonData = action.result.data;
      return {...state, currentPokemonData, isLoading: false};
      break;

    default:
      return state;
  }
};