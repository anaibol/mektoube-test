import { createStore, applyMiddleware, compose } from 'redux'
import createHistory from 'history/createBrowserHistory'
import {
  createHistory
} from "@reach/router"
import rootReducer from './modules'

import createSagaMiddleware from 'redux-saga'

import saga from '../sagas'

const sagaMiddleware = createSagaMiddleware()

const initialState = {}

const enhancers = []
const middleware = [
  sagaMiddleware
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
  rootReducer,
  initialState,
  composedEnhancers
)

sagaMiddleware.run(saga)

export default store