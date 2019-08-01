import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

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
      thunk
    ),
  )
)

export default store
