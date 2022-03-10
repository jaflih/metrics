import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

import symbolsReducer from './symbols/symbols';

const reducer = combineReducers({
  symbolsReducer,
});

const store = createStore(reducer, composeWithDevTools(applyMiddleware(logger, thunk)));

export default store;
