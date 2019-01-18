import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'
import rootReducer from './modules'

import createSagaMiddleware from 'redux-saga'

export const history = createHistory()

const initialState = {}
const enhancers = []
const middleware = [
  thunk,
  createSagaMiddleware()
]

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
)

const store = createStore(
  initialState,
  rootReducer,
  composedEnhancers
)

export default store