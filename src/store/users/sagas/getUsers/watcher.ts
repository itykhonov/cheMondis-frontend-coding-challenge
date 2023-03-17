import { takeEvery } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import { GET_USERS_REQUEST } from '../../actionTypes';
import { getUsersWorker } from './worker';

export function* getUsersWatcher(): SagaIterator {
  yield takeEvery(GET_USERS_REQUEST, getUsersWorker);
}
