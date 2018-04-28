import { createStore, combineReducers, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"
import { reactReduxFirebase, getFirebase } from "react-redux-firebase"
import { reduxFirestore, getFirestore } from "redux-firestore"
import firebase from "firebase"
import "firebase/firestore"

import reducers from "reducers"

import {
  apiKey,
  authDomain,
  databaseURL,
  projectId,
  storageBucket,
  messagingSenderId
} from "react-native-dotenv"

const firebaseConfig = {
  apiKey,
  authDomain,
  databaseURL,
  projectId,
  storageBucket,
  messagingSenderId
}

// react redux firebase config
const rrfConfig = {
  userProfile: "users"
}

// initialize firebase & firestore instance
firebase.initializeApp(firebaseConfig)
firebase.firestore()

export default (preloadedState = {}) => {
  const rootReducer = combineReducers(reducers)

  const devMiddlewares = [
    require("redux-immutable-state-invariant").default(),
    require("redux-logger").default
  ]

  const prodMiddlewares = [
    thunk.withExtraArgument({ getFirebase, getFirestore })
  ]

  const createStoreWithMiddleware = composeWithDevTools(
    reactReduxFirebase(firebase, rrfConfig),
    reduxFirestore(firebase),
    applyMiddleware(...prodMiddlewares, ...(__DEV__ && devMiddlewares))
  )(createStore)

  return createStoreWithMiddleware(rootReducer, preloadedState)
}
