const pokemonDataBase = [
  {
    "name": "rattata",
    "resource_uri": "api/v1/pokemon/19/"
  },
  {
    "name": "charmander",
    "resource_uri": "api/v1/pokemon/4/"
  },
  {
    "name": "charmeleon",
    "resource_uri": "api/v1/pokemon/5/"
  },
  {
    "name": "wartortle",
    "resource_uri": "api/v1/pokemon/8/"
  }
];

let poquedexReducer = function (state = {}, action) {
  if (action.type === 'LOAD_POKEMONS_DATABASE') {
    return {pokemonDataBase};
  }
};

import { createStore } from 'redux';

var poquedex_store = createStore(poquedexReducer);

poquedex_store.dispatch({
  type: 'LOAD_POKEMONS_DATABASE'
});

console.log(poquedex_store.getState());