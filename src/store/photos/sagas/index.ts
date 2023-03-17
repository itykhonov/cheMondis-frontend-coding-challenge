import { SagaIterator } from 'redux-saga';
import { fork } from 'redux-saga/effects';
import { getPhotosWatcher } from './getPhotos/watcher';

export function* photosRootSaga(): SagaIterator {
  yield fork(getPhotosWatcher);
}
