import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import symbolsReducer from './symbols/symbols';

const reducer = combineReducers({
  symbolsReducer,
});

const store = createStore(reducer, applyMiddleware(logger, thunk));

export default store;
