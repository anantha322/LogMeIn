import { Alert } from 'react-native';
import {call} from 'redux-saga/effects';
import {BaseAction} from '..';
import {GetRssNewsInteractor} from '../../../../useCase/getRssNewsInteractor';

export function* getRssNews(
  action: BaseAction,
  getRssNewsInteractor?: GetRssNewsInteractor,
) {
  if (!getRssNewsInteractor) {
    getRssNewsInteractor = new GetRssNewsInteractor();
  }
  yield call([getRssNewsInteractor, 'execute']);
}
