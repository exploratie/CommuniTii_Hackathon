import { createStore, combineReducers, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"

import reducers from "reducers"

export default (preloadedState = {}) => {
  const rootReducer = combineReducers(reducers)

  const devMiddlewares = [
    require("redux-immutable-state-invariant").default(),
    require("redux-logger").default
  ]

  const prodMiddlewares = []

  const createStoreWithMiddleware = composeWithDevTools(
    applyMiddleware(...prodMiddlewares, ...(__DEV__ && devMiddlewares))
  )(createStore)

  return createStoreWithMiddleware(rootReducer, preloadedState)
}
