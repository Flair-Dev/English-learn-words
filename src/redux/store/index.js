import {createStore, applyMiddleware} from 'redux';
import {enableBatching, batchDispatchMiddleware} from 'redux-batched-actions';
import createSagaMiddleware from 'redux-saga';
import reducer from '../reducers';
import {persistStore, persistReducer, createTransform} from 'redux-persist';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootSaga from '../sagas';
import storage from '@react-native-community/async-storage';

const clearReducerTransform = createTransform(
  () => {
    return [];
  },
  () => {
    return [];
  },
  {whitelist: ['loadings', 'errors']},
);

const persistConfig = {
  key: 'root',
  storage,
  transforms: [
    clearReducerTransform,
  ],
};

const persistedReducer = persistReducer(persistConfig, enableBatching(reducer));

const sagaMiddleware = createSagaMiddleware();

export const configureStore = (cb: ?() => void) => {
  const store = createStore(
    persistedReducer,
    composeWithDevTools(
      applyMiddleware(
        sagaMiddleware,
        batchDispatchMiddleware,
      ),
    ),
  );

  persistStore(store, null, () => {
    if (typeof cb === 'function') {
      cb();
    }
  });

  sagaMiddleware.run(rootSaga);

  return store;
};
