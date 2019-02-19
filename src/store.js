import { createStore, applyMiddleware, combineReducers } from 'redux';
import { apiMiddleware } from 'redux-api-middleware';
import reducers from './reducers';

const reducer = combineReducers(reducers);
const createStoreWithMiddleware = applyMiddleware(apiMiddleware)(createStore);

function configureStore(initialState) {
  return createStoreWithMiddleware(reducer, initialState);
}

const initialState = {}

const store = configureStore(initialState);
export default store;