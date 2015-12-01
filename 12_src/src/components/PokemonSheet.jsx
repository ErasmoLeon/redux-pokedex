import React,{Component} from 'react';

export default class PokemonSheet extends Component {
  render() {
    let img;
    const {name, attack, defense, abilities, sprites} = this.props.data;
    const abilitiesTable = abilities.map((ability, key)=> {
      return <li key={key}>{ability.name}</li>;
    });
    if (sprites[0]) {
      const crapImgUrlSegments = sprites[0].resource_uri.split('/');
      const pseudoImageName = (parseInt(crapImgUrlSegments[4], 10) - 1);
      img = <img src={`http://pokeapi.co/media/img/${pseudoImageName}.png`}/>;
    }
    return (
      <div style={{border:'1px dotted grey', padding: '10px'}}>
        <h3>Name: {name}</h3>
        {img}
        <hr/>
        <label>Attack: {attack}</label>
        <hr/>
        <label>Defense: {defense}</label>
        <hr/>
        <label>Abilities: </label>
        <ul>{abilitiesTable}</ul>
      </div>
    );
  }
}

