import ApiService from '../services/ApiService';
import {call, put} from 'redux-saga/effects';
import {RssNewsType} from '../entities/RssNewsType';

import {get} from 'lodash';
import {
  getRssNewsFailure,
  getRssNewsSuccess,
} from '../adapters/redux/rssReader';
export interface GetRssNewsInteractorInput {}

export class GetRssNewsInteractor {
  public constructor() {}
  public *execute(): Generator<any, void, any> {
    try {
      const result = yield call(ApiService.apiGetRequest);
      console.log(result);
      if (get(result, 'success', false)) {
        const formattedResponse = RssNewsType.createAttributesFromResponse(
          result,
        );
        console.log(formattedResponse);
        yield put(getRssNewsSuccess(formattedResponse));
      } else {
        getRssNewsFailure({error: true, errorMessage: 'Something went wrong'});
      }
    } catch (e) {
      console.log(e);
      getRssNewsFailure({error: true, errorMessage: 'Something went wrong'});
    }
  }
}
