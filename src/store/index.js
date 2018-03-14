import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import reducers from '../reducers';
import promise from 'redux-promise';

const createStoreWithMiddleware = applyMiddleware(logger, promise)(createStore);

const store = createStoreWithMiddleware(reducers);

export default store;