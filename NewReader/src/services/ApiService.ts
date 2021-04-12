import * as rssParser from 'react-native-rss-parser';
const RSS_FEED_URL = 'http://www.nasa.gov/rss/dyn/breaking_news.rss';
const apiGetRequest = async () => {
  try {
    return await fetch(RSS_FEED_URL)
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
