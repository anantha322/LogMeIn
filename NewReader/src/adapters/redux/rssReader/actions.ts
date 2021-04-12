import {
  GET_RSS_NEWS_FAILURE,
  GET_RSS_NEWS_REQUEST,
  GET_RSS_NEWS_SUCCESS,
  GetRssNewsFailure,
  GetRssNewsRequest,
  GetRssNewsSuccess,
} from '.';

export const getRssNewsRequest: () => GetRssNewsRequest = () => ({
  type: GET_RSS_NEWS_REQUEST,
});

export const getRssNewsSuccess: (payload: any) => GetRssNewsSuccess = (
  payload: any,
) => ({
  type: GET_RSS_NEWS_SUCCESS,
  payload,
});

export const getRssNewsFailure: (payload: any) => GetRssNewsFailure = (
  payload: any,
) => ({
  type: GET_RSS_NEWS_FAILURE,
  payload,
});
