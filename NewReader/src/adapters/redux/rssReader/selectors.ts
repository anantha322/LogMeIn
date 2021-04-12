import {AppState} from 'react-native';
import {get} from 'lodash';
import {RssNewsType} from '.';

export const getRssNewsSelector = (state: AppState): RssNewsType[] => {
  return get(state, 'news.rssNewsList', []);
};
