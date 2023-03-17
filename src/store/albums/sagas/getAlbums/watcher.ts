import { takeEvery } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import { GET_ALBUMS_REQUEST } from '../../actionTypes';
import { getAlbumsWorker } from './worker';

export function* getAlbumsWatcher(): SagaIterator {
  yield takeEvery(GET_ALBUMS_REQUEST, getAlbumsWorker);
}
