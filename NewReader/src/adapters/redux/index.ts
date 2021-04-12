import {combineReducers} from 'redux';
import configureStore from './createStore';
import {rssNewsReducer} from './rssReader';
import rootSaga from './rootSaga';

export const reducers = combineReducers({
  news: rssNewsReducer,
});
const rootReducer = (state: any, action: any) => {
  return reducers(state, action);
};

export default () => {
  const {store, persistor, sagaMiddleware} = configureStore(
    rootReducer,
    rootSaga,
  );

  return {store, persistor, sagaMiddleware};
};
