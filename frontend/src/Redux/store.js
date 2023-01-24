import { legacy_createStore, combineReducers, compose } from 'redux'

import { cartReducer } from './redux'

const rootReducer = combineReducers({
    cart: cartReducer
})

const composer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = legacy_createStore(rootReducer, composer())