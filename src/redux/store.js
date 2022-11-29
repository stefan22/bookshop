import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { booksReducer } from './reducers/booksReducer'

const initialState = {}
const middlewares = [thunk]

const composeWithDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const composedEnhancers = composeWithDevTools(
  applyMiddleware(...middlewares)
)

const store = createStore(
  booksReducer,
  initialState,
  composedEnhancers
)

export default store
