import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import promiseMiddleware from 'redux-promise-middleware'
import userReducer from './dux/userReducer'
import productsReducer from './dux/productsReducer'

const rootReducer = combineReducers({
  user: userReducer,
  products: productsReducer
})

export default createStore(rootReducer, composeWithDevTools(applyMiddleware(promiseMiddleware)))