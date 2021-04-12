import {NewsState} from './types';
import {RSS_NEWS_INITIAL_STATE} from './state';
import {
  GET_RSS_NEWS_FAILURE,
  GET_RSS_NEWS_REQUEST,
  GET_RSS_NEWS_SUCCESS,
} from './constants';

export const rssNewsReducer: (state: any, action: any) => NewsState = (
  state = RSS_NEWS_INITIAL_STATE,
  action,
) => {
  const {payload} = action;
  switch (action.type) {
    case GET_RSS_NEWS_REQUEST:
      return {...state, loading: true, error: null};
    case GET_RSS_NEWS_SUCCESS:
      return {...state, rssNewsList: payload, loading: false};
    case GET_RSS_NEWS_FAILURE:
      return {...state, loading: false, error: payload};
    default:
      return state;
  }
};
