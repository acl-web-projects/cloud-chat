import { createStore, compose, applyMiddleware } from 'redux'
import { reduxFirestore, getFirestore } from 'redux-firestore'
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase'
import thunk from 'redux-thunk'
import firebaseConfig from 'config/firebase'

import reducers from './ducks'

// const composer =
//   process.env.NODE_ENV === 'development'
//     ? compose(
//       applyMiddleware(thunk),
//       console.tron.createEnhancer()
//     )
//     : compose(applyMiddleware(thunk))

const store = createStore(
  reducers,
  compose(
    applyMiddleware(
      thunk.withExtraArgument({
        getFirebase,
        getFirestore
      })
    ),
    reduxFirestore(firebaseConfig),
    reactReduxFirebase(firebaseConfig)
  )
)

export default store
