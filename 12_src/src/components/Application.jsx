import React from 'react'
import Pokedex from './Pokedex'
import { Provider } from 'react-redux'

export default class Application extends React.Component {
  render () {
    return (
      <Provider store={ this.props.store }>
        <Pokedex />
      </Provider>
    )
  }
}
