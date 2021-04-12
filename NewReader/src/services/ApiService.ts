// import {API_END_POINT, API_KEY} from './ApiDetails';
import * as rssParser from 'react-native-rss-parser';

const apiGetRequest = async () => {
  try {
    return await fetch('http://www.nasa.gov/rss/dyn/breaking_news.rss')
      .then(response => response.text())
      .then(responseData => rssParser.parse(responseData))
      .then(rss => {
        return {
          ...rss,
          success: true,
        };
      })
      .catch(error => {
        return {
          error: true,
          errorDetail: error,
        };
      });
  } catch (e) {
    return {
      error: true,
      errorDetail: e,
    };
  }
};

export default {apiGetRequest};
