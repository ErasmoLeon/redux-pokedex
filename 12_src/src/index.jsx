import React from 'react'
import { render } from 'react-dom'
import createStore from './create-store'
import Application from './components/Application'

const store = createStore();

render(
  <Application store={store} />,
  document.getElementById('app-wrapper')
);