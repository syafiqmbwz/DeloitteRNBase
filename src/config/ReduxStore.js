import {createStore, applyMiddleware, compose} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import createSagaMiddleware from 'redux-saga';

import reduxReducer from '../reducers/index';
import reduxSaga from './ReduxSaga';
import ReduxPersist from './ReduxPersist';

let finalReducers = reduxReducer;
if (ReduxPersist.active) {
  const persistConfig = ReduxPersist.storeConfig;
  finalReducers = persistReducer(persistConfig, reduxReducer);
}

const sagaMiddleware = createSagaMiddleware();
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = [sagaMiddleware];

const reduxStore = createStore(
  finalReducers,
  composeEnhancer(applyMiddleware(...middlewares)),
);

export const persistor = persistStore(reduxStore);
sagaMiddleware.run(reduxSaga);

export const store = reduxStore;
