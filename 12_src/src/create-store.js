import { createStore, applyMiddleware, combineReducers } from 'redux'

import axiosPromiseMiddleware from './promise-middleware'

import * as reducers from './reducers'

export default function (data) {
  var reducer = combineReducers(reducers);
  var finalCreateStore = applyMiddleware(axiosPromiseMiddleware)(createStore);
  return finalCreateStore(reducer, data);
}