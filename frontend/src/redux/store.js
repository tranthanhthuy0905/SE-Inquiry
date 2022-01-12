import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import textReducer from './PreviewText/PreviewTextReducer';

const store = createStore(
    textReducer,
    composeWithDevTools(applyMiddleware(logger, thunk))
)

console.log('state', store.getState());
export default store