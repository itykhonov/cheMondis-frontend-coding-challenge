import { takeEvery } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import { GET_PHOTOS_REQUEST } from '../../actionTypes';
import { getPhotosWorker } from './worker';

export function* getPhotosWatcher(): SagaIterator {
  yield takeEvery(GET_PHOTOS_REQUEST, getPhotosWorker);
}
