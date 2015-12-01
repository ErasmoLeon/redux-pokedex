import axios from 'axios';
import * as types from './action-types';

export function loadPokedexDatabaseAction() {
  return {
    types: [
      types.LOAD_POKEDEX_DATA_REQUEST,
      types.LOAD_POKEDEX_DATA_SUCCESS,
      types.LOAD_POKEDEX_DATA_FAIL
    ],
    promise: axios.get('http://pokeapi.co/api/v1/pokedex/1/')
  };
}

export function searchPokemonsAction(inputText) {
  return {
    types: [
      types.SEARCH_POKEMON_DATA_REQUEST,
      types.SEARCH_POKEMON_DATA_SUCCESS,
      types.SEARCH_POKEMON_DATA_FAIL
    ],
    promise: new Promise(resolve => {
      resolve(inputText);
    })
  };
}

export function loadPokemonAction(resource_uri) {
  return {
    types: [
      types.LOAD_POKEMON_DATA_REQUEST,
      types.LOAD_POKEMON_DATA_SUCCESS,
      types.LOAD_POKEMON_DATA_FAIL
    ],
    promise: axios.get(`http://pokeapi.co/${resource_uri}`)
  };
}