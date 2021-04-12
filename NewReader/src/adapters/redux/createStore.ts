import createSagaMiddleware from 'redux-saga';
import {createStore, applyMiddleware, compose, Action, Reducer} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

export default (rootReducer: Reducer<unknown, Action<any>>, rootSaga: any) => {
  const middleware = [];
  const enhancers = [];

  const sagaMiddleware = createSagaMiddleware({});

  middleware.push(sagaMiddleware);
  enhancers.push(applyMiddleware(...middleware));

  const persistConfig = {
    key: 'root',
    storage: storage,
    stateReconciler: autoMergeLevel2,
  };

  const pReducer = persistReducer(persistConfig, rootReducer);
  const store = {
    ...createStore(pReducer, compose(...enhancers)),
    runSaga: sagaMiddleware.run,
  };
  const persistor = persistStore(store);

  const sagaManager = sagaMiddleware.run(rootSaga);

  return {
    store,
    sagaManager,
    sagaMiddleware,
    persistor,
  };
};
