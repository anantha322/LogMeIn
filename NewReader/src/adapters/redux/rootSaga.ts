import {takeLatest, all} from 'redux-saga/effects';
import {getRssNews, GET_RSS_NEWS_REQUEST} from './rssReader';

export default function* root() {
  yield all([takeLatest(GET_RSS_NEWS_REQUEST, getRssNews)]);
}
