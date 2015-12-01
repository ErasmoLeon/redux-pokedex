import React, {Component} from 'react'
import { connect } from 'react-redux'
import {
  searchPokemonsAction,
  loadPokemonAction,
  loadPokedexDatabaseAction
} from './../action-creators'

import PokemonSheet from './PokemonSheet.jsx';

@connect((state) => {
  return {state}
}) class Pokedex extends Component {

  componentDidMount() {
    this.props.dispatch(loadPokedexDatabaseAction());
  }

  render() {
    const {state, dispatch } = this.props;
    const {currentPokemonData, pokemonResultSearch, isLoading} = state.default;
    const opacity = isLoading ? 0.3 : 1;
    return (
      <div style={{opacity}}>
        <h2>POKEDEX</h2>
        {Object.keys(currentPokemonData).length > 0 ? <PokemonSheet data={currentPokemonData}/> : null}
        <br/>
        <input ref="search" type="search" placeholder="Search…"/>
        <button onClick={()=>{dispatch(searchPokemonsAction(this.refs.search.value))}}>
          Search
        </button>
        <br/>
        {pokemonResultSearch.map((pokemon, key) => {
          return (
            <div key={key}>
              <button style={{width:'100%'}}
                      onClick={()=>{dispatch(loadPokemonAction(pokemon.resource_uri))}}>
                {pokemon.name}
              </button>
            </div>);
        })}
      </div>
    )
  }
}

export default Pokedex;


